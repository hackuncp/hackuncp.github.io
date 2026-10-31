"use client";

import { useState } from "react";
import config from "@/hackuncp.config";
import Window from "./Window";

const { faq } = config;

/** The faq.txt view: a search box over the questions. */
export function FaqBody() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const items = q ? faq.items.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(q)) : faq.items;

  return (
    <>
      <div className="faq-toolbar">
        <label className="relative flex-1">
          <span className="sr-only">Search the FAQ</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions…"
            className="faq-search"
          />
        </label>
        <span className="font-mono text-xs text-ink/50" aria-live="polite">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>
              <span>{item.q}</span>
              <span className="faq-mark" aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
        {!items.length && (
          <p className="px-6 py-10 text-center text-ink/60">
            No matches. Ask us directly in the{" "}
            <a href="#contact" className="underline underline-offset-4">
              contact section
            </a>
            .
          </p>
        )}
      </div>
    </>
  );
}

export default function Faq() {
  return (
    <section id="faq" data-tone="dark" className="kraft-section">
      <div className="mx-auto max-w-[920px] px-4 pb-28 pt-32 sm:px-8 sm:pt-36">
        <h2 className="display-lg text-center text-ink">{faq.heading}</h2>
        <div className="mt-12">
          <Window title={faq.windowTitle} bodyClassName="p-0">
            <FaqBody />
          </Window>
        </div>
      </div>
    </section>
  );
}
