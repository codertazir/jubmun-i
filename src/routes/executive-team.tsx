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
      intro="The JUBMUN Executive Board is a distinguished body of experienced, dedicated, and highly trained individuals committed to upholding the highest standards of academic excellence and diplomacy. Serving as the backbone of each committee, the Executive Board ensures fair debate, structured procedure, and an intellectually stimulating environment where delegates are challenged to think critically and engage respectfully. With a strong foundation in Model United Nations principles, research, and leadership, the JUBMUN Executive Board strives to guide delegates, foster meaningful discussion, and create an unforgettable conference experience that reflects the true spirit of international cooperation and professionalism."
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
