import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = "src/content/destinations";

const bestTimeByTitle = {
  "Angel Falls": "June to November for the strongest waterfall flow; late June to August balances high water with clearer breaks between storms",
  Annapurna: "October to November and March to April for clearer trekking skies and comfortable mountain temperatures",
  "Anse Source d'Argent": "April to May and October to November for calmer seas; visit early or late for softer light and fewer day-trippers",
  Arniston: "September to April for warmer coastal weather, with winter bringing rougher seas and quieter village stays",
  "Avenue of the Baobabs": "May to October for easier dry-season roads; sunrise is quieter, while sunset gives the classic silhouettes",
  Boracay: "December to May for dry beach weather, with January to March usually offering the most reliable sunshine",
  Budapest: "April to June and September to October for river walks, baths, and terraces without peak summer heat",
  "Carpathian Mountains": "June to September for hiking, with September often the best balance of clear air, color, and fewer crowds",
  Chefchaouen: "March to May and September to November for mild Rif Mountain weather and calmer medina wandering",
  Chinguetti: "November to February, when Saharan heat is manageable and desert nights are cool",
  Copacabana: "May to October for drier, clearer Rio weather; go early morning for the beach before the heat and crowds build",
  "Danakil Depression": "November to February, when the heat is still intense but more realistic for guided desert travel",
  "Denali National Park": "June to early September for park road access, wildlife viewing, and long Alaska daylight",
  Dettifoss: "June to September for the easiest road access; late spring and autumn can be superb if roads are open",
  Djanet: "October to March for cooler Sahara camping weather and long days among the Tassili landscapes",
  Dominica: "December to May for drier hiking weather; waterfalls run year-round but trails are easier outside peak rains",
  "Dominican Republic": "December to April for drier beach weather, with shoulder months offering better value",
  "El Nido": "December to May for island-hopping seas and clearer lagoon light",
  Etosha: "July to September for peak dry-season wildlife around waterholes, with June and October also rewarding",
  "Fairy Meadows": "June to September, with September often bringing steadier skies and fewer visitors",
  "Fig Tree Beach": "May to October for warm water and beach weather, with May, June, September, and October quieter than midsummer",
  "Fitz Roy": "November to March for Patagonia hiking access, with January and February bringing the longest days",
  Florence: "April to June and September to October for golden city light, open terraces, and fewer peak-summer crowds",
  Hadahaa: "January to April for calmer Maldives seas and bright reef visibility",
  "Hundred step beach": "January to May for drier Tobago beach weather and calmer coastal days",
  Kamchatka: "July to September for volcano hiking, bear viewing, and access beyond Petropavlovsk-Kamchatsky",
  "Koh Yao Noi": "November to April for calmer Andaman seas and island-hopping weather",
  "Kölner Dom": "April to October for city walking and Rhine views; December adds Christmas markets and cathedral atmosphere",
  Luxembourg: "May to September for green valleys and castle walks; October adds autumn color in the Mullerthal woods",
  Malta: "April to June and September to October for warm sea light without the fiercest summer heat",
  Medellin: "December to March and July to August for drier city days in the Aburra Valley",
  Mittenwald: "June to September for Alpine walking; December is atmospheric for painted houses and winter markets",
  "Naqsh-e Jahan Square": "March to May and September to November for softer Isfahan light and more comfortable temperatures",
  "Ngorongoro Crater": "June to October for drier wildlife viewing; January to February is also good for green-season drama",
  "Okavango Delta": "June to September, when floodwater spreads through the delta and wildlife gathers on islands",
  "Olympic National Park": "July to September for the driest trails, alpine access, rainforest walks, and Pacific beaches",
  "Pamir Highway": "June to September, when high passes are most accessible and village stays are feasible",
  Pantanal: "July to October for dry-season wildlife concentration and the best chance of jaguar sightings",
  Qatar: "November to March for desert trips, waterfront walks, and outdoor city exploring",
  Registan: "April to May and September to October for Samarkand's blue-tiled monuments in comfortable weather",
  Rome: "April to June and September to November for long walking days without the heaviest heat",
  "Saint Petersburg": "May to July for White Nights; September brings calmer museums and autumn light",
  "Salar de Uyuni": "January to March for mirror reflections; May to October for dry-season perspective and easier crossings",
  Santorini: "April to June and September to October for caldera views without the biggest cruise-ship crowds",
  "Sheikh Zayed Grand Mosque": "November to March for cooler Abu Dhabi weather and comfortable evening visits",
  Socotra: "October to April for calmer temperatures and better access, avoiding the strongest monsoon winds",
  "Southern Patagonia": "November to March for hiking access, long days, and the classic Patagonian trekking season",
  "Sultan Ahmed Mosque": "April to June and September to November for Istanbul walking weather and soft evening light",
  "Sydney Opera House": "September to November and March to May for bright harbor weather without peak holiday crowds",
  "Table Mountain": "October to April for clearer hiking and cableway days, though conditions change quickly year-round",
  "Taj Mahal": "October to March for cooler Agra mornings and the best chance of soft dawn light",
  Tonga: "May to October for drier weather and whale season, especially July to October",
  "Valley of the Gods": "March to May and September to November for desert light, cooler roads, and quieter camping",
  Venice: "April to June and September to November for gentler light and less oppressive heat",
  "Victoria Falls": "February to May for maximum spray and drama; June to August balances flow with visibility",
  "Whitehaven Beach": "May to October for drier Whitsunday weather, clear water, and comfortable sailing",
  "Yangykala Canyon": "April to May and September to October for manageable desert temperatures",
  "Zhangye Danxia Landform": "June to September for stronger color after rain, especially at sunrise or sunset"
};

