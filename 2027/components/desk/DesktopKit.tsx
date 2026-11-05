"use client";

import { useEffect, type RefObject } from "react";
import Link from "next/link";
import config, { type DeskItem } from "@/hackuncp.config";
import { useDesk } from "./DeskProvider";
import { useCountdown } from "./useCountdown";
import type { BoardControls } from "./usePhysicsBoard";
import { asset } from "./asset";

/*
  Pieces shared by every desktop: the scrolling site's home and subscribe
  sections, and the one-screen desktop version.
*/

const { hero, event, links, apply } = config;

/** Opens whatever a desktop icon stands for: a window, a photo, or a section. */
export function useIconActions() {
  const { open, navigate } = useDesk();
  return (item: DeskItem, el: HTMLElement) => {
    if (item.type === "photo") return open({ kind: "photo", photo: item.photo, set: config.gallery.order }, el);
    if (item.opens) return navigate(item.opens);
    switch (item.kind) {
      case "explore":
      case "readme":
      case "trash":
        return open({ kind: item.kind }, el);
      case "apply":
        return navigate("apply");
      case "folder":
        return open({ kind: "gallery" }, el);
      case "finder":
        return navigate("faq", "input[type=search]");
      case "mail":
        return navigate("contact");
      case "calendar":
        return navigate("schedule");
    }
  };
}

/** Easter egg: throw an icon into the Trash and it gets spat back out. */
export function useTrashEasterEgg(root: RefObject<HTMLElement | null>, board: RefObject<BoardControls | null>) {
  const { toast } = useDesk();

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const onRelease = (e: Event) => {
      const dropped = (e as CustomEvent<{ el: HTMLElement; moved: boolean }>).detail;
      const trash = el.querySelector<HTMLElement>('[data-icon="trash"]');
      if (!trash || !dropped.moved || dropped.el === trash) return;
      const a = dropped.el.getBoundingClientRect();
      const b = trash.getBoundingClientRect();
      const overlap = a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
      if (!overlap) return;
      trash.classList.remove("is-shaking");
      void trash.offsetWidth;
      trash.classList.add("is-shaking");
      const away = { x: a.left + a.width / 2 - (b.left + b.width / 2), y: a.top + a.height / 2 - (b.top + b.height / 2) };
      const len = Math.hypot(away.x, away.y) || 1;
      window.setTimeout(() => board.current?.fling(dropped.el, { x: (away.x / len) * 26 - 8, y: (away.y / len) * 26 - 10 }), 160);
      toast("Nice try. Memories can't be deleted.");
    };
    el.addEventListener("board:release", onRelease);
    return () => el.removeEventListener("board:release", onRelease);
  }, [root, board, toast]);
}

/** The inside of the hackuncp_2027.app window: logo, dates, pitch, and the main buttons. */
export function WelcomeBody() {
  const { navigate } = useDesk();
  const countdown = useCountdown(event.startsAt);

  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <h1 className="m-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/brand/hackuncp-logo.png")} alt="HackUNCP" width={908} height={682} className="h-auto w-[104px] sm:w-[176px]" />
          <span className="sr-only"> {event.year}</span>
        </h1>
        <span className="year-stamp" aria-hidden="true">
          &rsquo;27
        </span>
      </div>
      <p className="eyebrow mt-3 sm:mt-5">{hero.eyebrow}</p>
      <p className="hero-headline">{hero.headline}</p>
      <p className="welcome-body mt-3 max-w-[46ch] text-[15px] leading-normal text-ink/75 sm:text-base sm:leading-relaxed">{hero.body}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
        {links.apply ? (
          <a href={links.apply} target="_blank" rel="noreferrer" className="btn-rose">
            Apply now
          </a>
        ) : apply.action ? (
          <Link href="/apply/" className="btn-rose">
            Apply now
          </Link>
        ) : (
          <button type="button" className="btn-rose" onClick={() => navigate("apply", "input[type=email]")}>
            Get notified
          </button>
        )}
        <button type="button" className="btn-outline" onClick={() => navigate("contact")}>
          Sponsor us
        </button>
        {countdown && <span className="hidden text-sm text-ink/55 sm:inline">{countdown.days} days to go</span>}
      </div>
    </>
  );
}

/** While deciding between designs: a small link to the other version. */
export function CompareSwitch({ to, className = "" }: { to: "desktop" | "scroll"; className?: string }) {
  if (!config.compare) return null;
  return (
    <a href={asset(to === "desktop" ? "/desktop/" : "/")} className={`compare-switch ${className}`}>
      {to === "desktop" ? "try the desktop version →" : "← scrolling version"}
    </a>
  );
}
