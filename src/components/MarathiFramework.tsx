/**
 * S08 — INTRODUCING THE MARATHI FRAMEWORK (light-alt band).
 *
 * Copy: "Kunal Project File.md" → the seven-letter acrostic, verbatim. The doc
 * lays M-A-R / A-T-H out as a 3×2 grid and sets the closing "I — Initial Body
 * Assessment" apart as one full-width row, so `wide` in content carries that.
 *
 * Each tile leads with its letter set large in the display face, so the word
 * MARATHI reads down the grid. Card chrome reuses the Programme tile idiom
 * (.s09-item), so no new visual language is introduced.
 *
 * Server component; reveal via the shared `data-sdp-reveal` hook only.
 */
import { marathiFramework } from "@/lib/content";
import { site } from "@/lib/site";

export function MarathiFramework() {
  return (
    <section id="framework" className="sdp-section sdp-light-alt s08f-framework">
      <div className="sdp-wrap">
        <div className="sdp-eyebrow center" data-sdp-reveal>
          Built For Marathi Working Professionals
        </div>
        <h2 className="sdp-h2" data-sdp-reveal style={{ "--d": ".06s" } as React.CSSProperties}>
          Introducing The <em>MARATHI Framework</em>
        </h2>
        <p className="sdp-sub" data-sdp-reveal style={{ "--d": ".10s" } as React.CSSProperties}>
          A {site.promiseDays}-day fat-loss and strength-building system. Your regular Maharashtrian
          food, your work schedule, and personal coaching from Kunal every single week.
        </p>

        <ol className="s08f-grid" aria-label="The MARATHI Framework">
          {marathiFramework.map((f, idx) => (
            <li
              key={`${f.letter}-${f.title}`}
              className={`s09-item s08f-item${"wide" in f && f.wide ? " is-wide" : ""}`}
              data-sdp-reveal
              style={{ "--d": `${(0.06 + idx * 0.05).toFixed(2)}s` } as React.CSSProperties}
            >
              <span className="s08f-letter" aria-hidden>
                {f.letter}
              </span>
              <div className="s08f-text">
                <h3 className="s09-title">
                  <span className="sr-only">{f.letter}: </span>
                  {f.title}
                </h3>
                <p className="s09-desc">{f.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="s08f-closing" data-sdp-reveal style={{ "--d": ".40s" } as React.CSSProperties}>
          This Isn&rsquo;t Another {site.promiseDays}-Day Diet. It&rsquo;s A Fitness System Built To
          Work <em>Even When Your Life Gets Busy.</em>
        </p>
      </div>
    </section>
  );
}
