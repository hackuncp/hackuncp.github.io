"use client";

import { useRef, type CSSProperties } from "react";
import config from "@/hackuncp.config";
import Polaroid, { type Frame } from "./Polaroid";
import { useDesk } from "./DeskProvider";
import { usePhysicsBoard } from "./usePhysicsBoard";

const { connect, links } = config;

interface Spot {
  x: number;
  y: number;
  r: number;
  mx: number;
  my: number;
  w: string;
  f: Frame;
  a: string;
}

// Desktop spots fill the left of the table; mobile spots sit under the text.
const spots: Spot[] = [
  { x: 23, y: 50, r: -14, mx: 32, my: 60, w: "clamp(170px, 21vw, 300px)", f: "white", a: "1/1" },
  { x: 43, y: 74, r: 9, mx: 66, my: 78, w: "clamp(160px, 19vw, 270px)", f: "white", a: "5/4" },
  { x: 15, y: 78, r: -5, mx: 26, my: 87, w: "clamp(140px, 15vw, 220px)", f: "flat", a: "4/5" },
  { x: 72, y: 82, r: 13, mx: 70, my: 58, w: "clamp(150px, 17vw, 250px)", f: "black", a: "4/5" },
  { x: 41, y: 26, r: 7, mx: 72, my: 94, w: "clamp(130px, 13vw, 200px)", f: "white", a: "3/2" },
  { x: 90, y: 66, r: -9, mx: 40, my: 72, w: "clamp(130px, 14vw, 210px)", f: "flat", a: "1/1" },
];

function Receipt() {
  const { header, rows, total, footer } = connect.receipt;
  return (
    <span className="receipt">
      {header.map((h) => (
        <span key={h} className="block text-center">
          {h}
        </span>
      ))}
      <span className="receipt-rule" />
      {rows.map(([k, v]) => (
        <span key={k} className="flex justify-between gap-3">
          <span>{k}</span>
          <span>{v}</span>
        </span>
      ))}
      <span className="receipt-rule" />
      <span className="flex justify-between gap-3 font-medium">
        <span>{total[0]}</span>
        <span>{total[1]}</span>
      </span>
      <span className="receipt-rule" />
      {footer.map((f) => (
        <span key={f} className="block text-center">
          {f}
        </span>
      ))}
      <span className="receipt-barcode" aria-hidden="true" />
    </span>
  );
}

/** The "let's connect" table: copy on the right, prints and a receipt to toss around. */
export function ConnectBoard({ inWindow = false }: { inWindow?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  usePhysicsBoard(root, {
    spin: true,
    collide: false,
    frictionAir: 0.09,
    restitution: 0.35,
    stiffness: 0.14,
    dropIn: true,
    // On the scrolling site the fixed nav covers the top of the table.
    inset: { top: inWindow ? 0 : 60 },
  });
  const { open } = useDesk();
  const email = links.email ? `mailto:${links.email}` : null;
  const sponsor = links.sponsor ?? (links.email ? `mailto:${links.email}?subject=Sponsoring%20HackUNCP%20${config.event.year}` : null);

  return (
    <div ref={root} className={`connect-board ${inWindow ? "connect-board-window" : ""}`}>
      <div className="connect-folder" aria-hidden="true">
        <span>{connect.tab}</span>
      </div>

      <div data-obstacle className="connect-copy">
        <h2 className="display-lg text-ink">{connect.heading}</h2>
        <p className="mt-6 text-lg leading-relaxed text-ink/85">{connect.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {email ? (
            <a href={email} className="btn-outline btn-outline-dark">
              contact
            </a>
          ) : (
            <span className="btn-outline btn-outline-dark opacity-60" title="Contact email TBD">
              contact · email TBD
            </span>
          )}
          {sponsor && (
            <a href={sponsor} className="btn-outline btn-outline-dark">
              sponsor {config.event.year}
            </a>
          )}
        </div>
        <p className="mt-6 text-sm text-ink/60">
          Organized by{" "}
          <a href={links.organizer} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            AI@UNCP
          </a>
          {links.instagram && (
            <>
              {" · "}
              <a href={links.instagram} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                Instagram
              </a>
            </>
          )}
          {links.linkedin && (
            <>
              {" · "}
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                LinkedIn
              </a>
            </>
          )}
          {links.discord && (
            <>
              {" · "}
              <a href={links.discord} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                Discord
              </a>
            </>
          )}
        </p>
      </div>

      <button
        type="button"
        data-phys
        className="table-item"
        style={{ "--x": "9%", "--y": "34%", "--r": "12deg", "--mx": "84%", "--my": "70%", "--mr": "8deg" } as CSSProperties}
        aria-label="A receipt from HackUNCP 2026"
      >
        <span className="drop-in">
          <Receipt />
        </span>
      </button>

      {connect.photos.map((photo, i) => {
        const s = spots[i % spots.length];
        const style = {
          "--x": `${s.x}%`,
          "--y": `${s.y}%`,
          "--r": `${s.r}deg`,
          "--mx": `${s.mx}%`,
          "--my": `${s.my}%`,
          "--mr": `${s.r / 2}deg`,
          width: s.w,
        } as CSSProperties;
        return (
          <button
            key={photo}
            type="button"
            data-phys
            className="table-item"
            style={style}
            onClick={(e) => open({ kind: "photo", photo, set: connect.photos }, e.currentTarget)}
            aria-label={`Open photo: ${config.photos[photo].caption}`}
          >
            <span className="drop-in">
              <Polaroid photo={photo} frame={s.f} aspect={s.a} className="w-full" />
              {i === 0 && <span className="paperclip" aria-hidden="true" />}
            </span>
          </button>
        );
      })}

      <p className="table-hint" aria-hidden="true">
        go on, toss them around
      </p>
    </div>
  );
}

export default function Connect() {
  return (
    <section id="contact" data-tone="dark" className="paper-section">
      <ConnectBoard />
    </section>
  );
}
