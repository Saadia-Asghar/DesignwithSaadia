import type { Metadata, Viewport } from "next";
import "@fontsource/gochi-hand/latin-400.css";
import "@fontsource/work-sans/latin-400.css";
import "@fontsource/work-sans/latin-500.css";
import "@fontsource/work-sans/latin-600.css";
import "@fontsource/dm-mono/latin-400.css";
import { ContactFooter, PillNav, TopBar } from "@/components/chrome";
import { RevealObserver } from "@/components/reveal";
import { person } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saadia Asghar | Product & Visual Designer",
  description:
    "Saadia Asghar designs products in Figma and posters, decks, and campaigns in Canva. Data science at GIKI, Islamabad.",
  authors: [{ name: person.name }],
  openGraph: {
    title: "Saadia Asghar | Product & Visual Designer",
    description: "Figma product work and Canva campaign design, in one place.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f1efe6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{if(localStorage.getItem('theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}",
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <TopBar />
        <PillNav />
        <main id="main">{children}</main>
        <ContactFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
