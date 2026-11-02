import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { imageSize } from "@/lib/image-sizes";
import { asset, cases } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: `${c.title} | Saadia Asghar`, description: c.oneLiner };
}

const stage: Record<string, string> = {
  vyrothon: "var(--c-ink)",
  callpilot: "#e4eef6",
  chainticket: "var(--c-cream)",
  privyhealth: "var(--c-sage)",
  moodmaze: "#ead9d2",
};

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = cases.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const c = cases[i];
  const next = cases[(i + 1) % cases.length];
  const [w, h] = imageSize[c.image] ?? [16, 10];

  return (
    <article className="page case">
      <Link href="/#work" className="back">
        ← Back to projects
      </Link>

      <header className="case-head">
        <span className="case-kicker">
          {c.kicker} · {c.year}
        </span>
        <h1 className="hand">{c.title}</h1>
        <p>{c.oneLiner}</p>
        <div className="tags">
          {c.award && <span className="tag t-yellow">{c.award}</span>}
          {c.tools.map((t, k) => (
            <span key={t} className={`tag t-${["black", "blue", "green", "orange"][k % 4]}`}>
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="case-stage" style={{ background: stage[c.slug] }}>
        <img src={asset(c.image)} alt={`${c.title}, a screen from the Figma file`} width={w} height={h} />
      </div>

      <div className="page-actions">
        <a className="btn" href={c.figma} target="_blank" rel="noreferrer">
          Open the Figma file ↗
        </a>
        {c.live && (
          <a className="btn btn-line" href={c.live} target="_blank" rel="noreferrer">
            {c.liveLabel ?? "Live product"} ↗
          </a>
        )}
        {c.code && (
          <a className="btn btn-line" href={c.code} target="_blank" rel="noreferrer">
            Code ↗
          </a>
        )}
      </div>

      <dl className="case-facts">
        <div>
          <dt>Role</dt>
          <dd>Product &amp; UI design</dd>
        </div>
        <div>
          <dt>When</dt>
          <dd>{c.year}</dd>
        </div>
        <div>
          <dt>Recognition</dt>
          <dd>{c.award ?? "Shipped"}</dd>
        </div>
      </dl>

      <section className="case-sec reveal">
        <h2 className="hand">The problem</h2>
        <p>{c.problem}</p>
      </section>

      <section className="case-sec reveal">
        <h2 className="hand">What I designed</h2>
        <ol className="case-list">
          {c.approach.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ol>
      </section>

      <section className="case-sec reveal">
        <h2 className="hand">In the file</h2>
        <div className="chips">
          {c.screens.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>

      {c.metrics && (
        <section className="case-sec reveal">
          <h2 className="hand">The outcome</h2>
          <div className="results">
            {c.metrics.map((m) => (
              <div key={m.label} className="result">
                <b>{m.value}</b>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <Link href={`/work/${next.slug}/`} className="next">
        <span>Next project</span>
        <b className="hand">{next.title} →</b>
      </Link>
    </article>
  );
}
