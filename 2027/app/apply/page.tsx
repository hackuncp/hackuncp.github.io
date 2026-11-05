import type { Metadata } from "next";
import Link from "next/link";
import config from "@/hackuncp.config";
import Window from "@/components/desk/Window";
import MlhBadge from "@/components/desk/MlhBadge";
import { ApplyForm } from "@/components/desk/Apply";
import { Clock, TaskbarLinks } from "@/components/desk/Subscribe";
import { asset } from "@/components/desk/asset";

const { apply, event, taskbar } = config;

export const metadata: Metadata = {
  title: "Apply",
  description: `Apply to ${event.name} ${event.year}, ${event.school}'s 24-hour hackathon on ${event.dates}.`,
  alternates: { canonical: "/apply/" },
};

/** The application on its own page: the apply.exe window on the desk, with the way back to the site. */
export default function ApplyPage() {
  return (
    <main className="desk-hero apply-page">
      <div className="desk-bg" style={{ backgroundImage: `url(${asset("/backgrounds/subscribe.jpg")})` }} aria-hidden="true" />
      <MlhBadge />

      <Link href="/" className="apply-back">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/brand/hackuncp-logo.png")} alt="" width={908} height={682} />
        <span>
          <span aria-hidden="true">← </span>Back to the site
        </span>
      </Link>

      <div className="apply-stage">
        <h1 className="sr-only">
          Apply to {event.name} {event.year}
        </h1>
        <Window title={apply.windowTitle} bodyClassName="p-0">
          <ApplyForm />
        </Window>
      </div>

      <footer className="taskbar">
        <Link href="/" className="taskbar-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/brand/hackuncp-logo.png")} alt="" width={908} height={682} className="h-5 w-auto" />
          {taskbar.start}
        </Link>
        <TaskbarLinks />
        <span className="hidden text-xs text-ink/55 lg:inline">© {event.year} HackUNCP</span>
        <Clock />
      </footer>
    </main>
  );
}
