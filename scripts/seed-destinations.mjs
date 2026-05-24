import { rm, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const destinationDir = join("src", "content", "destinations");

const places = [
  ["Anse Source d'Argent", "Seychelles", "Africa", ["Beach", "Islands", "Photography"]],
  ["Etosha", "Namibia", "Africa", ["Wildlife", "Desert", "Safari"]],
  ["Victoria Falls", "Zambia and Zimbabwe", "Africa", ["Waterfalls", "Nature", "Adventure"]],
  ["Boracay", "Philippines", "Asia", ["Beach", "Islands", "Relaxation"]],
  ["Santorini", "Greece", "Europe", ["Islands", "Villages", "Coast"]],
  ["Olympic National Park", "Washington State, USA", "North America", ["Forest", "Coast", "Mountains"]],
  ["Luxembourg", "Luxembourg", "Europe", ["Culture", "Castles", "Weekend"]],
  ["Sheikh Zayed Grand Mosque", "United Arab Emirates", "Middle East", ["Architecture", "Culture", "Landmark"]],
  ["Venice", "Italy", "Europe", ["Canals", "Culture", "Architecture"]],
  ["Fairy Meadows", "Pakistan", "Asia", ["Mountains", "Trekking", "Views"]],
  ["Budapest", "Hungary", "Europe", ["Cities", "Architecture", "Thermal baths"]],
  ["Djanet", "Algeria", "Africa", ["Desert", "Rock art", "Expedition"]],
  ["Fitz Roy", "Argentina", "South America", ["Mountains", "Trekking", "Wilderness"]],
  ["El Nido", "Philippines", "Asia", ["Islands", "Lagoons", "Beach"]],
  ["Chinguetti", "Mauritania", "Africa", ["Desert", "History", "Architecture"]],
  ["Hadahaa", "Maldives", "Asia", ["Islands", "Reef", "Luxury"]],
  ["Annapurna", "Nepal", "Asia", ["Mountains", "Trekking", "Culture"]],
  ["Koh Yao Noi", "Thailand", "Asia", ["Islands", "Local life", "Beach"]],
  ["Qatar", "Qatar", "Middle East", ["Desert", "Architecture", "Culture"]],
  ["Avenue of the Baobabs", "Madagascar", "Africa", ["Trees", "Road trip", "Sunset"]],
  ["Carpathian Mountains", "Romania", "Europe", ["Mountains", "Forest", "Villages"]],
  ["Taj Mahal", "India", "Asia", ["Architecture", "History", "Landmark"]],
  ["Florence", "Italy", "Europe", ["Art", "Architecture", "Cities"]],
  ["Southern Patagonia", "Chile and Argentina", "South America", ["Mountains", "Glaciers", "Wilderness"]],
  ["Angel Falls", "Venezuela", "South America", ["Waterfalls", "Jungle", "Adventure"]],
  ["Danakil Depression", "Ethiopia", "Africa", ["Desert", "Geology", "Expedition"]],
  ["Sydney Opera House", "Australia", "Oceania", ["Architecture", "Harbor", "Cities"]],
  ["Ngorongoro Crater", "Tanzania", "Africa", ["Wildlife", "Safari", "Landscape"]],
  ["Okavango Delta", "Botswana", "Africa", ["Wildlife", "Wetlands", "Safari"]],
  ["Salar de Uyuni", "Bolivia", "South America", ["Salt flats", "Photography", "Road trip"]],
  ["Chefchaouen", "Morocco", "Africa", ["Cities", "Color", "Culture"]],
  ["Whitehaven Beach", "Australia", "Oceania", ["Beach", "Islands", "Sailing"]],
  ["Pantanal", "Brazil", "South America", ["Wildlife", "Wetlands", "Nature"]],
  ["Kamchatka", "Russia", "Asia", ["Volcanoes", "Wilderness", "Hot springs"]],
  ["Dominican Republic", "Dominican Republic", "Caribbean", ["Beach", "Islands", "Culture"]],
  ["Socotra", "Yemen", "Middle East", ["Islands", "Wildlife", "Remote"]],
  ["Denali National Park", "USA", "North America", ["Mountains", "Wildlife", "Wilderness"]],
  ["Tonga", "Tonga", "Oceania", ["Islands", "Ocean", "Culture"]],
  ["Zhangye Danxia Landform", "China", "Asia", ["Geology", "Color", "Landscape"]],
  ["Dominica", "Dominica", "Caribbean", ["Rainforest", "Waterfalls", "Islands"]],
  ["Yangykala Canyon", "Turkmenistan", "Asia", ["Canyons", "Desert", "Road trip"]],
  ["Hundred step beach", "Trinidad & Tobago", "Caribbean", ["Beach", "Coast", "Local escape"]],
  ["Copacabana", "Brazil", "South America", ["Beach", "Cities", "Culture"]],
  ["Malta", "Malta", "Europe", ["Islands", "History", "Coast"]],
  ["Fig Tree Beach", "Cyprus", "Europe", ["Beach", "Swimming", "Family"]],
  ["Valley of the Gods", "Utah, USA", "North America", ["Desert", "Road trip", "Canyons"]],
  ["Mittenwald", "Germany", "Europe", ["Villages", "Mountains", "Culture"]],
  ["Sultan Ahmed Mosque", "Istanbul, Turkey", "Middle East", ["Architecture", "Culture", "Landmark"]],
  ["Pamir Highway", "Tadjikistan", "Asia", ["Road trip", "Mountains", "Remote"]],
  ["Registan", "Usbekistan", "Asia", ["Architecture", "History", "Silk Road"]],
  ["Rome", "Italy", "Europe", ["Cities", "History", "Architecture"]],
  ["Naqsh-e Jahan Square", "Isfahan, Iran", "Middle East", ["Architecture", "Culture", "History"]],
  ["Medellin", "Colombia", "South America", ["Cities", "Mountains", "Culture"]],
  ["Saint Petersburg", "Russia", "Europe", ["Cities", "Architecture", "Museums"]],
  ["Table Mountain", "Cape Town, South Africa", "Africa", ["Mountains", "Cities", "Views"]],
  ["Dentifoss", "Iceland", "Europe", ["Waterfalls", "Geology", "Nature"]],
  ["Arniston", "South Africa", "Africa", ["Coast", "Villages", "Beach"]],
  ["Kölner Dom", "Germany", "Europe", ["Architecture", "Cathedral", "Cities"]]
];

const featuredNames = new Set([
  "Anse Source d'Argent",
  "Victoria Falls",
  "Santorini",
  "Fairy Meadows",
  "Southern Patagonia",
  "Salar de Uyuni",
  "Socotra",
  "Registan",
  "Table Mountain"
]);

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const imageQuery = (title, country, tags) =>
  encodeURIComponent(`${title} ${country} ${tags[0]} travel landscape`);

const descriptionFor = (title, country, tags) =>
  `${title} in ${country} belongs on a beautiful-places list for its ${tags
    .slice(0, 2)
    .join(" and ")
    .toLowerCase()} character, memorable scenery, and strong sense of place.`;

await rm(destinationDir, { recursive: true, force: true });
await mkdir(destinationDir, { recursive: true });

for (const [title, country, region, tags] of places) {
  const slug = slugify(title);
  const imageSearch = `${title} ${country} ${tags[0]} travel landscape`;
  const mainImage = `https://source.unsplash.com/1600x1100/?${encodeURIComponent(imageSearch)}`;
  const imageCreditUrl = `https://unsplash.com/s/photos/${encodeURIComponent(imageSearch)}`;
  const featured = featuredNames.has(title);
  const content = `---
title: "${title.replaceAll('"', '\\"')}"
country: "${country.replaceAll('"', '\\"')}"
region: "${region}"
summary: "${descriptionFor(title, country, tags)}"
mainImage: "${mainImage}"
imageAlt: "${title} travel landscape in ${country}"
imageCredit: "Free image via Unsplash"
imageCreditUrl: "${imageCreditUrl}"
bestTime: "Check seasonal weather, local holidays, and access conditions before booking"
duration: "2 to 5 days"
tags: ${JSON.stringify(tags)}
featured: ${featured}
seoTitle: "${title.replaceAll('"', '\\"')} Travel Guide"
seoDescription: "Discover ${title.replaceAll('"', '\\"')} in ${country.replaceAll('"', '\\"')} with quick travel notes, best-time guidance, highlights, and planning context."
---

## Why It Is Beautiful

${descriptionFor(title, country, tags)} It is the kind of place that rewards slow looking, early starts, and enough time to move beyond the obvious viewpoint.

## Practical Travel Notes

Use this page as the planning shell for the full guide. Add transport details, seasonal cautions, entry requirements, neighborhood or base recommendations, and current local advice before publishing a finished itinerary.
`;

  await writeFile(join(destinationDir, `${slug}.md`), content, "utf8");
}

console.log(`Seeded ${places.length} destinations.`);
