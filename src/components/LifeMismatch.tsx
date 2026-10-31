/**
 * S05b — WHY MOST BUSY MEN STRUGGLE TO STAY FIT (dark prose band).
 *
 * Copy: "Kunal Project File.md" → "Your Fitness Plan Is Designed For A Life You
 * Don't Live", verbatim. Pure narrative agitation with no inherent structure, so
 * it stays set as prose (the shared `.sdp-prose` / `.sdp-pullquote` primitives)
 * rather than being forced into cards.
 *
 * Server component; reveal via the shared `data-sdp-reveal` hook only.
 */
import { site } from "@/lib/site";

export function LifeMismatch() {
  return (
    <section id="why" className="sdp-section sdp-dark s05b-why">
      <div className="sdp-wrap">
        <div className="sdp-eyebrow center" data-sdp-reveal>
          Why Most Busy Men &amp; Women Struggle To Stay Fit
        </div>
        <h2 className="sdp-h2" data-sdp-reveal style={{ "--d": ".06s" } as React.CSSProperties}>
          Your Fitness Plan Is Designed For
          <br className="brk-desktop" /> <em>A Life You Don&rsquo;t Live</em>
        </h2>

        <div className="sdp-prose s05b-prose" data-sdp-reveal style={{ "--d": ".12s" } as React.CSSProperties}>
          <p>
            You start going to the gym, reduce your rice and rotis, avoid eating out and somehow
            manage to lose a few kilos.
          </p>
          <p>
            Then comes a busy month at work. Client meetings increase, travel comes up, family
            commitments take priority and your workouts become irregular.
          </p>
          <p>
            Within a few weeks, you&rsquo;re back to your old routine. And slowly, the weight
            starts coming back.
          </p>
          <p>
            <strong>
              The problem is that most fitness plans expect you to live like someone whose only
              responsibility is getting fit.
            </strong>
          </p>
          <p>
            But when you&rsquo;re managing a business, a demanding job and a family, you cannot
            spend two hours in the gym or eat separately from everyone at home.
          </p>
          <p>You need a plan that accounts for the life you actually live.</p>
          <p>
            One that helps you lose body fat while maintaining muscle, adapts when your schedule
            changes and teaches you how to maintain your results after the first {site.promiseDays} days.
          </p>
        </div>

        <p className="sdp-pullquote s05b-pull" data-sdp-reveal style={{ "--d": ".18s" } as React.CSSProperties}>
          That&rsquo;s exactly what Kunal&rsquo;s <em>MARATHI Framework</em> is designed to do.
        </p>
      </div>
    </section>
  );
}
