export function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-[11px] tracking-widest text-accent uppercase">{num}</span>
        <hr className="flex-1 border-none border-t border-hair" style={{ borderTopWidth: "1px", borderTopColor: "var(--hair)" }} />
      </div>
      <h2 className="text-[11px] font-mono tracking-[0.2em] text-muted uppercase">
        {title}
      </h2>
    </div>
  );
}
