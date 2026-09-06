import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroAsset from "@/assets/hero-vintage.jpg.asset.json";
import logoAsset from "@/assets/jubmun-logo-white.png.asset.json";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import delegatesImg from "@/assets/delegates.jpg";
import speakerImg from "@/assets/speaker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DHAMUN XX — Countdown to the 20th Chapter" },
      {
        name: "description",
        content:
          "DHAMUN XX returns February 13-14. Join the 20th chapter of Dhahran Ahliyya Model United Nations — debate, diplomacy and delegate resources.",
      },
      { property: "og:title", content: "DHAMUN XX — Countdown to the 20th Chapter" },
      {
        property: "og:description",
        content:
          "DHAMUN XX returns February 13-14. Join the 20th chapter of Dhahran Ahliyya Model United Nations.",
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
    <div className="flex h-24 w-[4.5rem] flex-col items-center justify-center rounded-lg border border-foreground/50 bg-foreground/5 backdrop-blur-[2px] sm:h-28 sm:w-24 md:w-28">
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
          className="h-40 w-40 shrink-0 object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:h-52 sm:w-52"
        />

        <div className="flex flex-1 flex-col items-center justify-center pb-16 pt-10">
          <h1 className="font-display text-[2.75rem] font-bold uppercase leading-[0.95] tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] sm:text-7xl lg:text-8xl">
            JUBMUN I
          </h1>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <CountdownBox value={days} label="DAYS" />
            <CountdownBox value={hours} label="HOURS" />
            <CountdownBox value={minutes} label="MINUTES" />
            <CountdownBox value={seconds} label="SECONDS" />
          </div>

          <h2 className="mt-16 font-display text-xl font-bold uppercase tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-3xl">
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
              They say the future belongs to those who prepare for it today, and that&apos;s
              exactly what we&apos;re doing at DHAMUN. What began 20 years ago as a small group of
              aspiring debaters has grown into Saudi Arabia&apos;s largest conference of nations
              and diplomacy.
            </p>
            <p>
              DHAMUN continues to be a launchpad for bold ideas, a training ground for future
              leaders, and a space where students like us tackle the world&apos;s biggest
              questions head-on.
            </p>
            <p>
              Guided by a commitment to education, collaboration and action, DHAMUN remains
              steadfast in its pursuit of inspiring meaningful change. We invite you to join us,
              not just to participate, but to inspire, to be challenged, and to leave knowing
              you&apos;ve made a difference.
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
            className="flex items-center justify-center rounded-sm border border-secondary/60 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:bg-secondary hover:text-navy"
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
          className={`h-64 w-full object-cover sm:h-96 ${reverse ? "md:order-2" : ""}`}
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
        title="What is DHAMUN?"
        image={delegatesImg}
        imageAlt="Student delegates preparing for a committee session"
      >
        <p>
          DHAMUN, established in 2005, is one of Saudi Arabia&apos;s largest conferences of
          nations. Aspiring student leaders undertake the role of delegates and diplomats to
          debate and discuss solutions for a better tomorrow.
        </p>
      </FeatureBlock>

      <FeatureBlock
        id="faq"
        title="DHAMUN XX Mission Statement"
        image={speakerImg}
        imageAlt="A delegate delivering a speech at the DHAMUN podium"
        reverse
      >
        <p>
          DHAMUN is a student body organisation that advances understanding of international
          diplomacy and contemporary issues. DHAMUN positively affects the lives of participants
          and prepares them to be better global citizens. At DHAMUN, students develop an
          appreciation of differing viewpoints, experience the challenges, witness the reward of
          cooperation, establish a unique connection, and discover the human side of diplomacy and
          international affairs.
        </p>
        <p>
          We promise to ensure quality for the delegates to experience, and have their debate
          delve through the enriched topics we will offer. The DHAMUN experience seizes and
          strives to fulfil the aims and goals set out by the founders of this United Nations in
          the Preamble of the Charter: &ldquo;to practice tolerance and live together in peace
          with one another as good neighbors.&rdquo;
        </p>
        <p className="pt-2 text-secondary">— The DHAMUN Executive Team</p>
      </FeatureBlock>

      <SiteFooter />
      </div>
    </main>
  );
}