const notesByTitle = {
  "Fig Tree Beach": "Base yourself in Protaras or nearby Ayia Napa if you want easy bus and taxi access. Arrive before mid-morning for calmer water, rent a lounger only if you plan to stay, and bring reef-safe sun protection because shade disappears quickly. The beach is highly developed, so the reward is effortless swimming rather than isolation.",
  "Fitz Roy": "Use El Chalten as your base and plan around weather rather than a rigid itinerary. The Laguna de los Tres hike is the classic sunrise effort, but wind, snow, and cloud can erase the mountain in minutes. Carry layers, start early, and keep a spare day for the moment the granite spires finally clear.",
  Hadahaa: "Hadahaa is remote even by Maldives standards, so the trip depends on resort transfers and domestic-flight timing. Come for reef time, silence, and water clarity rather than nightlife. Pack light, respect coral rules, and confirm seaplane or speedboat logistics before locking international flights.",
  Florence: "Stay central enough to walk before the day-trip crowds arrive. Book the Uffizi, Accademia, and Brunelleschi's Dome ahead, then leave unplanned time for side streets, artisan workshops, and sunset from San Miniato al Monte. Florence is compact, but museum fatigue is real, so spread the icons across several days.",
  "Koh Yao Noi": "Reach the island by boat from Phuket or Krabi, then slow down. Rent a scooter only if you are confident, choose the east coast for limestone-island views, and use long-tail boat trips for Phang Nga Bay. This is a place for hammocks, seafood, and soft mornings rather than a packed party schedule.",
  Kamchatka: "Most trips start in Petropavlovsk-Kamchatsky and require guided logistics, permits, and flexible weather days. Helicopter trips, volcano hikes, hot springs, and bear-viewing excursions can be delayed by cloud or wind. Build a buffer into the itinerary and treat the remoteness as part of the thrill.",
  "Hundred step beach": "Use Tobago's quieter Atlantic-side rhythm as the frame: early swims, local food, and slow coastal drives. Access and names can vary locally, so ask your guesthouse for the best current route. Bring water shoes, check sea conditions, and do not assume every beautiful cove is safe for swimming.",
  Medellin: "Stay near El Poblado, Laureles, or a well-connected metro stop, then use the cable cars to understand the city's valley setting. Pair Comuna 13 with a responsible local guide, visit the botanical garden, and go up to Parque Arvi for cooler air. The magic is the city rising green and bright on every slope.",
  "Naqsh-e Jahan Square": "Give Isfahan more than a quick stop. Visit the square at different times of day: morning for tile detail, afternoon for arcades and tea, and evening when families gather under the lights. Check current visa, dress, and travel-advisory requirements carefully before planning Iran.",
  "Ngorongoro Crater": "Plan an early descent into the crater, when light spills across the floor and wildlife is most active. Most travelers combine it with the Serengeti or Tarangire, but one carefully timed crater day can still feel immense. Bring warm layers for the rim and patience for busy viewpoints.",
  Malta: "Choose Valletta, Sliema, or the Three Cities for architecture and ferry links, or Gozo for a slower limestone-and-sea trip. Book Hypogeum tickets early if it is on your list. Summer is brilliant but fierce; shoulder season lets you walk fortified streets and swim without feeling rushed by the heat.",
  Mittenwald: "Arrive by train if you can: the first view of painted houses under the Karwendel peaks is part of the charm. Use the town for easy Alpine walks, violin-making history, and day trips toward Garmisch-Partenkirchen. Weather shifts fast, so keep a low-valley plan for cloudy mountain days.",
  Luxembourg: "Use Luxembourg City as a base, then add the Mullerthal trails, Vianden Castle, and river valleys by train or car. The beauty is compact and layered: fortress walls, forest paths, old towns, and clean viewpoints close together. It works especially well as a short, polished European break.",
  "Olympic National Park": "Do not underestimate the distances: rainforest, mountains, and coast sit in different corners of the peninsula. Base choices matter, so group Hoh Rain Forest, Hurricane Ridge, Lake Crescent, and Rialto or Ruby Beach logically. Pack rain gear even in good forecasts; the drama often arrives with the mist.",
  "Kölner Dom": "The cathedral is best approached slowly from the Rhine or the train station, where its twin spires suddenly dominate everything. Climb the tower if you have the legs, visit early for quieter nave light, and stay for evening when the stone turns almost black against the city glow.",
  "Okavango Delta": "Decide early whether you want a lodge-based safari, mobile camping, or a mokoro-focused trip. Water levels shape the experience, and small aircraft transfers are common. This is not a checklist safari; the awe is in silence, reeds, reflected sky, and animals appearing at the edge of floodwater.",
  Pantanal: "Base in the northern or southern Pantanal depending on your route and wildlife priorities. The dry season makes roads easier and concentrates animals near water, while guided river outings raise your chance of seeing jaguar. Bring binoculars, insect protection, and a willingness to sit still.",
  "Pamir Highway": "This is an overland journey, not a single sight. Travel with a reliable driver or shared 4x4, carry cash, and expect high altitude, rough roads, homestays, and big delays. The payoff is extraordinary: lunar passes, turquoise lakes, and villages held between mountains and sky.",
  Qatar: "Use Doha as the base, then balance museums, souqs, desert drives, and the Corniche. The country rewards evening exploring, when heat softens and the skyline begins to glow. For desert trips or Inland Sea excursions, use a reputable driver rather than self-driving into sand.",
  Registan: "Stay in Samarkand so you can see the square after tour groups leave. The madrasahs are magnificent in full daylight, but blue hour is when the tiles feel almost theatrical. Pair the Registan with Shah-i-Zinda and local markets for a fuller sense of the Silk Road city.",
  Rome: "Rome rewards early starts and neighborhood pacing. Book the Colosseum and Vatican Museums ahead, then let the rest breathe: fountains at night, churches with open doors, espresso at the bar, and ruins appearing between ordinary streets. Comfortable shoes matter more than almost anything.",
  "Saint Petersburg": "Plan around museums, canals, and long light. The Hermitage needs timed patience, while Peterhof and Tsarskoe Selo are best treated as separate outings. Check current visa rules and travel advisories before planning Russia, and build in slower days for distances and formalities.",
  "Salar de Uyuni": "Choose between mirror season and dry-season geometry before booking. Multi-day 4x4 trips can be cold, high, and basic, but the scale is unforgettable: white salt to the horizon, volcanoes, flamingo lagoons, and stars sharpened by altitude. Bring layers, sunglasses, and extra camera batteries.",
  Santorini: "Stay outside Oia if you want better value, then visit the caldera villages early or late. Walk Fira to Oia for the island's best sense of height and volcanic shape. The views are famous for a reason, but the island feels better when you avoid cruise-ship peak hours.",
  "Sheikh Zayed Grand Mosque": "Visit late afternoon so the white marble shifts from sunlit brilliance to blue-hour glow. Dress rules are strict and security is formal, so check requirements before going. The mosque is close enough to pair with Abu Dhabi's museums or waterfront, but it deserves unhurried time.",
  Socotra: "Socotra requires careful logistics and current safety checks, usually through a specialist operator. Expect camping, simple food, rough roads, and landscapes that feel biologically impossible: dragon's blood trees, dunes, caves, limestone plateaus, and empty beaches. The fragility of the island is part of the responsibility.",
  "Southern Patagonia": "Pick a side or build enough time for both Chile and Argentina. Torres del Paine, El Chalten, glaciers, and steppe roads are spectacular but weather-governed. Reserve key accommodation early, carry windproof layers, and leave slack days for the rare clear morning that changes the whole trip.",
  "Sultan Ahmed Mosque": "Visit outside prayer times and dress respectfully. The mosque sits at the heart of Sultanahmet, so pair it with Hagia Sophia, the Basilica Cistern, and a slow walk toward the Golden Horn. The building is most moving when you let the courtyard, domes, and call to prayer set the pace.",
  "Sydney Opera House": "See it from several angles: Circular Quay, the Royal Botanic Garden, the ferry to Manly, and inside on a tour or performance night. The building is a working cultural venue, not just a harbor sculpture. Sunset ferries give the most effortless sense of its setting.",
  "Table Mountain": "Check conditions before heading up; wind can close the cableway even on bright days. Hike with proper gear if taking Platteklip or longer routes, and descend before weather turns. The reward is Cape Town suddenly arranged below you: ocean, city grid, cliffs, and Robben Island in one sweep.",
  "Taj Mahal": "Stay overnight in Agra so you can enter at dawn, before heat and crowds flatten the mood. Book tickets properly, carry only what is allowed, and view the mausoleum again from Mehtab Bagh across the Yamuna. The emotion is strongest when the marble slowly takes the morning light.",
  Tonga: "Plan around islands and boats rather than a single base. Whale-swim season is the headline, but beaches, blowholes, caves, and village life are part of the beauty. Use licensed operators, respect local customs, and keep plans flexible because small-island logistics can shift.",
  "Valley of the Gods": "This Utah backroad is quieter and looser than Monument Valley, with huge sandstone forms rising from open desert. A high-clearance vehicle helps after weather, and dispersed camping requires self-sufficiency. Go at sunrise or sunset when the buttes turn red and the road feels wonderfully small.",
  Venice: "Sleep in Venice proper if possible, then walk before breakfast and after dinner when day-trippers thin out. Book major sights, but save time for vaporetto rides, side canals, cicchetti bars, and getting gently lost. The city is fragile, expensive, and still astonishing when approached slowly.",
  "Victoria Falls": "Choose the Zambia or Zimbabwe side based on season and water level; many travelers see both. High water brings thunder and soaking spray, while lower water reveals more of the gorge. Add a sunset river cruise or viewpoints along the bridge to feel the scale beyond one lookout.",
  "Zhangye Danxia Landform": "Use Zhangye as the base and visit at sunrise or sunset, when the striped hills hold their strongest color. Rain can intensify the tones, but paths and viewpoints are controlled, so expect a managed scenic area rather than wilderness. The spectacle is geology made almost painterly.",
  "Yangykala Canyon": "Yangykala is remote, dry, and best visited with a driver who knows Turkmenistan's rules and roads. The canyon's pink, red, and cream walls glow near sunset, but services are minimal. Carry water, sun protection, and patience for permits or checkpoint formalities.",
  "Whitehaven Beach": "Reach it by boat, sailing trip, seaplane, or helicopter from the Whitsundays. Hill Inlet is the essential viewpoint, where tide patterns twist white silica sand through blue water. Reef-safe sun protection matters, and weather can change the whole character of a day trip."
};

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n\n?([\s\S]*)$/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split("\n")) {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) continue;
    const raw = rest.join(":").trim();
    if (raw.startsWith('"') && raw.endsWith('"')) data[key.trim()] = raw.slice(1, -1);
    else if (raw === "true" || raw === "false") data[key.trim()] = raw === "true";
    else data[key.trim()] = raw;
  }
  return { frontmatter: match[1], body: match[2], data };
}

