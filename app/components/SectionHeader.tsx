interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-[11px] font-mono uppercase tracking-[0.15em] text-accent mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight">{title}</h2>
      {description && (
        <p className={`mt-3 text-sm text-slate-400 leading-relaxed ${centered ? "max-w-xl mx-auto" : "max-w-lg"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
