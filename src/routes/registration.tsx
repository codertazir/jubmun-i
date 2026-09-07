import { createFileRoute } from "@tanstack/react-router";

import { InfoCard, PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration — JUBMUN I" },
      {
        name: "description",
        content:
          "Register for JUBMUN I on November 26 and 27. Delegate and chair registration forms for the first chapter of Jubail Model United Nations.",
      },
      { property: "og:title", content: "Registration — JUBMUN I" },
      {
        property: "og:description",
        content: "Delegate and chair registration forms for JUBMUN I.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegistrationPage,
});

const linkClass =
  "inline-flex items-center justify-center rounded-sm border border-secondary/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-navy";

function RegistrationPage() {
  return (
    <PageShell
      title="Registration"
      intro="Registration for the first chapter of JUBMUN, held on November 26 and 27."
    >
      <InfoCard title="Delegates">
        <p>Delegates may register using this form:</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSek6g8fRgDqq1esvCMvctqP6CCfh1evc90PcClc74N7S9G03A/viewform?usp=preview"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          Delegate registration form
        </a>
      </InfoCard>
      <InfoCard title="Chairs" delay={80}>
        <p>Chairs may register using this form:</p>
        <a
          href="https://forms.gle/HVRHDsTTc94AWxU66"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          Chair registration form
        </a>
      </InfoCard>
    </PageShell>
  );
}
