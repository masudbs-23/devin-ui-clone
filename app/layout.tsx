import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "../lib/config";

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
    default: `${config.site.name} - One Environment for AI Workflows, Development, Design`,
    template: `%s | ${config.site.name}`
  },
  description: config.site.description,
  keywords: ["AI workflows", "software development", "design tools", "AI development", "coding assistant", "development environment", "AI-powered IDE"],
  authors: [{ name: `${config.site.name} Team` }],
  creator: config.site.name,
  publisher: config.site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(config.site.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.site.url,
    title: `${config.site.name} - One Environment for AI Workflows, Development, Design`,
    description: config.site.description,
    siteName: config.site.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${config.site.name} - AI Development Environment`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.site.name} - One Environment for AI Workflows, Development, Design`,
    description: config.site.description,
    images: ["/og-image.png"],
    creator: config.social.twitter
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
    { media: '(prefers-color-scheme: light)', color: '#F7F6F4' },
    { media: '(prefers-color-scheme: dark)', color: '#0E0E0E' },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
