import { useId } from "react";
import type { IconKind, PrizeIcon } from "@/hackuncp.config";

/*
  Original 16×16 pixel-art desktop icons. Each grid row is 16 characters;
  "." is transparent and every other character maps to a palette color.
  The globe and magnifier are drawn from math so their circles stay round.
*/

type Grid = string[];
type Palette = Record<string, string>;

function draw(fn: (x: number, y: number) => string): Grid {
  return Array.from({ length: 16 }, (_, y) => Array.from({ length: 16 }, (_, x) => fn(x, y)).join(""));
}

const globe = draw((x, y) => {
  const dx = x - 7.5;
  const dy = y - 7.5;
  const d = Math.hypot(dx, dy);
  const ring = (dx / 8.3) ** 2 + ((dy - 0.6) / 2.3) ** 2;
  const onRing = ring > 0.66 && ring < 1.08;
  if (onRing && (dy > 0.4 || d > 6.3)) return dy > 1.6 ? "Y" : "y";
  if (d < 5.7) {
    if (dx < -0.8 && dy < -1.8 && d > 3.4 && d < 4.9) return "w";
    const land = Math.sin(x * 1.25 + y * 0.6) * Math.cos(y * 1.05 - x * 0.45) > 0.3;
    const shade = dx + dy > 3.5;
    return land ? (shade ? "G" : "g") : shade ? "B" : "b";
  }
  if (d < 6.7) return "k";
  return ".";
});

const magnifier = draw((x, y) => {
  const dx = x - 6;
  const dy = y - 6;
  const d = Math.hypot(dx, dy);
  if (d < 3.5) return dx < -0.4 && dy < -0.4 && d > 1.3 ? "w" : "c";
  if (d < 4.6) return "k";
  const off = x - y;
  if (x >= 9 && y >= 9 && x <= 14 && y <= 14 && Math.abs(off) <= 1) return off === 0 ? "h" : "k";
  return ".";
});

const icons: Record<Exclude<IconKind, "folder">, { grid: Grid; palette: Palette }> = {
  explore: {
    grid: globe,
    palette: { k: "#1c2c4c", b: "#3f93e3", B: "#2a6bbd", g: "#62c873", G: "#3c9b51", w: "#ffffff", y: "#f4c752", Y: "#c9952c" },
  },
  finder: {
    grid: magnifier,
    palette: { k: "#1f1f1f", c: "#8fe9f2", w: "#ffffff", h: "#6b6b6b" },
  },
  readme: {
    grid: [
      "..kkkkkkkk......",
      "..kwwwwwwkk.....",
      "..kwwwwwwkwk....",
      "..kwwwwwwkwwk...",
      "..kwwwwwwkkkkk..",
      "..kwwwwwwwwwwk..",
      "..kwrrrrrrrwwk..",
      "..kwwwwwwwwwwk..",
      "..kwrrrrrrrrwk..",
      "..kwwwwwwwwwwk..",
      "..kwrrrrrrwwwk..",
      "..kwwwwwwwwwwk..",
      "..kwrrrrrrrwwk..",
      "..kwwwwwwwwwwk..",
      "..kkkkkkkkkkkk..",
      "................",
    ],
    palette: { k: "#2b2b2b", w: "#fdfcf8", r: "#97a3bb" },
  },
  apply: {
    grid: [
      ".kkkkkkkkkkkkk..",
      ".kGGkwwwwwwkGGk.",
      ".kGGkwwwwkwkGGk.",
      ".kGGkwwwwkwkGGk.",
      ".kGGkwwwwwwkGGk.",
      ".kGGGkkkkkkGGGk.",
      ".kGGGGGGGGGGGGk.",
      ".kGGwwwwwwwwGGk.",
      ".kGGwrrrrrrwGGk.",
      ".kGGwwwwwwwwGGk.",
      ".kGGwrrrrrwwGGk.",
      ".kGGwwwwwwwwGGk.",
      ".kGGwwwwwwwwGGk.",
      ".kkkkkkkkkkkkkk.",
      "................",
      "................",
    ],
    palette: { k: "#2a2118", G: "#a8874f", w: "#fbf7ef", r: "#9a8f80" },
  },
  trash: {
    grid: [
      "................",
      "......kkkk......",
      ".....k....k.....",
      "..kkkkkkkkkkkk..",
      "..kwwwwwwwwwwk..",
      "..kkkkkkkkkkkk..",
      "...kwgwgwgwgk...",
      "...kwgwgwgwgk...",
      "...kwgwgwgwgk...",
      "...kwgwgwgwgk...",
      "...kwgwgwgwgk...",
      "...kwgwgwgwgk...",
      "...kwgwgwgwgk...",
      "...kwgwgwgwgk...",
      "....kkkkkkkk....",
      "................",
    ],
    palette: { k: "#363636", w: "#ececec", g: "#b7b7b7" },
  },
  mail: {
    grid: [
      "................",
      "................",
      ".kkkkkkkkkkkkkk.",
      ".kwkwwwwwwwwkwk.",
      ".kwwkwwwwwwkwwk.",
      ".kwwwkwwwwkwwwk.",
      ".kwwwwkwwkwwwwk.",
      ".kwwwwwkkwwwwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwwwwwwwwwrrwk.",
      ".kwwwwwwwwwrrwk.",
      ".kwwwwwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      "................",
      "................",
      "................",
    ],
    palette: { k: "#2b2b2b", w: "#fbf8f1", r: "#c2493b" },
  },
  calendar: {
    grid: [
      "................",
      "...kk......kk...",
      ".kkkkkkkkkkkkkk.",
      ".krrrrrrrrrrrrk.",
      ".krrrrrrrrrrrrk.",
      ".kkkkkkkkkkkkkk.",
      ".kwwwwwwwwwwwwk.",
      ".kwgwgwgwgwgwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kwgwgwgwrrwwwk.",
      ".kwwwwwwwrrwwwk.",
      ".kwgwgwgwgwgwwk.",
      ".kwwwwwwwwwwwwk.",
      ".kkkkkkkkkkkkkk.",
      "................",
      "................",
    ],
    palette: { k: "#2b2b2b", r: "#c2493b", w: "#fbf8f1", g: "#b9b2a6" },
  },
};

