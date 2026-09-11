import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/executive-team")({
  head: () => ({
    meta: [
      { title: "Executive Team — JUBMUN I" },
      {
        name: "description",
        content:
          "Meet the student executive team organising the first chapter of JUBMUN, held November 6 and 7.",
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

const members = [
  {
    name: "Zainab Syed",
    role: "Secretary-General",
    quote:
      "Hii, I'm your SG, and I can't wait to watch the idea of JUBMUN's first conference come to life through the collaboration of two schools in Jubail. As SG, I work behind the scenes to ensure everything comes together, and I'm excited to welcome you to this conference.",
  },
  {
    name: "Jairah Jay Ibay",
    role: "Deputy Secretary-General",
    quote:
      "I'm Jairah, your Deputy Secretary General from ISG Jubail. I'll be helping everyone on the executive team, delegates and other parties involved to help this MUN to be an unforgettable experience for all.",
  },
  {
    name: "Lama Alsadoon",
    role: "Deputy Secretary-General",
    quote: "Hi, I'm the JUBMUN I's DSG!",
  },
  {
    name: "Abaan Rashid",
    role: "Head of Logistics",
    quote:
      "I'm Abaan, serving as Head of Logistics & Management for JUBMUN 2026. I have experience leading large scale school initiatives and managing operations, planning, and coordination across teams, and I'm excited to help deliver an organized and impactful conference.",
  },
  {
    name: "Hafsa Abdul Aziz",
    role: "Head of Chairs",
    quote:
      "Hello Everyone! I'm Hafsa and I'm so glad to be the head of chairs for JUBMUN 2026. Can't wait to see what JUBMUN will look like, in 2026 and even after that!",
  },
  {
    name: "Daniel Dunphy",
    role: "President of the GA",
    quote:
      "As PGA I'll organise and control the general assembly and provide guidance to the chairs along with helping any and all other board members throughout the conference.",
  },
  {
    name: "Swarup Khanzode",
    role: "Head of Administration",
    quote:
      "Hi! I'm Swarup, JUBMUN's Head of Administration. I recruit and train the admin team to keep committees running smoothly, handling issues behind the scenes to keep everything on track. Excited to help organize the best MUN in Jubail!",
  },
  {
    name: "Anam Zia",
    role: "Head of Delegates",
    quote:
      "Hey! I'm Anam Zia, your Head of Delegate Affairs at JUBMUN — basically the person who answers your questions before you even realise you have them. I'm here to keep confusion short and confidence long. If you're lost, stressed, or overthinking (same), welcome — you're in good hands.",
  },
  {
    name: "Faseeh Shah",
    role: "Head of Finance",
    quote:
      "Hi. I'm Faseeh Shah. As Head of Finance for JUBMUN, I oversee the conference budget, corporate sponsorships, and financial operations to ensure an accessible, high-value experience for all delegates.",
  },
  {
    name: "Affan Sheikh",
    role: "Head of Media",
    quote:
      "Hello. I'm Affan, the Head of Media at JUBMUN. I lead the team that made the very website you're looking at. Looking forward to meeting you all at the first JUBMUN conference!",
  },
];

function ExecutiveTeamPage() {
  return (
    <PageShell
      title="Executive Team"
      intro="The JUBMUN Executive Board is a distinguished body of experienced, dedicated, and highly trained individuals committed to upholding the highest standards of academic excellence and diplomacy. Serving as the backbone of each committee, the Executive Board ensures fair debate, structured procedure, and an intellectually stimulating environment where delegates are challenged to think critically and engage respectfully. With a strong foundation in Model United Nations principles, research, and leadership, the JUBMUN Executive Board strives to guide delegates, foster meaningful discussion, and create an unforgettable conference experience that reflects the true spirit of international cooperation and professionalism."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m, i) => (
          <Reveal key={m.name} delay={(i % 3) * 70}>
            <div className="h-full rounded-lg bg-panel/80 p-7 text-center shadow-lg ring-1 ring-secondary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-secondary/25">
              <h2 className="font-display text-base font-bold tracking-tight">{m.name}</h2>
              <p className="mt-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-secondary/70">
                {m.role}
              </p>
              <p className="mt-4 text-sm italic leading-relaxed text-secondary/80">
                &ldquo;{m.quote}&rdquo;
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
