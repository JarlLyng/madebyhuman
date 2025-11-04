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
  openGraph: {
    title: "Made by Human",
    description: "Created with heart, intent, and sometimes AI — but always by a human.",
    type: "website",
    url: "https://jarllyng.github.io/madebyhuman/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Made by Human",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Made by Human",
    description: "Created with heart, intent, and sometimes AI — but always by a human.",
    images: ["/og-image.png"],
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
