"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import config from "@/hackuncp.config";
import DeskIcon from "./DeskIcon";
import Window from "./Window";
import { useIconActions } from "./DesktopKit";
import { ApplyBody } from "./Apply";
import { usePhysicsBoard } from "./usePhysicsBoard";
import { useCountdown } from "./useCountdown";
import { asset } from "./asset";

const { subscribe, taskbar, event, links } = config;

/** Counts down to check-in; after that it's just a clock. */
export function Clock() {
  const countdown = useCountdown(event.startsAt);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { weekday: "short", hour: "numeric", minute: "2-digit" }));
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="taskbar-clock" title={countdown ? `Check-in: ${event.dates}, 5 PM` : undefined}>
      {countdown ? `T-minus ${countdown.days}d ${countdown.hours}h` : time}
    </span>
  );
}

/** The mailing-list form. `heading={false}` when the surrounding window already has one. */
export function Newsletter({ heading = true }: { heading?: boolean }) {
  const inputId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "not-live" | "error">("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!subscribe.action) return setStatus("not-live");
    setStatus("sending");
    try {
      // The waitlist script answers {"ok":true} once the email is saved in the sheet.
      const res = await fetch(subscribe.action, { method: "POST", body: new FormData(e.currentTarget) });
      const reply: { ok?: boolean } = await res.json();
      setStatus(reply.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  const message = {
    idle: "",
    sending: "Sending…",
    done: "You're on the list. See you soon!",
    "not-live": subscribe.notLive,
    error: "Something went wrong. Please try again.",
  }[status];

  return (
    <form onSubmit={submit} className="grid gap-3">
      {heading && <h2 className="newsletter-heading">{subscribe.heading}</h2>}
      <label htmlFor={inputId} className="newsletter-label">
        {subscribe.label}
      </label>
      <input id={inputId} name="email" type="email" required autoComplete="email" className="newsletter-input" />
      <input type="hidden" name="form" value="waitlist" />
      {/* Hidden from people; bots fill in every field, and the script skips anything with this one filled. */}
      <label className="absolute -left-[10000px] size-px overflow-hidden" aria-hidden="true">
        Leave this empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" className="newsletter-button" disabled={status === "sending"}>
        {subscribe.button}
      </button>
      <p className="min-h-6 text-center text-[15px] text-cocoa" role="status" aria-live="polite">
        {message || subscribe.fineprint}
      </p>
    </form>
  );
}

/** Archive and social links for a taskbar; socials appear once their links are set. */
export function TaskbarLinks() {
  return (
    <nav aria-label="More HackUNCP" className="taskbar-links">
      {[
        ...taskbar.links,
        ...(links.instagram ? [{ label: "Instagram", href: links.instagram }] : []),
        ...(links.linkedin ? [{ label: "LinkedIn", href: links.linkedin }] : []),
        ...(links.discord ? [{ label: "Discord", href: links.discord }] : []),
      ].map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
          {l.label}
        </a>
      ))}
    </nav>
  );
}

export default function Subscribe() {
  const root = useRef<HTMLElement>(null);
  usePhysicsBoard(root, { inset: { top: 76, bottom: 64, left: 6, right: 6 }, frictionAir: 0.075, restitution: 0.6, stiffness: 0.24 });
  const openIcon = useIconActions();

  return (
    <section id="apply" ref={root} data-tone="light" className="desk-hero desk-hero-subscribe">
      <div className="desk-bg" style={{ backgroundImage: `url(${asset("/backgrounds/subscribe.jpg")})` }} aria-hidden="true" />

      {subscribe.desktop.map((item, i) => (
        <DeskIcon key={i} item={item} shape={i % 2 ? "square" : "wide"} onOpen={openIcon} />
      ))}

      <div className="hero-stage">
        <div data-obstacle className="newsletter-window">
          <Window title={config.apply.windowTitle} bodyClassName="p-0">
            <ApplyBody />
          </Window>
        </div>
      </div>

      <footer className="taskbar">
        <button type="button" className="taskbar-start" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/brand/hackuncp-logo.png")} alt="" width={908} height={682} className="h-5 w-auto" />
          {taskbar.start}
        </button>
        <TaskbarLinks />
        <span className="hidden text-xs text-ink/55 lg:inline">© {event.year} HackUNCP</span>
        <Clock />
      </footer>
    </section>
  );
}
