import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const destinationDir = join("src", "content", "destinations");
const apiBase = "https://api.openverse.org/v1/images/";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getField = (source, name) => {
  const match = source.match(new RegExp(`^${name}:\\s*"(.+)"$`, "m"));
  return match?.[1] ?? "";
};

const setField = (source, name, value) => {
  const escaped = value.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
  const pattern = new RegExp(`^${name}:\\s*".*"$`, "m");
  const line = `${name}: "${escaped}"`;
  return pattern.test(source) ? source.replace(pattern, line) : source.replace(/^bestTime:/m, `${line}\nbestTime:`);
};

const licenseLabel = (license, version) => {
  if (!license) return "open license";
  const normalized = license.toUpperCase().replaceAll("-", " ");
  return version ? `${normalized} ${version}` : normalized;
};

const isUsableImage = (result) => {
  if (!result?.url?.startsWith("https://")) return false;
  if (!/\.(jpe?g|png|webp)(\?|$)/i.test(result.url)) return false;
  return Boolean(result.foreign_landing_url && result.license_url);
};

const fetchImage = async (queries) => {
  for (const query of queries) {
    const params = new URLSearchParams({
      q: query,
      license_type: "commercial",
      page_size: "20",
      mature: "false"
    });

    const response = await fetch(`${apiBase}?${params}`, {
      headers: {
        "User-Agent": "50beautifulplaces static site image updater"
      }
    });

    if (!response.ok) {
      throw new Error(`Openverse returned ${response.status} for ${query}`);
    }

    const data = await response.json();
    const image = data.results.find(isUsableImage);
    if (image) return image;
    await sleep(125);
  }

  return undefined;
};

const files = (await readdir(destinationDir)).filter((file) => file.endsWith(".md")).sort();
let updated = 0;

for (const file of files) {
  const path = join(destinationDir, file);
  let source = await readFile(path, "utf8");
  const title = getField(source, "title");
  const country = getField(source, "country");
  const region = getField(source, "region");
  const queries = [
    `${title} ${country}`,
    title,
    `${title} travel`,
    `${country} ${title}`,
    `${country} ${region} travel landscape`
  ];

  try {
    const image = await fetchImage(queries);

    if (!image) {
      console.warn(`No usable Openverse image found for ${title}`);
      continue;
    }

    const creator = image.creator || "Openverse contributor";
    const credit = `${image.title || title} by ${creator} (${licenseLabel(image.license, image.license_version)}) via Openverse`;

    source = setField(source, "mainImage", image.url);
    source = setField(source, "imageAlt", `${title} in ${country}`);
    source = setField(source, "imageCredit", credit);
    source = setField(source, "imageCreditUrl", image.foreign_landing_url);
    source = setField(source, "imageLicenseUrl", image.license_url);

    await writeFile(path, source, "utf8");
    updated += 1;
    console.log(`Updated ${title}`);
  } catch (error) {
    console.warn(`Skipped ${title}: ${error.message}`);
  }

  await sleep(250);
}

console.log(`Updated ${updated} of ${files.length} destinations.`);
