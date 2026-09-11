import type { ReactNode } from "react";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
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
        <Reveal>
          <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-secondary/80">{intro}</p>
        </Reveal>
        <div className="mt-12 space-y-6">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function InfoCard({
  title,
  children,
  action,
  delay = 0,
}: {
  title: string;
  children: ReactNode;
  action?: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-lg bg-panel/80 p-7 shadow-lg ring-1 ring-secondary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-secondary/25">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.08em]">{title}</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-secondary/80">
              {children}
            </div>
          </div>
          {action ? <div className="shrink-0 sm:pl-6">{action}</div> : null}
        </div>
      </div>
    </Reveal>
  );
}
