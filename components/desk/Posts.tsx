"use client";

import config from "@/hackuncp.config";
import Window from "./Window";
import { photoSrc, useDesk } from "./DeskProvider";
import { asset } from "./asset";

const { posts, links } = config;

/** The camera-roll view: account toolbar and the post grid. */
export function PostsBody() {
  const { open } = useDesk();
  const set = posts.items.map((p) => p.photo);

  return (
    <>
      <div className="photos-toolbar">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/brand/hackuncp-logo.png")} alt="" width={908} height={682} className="h-7 w-auto" />
        <span className="font-medium">hackuncp</span>
        {links.instagram ? (
          <a href={links.instagram} target="_blank" rel="noreferrer" className="btn-outline btn-outline-dark btn-sm ml-auto">
            follow on Instagram
          </a>
        ) : (
          <span className="ml-auto text-sm text-ink/55">Instagram link coming soon</span>
        )}
      </div>
      <ul className="photos-grid">
        {posts.items.map((p) => (
          <li key={p.label} className="photo-post">
            <button
              type="button"
              className="block w-full overflow-hidden rounded-lg"
              onClick={(e) => open({ kind: "photo", photo: p.photo, set }, e.currentTarget)}
              aria-label={`Open photo: ${config.photos[p.photo].caption}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photoSrc(p.photo, "thumb")} alt="" loading="lazy" className="aspect-square w-full object-cover" />
            </button>
            <span className="post-label mt-3 inline-block">{p.label}</span>
            <p className="post-caption">{p.caption}</p>
          </li>
        ))}
      </ul>
    </>
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
