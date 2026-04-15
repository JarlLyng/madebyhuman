import type { Metadata } from 'next';
import { getBaseUrl } from '../config';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Free Transparency Badges for GitHub & Websites - Made by Human',
  description:
    'Download free SVG badges to mark human creativity and AI collaboration in your projects. Made by Human, Co-created with AI, Crafted by Human, and Human in the Loop — for GitHub READMEs, websites, and portfolios.',
  alternates: {
    canonical: `${baseUrl}/badges`,
  },
  openGraph: {
    title: 'Free Transparency Badges - Made by Human',
    description:
      'Download free SVG badges to mark human creativity and AI collaboration. For GitHub READMEs, websites, and portfolios.',
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
