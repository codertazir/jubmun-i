import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/jubmun-logo-white.png.asset.json";

export const navLinks = [
  { label: "Registration", to: "/registration" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-deep/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link
          to="/"
          className={`flex items-center gap-3 transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <img src={logoAsset.url} alt="JUBMUN emblem" className="h-10 w-10 object-contain" />
          <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-secondary">
            JUBMUN I
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "text-secondary" }}
                className="font-display text-xs font-bold uppercase tracking-[0.12em] text-secondary/75 transition-colors hover:text-secondary"
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
          className="text-secondary md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <ul className="bg-navy-deep/95 px-6 pb-5 md:hidden">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block border-t border-secondary/15 py-3 font-display text-xs font-bold uppercase tracking-[0.12em] text-secondary/85"
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
