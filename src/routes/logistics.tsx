import { createFileRoute } from "@tanstack/react-router";

import { InfoCard, PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/logistics")({
  head: () => ({
    meta: [
      { title: "Logistics — JUBMUN I" },
      {
        name: "description",
        content:
          "Venue, schedule, dress code and everything delegates need to know for JUBMUN I on November 26 and 27.",
      },
      { property: "og:title", content: "Logistics — JUBMUN I" },
      {
        property: "og:description",
        content: "Venue, schedule and delegate essentials for JUBMUN I.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LogisticsPage,
});

function LogisticsPage() {
  return (
    <PageShell
      title="Logistics"
      intro="Everything you need to plan your two days at JUBMUN I."
    >
      <InfoCard title="Dates and timing">
        <p>The conference runs across November 26 and 27, with opening ceremony at 9:00 AM.</p>
      </InfoCard>
      <InfoCard title="Venue">
        <p>Venue details will be published here ahead of the conference.</p>
      </InfoCard>
      <InfoCard title="Dress code">
        <p>
          Western business attire is required in committee sessions. Delegates should wear their
          badge at all times inside the venue.
        </p>
      </InfoCard>
      <InfoCard title="What to bring">
        <p>
          Position papers, a notebook and pens, a laptop or tablet if permitted by your committee,
          and a refillable water bottle.
        </p>
      </InfoCard>
    </PageShell>
  );
}
