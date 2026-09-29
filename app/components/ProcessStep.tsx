interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-sm font-semibold mb-3 transition-all duration-200 group-hover:bg-accent/20 group-hover:border-accent/50">
        {number}
      </div>
      <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
      <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">{description}</p>
    </div>
  );
}
