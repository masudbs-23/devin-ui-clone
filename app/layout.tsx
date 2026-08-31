import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { OrganizationStructuredData, WebSiteStructuredData, SoftwareApplicationStructuredData } from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Puku - One Environment for AI Workflows, Development, Design",
    template: "%s | Puku"
  },
  description: "Puku is the all-in-one environment for AI workflows, software development, and design. Streamline your entire development process with powerful AI tools and seamless collaboration.",
  keywords: ["AI workflows", "software development", "design tools", "AI development", "coding assistant", "development environment", "AI-powered IDE"],
  authors: [{ name: "Puku Team" }],
  creator: "Puku",
  publisher: "Puku",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://puku.dev'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://puku.dev',
    title: "Puku - One Environment for AI Workflows, Development, Design",
    description: "Puku is the all-in-one environment for AI workflows, software development, and design. Streamline your entire development process with powerful AI tools.",
    siteName: "Puku",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Puku - AI Development Environment"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Puku - One Environment for AI Workflows, Development, Design",
    description: "Puku is the all-in-one environment for AI workflows, software development, and design.",
    images: ["/og-image.png"],
    creator: "@puku"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <OrganizationStructuredData />
        <WebSiteStructuredData />
        <SoftwareApplicationStructuredData />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