function replaceFrontmatterValue(frontmatter, key, value) {
  const escaped = String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"');
  const pattern = new RegExp(`^${key}: .*?$`, "m");
  return frontmatter.replace(pattern, `${key}: "${escaped}"`);
}

function fallbackNote(data) {
  const terrain = data.tags?.replace(/[\[\]"]/g, "").split(",")[0] || "landscape";
  return `${data.title} works best when you plan around its setting rather than rushing through for a photograph. Use ${data.country} travel logistics as the frame, check local transport and access before booking, and give yourself enough time for the ${terrain.toLowerCase()} atmosphere to unfold. The most memorable moments usually come early or late in the day, when light, weather, and quieter paths make the place feel larger than the itinerary.`;
}

for (const file of readdirSync(dir).filter((name) => name.endsWith(".md"))) {
  const path = join(dir, file);
  const original = readFileSync(path, "utf8");
  const parsed = parseFrontmatter(original);
  if (!parsed) continue;

  const { data } = parsed;
  let frontmatter = parsed.frontmatter;
  let body = parsed.body;
  const bestTime = bestTimeByTitle[data.title] || data.bestTime;
  const seoDescription = `${data.summary} Includes timing, access, stay-length, and practical planning notes for ${data.title}.`;
  const hotelNote = `Booking.com opens with an 8+ guest-score filter for ${data.title}, so you can compare current hotel photos, availability, prices, and recent traveler reviews before choosing a base.`;

  frontmatter = replaceFrontmatterValue(frontmatter, "bestTime", bestTime);
  frontmatter = replaceFrontmatterValue(frontmatter, "seoDescription", seoDescription);
  frontmatter = replaceFrontmatterValue(frontmatter, "hotelNote", hotelNote);
  frontmatter = replaceFrontmatterValue(frontmatter, "hotelName", `8+ rated stays for ${data.title}`);

  const placeholder = "Use this page as the planning shell for the full guide. Add transport details, seasonal cautions, entry requirements, neighborhood or base recommendations, and current local advice before publishing a finished itinerary.";
  if (body.includes(placeholder)) {
    body = body.replace(placeholder, notesByTitle[data.title] || fallbackNote(data));
  }

  writeFileSync(path, `---\n${frontmatter}\n---\n\n${body.trim()}\n`, "utf8");
}
