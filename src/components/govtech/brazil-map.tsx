import { HEX_COLS, HEX_ROWS, UFS, type Uf, type UfKind } from "@/lib/govtech";
import { cn } from "@/lib/utils";

// Pointy-top hexagon: height = width × 2/√3, rows overlap by a quarter.
const HEX_H = 2 / Math.sqrt(3);
const ROW_STEP = HEX_H * 0.75;
const MAP_H = (HEX_ROWS - 1) * ROW_STEP + HEX_H;
const HQ = UFS.find((uf) => uf.kind === "hq")!;

function cellX(uf: Pick<Uf, "row" | "col">) {
  return uf.col + (uf.row % 2 ? 0.5 : 0);
}

const ring: Record<UfKind, string> = {
  hq: "bg-gold",
  registered: "bg-gold",
  progress: "bg-gold/55",
  remote: "bg-border-strong/70",
};

const fill: Record<UfKind, string> = {
  hq: "bg-gold text-accent-fg",
  registered: "bg-bg-elevated text-gold",
  progress: "bg-bg-elevated text-gold/85",
  remote: "bg-bg-elevated text-muted",
};

export function BrazilMap({
  selected,
  onSelect,
  label,
}: {
  selected: string;
  onSelect: (code: string) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="relative w-full"
      style={{ aspectRatio: `${HEX_COLS} / ${MAP_H}` }}
    >
      {UFS.map((uf) => {
        const x = cellX(uf);
        const distance = Math.hypot(x - cellX(HQ), (uf.row - HQ.row) * 0.866);
        const active = uf.code === selected;
        return (
          <button
            key={uf.code}
            type="button"
            onClick={() => onSelect(uf.code)}
            aria-pressed={active}
            aria-label={uf.name}
            className="group absolute focus-visible:outline-none"
            style={{
              left: `${(x / HEX_COLS) * 100}%`,
              top: `${((uf.row * ROW_STEP) / MAP_H) * 100}%`,
              width: `${100 / HEX_COLS}%`,
              height: `${(HEX_H / MAP_H) * 100}%`,
            }}
          >
            <span
              className="hex-rise absolute inset-[4%] block"
              style={{ animationDelay: `${Math.round(120 + distance * 70)}ms` }}
            >
              <span
                className={cn(
                  "clip-hex absolute inset-0 transition-[background-color,transform] duration-200",
                  active ? "bg-fg" : ring[uf.kind],
                  "group-hover:scale-[1.06] group-focus-visible:bg-fg",
                )}
              />
              <span
                className={cn(
                  "clip-hex absolute flex items-center justify-center font-mono text-[clamp(9px,1.6vw,13px)] font-medium tracking-wide transition-[background-color,transform] duration-200",
                  active ? "inset-[3px]" : "inset-[1.5px]",
                  fill[uf.kind],
                  active && uf.kind !== "hq" && "bg-bg-subtle",
                  "group-hover:scale-[1.06]",
                )}
              >
                {uf.code}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function MapLegend({
  items,
}: {
  items: { kind: UfKind; label: string }[];
}) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-subtle">
      {items.map((item) => (
        <li key={item.kind} className="inline-flex items-center gap-2">
          <span className={cn("clip-hex relative size-3.5", ring[item.kind])}>
            <span className={cn("clip-hex absolute inset-[1.5px]", fill[item.kind])} />
          </span>
          {item.label}
        </li>
      ))}
    </ul>
  );
}
