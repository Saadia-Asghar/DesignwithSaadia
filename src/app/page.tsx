import Link from "next/link";
import { Equalizer, Scribble, StickerStrip, WaveHand } from "@/components/doodles";
import { Scene } from "@/components/scene";
import { imageSize } from "@/lib/image-sizes";
import { asset, cases, person, visuals } from "@/lib/data";

type Tag = { label: string; tone: "green" | "blue" | "orange" | "black" | "yellow" };

/** Card look per project: background, ink, and the little coloured tags. */
const look: Record<string, { bg: string; ink: "light" | "dark"; tags: Tag[]; fit: "phone" | "wide" }> = {
  vyrothon: {
    bg: "var(--c-ink)",
    ink: "light",
    fit: "phone",
    tags: [
      { label: "Product Design", tone: "green" },
      { label: "Prototype", tone: "blue" },
      { label: "1st Place", tone: "yellow" },
    ],
  },
  callpilot: {
    bg: "var(--c-white)",
    ink: "dark",
    fit: "phone",
    tags: [
      { label: "AI Product", tone: "black" },
      { label: "UX/UI Design", tone: "blue" },
      { label: "Top 10 · MIT", tone: "orange" },
    ],
  },
  chainticket: {
    bg: "var(--c-cream)",
    ink: "dark",
    fit: "wide",
    tags: [
      { label: "Web3", tone: "black" },
      { label: "UX/UI Design", tone: "orange" },
      { label: "3rd Place", tone: "green" },
    ],
  },
  privyhealth: {
    bg: "var(--c-sage)",
    ink: "dark",
    fit: "wide",
    tags: [
      { label: "Health-tech", tone: "green" },
      { label: "Dashboard", tone: "black" },
      { label: "Hackathon", tone: "blue" },
    ],
  },
  moodmaze: {
    bg: "var(--c-white)",
    ink: "dark",
    fit: "wide",
    tags: [
      { label: "Concept", tone: "orange" },
      { label: "UI Design", tone: "blue" },
      { label: "Shipped", tone: "green" },
    ],
  },
};

const blurb: Record<string, string> = {
  vyrothon: "A high-fidelity prototype about user presence and gamified storytelling. No live pitch, so the file had to explain itself.",
  callpilot: "An AI voice desk for calls, scheduling, and memory. Try-before-signup demo, feature explainer, and the operator console.",
  chainticket: "Event tickets that can be checked, not just screenshotted. QR verification for guests and a desk for organizers.",
  privyhealth: "Patient-owned medical records: prescriptions that can't be forged and emergency QR access without a login.",
  moodmaze: "Mood in, a short shelf of films out. A cinema-lobby interface that stops the endless scroll.",
};

