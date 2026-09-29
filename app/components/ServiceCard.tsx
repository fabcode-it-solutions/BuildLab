"use client";

interface ServiceCardProps {
  title: string;
  examples: string[];
  detail: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ServiceCard({ title, examples, detail, isExpanded, onToggle }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-xl border border-navy-700 bg-navy-800/50 card-hover focus-ring cursor-default">
      <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
      <ul className="space-y-1.5 mb-3">
        {examples.map((ex) => (
          <li key={ex} className="flex items-start gap-2 text-sm text-slate-400">
            <span className="text-accent mt-0.5 flex-shrink-0">→</span>
            {ex}
          </li>
        ))}
      </ul>
      <button
        onClick={onToggle}
        className="text-xs text-slate-500 hover:text-slate-300 transition-colors focus-ring rounded p-1 -ml-1"
        aria-expanded={isExpanded}
        type="button"
      >
        {isExpanded ? "Hide details" : "Read more →"}
      </button>
      {isExpanded && (
        <p className="mt-2 text-xs text-slate-400 leading-relaxed">{detail}</p>
      )}
    </div>
  );
}
