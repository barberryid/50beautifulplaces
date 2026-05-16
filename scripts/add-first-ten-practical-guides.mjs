import { readFile, rename, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const dir = join("src", "content", "destinations");

const replaceBody = async (slug, body, frontmatterUpdates = {}) => {
  const path = join(dir, `${slug}.md`);
  let source = await readFile(path, "utf8");
  const [, frontmatter] = source.match(/^---\n([\s\S]*?)\n---/) ?? [];
  if (!frontmatter) throw new Error(`Missing frontmatter in ${slug}`);

  let nextFrontmatter = frontmatter;
  for (const [key, value] of Object.entries(frontmatterUpdates)) {
    const escaped = value.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
    nextFrontmatter = nextFrontmatter.replace(new RegExp(`^${key}:\\s*".*"$`, "m"), `${key}: "${escaped}"`);
  }

  await writeFile(path, `---\n${nextFrontmatter}\n---\n\n${body.trim()}\n`, "utf8");
};

const guides = {
  "anse-source-d-argent": String.raw`
## Why It Is Beautiful

Anse Source d'Argent is the Seychelles beach that looks almost unreal: pale sand, shallow turquoise water, leaning palms and enormous pink-grey granite boulders arranged like sculpture. It is not a wild, empty beach, but it is still one of the most photogenic coastlines in the Indian Ocean.

The beach is on La Digue, the most relaxed of the main Seychelles islands. Most visitors get around by bicycle, and the pace is part of the pleasure. It works especially well for travelers who want gentle swimming, photography, a beach picnic, and a quiet island base rather than resort isolation.

## Practical Travel Notes

### What to do there

Cycle to L'Union Estate, pay the access fee, and follow the sandy paths through palms and granite outcrops to the beach. The shoreline is broken into small coves, so keep walking until you find a quieter patch. The most famous boulder views are near the main access points, but the atmosphere improves if you wander farther along the shore.

Swimming is usually gentle because the reef protects the lagoon, but it is shallow in places and better for floating, wading, and relaxed snorkeling than serious swimming. Bring reef shoes if your feet are sensitive, as broken coral and rock patches can be uncomfortable at low tide.

For photography, go early for fewer people or late afternoon for warmer light on the granite. Midday gives the brightest water color but also the harshest light.

### How to get there

Most travelers reach La Digue by ferry from Mahe via Praslin, or from Praslin directly. Once on La Digue, rent a bicycle near the jetty or through your guesthouse. From the village area, Anse Source d'Argent is an easy cycle ride.

Access to the beach is normally through L'Union Estate. Recent visitor information lists the entrance at around 150 Seychelles rupees per person, though this can change and should be checked locally before relying on it.

### Best time to visit

Seychelles is a year-round destination, but the most comfortable periods are usually the calmer shoulder months around April-May and October-November. For Anse Source d'Argent specifically, tide and light matter more than month. Low tide exposes more sand and reef; higher tide can make the lagoon prettier for swimming.

### Budget tips

Stay in a simple guesthouse on La Digue rather than a resort. Buy fruit, snacks, and drinks in the village before cycling to the beach. Seychelles is not cheap, but La Digue can still be done more affordably if you self-cater, cycle, and avoid packaged day trips.

### Practical notes

Bring cash for small expenses, sunscreen, water, a dry bag, and reef-safe sun protection. Do not expect wilderness solitude; this is one of the Seychelles' most famous beaches. The trick is to arrive early, move slowly, and walk beyond the busiest first coves.
`,
  "avenue-of-the-baobabs": String.raw`
## Why It Is Beautiful

The Avenue of the Baobabs is one of Madagascar's great visual moments: a dusty road lined with towering baobab trees, their thick trunks rising out of rice fields and dry western landscape. It is not a large site in the conventional sense. The experience is simple: a road, ancient trees, local traffic, sunset light, and the feeling that you are looking at the remains of a much older forest.

The trees here are mainly Grandidier's baobabs, one of Madagascar's endemic baobab species. Recent reporting describes the avenue as a concentration of around 20-25 baobabs directly along the road, with more scattered nearby in the surrounding landscape.

## Practical Travel Notes

### What to do there

Most people come for sunset, when the trees turn into dark silhouettes against an orange sky. It is beautiful, but it is also the busiest time. If you want quieter photography, go at sunrise as well. The light is softer, the air cooler, and there are usually fewer visitors.

Do not only photograph the famous line of trees. Look for reflections in the wet season, zebu carts passing along the road, and the wider landscape of fields and villages. The site is still part of a living local road, not a sealed-off attraction.

A common extension is to visit the nearby Baobab Amoureux, two intertwined baobabs often included on local half-day trips from Morondava.

### How to get there

The Avenue of the Baobabs is near Morondava on Madagascar's west coast, along the road toward Belo Tsiribihina. Most travelers base themselves in Morondava and hire a taxi, tuk-tuk, driver, or local guide for sunrise or sunset.

Madagascar travel can be slow, and domestic flights or road journeys may change with weather and road conditions. Build in slack rather than planning tight same-day connections.

### Best time to visit

The dry season, roughly May to October, is usually the easiest time for road travel in western Madagascar. The wet season can bring dramatic skies and reflections, but roads may be more difficult. Sunset is the classic viewing time, but sunrise is often the better choice for people who prefer quiet.

### Budget tips

You do not need an expensive tour just to visit the avenue from Morondava. A simple local transfer is usually enough. The bigger budget question is getting to Morondava in the first place: domestic flights can be costly, while overland travel is cheaper but slow and tiring.

### Practical notes

Wear sandals or shoes you do not mind getting dusty or muddy. Bring water and a headlamp if staying after sunset. Be respectful with photography: local people use the road, and children or villagers may ask for money if you take close portraits.
`,
  "budapest": String.raw`
## Why It Is Beautiful

Budapest is one of Europe's best-value grand cities. It has imperial architecture, thermal baths, ruin bars, river views, markets, trams, cafes, and a serious sense of history, yet it remains easier on the budget than Paris, Amsterdam, or Copenhagen.

For a beautiful-places list, Budapest belongs because of its setting. The Danube cuts between hilly Buda and flatter Pest, with Parliament, the Castle District, bridges, and the riverfront creating one of Europe's most dramatic city panoramas.

## Practical Travel Notes

### What to do there

Start with the classic river walk: Parliament, Chain Bridge, the Danube embankment, and views across to Buda Castle. Go up to Fisherman's Bastion early or late to avoid the biggest crowds. Walk the Castle District, then cross back into Pest for the Great Market Hall, the Jewish Quarter, and the city's cafe culture.

Budapest's thermal baths are a major part of the experience. Szechenyi is the famous one, Gellert is beautiful, and Lukacs can be better value depending on your pass or discount. The official Budapest Card includes public transport and some attractions; check the current inclusions carefully because value depends on how intensively you sightsee.

For a budget-friendly evening, skip expensive dinner cruises and take a normal tram or walk along the river after dark. The lit Parliament and bridges are the show.

### How to get there

Budapest is easy by train, bus, or low-cost flight from much of Europe. From the airport, the 100E airport bus is usually the simplest route into the center, while local public transport works well once you are in town. The BudapestGO app is useful for tickets and route planning.

### Best time to visit

Spring and autumn are the best balance of weather and cost. Summer is lively but hotter and busier. Winter can be excellent value, especially if you like baths, cafes, and Christmas markets, though accommodation prices rise around peak festive dates.

### Budget tips

Stay just outside the most central tourist streets but near a metro or tram stop. Use public transport rather than taxis. Eat at markets, bakeries, and neighborhood restaurants, not on the most obvious riverfront strips. If you plan to visit several museums and baths, price the Budapest Card carefully; otherwise, individual transport tickets may be cheaper.

### Practical notes

Budapest is very walkable, but distances are larger than they look. Plan by districts rather than zigzagging across the river all day. Book Parliament tours and popular baths in advance during busy periods.
`,
  "carpathian-mountains": String.raw`
## Why It Is Beautiful

The Romanian Carpathians are one of Europe's best-value mountain regions: forested valleys, limestone ridges, shepherd landscapes, bears, castles, wooden villages, and serious hiking without Alpine prices. They suit travelers who want mountain scenery and culture together, not just summits.

For first-time visitors, the most practical areas are Bucegi, Piatra Craiului, Fagaras, Retezat, and parts of Apuseni. Bucegi is the easiest to access from Bucharest and Brasov; Piatra Craiului is sharper and more dramatic; Fagaras is higher and more committing.

## Practical Travel Notes

### What to do there

Use Brasov, Sinaia, Zarnesti, or Sibiu as practical bases depending on the range you want. From Brasov, you can combine medieval towns, castles, and day hikes. From Zarnesti, Piatra Craiului offers some of Romania's finest ridge and forest walks. Sinaia gives easy access to Bucegi and Peles Castle.

For a lower-risk first trip, plan day hikes rather than remote multi-day routes. Weather changes quickly, trails can be steep, and some routes are more exposed than casual hikers expect. Recent Romania mountain safety writing continues to stress fast-changing weather, hypothermia risk, and the need to check localized forecasts before hiking.

### How to get there

Fly or train to Bucharest, then take the train toward Brasov or Sinaia. Brasov is the most useful hub for a first Carpathian trip. Public transport can get you to many towns, but a rental car helps for villages, trailheads, and flexible photography.

### Best time to visit

For hiking, aim for June to September, with September often the sweet spot for cooler weather and fewer crowds. Spring can be muddy or snowy at altitude. Winter is beautiful but becomes a different trip: skiing, snow hiking, and mountain huts rather than normal trails.

### Budget tips

Romania remains one of Europe's better-value mountain destinations. Guesthouses, local restaurants, and trains keep costs low. Avoid trying to cover too many mountain ranges in one trip; transport time eats into the budget. Base yourself in one or two towns and hike from there.

### Practical notes

Bear presence is real in Romania. Do not hike silently through dense forest, do not leave food around, and follow local advice. Mountain rescue is professional, but you should still carry layers, a power bank, offline maps, and proper footwear.
`,
  "chefchaouen": String.raw`
## Why It Is Beautiful

Chefchaouen is Morocco's blue mountain town, set in the Rif Mountains with lanes painted in shades of blue, whitewashed walls, tiled doorways, and a slower rhythm than Marrakesh or Fez. It is highly photogenic, but it is not only a photo stop. The best reason to stay overnight is to feel the town before and after day-trippers.

It works well for travelers who want a gentler Moroccan medina experience, mountain air, small cafes, simple guesthouses, and easy wandering.

## Practical Travel Notes

### What to do there

Spend the first hours doing very little: walk the medina, climb steps, follow blue alleys, and stop often. The town is compact, and the pleasure is in slow exploration rather than ticking off sights.

For the best view, walk up toward the Spanish Mosque in the late afternoon. The view back over the blue town and surrounding mountains is the classic Chefchaouen panorama. In town, visit the kasbah area, the main square, and local craft shops, but avoid turning the visit into a shopping mission.

Chefchaouen can also be used as a base for hikes in the Rif Mountains, including nearby waterfalls and trails, though you should check local conditions and transport before setting out.

### How to get there

Chefchaouen does not have a train station. Most travelers arrive by bus or grand taxi from Tangier, Tetouan, or Fez. Tangier is often the most convenient entry point if coming from Europe, especially via Spain or low-cost flights.

### Best time to visit

Spring and autumn are generally the best seasons. Morocco travel guidance often points to March-May and September-November as the most comfortable windows, with Chefchaouen benefiting from milder mountain conditions.

### Budget tips

Chefchaouen is cheaper if you stay overnight rather than visit on a rushed private day trip. Buses are the budget choice. Eat simple Moroccan meals away from the most photogenic central corners. Guesthouses in the medina can be good value, but check whether you will need to carry luggage uphill through stepped lanes.

### Practical notes

The town is safe and relaxed by Moroccan standards, but it is still popular. For photos, go early in the morning. Be respectful around residential alleys; the blue streets are also people's homes.
`,
  "chinguetti": String.raw`
## Why It Is Beautiful

Chinguetti is one of the great old Saharan towns: sand-blown stone buildings, ancient libraries, a historic mosque, desert silence, and the feeling of a caravan world slowly being swallowed by dunes. It is not a polished tourist town. That is the point. The beauty is austere, fragile, and historical.

This is a destination for experienced travelers who value atmosphere, desert culture, and remote places more than comfort.

## Practical Travel Notes

### What to do there

The old town is the heart of Chinguetti. Walk slowly through the stone lanes, visit one of the manuscript libraries if access is possible, and see the old mosque from outside. Non-Muslims should not expect to enter religious spaces unless explicitly permitted.

The surrounding dunes are part of the experience. A sunset walk, camel excursion, or 4x4 trip into the desert gives context to the town's former role on Saharan trade and pilgrimage routes.

Chinguetti combines well with Atar, Ouadane, the Adrar Plateau, and, for the adventurous, Mauritania's iron ore train route.

### How to get there

Most travelers reach Chinguetti from Atar, usually by 4x4. Independent travel is possible for experienced travelers, but this is a place where a reliable local driver or guide is worth paying for. Distances, road conditions, and communications can be challenging.

### Best time to visit

Go in the cooler months, roughly November to February. Outside that window, heat becomes a serious limiting factor.

### Budget tips

Mauritania can be cheap on the ground but expensive in logistics if you need private transport. The budget strategy is to share a 4x4 or join a small group for the Adrar region rather than arranging everything solo. Simple guesthouses and local food keep daily costs low.

### Safety and practical notes

Mauritania needs more caution than many destinations on this list. The US travel advisory currently says to reconsider travel to Mauritania due to terrorism and crime and lists specific do-not-travel areas, including areas north of the Tropic of Cancer and within 100 km of the Mali and Algeria borders. For Chinguetti, the sensible approach is to use current local advice, avoid border regions, travel with experienced operators, carry water, and keep plans flexible.
`,
  "dettifoss": String.raw`
## Why It Is Beautiful

Dettifoss is one of Iceland's most powerful waterfalls: a wide, roaring wall of grey glacial water dropping into the canyon of the Jokulsa a Fjollum river. It is not delicate or pretty in the usual sense. It is raw, loud, and physical.

## Practical Travel Notes

### What to do there

There are two main approaches: the west side and the east side. The west side is generally the easier and more practical choice for most travelers, with better access and facilities. The east side is rougher and can feel more dramatic, but road conditions matter.

If time allows, combine Dettifoss with Selfoss, about 1 km upstream, and Hafragilsfoss downstream. Together they make the area much more rewarding than a single viewpoint stop.

### How to get there

Dettifoss is in North Iceland, reachable from the Ring Road and often included in the Diamond Circle route. Road 862 serves the west side; Road 864 serves the east side. Current Iceland travel sources note that the east side via Route 864 is a seasonal gravel road, generally accessible in summer but often closed in winter.

Self-driving is easiest in summer. In winter or shoulder season, check road conditions carefully and consider a guided tour if you are not used to Icelandic driving.

### Best time to visit

Summer gives the easiest access. Late spring and autumn can be excellent if roads are open and weather cooperates. Winter visits are possible from some approaches, but conditions change quickly and roads may close.

### Budget tips

Dettifoss itself is free to view, so the cost is mainly car rental, fuel, and accommodation. For budget travelers, include it in a North Iceland loop rather than making a long detour for one sight. Base yourself around Myvatn, Husavik, or Akureyri depending on your route.

### Practical notes

Wear waterproof layers. The spray can be intense, and paths can be slippery. Stay behind barriers: the ground near glacial waterfalls can be unstable, and the water volume is not forgiving.
`,
  "djanet": String.raw`
## Why It Is Beautiful

Djanet is one of the great gateways to the central Sahara. It sits in southeast Algeria near the landscapes of Tassili n'Ajjer: rock arches, sand seas, stone forests, prehistoric rock art, Tuareg culture, and desert camps under huge skies.

This is not a casual city break. It is an expedition-style destination for people who want desert silence, geology, culture, and a sense of remoteness.

## Practical Travel Notes

### What to do there

Most visits are arranged as guided desert circuits rather than independent sightseeing. Common routes include Djanet town, Tassili n'Ajjer, Erg Admer, Tikobaouine, rock art areas, canyons, and wild camps. Multi-day Djanet and Tassili itineraries typically include Tuareg guides, camping, food, transfers, and desert logistics.

Spend at least 4-7 days if you can. A rushed one- or two-day trip misses the main reason to come: the changing desert light, camp evenings, and deep landscape.

### How to get there

Most travelers fly via Algiers and connect to Djanet, then use a licensed local operator. Algeria has specific visa procedures, and southern desert travel is often easier when arranged through an approved agency.

### Best time to visit

The best window is the cooler desert season, roughly October to March. Summer is extremely hot and not suitable for most visitors.

### Budget tips

Djanet is not expensive in the same way as Iceland or Seychelles, but logistics make it hard to do ultra-cheaply. The best value is usually a shared small-group desert tour where transport, guiding, food, and camping are bundled. Trying to improvise independently may not save much and can create permit, language, and safety problems.

### Safety and practical notes

Use a reputable operator and check current travel advice before booking. Remote Sahara travel requires serious safety judgment even when organized. Bring warm layers for desert nights, sun protection, a headlamp, power bank, and patience. The reward is one of North Africa's most extraordinary landscapes.
`,
  "etosha": String.raw`
## Why It Is Beautiful

Etosha is one of Africa's best self-drive safari parks. The landscape is open, dry, and stark, with animals gathering around waterholes at the edge of the vast Etosha Pan. It is less about lush scenery and more about visibility: elephants, giraffes, zebra, springbok, lions, rhino, and sometimes leopard moving through a pale, almost lunar landscape.

For budget travelers, Etosha is especially attractive because you can self-drive instead of paying for a fully guided luxury safari.

## Practical Travel Notes

### What to do there

Plan your days around waterholes. In the dry season, animals concentrate around water, and the best strategy is often to wait rather than drive constantly. Camps such as Okaukuejo, Halali, and Namutoni are useful bases, and some have floodlit waterholes for night viewing.

A good first visit is 3 nights: one near Okaukuejo, one around Halali, and one toward Namutoni or the eastern side. With only 2 nights, stay central and avoid over-driving.

### How to get there

Most travelers rent a car in Windhoek and drive north. A normal 2WD vehicle is usually enough for main park roads in dry conditions, but a higher-clearance vehicle is more comfortable. Book accommodation early in peak season.

### Best time to visit

The best wildlife viewing is usually the dry season, especially July to September, when animals gather at waterholes. June and October can also be good, though October is often very hot.

### Costs and budget tips

Namibia increased national park fees from 1 April 2026. Current Etosha fee information lists foreign adult entry at NAD 280 per adult per day, with small vehicle fees also payable. Check official or NWR-linked sources before travel because fees can change.

To save money, rent a basic car, camp or use simple rest-camp accommodation, self-cater, and avoid unnecessary guided drives. The one guided activity that may be worth paying for is a night drive, because visitors cannot self-drive after gate closing.

### Practical notes

Stay in your vehicle except at designated areas. Do not speed. Carry water and fuel when possible. After the major 2025 wildfire, reporting suggested that a large part of the park had been damaged and that recovery could take years, so expect some affected landscapes while wildlife viewing remains possible.
`,
  "fairy-meadows": String.raw`
## Why It Is Beautiful

Fairy Meadows is one of Pakistan's most famous mountain viewpoints: a green alpine meadow facing the huge wall of Nanga Parbat, the world's ninth-highest mountain. It is beautiful, but the journey is part of the story: Karakoram Highway, jeep track, mountain villages, pine forest, and finally the open meadow.

This is not a polished resort destination. It is for travelers who want Himalayan drama, simple huts or camping, and a bit of roughness.

## Practical Travel Notes

### What to do there

The main pleasure is the view of Nanga Parbat, especially at sunrise and sunset. Spend at least one night so you are not rushing the journey. From Fairy Meadows, you can hike toward Beyal Camp and, if fit and conditions allow, continue toward the Nanga Parbat base camp viewpoint with a guide or clear local advice.

Even if you do not go beyond Fairy Meadows, the meadow itself is enough: pine trees, open grass, cabins, campfires, and one of the great mountain faces of Asia.

### How to get there

The usual route is via the Karakoram Highway to Raikot Bridge, then a local jeep to Tato/Tattu village, followed by a hike to Fairy Meadows. Official Gilgit-Baltistan tourism information describes the approach as a 15 km jeepable track from Raikot Bridge to Tato, followed by a 5 km trek taking around 3-4 hours. The narrow gravel road is exposed and is operated by local transport providers.

### Best time to visit

The usual season is late spring to early autumn, roughly May or June to September, depending on snow and road conditions. July and August are greener but can be busier and affected by monsoon-related disruption. September can be excellent if the weather is stable.

### Budget tips

The cheapest way is to travel independently to Raikot Bridge and share jeep costs with other travelers, then stay in basic huts or camps. The safer and simpler option is a small local package from Gilgit, Chilas, or Islamabad. The jeep price is often the key cost, so sharing makes a big difference.

### Practical notes

Do not underestimate the access road. If you are uncomfortable with exposed mountain roads, this may not be your destination. Pack light for the hike, carry warm layers, and check current local conditions before going. Mobile signal and electricity can be limited. The beauty is real, but so is the rough edge.
`
};

await replaceBody("anse-source-d-argent", guides["anse-source-d-argent"], {
  bestTime: "April-May or October-November; check tide and light for the best beach experience",
  duration: "Half day to 2 days"
});
await replaceBody("avenue-of-the-baobabs", guides["avenue-of-the-baobabs"], {
  bestTime: "May to October for easier roads; sunrise and sunset for photography",
  duration: "Half day from Morondava"
});
await replaceBody("budapest", guides.budapest, {
  bestTime: "Spring and autumn for the best weather-value balance",
  duration: "3 to 5 days"
});
await replaceBody("carpathian-mountains", guides["carpathian-mountains"], {
  bestTime: "June to September for hiking, with September often ideal",
  duration: "4 to 7 days"
});
await replaceBody("chefchaouen", guides.chefchaouen, {
  bestTime: "March-May or September-November",
  duration: "1 to 3 days"
});
await replaceBody("chinguetti", guides.chinguetti, {
  bestTime: "November to February",
  duration: "2 to 4 days"
});

const oldDettifoss = join(dir, "dentifoss.md");
const newDettifoss = join(dir, "dettifoss.md");
if (existsSync(oldDettifoss) && !existsSync(newDettifoss)) {
  await rename(oldDettifoss, newDettifoss);
}
await replaceBody("dettifoss", guides.dettifoss, {
  title: "Dettifoss",
  summary: "Dettifoss in Iceland belongs on a beautiful-places list for its waterfalls and geology character, memorable scenery, and strong sense of place.",
  imageAlt: "Dettifoss in Iceland",
  hotelName: "Hotels rated 8+ near Dettifoss",
  hotelBookingUrl: "https://www.booking.com/searchresults.html?ss=Dettifoss%2C%20Iceland&nflt=review_score%3D80",
  bestTime: "Summer for easiest access; check road conditions in shoulder seasons",
  duration: "Half day to 1 day",
  seoTitle: "Dettifoss Travel Guide",
  seoDescription: "Discover Dettifoss in Iceland with quick travel notes, best-time guidance, highlights, and planning context."
});
await replaceBody("djanet", guides.djanet, {
  bestTime: "October to March",
  duration: "4 to 7 days"
});
await replaceBody("etosha", guides.etosha, {
  bestTime: "July to September for peak dry-season wildlife viewing",
  duration: "2 to 4 days"
});
await replaceBody("fairy-meadows", guides["fairy-meadows"], {
  bestTime: "May or June to September, depending on snow and road conditions",
  duration: "2 to 4 days"
});

console.log("Added practical country guides for the first ten destinations.");
