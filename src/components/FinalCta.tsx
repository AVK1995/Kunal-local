import { CtaLockup } from "./sdp";
import { site } from "@/lib/site";

/**
 * S11b — Closing CTA (dark band).
 *
 * Copy: "Kunal Project File.md" (Marathi funnel) → the last block, verbatim:
 * "You've Worked Hard To Build Your Career. Now Give Your Health The Attention
 * It Deserves." → two short lines → the CTA lockup.
 *
 * Server component; reveal via the shared `data-sdp-reveal` hook only.
 */
export function FinalCta() {
  return (
    <section id="book" className="sdp-section sdp-dark s11b-final">
      <div className="sdp-wrap">
        <h2 className="sdp-h2" data-sdp-reveal>
          You&rsquo;ve Worked Hard To Build Your Career.{" "}
          <br className="brk-desktop" />
          <em>Now Give Your Health The Attention It Deserves.</em>
        </h2>

        <div className="sdp-prose s11b-prose" data-sdp-reveal style={{ "--d": ".08s" } as React.CSSProperties}>
          <p>
            You don&rsquo;t need to give up your favourite food, spend hours at the gym or
            completely change your lifestyle to start improving your fitness.
          </p>
          <p>
            <strong>
              Book your free 1:1 fitness strategy call with Kunal and find out what your next {site.promiseDays}
              days could look like.
            </strong>
          </p>
        </div>

        <div data-sdp-reveal style={{ "--d": ".14s" } as React.CSSProperties}>
          <CtaLockup />
        </div>
      </div>
    </section>
  );
}
