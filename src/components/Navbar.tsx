import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/jubmun-logo-white.png.asset.json";

export const navLinks = [
  { label: "Registration", to: "/registration" },
  { label: "Committees", to: "/committees" },
  { label: "Rules & Guides", to: "/guides" },
  { label: "Logistics", to: "/logistics" },
  { label: "Executive Team", to: "/executive-team" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparent);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!transparent) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex w-fit items-center gap-2 rounded-full border py-2 transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-5xl justify-between border-secondary/20 bg-navy-deep/85 pl-3 pr-3 shadow-xl backdrop-blur-xl md:w-full"
            : "max-w-5xl justify-center border-secondary/25 bg-navy-deep/30 px-3 shadow-lg backdrop-blur-md"
        }`}
      >
        <Link
          to="/"
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
          className={`grid transition-all duration-500 ease-out ${
            scrolled
              ? "grid-cols-[1fr] opacity-100"
              : "pointer-events-none grid-cols-[0fr] opacity-0"
          }`}
        >
          <span className="flex items-center gap-2 overflow-hidden whitespace-nowrap pl-1">
            <img
              src={logoAsset.url}
              alt="JUBMUN emblem"
              className="h-9 w-9 shrink-0 object-contain transition-transform duration-300 hover:scale-105"
            />
            <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-secondary">
              JUBMUN I
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-5 px-3 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "text-secondary is-active" }}
                className="font-display text-xs font-bold uppercase tracking-[0.12em] story-link text-secondary/75 transition-colors hover:text-secondary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-secondary transition-colors hover:bg-secondary/10 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <ul className="animate-fade-in mx-auto mt-2 max-w-5xl rounded-3xl border border-secondary/20 bg-navy-deep/95 px-5 py-2 backdrop-blur-xl md:hidden">
          {navLinks.map((l, i) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-secondary underline underline-offset-4" }}
                className={`block py-3 font-display text-xs font-bold uppercase tracking-[0.12em] text-secondary/85 ${
                  i > 0 ? "border-t border-secondary/15" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
