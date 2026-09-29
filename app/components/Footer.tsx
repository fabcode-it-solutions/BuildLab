import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-navy-700/50 bg-navy-850">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-white font-semibold mb-1">
              n8n<span className="text-accent">.</span> Automation Specialist
            </p>
            <p className="text-sm text-slate-500">Shopify & D2C Automation</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {[
                { label: "Projects", href: "#projects" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 focus-ring rounded py-1 px-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-navy-700/30">
          <p className="text-xs text-slate-600">Built with automation in mind.</p>
        </div>
      </div>
    </footer>
  );
}
