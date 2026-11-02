"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { asset, person } from "@/lib/data";

const links = [
  { href: "/#work", label: "Product" },
  { href: "/#visual", label: "Visual" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-row">
        <Link href="/" className="logo" aria-label="Saadia Asghar, home">
          <span className="logo-mark">S</span>
          <span>Saadia Asghar</span>
        </Link>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
        <nav id="site-nav" className={`nav${open ? " open" : ""}`} onClick={() => setOpen(false)}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contact">Contact</Link>
          <a className="btn btn-solid" href={asset(person.resume)} target="_blank" rel="noreferrer">
            Résumé <span className="arrow">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
