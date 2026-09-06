import { createFileRoute } from "@tanstack/react-router";

import { InfoCard, PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/executive-team")({
  head: () => ({
    meta: [
      { title: "Executive Team — JUBMUN I" },
      {
        name: "description",
        content:
          "Meet the student executive team organising the first chapter of JUBMUN, held November 26 and 27.",
      },
      { property: "og:title", content: "Executive Team — JUBMUN I" },
      {
        property: "og:description",
        content: "The students leading JUBMUN I, from the Secretary-General to committee chairs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExecutiveTeamPage,
});

const roles = [
  { role: "Secretary-General", note: "Leads the conference and its vision." },
  { role: "Deputy Secretary-General", note: "Supports conference leadership and committees." },
  { role: "President of the General Assembly", note: "Presides over plenary sessions." },
  { role: "Head of Logistics", note: "Runs venue, scheduling and delegate services." },
  { role: "Head of Media", note: "Oversees press, design and communications." },
  { role: "Head of Committees", note: "Coordinates chairs and academic content." },
];

function ExecutiveTeamPage() {
  return (
    <PageShell
      title="Executive Team"
      intro="The student leaders building the first chapter of JUBMUN. Names and photos will be announced soon."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {roles.map((r) => (
          <InfoCard key={r.role} title={r.role}>
            <p>{r.note}</p>
          </InfoCard>
        ))}
      </div>
    </PageShell>
  );
}
