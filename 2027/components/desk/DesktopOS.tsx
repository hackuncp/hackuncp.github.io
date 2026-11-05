"use client";

import { useEffect, useRef, useState } from "react";
import config, { type SectionId } from "@/hackuncp.config";
import DeskProvider, { useDesk, type Sections } from "./DeskProvider";
import DeskIcon from "./DeskIcon";
import Window from "./Window";
import { CompareSwitch, WelcomeBody, useIconActions, useTrashEasterEgg } from "./DesktopKit";
import { usePhysicsBoard } from "./usePhysicsBoard";
import { HighlightsBody } from "./Highlights";
import { TeamBody } from "./Team";
import { SponsorsBody } from "./Sponsors";
import { ScheduleBody } from "./Schedule";
import { GuideBody } from "./Guide";
import { FaqBody } from "./Faq";
import { PostsBody } from "./Posts";
import { ConnectBoard } from "./Connect";
import { Clock, Newsletter, TaskbarLinks } from "./Subscribe";
import { ApplyBody } from "./Apply";
import { asset } from "./asset";

/*
  The one-screen desktop version (/desktop). Nothing scrolls: every section is
  a folder that opens as a window. The address follows the front window, so
  /desktop#sponsors opens straight to the sponsors window.

  It dresses up as the visitor's own computer: app/desktop/page.tsx sets
  data-look="windows" or "mac" before first paint, and the CSS does the rest.
*/

const sections: Sections = {
  about: {
    title: "about",
    width: 1060,
    render: () => (
      <div className="brick-section in-window px-5 py-12 sm:px-10">
        <HighlightsBody compact />
      </div>
    ),
  },
  team: { title: config.team.windowTitle, width: 900, render: () => <TeamBody /> },
  sponsors: {
    title: config.sponsors.windowTitle,
    width: 900,
    render: () => (
      <div className="px-5 pb-7 pt-6 sm:px-12 sm:pb-10 sm:pt-9">
        <SponsorsBody />
      </div>
    ),
  },
  schedule: { title: config.schedule.windowTitle, width: 860, render: () => <ScheduleBody /> },
  guide: { title: config.guide.windowTitle, width: 900, render: () => <GuideBody /> },
  faq: { title: config.faq.windowTitle, width: 780, render: () => <FaqBody /> },
  posts: { title: "camera_roll", width: 1000, render: () => <PostsBody /> },
  contact: {
    title: "contact",
    width: 1080,
    render: () => (
      <div className="paper-section">
        <ConnectBoard inWindow />
      </div>
    ),
  },
  apply: { title: config.apply.windowTitle, width: 900, render: () => <ApplyBody /> },
  subscribe: {
    title: "newsletter",
    width: 680,
    render: () => (
      <div className="px-6 pb-6 pt-7 sm:px-12 sm:pb-8 sm:pt-10">
        <Newsletter />
      </div>
    ),
  },
};

// Windows without their own pill light up a neighbor's, like on the scrolling site.
const pillFor: Partial<Record<SectionId, string>> = { team: "about", guide: "faq", posts: "contact", subscribe: "apply" };

export default function DesktopOS() {
  return (
    <DeskProvider sections={sections} taskbar>
      <Screen />
    </DeskProvider>
  );
}

function Screen() {
  const root = useRef<HTMLDivElement>(null);
  const board = usePhysicsBoard(root, {
    inset: { top: 70, bottom: 62, left: 6, right: 6 },
    frictionAir: 0.075,
    restitution: 0.6,
    stiffness: 0.24,
  });
  useTrashEasterEgg(root, board);
  const openIcon = useIconActions();
  const { navigate, windows, focus, minimize, closeAll } = useDesk();
  const [welcome, setWelcome] = useState(true);
  const shown = windows.filter((w) => !w.min);
  const front = shown.length ? shown.reduce((a, b) => (a.z > b.z ? a : b)) : null;
  const activePill = front?.section ? (pillFor[front.section] ?? front.section) : "home";

  const goHome = () => {
    closeAll();
    setWelcome(true);
  };

  // A link like /desktop#faq opens that window, on load and whenever the hash changes.
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (id in sections) navigate(id);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [navigate]);

  // …and the address follows the front window, so it can be copied and shared.
  useEffect(() => {
    const hash = front?.section ? `#${front.section}` : "";
    const { pathname, search } = window.location;
    if (window.location.hash !== hash) window.history.replaceState(null, "", pathname + search + hash);
  }, [front?.section]);

  return (
    <>
      <header className="pill-nav" data-tone="light">
        <nav aria-label="Sections">
          <ul>
            {config.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-pill"
                  aria-current={activePill === item.id ? "true" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.id === "home") goHome();
                    else navigate(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div ref={root} className="desk-hero os-screen" aria-label="HackUNCP 2027 desktop">
        <div className="desk-bg" style={{ backgroundImage: `url(${asset("/backgrounds/home.jpg")})` }} aria-hidden="true" />

        {config.os.icons.map((item, i) => (
          <DeskIcon key={i} item={item} onOpen={openIcon} />
        ))}

        <div className="os-stage">
          <div data-obstacle className="hero-window" hidden={!welcome}>
            <Window title={config.hero.windowTitle} onClose={() => setWelcome(false)} bodyClassName="px-5 pb-6 pt-5 sm:px-9 sm:pb-9 sm:pt-7">
              <WelcomeBody />
            </Window>
          </div>
        </div>

        <p className="os-hint" aria-hidden="true">
          {config.os.hint}
        </p>

        <footer className="taskbar">
          <button
            type="button"
            className="taskbar-start"
            aria-pressed={welcome}
            aria-label={`${config.taskbar.start} welcome window`}
            onClick={() => setWelcome(!welcome)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/brand/hackuncp-logo.png")} alt="" width={908} height={682} className="h-5 w-auto" />
            <span className="start-label hidden sm:inline">{config.taskbar.start}</span>
          </button>
          <div className="taskbar-windows" aria-label="Open windows">
            {windows.map((w) => (
              <button
                key={w.key}
                type="button"
                className="taskbar-win"
                aria-current={w.key === front?.key ? "true" : undefined}
                data-min={w.min ? "" : undefined}
                // Like a real taskbar: clicking the front window's button minimizes it.
                onClick={() => (w.key === front?.key ? minimize(w.key) : focus(w.key))}
              >
                {w.title}
              </button>
            ))}
          </div>
          <div className="hidden xl:flex">
            <TaskbarLinks />
          </div>
          <CompareSwitch to="scroll" />
          <Clock />
        </footer>
      </div>
    </>
  );
}
