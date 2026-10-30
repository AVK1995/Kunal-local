/**
 * S07 — Founder authority / "Meet Kunal Chalke" (DARK band).
 *
 * Copy source: "Kunal Project File.md" (Marathi funnel) → MEET KUNAL CHALKE.
 * The credential line and Kunal's first-person story (with its bold runs) are
 * verbatim from that document. The photo is Kunal with Yashasvi Jaiswal — the
 * story's "worked with international cricketers" claim, shown.
 *
 * The single HYROX certificate figure the previous build carried is replaced by
 * the md's five-item press + certification row, running as a slow left-to-right
 * rail ("if these articles and certifications can be shown in a moving way from
 * left to right, that'll be good"). The rail reuses the existing marquee engine
 * in ClientBehaviors via `data-carousel="credcar"`; with JS off it degrades to a
 * plain horizontally-scrollable strip, and every card is a real outbound link.
 *
 * ASSET GAP: only the HYROX certificate exists in /public today. The other four
 * cards paint their image as a CSS background, so a missing file shows the
 * card's own titled brass plate instead of a broken image. Drop the files at the
 * paths in `content.ts` → `credentials[].img` and they light up with no code
 * change.
 *
 * Server component. No client JS of its own.
 */
import Image from "next/image";
import { founderPills, credentials } from "@/lib/content";
import { site } from "@/lib/site";
import { ArrowGlyph } from "./sdp";

