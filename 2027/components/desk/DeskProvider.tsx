"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import config, { type PhotoId, type SectionId } from "@/hackuncp.config";
import Window from "./Window";
import { asset } from "./asset";

/*
  The site's tiny window manager. Anything can open a window (a photo, the
  2026 folder, README.txt…) and windows float above the page until closed.
  One window per kind; opening it again brings it to the front.

  The desktop version also passes `sections`: whole sections that open as
  windows. Then `navigate("faq")` opens the FAQ window instead of scrolling.
  With `taskbar`, windows can also be minimized (to the taskbar) and maximized.
*/

export type WinSpec =
  | { kind: "photo"; photo: PhotoId; set?: readonly PhotoId[] }
  | { kind: "gallery" }
  | { kind: "readme" }
  | { kind: "explore" }
  | { kind: "trash" }
  | { kind: "section"; id: SectionId };

export interface SectionWindow {
  title: string;
  width: number;
  render: () => ReactNode;
}

export type Sections = Partial<Record<SectionId, SectionWindow>>;

interface OpenWin {
  key: string;
  spec: WinSpec;
  x: number;
  y: number;
  z: number;
  opener: HTMLElement | null;
  min: boolean;
  max: boolean;
}

interface Desk {
  open: (spec: WinSpec, opener?: HTMLElement | null) => void;
  toast: (message: string) => void;
  /** Go to a section: opens its window on the desktop version, scrolls to it on the scrolling site. */
  navigate: (id: string, focusSelector?: string) => void;
  /** Open windows, for a taskbar. */
  windows: { key: string; title: string; section?: SectionId; z: number; min: boolean }[];
  /** Brings a window to the front, restoring it if it was minimized. */
  focus: (key: string) => void;
  minimize: (key: string) => void;
  closeAll: () => void;
}

const DeskContext = createContext<Desk | null>(null);

export function useDesk() {
  const desk = useContext(DeskContext);
  if (!desk) throw new Error("useDesk must be used inside <DeskProvider>");
  return desk;
}

const widths: Record<Exclude<WinSpec["kind"], "section">, number> = {
  photo: 760,
  gallery: 660,
  readme: 440,
  explore: 520,
  trash: 380,
};

const keyOf = (spec: WinSpec) => (spec.kind === "section" ? `section:${spec.id}` : spec.kind);

function widthOf(spec: WinSpec, sections: Sections) {
  return spec.kind === "section" ? (sections[spec.id]?.width ?? 800) : widths[spec.kind];
}

function titleOf(spec: WinSpec, sections: Sections) {
  switch (spec.kind) {
    case "photo":
      return config.photos[spec.photo].file;
    case "gallery":
      return config.gallery.title;
    case "readme":
      return config.readme.title;
    case "explore":
      return "Explore past HackUNCPs";
    case "trash":
      return "Trash";
    case "section":
      return sections[spec.id]?.title ?? spec.id;
  }
}

export function photoSrc(id: PhotoId, size: "full" | "thumb" = "full") {
  return asset(size === "thumb" ? `/photos/2026/thumbs/${id}.jpg` : `/photos/2026/${id}.jpg`);
}

export function scrollToSection(id: string, focusSelector?: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  if (focusSelector) window.setTimeout(() => el.querySelector<HTMLElement>(focusSelector)?.focus({ preventScroll: true }), reduce ? 0 : 650);
}

const NO_SECTIONS: Sections = {};

