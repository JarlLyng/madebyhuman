import type { Metadata } from 'next';
import { getBaseUrl } from '../config';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Made by Human Badges — Free SVG, Copy-Paste in 30s',
  description:
    'Four free SVG badges (light + dark) for GitHub READMEs and websites — Made by Human, Co-created with AI, Crafted by Human, Human in the Loop. MIT licensed.',
  alternates: {
    canonical: `${baseUrl}/badges`,
  },
  openGraph: {
    title: 'Made by Human Badges — Free, open-source SVG',
    description:
      'Free SVG badges that signal human creativity and intentional AI collaboration. Pick the badge that matches how you build.',
    url: `${baseUrl}/badges`,
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${baseUrl}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Badges',
      item: `${baseUrl}/badges`,
    },
  ],
};

export default function BadgesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
