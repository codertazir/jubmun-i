import { createFileRoute } from "@tanstack/react-router";

import { InfoCard, PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & FAQ — JUBMUN I" },
      {
        name: "description",
        content:
          "Contact the JUBMUN I organising team and read answers to the most common delegate questions.",
      },
      { property: "og:title", content: "Contact Us & FAQ — JUBMUN I" },
      {
        property: "og:description",
        content: "Reach the JUBMUN I organising team and read delegate FAQs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const people = [
  { name: "Zainab Syed", role: "Secretary-General", email: "syed.z.527@isg.edu.sa" },
  { name: "Jairah Jay Ibay", role: "Deputy Secretary-General", email: "ibay.j.527@isg.edu.sa" },
  { name: "Lama Alsadoon", role: "Deputy Secretary-General", email: "lamaaa5202@gmail.com" },
  { name: "Neal Bourn", role: "MUN Advisor", email: "bourn.n.05@isg.edu.sa" },
  { name: "Taccara Lake", role: "MUN Advisor", email: "lake.t.05@isg.edu.sa" },
];

const faqs = [
  [
    "What is an MUN?",
    "An MUN conference (Model United Nations) is an academic event where students act as delegates representing different countries and work together to discuss and solve real-world global issues.",
  ],
  ["Do I need prior experience?", "Not at all! MUN is beginner-friendly, and guidance will be provided throughout the conference."],
  ["What is a delegate?", "A delegate represents a specific country in a committee and speaks from that country's perspective."],
  ["What should I wear?", "Business attire (formal and professional clothing)."],
  ["How do I prepare for MUN?", "Delegates will receive a study guide before the conference to help with research and preparation."],
  ["Is MUN only about public speaking?", "Nope! MUN also focuses on teamwork, critical thinking, negotiation, and collaboration."],
  ["How can I register?", "You can sign up by completing the delegate registration form on our website."],
  [
    "What should I bring?",
    "Your own water bottle, snacks, a bag and your laptop. Lunch will be provided at campus, and watering stations will be available.",
  ],
];

function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      intro="Questions about registration, logistics or partnering with JUBMUN? Reach out to the team."
    >
      <InfoCard title="The team">
        <ul className="divide-y divide-secondary/10">
          {people.map((p) => (
            <li key={p.email} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
              <span>
                <span className="font-bold text-secondary">{p.name}</span>
                <span className="ml-2 text-xs uppercase tracking-[0.1em] text-secondary/60">
                  {p.role}
                </span>
              </span>
              <a
                href={`mailto:${p.email}`}
                className="story-link text-secondary/85 transition-colors hover:text-secondary"
              >
                {p.email}
              </a>
            </li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard title="FAQs" delay={80}>
        <div className="space-y-5">
          {faqs.map(([q, a]) => (
            <div key={q}>
              <h3 className="text-sm font-bold text-secondary">{q}</h3>
              <p className="mt-1">{a}</p>
            </div>
          ))}
        </div>
      </InfoCard>
    </PageShell>
  );
}
