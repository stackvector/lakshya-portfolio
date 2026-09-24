"use client";

import { useEffect, useState } from "react";
import { useMotionPreferences } from "@/components/ui/motion-preferences";
import { Reveal } from "@/components/ui/reveal";

const LINES = [
  "Building software across web and data.",
  "Turning ideas into working products.",
];

export function LogLine() {
  const { resolved } = useMotionPreferences();
  const isReduced = resolved === "reduced";
  const [lineIdx, setLineIdx] = useState(0);
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (isReduced) {
      setText(LINES[LINES.length - 1]);
      setDone(true);
      return;
    }

    let charIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const type = () => {
      if (cancelled) return;
      const msg = LINES[lineIdx];
      if (charIndex <= msg.length) {
        setText(msg.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(type, 24);
      } else {
        setDone(true);
      }
    };

    setText("");
    setDone(false);
    charIndex = 0;
    timeout = setTimeout(type, 200);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [isReduced, lineIdx]);

  return (
    <div className="mb-16">
      {/* ── Large headline ── */}
      <Reveal>
        <p className="mb-5 max-w-[560px] text-[32px] font-semibold leading-[1.15] tracking-[-0.5px] sm:text-[38px]">
          Transforming ideas into
          <br />
          <span className="text-accent">practical software.</span>
        </p>
      </Reveal>

      {/* ── Typed supporting line ── */}
      <Reveal delay={0.15}>
        <div
          className="flex items-center gap-2 font-mono text-[13px] text-muted"
          aria-live="polite"
        >
          <span className="text-accent select-none">›</span>
          <span>{text}</span>
          {!done && (
            <span className="inline-block h-[13px] w-[1.5px] bg-accent opacity-80 animate-pulse" aria-hidden="true" />
          )}
        </div>
      </Reveal>

      {/* ── CTA row ── */}
      <Reveal delay={0.25}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-mono text-[12.5px] text-bg tracking-wide uppercase transition-opacity hover:opacity-80"
          >
            View work <span aria-hidden>↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-hair px-5 py-2.5 font-mono text-[12.5px] text-muted tracking-wide uppercase transition-colors hover:border-accent hover:text-ink"
          >
            Get in touch <span aria-hidden>→</span>
          </a>
        </div>
      </Reveal>
    </div>
  );
}
