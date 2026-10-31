import Link from "next/link";
import Window from "@/components/desk/Window";
import { DeskGlyph } from "@/components/desk/PixelIcons";
import { asset } from "@/components/desk/asset";

export default function NotFound() {
  return (
    <main className="desk-hero grid place-items-center px-4">
      <div className="desk-bg" style={{ backgroundImage: `url(${asset("/backgrounds/home.jpg")})` }} aria-hidden="true" />
      <div className="w-full max-w-[460px]">
        <Window title="Error" bodyClassName="p-6 sm:p-8">
          <div className="flex items-start gap-5">
            <DeskGlyph kind="finder" />
            <div>
              <h1 className="font-display text-3xl tracking-tight">page not found</h1>
              <p className="mt-2 leading-relaxed text-ink/75">
                That file isn&apos;t on this desktop. It may have moved, or the link has a typo.
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Link href="/" className="btn-rose">
              Back to the desktop
            </Link>
          </div>
        </Window>
      </div>
    </main>
  );
}
