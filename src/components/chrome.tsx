"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock } from "@/components/clock";
import { SoundToggle } from "@/components/sound-toggle";
import { asset, person } from "@/lib/data";

/** Name on the left, local time on the right. Scrolls away with the page. */
export function TopBar() {
  return (
    <div className="topbar">
      <Link href="/" className="me-link">
        <span className="me-face" aria-hidden>
          <svg viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" />
            <path d="M13 17v2M27 17v2" />
            <path d="M14 26c4 3 8 3 12 0" />
            <path d="M8 13c4-7 18-9 25-2" />
          </svg>
        </span>
        {person.name}
      </Link>
      <div className="topbar-right">
        <SoundToggle />
        <Clock />
      </div>
    </div>
  );
}

const items = [
  { href: "/", label: "Home" },
  { href: "/play/", label: "Play" },
  { href: "/about/", label: "About Me" },
];

/** The floating pill nav. On the home page it appears once the hero scrolls away. */
export function PillNav() {
  const pathname = usePathname();
  const home = pathname === "/";
  const [shown, setShown] = useState(!home);

  useEffect(() => {
    if (!home) {
      setShown(true);
      return;
    }
    const on = () => setShown(window.scrollY > window.innerHeight * 0.55);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [home]);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav className={`pillnav${shown ? " shown" : ""}`} aria-label="Main">
      {items.map((i) => (
        <Link key={i.href} href={i.href} className={active(i.href) ? "on" : ""} aria-current={active(i.href) ? "page" : undefined}>
          {i.label}
        </Link>
      ))}
      <a href={asset(person.resume)} target="_blank" rel="noreferrer">
        Résumé
      </a>
    </nav>
  );
}

/** Black footer with a message box. The form opens the visitor's email app; there is no server. */
export function ContactFooter() {
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Hello from your portfolio");
    const body = encodeURIComponent(`${msg}\n\n— ${from}`);
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="foot" id="contact">
      <div className="foot-grid">
        <div>
          <h2>Feel free to reach out!</h2>
          <p className="foot-lede">Got a product, a poster, or a campaign that needs to be clear? I&apos;d love to hear about it.</p>
          <p className="foot-ps">
            <b>P.S.</b> The box on the right opens your email app with the message ready to send. Or say hello on{" "}
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            !
          </p>
        </div>
        <form className="msg-form" onSubmit={send}>
          <label>
            <span>Your Email</span>
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </label>
          <label>
            <span>Message</span>
            <textarea required rows={4} placeholder="Type your message…" value={msg} onChange={(e) => setMsg(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="foot-bottom">
        <div className="foot-links">
          <a href={`mailto:${person.email}`}>Email</a>
          <a href={person.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={person.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={person.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <span>© {person.name}</span>
      </div>
    </footer>
  );
}
