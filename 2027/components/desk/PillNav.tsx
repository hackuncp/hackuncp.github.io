"use client";

import { useEffect, useState } from "react";
import config from "@/hackuncp.config";
import { asset } from "./asset";

/*
  The pill nav from the design: fixed and centered. It reads the section
  under it to pick light or dark pills, and fills the pill for the section
  in the middle of the screen. On narrow phones the row scrolls sideways.
*/
export default function PillNav() {
  const [active, setActive] = useState("home");
  const [tone, setTone] = useState<"light" | "dark">("light");

  // Keep the active pill in view when the row scrolls on phones.
  useEffect(() => {
    const row = document.querySelector<HTMLElement>(".pill-nav ul");
    const pill = row?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!row || !pill || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: pill.offsetLeft - (row.clientWidth - pill.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    let raf = 0;
    const sectionAt = (y: number) => {
      for (const el of document.elementsFromPoint(window.innerWidth / 2, y)) {
        const section = el.closest<HTMLElement>("section[data-tone]");
        if (section) return section;
      }
      return null;
    };
    const update = () => {
      raf = 0;
      const under = sectionAt(36);
      if (under) setTone(under.dataset.tone === "dark" ? "dark" : "light");
      const middle = sectionAt(window.innerHeight * 0.45);
      // Sections without their own pill (data-nav) light up a neighbor's.
      if (middle) setActive(middle.dataset.nav ?? middle.id);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="pill-nav" data-tone={tone}>
      <a href="#home" className="pill-nav-logo" data-show={active !== "home" ? "true" : undefined} aria-label="HackUNCP home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/brand/hackuncp-logo.png")} alt="" width={908} height={682} />
      </a>
      <nav aria-label="Sections">
        <ul>
          {config.nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="nav-pill" aria-current={active === item.id ? "true" : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
