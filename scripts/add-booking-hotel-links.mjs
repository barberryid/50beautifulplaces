import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const destinationDir = join("src", "content", "destinations");

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

const files = (await readdir(destinationDir)).filter((file) => file.endsWith(".md")).sort();
const encodeBookingSearch = (value) => encodeURIComponent(value).replaceAll("'", "%27");

for (const file of files) {
  const path = join(destinationDir, file);
  let source = await readFile(path, "utf8");
  const title = getField(source, "title");
  const country = getField(source, "country");
  const search = `${title}, ${country}`;
  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeBookingSearch(search)}&nflt=review_score%3D80`;

  source = setField(source, "hotelName", `Hotels rated 8+ near ${title}`);
  source = setField(source, "hotelBookingUrl", bookingUrl);
  source = setField(source, "hotelRating", "8+ guest review score on Booking.com");
  source = setField(
    source,
    "hotelNote",
    "Booking.com opens with an 8+ review-score filter so visitors can compare current hotel photos, rates, availability, and guest reviews."
  );

  await writeFile(path, source, "utf8");
}

console.log(`Added Booking.com hotel links to ${files.length} destinations.`);
