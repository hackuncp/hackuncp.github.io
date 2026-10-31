import DeskProvider from "@/components/desk/DeskProvider";
import PillNav from "@/components/desk/PillNav";
import HomeDesktop from "@/components/desk/HomeDesktop";
import ScrollCue from "@/components/desk/ScrollCue";
import Highlights from "@/components/desk/Highlights";
import Team from "@/components/desk/Team";
import Schedule from "@/components/desk/Schedule";
import Guide from "@/components/desk/Guide";
import Faq from "@/components/desk/Faq";
import Sponsors from "@/components/desk/Sponsors";
import Posts from "@/components/desk/Posts";
import Connect from "@/components/desk/Connect";
import Subscribe from "@/components/desk/Subscribe";
import MlhBadge from "@/components/desk/MlhBadge";
import { CompareSwitch } from "@/components/desk/DesktopKit";

export default function Home() {
  return (
    <DeskProvider>
      <a href="#about" className="skip-link btn-rose">
        Skip the desktop
      </a>
      <PillNav />
      <MlhBadge />
      <ScrollCue />
      <main>
        <HomeDesktop />
        <Highlights />
        <Team />
        <Sponsors />
        <Schedule />
        <Guide />
        <Faq />
        <Posts />
        <Connect />
        <Subscribe />
      </main>
      <CompareSwitch to="desktop" className="compare-fixed" />
    </DeskProvider>
  );
}
