"use client";

import { useState, type CSSProperties } from "react";
import config from "@/hackuncp.config";
import Window from "./Window";
import { PixelAvatar } from "./PixelIcons";
import { asset } from "./asset";

const { team } = config;
const ALL = "Everyone";
const groups = [ALL, ...new Set(team.members.map((m) => m.group))];
// Each group gets its own ring color around the photo.
const rings = ["#8b7349", "#cfa198", "#7f9f63", "#2f62d6", "#6e402c", "#b8473a"];

/** The Finder-style team view: teams in the sidebar, people as icons. */
export function TeamBody() {
  const [group, setGroup] = useState(ALL);
  const people = group === ALL ? team.members : team.members.filter((m) => m.group === group);

  return (
    <>
      <div className="finder">
        <nav className="finder-sidebar" aria-label="Teams">
          <p className="finder-label">teams</p>
          <ul>
            {groups.map((g) => (
              <li key={g}>
                <button type="button" className="finder-item" aria-pressed={g === group} onClick={() => setGroup(g)}>
                  {g}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="finder-main">
          <p className="finder-path">
            <span>HackUNCP {config.event.year}</span>
            <span aria-hidden="true">›</span>
            <span>{group}</span>
            <span className="ml-auto" aria-live="polite">
              {people.length} {people.length === 1 ? "person" : "people"}
            </span>
          </p>
          <ul className="people-grid">
            {people.map((m) => {
              const ring = rings[(groups.indexOf(m.group) - 1) % rings.length];
              return (
                <li key={`${m.group}-${m.role}`} className="person" style={{ "--ring": ring } as CSSProperties}>
                  <span className="person-photo">
                    {m.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={asset(m.photo)} alt="" />
                    ) : (
                      <PixelAvatar />
                    )}
                  </span>
                  <span className="person-name">{m.name}</span>
                  <span className="person-role">{m.role}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default function Team() {
  return (
    <section id="team" data-tone="light" data-nav="about" className="brick-section">
      <div className="mx-auto max-w-[1100px] px-4 pb-32 pt-4 sm:px-8">
        <h2 className="display-lg text-center text-cream">{team.heading}</h2>
        <p className="mx-auto mt-5 max-w-[44ch] text-center text-lg leading-relaxed text-cream/85">{team.body}</p>

        <div className="mt-12">
          <Window title={team.windowTitle} bodyClassName="p-0">
            <TeamBody />
          </Window>
        </div>
      </div>
    </section>
  );
}
