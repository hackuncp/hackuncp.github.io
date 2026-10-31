"use client";

import { useState } from "react";
import config from "@/hackuncp.config";
import Window from "./Window";
import { PrizeGlyph } from "./PixelIcons";
import { asset } from "./asset";

const { guide } = config;

const isTbd = (detail: string) => detail === "TBD" || detail === "To be announced";

/** hacker_guide.pdf: page thumbnails on the side, one paper page at a time. */
export function GuideBody() {
  const [page, setPage] = useState(0);
  const p = guide.pages[page];
  const count = guide.pages.length;

  return (
    <div className="viewer">
      <nav className="viewer-pages" aria-label="Guide pages">
        <ol>
          {guide.pages.map((pg, i) => (
            <li key={pg.title}>
              <button type="button" className="viewer-thumb" aria-current={i === page ? "page" : undefined} onClick={() => setPage(i)}>
                <span className="viewer-mini" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span>
                  {i + 1}. {pg.title}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="viewer-stage">
        <p className="viewer-note">{guide.note}</p>
        <article className="viewer-paper" aria-live="polite">
          <p className="setup-count">
            Page {page + 1} of {count}
          </p>
          <h3 className="viewer-title">{p.title}</h3>
          <p className="viewer-intro">{p.intro}</p>
          <dl className="viewer-list">
            {p.items.map((it) => (
              <div key={it.label} className={`viewer-row ${it.image || it.icon ? "viewer-row-photo" : ""}`}>
                <dt>
                  {it.label}
                  {it.tag && <span className="viewer-tag">{it.tag}</span>}
                </dt>
                {(it.image || it.icon) && (
                  <dd className="viewer-slide-cell">
                    <span className="viewer-prize" aria-hidden="true">
                      {it.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={asset(it.image)} alt="" loading="lazy" />
                      ) : (
                        <PrizeGlyph kind={it.icon!} />
                      )}
                    </span>
                  </dd>
                )}
                {it.detail && <dd data-tbd={isTbd(it.detail) ? "" : undefined}>{it.detail}</dd>}
                {it.lastYear && <dd className="viewer-last">2026: {it.lastYear}</dd>}
              </div>
            ))}
          </dl>
          {p.outro && <p className="viewer-outro">{p.outro}</p>}
          <div className="viewer-nav">
            <button type="button" className="setup-btn" onClick={() => setPage(page - 1)} disabled={page === 0}>
              ← Previous
            </button>
            <button type="button" className="setup-btn" onClick={() => setPage(page + 1)} disabled={page === count - 1}>
              Next →
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default function Guide() {
  return (
    <section id="guide" data-tone="dark" data-nav="faq" className="kraft-section">
      <div className="mx-auto max-w-[1000px] px-4 pt-32 sm:px-8 sm:pt-36">
        <h2 className="display-lg text-center text-ink">{guide.heading}</h2>
        <div className="mt-12">
          <Window title={guide.windowTitle} bodyClassName="p-0">
            <GuideBody />
          </Window>
        </div>
      </div>
    </section>
  );
}
