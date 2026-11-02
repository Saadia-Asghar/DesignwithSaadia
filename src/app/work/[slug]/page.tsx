import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseLook } from "@/components/case-card";
import { asset, cases } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} · Saadia Asghar`,
    description: c.oneLiner,
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = cases.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const c = cases[i];
  const next = cases[(i + 1) % cases.length];
  const look = caseLook[c.slug];

  return (
    <>
      <section className="cs-hero">
        <div className="wrap">
          <Link href="/#work" className="back">
            ← All work
          </Link>
          <div>
            <span className="eyebrow">{c.kicker}</span>
          </div>
          <h1>{c.title}</h1>
          <p className="cs-lede">{c.oneLiner}</p>
          <dl className="cs-facts">
            <div>
              <dt>Role</dt>
              <dd>Product & UI design</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>{c.year}</dd>
            </div>
            <div>
              <dt>Recognition</dt>
              <dd>{c.award ?? "Shipped"}</dd>
            </div>
            <div>
              <dt>Tools</dt>
              <dd>{c.tools.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="wrap">
        <div className="cs-shot reveal" style={{ ["--case-bg" as string]: look.bg }}>
          <img src={asset(c.image)} alt={`${c.title}, a screen from the Figma file`} />
        </div>
        <div className="hero-actions" style={{ marginTop: 24 }}>
          <a className="btn btn-solid" href={c.figma} target="_blank" rel="noreferrer">
            Open the Figma file <span className="arrow">↗</span>
          </a>
          {c.live && (
            <a className="btn btn-ghost" href={c.live} target="_blank" rel="noreferrer">
              {c.liveLabel ?? "Live product"} <span className="arrow">↗</span>
            </a>
          )}
          {c.code && (
            <a className="btn btn-ghost" href={c.code} target="_blank" rel="noreferrer">
              Code <span className="arrow">↗</span>
            </a>
          )}
        </div>
      </div>

      <section className="wrap">
        <div className="cs-body reveal">
          <h2>
            The <span className="serif">problem</span>
          </h2>
          <div>
            <p>{c.problem}</p>
          </div>
        </div>

        <div className="cs-body reveal" style={{ paddingTop: 0 }}>
          <h2>
            What I <span className="serif">designed</span>
          </h2>
          <ol className="cs-list">
            {c.approach.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ol>
        </div>

        <div className="cs-body reveal" style={{ paddingTop: 0 }}>
          <h2>
            In the <span className="serif">file</span>
          </h2>
          <ul className="screens">
            {c.screens.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {c.metrics && (
          <div className="cs-body reveal" style={{ paddingTop: 0 }}>
            <h2>
              The <span className="serif">outcome</span>
            </h2>
            <div className="cs-metrics">
              {c.metrics.map((m) => (
                <div key={m.label}>
                  <b>{m.value}</b>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <Link href={`/work/${next.slug}/`} className="next-case">
        <div className="wrap">
          <span className="eyebrow">Next case</span>
          <h2>{next.title} →</h2>
        </div>
      </Link>
    </>
  );
}
