import WorkflowDiagram from "@/components/WorkflowDiagram";
import CaseStudy from "@/components/CaseStudy";
import SectionHeader from "@/components/SectionHeader";

export default function FeaturedProject() {
  const workflowSteps = [
    { label: "Shopify" },
    { label: "ORDERS_CREATE" },
    { label: "n8n" },
    { label: "Check ID" },
    { label: "Duplicate?" },
    { label: "Slack" },
    { label: "Google Sheets" },
  ];

  const sections = [
    {
      label: "Problem",
      content: "D2C businesses can spend time manually tracking new orders, maintaining spreadsheets and monitoring order changes.",
    },
    {
      label: "Solution",
      content: "Build an n8n workflow that receives Shopify order events and processes them automatically.",
    },
    {
      label: "Architecture",
      content: "Shopify webhook → n8n → duplicate check → conditional routing (Slack alert / Google Sheets logging).",
    },
    {
      label: "Cancellation Flow",
      content: "ORDERS_CANCELLED → n8n → find existing Order ID → Update Google Sheets (Payment Status = cancelled) → Slack Alert.",
    },
    {
      label: "Features Demonstrated",
      content: [
        "Shopify webhook integration",
        "API authentication & access token handling",
        "Shopify API scopes & webhook registration",
        "Google Sheets integration",
        "Duplicate detection & idempotency",
        "Cancellation handling",
        "Slack notifications & data mapping",
        "Error handling",
      ],
    },
    {
      label: "Status",
      content: "Demonstrated in practice projects. Not currently deployed for a paying client.",
    },
  ];

  return (
    <section id="featured" className="py-20 lg:py-28 bg-navy-850/50">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Featured Project"
          title="Shopify Order Automation"
          description="The main visual and technical centerpiece — demonstrating end-to-end Shopify order processing automation."
        />
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          {/* Workflow diagram */}
          <div className="rounded-xl border border-navy-700 bg-navy-800/40 p-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">ORDERS_CREATE Flow</h4>
            <WorkflowDiagram steps={workflowSteps} />
          </div>
          {/* Case study */}
          <div className="rounded-xl border border-navy-700 bg-navy-800/40 p-6" data-case="case-shopify-order">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">Details</h4>
            <CaseStudy sections={sections} />
          </div>
        </div>
      </div>
    </section>
  );
}
