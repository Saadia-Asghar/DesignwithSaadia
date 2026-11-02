import type { Metadata } from "next";
import { asset, certifications, designRoles, ledger, person, principles, steps, tools, yearNotes } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me | Saadia Asghar",
  description: "Saadia Asghar: design roles, process, tools, and the year so far.",
};

export default function About() {
  return (
    <section className="page">
      <header className="page-head">
        <h1 className="hand">About Me</h1>
        <p>
          I&apos;m a data science undergraduate at GIKI ({person.school.split("·").pop()?.trim()}). Design started as a
          favour for campus clubs and became the job: a design associate role at PreMed.PK, then marketing leadership at
          UROG and the Microsoft Club. On hackathon teams I usually own the product and the interface, then help build
          it.
        </p>
        <div className="page-actions">
          <a className="btn" href={asset(person.resume)} target="_blank" rel="noreferrer">
            Download résumé
          </a>
          <a className="btn btn-line" href={`mailto:${person.email}`}>
            {person.email}
          </a>
        </div>
      </header>

      <div className="about-block">
        <h2 className="hand">Where I design</h2>
        <ul className="roles">
          {designRoles.map((r) => (
            <li key={r.org}>
              <div className="role-top">
                <b>{r.role}</b>
                <time>{r.when}</time>
              </div>
              <span className="role-org">@{r.org}</span>
              <p>{r.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="about-block">
        <h2 className="hand">Results so far</h2>
        <div className="results">
          {ledger.map((r) => (
            <Link key={r.slug} href={`/work/${r.slug}/`} className="result">
              <b>{r.result}</b>
              <span>{r.title}</span>
              <small>
                {r.event} · {r.date}
              </small>
            </Link>
          ))}
        </div>
      </div>

      <div className="about-block">
        <h2 className="hand">How I work</h2>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.n} className="step">
              <span className="hand">{s.n}</span>
              <b>{s.title}</b>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <p className="principles hand">{principles.join("  ·  ")}</p>
      </div>

      <div className="about-block two">
        <div>
          <h2 className="hand">Toolbox</h2>
          <div className="chips">
            {tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="hand">Certifications</h2>
          <div className="chips">
            {certifications.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="about-block">
        <h2 className="hand">2026 so far</h2>
        <ol className="year">
          {yearNotes.map((n, i) => (
            <li key={i}>
              <span>{n.when}</span>
              <p>{n.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
