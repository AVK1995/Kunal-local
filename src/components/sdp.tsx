import { site } from "@/lib/site";
import { ctaLabel, ctaScarcity } from "@/lib/content";

/** Plain arrow glyph for the CTA's circular chip (no ".arrow" class so it
 *  doesn't inherit the SDP circle styling meant for its wrapper). */
export function ArrowGlyph({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** SDP section masthead — dash-eyebrow + display H2 (accent word via <em>) + sub. */
export function SdpHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <>
      <div className="sdp-eyebrow center">{eyebrow}</div>
      <h2 className="sdp-h2">{title}</h2>
      {sub && <p className="sdp-sub">{sub}</p>}
    </>
  );
}

/**
 * THE CTA LOCKUP — one group, reused verbatim at every CTA on the page.
 *
 * Per the Marathi copy doc ("Kunal Project File.md") every CTA is the same two
 * lines: the button ("Book Your Free 1:1 Fitness Strategy Call") and the italic
 * scarcity line under it ("Limited consultation slots available each week.").
 * The three reassurance badges and the rolling countdown that used to sit here
 * belonged to the High-Performer funnel and are not in this doc, so they are no
 * longer rendered (OfferTimer is left in the repo, unused).
 *
 * NO PAYMENT. The button carries `data-qualify-open`, so QualifyModal intercepts
 * the click and runs the qualifier, then hands off to /book-a-call. The href IS
 * /book-a-call, which is what makes the interception safe — with JS off the link
 * books directly.
 */
export function CtaLockup() {
  return (
    <div className="sdp-lockup">
      <a className="sdp-cta" href={site.bookUrl} data-qualify-open>
        <span className="sdp-cta-main">
          <span className="cta-label">{ctaLabel}</span>
          <span className="arrow"><ArrowGlyph /></span>
        </span>
      </a>

      <p className="sdp-cta-scarcity">{ctaScarcity}</p>
    </div>
  );
}
