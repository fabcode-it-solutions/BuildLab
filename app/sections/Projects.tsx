import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

export default function Projects() {
  const projects = [
    {
      title: "Daily Digest Automation",
      description: "A scheduled automation that retrieves weather information and sends a daily email digest.",
      tools: ["n8n", "HTTP API", "Gmail"],
      href: "#case-daily-digest",
    },
    {
      title: "Form Submission Alert",
      description: "Receives form submissions, applies conditional logic based on amount, stores qualifying submissions in Google Sheets and sends a Slack notification.",
      tools: ["n8n", "Webhook", "IF logic", "Google Sheets", "Slack"],
      href: "#case-form-alert",
    },
    {
      title: "RSS → Notion Logger",
      description: "Reads RSS news items and automatically creates records in a Notion database.",
      tools: ["n8n", "RSS", "Notion"],
      href: "#case-rss-notion",
    },
    {
      title: "Shopify API & Webhook Integration",
      description: "Practice integration with a Shopify development store using Admin API, client credentials authentication, GraphQL and webhook registration.",
      tools: ["Shopify", "n8n", "REST API", "GraphQL"],
      href: "#case-shopify-api",
    },
    {
      title: "Shopify New Order Automation",
      description: "Automatically receives Shopify new-order events, checks whether the Order ID already exists and prevents duplicate records.",
      tools: ["Webhooks", "Duplicate detection", "Google Sheets", "Slack"],
      href: "#case-new-order",
    },
    {
      title: "Shopify Order Cancellation Automation",
      description: "When a Shopify order is cancelled, n8n finds the existing order record and updates its status instead of creating a new row.",
      tools: ["Shopify", "n8n", "Google Sheets", "Slack"],
      href: "#case-cancellation",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Projects"
          title="Completed Projects"
          description="Practice projects demonstrating automation capabilities — each built with real n8n workflows."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
