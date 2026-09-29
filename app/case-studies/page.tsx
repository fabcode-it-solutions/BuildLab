import SectionHeader from "@/components/SectionHeader";
import CaseStudy from "@/components/CaseStudy";

interface CaseStudyPageProps {
  title: string;
  subtitle: string;
  sections: Array<{
    label: string;
    content: string | string[];
  }>;
}

function CaseStudyBlock({ title, subtitle, sections }: CaseStudyPageProps) {
  return (
    <div className="py-12 border-b border-navy-700/30 last:border-0">
      <SectionHeader title={title} description={subtitle} />
      <div className="mt-6">
        <CaseStudy sections={sections} />
      </div>
    </div>
  );
}

const caseStudies: CaseStudyPageProps[] = [
  {
    title: "Daily Digest Automation",
    subtitle: "A scheduled automation that retrieves weather information and sends a daily email digest.",
    sections: [
      { label: "Workflow", content: "Schedule Trigger → Open-Meteo API → n8n → Gmail" },
      { label: "Tools", content: ["n8n", "HTTP API", "Gmail"] },
      { label: "Logic", content: "On a schedule, fetch weather data from Open-Meteo API and format it into a digest email." },
      { label: "Edge Cases", content: ["API timeout handling", "Missing weather data fallback", "Email delivery failure retry"] },
      { label: "Testing", content: "Tested workflow execution with mock API responses." },
      { label: "Result", content: "Demonstrated scheduled automation with external API and email delivery." },
    ],
  },
  {
    title: "Form Submission Alert",
    subtitle: "Receives form submissions, applies conditional logic based on amount, stores qualifying submissions in Google Sheets and sends a Slack notification.",
    sections: [
      { label: "Workflow", content: "Webhook → IF amount > ₹500 → Google Sheets → Slack" },
      { label: "Tools", content: ["n8n", "Webhook", "IF logic", "Google Sheets", "Slack"] },
      { label: "Logic", content: "Form webhook triggers workflow. IF node checks if amount exceeds threshold. Qualifying submissions are logged; others are skipped." },
      { label: "Edge Cases", content: ["Amount field missing", "Zero or negative values", "Duplicate submissions"] },
      { label: "Testing", content: "Tested with various form submission amounts to verify conditional routing." },
      { label: "Result", content: "Demonstrated webhook intake, conditional logic and multi-tool integration." },
    ],
  },
  {
    title: "RSS → Notion Logger",
    subtitle: "Reads RSS news items and automatically creates records in a Notion database.",
    sections: [
      { label: "Workflow", content: "BBC RSS Feed → n8n → Notion Database" },
      { label: "Tools", content: ["n8n", "RSS", "Notion"] },
      { label: "Logic", content: "RSS trigger fetches new items. Each item creates a record in a Notion database with title, URL and summary." },
      { label: "Edge Cases", content: ["Duplicate RSS items", "RSS feed format changes", "Notion API rate limits"] },
      { label: "Testing", content: "Tested with BBC RSS feed to verify Notion record creation." },
      { label: "Result", content: "Demonstrated RSS polling and Notion database integration." },
    ],
  },
  {
    title: "Shopify API & Webhook Integration",
    subtitle: "Practice integration with a Shopify development store using Shopify Admin API, client credentials authentication, API scopes, GraphQL and webhook registration.",
    sections: [
      { label: "Workflow", content: "n8n → Shopify Admin API (OAuth / Client Credentials) → GraphQL / REST" },
      { label: "Tools", content: ["Shopify", "n8n", "REST API", "GraphQL"] },
      { label: "Logic", content: "Demonstrated: Access token generation, API requests, reading products, checking API scopes, GraphQL queries, webhook registration, and order updates." },
      { label: "Edge Cases", content: ["Token expiration", "Invalid API scopes", "Rate-limited API requests"] },
      { label: "Testing", content: "Tested with Shopify development store." },
      { label: "Result", content: "Full Shopify Admin API integration demonstrated with authentication and multiple API patterns." },
    ],
  },
  {
    title: "Shopify New Order Automation",
    subtitle: "Automatically receives Shopify new-order events, checks whether the Order ID already exists and prevents duplicate records.",
    sections: [
      { label: "Workflow", content: "Shopify → orders/create → n8n → Duplicate Check → Google Sheets → Slack" },
      { label: "Tools", content: ["Shopify", "n8n", "Google Sheets", "Slack"] },
      { label: "Logic", content: "Shopify ORDERS_CREATE webhook triggers the workflow. n8n checks if Order ID exists in Google Sheets. If duplicate, sends Slack alert. If new, appends row and notifies." },
      { label: "Edge Cases", content: ["Duplicate orders", "Missing order data", "Webhook retry on failure"] },
      { label: "Testing", content: "Tested successfully with Shopify development-store orders." },
      { label: "Result", content: "Demonstrated webhooks, duplicate detection, idempotency, Google Sheets and Slack integration." },
    ],
  },
  {
    title: "Shopify Order Cancellation Automation",
    subtitle: "When a Shopify order is cancelled, n8n finds the existing order record and updates its status instead of creating a new row.",
    sections: [
      { label: "Workflow", content: "Shopify → orders/cancelled → n8n → Find Order ID → Update Google Sheets (Payment Status = cancelled) → Slack" },
      { label: "Tools", content: ["Shopify", "n8n", "Google Sheets", "Slack"] },
      { label: "Logic", content: "ORDERS_CANCELLED webhook triggers lookup of existing Order ID in Google Sheets. Found row is updated with cancelled status. Slack notification sent." },
      { label: "Edge Cases", content: ["Order ID not found in sheets", "Already cancelled status", "Concurrent cancellations"] },
      { label: "Testing", content: "Tested with Shopify development-store cancelled orders." },
      { label: "Result", content: "Demonstrated event-driven automation, existing-row lookup and conditional update patterns." },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pt-16">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeader
          label="Case Studies"
          title="Project Details"
          description="Each project broken down into problem, workflow, tools, logic, edge cases, testing, and result."
          centered
        />
        <div className="mt-8">
          {caseStudies.map((study) => (
            <CaseStudyBlock key={study.title} {...study} />
          ))}
        </div>
      </div>
    </main>
  );
}
