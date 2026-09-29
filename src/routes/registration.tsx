import { createFileRoute } from "@tanstack/react-router";

import { InfoCard, PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration — JUBMUN I" },
      {
        name: "description",
        content:
          "Register for JUBMUN I on November 6 and 7. Delegate and chair registration forms, school and individual pathways, and the participation fee.",
      },
      { property: "og:title", content: "Registration — JUBMUN I" },
      {
        property: "og:description",
        content: "Delegate and chair registration forms and fees for JUBMUN I.",
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
      intro="Registration for the first chapter of JUBMUN, held on November 6 and 7."
    >
      <InfoCard title="How registration works">
        <p>
          Registration for JUBMUN is designed to be flexible and accessible for both schools and
          individual participants. School sponsors and advisors will receive official registration
          forms directly, which can be completed and submitted on behalf of their delegation. At the
          same time, individual delegates who are not registering through a school are welcome to
          apply independently using the registration links provided on the website. Both
          registration pathways ensure equal consideration and access to the full JUBMUN conference
          experience, allowing participants to choose the option that best suits their
          circumstances.
        </p>
      </InfoCard>
      <InfoCard title="Participation fee" delay={60}>
        <p>
          The participation fee for JUBMUN is 200 per delegate (150 for ISG Jubail students). This
          fee covers essential conference materials, access to all committee sessions, and the
          overall conference experience. By maintaining a clear, transparent registration fee,
          JUBMUN ensures fairness for all participants while supporting the high academic standards,
          organization, and professionalism that define the conference.
        </p>
      </InfoCard>
      <InfoCard
        title="Delegates"
        delay={120}
        action={
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSek6g8fRgDqq1esvCMvctqP6CCfh1evc90PcClc74N7S9G03A/viewform?usp=preview"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Delegate registration form
          </a>
        }
      >
        <p>Delegates may register using this form:</p>
      </InfoCard>
      <InfoCard
        title="Chairs"
        delay={180}
        action={
          <a
            href="https://forms.gle/HVRHDsTTc94AWxU66"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            Chair registration form
          </a>
        }
      >
        <p>Chairs may register using this form:</p>
      </InfoCard>
    </PageShell>
  );
}
