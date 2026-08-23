export function parseAccept(header) {
  if (header == null) return [];
  return header
    .split(",")
    .map((raw) => {
      const parts = raw.split(";").map((part) => part.trim());
      const media = (parts.shift() ?? "").toLowerCase();
      if (!media || media === "*") return null;
      const [type, subtype] = media.split("/", 2);
      if (!type || !subtype) return null;
      let q = 1;
      for (const param of parts) {
        const [key, value] = param.split("=", 2).map((item) => item.trim());
        if (key?.toLowerCase() === "q") {
          const parsed = Number.parseFloat(value ?? "");
          if (Number.isFinite(parsed)) q = Math.min(1, Math.max(0, parsed));
        }
      }
      const specificity = type === "*" ? 0 : subtype === "*" ? 1 : 2;
      return { type, subtype, q, specificity };
    })
    .filter(Boolean)
    .sort((a, b) => b.q - a.q || b.specificity - a.specificity);
}

function matches(offered, entry) {
  const [type, subtype] = offered.toLowerCase().split("/", 2);
  if (entry.type === "*") return true;
  if (entry.type !== type) return false;
  return entry.subtype === "*" || entry.subtype === subtype;
}

export function pickAccept(header, offered) {
  if (!offered.length) return null;
  if (header == null || header.trim() === "") return offered[0] ?? null;

  const entries = parseAccept(header);
  if (entries.length === 0) return offered[0] ?? null;

  let best = null;
  for (const type of offered) {
    for (const entry of entries) {
      if (!matches(type, entry) || entry.q === 0) continue;
      if (
        !best ||
        entry.q > best.q ||
        (entry.q === best.q && entry.specificity > best.specificity)
      ) {
        best = { type, q: entry.q, specificity: entry.specificity };
      }
    }
  }

  if (best) return best.type;
  return null;
}

export function mergeVary(existing, tokens) {
  const seen = new Set();
  const out = [];
  for (const token of [...String(existing ?? "").split(","), ...tokens]) {
    const value = token.trim();
    if (!value) continue;
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(value);
  }
  return out.join(", ");
}
