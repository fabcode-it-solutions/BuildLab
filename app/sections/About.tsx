import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="Building Practical Business Automations"
          description="I develop my freelance automation practice with a focus on Shopify and D2C operations. My work centers on turning repetitive manual processes into reliable, automated workflows."
        />
        <div className="mt-10 max-w-2xl">
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            I work with n8n to build automations that connect Shopify, APIs, Google Sheets, Slack, Notion, Gmail and webhooks — reducing repetitive operational work for D2C businesses.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "n8n workflow automation",
              "Shopify APIs",
              "Shopify webhooks",
              "REST APIs",
              "GraphQL",
              "Google Sheets",
              "Slack notifications",
              "Notion",
              "Gmail",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
