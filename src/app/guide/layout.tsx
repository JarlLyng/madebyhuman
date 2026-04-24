import type { Metadata } from 'next';
import { getBaseUrl } from '../config';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'How to Add Badges to GitHub README and Websites - Made by Human',
  description:
    'Step-by-step guide for adding Made by Human badges to your GitHub README, website, or project. Copy-paste markdown and HTML embed codes, choose the right badge, and signal human creativity in your work.',
  alternates: {
    canonical: `${baseUrl}/guide`,
  },
  openGraph: {
    title: 'How to Add Badges to Your Projects - Made by Human',
    description:
      'Step-by-step guide for adding Made by Human badges to GitHub READMEs, websites, and projects.',
    url: `${baseUrl}/guide`,
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
      name: 'Guide',
      item: `${baseUrl}/guide`,
    },
  ],
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Add a Made by Human Badge to Your Project',
  description:
    'Add a free transparency badge to your GitHub README, website, or portfolio in a few minutes.',
  totalTime: 'PT5M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Choose your badge',
      text: 'Pick the badge that best describes your creative process: Made by Human, Co-created with AI, Crafted by Human, or Human in the Loop.',
      url: `${baseUrl}/guide#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Copy the embed code',
      text: 'Visit the badges page and copy the Markdown or HTML embed code for your chosen badge.',
      url: `${baseUrl}/guide#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Paste into your project',
      text: 'Add the embed code to your GitHub README, website, or portfolio. The badge links back to madebyhuman.iamjarl.com.',
      url: `${baseUrl}/guide#step-3`,
    },
  ],
};

export default function GuideLayout({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {children}
    </>
  );
}
