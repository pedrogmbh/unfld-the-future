export function parseAccept(
  header: string | null | undefined,
): Array<{ type: string; subtype: string; q: number; specificity: number }>;

export function pickAccept(
  header: string | null | undefined,
  offered: readonly string[],
): string | null;

export function mergeVary(
  existing: string | null | undefined,
  tokens: readonly string[],
): string;