export function Founder() {
  return (
    <section id="founder" className="s07-founder sdp-dark">
      <div className="sdp-wrap">
        <div className="sdp-eyebrow center" data-sdp-reveal>
          Meet Kunal Chalke
        </div>
        <h2 className="sdp-h2" data-sdp-reveal style={{ "--d": ".06s" } as React.CSSProperties}>
          The Athlete-Turned-Coach
          <br className="brk-desktop" /> <em>Helping You Get Back In Shape.</em>
        </h2>

        <p
          className="s07-founder-intro"
          data-sdp-reveal
          style={{ "--d": ".12s" } as React.CSSProperties}
        >
          Kunal Chalke is an ACSM Certified Fitness Professional, ASCA Level 1 Strength &amp;
          Conditioning Coach, INFS Certified Fitness &amp; Nutrition Coach and HYROX Head Judge.
        </p>

        <div className="s07-founder-grid">
          <div
            className="s07-founder-card"
            data-sdp-reveal
            style={{ "--d": ".16s" } as React.CSSProperties}
          >
            <div className="s07-founder-photo">
              <Image
                className="s07-founder-img s07-founder-img--top"
                src="/kunal-yashasvi.png"
                alt="Kunal Chalke with Indian international cricketer Yashasvi Jaiswal"
                width={333}
                height={548}
                sizes="(max-width: 640px) 220px, (max-width: 960px) 280px, 340px"
              />
            </div>

            <div className="s07-founder-body">
              <ul className="s07-founder-pills">
                {founderPills.map((p) => (
                  <li className="s07-founder-pill" key={p}>
                    {p}
                  </li>
                ))}
              </ul>

              {/* Kunal's own voice, first person and italic as set in the copy doc. */}
              <blockquote className="s07-founder-story">
                <p>
                  Having <strong>worked with international cricketers, athletes and business
                  professionals</strong>, I&rsquo;ve seen how the right combination of training,
                  nutrition and recovery can completely transform someone&rsquo;s fitness.
                </p>
                <p>
                  But I also understand that <strong>a 40-year-old businessman or senior
                  professional cannot live like an athlete</strong>. Between long working hours,
                  business travel and family responsibilities, following a strict diet and spending
                  hours in the gym simply isn&rsquo;t practical.
                </p>
                <p>
                  <strong>Being Marathi myself, I understand our food and lifestyle.</strong>{" "}
                  Poli-Bhaji, Varan-Bhaat, Bhakri, family gatherings and festive meals are a normal
                  part of our lives. And I don&rsquo;t believe you should have to give them up just
                  to get fit.
                </p>
                <p>
                  <strong>That&rsquo;s why I developed my MARATHI Framework</strong>, bringing the
                  principles of elite-level strength and conditioning into a personalised fitness
                  system built around the food Marathi men eat, the schedules they manage and the
                  responsibilities they carry.
                </p>
                <p>
                  Today, <strong>I&rsquo;ve coached {site.successStories} clients</strong>, helping
                  them lose excess weight, build strength and develop fitness routines that work
                  alongside their demanding careers.
                </p>
                <p>
                  Because I don&rsquo;t believe getting fit should mean giving up the lifestyle
                  you&rsquo;ve worked so hard to build. My job is to help you get stronger and
                  healthier within it.
                </p>
                <footer className="s07-founder-sign">Kunal Chalke</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Press + certifications, slow left-to-right rail ---- */}
      <div className="sdp-wrap">
        <h3 className="s07-cred-head" data-sdp-reveal>
          Recognised &amp; Certified
        </h3>
      </div>

      {/* Boxed to the page grid, not full-bleed. The card is no longer one big
          <a>: the IMAGE opens the asset in a lightbox (a certificate should be
          readable in place, not bounce the visitor out to Google Drive), and only
          a PRESS card's text links out to the publication, in a new tab. */}
      <div className="sdp-wrap s07-credrail-wrap">
        <div className="s07-credrail" data-carousel="credcar" data-sdp-reveal>
          <div className="s07-credrail-track" data-carousel-track>
            <div className="s07-credrail-set" data-carousel-set>
              {credentials.map((c, idx) => {
                const isPress = c.kind === "Press";
                // Press items link out only when a href is set. Some are
                // intentionally commented out in content.ts (dead/placeholder
                // links) — those render as plain, non-clickable titles.
                const href = (c as { href?: string }).href;
                return (
                  <div className="s07-cred-card" key={c.title}>
                    <button
                      type="button"
                      className={`s07-cred-img${c.ready ? "" : " is-pending"}`}
                      style={
                        c.ready
                          ? { backgroundImage: `url("${c.img}")`, backgroundPosition: c.focus }
                          : undefined
                      }
                      data-cred-idx={idx}
                      aria-label={`View ${c.title} full size`}
                    >
                      {!c.ready && <span className="s07-cred-plate">{c.source}</span>}
                    </button>

                    <div className="s07-cred-meta">
                      <span className="s07-cred-kind">{c.kind}</span>
                      {isPress && href ? (
                        <a
                          className="s07-cred-title s07-cred-title--link"
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {c.title}
                          <span className="s07-cred-ext" aria-hidden>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 4h6v6" />
                              <path d="M20 4l-8.5 8.5" />
                              <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
                            </svg>
                          </span>
                        </a>
                      ) : (
                        <span className="s07-cred-title">{c.title}</span>
                      )}
                      <span className="s07-cred-src">{c.source}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Manual prev/next — moved here from the video + before/after rails at
            client request. Buttons sit OUTSIDE `.s07-credrail` (it's edge-masked
            and is the drag surface) and find it by data-carousel-target. */}
        <button
          className="s07-cred-nav s07-cred-prev"
          type="button"
          aria-label="Previous certificates"
          data-carousel-nav="-1"
          data-carousel-target="credcar"
        >
          <span className="s06-bacar-nav-glyph s06-bacar-nav-glyph--flip">
            <ArrowGlyph size={18} />
          </span>
        </button>
        <button
          className="s07-cred-nav s07-cred-next"
          type="button"
          aria-label="Next certificates"
          data-carousel-nav="1"
          data-carousel-target="credcar"
        >
          <span className="s06-bacar-nav-glyph">
            <ArrowGlyph size={18} />
          </span>
        </button>
      </div>

      {/* Credential lightbox shell — inert until ClientBehaviors adds `.on`.
          Lives inside the section so the `.sdp-root`-scoped CSS applies. */}
      <div className="s07-credbox" data-credbox role="dialog" aria-modal="true" aria-hidden="true" hidden>
        <div className="s07-credbox-inner">
          <button className="s07-credbox-close" type="button" aria-label="Close" data-credbox-close>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <button className="s07-credbox-nav s07-credbox-prev" type="button" aria-label="Previous" data-credbox-nav="-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="s07-credbox-img" alt="" data-credbox-img src={credentials[0].img} />
          <button className="s07-credbox-nav s07-credbox-next" type="button" aria-label="Next" data-credbox-nav="1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div className="s07-credbox-cap" data-credbox-cap />
        </div>
      </div>

    </section>
  );
}
