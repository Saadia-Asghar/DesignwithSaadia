import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import { Cursor } from "@/components/cursor";
import { Header } from "@/components/header";
import { ScrollFx } from "@/components/scroll-fx";
import { RevealObserver } from "@/components/reveal";
import { person } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saadia Asghar · Product & visual designer",
  description:
    "Design portfolio of Saadia Asghar: award-winning product prototypes in Figma and campaign, poster, and lesson design in Canva for Microsoft Club, UROG, ACM GIKI, and PreMed.PK.",
  authors: [{ name: person.name }],
  openGraph: {
    title: "Saadia Asghar · Product & visual designer",
    description: "Figma product work and Canva campaign design, in one place.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="sr-skip">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="wrap">
            <span>© {new Date().getFullYear()} Saadia Asghar · Designed in Figma, built in Next.js</span>
            <span>
              <a href={person.devPortfolio} target="_blank" rel="noreferrer">
                Engineering portfolio ↗
              </a>
            </span>
          </div>
        </footer>
        <RevealObserver />
        <ScrollFx />
        <Cursor />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
