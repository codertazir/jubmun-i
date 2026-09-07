import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import gaImg from "@/assets/committees/ga.jpg";
import iccImg from "@/assets/committees/icc.jpg";
import arabLeagueImg from "@/assets/committees/arab-league.jpg";
import specialImg from "@/assets/committees/special.jpg";
import securityCouncilImg from "@/assets/committees/security-council.jpg";
import hscImg from "@/assets/committees/hsc.jpg";
import cswImg from "@/assets/committees/csw.jpg";
import crisisImg from "@/assets/committees/crisis.jpg";

export const Route = createFileRoute("/committees")({
  head: () => ({
    meta: [
      { title: "Committees and Topics — JUBMUN I" },
      {
        name: "description",
        content:
          "The eight JUBMUN I committees and their debate topics, from the General Assembly and Security Council to the ICC, HSC, CSW and Crisis.",
      },
      { property: "og:title", content: "Committees and Topics — JUBMUN I" },
      {
        property: "og:description",
        content: "Explore the eight committees and debate topics of JUBMUN I.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommitteesPage,
});

const committees = [
  {
    name: "GA",
    topic:
      "Addressing the global production, consumption, and disposal of single-use plastics",
    image: gaImg,
    alt: "Discarded single-use plastic bottles",
  },
  {
    name: "ICC",
    topic:
      "Rodrigo Duterte: Debating Legitimate Law Enforcement vs. Extrajudicial Killings during his war on drugs",
    image: iccImg,
    alt: "An empty international courtroom",
  },
  {
    name: "Arab League",
    topic: "Addressing the Sudan Crisis and the Role of External Arms Suppliers",
    image: arabLeagueImg,
    alt: "Desert landscape in Sudan",
  },
  {
    name: "Special Committee",
    topic:
      "Protecting Child Performers from Exploitation in the Global Entertainment Industry",
    image: specialImg,
    alt: "An empty theatre stage under spotlights",
  },
  {
    name: "Security Council",
    topic:
      "Killer Robots: Addressing the Ethical and Legal Challenges of Lethal Autonomous Weapons Systems",
    image: securityCouncilImg,
    alt: "An autonomous military drone",
  },
  {
    name: "HSC",
    topic:
      "Determining Whether Data Obtained Through Nazi Human Experimentation Should Be Used in Modern Medical Research",
    image: hscImg,
    alt: "Vintage medical archive files",
  },
  {
    name: "CSW",
    topic:
      "Addressing the Underrepresentation of Women in Clinical Trials and Its Consequences for Diagnosis and Treatment",
    image: cswImg,
    alt: "A modern clinical research laboratory",
  },
  {
    name: "Crisis",
    topic: "Topic to be announced",
    image: crisisImg,
    alt: "A breaking iron chain",
  },
];

function CommitteesPage() {
  return (
    <PageShell
      title="Committees and Topics"
      intro="Eight committees, eight chains to break. Explore the topics delegates will debate at JUBMUN I."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {committees.map((c, i) => (
          <Reveal key={c.name} delay={(i % 2) * 80}>
            <article className="group h-full overflow-hidden rounded-lg bg-panel/80 shadow-lg ring-1 ring-secondary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-secondary/25">
              <div className="overflow-hidden">
                <img
                  src={c.image}
                  alt={c.alt}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em]">
                  {c.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-secondary/80">{c.topic}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
