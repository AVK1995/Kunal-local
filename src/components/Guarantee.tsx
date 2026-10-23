/**
 * S10 — Guarantee (dark band).
 *
 * Copy source: "Kunal Project File.md" (Marathi funnel) → "100% RESULTS
 * GUARANTEE / Achieve Your Fitness Goal. Or Get Your Money Back." The target is
 * agreed per client before the programme begins (8–12 kilos for eligible
 * clients, otherwise waist / recomposition / other measurable outcomes), and
 * the refund applies under the guarantee terms when the client has done their
 * part.
 *
 * The same promise is mirrored on /refund; both read from `content.guarantee`
 * so they cannot drift apart.
 *
 * Server component. No client JS: reveal is emitted as `data-sdp-reveal`.
 */
import { guarantee } from "@/lib/content";

export function Guarantee() {
  return (
    <section id="guarantee" className="sdp-section sdp-dark s10-guarantee">
      <div className="sdp-wrap">
        <div className="s10-card" data-sdp-reveal>
          <div className="s10-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l8 3v7c0 4.97-3.35 9.26-8 10-4.65-.74-8-5.03-8-10V5l8-3z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>

          <div className="s10-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l8 3v7c0 4.97-3.35 9.26-8 10-4.65-.74-8-5.03-8-10V5l8-3z" />
            </svg>
            {guarantee.badge}
          </div>

          <h2 className="s10-title">
            {guarantee.titleLead} <em>{guarantee.titleAccent}</em>
          </h2>

          {guarantee.body.map((p) => (
            <p className="s10-primary s10-body" key={p}>
              {p}
            </p>
          ))}

          <p className="s10-primary s10-body">
            {guarantee.conditionLead}
            <strong>{guarantee.conditionBold}</strong>
          </p>

          <p className="s10-extra">{guarantee.footnote}</p>
        </div>
      </div>
    </section>
  );
}
