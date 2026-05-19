import { rateFor } from "../lib/exchangeRates";

function fmtEur(n: number): string {
  if (n < 100) return `€${n.toFixed(2)}`;
  return `€${Math.round(n).toLocaleString("en")}`;
}

/**
 * Takes a cost string like "THB 100–350" and appends a live EUR equivalent:
 * "THB 100–350 / €2.71–€9.48"
 *
 * Returns the original string unchanged when:
 *  - localCode is EUR (already in euros)
 *  - the string contains " / " (complex multi-part entries)
 *  - the string's leading currency code doesn't match localCode
 *  - the rate is unavailable
 *  - numbers can't be parsed
 */
export function withEurEquivalent(
  costStr: string,
  localCode: string,
  rates: Record<string, number>
): string {
  if (localCode === "EUR") return costStr;
  if (costStr.includes(" / ")) return costStr;

  const eurPerLocal = rateFor(rates, localCode, "EUR");
  if (eurPerLocal === null) return costStr;

  // Match: CURRCODE LOW[+][–HIGH[+]][rest]
  const re = new RegExp(
    `^${localCode}\\s+([\\d,]+)\\+?(?:[–\\-]([\\d,]+)\\+?)?(.*)$`
  );
  const m = costStr.match(re);
  if (!m) return costStr;

  const [, lowStr, highStr] = m;
  const low = parseFloat(lowStr.replace(/,/g, ""));
  const high = highStr ? parseFloat(highStr.replace(/,/g, "")) : null;
  if (isNaN(low)) return costStr;

  const eurPart =
    high !== null
      ? `${fmtEur(low * eurPerLocal)}–${fmtEur(high * eurPerLocal)}`
      : fmtEur(low * eurPerLocal);

  return `${costStr} / ${eurPart}`;
}
