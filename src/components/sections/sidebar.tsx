"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Magnetic } from "@/components/ui/magnetic";
import { useActiveSection } from "@/lib/use-active-section";

const NAV = [
  { id: "stack",    label: "Stack" },
  { id: "work",     label: "Work" },
  { id: "approach", label: "Approach" },
  { id: "contact",  label: "Contact" },
];

const SECTION_IDS = NAV.map((item) => item.id);

export function Sidebar() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <aside className="relative flex flex-col justify-between border-b border-hair px-8 py-10 md:sticky md:top-0 md:h-screen md:border-b-0 md:border-r md:px-10 md:py-14">

      {/* ── Top block ── */}
      <div className="flex flex-col gap-0">

        {/* Name + theme toggle row */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            {/* Monogram */}
            <div className="mb-4 flex h-10 w-10 items-center justify-center border border-hair bg-surface text-[13px] font-semibold tracking-wider text-ink">
              LK
            </div>
            <h1 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.5px] md:text-[34px]">
              Lakshya<br />Kumar<span className="caret" aria-hidden="true" />
            </h1>
          </div>
          <ThemeToggle />
        </div>

        {/* Tagline */}
        <p className="mb-2 max-w-[210px] text-[13.5px] leading-[1.65] text-muted">
          Developer working across software and exploring machine learning.
        </p>

        {/* Availability pill */}
        <div className="mb-10 mt-4 inline-flex w-fit items-center gap-2 border border-hair bg-surface px-3 py-1.5">
          <span className="status-dot relative h-1.5 w-1.5 rounded-full bg-green-500 text-green-500" />
          <span className="font-mono text-[11px] tracking-wide text-muted">
            available for work
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1" aria-label="Sections">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <Magnetic key={item.id} range={60} intensity={0.25}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group flex items-center gap-3 rounded-sm px-0 py-2 text-[13.5px] transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-px flex-shrink-0 transition-all duration-300 ${
                      isActive
                        ? "w-8 bg-accent"
                        : "w-4 bg-hair group-hover:w-6 group-hover:bg-muted"
                    }`}
                  />
                  <span className={`font-mono text-[12px] tracking-wider uppercase ${isActive ? "text-ink" : "text-muted"}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="ml-auto h-1 w-1 rounded-full bg-accent"
                    />
                  )}
                </a>
              </Magnetic>
            );
          })}
        </nav>
      </div>

      {/* ── Bottom: links ── */}
      <div className="mt-10 flex flex-col gap-3 md:mt-0">
        <hr className="section-rule mb-1" />
        <a
          href="https://github.com/stackvector"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between font-mono text-[11.5px] text-muted transition-colors hover:text-accent"
        >
          <span>github.com/stackvector</span>
          <span className="opacity-0 transition-opacity group-hover:opacity-100">↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/lakshya-kumar-40a9a3415/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between font-mono text-[11.5px] text-muted transition-colors hover:text-accent"
        >
          <span>linkedin.com/in/lakshya-kumar</span>
          <span className="opacity-0 transition-opacity group-hover:opacity-100">↗</span>
        </a>
      </div>
    </aside>
  );
}
