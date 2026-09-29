"use client";

import { useState } from "react";

interface TechnologyCardProps {
  name: string;
  description?: string;
}

export default function TechnologyCard({ name, description }: TechnologyCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`p-4 rounded-lg border text-center transition-all duration-200 cursor-default ${
        hovered
          ? "border-accent/30 bg-navy-750/80"
          : "border-navy-700 bg-navy-800/50"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-sm font-medium text-slate-200 mb-1">{name}</div>
      {description && (
        <div className="text-[11px] text-slate-500 leading-snug">{description}</div>
      )}
    </div>
  );
}
