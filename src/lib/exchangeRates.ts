// Fallback rates (USD base, approximate May 2026)
// Used when the API is unavailable or the key is missing
const FALLBACK_RATES: Record<string, number> = {
  // Major reserve currencies
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  AUD: 1.53,
  CAD: 1.36,
  NZD: 1.67,
  CHF: 0.90,
  JPY: 155,
  // Europe
  DKK: 6.87,
  NOK: 10.5,
  SEK: 10.4,
  HUF: 360,
  RON: 4.5,
  TRY: 32,
  ISK: 138,
  // Africa
  ZAR: 18.5,
  NAD: 18.5,
  ETB: 57,
  MGA: 4500,
  MZN: 63,
  NGN: 1600,
  TZS: 2600,
  BWP: 13.5,
  ZMW: 27,
  XOF: 603,
  XAF: 603,
  MAD: 9.9,
  DZD: 134,
  MRU: 38,
  // Middle East
  IRR: 42000,
  IQD: 1310,
  YER: 250,
  SYP: 13000,
  LYD: 4.8,
  AED: 3.67,
  QAR: 3.64,
  // Asia
  CNY: 7.22,
  INR: 83,
  PKR: 278,
  NPR: 132,
  THB: 33,
  PHP: 56,
  BND: 1.35,
  MMK: 2100,
  RUB: 90,
  TJS: 10.9,
  UZS: 12800,
  TMT: 3.5,
  AFN: 70,
  BTN: 83,
  UAH: 41,
  // Americas
  BRL: 5.0,
  ARS: 900,
  CLP: 930,
  COP: 3900,
  BOB: 6.9,
  VES: 36,
  SRD: 36,
  DOP: 59,
  TTD: 6.8,
  XCD: 2.70,
  BMD: 1.00,
  // Indian Ocean / Pacific
  SCR: 13.5,
  MVR: 15.5,
  MUR: 45,
  TOP: 2.35,
  WST: 2.72,
  XPF: 110,
  PGK: 3.7,
  SBD: 8.4,
  VUV: 118,
  AUD_PG: 1.53,
  KPW: 900,
  CDF: 2800,
  HTG: 132,
  SDG: 600,
  SSP: 4500,
  SOS: 571,
};

export interface RatesResult {
  rates: Record<string, number>;
  usingFallback: boolean;
  lastUpdated: Date | null;
}

// Module-level cache — persists for the duration of the build process
let _cache: RatesResult | null = null;

export async function getExchangeRates(): Promise<RatesResult> {
  if (_cache) return _cache;

  try {
    const key = import.meta.env.EXCHANGERATE_API_KEY;
    if (!key) throw new Error("Missing EXCHANGERATE_API_KEY");

    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${key}/latest/USD`,
      { signal: AbortSignal.timeout(8000) }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    if (data.result !== "success") throw new Error("API returned error");

    const lastUpdated =
      typeof data.time_last_update_unix === "number"
        ? new Date(data.time_last_update_unix * 1000)
        : typeof data.time_last_update_utc === "string"
          ? new Date(data.time_last_update_utc)
          : null;

    _cache = {
      rates: data.conversion_rates as Record<string, number>,
      usingFallback: false,
      lastUpdated: lastUpdated && !Number.isNaN(lastUpdated.getTime()) ? lastUpdated : null,
    };
  } catch {
    _cache = { rates: FALLBACK_RATES, usingFallback: true, lastUpdated: null };
  }

  return _cache;
}

// Convert 1 unit of `from` into `to` using a USD-base rate table
export function rateFor(
  rates: Record<string, number>,
  from: string,
  to: string
): number | null {
  if (!rates[from] || !rates[to]) return null;
  return rates[to] / rates[from];
}

// Format a rate cleanly depending on magnitude
export function formatRate(rate: number): string {
  if (rate >= 10000) return rate.toLocaleString("en", { maximumFractionDigits: 0 });
  if (rate >= 1000) return rate.toFixed(0);
  if (rate >= 100) return rate.toFixed(1);
  if (rate >= 10) return rate.toFixed(2);
  if (rate >= 1) return rate.toFixed(2);
  return rate.toFixed(4);
}
