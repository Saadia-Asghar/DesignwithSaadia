import Link from "next/link";
import { AvatarPicker, ModeOrder, ModeProvider } from "@/components/avatar";
import { Clock } from "@/components/clock";
import { Desk } from "@/components/desk";
import { Envelope } from "@/components/envelope";
import { Gallery } from "@/components/gallery";
import { Pass } from "@/components/pass";
import { imageSize } from "@/lib/image-sizes";
import {
  asset,
  awards,
  cases,
  certifications,
  designRoles,
  ledger,
  moreTemplates,
  person,
  principles,
  quirks,
  sideQuests,
  steps,
  tools,
  visuals,
} from "@/lib/data";

/** Panel colours for the stacked product cards. */
const panel: Record<string, { bg: string; fg: string; sub: string; stage: string }> = {
  vyrothon: { bg: "#101012", fg: "#f3eee6", sub: "#a9a29a", stage: "#1b1b1f" },
  callpilot: { bg: "#cfe9f6", fg: "#0d2a38", sub: "#3f6475", stage: "#e9f6fc" },
  chainticket: { bg: "#6b4bff", fg: "#ffffff", sub: "#ddd5ff", stage: "#f2efff" },
  privyhealth: { bg: "#d8f2e2", fg: "#0c3020", sub: "#3d6a52", stage: "#f3fbf6" },
  moodmaze: { bg: "#5c0d0d", fg: "#ffe7a8", sub: "#e3b9a2", stage: "#3a0707" },
};

