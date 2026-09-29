interface CaseStudySection {
  label: string;
  content: string | string[];
}

interface CaseStudyProps {
  sections: CaseStudySection[];
}

export default function CaseStudy({ sections }: CaseStudyProps) {
  return (
    <div className="space-y-4">
      {sections.map((section, i) => (
        <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="flex-shrink-0 sm:w-28">
            <span className="text-[11px] font-mono uppercase tracking-wider text-accent">
              {section.label}
            </span>
          </div>
          <div className="flex-1">
            {Array.isArray(section.content) ? (
              <ul className="space-y-1">
                {section.content.map((item, j) => (
                  <li key={j} className="text-sm text-slate-300 leading-relaxed list-disc list-inside marker:text-navy-500">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-300 leading-relaxed">{section.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
