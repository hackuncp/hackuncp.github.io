"use client";

import { useId, useRef, type CSSProperties, type PointerEvent } from "react";
import config, { type PhotoId } from "@/hackuncp.config";
import Polaroid, { type Frame } from "./Polaroid";
import { useDesk } from "./DeskProvider";

const { highlights, about, archive } = config;

interface Slot {
  /** % of the folder box. */
  l: number;
  t: number;
  w: number;
  /** Degrees. */
  r: number;
  a: string;
  f: Frame;
}

// Three hand-placed scatters so the folders don't look stamped out.
const layouts: Slot[][] = [
  [
    { l: -6, t: 18, w: 38, r: -3, a: "4/5", f: "flat" },
    { l: 42, t: -3, w: 46, r: 4, a: "1/1", f: "white" },
    { l: 26, t: 50, w: 44, r: -2, a: "5/4", f: "white" },
    { l: 67, t: 57, w: 36, r: 9, a: "1/1", f: "flat" },
    { l: 2, t: 66, w: 30, r: -9, a: "4/5", f: "black" },
  ],
  [
    { l: 0, t: 6, w: 38, r: -5, a: "4/5", f: "white" },
    { l: 52, t: -5, w: 38, r: 3, a: "1/1", f: "white" },
    { l: 44, t: 27, w: 46, r: -6, a: "3/2", f: "white" },
    { l: -4, t: 55, w: 42, r: 4, a: "5/4", f: "flat" },
    { l: 52, t: 61, w: 42, r: -3, a: "1/1", f: "black" },
  ],
  [
    { l: -2, t: 9, w: 40, r: -4, a: "1/1", f: "white" },
    { l: 49, t: -3, w: 36, r: 5, a: "4/5", f: "white" },
    { l: 60, t: 30, w: 38, r: 12, a: "4/5", f: "flat" },
    { l: -6, t: 60, w: 36, r: -6, a: "4/5", f: "flat" },
    { l: 30, t: 55, w: 46, r: 2, a: "5/4", f: "white" },
  ],
];

function ManilaFolder({ tab }: { tab: string }) {
  const sheen = useId();
  return (
    <div className="manila" aria-hidden="true">
      <svg viewBox="0 0 400 440" preserveAspectRatio="none">
        <path
          d="M30 14h318a14 14 0 0 1 14 14v18h20a12 12 0 0 1 12 12v130a12 12 0 0 1-12 12h-20v206a14 14 0 0 1-14 14H30a14 14 0 0 1-14-14V28a14 14 0 0 1 14-14z"
          fill="#d6b680"
        />
        <rect x="30" y="6" width="314" height="408" rx="6" fill="#f3ead8" transform="rotate(1.2 187 210)" />
        <rect x="8" y="34" width="350" height="406" rx="12" fill="#e5cb9b" />
        <rect x="8" y="34" width="350" height="406" rx="12" fill={`url(#${sheen})`} />
        <defs>
          <linearGradient id={sheen} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".18" />
            <stop offset=".6" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#8a6a3a" stopOpacity=".12" />
          </linearGradient>
        </defs>
      </svg>
      <span className="manila-tab">{tab}</span>
    </div>
  );
}

function FolderCard({ index, title, tab, caption, photos }: { index: number; title: string; tab: string; caption: string; photos: PhotoId[] }) {
  const { open } = useDesk();
  const ref = useRef<HTMLDivElement>(null);
  const slots = layouts[index % layouts.length];

  // Gentle 3D tilt toward the pointer.
  const tilt = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 10}deg`);
    el.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -10}deg`);
  };
  const reset = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <article className="folder-card">
      <div ref={ref} className="folder-stage" onPointerMove={tilt} onPointerLeave={reset}>
        <ManilaFolder tab={tab} />
        {photos.map((photo, i) => {
          const s = slots[i % slots.length];
          // Fan each print away from the folder's center on hover.
          const dx = s.l + s.w / 2 - 50;
          const dy = s.t + s.w / 2 - 50;
          const len = Math.hypot(dx, dy) || 1;
          const style = {
            left: `${s.l}%`,
            top: `${s.t}%`,
            width: `${s.w}%`,
            "--r": `${s.r}deg`,
            "--sx": `${(dx / len) * 16}px`,
            "--sy": `${(dy / len) * 16}px`,
            "--sr": `${s.r + Math.sign(dx || 1) * 3}deg`,
            "--d": `${i * 30}ms`,
          } as CSSProperties;
          return (
            <button
              key={photo}
              type="button"
              className="folder-print"
              style={style}
              onClick={(e) => open({ kind: "photo", photo, set: photos }, e.currentTarget)}
              aria-label={`Open photo: ${config.photos[photo].caption}`}
            >
              <Polaroid photo={photo} frame={s.f} aspect={s.a} />
            </button>
          );
        })}
      </div>
      <h3 className="folder-title">{title}</h3>
      <p className="folder-caption">{caption}</p>
    </article>
  );
}

/** About content: the three highlight folders, then "what is HackUNCP?" with the archive cards. */
export function HighlightsBody({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <h2 className={`${compact ? "display-lg" : "display-xl"} text-center text-cream`}>
        {highlights.heading.split(" ").slice(0, -1).join(" ")}
        <br />
        {highlights.heading.split(" ").slice(-1)}
      </h2>

      <div className={`grid gap-x-10 gap-y-20 md:grid-cols-3 ${compact ? "mt-14" : "mt-20 md:mt-28"}`}>
        {highlights.folders.map((f, i) => (
          <FolderCard key={f.title} index={i} {...f} />
        ))}
      </div>

      <div className={`grid items-start gap-14 md:grid-cols-[1.1fr_1fr] ${compact ? "mt-20" : "mt-32 md:mt-40"}`}>
        <div>
          <h2 className="display-lg text-cream">{about.heading}</h2>
          <p className="mt-6 max-w-[34ch] text-xl leading-relaxed text-cream/90 sm:text-[22px]">{about.body}</p>
        </div>
        <ul className="grid gap-6">
          {archive.map((a, i) => (
            <li key={a.edition}>
              <a href={a.href} target="_blank" rel="noreferrer" className="index-card" style={{ "--r": `${i % 2 ? 1.5 : -1.5}deg` } as CSSProperties}>
                <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="whitespace-nowrap font-display text-3xl tracking-tight">{a.edition}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-ink/55">{a.dates}</span>
                </span>
                <span className="mt-2 block text-[17px] leading-[28px] text-ink/80">{a.blurb}</span>
                <span className="mt-3 block font-hand text-2xl text-cocoa">see the projects on Devpost ↗</span>
              </a>
            </li>
          ))}
          <li>
            <div className="index-card index-card-next" style={{ "--r": "-1deg" } as CSSProperties}>
              <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="whitespace-nowrap font-display text-3xl tracking-tight">{about.upcoming.edition}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-ink/55">{about.upcoming.dates}</span>
              </span>
              <span className="mt-2 block text-[17px] leading-[28px] text-ink/80">{about.upcoming.blurb}</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function Highlights() {
  return (
    <section id="about" data-tone="light" className="brick-section">
      <div className="mx-auto max-w-[1240px] px-4 pb-28 pt-32 sm:px-8 sm:pt-40">
        <HighlightsBody />
      </div>
    </section>
  );
}
