import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroAsset from "@/assets/hero-vintage.jpg.asset.json";
import logoAsset from "@/assets/jubmun-logo-white.png.asset.json";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import delegatesImg from "@/assets/delegates.jpg";
import speakerImg from "@/assets/speaker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JUBMUN I — Countdown to the First Chapter" },
      {
        name: "description",
        content:
          "JUBMUN I takes place November 26 and 27. Join the first chapter of Jubail Model United Nations — debate, diplomacy and delegate resources.",
      },
      { property: "og:title", content: "JUBMUN I — Countdown to the First Chapter" },
      {
        property: "og:description",
        content:
          "JUBMUN I takes place November 26 and 27. Join the first chapter of Jubail Model United Nations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TARGET_MONTH = 10; // November (0-indexed)
const TARGET_DAY = 26;
const TARGET_HOUR = 9;

function nextTarget() {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, 0, 0, 0);
  if (target.getTime() <= now.getTime()) {
    target = new Date(year + 1, TARGET_MONTH, TARGET_DAY, TARGET_HOUR, 0, 0, 0);
  }
  return target;
}

function useCountdown() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, nextTarget().getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const total = remaining ?? 0;
  return {
    days: Math.floor(total / 86_400_000),
    hours: Math.floor(total / 3_600_000) % 24,
    minutes: Math.floor(total / 60_000) % 60,
    seconds: Math.floor(total / 1000) % 60,
  };
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex h-24 w-[4.5rem] flex-col items-center justify-center rounded-lg border border-foreground/50 bg-foreground/5 backdrop-blur-[2px] transition-transform duration-300 hover:-translate-y-1 sm:h-28 sm:w-24 md:w-28">
      <span className="text-3xl font-semibold leading-none sm:text-4xl">{value}</span>
      <span className="mt-2 text-[0.6rem] tracking-[0.15em] sm:text-xs">{label}</span>
    </div>
  );
}

function Hero() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden text-secondary">
      <img
        src={heroAsset.url}
        alt="Antique maps, compasses and quills bound in chains"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-6 py-12 text-center">
        <img
          src={logoAsset.url}
          alt="JUBMUN emblem"
          width={1024}
          height={1024}
          className="h-40 w-40 shrink-0 animate-fade-in object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-105 sm:h-52 sm:w-52"
        />

        <div className="flex flex-1 flex-col items-center justify-center pb-16 pt-10">
          <h1 className="animate-fade-in font-display text-[2.75rem] font-bold uppercase leading-[0.95] tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] sm:text-7xl lg:text-8xl">
            JUBMUN I
          </h1>

          <div className="mt-10 flex animate-fade-in flex-wrap items-center justify-center gap-3 sm:gap-5">
            <CountdownBox value={days} label="DAYS" />
            <CountdownBox value={hours} label="HOURS" />
            <CountdownBox value={minutes} label="MINUTES" />
            <CountdownBox value={seconds} label="SECONDS" />
          </div>

          <h2 className="mt-16 animate-fade-in font-display text-xl font-bold uppercase tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-3xl">
            Welcome to the beginning of JUBMUN
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.05em] sm:text-base">
            On November 26th and 27th
          </p>
        </div>
      </div>
    </section>
  );
}

const actions = [
  { label: "LOCATION", href: "#location" },
  { label: "FAQ", href: "#faq" },
  { label: "DELEGATE RESOURCES", href: "#resources" },
];

function Intro() {
  return (
    <section className="px-6 py-20 text-secondary sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
        <div className="max-w-xl">
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.08em]">
            Welcome to JUBMUN
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-relaxed text-secondary/85">
            <p>
              Welcome to the beginning of JUBMUN, where students from every background and level
              of experience are invited to come together, debate, collaborate, and grow. This
              conference is a space to challenge your thinking, engage with global issues, and
              discover your potential as a leader, a diplomat, and an agent of change.
            </p>
          </div>
        </div>

        <img
          src={logoAsset.url}
          alt="JUBMUN emblem"
          width={1024}
          height={1024}
          loading="lazy"
          className="mx-auto h-44 w-44 object-contain sm:h-56 sm:w-56"
        />
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {actions.map((a) => (
          <a
            key={a.label}
            href={a.href}
            className="flex items-center justify-center rounded-sm border border-secondary/60 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-navy"
          >
            {a.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function FeatureBlock({
  id,
  title,
  image,
  imageAlt,
  reverse,
  children,
}: {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 pb-16 text-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-0 md:grid-cols-2">
        <img
          src={image}
          alt={imageAlt}
          width={1200}
          height={900}
          loading="lazy"
          className={`h-64 w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-96 ${reverse ? "md:order-2" : ""}`}
        />
        <div
          className={`relative z-10 bg-panel p-8 sm:p-10 ${
            reverse ? "md:order-1 md:mr-[-3rem]" : "md:ml-[-3rem]"
          }`}
        >
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em]">{title}</h3>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-secondary/80">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="font-display">
      <Navbar transparent />
      <Hero />
      <div className="brand-gradient">
      <Intro />

      <FeatureBlock
        id="location"
        title="JUBMUN I's Theme"
        image={delegatesImg}
        imageAlt="Student delegates preparing for a committee session"
      >
        <p>
          The theme this year is &ldquo;Break The Chain&rdquo;, challenging every delegate to look
          and search beyond routine solutions and confront the cycles that hold our global
          community back from prospering &mdash; whether politically, socially, or
          environmentally, we call delegates to come and ponder over these chains restricting us.
          As you step into debate, negotiation and diplomacy, and collaboration, remember that you
          have the power to shift the perspective and inspire real change. JUBMUN isn&apos;t just
          a conference; it&apos;s a space to grow, question, lead, and explore with purpose.
        </p>
      </FeatureBlock>

      <FeatureBlock
        id="faq"
        title="JUBMUN I Mission Statement"
        image={speakerImg}
        imageAlt="A delegate delivering a speech at the JUBMUN podium"
        reverse
      >
        <p>
          As JUBMUN&rsquo;s inaugural conference, our mission is to create an experience shaped by
          the dedication, vision, and hard work of our student body. We aim to empower delegates
          to think critically, negotiate boldly, and engage deeply with global challenges,
          fostering leadership, collaboration, and creativity at every step. Above all, we seek to
          ensure that every participant leaves with lasting skills, connections, and unforgettable
          memories.
        </p>
        <p className="pt-2 text-secondary">— The JUBMUN Executive Team</p>
      </FeatureBlock>

      <SiteFooter />
      </div>
    </main>
  );
}
