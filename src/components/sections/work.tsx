import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-hair bg-surface px-2.5 py-1 font-mono text-[11.5px] text-muted">
      {children}
    </span>
  );
}

function ProjectLink({
  href,
  children,
  isLive = false,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  isLive?: boolean;
  ariaLabel: string;
}) {
  return (
    <Magnetic range={45} intensity={0.25}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={
          isLive
            ? "group relative inline-flex items-center gap-2 border border-accent bg-accent/15 px-3.5 py-1.5 font-mono text-[12px] font-medium tracking-wider text-accent uppercase transition-all duration-200 hover:bg-accent hover:text-bg hover:shadow-[0_0_20px_rgba(232,160,58,0.4)]"
            : "group inline-flex items-center gap-1.5 border border-hair bg-surface px-3 py-1.5 font-mono text-[12px] tracking-wider text-muted uppercase transition-all duration-200 hover:border-accent/60 hover:text-ink"
        }
      >
        {isLive && (
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
        )}
        <span>{children}</span>
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      </a>
    </Magnetic>
  );
}

/** Corner ticks on the featured panel */
function CornerTicks() {
  const base = "pointer-events-none absolute h-3 w-3 border-accent";
  return (
    <span aria-hidden="true">
      <span className={`${base} -left-px -top-px border-l-[1.5px] border-t-[1.5px]`} />
      <span className={`${base} -right-px -top-px border-r-[1.5px] border-t-[1.5px]`} />
      <span className={`${base} -bottom-px -left-px border-b-[1.5px] border-l-[1.5px]`} />
      <span className={`${base} -bottom-px -right-px border-b-[1.5px] border-r-[1.5px]`} />
    </span>
  );
}

const MINOR_PROJECTS = [
  {
    num: "02",
    title: "Campus Compass",
    sub: "A better way to navigate campus.",
    desc: "A campus-focused platform bringing interactive locations, routing, and useful campus information together into one connected experience.",
    stack: ["Python", "Flask", "SQLite", "Folium", "Leaflet"],
    links: [
      { href: "https://campus-compass-1-0tbt.onrender.com", label: "Live" },
      { href: "https://github.com/stackvector/Campus-Compass", label: "Source" },
    ],
  },
  {
    num: "03",
    title: "F1 Lap Time Predictor",
    sub: "Exploring what shapes a lap time.",
    desc: "ML project using Formula One data — data prep, feature engineering, model training, and model comparison using MAE and RMSE.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    links: [{ href: "https://github.com/stackvector/Formula-One-Lap-Time-Predictor", label: "Source" }],
  },
];

export function Work() {
  return (
    <section id="work" className="mb-24 scroll-mt-10">
      <SectionHead num="02" title="Selected Work" />

      {/* ── Featured project ── */}
      <Reveal>
        <div className="relative mb-5 border border-hair bg-panel p-8 sm:p-10">
          <CornerTicks />

          {/* Header row */}
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="mb-3 inline-flex items-center gap-1.5 border border-accent/40 bg-accent/5 px-2.5 py-1 font-mono text-[10.5px] tracking-widest text-accent uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                In Development
              </span>
              <div className="font-mono text-[11px] tracking-wider text-muted uppercase mt-2">01 — Featured</div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <ProjectLink
                href="https://credbase.vercel.app"
                isLive
                ariaLabel="Visit the credBase live project"
              >
                Live
              </ProjectLink>
              <ProjectLink
                href="https://github.com/stackvector/credBase"
                ariaLabel="View the credBase source code on GitHub"
              >
                Source
              </ProjectLink>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-[28px] font-semibold tracking-[-0.3px] sm:text-[34px]">
            credBase
          </h3>
          <p className="mb-4 text-[13.5px] text-muted">
            Build a better professional profile.
          </p>

          {/* Description */}
          <p className="mb-8 max-w-[540px] text-[14px] leading-[1.75] text-muted">
            An AI-powered platform helping students cut through the confusion of courses,
            certifications, and career paths. Discover relevant credentials, understand the
            skills they build, and find learning opportunities that strengthen your
            professional profile.
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-2">
            {["FastAPI", "SQLite", "Vanilla JS", "Render"].map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Secondary projects ── */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {MINOR_PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <div className="group relative h-full border border-hair bg-panel p-7 transition-all duration-300 hover:border-accent/60">
              {/* Number */}
              <div className="mb-5 font-mono text-[11px] tracking-widest text-muted uppercase">
                {project.num}
              </div>

              <h3 className="mb-1.5 text-[20px] font-semibold tracking-[-0.2px]">
                {project.title}
              </h3>
              <p className="mb-4 text-[12.5px] text-muted">{project.sub}</p>
              <p className="mb-6 text-[13.5px] leading-[1.7] text-muted">{project.desc}</p>

              {/* Stack */}
              <div className="mb-6 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3 border-t border-hair pt-5">
                {project.links.map((link) => (
                  <ProjectLink
                    key={link.href}
                    href={link.href}
                    isLive={link.label.toLowerCase() === "live"}
                    ariaLabel={`${link.label === "Live" ? "Visit" : "View source for"} ${project.title}${link.label === "Source" ? " on GitHub" : ""}`}
                  >
                    {link.label}
                  </ProjectLink>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
