"use client";

import config from "@/hackuncp.config";
import Window from "./Window";
import { photoSrc, useDesk } from "./DeskProvider";
import { asset } from "./asset";

const { posts, links } = config;

/** The camera-roll view: account header, one large post, then the rest in a list. */
export function PostsBody() {
  const { open } = useDesk();
  const set = posts.items.map((p) => p.photo);

  return (
    <div className="photos-app">
      <div className="photos-profile">
        <span className="photos-avatar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/brand/hackuncp-logo.png")} alt="" width={908} height={682} />
        </span>
        <p className="min-w-0">
          <span className="photos-handle">hackuncp</span>
          <span className="photos-tagline">{posts.tagline}</span>
        </p>
        {links.instagram ? (
          <a href={links.instagram} target="_blank" rel="noreferrer" className="btn-outline btn-outline-dark btn-sm ml-auto">
            follow on Instagram
          </a>
        ) : (
          <span className="photos-soon">Instagram link coming soon</span>
        )}
      </div>
      <ul className="photos-feed">
        {posts.items.map((p, i) => (
          <li key={p.label} className="photo-post" data-lead={i === 0 ? "" : undefined}>
            <button
              type="button"
              onClick={(e) => open({ kind: "photo", photo: p.photo, set }, e.currentTarget)}
              aria-label={`Open photo: ${config.photos[p.photo].caption}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoSrc(p.photo, i === 0 ? "full" : "thumb")} alt="" loading="lazy" />
            </button>
            <div className="min-w-0">
              <span className="post-label">{p.label}</span>
              <p className="post-caption">{p.caption}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** "Follow along": the latest posts in a camera-roll window. */
export default function Posts() {
  return (
    <section id="posts" data-tone="dark" data-nav="contact" className="blush-section">
      <div className="mx-auto max-w-[1180px] px-4 py-24 sm:px-8 sm:py-32">
        <p className="font-hand text-[26px] leading-none text-cocoa">{posts.kicker}</p>
        <h2 className="display-lg mt-2 text-ink">{posts.heading}</h2>

        <div className="mt-10">
          <Window title="camera_roll" bodyClassName="p-0">
            <PostsBody />
          </Window>
        </div>
      </div>
    </section>
  );
}
