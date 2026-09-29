"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  href: string;
  featured?: boolean;
}

export default function ProjectCard({ title, description, tools, href, featured = false }: ProjectCardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (href.startsWith("#")) {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }
      setLoading(true);
      router.push(href);
    },
    [href, router]
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group block p-6 rounded-xl border bg-navy-800/50 card-hover focus-ring ${
        featured
          ? "border-accent/20 bg-navy-800/80"
          : "border-navy-700"
      } ${loading ? "opacity-60 pointer-events-none" : ""}`}
      aria-busy={loading}
    >
      {featured && (
        <span className="inline-block px-2 py-0.5 mb-3 text-[10px] font-mono uppercase tracking-wider text-accent border border-accent/20 rounded bg-accent/10">
          Featured
        </span>
      )}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-2 py-0.5 text-[11px] font-mono text-navy-300 bg-navy-700/60 border border-navy-600 rounded"
          >
            {tool}
          </span>
        ))}
      </div>
    </a>
  );
}
