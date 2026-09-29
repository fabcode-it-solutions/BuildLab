"use client";

import { useState, useEffect } from "react";

const workflowSteps = [
  { label: "Shopify", color: "text-navy-300" },
  { label: "n8n", color: "text-accent" },
  { label: "Google Sheets", color: "text-navy-300" },
  { label: "Slack", color: "text-navy-300" },
];

const tags = ["Webhooks", "APIs", "Automation", "Error Handling"];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-navy-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-content mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-block text-[11px] font-mono uppercase tracking-[0.15em] text-accent mb-4">
              n8n Automation Specialist
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-white leading-[1.15] tracking-tight text-balance">
              Automate Your Shopify Operations with n8n
            </h1>
            <p className="mt-5 text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
              I build reliable workflow automations for D2C businesses using n8n, Shopify, APIs, Google Sheets, Slack and webhooks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 text-sm font-medium bg-accent text-navy-900 rounded-lg hover:bg-accent-light transition-colors duration-200 focus-ring"
              >
                View My Work
              </a>
              <a
                href="mailto:hello@n8n-automation.dev"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-slate-300 border border-navy-600 rounded-lg hover:border-navy-500 hover:text-white transition-all duration-200 focus-ring"
              >
                Let&apos;s Talk
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-mono text-slate-500 border border-navy-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: workflow diagram */}
          <div className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="w-full max-w-sm">
              <div className="rounded-2xl border border-navy-700 bg-navy-850/60 p-8 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-0">
                  {workflowSteps.map((step, i) => (
                    <div key={step.label} className="flex flex-col items-center">
                      <div className="px-6 py-3 rounded-lg border border-navy-600 bg-navy-800 text-sm font-medium text-slate-200 hover:border-accent/40 hover:text-accent transition-colors duration-200 cursor-default">
                        {step.label}
                      </div>
                      {i < workflowSteps.length - 1 && (
                        <div className="h-8 w-px bg-gradient-to-b from-navy-500 to-navy-700 relative">
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-r border-b border-navy-500 rotate-45" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
