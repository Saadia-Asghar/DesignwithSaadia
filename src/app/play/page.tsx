import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { moreTemplates, visuals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Play | Saadia Asghar",
  description: "Posters, decks, signage, and campaigns Saadia Asghar designed in Canva for Microsoft Club, UROG, ACM GIKI, and PreMed.PK.",
};

export default function Play() {
  return (
    <section className="page">
      <header className="page-head">
        <h1 className="hand">Play</h1>
        <p>
          Posters, decks, signage, and campaigns I made in Canva. {visuals.length + moreTemplates.length} templates for
          the Microsoft Club, UROG, ACM GIKI, and PreMed.PK. Click any piece to see it full size.
        </p>
      </header>
      <Gallery />
    </section>
  );
}
