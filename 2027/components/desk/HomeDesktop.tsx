"use client";

import { useRef } from "react";
import config from "@/hackuncp.config";
import DeskIcon from "./DeskIcon";
import Window from "./Window";
import { WelcomeBody, useIconActions, useTrashEasterEgg } from "./DesktopKit";
import { usePhysicsBoard } from "./usePhysicsBoard";
import { asset } from "./asset";

const { hero } = config;

export default function HomeDesktop() {
  const root = useRef<HTMLElement>(null);
  const board = usePhysicsBoard(root, {
    inset: { top: 76, bottom: 56, left: 6, right: 6 },
    frictionAir: 0.075,
    restitution: 0.6,
    stiffness: 0.24,
  });
  const openIcon = useIconActions();
  useTrashEasterEgg(root, board);

  return (
    <section id="home" ref={root} data-tone="light" className="desk-hero desk-hero-home" aria-label="HackUNCP 2027 desktop">
      <div className="desk-bg" style={{ backgroundImage: `url(${asset("/backgrounds/home.jpg")})` }} aria-hidden="true" />

      {config.desktop.map((item, i) => (
        <DeskIcon key={i} item={item} shape={i % 3 === 1 ? "square" : "wide"} onOpen={openIcon} />
      ))}

      <div className="hero-stage">
        <div data-obstacle className="hero-window">
          <Window title={hero.windowTitle} bodyClassName="px-5 pb-6 pt-5 sm:px-9 sm:pb-9 sm:pt-7">
            <WelcomeBody />
          </Window>
        </div>
      </div>

      <p className="desk-hint" aria-hidden="true">
        {hero.hint} <span className="inline-block -rotate-12">↗</span>
      </p>
    </section>
  );
}
