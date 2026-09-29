import "./globals.css";
import type { Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F19",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "n8n Automation Specialist | Shopify & D2C Automation",
    template: "%s | n8n Automation Specialist",
  },
  description:
    "I build practical business automations using n8n, Shopify, APIs, Google Sheets, Slack and webhooks for D2C businesses.",
  openGraph: {
    title: "n8n Automation Specialist | Shopify & D2C Automation",
    description:
      "I build practical business automations using n8n, Shopify, APIs, Google Sheets, Slack and webhooks for D2C businesses.",
    type: "website",
    locale: "en_US",
    siteName: "n8n Automation Specialist",
    url: "https://n8n-automation.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Automation Specialist | Shopify & D2C Automation",
    description:
      "I build practical business automations using n8n, Shopify, APIs, Google Sheets, Slack and webhooks for D2C businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
