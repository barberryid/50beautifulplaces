// One-off: tighten seoDescription frontmatter so meta descriptions fit within
// the ~160-char width Google shows in search results, replacing the repeated
// generic boilerplate with the unique summary plus the longest planning tail
// that still fits. Re-runnable: it rebuilds the description from `summary`.
import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";

const dir = path.resolve("src/content/destinations");
const MAX = 160;

// Longest-first; the script picks the first tail that keeps the total <= MAX.
const tails = [
  " Includes when to go, how long to stay, and how to plan your visit.",
  " Plus when to go, how long to stay, and how to plan.",
  " Plus when to go and how to plan your visit.",
  " A practical travel guide.",
  ""
];

const files = (await readdir(dir)).filter((f) => f.endsWith(".md"));
let changed = 0;
const skipped = [];

for (const file of files) {
  const full = path.join(dir, file);
  const raw = await readFile(full, "utf8");

  const summaryMatch = raw.match(/^summary:\s*"(.*)"\s*$/m);
  const descMatch = raw.match(/^seoDescription:\s*"(.*)"\s*$/m);
  if (!summaryMatch || !descMatch) {
    skipped.push(`${file} (no single-line summary/seoDescription)`);
    continue;
  }

  const summary = summaryMatch[1];
  if (summary.length > MAX) {
    skipped.push(`${file} (summary ${summary.length} chars > ${MAX}; left as-is)`);
    continue;
  }

  const tail = tails.find((t) => summary.length + t.length <= MAX) ?? "";
  const newDesc = `seoDescription: "${summary}${tail}"`;

  if (descMatch[0].trim() === newDesc) continue;

  const updated = raw.replace(/^seoDescription:\s*".*"\s*$/m, newDesc);
  await writeFile(full, updated, "utf8");
  changed += 1;
  console.log(`${(summary.length + tail.length).toString().padStart(3)}  ${file}`);
}

console.log(`\nUpdated ${changed} file(s).`);
if (skipped.length) console.log(`Skipped:\n  ${skipped.join("\n  ")}`);