export default function DeskProvider({
  children,
  sections = NO_SECTIONS,
  taskbar = false,
}: {
  children: ReactNode;
  sections?: Sections;
  taskbar?: boolean;
}) {
  const [wins, setWins] = useState<OpenWin[]>([]);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const z = useRef(100);
  const toastTimer = useRef(0);

  const open = useCallback(
    (spec: WinSpec, opener: HTMLElement | null = null) => {
      const key = keyOf(spec);
      setWins((list) => {
        const rest = list.filter((w) => w.key !== key);
        const existing = list.find((w) => w.key === key);
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const width = Math.min(widthOf(spec, sections), vw - 24);
        const cascade = rest.length * 28;
        const x = existing?.x ?? Math.max(12, (vw - width) / 2 + cascade);
        const y = existing?.y ?? Math.max(76, Math.min(vh * 0.12 + cascade, vh - 320));
        return [...rest, { key, spec, x, y, z: ++z.current, opener: existing?.opener ?? opener, min: false, max: existing?.max ?? false }];
      });
    },
    [sections],
  );

  const close = useCallback((key: string) => {
    setWins((list) => {
      const win = list.find((w) => w.key === key);
      // Hand focus back to whatever opened the window.
      if (win?.opener?.isConnected) window.setTimeout(() => win.opener?.focus({ preventScroll: true }), 0);
      return list.filter((w) => w.key !== key);
    });
  }, []);

  const closeAll = useCallback(() => setWins([]), []);

  const focus = useCallback((key: string) => {
    setWins((list) => list.map((w) => (w.key === key ? { ...w, z: ++z.current, min: false } : w)));
  }, []);

  const minimize = useCallback((key: string) => {
    setWins((list) => list.map((w) => (w.key === key ? { ...w, min: true } : w)));
  }, []);

  const toggleMax = useCallback((key: string) => {
    setWins((list) => list.map((w) => (w.key === key ? { ...w, max: !w.max, z: ++z.current } : w)));
  }, []);

  const moveBy = useCallback(
    (key: string, dx: number, dy: number) => {
      setWins((list) =>
        list.map((w) => {
          if (w.key !== key) return w;
          const width = Math.min(widthOf(w.spec, sections), window.innerWidth - 24);
          return {
            ...w,
            x: Math.min(Math.max(w.x + dx, 40 - width), window.innerWidth - 40),
            y: Math.min(Math.max(w.y + dy, 8), window.innerHeight - 44),
          };
        }),
      );
    },
    [sections],
  );

  const navigate = useCallback(
    (id: string, focusSelector?: string) => {
      if (id in sections) open({ kind: "section", id: id as SectionId });
      else scrollToSection(id, focusSelector);
    },
    [sections, open],
  );

  const toast = useCallback((message: string) => {
    setToastMsg(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastMsg(null), 3200);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const shown = wins.filter((w) => !w.min);
      if (e.key !== "Escape" || !shown.length) return;
      const top = shown.reduce((a, b) => (a.z > b.z ? a : b));
      close(top.key);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [wins, close]);

  const windows = wins.map((w) => ({
    key: w.key,
    title: titleOf(w.spec, sections),
    section: w.spec.kind === "section" ? w.spec.id : undefined,
    z: w.z,
    min: w.min,
  }));

  return (
    <DeskContext.Provider value={{ open, toast, navigate, windows, focus, minimize, closeAll }}>
      {children}
      <div className="win-layer">
        {wins.map((w) => (
          <FloatingWindow
            key={w.key}
            win={w}
            sections={sections}
            onClose={() => close(w.key)}
            onRaise={() => focus(w.key)}
            onDragBy={(dx, dy) => moveBy(w.key, dx, dy)}
            onMinimize={taskbar ? () => minimize(w.key) : undefined}
            onMaximize={taskbar ? () => toggleMax(w.key) : undefined}
            open={open}
          />
        ))}
      </div>
      <div className="desk-toast" role="status" aria-live="polite" data-show={toastMsg ? "true" : undefined}>
        {toastMsg}
      </div>
    </DeskContext.Provider>
  );
}

function FloatingWindow({
  win,
  sections,
  onClose,
  onRaise,
  onDragBy,
  onMinimize,
  onMaximize,
  open,
}: {
  win: OpenWin;
  sections: Sections;
  onClose: () => void;
  onRaise: () => void;
  onDragBy: (dx: number, dy: number) => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  open: Desk["open"];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { spec } = win;
  const titleId = `win-title-${win.key.replace(":", "-")}`;

  useEffect(() => {
    ref.current?.querySelector<HTMLElement>("button.win-close")?.focus({ preventScroll: true });
  }, []);

  let body: ReactNode;
  switch (spec.kind) {
    case "photo":
      body = <PhotoView spec={spec} open={open} />;
      break;
    case "gallery":
      body = <Gallery open={open} />;
      break;
    case "readme":
      body = (
        <div className="readme">
          {config.readme.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      );
      break;
    case "explore":
      body = <Explore />;
      break;
    case "trash":
      body = (
        <p className="p-6 text-center text-[15px] leading-relaxed text-ink/80">
          The Trash is empty.
          <br />
          We keep every bug here. They&apos;re features now.
        </p>
      );
      break;
    case "section":
      body = sections[spec.id]?.render();
      break;
  }

  return (
    <div
      ref={ref}
      role="dialog"
      aria-labelledby={titleId}
      className="win-float"
      data-window={win.key}
      data-max={win.max ? "" : undefined}
      hidden={win.min}
      style={{ left: win.x, top: win.y, zIndex: win.z, width: `min(${widthOf(spec, sections)}px, calc(100vw - 24px))` }}
      onPointerDownCapture={onRaise}
      onFocusCapture={onRaise}
    >
      <Window
        title={titleOf(spec, sections)}
        titleId={titleId}
        onClose={onClose}
        onMinimize={onMinimize}
        onMaximize={onMaximize}
        maximized={win.max}
        onDragBy={onDragBy}
        bodyClassName={spec.kind === "section" ? "p-0" : ""}
      >
        {body}
      </Window>
    </div>
  );
}

function PhotoView({ spec, open }: { spec: Extract<WinSpec, { kind: "photo" }>; open: Desk["open"] }) {
  const photo = config.photos[spec.photo];
  const set = spec.set ?? [spec.photo];
  const i = set.indexOf(spec.photo);
  const go = (step: number) => open({ kind: "photo", photo: set[(i + step + set.length) % set.length], set });

  return (
    <div
      onKeyDown={(e) => {
        if (set.length < 2) return;
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photoSrc(spec.photo)} alt={photo.alt} className="block aspect-[3/2] w-full bg-[#1d1714] object-contain" />
      <div className="flex items-center gap-3 px-4 py-3">
        <p className="flex-1 text-[15px] text-ink/80">{photo.caption}</p>
        {set.length > 1 && (
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-ink/50">
              {i + 1}/{set.length}
            </span>
            <button type="button" className="win-btn" onClick={() => go(-1)} aria-label="Previous photo">
              ←
            </button>
            <button type="button" className="win-btn" onClick={() => go(1)} aria-label="Next photo">
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Gallery({ open }: { open: Desk["open"] }) {
  const set = config.gallery.order;
  return (
    <div className="max-h-[min(70vh,560px)] overflow-y-auto p-4">
      <ul className="grid grid-cols-3 gap-x-3 gap-y-4 sm:grid-cols-4">
        {set.map((id) => (
          <li key={id}>
            <button
              type="button"
              className="gallery-file"
              onClick={(e) => open({ kind: "photo", photo: id, set }, e.currentTarget)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoSrc(id, "thumb")} alt="" loading="lazy" className="aspect-square w-full object-cover" />
              <span>{config.photos[id].file}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Explore() {
  return (
    <ul className="grid gap-3 p-4">
      {config.archive.map((a) => (
        <li key={a.edition}>
          <a href={a.href} target="_blank" rel="noreferrer" className="archive-row">
            <span className="font-display text-2xl tracking-tight">{a.edition}</span>
            <span className="text-sm text-ink/60">{a.dates}</span>
            <span className="text-[15px] text-ink/80">{a.blurb}</span>
            <span className="mt-1 text-sm font-medium text-cocoa underline underline-offset-4">Explore on Devpost ↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
