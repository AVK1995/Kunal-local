import { deliverables } from "@/lib/content";
import { CtaLockup } from "./sdp";
import { site } from "@/lib/site";
import { Glyph } from "./icons";

/**
 * S09 — Programme / "Everything You Get".
 *
 * Copy source: "Kunal Project File.md" (Marathi funnel) → "INSIDE YOUR 90 DAYS /
 * EVERYTHING YOU GET" — six inclusions, verbatim, followed by the CTA lockup.
 * No programme price is shown; fees are discussed on the strategy call.
 *
 * Server component — reveal is emitted as `data-sdp-reveal` + inline `--d` only.
 */
export function Programme() {
  return (
    <section id="programme" className="sdp-section sdp-light-alt s09-program">
      <div className="sdp-wrap">
        <div className="sdp-eyebrow center" data-sdp-reveal>
          Inside Your {site.promiseDays} Days
        </div>
        <h2 className="sdp-h2" data-sdp-reveal style={{ "--d": ".06s" } as React.CSSProperties}>
          Everything
          <br className="brk-mobile" />{" "}
          <em>You Get</em>
        </h2>

        <div className="s09-grid">
          {deliverables.map((d, idx) => (
            <div
              key={d.n}
              className="s09-item"
              data-sdp-reveal
              style={{ "--d": `${(0.06 + idx * 0.06).toFixed(2)}s` } as React.CSSProperties}
            >
              <div className="s09-icon" aria-hidden>
                <Glyph name={d.icon} size={24} draw />
                <span className="s09-icon-n">{d.n}</span>
              </div>
              <div className="s09-title">{d.title}</div>
              <p className="s09-desc">{d.body}</p>
            </div>
          ))}
        </div>



        <div className="s09-cta" data-sdp-reveal style={{ "--d": ".60s" } as React.CSSProperties}>
          <CtaLockup />
        </div>
      </div>
    </section>
  );
}
