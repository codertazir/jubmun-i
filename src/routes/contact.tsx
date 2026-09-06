import { createFileRoute } from "@tanstack/react-router";

import { InfoCard, PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — JUBMUN I" },
      {
        name: "description",
        content:
          "Get in touch with the JUBMUN I organising team about registration, sponsorship or delegate questions.",
      },
      { property: "og:title", content: "Contact Us — JUBMUN I" },
      {
        property: "og:description",
        content: "Reach the JUBMUN I organising team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      intro="Questions about registration, logistics or partnering with JUBMUN? Reach out to the team."
    >
      <InfoCard title="General enquiries">
        <p>Email and phone details will be published here shortly.</p>
      </InfoCard>
      <InfoCard title="Delegations and schools">
        <p>
          Schools interested in sending a delegation to JUBMUN I on November 26 and 27 can request
          an information pack from the organising team.
        </p>
      </InfoCard>
      <InfoCard title="Sponsorship and press">
        <p>Sponsorship opportunities and press accreditation details are available on request.</p>
      </InfoCard>
    </PageShell>
  );
}
