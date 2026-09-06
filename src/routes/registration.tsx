import { createFileRoute } from "@tanstack/react-router";

import { InfoCard, PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration — JUBMUN I" },
      {
        name: "description",
        content:
          "Register as a delegate for JUBMUN I on November 26 and 27. Fees, deadlines and how to sign up your school delegation.",
      },
      { property: "og:title", content: "Registration — JUBMUN I" },
      {
        property: "og:description",
        content: "Delegate registration details, deadlines and fees for JUBMUN I.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegistrationPage,
});

function RegistrationPage() {
  return (
    <PageShell
      title="Registration"
      intro="Delegate and delegation registration for the first chapter of JUBMUN, held on November 26 and 27."
    >
      <InfoCard title="Who can register">
        <p>
          Students in grades 8 through 12 may register individually or as part of a school
          delegation. Experienced and first-time delegates are equally welcome.
        </p>
      </InfoCard>
      <InfoCard title="Key dates">
        <p>Registration opens: to be announced.</p>
        <p>Registration closes: two weeks before the conference.</p>
        <p>Conference: November 26 and 27.</p>
      </InfoCard>
      <InfoCard title="How to register">
        <p>
          Registration details and the sign-up form will be shared here soon. In the meantime,
          reach out through the contact page to reserve a place for your delegation.
        </p>
      </InfoCard>
    </PageShell>
  );
}
