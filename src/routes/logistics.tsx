import { createFileRoute } from "@tanstack/react-router";

import { InfoCard, PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/logistics")({
  head: () => ({
    meta: [
      { title: "Logistics — JUBMUN I" },
      {
        name: "description",
        content:
          "Full two-day schedule, venue location, dress code and delegate essentials for JUBMUN I on November 6 and 7.",
      },
      { property: "og:title", content: "Logistics — JUBMUN I" },
      {
        property: "og:description",
        content: "Schedule, venue and delegate essentials for JUBMUN I.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LogisticsPage,
});

const day1: [string, string][] = [
  ["8:30 – 9:00", "Delegate arrival"],
  ["9:00 – 9:45", "Opening ceremony"],
  ["9:45 – 10:00", "Transition to committees"],
  ["10:00 – 11:30", "Committee session #1"],
  ["11:30 – 12:15", "Friday prayer break and breakfast"],
  ["12:15 – 1:30", "Committee session #2"],
  ["1:30 – 2:30", "Lunch break"],
  ["2:30 – 3:45", "Committee session #3"],
  ["3:45 – 4:00", "Delegates dismissal"],
];

const day2: [string, string][] = [
  ["8:30 – 9:00", "Delegates' arrival"],
  ["9:00 – 10:15", "Committee session #4"],
  ["10:15 – 11:00", "In-committee breakfast break & chair meeting"],
  ["11:00 – 12:00", "Committee session #5"],
  ["12:00 – 1:00", "Lunch break"],
  ["1:00 – 2:30", "Committee session #6"],
  ["2:30 – 2:45", "Transition to closing ceremony"],
  ["2:45 – 3:45", "Closing ceremony"],
  ["4:00", "Delegate dismissal"],
];

function Schedule({ rows }: { rows: [string, string][] }) {
  return (
    <ul className="divide-y divide-secondary/10">
      {rows.map(([time, item]) => (
        <li key={time + item} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
          <span className="w-36 shrink-0 text-xs font-bold uppercase tracking-[0.1em] text-secondary">
            {time}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LogisticsPage() {
  return (
    <PageShell title="Logistics" intro="Everything you need to plan your two days at JUBMUN I.">
      <InfoCard title="Dates and timing">
        <p>The conference runs across November 6 and 7, with opening ceremony at 9:00 AM.</p>
      </InfoCard>
      <InfoCard title="Conference day 1" delay={60}>
        <Schedule rows={day1} />
      </InfoCard>
      <InfoCard title="Conference day 2" delay={120}>
        <Schedule rows={day2} />
      </InfoCard>
      <InfoCard title="Location" delay={180}>
        <p>The conference is hosted on campus. Open the venue map for directions:</p>
        <a
          href="https://maps.app.goo.gl/xaReavUiBPSB6AQK8"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-sm border border-secondary/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-navy"
        >
          View venue on Google Maps
        </a>
      </InfoCard>
      <InfoCard title="Dress code" delay={240}>
        <p>
          Western business attire is required in committee sessions. Delegates should wear their
          badge at all times inside the venue.
        </p>
      </InfoCard>
      <InfoCard title="What to bring" delay={300}>
        <p>
          Your own water bottle, snacks, a bag and your laptop. Lunch will be provided at campus and
          watering stations will be available.
        </p>
      </InfoCard>
    </PageShell>
  );
}
