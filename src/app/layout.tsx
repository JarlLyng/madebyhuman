import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { getBaseUrl } from "./config";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Get configuration values for metadata (server-side)
const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Made by Human",
  description: "Created with heart, intent, and sometimes AI — but always by a human. A positive movement celebrating human creativity and the meaningful choices we make in our creative work.",
  keywords: ["human creativity", "AI collaboration", "badges", "open source", "creative work", "human in the loop", "crafted by human", "made by human"],
  authors: [{ name: "IAMJARL", url: "https://iamjarl.com" }],
  creator: "IAMJARL",
  publisher: "Made by Human",
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
  alternates: {
    canonical: `${baseUrl}/`,
  },
  icons: {
    icon: [
      { url: `/favicon.ico`, sizes: 'any' },
      { url: `/icon.svg`, type: 'image/svg+xml' },
      { url: `/android-chrome-192x192.png`, sizes: '192x192', type: 'image/png' },
      { url: `/android-chrome-512x512.png`, sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: `/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Made by Human",
    description: "Created with heart, intent, and sometimes AI — but always by a human. A positive movement celebrating human creativity and the meaningful choices we make in our creative work.",
    type: "website",
    url: `${baseUrl}/`,
    siteName: "Made by Human",
    locale: "en_US",
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Made by Human - A positive movement celebrating human creativity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Made by Human",
    description: "Created with heart, intent, and sometimes AI — but always by a human. A positive movement celebrating human creativity and the meaningful choices we make in our creative work.",
    images: [`/og-image.png`],
    creator: "@iamjarl",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'Made by Human',
      description: 'Free transparency badges for human-AI collaborative projects. A positive movement celebrating human creativity.',
      publisher: { '@id': `${baseUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Made by Human',
      url: `${baseUrl}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
      founder: {
        '@type': 'Person',
        name: 'Jarl Lyng',
        url: 'https://iamjarl.com',
      },
      sameAs: [
        'https://github.com/JarlLyng/madebyhuman',
        'https://iamjarl.com',
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Available Badges',
      description: 'Free transparency badges for marking human involvement and AI collaboration',
      numberOfItems: 4,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Made by Human',
          description: 'A general badge celebrating human creativity in all forms',
          url: `${baseUrl}/badges#made-by-human`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Co-created with AI',
          description: 'For projects created in collaboration with AI tools',
          url: `${baseUrl}/badges#co-created-with-ai`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Crafted by Human',
          description: 'For projects created entirely by human hands',
          url: `${baseUrl}/badges#crafted-by-human`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Human in the Loop',
          description: 'For projects where humans guide and curate the creative process',
          url: `${baseUrl}/badges#human-in-the-loop`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Made by Human?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Made by Human is a free badge collection for developers and designers to transparently mark their work. Choose from 'Made by Human', 'Co-created with AI', 'Human in the Loop', or 'Crafted by Human' to indicate your creation process.",
          },
        },
        {
          '@type': 'Question',
          name: 'Is Made by Human anti-AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Made by Human celebrates human creativity regardless of whether AI was used. The badges signal transparency about your creative process — not a rejection of AI tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I add a badge to my GitHub README?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the badge markdown or HTML from madebyhuman.iamjarl.com/badges, paste into your README file, and commit. The badge displays directly in your repository, signaling transparency about your creative process.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which badge should I choose?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "'Made by Human' is a general badge for human creativity. 'Co-created with AI' shows human-AI collaboration. 'Crafted by Human' is for work made entirely by hand. 'Human in the Loop' indicates AI-assisted work with human oversight and editorial control.",
          },
        },
        {
          '@type': 'Question',
          name: 'Are the badges free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all badges are completely free under the MIT License. Download SVG files, copy markdown embeds, or link directly to hosted badges. No attribution required, but backlinks are appreciated.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I customize the badges?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Fork the GitHub repository and modify the SVG files to match your needs. The project is open source under the MIT License.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Script
          src="https://umami-iamjarl.vercel.app/script.js"
          data-website-id="a8ee647d-8843-48d5-8cbc-33224e12ad61"
          strategy="afterInteractive"
        />
        <Nav />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
