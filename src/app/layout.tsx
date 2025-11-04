import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_PATH 
    ? `https://jarllyng.github.io${process.env.NEXT_PUBLIC_BASE_PATH}` 
    : 'https://jarllyng.github.io/madebyhuman'),
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
    canonical: "https://jarllyng.github.io/madebyhuman/",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Made by Human",
    description: "Created with heart, intent, and sometimes AI — but always by a human. A positive movement celebrating human creativity and the meaningful choices we make in our creative work.",
    type: "website",
    url: "https://jarllyng.github.io/madebyhuman/",
    siteName: "Made by Human",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
    creator: "@iamjarl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
