import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

const CHANNELS = [
  {
    name: "GitHub",
    handle: "github.com/stackvector",
    href: "https://github.com/stackvector",
    desc: "Source for everything I build, including the projects above.",
  },
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/lakshya-kumar",
    href: "https://www.linkedin.com/in/lakshya-kumar-40a9a3415/",
    desc: "Best place to reach me about roles and opportunities.",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-10">
      <SectionHead num="04" title="Get In Touch" />

      {/* ── CTA Banner ── */}
      <Reveal>
        <div className="relative mb-5 border border-hair bg-panel p-8 sm:p-10">
          {/* Status line */}
          <div className="mb-5 flex items-center gap-2">
            <span className="status-dot relative h-1.5 w-1.5 rounded-full bg-green-500 text-green-500" />
            <span className="font-mono text-[11.5px] tracking-wide text-muted">
              status: <span className="text-green-500">available</span>
            </span>
          </div>

          <p className="mb-2 max-w-[460px] text-[22px] font-semibold leading-[1.3] tracking-[-0.3px] sm:text-[26px]">
            Open to internships, full-time roles, and freelance work.
          </p>
          <p className="mb-8 max-w-[400px] text-[13.5px] leading-[1.7] text-muted">
            If you have an interesting problem to solve or project to build,
            I'd like to hear about it.
          </p>

          <Magnetic range={60} intensity={0.2}>
            <a
              href="https://www.linkedin.com/in/lakshya-kumar-40a9a3415/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-accent bg-accent px-6 py-3 font-mono text-[12px] text-bg tracking-widest uppercase transition-opacity hover:opacity-80"
            >
              Let&apos;s talk <span aria-hidden="true">→</span>
            </a>
          </Magnetic>
        </div>
      </Reveal>

      {/* ── Channel cards ── */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CHANNELS.map((channel, i) => (
          <Reveal key={channel.name} delay={i * 0.08}>
            <Magnetic range={60} intensity={0.12}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between border border-hair bg-panel p-6 transition-all duration-300 hover:border-accent/60"
              >
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="text-[15px] font-semibold">{channel.name}</h3>
                    <span className="font-mono text-[14px] text-muted opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                  </div>
                  <p className="mb-3 font-mono text-[11.5px] text-accent">{channel.handle}</p>
                  <p className="text-[13px] leading-[1.65] text-muted">{channel.desc}</p>
                </div>
              </a>
            </Magnetic>
          </Reveal>
        ))}
      </div>

      {/* ── Footer ── */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hair pt-8 font-mono text-[11.5px] text-muted">
        <span>Lakshya Kumar — 2026</span>
        <span>Built with Next.js. Not a template.</span>
      </div>
    </section>
  );
}
