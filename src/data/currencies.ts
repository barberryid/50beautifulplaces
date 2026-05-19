export interface TypicalCosts {
  coffee?: string;
  water?: string;
  meal?: string;
  taxi?: string;
  guesthouse?: string;
  midrangeHotel?: string;
}

export interface CurrencyData {
  currencyCode: string;
  currencyName: string;
  costLevel: "Budget" | "Moderate" | "Expensive" | "Luxury";
  typicalCosts: TypicalCosts;
  currencyTips: string;
}

// Keyed by destination slug (content filename without .md)
export const currencyData: Record<string, CurrencyData> = {
  "angel-falls": {
    currencyCode: "VES",
    currencyName: "Venezuelan Bolívar Soberano",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "VES 5–15",
      meal: "VES 20–80",
      water: "VES 3–10",
      taxi: "VES 10–50",
      guesthouse: "VES 100–500/night",
    },
    currencyTips:
      "USD is the practical currency for all tourism. Carry small USD bills — change is scarce. Dollarization is widespread; bolivar is used for small local purchases only.",
  },

  annapurna: {
    currencyCode: "NPR",
    currencyName: "Nepalese Rupee",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "NPR 150–400",
      meal: "NPR 300–800",
      water: "NPR 30–80",
      taxi: "NPR 300–1,000 (Pokhara/Kathmandu)",
      guesthouse: "NPR 800–3,000/night (trekking lodge)",
    },
    currencyTips:
      "Cards in Kathmandu and Pokhara. Cash (NPR) essential on all trekking routes — no ATMs beyond Jomsom on the Annapurna Circuit. USD exchanges well; exchange in Pokhara before starting. TIMS card and permit fees payable at checkpoints.",
  },

  "anse-source-d-argent": {
    currencyCode: "SCR",
    currencyName: "Seychellois Rupee",
    costLevel: "Luxury",
    typicalCosts: {
      coffee: "SCR 35–90",
      meal: "SCR 200–600",
      water: "SCR 25–60",
      taxi: "SCR 200–600 (La Digue island)",
      midrangeHotel: "SCR 3,000–12,000+/night",
    },
    currencyTips:
      "EUR and USD widely accepted alongside SCR. Cards at larger hotels and restaurants. SCR difficult to source outside Seychelles — exchange on arrival. La Digue is car-free; local transport is bicycle or ox-cart.",
  },

  arniston: {
    currencyCode: "ZAR",
    currencyName: "South African Rand",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "ZAR 45–90",
      meal: "ZAR 120–350",
      water: "ZAR 20–50",
      taxi: "ZAR 100–400 (Cape Agulhas region)",
      guesthouse: "ZAR 800–3,000/night",
    },
    currencyTips:
      "Cards widely accepted throughout South Africa including most guesthouses. ATMs in Bredasdorp (nearest town to Arniston). ZAR exchanges internationally with no difficulty.",
  },

  "avenue-of-the-baobabs": {
    currencyCode: "MGA",
    currencyName: "Malagasy Ariary",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "MGA 3,000–8,000",
      meal: "MGA 10,000–40,000",
      water: "MGA 2,000–6,000",
      taxi: "MGA 5,000–30,000 (bush taxi share)",
      guesthouse: "MGA 60,000–200,000/night",
    },
    currencyTips:
      "Mostly cash. EUR and USD exchange at banks in Morondava; bring sufficient cash before heading to the baobab avenue as rural areas have no banking. Bush taxis (taxi-brousse) priced in ariary and are the main transport option.",
  },

  boracay: {
    currencyCode: "PHP",
    currencyName: "Philippine Peso",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "PHP 100–280",
      meal: "PHP 200–600",
      water: "PHP 30–80",
      taxi: "PHP 30–150 (tricycle, island)",
      midrangeHotel: "PHP 2,500–9,000/night",
    },
    currencyTips:
      "Cards at most hotels and restaurants. ATMs available on the island. Cash needed for tricycles, small vendors, and Paraw sailing boats. Environmental fee (~PHP 150) collected at the port.",
  },

  budapest: {
    currencyCode: "HUF",
    currencyName: "Hungarian Forint",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "HUF 600–1,200",
      meal: "HUF 3,000–9,000",
      water: "HUF 200–500",
      taxi: "HUF 2,000–5,000 (5 km, Bolt app)",
      midrangeHotel: "HUF 30,000–90,000/night",
    },
    currencyTips:
      "Cards accepted nearly everywhere. Paying in HUF gives better rates than accepting dynamic currency conversion (DCC) on card terminals — always choose local currency. One of Europe's best-value capitals.",
  },

  "carpathian-mountains": {
    currencyCode: "RON",
    currencyName: "Romanian Leu",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "RON 10–25",
      meal: "RON 40–120",
      water: "RON 5–15",
      taxi: "RON 30–100 (Brașov / Sinaia)",
      guesthouse: "RON 200–700/night",
    },
    currencyTips:
      "Cards at hotels and larger restaurants in Brașov. Cash needed for rural pensions, mountain huts (cabane), and local markets. Excellent value by Western European standards. ATMs widely available in towns.",
  },

  chefchaouen: {
    currencyCode: "MAD",
    currencyName: "Moroccan Dirham",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "MAD 10–30 (mint tea)",
      meal: "MAD 60–200",
      water: "MAD 5–15",
      taxi: "MAD 20–80 (grand taxi)",
      guesthouse: "MAD 300–1,200/night (riad)",
    },
    currencyTips:
      "Mostly cash in the medina. Cards at upscale riads. ATMs widely available. Tipping expected: 10–15% in restaurants, rounding up for guides and taxi drivers. MAD cannot be taken out of Morocco.",
  },

  chinguetti: {
    currencyCode: "MRU",
    currencyName: "Mauritanian Ouguiya",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "MRU 30–80 (tea)",
      meal: "MRU 150–500",
      water: "MRU 30–100",
      guesthouse: "MRU 500–2,000/night",
    },
    currencyTips:
      "Almost exclusively cash. EUR is easiest to exchange in Atar and Chinguetti. No ATMs in Chinguetti itself — plan all finances from Atar. Tours typically bundle accommodation and transport costs.",
  },

  copacabana: {
    currencyCode: "BRL",
    currencyName: "Brazilian Real",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "BRL 8–20",
      meal: "BRL 30–90",
      water: "BRL 5–15",
      taxi: "BRL 20–80 (Uber, Rio city)",
      midrangeHotel: "BRL 300–900/night",
    },
    currencyTips:
      "Cards widely accepted in Rio. Pix (instant bank transfer) very common. Keep small BRL bills for beach vendors, informal restaurants, and street food. Be aware of surroundings in tourist areas.",
  },

  "danakil-depression": {
    currencyCode: "ETB",
    currencyName: "Ethiopian Birr",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "ETB 50–150 (Ethiopian ceremony)",
      meal: "ETB 150–600",
      water: "ETB 25–80",
      taxi: "ETB 200–800 (Addis Ababa / Mekelle)",
      guesthouse: "ETB 600–2,500/night (Mekelle base)",
    },
    currencyTips:
      "Danakil tours are mandatory and depart from Mekelle. Bring ETB cash for all local costs; USD or EUR useful for tour operators. ETB is not freely exchangeable outside Ethiopia — exchange only what you need on arrival.",
  },

  "denali-national-park": {
    currencyCode: "USD",
    currencyName: "US Dollar",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "USD 4–8",
      meal: "USD 15–40",
      water: "USD 2–5",
      taxi: "USD 35–60/day (park bus pass)",
      guesthouse: "USD 150–600/night",
    },
    currencyTips:
      "Cards accepted everywhere. Park entrance fee USD 15/person. Limited services inside the park itself — stock up in Talkeetna or Fairbanks. Flightseeing (the classic way to see Denali) typically USD 350–500/person.",
  },

  dettifoss: {
    currencyCode: "ISK",
    currencyName: "Icelandic Króna",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "ISK 700–1,500",
      meal: "ISK 1,500–4,500 (petrol station or town)",
      water: "ISK 300–800",
      taxi: "ISK 250–350/litre (fuel for rental car)",
      guesthouse: "ISK 20,000–70,000/night",
    },
    currencyTips:
      "Iceland is effectively cashless — cards accepted virtually everywhere including tiny petrol stations and farm guesthouses. ISK cash rarely needed. Self-drive on Ring Road is the standard approach; fuel is expensive.",
  },

  djanet: {
    currencyCode: "DZD",
    currencyName: "Algerian Dinar",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "DZD 100–300",
      meal: "DZD 500–2,000",
      water: "DZD 100–400",
      guesthouse: "DZD 3,000–12,000/night",
    },
    currencyTips:
      "Almost entirely cash. DZD cannot be taken into or out of Algeria legally. Exchange EUR at banks on arrival in Algiers or Djanet. Tassili N'Ajjer requires a mandatory guide — arrange in advance.",
  },

  dominica: {
    currencyCode: "XCD",
    currencyName: "East Caribbean Dollar",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "XCD 8–20",
      meal: "XCD 25–75",
      water: "XCD 4–10",
      taxi: "XCD 30–80",
      guesthouse: "XCD 120–450/night",
    },
    currencyTips:
      "USD widely accepted alongside XCD (pegged 2.70 XCD per USD). Cards at hotels and larger restaurants. Cash needed for local transport and smaller village guesthouses.",
  },

  "dominican-republic": {
    currencyCode: "DOP",
    currencyName: "Dominican Peso",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "DOP 80–200",
      meal: "DOP 300–800 (local comida criolla)",
      water: "DOP 50–150",
      taxi: "DOP 1,500–4,000 (airport transfer)",
      midrangeHotel: "DOP 4,000–15,000/night",
    },
    currencyTips:
      "USD widely accepted in tourist areas. Cards at hotels and larger restaurants. ATMs widely available. 10% service charge often added automatically in restaurants — check before tipping further.",
  },

  "el-nido": {
    currencyCode: "PHP",
    currencyName: "Philippine Peso",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "PHP 100–280",
      meal: "PHP 200–700",
      water: "PHP 30–80",
      taxi: "PHP 150–600 (tricycle or tuktuk)",
      guesthouse: "PHP 1,500–6,000/night",
    },
    currencyTips:
      "Bring PHP cash from Puerto Princesa — ATMs in El Nido can run out and charge high fees. Cards at upscale resorts only. Island-hopping tours and entrance fees (PHP 200–400) payable in cash.",
  },

  etosha: {
    currencyCode: "NAD",
    currencyName: "Namibian Dollar",
    costLevel: "Moderate",
    typicalCosts: {
      meal: "NAD 300–700 (lodge restaurant)",
      water: "NAD 20–50",
      taxi: "NAD 800–2,500/night (NWR camp, self-catering)",
      midrangeHotel: "NAD 2,500–8,000/night (lodge)",
    },
    currencyTips:
      "NAD is pegged 1:1 to South African Rand (ZAR also accepted). Cards at main lodges and the Namutoni/Okaukuejo camps. NWR park camp shops require cash. Self-drive is standard; plan fuel stops as distances are vast.",
  },

  "fairy-meadows": {
    currencyCode: "PKR",
    currencyName: "Pakistani Rupee",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "PKR 400–1,200",
      meal: "PKR 500–2,500",
      water: "PKR 50–200",
      taxi: "PKR 300–1,500 (jeep to Raikot Bridge)",
      guesthouse: "PKR 2,500–12,000/night",
    },
    currencyTips:
      "Mostly cash outside Islamabad and Gilgit. ATMs in Gilgit; none in Fairy Meadows itself. Exchange USD or EUR in Islamabad or Gilgit before the journey. Jeep hire from Raikot Bridge to the base often negotiated in PKR.",
  },

  "fig-tree-beach": {
    currencyCode: "EUR",
    currencyName: "Euro",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "EUR 2–5",
      meal: "EUR 15–35",
      water: "EUR 1–3",
      taxi: "EUR 20–50 (Protaras area)",
      midrangeHotel: "EUR 80–250/night",
    },
    currencyTips:
      "Cyprus uses EUR. Cards accepted everywhere. Tipping 10% customary at restaurants. Beach sunbed rental EUR 5–15 per pair per day. Protaras is a well-developed resort area with full tourist infrastructure.",
  },

  "fitz-roy": {
    currencyCode: "ARS",
    currencyName: "Argentine Peso",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "ARS 800–2,500 (El Chaltén)",
      meal: "ARS 2,000–8,000",
      water: "ARS 500–1,500",
      taxi: "ARS 8,000–20,000 (bus El Calafate–El Chaltén)",
      guesthouse: "ARS 15,000–60,000/night",
    },
    currencyTips:
      "ARS depreciates rapidly — exchange in small amounts. Many lodges and guides also quote in USD. Cards accepted in El Calafate; cash preferred in El Chaltén. Los Glaciares Park entrance is free for day hikers to Fitz Roy trails.",
  },

  florence: {
    currencyCode: "EUR",
    currencyName: "Euro",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "EUR 1–2 (espresso at bar)",
      meal: "EUR 18–50",
      water: "EUR 2–5",
      taxi: "EUR 10–25 (city centre)",
      midrangeHotel: "EUR 120–380/night",
    },
    currencyTips:
      "Cards accepted everywhere. City accommodation tax ~€3.50–5/person/night added at checkout. Standing at the bar for coffee is cheaper and more authentic. Book Uffizi and Accademia tickets weeks ahead.",
  },

  hadahaa: {
    currencyCode: "MVR",
    currencyName: "Maldivian Rufiyaa",
    costLevel: "Luxury",
    typicalCosts: {
      coffee: "MVR 80–200 (resort café)",
      meal: "MVR 500–2,000 (resort restaurant)",
      water: "MVR 50–120",
      taxi: "MVR 200–800 (speedboat transfer)",
      midrangeHotel: "MVR 8,000–35,000+/night (resort)",
    },
    currencyTips:
      "USD universally accepted. Cards at resorts. Hadahaa is in Gaafu Alifu Atoll — one of the most remote resorts in the Maldives, accessible only by seaplane or domestic flight plus speedboat. All-inclusive packages are standard.",
  },

  "hundred-step-beach": {
    currencyCode: "TTD",
    currencyName: "Trinidad and Tobago Dollar",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "TTD 20–60",
      meal: "TTD 100–400",
      water: "TTD 15–50",
      taxi: "TTD 10–30 (shared route maxi-taxi)",
      guesthouse: "TTD 400–1,500/night",
    },
    currencyTips:
      "USD accepted at larger hotels and tourist-facing businesses. Cards at main hotels; cash for local transport and food stalls. Route taxis are the cheapest way to get around; private taxis must be negotiated upfront.",
  },

  kamchatka: {
    currencyCode: "RUB",
    currencyName: "Russian Ruble",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "RUB 200–500",
      meal: "RUB 500–1,800",
      water: "RUB 80–200",
      taxi: "RUB 300–1,000 (Petropavlovsk city)",
      midrangeHotel: "RUB 4,000–14,000/night",
    },
    currencyTips:
      "Visa/Mastercard/Amex suspended since 2022. Bring RUB cash from Moscow before flying to Petropavlovsk-Kamchatsky — currency exchange is extremely limited in the peninsula. UnionPay works at some terminals.",
  },

  "koh-yao-noi": {
    currencyCode: "THB",
    currencyName: "Thai Baht",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "THB 80–200",
      meal: "THB 100–350",
      water: "THB 20–60",
      taxi: "THB 400–1,500 (longtail boat to mainland)",
      guesthouse: "THB 800–3,500/night",
    },
    currencyTips:
      "Bring THB from Phuket or Krabi — there is one ATM on the island but stock is limited. Cards only at larger eco-resorts. Motorbike rental (the main way to explore) paid in cash. Very low-key atmosphere; cash economy.",
  },

  "kolner-dom": {
    currencyCode: "EUR",
    currencyName: "Euro",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "EUR 2–5",
      meal: "EUR 15–35",
      water: "EUR 2–4",
      taxi: "EUR 10–25 (city centre)",
      midrangeHotel: "EUR 80–220/night",
    },
    currencyTips:
      "Cards accepted virtually everywhere in Germany including small cafés. Cologne Cathedral entry is free (tower climb costs ~€6). Deutsche Bahn ICE trains connect Cologne to major cities; book via the DB app.",
  },

  luxembourg: {
    currencyCode: "EUR",
    currencyName: "Euro",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "EUR 3–6",
      meal: "EUR 20–55",
      water: "EUR 2–5",
      taxi: "EUR 15–35 (city)",
      midrangeHotel: "EUR 130–380/night",
    },
    currencyTips:
      "One of Europe's most expensive cities. Cards accepted everywhere. Public transport is free (since 2020) — no fare needed on buses, trams, or trains within Luxembourg. City Card covers museums and transport.",
  },

  malta: {
    currencyCode: "EUR",
    currencyName: "Euro",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "EUR 1.50–4",
      meal: "EUR 12–35",
      water: "EUR 1–3",
      taxi: "EUR 15–35 (airport to Valletta)",
      midrangeHotel: "EUR 70–220/night",
    },
    currencyTips:
      "Good value by EU standards. Cards accepted widely. Heritage Malta multi-site passes save money on museum entries. Gozo ferry from Ċirkewwa is inexpensive. Tipping is appreciated but not obligatory.",
  },

  medellin: {
    currencyCode: "COP",
    currencyName: "Colombian Peso",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "COP 3,000–8,000",
      meal: "COP 15,000–60,000",
      water: "COP 2,000–6,000",
      taxi: "COP 8,000–30,000 (Uber/InDriver, city)",
      midrangeHotel: "COP 150,000–600,000/night",
    },
    currencyTips:
      "Cards at hotels and larger restaurants. Cash for local food (mercados, street food), local buses, and smaller vendors. ATMs widely available. USD exchanges well. Metro Card recommended for city transport.",
  },

  mittenwald: {
    currencyCode: "EUR",
    currencyName: "Euro",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "EUR 2–5",
      meal: "EUR 18–45",
      water: "EUR 2–4",
      taxi: "EUR 25–50 (to Innsbruck or Garmisch)",
      midrangeHotel: "EUR 100–280/night",
    },
    currencyTips:
      "Cards accepted throughout Germany and Austria (Mittenwald is on the German/Austrian border). Bayern Ticket is the cheapest way to reach it by train from Munich. Gästecard (guest card) from hotels covers local buses.",
  },

  "naqsh-e-jahan-square": {
    currencyCode: "IRR",
    currencyName: "Iranian Rial",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "IRR 200,000–600,000",
      meal: "IRR 600,000–2,500,000",
      water: "IRR 50,000–150,000",
      taxi: "IRR 300,000–1,000,000 (Isfahan city)",
      midrangeHotel: "IRR 3,000,000–12,000,000/night",
    },
    currencyTips:
      "Foreign bank cards do not work due to sanctions. Bring EUR cash (preferred). Exchange at licensed currency exchange offices (sarafi) for far better rates than hotels. Iranians often quote in 'Tomans' — 1 Toman = 10 Rial.",
  },

  "ngorongoro-crater": {
    currencyCode: "TZS",
    currencyName: "Tanzanian Shilling",
    costLevel: "Luxury",
    typicalCosts: {
      coffee: "TZS 3,000–10,000 (Arusha)",
      meal: "TZS 30,000–120,000",
      water: "TZS 3,000–10,000",
      taxi: "TZS 50,000–200,000 (Arusha area)",
      midrangeHotel: "USD 200–800+/night (crater lodge)",
    },
    currencyTips:
      "Conservation fees (USD 50–200/person/day) and most lodges are priced and paid in USD. TZS for everyday purchases in Arusha. Cards at upscale lodges; cash for smaller transactions. Self-drive not permitted in the crater — mandatory ranger/driver.",
  },

  "okavango-delta": {
    currencyCode: "BWP",
    currencyName: "Botswana Pula",
    costLevel: "Luxury",
    typicalCosts: {
      coffee: "BWP 30–80 (Maun town)",
      meal: "BWP 150–400",
      water: "BWP 20–60",
      guesthouse: "BWP 500–2,000/night (Maun budget)",
      midrangeHotel: "USD 500–2,000+/person/night (delta camp)",
    },
    currencyTips:
      "Delta camps are almost universally priced in USD and include accommodation, meals, and activities. BWP for Maun town purchases. Cards at main lodges; cash for smaller transactions. USD exchanges well at Maun airport.",
  },

  "olympic-national-park": {
    currencyCode: "USD",
    currencyName: "US Dollar",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "USD 4–8 (Port Angeles / Forks)",
      meal: "USD 15–35",
      water: "USD 2–5",
      taxi: "USD 20–35 (campsite, per night)",
      guesthouse: "USD 150–400/night (park lodge or outside)",
    },
    currencyTips:
      "Cards everywhere. Park entrance fee USD 35/vehicle/week (America the Beautiful Pass covers it). Cell signal is limited in most of the park. Stock up on fuel, food, and cash in Port Angeles or Forks before entering.",
  },

  "pamir-highway": {
    currencyCode: "TJS",
    currencyName: "Tajik Somoni",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "TJS 8–20 (tea)",
      meal: "TJS 30–120",
      water: "TJS 5–20",
      taxi: "TJS 50–300 (shared taxi, per seat)",
      guesthouse: "TJS 80–250/night (homestay)",
    },
    currencyTips:
      "Bring USD cash to exchange for somoni in Dushanbe — TJS not available abroad. Cash-only throughout the entire route; the nearest ATM can be hundreds of kilometres away. GBAO permit required (arrange in Dushanbe).",
  },

  pantanal: {
    currencyCode: "BRL",
    currencyName: "Brazilian Real",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "BRL 5–15",
      meal: "BRL 60–200 (lodge all-day)",
      water: "BRL 5–15",
      guesthouse: "BRL 400–1,500/night (budget lodge)",
      midrangeHotel: "BRL 1,500–6,000/night (all-inclusive)",
    },
    currencyTips:
      "Cards at main lodges in Campo Grande and Cuiabá. Most Pantanal lodges are all-inclusive; negotiate in BRL or USD. Bring cash for the Trans-Pantanal highway journey and rural fuel stops.",
  },

  qatar: {
    currencyCode: "QAR",
    currencyName: "Qatari Riyal",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "QAR 15–40",
      meal: "QAR 30–100",
      water: "QAR 5–15",
      taxi: "QAR 25–80 (Karwa taxi, Doha city)",
      midrangeHotel: "QAR 400–1,200/night",
    },
    currencyTips:
      "Cards accepted everywhere. QAR is pegged to USD at 3.64. Alcohol only available in licensed hotel bars and the Qatar Duty Free. No tipping obligation. Karwa taxis use meters — agree fare before riding unofficial cars.",
  },

  registan: {
    currencyCode: "UZS",
    currencyName: "Uzbekistani Som",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "UZS 12,000–35,000",
      meal: "UZS 30,000–100,000",
      water: "UZS 5,000–15,000",
      taxi: "UZS 15,000–60,000 (Samarkand city)",
      midrangeHotel: "UZS 400,000–1,500,000/night",
    },
    currencyTips:
      "USD exchanges extremely well — often preferred by hotels. Cards at upscale hotels; mostly cash economy elsewhere. ATMs and exchange offices in Samarkand. UZS denominations are large (carry a bag!). Registan entry fee ~USD 10–20.",
  },

  rome: {
    currencyCode: "EUR",
    currencyName: "Euro",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "EUR 1–2 (espresso at bar)",
      meal: "EUR 18–55",
      water: "EUR 2–6 (sit-down) / free (Nasoni fountains)",
      taxi: "EUR 10–30 (city, fixed zones)",
      midrangeHotel: "EUR 120–400/night",
    },
    currencyTips:
      "Cards everywhere. City accommodation tax ~€4–7/person/night billed separately at checkout. Pre-book the Colosseum, Vatican, and Borghese Gallery — walk-up entry is near impossible in peak season.",
  },

  "saint-petersburg": {
    currencyCode: "RUB",
    currencyName: "Russian Ruble",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "RUB 200–500",
      meal: "RUB 500–2,000",
      water: "RUB 80–250",
      taxi: "RUB 250–900 (Yandex Go, city)",
      midrangeHotel: "RUB 5,000–16,000/night",
    },
    currencyTips:
      "Visa/Mastercard/Amex suspended since 2022. Bring RUB cash. Currency exchange is very restricted for most Western nationalities. UnionPay cards work at some ATMs. Hermitage entry (RUB 500–800) is exceptional value.",
  },

  "salar-de-uyuni": {
    currencyCode: "BOB",
    currencyName: "Bolivian Boliviano",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "BOB 15–40 (Uyuni town)",
      meal: "BOB 50–200",
      water: "BOB 10–30",
      taxi: "BOB 300–800 (3-day salt flat tour, per person)",
      guesthouse: "BOB 100–500/night (Uyuni)",
    },
    currencyTips:
      "Mostly cash. USD exchanges well in Uyuni town. ATMs present but unreliable — bring sufficient cash for the entire stay. 3-day tours into the Eduardo Avaroa reserve typically include all meals and accommodation.",
  },

  santorini: {
    currencyCode: "EUR",
    currencyName: "Euro",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "EUR 3–6",
      meal: "EUR 20–65",
      water: "EUR 2–5",
      taxi: "EUR 15–35 (Fira to Oia)",
      midrangeHotel: "EUR 150–700/night (caldera views)",
    },
    currencyTips:
      "Cards accepted everywhere. Sunset viewpoints in Oia fill up 2+ hours early in summer — arrive early or book a caldera-view restaurant. Ferry connections to Athens (Piraeus) are slower but scenic; high-speed catamaran halves the journey time.",
  },

  "sheikh-zayed-grand-mosque": {
    currencyCode: "AED",
    currencyName: "UAE Dirham",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "AED 20–50",
      meal: "AED 50–180",
      water: "AED 5–15",
      taxi: "AED 30–80 (Abu Dhabi city)",
      midrangeHotel: "AED 400–1,500/night",
    },
    currencyTips:
      "Cards accepted everywhere. AED pegged to USD at 3.67. Mosque entry is free; dress code strictly enforced (abaya provided at entrance if needed). Alcohol available only in licensed hotel bars. Uber and Careem apps reliable for taxis.",
  },

  socotra: {
    currencyCode: "YER",
    currencyName: "Yemeni Rial",
    costLevel: "Budget",
    typicalCosts: {
      meal: "YER 2,000–8,000",
      water: "YER 500–2,000",
      guesthouse: "YER 10,000–45,000/night",
    },
    currencyTips:
      "Cash only. USD is increasingly the practical currency for tour operators and guesthouses. No functioning banks for tourists. Access via UAE-operated charter flights (Sharjah–Socotra); bring all cash needed for your stay.",
  },

  "southern-patagonia": {
    currencyCode: "CLP",
    currencyName: "Chilean Peso",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "CLP 2,000–5,000 (Punta Arenas)",
      meal: "CLP 10,000–35,000",
      water: "CLP 1,000–3,000",
      taxi: "CLP 15,000–50,000 (Puerto Natales shuttle)",
      guesthouse: "CLP 40,000–180,000/night",
    },
    currencyTips:
      "Torres del Paine entrance fee is priced in USD (approx. USD 50–65). Cards at main hotels in Puerto Natales and Punta Arenas; cash preferred within the park and at smaller guesthouses. Argentina (ARS) also in circulation near the border.",
  },

  "sultan-ahmed-mosque": {
    currencyCode: "TRY",
    currencyName: "Turkish Lira",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "TRY 30–80 (çay, Turkish tea)",
      meal: "TRY 200–600",
      water: "TRY 20–60",
      taxi: "TRY 200–500 (Istanbul city, 5 km)",
      midrangeHotel: "TRY 3,000–12,000/night",
    },
    currencyTips:
      "Cards at most hotels and restaurants. Cash useful for Grand Bazaar, Spice Market, and smaller lokanta restaurants. EUR and USD exchange easily in Istanbul. Blue Mosque entry is free (closed briefly for prayer times).",
  },

  "sydney-opera-house": {
    currencyCode: "AUD",
    currencyName: "Australian Dollar",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "AUD 4–7",
      meal: "AUD 20–55",
      water: "AUD 2–5",
      taxi: "AUD 15–40 (city, Uber)",
      midrangeHotel: "AUD 180–450/night",
    },
    currencyTips:
      "Cards everywhere. Tipping optional but appreciated (10% for good service). Opal card for all public transport in Sydney. Airport train to city ~AUD 19. Opera House tours from AUD 40; performances from AUD 60–300+.",
  },

  "table-mountain": {
    currencyCode: "ZAR",
    currencyName: "South African Rand",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "ZAR 45–90",
      meal: "ZAR 150–420",
      water: "ZAR 20–50",
      taxi: "ZAR 80–250 (Uber, Cape Town city)",
      midrangeHotel: "ZAR 1,200–4,500/night",
    },
    currencyTips:
      "Cards widely accepted in Cape Town. Cash useful for local markets and township visits. Table Mountain Aerial Cableway: ZAR 380–420 return (book online to guarantee a ticket). ZAR exchanges internationally with ease.",
  },

  "taj-mahal": {
    currencyCode: "INR",
    currencyName: "Indian Rupee",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "INR 20–80 (chai)",
      meal: "INR 200–800",
      water: "INR 20–60",
      taxi: "INR 100–400 (auto-rickshaw, Agra city)",
      midrangeHotel: "INR 3,000–12,000/night",
    },
    currencyTips:
      "Cards at larger hotels. Cash (INR) essential for autorickshaws, street food, and local markets. ATMs widely available in Agra. Taj Mahal entry ₹1,300 for foreign nationals (buy online at the ASI website to skip queues).",
  },

  tonga: {
    currencyCode: "TOP",
    currencyName: "Tongan Paʻanga",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "TOP 3–9",
      meal: "TOP 15–55",
      water: "TOP 2–6",
      taxi: "TOP 15–55 (Nuku'alofa area)",
      guesthouse: "TOP 80–280/night",
    },
    currencyTips:
      "Cards at main hotels in Nuku'alofa. Cash essential on outer islands (Vava'u, Ha'apai, 'Eua). AUD and NZD exchange well. TOP cannot be exchanged outside Tonga — exchange any leftover before departure.",
  },

  "valley-of-the-gods": {
    currencyCode: "USD",
    currencyName: "US Dollar",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "USD 4–7 (Bluff or Mexican Hat)",
      meal: "USD 15–35",
      water: "USD 2–5",
      guesthouse: "USD 0 (free dispersed camping in monument)",
      midrangeHotel: "USD 80–200/night (Mexican Hat or Bluff)",
    },
    currencyTips:
      "No services or fees inside Valley of the Gods (Bears Ears National Monument). Stock up on fuel, water, and food in Bluff or Mexican Hat. High-clearance vehicle recommended; gravel road passable for most cars in dry conditions.",
  },

  venice: {
    currencyCode: "EUR",
    currencyName: "Euro",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "EUR 1.50–4 (standing at bar) / EUR 4–8 (seated)",
      meal: "EUR 20–65",
      water: "EUR 2–5",
      taxi: "EUR 9.50/trip (vaporetto single)",
      midrangeHotel: "EUR 150–550/night",
    },
    currencyTips:
      "Cards accepted everywhere. Day visitors to the historic centre pay an access fee (€5–10) on selected high-season days. City tax €1–5/night added at checkout. Drinking from Venezia's public fountains is free and safe.",
  },

  "victoria-falls": {
    currencyCode: "ZMW",
    currencyName: "Zambian Kwacha",
    costLevel: "Moderate",
    typicalCosts: {
      coffee: "ZMW 50–150 (Livingstone, Zambia side)",
      meal: "ZMW 200–700",
      water: "ZMW 20–60",
      taxi: "ZMW 100–400 (Livingstone town)",
      midrangeHotel: "USD 80–300/night (both sides)",
    },
    currencyTips:
      "USD is widely accepted on both the Zambia and Zimbabwe sides and is often preferred for lodge bookings and activity fees. ZMW for Livingstone town purchases; Zimbabwe effectively uses USD for most transactions. Combined entry to both viewpoints is separate (Zambia entry ~USD 20, Zimbabwe ~USD 30–50).",
  },

  "whitehaven-beach": {
    currencyCode: "AUD",
    currencyName: "Australian Dollar",
    costLevel: "Expensive",
    typicalCosts: {
      coffee: "AUD 4–7 (Airlie Beach)",
      meal: "AUD 20–55",
      water: "AUD 2–5",
      taxi: "AUD 250–450 (Whitsundays day tour per person)",
      midrangeHotel: "AUD 180–500/night (Airlie Beach)",
    },
    currencyTips:
      "Whitehaven Beach is only accessible by boat or seaplane — no ATMs or services on the island. Bring cash for smaller tour operators in Airlie Beach. Cards everywhere on the mainland. Book tours well in advance in peak season (Jun–Aug).",
  },

  "yankikala-canyon": {
    currencyCode: "TMT",
    currencyName: "Turkmen Manat",
    costLevel: "Moderate",
    typicalCosts: {
      meal: "TMT 20–60",
      water: "TMT 3–10",
      taxi: "TMT 5–35",
      midrangeHotel: "TMT 100–350/night (state-approved)",
    },
    currencyTips:
      "Visa and a mandatory guide are required for Turkmenistan. Cash-only economy. Bring USD to exchange — official and market rates differ significantly, use authorised exchange offices only. Yankikala Canyon is in the remote Karakum Desert; all logistics must be pre-arranged.",
  },

  "zhangye-danxia-landform": {
    currencyCode: "CNY",
    currencyName: "Chinese Yuan (Renminbi)",
    costLevel: "Budget",
    typicalCosts: {
      coffee: "CNY 25–70",
      meal: "CNY 30–100",
      water: "CNY 5–20",
      taxi: "CNY 20–80 (Zhangye city)",
      midrangeHotel: "CNY 250–700/night",
    },
    currencyTips:
      "WeChat Pay and Alipay dominate — link a foreign card before arrival (both apps now accept international cards). Foreign cards work at larger hotels. Park entrance fee ~CNY 75; shuttle buses within the park cost extra.",
  },
};