function PixelArt({ grid, palette, size }: { grid: Grid; palette: Palette; size: number }) {
  const rects: React.ReactNode[] = [];
  grid.forEach((row, y) => {
    // Merge horizontal runs of one color into a single rect.
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      let end = x + 1;
      while (end < row.length && row[end] === c) end++;
      if (c !== ".") rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={end - x} height={1} fill={palette[c]} />);
      x = end;
    }
  });
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} shapeRendering="crispEdges" aria-hidden="true">
      {rects}
    </svg>
  );
}

function Folder({ size }: { size: number }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 52" width={size * 1.15} height={size * 0.94} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--folder-top, #62c6ff)" }} />
          <stop offset="1" style={{ stopColor: "var(--folder-bottom, #259ef2)" }} />
        </linearGradient>
      </defs>
      <path d="M4 8a4 4 0 0 1 4-4h14.5l5 5H56a4 4 0 0 1 4 4v31a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" style={{ fill: "var(--folder-back, #1b86d6)" }} />
      <rect x="9" y="9.5" width="46" height="30" rx="2" style={{ fill: "var(--folder-paper, transparent)" }} />
      <rect x="4" y="14" width="56" height="34" rx="4" fill={`url(#${id})`} />
      <rect x="4" y="14" width="56" height="1.4" opacity=".8" style={{ fill: "var(--folder-line, #9ddcff)" }} />
    </svg>
  );
}

const avatar: Grid = [
  "................",
  "......kkkk......",
  ".....kssssk.....",
  "....kssssssk....",
  "....kssssssk....",
  "....kssssssk....",
  ".....kssssk.....",
  "......kssk......",
  "....kkggggkk....",
  "...kggggggggk...",
  "..kggggggggggk..",
  "..kggggggggggk..",
  "..kggggggggggk..",
  "..kggggggggggk..",
  "..kkkkkkkkkkkk..",
  "................",
];

/** Placeholder headshot for organizer badges without a photo. */
export function PixelAvatar({ size = 64 }: { size?: number }) {
  return <PixelArt grid={avatar} palette={{ k: "#2b201c", s: "#d9c49c", g: "#8b7349" }} size={size} />;
}