function Tags({ tags }: { tags: Tag[] }) {
  return (
    <div className="tags">
      {tags.map((t) => (
        <span key={t.label} className={`tag t-${t.tone}`}>
          {t.label}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const playPicks = ["mlsa-club", "urog-research-201", "acm-wic"]
    .map((id) => visuals.find((v) => v.id === id)!)
    .filter(Boolean);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-copy">
          <h1 className="hand hello">
            <span className="write-on">Hi, I&apos;m Saadia!</span> <WaveHand />
          </h1>
          <p className="hero-bio">
            A product and visual designer who also builds. I design product prototypes in Figma and posters, decks,
            and campaigns in Canva, while studying data science at GIKI. Focused on interfaces that explain themselves.
          </p>
          <div className="hero-roles">
            <p>
              <b>
                Currently, Canva Campus Ambassador <span>@GIKI</span>
              </b>
              Director of Marketing at UROG · Head of Marketing at Microsoft Club
            </p>
            <p>
              <b>
                Previously, Graphic Design Associate <span>@PreMed.PK</span>
              </b>
              Visual identity and lesson design, remote
            </p>
          </div>
        </div>
        <Scene />
      </section>

      <StickerStrip />

      {/* ---------- Projects ---------- */}
      <section className="projects" id="work">
        <div className="projects-head reveal">
          <h2 className="hand underlined">
            Projects
            <Scribble />
          </h2>
          <span className="new-pill">
            Product design in Figma <em>New!</em>
          </span>
        </div>

        <div className="grid">
          {cases.map((c, idx) => {
            const l = look[c.slug];
            const [w, h] = imageSize[c.image] ?? [16, 10];
            return (
              <Link
                key={c.slug}
                href={`/work/${c.slug}/`}
                className={`card reveal ink-${l.ink}${c.slug === "vyrothon" ? " grainy" : ""}`}
                style={{ background: l.bg, ["--d" as string]: `${(idx % 2) * 120}ms` }}
              >
                <Tags tags={l.tags} />
                <h3>{c.title}</h3>
                <p>{blurb[c.slug]}</p>
                <div className={`card-shot fit-${l.fit}`}>
                  <img src={asset(c.image)} alt={`${c.title} screen designed in Figma`} width={w} height={h} loading="lazy" />
                </div>
              </Link>
            );
          })}

          <Link href="/play/" className="card reveal ink-dark card-play" style={{ background: "var(--c-butter)", ["--d" as string]: "120ms" }}>
            <Tags
              tags={[
                { label: "Visual Design", tone: "orange" },
                { label: "Canva", tone: "blue" },
                { label: "25 templates", tone: "black" },
              ]}
            />
            <h3>The poster wall</h3>
            <p>Recruitment drives, flagship events, signage, and lesson decks for Microsoft Club, UROG, ACM, and PreMed.PK.</p>
            <div className="fan">
              {playPicks.map((v, i) => (
                <img key={v.id} src={asset(v.image!)} alt={v.title} className={`fan-${i}`} loading="lazy" />
              ))}
            </div>
          </Link>
        </div>
      </section>

      {/* ---------- Shelf ---------- */}
      <div className="shelf" aria-hidden />

      {/* ---------- Areas of interest ---------- */}
      <section className="interest">
        <div className="interest-grid">
          <div>
            <h2 className="hand underlined reveal">
              Areas of interest
              <Scribble color="#f4e5b5" variant={1} />
            </h2>
            <p className="hand obsessed">currently obsessed with…</p>
            <div className="now-list">
              <div className="now-card">
                <img src={asset("/work/mlsa-lnd.webp")} alt="" />
                <div>
                  <b>Agents that remember</b>
                  <span>Memory, RAG &amp; knowledge graphs</span>
                  <em>
                    <Equalizer /> From the Najoomi internship
                  </em>
                </div>
                <span className="now-plus" aria-hidden>
                  +
                </span>
              </div>
            </div>
            <p className="hand obsessed obsessed-2">…and where to find me</p>
            <div className="now-list">
              <a className="now-card" href={person.linkedin} target="_blank" rel="noreferrer">
                <span className="now-thumb t-linkedin" aria-hidden>
                  <svg viewBox="0 0 24 24">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.36h-4v-4.75c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.5v4.84h-4z" />
                  </svg>
                </span>
                <div>
                  <b>Saadia on LinkedIn</b>
                  <span>Roles, hackathon wins &amp; campus events</span>
                  <em>
                    <Equalizer /> linkedin.com/in/saadia-asghar
                  </em>
                </div>
                <span className="now-plus" aria-hidden>
                  ↗
                </span>
              </a>
              <a className="now-card" href={person.devPortfolio} target="_blank" rel="noreferrer">
                <img src={asset("/work/callpilot.webp")} alt="" />
                <div>
                  <b>See my technical portfolio</b>
                  <span>AI products I built end to end</span>
                  <em>
                    <Equalizer /> Code, demos &amp; hackathon builds
                  </em>
                </div>
                <span className="now-plus" aria-hidden>
                  ↗
                </span>
              </a>
            </div>
          </div>
          <div className="interest-copy">
            <p>
              I&apos;m interested in the place where design meets AI: interfaces for products that keep a memory, answer
              from real data, and still feel calm to use. On hackathon teams I usually own the product and the
              interface, then help build it.
            </p>
            <p>
              I&apos;m also drawn to design for communities. A recruitment poster, a welcome banner, or a lesson deck is
              often someone&apos;s first look at a club or a course, so it should feel clear, warm, and worth stopping
              for.
            </p>
          </div>
        </div>

        <div className="interest-floor">
          <svg className="doodle-book reveal" viewBox="0 0 220 170" aria-hidden>
            <path d="M20 150 L120 150 L120 70 L20 70 Z" />
            <path d="M120 150 L200 150 L200 70 L120 70" />
            <path d="M36 92h66M36 108h52M36 124h60" />
            <path d="M138 128c10-22 24-34 44-36" />
            <path d="M150 96c6 6 14 8 22 4" />
            <path d="M176 40 L206 10 L214 18 L184 48 L172 52 Z" />
            <path d="M206 10 L214 18" />
          </svg>
          <div className="floor-line" />
          <div className="fact reveal">
            <span>Random fact:</span>
            <b className="hand">I founded a community for what happens after the hackathon</b>
            <svg viewBox="0 0 120 60" aria-hidden>
              <path d="M8 10h60a8 8 0 0 1 8 8v14a8 8 0 0 1-8 8H30l-12 10v-10H8a8 8 0 0 1-8-8V18a8 8 0 0 1 8-8z" transform="translate(4 2)" />
              <path d="M70 22h34a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8h-4v8l-10-8H86" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
