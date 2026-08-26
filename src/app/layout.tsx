import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Worksmith — AI Engineering for the Way You Actually Work",
  description:
    "Worksmith brings the FDE model to small businesses. We embed with companies, understand their workflows, and build AI-powered systems that actually work. Not another chatbot. Not another SaaS subscription.",
  keywords: [
    "AI engineering",
    "workflow automation",
    "small business AI",
    "FDE",
    "AI consulting",
    "business automation",
    "AI agents",
    "workflow audit",
  ],
  authors: [{ name: "Worksmith" }],
  creator: "Worksmith",
  publisher: "Worksmith",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://worksmith.studio",
    siteName: "Worksmith",
    title: "Worksmith — AI Engineering for the Way You Actually Work",
    description:
      "We embed with businesses, understand how they operate, and build AI-powered systems around their workflows.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Worksmith",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Worksmith — AI Engineering for the Way You Actually Work",
    description:
      "We embed with businesses, understand how they operate, and build AI-powered systems around their workflows.",
  },
  metadataBase: new URL("https://worksmith.studio"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
