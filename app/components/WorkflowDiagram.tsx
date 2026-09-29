"use client";

import { useState } from "react";

interface Step {
  label: string;
}

interface WorkflowDiagramProps {
  steps: Step[];
  className?: string;
}

export default function WorkflowDiagram({ steps, className = "" }: WorkflowDiagramProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="flex flex-col items-center">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`px-5 py-3 rounded-lg border text-sm transition-all duration-200 cursor-default ${
                hovered === i
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-navy-600 bg-navy-800/80 text-slate-200"
              }`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {step.label}
            </div>
            {i < steps.length - 1 && (
              <div className="h-8 w-px bg-gradient-to-b from-navy-500 to-navy-700 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-r border-b border-navy-500 rotate-45" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
