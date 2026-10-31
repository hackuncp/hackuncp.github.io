import type { Metadata } from "next";
import DesktopOS from "@/components/desk/DesktopOS";
import MlhBadge from "@/components/desk/MlhBadge";

export const metadata: Metadata = { title: "Desktop" };

/*
  Picks the look before anything paints: Apple computers, iPhones and iPads get
  the Mac look; Windows, Android, Linux and Chromebooks get the Windows look.
  ?look=windows or ?look=mac in the address overrides it, for previewing.
*/
const pickLook = `(function () {
  try {
    var forced = new URLSearchParams(location.search).get("look");
    var platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
    var apple = /mac|iphone|ipad|ipod/i.test(platform) || /Mac OS X|iPhone|iPad/.test(navigator.userAgent);
    var look = forced === "windows" || forced === "mac" ? forced : apple ? "mac" : "windows";
    document.currentScript.parentElement.setAttribute("data-look", look);
  } catch (e) {}
})();`;

/** The one-screen desktop version, kept next to the scrolling site while you compare. */
export default function DesktopPage() {
  return (
    // The look is set by the script before React loads, so React mustn't fight it.
    <main className="os" data-look="mac" suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: pickLook }} />
      <MlhBadge />
      <DesktopOS />
    </main>
  );
}
