import Image from "next/image";
import { CtaLockup } from "./sdp";
import { Glyph } from "./icons";
import { site, kiloRange } from "@/lib/site";
import { hero, heroPointers } from "@/lib/content";

/**
 * S04 · HERO — SERVER component.
 *
 * Copy source: "Kunal Project File.md" (Marathi funnel) hero block, top to
 * bottom: audience callout → H1 (the 8–12 kilos / 90 days promise) → the
 * guarantee line → MARATHI Framework lead → the "No giving up Poli-Bhaji…" line
 * → MEET YOUR COACH card → CTA lockup → five-item feature strip.
 *
 * The doc has no VSL in the hero; its slot is the coach card. VSLFrame stays in
 * the repo (unused) so the video can come back as a one-line change.
 *
 * Every number is read from `site`, never typed inline, so the kilo range and
 * the promise window can move from Vercel env without a code change.
 */
export function Hero() {
  return (
    <section id="top" className="sdp-hero s04-hero">
      <div className="sdp-wrap sdp-hero-inner">
        <div className="sdp-callout">
          <span>{hero.callout}</span>
        </div>

        <h1 className="sdp-h1" data-sdp-reveal style={{ "--d": ".06s" } as React.CSSProperties}>
          <span className="sdp-h1-l1">
            Lose <span className="s04-h1-kilos">{kiloRange} Kilos</span>, Reduce Your
            Waistline &amp; Build A Stronger, Fitter Body
          </span>
          <span className="sdp-h1-l2">In Just {site.promiseDays} Days</span>
        </h1>

        <p className="s04-hero-promise" data-sdp-reveal style={{ "--d": ".12s" } as React.CSSProperties}>
          {hero.promise}
        </p>

        <p className="s04-hero-sub" data-sdp-reveal style={{ "--d": ".14s" } as React.CSSProperties}>
          Using my <strong>MARATHI Framework</strong>, backed by experience coaching{" "}
          {site.successStories} clients, including international cricketers.
          Maharashtrian-friendly nutrition, personalised strength training and weekly 1:1
          check-ins, so you lose fat without sacrificing muscle or your busy lifestyle.
        </p>

        <p className="s04-hero-nogive" data-sdp-reveal style={{ "--d": ".16s" } as React.CSSProperties}>
          {hero.noGivingUp}
        </p>

        <div className="s04-coach" data-sdp-reveal style={{ "--d": ".20s" } as React.CSSProperties}>
          <div className="s04-coach-photo">
            <Image
              src={hero.coach.photo}
              alt="Kunal Chalke, fitness coach"
              width={1050}
              height={1400}
              sizes="(max-width: 640px) 120px, 180px"
              priority
            />
          </div>
          <div className="s04-coach-body">
            <div className="s04-coach-eyebrow">{hero.coach.eyebrow}</div>
            <div className="s04-coach-name">{hero.coach.name}</div>
            <div className="s04-coach-role">{hero.coach.role}</div>
            <p className="s04-coach-line">{hero.coach.line}</p>
          </div>
        </div>

        <div data-sdp-reveal style={{ "--d": ".26s" } as React.CSSProperties}>
          <CtaLockup />
        </div>

        <ul
          className="sdp-hero-pointers s04-pointers"
          data-sdp-reveal
          style={{ "--d": ".32s" } as React.CSSProperties}
        >
          {heroPointers.map((p) => (
            <li className="pt" key={p.label}>
              <span className="ico" aria-hidden>
                <Glyph name={p.icon} size={18} />
              </span>
              {p.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
