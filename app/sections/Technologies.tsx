import TechnologyCard from "@/components/TechnologyCard";
import SectionHeader from "@/components/SectionHeader";

const technologies = [
  { name: "n8n", description: "Workflow automation" },
  { name: "Shopify", description: "E-commerce platform" },
  { name: "Google Sheets", description: "Data logging" },
  { name: "Slack", description: "Team notifications" },
  { name: "Notion", description: "Knowledge base" },
  { name: "Gmail", description: "Email delivery" },
  { name: "REST APIs", description: "API integration" },
  { name: "GraphQL", description: "Query language" },
  { name: "Webhooks", description: "Event triggers" },
  { name: "Cloudflare Tunnel", description: "Secure tunneling" },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 lg:py-28 bg-navy-850/50">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Technologies"
          title="Tools I Work With"
          description="Technologies I currently use in my automation practice — each demonstrated in real projects."
          centered
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