export function DeskGlyph({ kind, size = 60 }: { kind: IconKind; size?: number }) {
  if (kind === "folder") return <Folder size={size} />;
  const icon = icons[kind];
  const art = <PixelArt grid={icon.grid} palette={icon.palette} size={size} />;
  // The magnifier sits in a beveled tile, like an old Find app.
  if (kind === "finder") return <span className="finder-tile">{art}</span>;
  return art;
}

/* Prize icons for the guide, for prizes without a product photo. */
const prizes: Record<PrizeIcon, { grid: Grid; palette: Palette }> = {
  swag: {
    grid: [
      "................",
      "....kkk..kkk....",
      "..kkwwwkkwwwkk..",
      ".kwwwwwwwwwwwwk.",
      "kwwwwwwwwwwwwwwk",
      "kssswwwwwwwwsssk",
      "kkkkwwwwwwwwkkkk",
      "...kwwwwwwwwk...",
      "...kwwwwwccwk...",
      "...kwwwwwccwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kwwwwwwwwk...",
      "...kssssssssk...",
      "...kkkkkkkkkk...",
      "................",
    ],
    palette: { k: "#2b2b2b", w: "#d8705f", s: "#b8473a", c: "#fbf7ef" },
  },
  earbuds: {
    grid: [
      "................",
      "................",
      "..kkkk....kkkk..",
      ".kwwwwk..kwwwwk.",
      ".kwwggk..kggwwk.",
      ".kwwggk..kggwwk.",
      ".kwwwwk..kwwwwk.",
      "..kwwk....kwwk..",
      "..kwwk....kwwk..",
      "..kwsk....kwsk..",
      "..kwsk....kwsk..",
      "..kwsk....kwsk..",
      "..kssk....kssk..",
      "...kk......kk...",
      "................",
      "................",
    ],
    palette: { k: "#2b2b2b", w: "#fbfaf7", s: "#cfcac2", g: "#8a8f98" },
  },
  wallet: {
    grid: [
      "................",
      "................",
      "................",
      "...kk.....kk....",
      ".kkkkkkkkkkkk...",
      ".kssssssssssk...",
      ".kskkkkkkkksk...",
      ".kskcccccckskkk.",
      ".kskcwcwcckskgk.",
      ".kskcccccckskkk.",
      ".kskkkkkkkksk...",
      ".kssssssssssk...",
      ".khhhhhhhhhhk...",
      ".kkkkkkkkkkkk...",
      "................",
      "................",
    ],
    palette: { k: "#22262c", s: "#c8ccd2", h: "#9aa0a8", c: "#1d2a30", w: "#e9f6f2", g: "#7d838c" },
  },
  mouse: {
    grid: [
      ".......k........",
      "........k.......",
      ".......k........",
      "......kkkk......",
      "....kkbbbbkk....",
      "...kbbbkbbbsk...",
      "...kbbbkbbbsk...",
      "...kbbbkbbbsk...",
      "...kkkkkkkkkk...",
      "...kwwwwwwwsk...",
      "...kwwwwwwwsk...",
      "...kwwwwwwwsk...",
      "...kwwwwwwwsk...",
      "....kwwwwwsk....",
      ".....kkkkkk.....",
      "................",
    ],
    palette: { k: "#2b2b2b", w: "#ebe0c6", b: "#ddd0b2", s: "#c2b391" },
  },
  iot: {
    grid: [
      "................",
      "................",
      "..kkkkkkkkkkkk..",
      "..kddddddddddk..",
      "..kdkkkkkkkkdk..",
      "..kdkbbbbbbkdk..",
      "..kdkbwbbwbkdk..",
      "..kdkbbbbbbkdk..",
      "..kdkbwwwwbkdk..",
      "..kdkbbbbbbkdk..",
      "..kdkkkkkkkkdk..",
      "..kddddddddddk..",
      "..kdggdggdggdk..",
      "..kooooooooook..",
      "..kkkkkkkkkkkk..",
      "................",
    ],
    palette: { k: "#1f2329", d: "#3d434c", b: "#4bb3e8", w: "#ffffff", g: "#9aa1ab", o: "#e8833a" },
  },
};

export function PrizeGlyph({ kind, size = 72 }: { kind: PrizeIcon; size?: number }) {
  return <PixelArt grid={prizes[kind].grid} palette={prizes[kind].palette} size={size} />;
}
