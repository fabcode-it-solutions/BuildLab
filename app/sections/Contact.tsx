import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
        <SectionHeader
          label="Contact"
          title="Have a repetitive business process?"
          description="Let&apos;s discuss whether it can be automated."
          centered
        />
        <div className="mt-10">
          <a
            href="mailto:hello@n8n-automation.dev"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium bg-accent text-navy-900 rounded-lg hover:bg-accent-light transition-colors duration-200 focus-ring"
          >
            Start a Conversation
          </a>
          <p className="mt-4 text-sm text-slate-500">
            hello@n8n-automation.dev
          </p>
        </div>
      </div>
    </section>
  );
}
