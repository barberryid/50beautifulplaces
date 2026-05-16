import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const destinationDir = join("src", "content", "destinations");

const summaries = {
  "anse-source-d-argent": "Shallow turquoise water curls around rose-grey granite boulders on La Digue's dreamiest, slowest, most photographed shore.",
  "avenue-of-the-baobabs": "Ancient baobabs rise like living towers from a dusty Madagascar road, turning sunset into a prehistoric silhouette.",
  "budapest": "The Danube splits a city of glowing bridges, thermal baths, grand cafes, ruin bars, and castle-lit evening walks.",
  "carpathian-mountains": "Romania's wild mountain spine folds castles, bear forests, shepherd ridges, and sharp limestone trails into one cinematic escape.",
  "chefchaouen": "Blue lanes climb through the Rif Mountains, where morning light, tiled doorways, and quiet rooftops make Morocco feel hushed.",
  "chinguetti": "A sand-blown Saharan library town where stone lanes, old manuscripts, and encroaching dunes hold the memory of caravan routes.",
  "dettifoss": "A glacial river hurls itself into a basalt canyon with a force you feel in your chest before you reach the edge.",
  "djanet": "Tuareg desert camps, rock arches, prehistoric art, and star-heavy Sahara nights make Djanet feel like another planet.",
  "etosha": "Wildlife gathers at waterholes on the edge of a vast white pan, turning Namibia's dry season into theatre.",
  "fairy-meadows": "A green Himalayan meadow opens to the colossal face of Nanga Parbat after a road-and-trail approach you never forget.",
  "fig-tree-beach": "Clear Cypriot water, soft sand, and easy Mediterranean swimming make this one of Protaras' most inviting beaches.",
  "fitz-roy": "Jagged granite spires explode above Patagonian lakes and wind-scoured trails, especially electric at first light.",
  "florence": "Renaissance domes, river bridges, marble churches, and honeyed evening streets make Florence feel like art turned into a city.",
  "hadahaa": "A tiny Maldives island wrapped in reef water, where the horizon, lagoon, and house reef do almost all the talking.",
  "hundred-step-beach": "A quiet Trinidad and Tobago escape where the reward is surf, sand, and the feeling of finding a coast before the crowd.",
  "kamchatka": "Volcanoes, hot springs, bear country, and Pacific wilderness make Kamchatka one of Earth's last big raw edges.",
  "koh-yao-noi": "Between Phuket and Krabi, this Thai island keeps the limestone views but trades the rush for rice fields and slow mornings.",
  "kolner-dom": "Cologne's cathedral rises like black lace over the Rhine, a Gothic landmark that still startles from every angle.",
  "luxembourg": "Fortress cliffs, old bridges, forested valleys, and compact European elegance make tiny Luxembourg feel far larger than its map.",
  "malta": "Honey-stone cities, blue coves, ancient temples, and sea walls stack Mediterranean history into one bright island chain.",
  "medellin": "A mountain-ringed city of cable cars, spring weather, public art, and restless reinvention high in Colombia's Aburra Valley.",
  "mittenwald": "Painted Bavarian houses sit below Alpine walls, with violin-making history, mountain trails, and storybook streets in every direction.",
  "naqsh-e-jahan-square": "Isfahan's great square gathers turquoise domes, arcades, mosques, and palace facades into one of the world's grandest urban rooms.",
  "ngorongoro-crater": "A collapsed volcanic world shelters lions, elephants, flamingos, and grassland drama inside one immense Tanzanian bowl.",
  "okavango-delta": "Floodwater spreads into desert and becomes a maze of reeds, channels, elephants, mokoros, and impossible green life.",
  "olympic-national-park": "Rainforest, glacier peaks, moss valleys, driftwood beaches, and stormy Pacific edges all collide in one Washington wilderness.",
  "pamir-highway": "One of the world's great high roads crosses lunar plateaus, Afghan-border valleys, and mountain silence in Tajikistan.",
  "pantanal": "Brazil's great wetland turns wildlife watching into a daily spectacle of jaguars, caimans, capybaras, birds, and open sky.",
  "qatar": "Desert dunes, sculptural museums, souqs, mangroves, and a futuristic skyline meet on a compact Gulf peninsula.",
  "registan": "Samarkand's tiled madrasas rise around a monumental square where Silk Road history still feels theatrical and alive.",
  "rome": "Ancient ruins, baroque fountains, sun-baked piazzas, and layered street life make Rome feel endlessly inhabited by history.",
  "saint-petersburg": "Imperial canals, pastel palaces, vast museums, and northern light give Russia's old capital a dramatic, melancholy grandeur.",
  "salar-de-uyuni": "Bolivia's salt flats become a white infinity by day and a mirror of sky after rain, stretching beyond belief.",
  "santorini": "White villages cling to a volcanic caldera above Aegean blue, with sunset light turning the cliffs almost unreal.",
  "sheikh-zayed-grand-mosque": "Marble courtyards, domes, columns, and reflective pools make Abu Dhabi's great mosque glow with serene scale.",
  "socotra": "Dragon's blood trees, empty beaches, alien limestone, and remote Arabian Sea isolation make Socotra feel biologically impossible.",
  "southern-patagonia": "Glaciers, granite towers, blue lakes, and ferocious wind give the far south a raw end-of-the-world beauty.",
  "sultan-ahmed-mosque": "Istanbul's Blue Mosque gathers domes, minarets, Iznik tiles, and call-to-prayer atmosphere across from Hagia Sophia.",
  "sydney-opera-house": "White sails rise over Sydney Harbour, turning a working performance hall into one of the world's great waterfront icons.",
  "table-mountain": "Cape Town unfolds below a flat-topped mountain of cliffs, cloud, fynbos, ocean, and sunset city views.",
  "taj-mahal": "White marble, river mist, perfect symmetry, and changing light make the Taj Mahal feel both intimate and monumental.",
  "tonga": "South Pacific islands of limestone caves, blue water, whale encounters, and Polynesian calm spread far beyond the usual routes.",
  "valley-of-the-gods": "Red sandstone buttes stand over a lonely Utah road, delivering Monument Valley drama with far more silence.",
  "venice": "Canals, palaces, stone bridges, and lagoon light make Venice feel like a city floating between history and dream.",
  "victoria-falls": "The Zambezi drops into a roaring chasm of spray, rainbows, and thunder you hear long before you see it.",
  "whitehaven-beach": "Silica sand swirls through turquoise shallows in the Whitsundays, creating one of Australia's most dazzling shorelines.",
  "yankikala-canyon": "Red, white, and pink canyon walls blaze in the Turkmen desert, especially when low sun turns the cliffs molten.",
  "zhangye-danxia-landform": "China's rainbow mountains ripple in bands of red, gold, and green, like geology painted at impossible scale."
};

const setSummary = (source, value) => {
  const escaped = value.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
  return source.replace(/^summary:\s*".*"$/m, `summary: "${escaped}"`);
};

const replaceGeneratedBodyCopy = (source, summary) =>
  source.replace(
    /^[^\n]+ belongs on a beautiful-places list for its [^\n]+ character, memorable scenery, and strong sense of place\. It is the kind of place that rewards slow looking, early starts, and enough time to move beyond the obvious viewpoint\.$/m,
    `${summary} It rewards travelers who arrive with time, curiosity, and enough patience to let the place build slowly.`
  );

let updated = 0;
for (const file of await readdir(destinationDir)) {
  if (!file.endsWith(".md")) continue;
  const slug = file.replace(/\.md$/, "");
  const summary = summaries[slug];
  if (!summary) continue;
  const path = join(destinationDir, file);
  const source = await readFile(path, "utf8");
  let next = source;
  if (next.includes("belongs on a beautiful-places list")) {
    next = setSummary(next, summary);
    next = replaceGeneratedBodyCopy(next, summary);
  }
  if (next === source) continue;
  await writeFile(path, next, "utf8");
  updated += 1;
}

console.log(`Updated ${updated} generated summaries.`);
