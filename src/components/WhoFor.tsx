import { soundsLikeYou, soundsLikeYouClose } from "@/lib/content";

/* ================================================================
   S05 — "DOES THIS SOUND LIKE YOU?"
   SDP ref: `WhoThisIsFor` — _reference/sdp/components/landing/LandingPage.tsx:666-698
   CSS ref: _reference/sdp/app/landing.css:800-853

   Copy: "Kunal Project File.md" (Marathi funnel) — six rows, each a bold lead-in
   + run-on, closed by "If you relate to these situations…". The doc places no
   CTA here, so the lockup that used to close this section is gone.
   Server component — behaviour is delegated (data-sdp-reveal only).
================================================================ */

/** SDP's inline check glyph — landing.css sizes it via `.ck svg` (13px, stroke-width 3). */
function WhoCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const DELAYS = [".04s", ".10s", ".16s", ".22s", ".28s", ".34s"] as const;

export function WhoFor() {
  return (
    <section id="who-for" className="s05-who sdp-light">
      <div className="sdp-wrap s05-wrap">
        <h2 className="sdp-h2" data-sdp-reveal>
          Does This Sound <em>Like You?</em>
        </h2>

        <ul className="s05-who-list">
          {soundsLikeYou.map((f, i) => (
            <li
              key={f.head}
              data-sdp-reveal
              style={{ "--d": DELAYS[i] ?? ".34s" } as React.CSSProperties}
            >
              <span className="ck">
                <WhoCheck />
              </span>
              <span>
                <strong>{f.head}</strong> {f.body}
              </span>
            </li>
          ))}
        </ul>

        <p className="s05-who-close" data-sdp-reveal style={{ "--d": ".38s" } as React.CSSProperties}>
          {soundsLikeYouClose}
        </p>
      </div>
    </section>
  );
}
