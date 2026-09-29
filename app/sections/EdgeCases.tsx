import SectionHeader from "@/components/SectionHeader";

const completed = [
  "Duplicate orders",
  "Cancelled orders",
  "Missing customer-name data",
  "Existing order lookup",
  "Conditional routing",
  "Error handling",
];

const planned = ["Partial refunds", "COD vs prepaid", "Multi-item orders"];

export default function EdgeCases() {
  return (
    <section id="edge-cases" className="py-20 lg:py-28 bg-navy-850/50">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Reliability"
          title="Automation Reliability & Edge Cases"
          description="Workflows designed to handle real-world situations — what is completed and what is currently being developed."
        />
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-navy-700 bg-navy-800/40 p-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-green-400 mb-4">Completed</h4>
            <ul className="space-y-2">
              {completed.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-green-400 text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-navy-700 bg-navy-800/40 p-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-navy-400 mb-4">Planned / Currently Learning</h4>
            <ul className="space-y-2">
              {planned.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-navy-400 text-xs">○</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