function Wave({ text }: { text: string }) {
  return (
    <span className="wave" aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span key={i} aria-hidden style={{ ["--i" as string]: i }}>
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}

function ProductSection() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Product design · Figma</span>
            <h2>
              Selected <span className="serif">products</span>
            </h2>
          </div>
          <p>Five product files. Scroll through the stack, then open any one for the full case.</p>
        </div>

        <div className="stackwrap">
          {cases.map((c, i) => {
            const col = panel[c.slug];
            const [w, h] = imageSize[c.image] ?? [16, 10];
            const portrait = h > w * 0.8;
            return (
              <Link
                key={c.slug}
                href={`/work/${c.slug}/`}
                className="panel"
                data-cursor="Open case"
                style={{
                  ["--bg" as string]: col.bg,
                  ["--fg" as string]: col.fg,
                  ["--sub" as string]: col.sub,
                  ["--stage" as string]: col.stage,
                  ["--i" as string]: i,
                }}
              >
                <div className="panel-text">
                  <span className="panel-n">
                    {String(i + 1).padStart(2, "0")} <small>/ {String(cases.length).padStart(2, "0")}</small>
                  </span>
                  <div>
                    <span className="panel-kicker">
                      {c.kicker} · {c.year}
                    </span>
                    <h3>{c.title}</h3>
                    <p>{c.oneLiner}</p>
                    <div className="panel-foot">
                      {c.award && <span className="panel-award">★ {c.award}</span>}
                      <span className="panel-go">
                        Read the case <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`panel-stage${portrait ? " portrait" : ""}`}>
                  <img src={asset(c.image)} alt={`${c.title} screen from Figma`} width={w} height={h} loading="lazy" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VisualSection() {
  const canvaCount = visuals.length + moreTemplates.length;
  return (
    <section className="section dark" id="visual">
      <div className="outline-marquee" aria-hidden>
        <div>
          <span>Posters ✦ Decks ✦ Campaigns ✦ Signage ✦ Social ✦ </span>
          <span>Posters ✦ Decks ✦ Campaigns ✦ Signage ✦ Social ✦ </span>
        </div>
      </div>
      <div className="wrap">
        <div className="visual-intro">
          <div className="section-head reveal" style={{ marginBottom: 0 }}>
            <div>
              <span className="eyebrow">Visual design · Canva</span>
              <h2>
                The <span className="serif">poster</span> wall
              </h2>
              <p style={{ marginTop: 20 }}>
                {canvaCount} templates for the teams I design for: recruitment drives, flagship events, signage, and
                lesson decks. Play with the desk, or click any piece below to see it full size.
              </p>
            </div>
          </div>
          <div className="visual-desk">
            <Desk />
          </div>
        </div>
        <Gallery />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <ModeProvider>
      {/* ---------- Hero ---------- */}
      <section className="hero3">
        <div className="wrap hero3-grid">
          <div className="hero3-copy">
            <div className="hello-row">
              <Clock />
              <span className="salaam">
                <span lang="ur" dir="rtl">
                  سلام
                </span>{" "}
                <span className="hand">Salaam, I&apos;m Saadia!</span>
              </span>
            </div>
            <h1>
              I design things you{" "}
              <span className="stop">
                <span className="serif">stop</span>
                <svg viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden>
                  <path d="M3 17 C 50 6, 110 4, 217 13" />
                </svg>
              </span>{" "}
              for.
            </h1>
            <p className="hero-lede">
              <strong>Products in Figma</strong> that won first place without a pitch.{" "}
              <strong>Posters, decks, and campaigns in Canva</strong> for Microsoft Club, UROG, ACM GIKI, and
              PreMed.PK. I study data science at GIKI, so I can build the thing too.
            </p>
            <AvatarPicker />
          </div>
          <div className="hero3-pass">
            <Pass />
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

      {/* ---------- Results board ---------- */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="board reveal">
            <div className="board-head">
              <div>
                <span className="board-kicker">
                  RESULTS BOARD ·{" "}
                  <span lang="ur" dir="rtl" className="board-ur">
                    نتائج
                  </span>
                </span>
                <h2>
                  Five files, <span className="serif">one line each</span>
                </h2>
              </div>
              <p>Pick a line to jump straight to the case.</p>
            </div>
            <div className="board-table" role="table" aria-label="Product results">
              <div className="board-row board-th" role="row">
                <span role="columnheader">No.</span>
                <span role="columnheader">Product</span>
                <span role="columnheader">Event</span>
                <span role="columnheader">Date</span>
                <span role="columnheader">Result</span>
              </div>
              {ledger.map((r) => (
                <Link key={r.slug} href={`/work/${r.slug}/`} className="board-row" role="row" data-cursor="Open">
                  <span role="cell" className="b-no">
                    {String(r.no).padStart(2, "0")}
                  </span>
                  <span role="cell" className="b-title">
                    {r.title}
                  </span>
                  <span role="cell" className="b-event">
                    {r.event}
                  </span>
                  <span role="cell" className="b-date">
                    {r.date}
                  </span>
                  <span role="cell" className="b-result">
                    <b>{r.result}</b>
                    <small>{r.note}</small>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Work, ordered by the chosen avatar ---------- */}
      <ModeOrder product={<ProductSection />} visual={<VisualSection />} />

      {/* ---------- Side quests carousel ---------- */}
      <section className="section quests">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow pixel-eyebrow">INVENTORY</span>
              <h2>
                Side <span className="serif">quests</span>
              </h2>
            </div>
            <p>Things I built and ran along the way, rough edges and all. Hover to pause.</p>
          </div>
        </div>
        <div className="quest-track-clip">
          <div className="quest-track">
            {[0, 1].map((k) =>
              sideQuests.map((q, i) => (
                <a
                  key={`${k}-${q.title}`}
                  href={q.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`quest q${i % 4}`}
                  aria-hidden={k === 1}
                  tabIndex={k === 1 ? -1 : undefined}
                  data-cursor="Visit"
                >
                  <span className="quest-tag">{q.tag}</span>
                  <b>{q.title}</b>
                  <span>{q.detail}</span>
                  <span className="quest-go">↗</span>
                </a>
              )),
            )}
          </div>
        </div>
      </section>

      {/* ---------- Process: sticky notes ---------- */}
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
          <div className="notes">
            {steps.map((p, i) => (
              <div className={`note reveal n${i}`} key={p.n}>
                <span className="tape" aria-hidden />
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
            <div className="quirks">
              {quirks.map((q) => (
                <div className="quirk" key={q.label}>
                  <span className="hand">{q.label}…</span>
                  <p>{q.text}</p>
                </div>
              ))}
            </div>
            <p className="sub-label">Toolbox</p>
            <ul className="pill-row stickers">
              {tools.map((t, i) => (
                <li key={t} style={{ ["--r" as string]: `${((i * 37) % 9) - 4}deg` }}>
                  {t}
                </li>
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

      {/* ---------- The year in an envelope ---------- */}
      <section className="section year">
        <div className="wrap year-grid">
          <div className="reveal">
            <span className="eyebrow">Life outside the pixels</span>
            <h2 className="year-title">
              The year in a <span className="serif">nutshell</span>
              <span className="hand year-aside">(or an envelope)</span>
            </h2>
            <p className="year-copy">
              Internships, fellowships, clubs, and the things I started. Open it up.
            </p>
          </div>
          <Envelope />
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="section contact" id="contact">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h2>
            <Wave text="Let's make" />
            <br />
            <span className="serif">
              <Wave text="something clear." />
            </span>
          </h2>
          <a className="mail-link" href={`mailto:${person.email}`} data-cursor="Write">
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
          <p className="hand sign-off">made with love (and a lot of Figma tabs) in Islamabad</p>
        </div>
      </section>
    </ModeProvider>
  );
}
