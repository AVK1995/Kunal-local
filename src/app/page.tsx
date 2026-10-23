import S01TrustBanner from "@/components/sections/S01TrustBanner";
import S02TrustStrip from "@/components/sections/S02TrustStrip";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { WhoFor } from "@/components/WhoFor";
import { LifeMismatch } from "@/components/LifeMismatch";
import { MarathiFramework } from "@/components/MarathiFramework";
import { Founder } from "@/components/Founder";
import { Programme } from "@/components/Programme";
import { Guarantee } from "@/components/Guarantee";
import { EvenIf } from "@/components/EvenIf";
import { FinalCta } from "@/components/FinalCta";
import { Colophon } from "@/components/Colophon";
import { StickyCTA } from "@/components/StickyCTA";
import { ClientBehaviors } from "@/components/ClientBehaviors";
import { QualifyModal } from "@/components/np/QualifyModal";
import "@/components/sections/QualifyModal.css";

/* Kraft With Kunal — MARATHI funnel landing page.
   Section order follows "Kunal Project File.md" top to bottom:
   trust bar → header → hero (with the Meet Your Coach card) → proof (videos,
   before/after, client chats) → "Does This Sound Like You?" → "A Life You
   Don't Live" → the MARATHI Framework → Meet Kunal Chalke → Everything You Get
   → guarantee → FAQ → closing CTA → footer → sticky bar.
   Every section is a server component emitting data-* hooks; ClientBehaviors is
   the one delegated client file that wires all interactivity.
   Dormant (not in the doc, kept in the repo): VSLFrame, EliteAthlete, Mechanism. */
export default function Home() {
  return (
    <div className="sdp-root">
      {/* Reading-progress hairline pinned to the top of the viewport.
          ClientBehaviors writes --scroll-progress; with JS off it stays at 0
          and reads as a plain rule. */}
      <div className="sdp-scrollbar" aria-hidden="true" data-scrollbar>
        <span className="sdp-scrollbar-fill" />
      </div>
      <S01TrustBanner />
      <S02TrustStrip />
      <Nav />
      <main>
        <Hero />
        <Proof />
        <WhoFor />
        <LifeMismatch />
        <MarathiFramework />
        <Founder />
        <Programme />
        <Guarantee />
        <EvenIf />
        <FinalCta />
      </main>
      <Colophon />
      <StickyCTA />
      {/* Mounted once. Every CTA on the page carries `data-qualify-open`; this
          listens for those clicks and runs the qualifier before handing off to
          /book-a-call. No payment step exists in this funnel. */}
      <QualifyModal />
      <ClientBehaviors />
    </div>
  );
}
