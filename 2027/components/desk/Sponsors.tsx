"use client";

import config from "@/hackuncp.config";
import Window from "./Window";
import { useDesk } from "./DeskProvider";
import { asset } from "./asset";

const { sponsors, links, event } = config;

/*
  Sponsor logos in one window on a desktop wallpaper, biggest tier first.
  Until `sponsors.list` has entries, each tier shows "logo coming soon" spaces.
*/
/** The logo sheet: tag, heading, logo rows biggest first, and the sponsor button. */
export function SponsorsBody() {
  const { navigate } = useDesk();
  const announced = sponsors.list.length > 0;
  const sponsorHref = links.sponsor ?? (links.email ? `mailto:${links.email}?subject=Sponsoring%20HackUNCP%20${event.year}` : null);

  return (
    <>
      <div className="flex flex-wrap-reverse items-end justify-between gap-x-6 gap-y-3">
        <span className="tag-pill">{sponsors.tag}</span>
        <h2 className="sponsor-heading">{sponsors.heading}</h2>
      </div>

      <div className="sponsor-tiers">
        {sponsors.tiers.map((tier) => {
          const logos = sponsors.list.filter((s) => s.tier === tier.id);
          if (announced && !logos.length) return null;
          return (
            <ul key={tier.id} className={`sponsor-row sponsor-row-${tier.id}`}>
              {announced
                ? logos.map((s) => (
                    <li key={s.name}>
                      <a href={s.url} target="_blank" rel="noreferrer" className="sponsor-logo">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={asset(s.logo)} alt={s.name} />
                      </a>
                    </li>
                  ))
                : Array.from({ length: tier.slots }, (_, i) => (
                    <li key={i} className="logo-slot" aria-hidden="true">
                      logo coming soon
                    </li>
                  ))}
            </ul>
          );
        })}
      </div>

      {!announced && <p className="mt-8 text-center text-[15px] text-ink/60">{sponsors.comingSoon}</p>}

      <div className="mt-8 flex justify-end">
        {sponsorHref ? (
          <a href={sponsorHref} className="btn-rose">
            {sponsors.cta}
          </a>
        ) : (
          <button type="button" className="btn-rose" onClick={() => navigate("contact")}>
            {sponsors.cta}
          </button>
        )}
      </div>
    </>
  );
}

export default function Sponsors() {
  return (
    <section id="sponsors" data-tone="light" className="desk-hero">
      <div className="desk-bg" style={{ backgroundImage: `url(${asset("/backgrounds/sponsors.jpg")})` }} aria-hidden="true" />
      <div className="window-stage">
        <Window title={sponsors.windowTitle} className="sponsor-window" bodyClassName="px-5 pb-7 pt-6 sm:px-12 sm:pb-10 sm:pt-9">
          <SponsorsBody />
        </Window>
      </div>
    </section>
  );
}
