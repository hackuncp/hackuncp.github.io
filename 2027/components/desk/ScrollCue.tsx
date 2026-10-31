"use client";

import { useEffect, useState } from "react";
import config from "@/hackuncp.config";

/*
  The home desktop looks like a finished screen, so this says there's more
  below. It's pinned to the bottom of the browser window, because the desktop
  can be taller than a small laptop screen, and leaves once the page scrolls.
*/
export default function ScrollCue() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => setShow(window.scrollY < 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a href="#about" className="scroll-cue" data-show={show ? "true" : undefined}>
      <span className="max-md:sr-only">{config.hero.scrollCue}</span>
      <span className="scroll-cue-arrow" aria-hidden="true">
        ↓
      </span>
    </a>
  );
}
