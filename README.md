# HackUNCP 2027

The site for **HackUNCP 2027**, UNC Pembroke's 24-hour hackathon for college students: **March 20–21, 2027**, Saturday 5 PM to Sunday 5 PM. Organized by AI@UNCP.

The design is a retro computer desktop crossed with a scrapbook: a draggable desktop over a blurred photo, manila folders of prints, and app-style windows for the team, sponsors, FAQ and posts, ending on a cream "let's connect" table of photos you can toss around. The physics runs on [matter.js](https://brm.io/matter-js/).

### Two versions, side by side

While you decide on a design, both are live:

- **`/`, the scrolling site:** sections stacked down one long page.
- **`/desktop`, the one-screen desktop:** nothing scrolls. Every section is a folder that opens as a window (on phones, full screen like an app). Links such as `/desktop#sponsors` open straight to that window, and the address follows whichever window is in front. Windows can be minimized to the taskbar and maximized (or double-click a title bar).

  It dresses up as the visitor's own computer, chosen before the page paints: **Mac look** on Macs, iPhones and iPads (three circles top-left, blue folders, Trash); **Windows look** everywhere else (─ □ ✕ top-right, manila folders, Recycle Bin, a Windows-style taskbar). To preview the other one, add `?look=windows` or `?look=mac` to the address, for example `/desktop?look=windows`. There are no Apple or Microsoft logos; the start button and icons are HackUNCP's own.

Both read the same `hackuncp.config.ts` and reuse the same section content, so an edit shows up in both. A small switch (bottom of the scrolling site, in the desktop's taskbar) jumps between them. Once you pick one, set `compare: false` in the config, or delete the other version (`app/desktop/` and `components/desk/DesktopOS.tsx` for the desktop; the section list in `app/page.tsx` for the scrolling site).

---

## Run it

Requires Node 20.9 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000. For a production build: `npm run build && npm start`.

Fonts (Fraunces, Jost, Caveat, IBM Plex Mono) come from Google Fonts through `next/font`, so the first build needs internet access.

---

## Edit content: one file

Every word, date and link lives in **`hackuncp.config.ts`**. Components never hardcode event copy.

- **Links:** `links.apply`, `links.email`, `links.sponsor`, `links.instagram`, `links.linkedin` and `links.discord` start as `null`. A null link hides its button or shows a "coming soon" state, so fill them in as they're ready and the site updates on its own.
- **Countdown:** `event.startsAt` drives "N days to go" in the hero and "T-minus" in the taskbar.
- **Desktop version icons:** `os.icons`. `opens` names the section window an icon opens.
- **Desktop icons:** `desktop` (home) and `subscribe.desktop` list each icon and where it starts, as a percentage of the section. Icons without a `mobile` spot are hidden on phones, and icons marked `wide` only show on screens 1180px and up.
- **Hacker guide:** `guide.pages` (Tracks, Prizes, Submitting, Judging, Venue, Food & help). Right now each page describes HackUNCP 2026, taken from [its Devpost page](https://hackuncp-2026.devpost.com/); rewrite them for 2027 as details are confirmed. A detail of `"TBD"` shows greyed out.
- **Schedule:** `schedule.days` holds each day's events. An item's `lastYear` shows the 2026 time in grey next to a TBD. Replace `"TBD"` with a time as the program firms up. The "add to calendar" button downloads one calendar event for the whole weekend (`schedule.calendar`).
- **Photos:** the 20 HackUNCP 2026 photos are in `public/photos/2026/` (full size) and `public/photos/2026/thumbs/`. Their file names, alt text and captions are under `photos`.
- **Prizes:** the guide's Prizes page lists each prize as "To be announced" until the 2027 budget is set. When a prize is confirmed, replace its `detail`. A prize can also show a picture: `image` for a product photo in `public/prizes/` (iPad, AirPods Pro and Lenovo Tab photos are already there, cut from the 2026 award slides without the winners) or `icon` for a drawn pixel icon (`swag`, `earbuds`, `wallet`, `mouse` or `iot`).
- **Team:** `team.members`. Each person's `group` becomes a folder in the team window's sidebar. Set `photo` to a path under `public/` (for example `/team/jane.jpg`) to replace the pixel avatar.
- **Sponsors:** add each confirmed sponsor to `sponsors.list` with a logo under `public/sponsors/` and a `tier` (`title`, `gold` or `silver`). Logos show in rows, biggest tier first. While the list is empty, the window shows "logo coming soon" spaces (`sponsors.tiers[].slots` sets how many).
- **Posts:** `posts.items` are the "follow along" cards. Their captions also work as ready-to-post Instagram copy.
- **Application:** `apply` holds the application form (an installer-style "HackUNCP 2027 Setup" with five steps: About you, School, Experience, The weekend, Agreements). Edit the questions in `apply.steps`. It has three states:
  - **Coming soon (now):** "Applications open soon" plus the mailing list.
  - **Built-in form:** set `apply.action` to a URL that accepts a form POST (Formspree, Getform, Basin, a Google Apps Script…). That opens applications, and every answer is sent there in one submission.
  - **Outside platform:** set `links.apply` and the window links there instead.

  Add `?apply=preview` to the address (for example `/desktop?apply=preview#apply`) to try the built-in form before it's connected. Nothing is sent in preview.
- **Newsletter:** set `subscribe.action` to a form endpoint (Mailchimp, Buttondown, Formspree, Google Forms). Until then, the form says the list isn't live yet.
- **MLH:** once HackUNCP is accepted for the 2027 season, set `mlh.member` to `true` and paste the exact badge image and link from MLH's organizer dashboard into `mlh.badge` and `mlh.href`.

Backgrounds are in `public/backgrounds/` (`home.jpg`, `sponsors.jpg`, `subscribe.jpg`); replace a file to change it. The logo is `public/brand/hackuncp-logo.png`.

---

## What's on the page

1. **Home** (`#home`): the desktop. Icons can be dragged and thrown; a click opens a window (photo viewer, the 2026 folder, README, past events, apply). Throw a photo into the Trash for a surprise. A "scroll down for more" button (`hero.scrollCue`) sits at the bottom of the screen until the page scrolls, and a strip of the next section shows below the desktop.
2. **About** (`#about`): "last season's highlights" (Build / Learn / Win folders), "what is HackUNCP?" with index cards linking to the 2025 and 2026 Devposts, then the **team** window (`#team`) with teams in a Finder-style sidebar.
3. **Sponsors** (`#sponsors`): one window of sponsor logos on its own desktop, with a "sponsor HackUNCP 2027" button.
4. **FAQ** (`#faq`): the `schedule.ics` calendar window (`#schedule`), the `hacker_guide.pdf` window (`#guide`), then a searchable `faq.txt` window.
5. **Contact** (`#contact`): a "follow along" camera-roll window (`#posts`), then "let's connect" with a table of photos and a receipt you can toss around.
6. **Apply** (`#apply`): the apply.exe window (the application, or the mailing list until it opens) and the taskbar footer.

### Accessibility and motion

- Every icon and photo is a real button or link, so Tab and Enter open it like a click. Windows close with Escape and hand focus back to whatever opened them.
- `prefers-reduced-motion`: photos appear already settled instead of dropping in, the background drift and the folder, card and window animations stop, and smooth scrolling is off. Dragging still works because the visitor starts it.

---

## Project layout

```
hackuncp.config.ts          ← all content
app/
  layout.tsx                fonts and metadata
  page.tsx                  the scrolling site: section order
  desktop/page.tsx          the one-screen desktop version
  styles.css                design tokens, textures, every component style
  not-found.tsx             "page not found" error window
components/desk/
  usePhysicsBoard.ts        matter.js ⇄ DOM bridge (drag, throw, spin)
  DeskProvider.tsx          window manager + toast (opens whole sections on /desktop)
  DesktopOS.tsx             the one-screen desktop: folders, menu, taskbar, links per window
  DesktopKit.tsx            shared desktop pieces: icon actions, welcome window, Trash
  Window.tsx                retro window chrome
  PillNav.tsx               the pill nav, with scroll-spy and light/dark tones
  HomeDesktop.tsx  ScrollCue.tsx  Highlights.tsx  Team.tsx  Sponsors.tsx  Schedule.tsx  Guide.tsx  Faq.tsx
  Posts.tsx  Connect.tsx  Subscribe.tsx  Apply.tsx  MlhBadge.tsx
  DeskIcon.tsx  PixelIcons.tsx  Polaroid.tsx  useCountdown.ts
public/
  brand/  backgrounds/  photos/2026/
```

---

## Launch checklist

Search `hackuncp.config.ts` for `TBD`:

- [ ] Venue: building and room (FAQ)
- [ ] Application: connect the built-in form (`apply.action`) or link an outside one (`links.apply`)
- [ ] MLH agreement wording on the application, once MLH membership is confirmed
- [ ] Contact email (`links.email`) and sponsor contact or prospectus
- [ ] Instagram, LinkedIn, Discord
- [ ] Newsletter endpoint (`subscribe.action`)
- [ ] MLH 2027 membership and badge
- [ ] Team names, roles and photos
- [ ] Confirmed sponsors and logos
- [ ] Overnight plan (FAQ)
- [ ] Schedule times (`schedule.days`)
- [ ] Hacker guide for 2027: tracks, prizes, team size and submission rules, judging, building, parking, food (`guide.pages`), plus the team-size and food FAQ answers
- [ ] HackUNCP Code of Conduct and Privacy Policy (the 2026 Devpost rules refer to both)

### Hosting

The site is a static export: `npm run build` writes the whole site to `out/`, which any static host can serve.

It's published on **GitHub Pages** at https://hackuncp.github.io/ from the repo `hackuncp/hackuncp.github.io`. `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. In the repo, Settings → Pages → Source is set to **GitHub Actions**.

The address lives in `meta.url` in the config, and in `public/robots.txt` and `public/sitemap.xml`. `meta.googleVerification` keeps HackUNCP's Google Search Console check working.

The 2025 and 2026 archive page that used to be here is in this repo's Git history, ending at commit `d2597c1`.

The site can also run from a folder, like a project site at `https://example.github.io/hackuncp-2027/`. The workflow passes the folder name to the build as `NEXT_PUBLIC_BASE_PATH`, and `components/desk/asset.ts` adds it to every file path. Use `asset("/…")` for any new file from `public/` you reference in code.

To try a folder build locally: `NEXT_PUBLIC_BASE_PATH=/hackuncp-2027 npm run build`, then serve a folder that holds `out/` renamed to `hackuncp-2027`.

The desktop version (`/desktop/`) is published too, though nothing links to it while `compare` is `false`.
