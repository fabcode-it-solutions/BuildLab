import ProcessStep from "@/components/ProcessStep";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    title: "Understand the Business Process",
    description: "I start by mapping how the business currently handles the process manually — what triggers it, who is involved, and where the friction lies.",
  },
  {
    title: "Map the Workflow",
    description: "I break the process into discrete steps and decide which should be automated, which need manual review, and where errors might occur.",
  },
  {
    title: "Build the Automation",
    description: "I construct the n8n workflow with the right triggers, actions, and error handling — testing each piece as I go.",
  },
  {
    title: "Test Edge Cases",
    description: "I run the workflow against real scenarios: duplicates, cancellations, missing data, and unexpected inputs to verify reliability.",
  },
  {
    title: "Document & Improve",
    description: "I document the workflow, record what was tested, and identify opportunities for improvement or additional automations.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 lg:py-28 bg-navy-850/50">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <SectionHeader
          label="How I Work"
          title="A Practical Process"
          description="Each automation project follows the same deliberate sequence — from understanding the problem to documenting the result."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <ProcessStep key={step.title} number={i + 1} title={step.title} description={step.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
