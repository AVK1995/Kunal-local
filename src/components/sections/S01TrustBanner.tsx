/**
 * S01 — Trust banner. Full-bleed brass bar at the very top of the landing page,
 * above the trust strip (S02) and the header (S03).
 *
 * Copy: "Kunal Project File.md" strip line 1 —
 * "200+ CLIENTS COACHED | ACSM CERTIFIED | TRAINED INTERNATIONAL CRICKETERS".
 * The client count reads from `site.successStories` (via content) so it can be
 * moved from Vercel env without a code change.
 *
 * Each item renders as a dark graphite chip + white label pair where it carries
 * a number, and as a plain label otherwise: brass-bright text on the brass bar
 * had almost no contrast and read as blended.
 *
 * Server component. No client JS; the bar is static (CSS-only dot pulse).
 */
import { trustLine1 } from "@/lib/content";
import { site } from "@/lib/site";

export default function S01TrustBanner() {
  const [clients, ...rest] = trustLine1;
  const clientsLabel = clients.slice(site.successStories.length).trim();

  return (
    <div className="s01-trust-banner" role="note">
      <span className="s01-trust-banner-dot" aria-hidden="true" />
      <span className="s01-trust-banner-copy">
        <span className="s01-tb-item">
          <b className="s01-tb-num">{site.successStories}</b>
          <span className="s01-tb-label">{clientsLabel}</span>
        </span>
        {rest.map((label) => (
          <span key={label} style={{ display: "contents" }}>
            <span className="s01-trust-banner-sep" aria-hidden="true">|</span>
            <span className="s01-tb-item">
              <span className="s01-tb-label">{label}</span>
            </span>
          </span>
        ))}
      </span>
    </div>
  );
}
