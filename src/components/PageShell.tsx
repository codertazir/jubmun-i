import type { ReactNode } from "react";

import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

export function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="brand-gradient min-h-screen font-display text-secondary">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-32">
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary/80">{intro}</p>
        <div className="mt-12 space-y-6">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg bg-panel/80 p-7 shadow-lg ring-1 ring-secondary/10">
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.08em]">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-secondary/80">{children}</div>
    </div>
  );
}
