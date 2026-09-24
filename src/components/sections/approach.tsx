import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

const APPROACH = [
  {
    num: "01",
    title: "Start with the problem",
    desc: "Before picking tools, work out what the thing actually needs to do and who it's for. Campus Compass started as a navigation frustration, not a tech stack decision.",
  },
  {
    num: "02",
    title: "Build it end to end",
    desc: "Frontend, database, deployment — get a working slice running before polishing any single layer. A deployed rough version teaches more than a perfect local prototype.",
  },
  {
    num: "03",
    title: "Ship for real users",
    desc: "credBase was built to help students navigate credentials and career paths. Real constraints and real feedback change what you build and how you prioritise it.",
  },
  {
    num: "04",
    title: "Keep learning deliberately",
    desc: "Currently working through machine learning by building with it — the F1 lap time project was an excuse to do data prep, feature engineering, and model comparison properly.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="mb-24 scroll-mt-10">
      <SectionHead num="03" title="How I Work" />

      {/* Principles — numbered rows instead of cards */}
      <div className="divide-y divide-hair border border-hair bg-panel">
        {APPROACH.map((item, i) => (
          <Reveal key={item.num} delay={i * 0.06}>
            <div className="group flex gap-6 p-6 transition-colors duration-200 hover:bg-surface sm:gap-10 sm:p-8">
              {/* Number */}
              <div className="flex-shrink-0 pt-0.5 font-mono text-[11px] tracking-widest text-accent uppercase">
                {item.num}
              </div>
              {/* Content */}
              <div>
                <h3 className="mb-2 text-[16px] font-semibold">{item.title}</h3>
                <p className="text-[13.5px] leading-[1.75] text-muted">{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
