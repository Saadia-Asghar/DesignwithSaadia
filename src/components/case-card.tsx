import Link from "next/link";
import { imageSize } from "@/lib/image-sizes";
import { asset, type Case } from "@/lib/data";

/** Background + fit per project, so portrait frames sit on a stage and wide ones fill the card. */
export const caseLook: Record<string, { bg: string; contain: boolean }> = {
  vyrothon: { bg: "#0d0d0f", contain: true },
  callpilot: { bg: "#d9eef8", contain: true },
  chainticket: { bg: "#ece8fb", contain: false },
  privyhealth: { bg: "#e3f4ea", contain: false },
  moodmaze: { bg: "#3b0a0a", contain: false },
};

export function CaseCard({ c, size }: { c: Case; size: "big" | "half" | "third" }) {
  const look = caseLook[c.slug];
  return (
    <article className={`case reveal ${size === "big" ? "big" : size === "third" ? "third" : ""}`}>
      <div
        className={`case-media${look.contain ? " contain" : ""}`}
        style={{ ["--case-bg" as string]: look.bg }}
      >
        {c.award && <span className="case-award">{c.award}</span>}
        <img
          src={asset(c.image)}
          alt={`${c.title} interface designed in Figma`}
          width={imageSize[c.image]?.[0]}
          height={imageSize[c.image]?.[1]}
          loading="lazy"
        />
      </div>
      <div className="case-body">
        <div className="case-meta">
          <span>{c.kicker}</span>
          <span>{c.year}</span>
        </div>
        <h3>{c.title}</h3>
        <p>{c.oneLiner}</p>
        {size === "big" && c.metrics && (
          <div className="mini-metrics">
            {c.metrics.map((m) => (
              <div key={m.label}>
                <b>{m.value}</b>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        )}
        <Link href={`/work/${c.slug}/`} className="case-cta stretched" aria-label={`Read the ${c.title} case study`}>
          Read the case <span className="arrow">→</span>
        </Link>
      </div>
    </article>
  );
}
