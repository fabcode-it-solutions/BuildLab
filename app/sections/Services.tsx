"use client";

import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";

const services = [
  {
    title: "Shopify Automation",
    examples: [
      "New order workflows",
      "Order notifications",
      "Order status automation",
      "Shopify webhook integrations",
    ],
    detail: "Connect Shopify events to n8n workflows for automated order processing, notifications, and status updates.",
  },
  {
    title: "n8n Workflow Automation",
    examples: [
      "Webhook automation",
      "Scheduled workflows",
      "Conditional logic",
      "Multi-step workflows",
    ],
    detail: "Build multi-step n8n workflows with triggers, conditions, and actions tailored to your business needs.",
  },
  {
    title: "API & Webhook Integration",
    examples: [
      "REST APIs",
      "GraphQL",
      "Webhook receivers",
      "API authentication",
    ],
    detail: "Integrate external services via REST APIs, GraphQL queries, and webhook-based event handling.",
  },
  {
    title: "Business Notifications",
    examples: [
      "Slack alerts",
      "Gmail notifications",
      "Google Sheets logging",
    ],
    detail: "Set up notification systems that keep your team informed through Slack, email, and spreadsheet logging.",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Services"
          title="What I Can Build"
          description="Services based on my current learning and demonstrated capabilities — practical automations for business operations."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              isExpanded={expanded === service.title}
              onToggle={() =>
                setExpanded(expanded === service.title ? null : service.title)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
