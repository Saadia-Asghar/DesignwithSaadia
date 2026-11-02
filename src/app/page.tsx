import { CaseCard } from "@/components/case-card";
import { Gallery } from "@/components/gallery";
import {
  asset,
  awards,
  cases,
  certifications,
  designRoles,
  moreTemplates,
  person,
  principles,
  steps,
  stats,
  tools,
  visuals,
} from "@/lib/data";

export default function Home() {
  const [featured, ...rest] = cases;
  const canvaCount = visuals.length + moreTemplates.length;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="status">
              <span className="dot" aria-hidden /> {person.location} · {person.title}
            </span>
            <h1>
              Design that <span className="serif">explains itself.</span>
            </h1>
            <p className="hero-lede">
              I&apos;m Saadia. I design <strong>products in Figma</strong> that won first place without a pitch, and{" "}
              <strong>campaigns in Canva</strong> for Microsoft Club, UROG, ACM GIKI, and PreMed.PK. I study data
              science, so I can build the thing too.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#work">
                See the work <span className="arrow">↓</span>
              </a>
              <a className="btn btn-ghost" href={`mailto:${person.email}`}>
                Say hello <span className="arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="stack" aria-hidden>
            <div className="stack-card b">
              <img src={asset("/work/urog-ec.webp")} alt="" />
            </div>
            <div className="stack-card a">
              <img src={asset("/work/mlsa-club.webp")} alt="" />
            </div>
            <div className="stack-card c">
              <img src={asset("/work/vyrothon.webp")} alt="" />
            </div>
            <div className="sticker">
              <span>
                <b>1st</b>product design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Marquee ---------- */}
      <div className="marquee-clip">
      <div className="marquee" aria-label="Recognition">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} aria-hidden={k === 1} style={{ display: "flex" }}>
              {awards.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* ---------- Stats ---------- */}
      <section className="wrap" style={{ paddingTop: "clamp(64px, 9vw, 112px)" }}>
        <div className="stats reveal">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Product work ---------- */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Product design · Figma</span>
              <h2>
                Selected <span className="serif">products</span>
              </h2>
            </div>
            <p>
              Five product files, three of them placed in national or international competitions. Each one opens a
              short case: the problem, what I designed, and the Figma file itself.
            </p>
          </div>
          <div className="cases">
            <CaseCard c={featured} size="big" />
            <CaseCard c={rest[0]} size="half" />
            <CaseCard c={rest[1]} size="half" />
            <CaseCard c={rest[2]} size="half" />
            <CaseCard c={rest[3]} size="half" />
          </div>
        </div>
      </section>

      {/* ---------- Visual work ---------- */}
      <section className="section dark" id="visual">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Visual design · Canva</span>
              <h2>
                Posters, decks <span className="serif">&amp; campaigns</span>
              </h2>
            </div>
            <p>
              {canvaCount} templates for the teams I design for: recruitment drives, flagship events, signage, and
              lesson decks. Click any piece to see it full size.
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section" id="process">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">How I work</span>
              <h2>
                Four steps, <span className="serif">every time</span>
              </h2>
            </div>
            <p>A poster and a product file go through the same loop. The difference is how many times.</p>
          </div>
          <div className="process">
            {steps.map((p) => (
              <div className="step reveal" key={p.n}>
                <span className="n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
          <p className="principles reveal">
            {principles.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </p>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="section about" id="about">
        <div className="wrap about-grid">
          <div className="about-intro reveal">
            <span className="eyebrow">About</span>
            <h2>
              A designer who <span className="serif">ships.</span>
            </h2>
            <p>
              I&apos;m a data science undergraduate at GIKI. Design started as a favour for campus clubs and became the
              job: a design associate role at PreMed.PK, then marketing leadership at UROG and the Microsoft Club.
            </p>
            <p>
              On hackathon teams I usually own the product and the interface, then help build it. That&apos;s how
              Vyrothon, CallPilot, and ChaInTicket+ placed.
            </p>
            <p className="sub-label">Tools</p>
            <ul className="pill-row">
              {tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="sub-label">Certifications</p>
            <ul className="pill-row">
              {certifications.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <ul className="roles reveal">
            {designRoles.map((r) => (
              <li className="role" key={r.org}>
                <div>
                  <span className="org">{r.org}</span>
                  <h3>{r.role}</h3>
                </div>
                <time>{r.when}</time>
                <p>{r.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="section contact" id="contact">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h2>
            Let&apos;s make <br />
            <span className="serif">something clear.</span>
          </h2>
          <a className="mail-link" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <div className="socials">
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={person.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={person.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={asset(person.resume)} target="_blank" rel="noreferrer">
              Résumé (PDF)
            </a>
            <a href={person.phoneHref}>{person.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
