import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Rules and Guides — JUBMUN I" },
      {
        name: "description",
        content:
          "Every JUBMUN I document in one place: code of conduct, delegate, chair and admin guides, dress code, best delegate rubric, ICC and Security Council guides.",
      },
      { property: "og:title", content: "Rules and Guides — JUBMUN I" },
      {
        property: "og:description",
        content: "All JUBMUN I rules, guides and reference documents for delegates and chairs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GuidesPage,
});

const documents = [
  {
    title: "ISG Jubail Code of Conduct",
    href: "https://drive.google.com/file/d/10gTtG9XEPrf2l_ZkQRN5DBpWr2FI-2xi/view?usp=sharing",
  },
  {
    title: "Delegate guide",
    href: "https://drive.google.com/file/d/1nyxS4glNVaRQS6P_LNHs9XEE2ExESroE/view?usp=sharing",
  },
  {
    title: "Chair guide",
    href: "https://drive.google.com/file/d/1axCpRzSphHZFIhxEzeRRQGBl5yhFF3UJ/view?usp=sharing",
  },
  {
    title: "Admin guide",
    href: "https://drive.google.com/file/d/1Hzo5DlUglFJ1PeTCXV_f0h4Q36O92ubD/view?usp=sharing",
  },
  {
    title: "Dress code",
    href: "https://drive.google.com/file/d/10woHQj1teHO0pVgcVhttBh_xgeFrOJEm/view?usp=sharing",
  },
  {
    title: "Best delegate rubric",
    href: "https://drive.google.com/file/d/1uoJ1ygCZRIL0oHmQTNbY7Tr8DgK_-eTw/view?usp=sharing",
  },
  {
    title: "ICC guide",
    href: "https://drive.google.com/file/d/1t3_a80nAP_TWKlJ7DFzf2sqNN9-iYUZZ/view?usp=sharing",
  },
  {
    title: "Security Council guide",
    href: "https://drive.google.com/file/d/1-sxRfCVS7ZKK96_MYQFFUMsTSvliEBWY/view?usp=sharing",
  },
];

function GuidesPage() {
  return (
    <PageShell
      title="Rules and Guides"
      intro="Read these before the conference. Every document delegates, chairs and admins need for JUBMUN I."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {documents.map((d, i) => (
          <Reveal key={d.title} delay={(i % 2) * 70}>
            <a
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full items-center gap-4 rounded-lg bg-panel/80 p-6 shadow-lg ring-1 ring-secondary/10 transition-all duration-300 hover:-translate-y-1 hover:bg-panel hover:ring-secondary/30"
            >
              <FileText className="h-5 w-5 shrink-0 text-secondary/70 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.1em]">
                {d.title}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
