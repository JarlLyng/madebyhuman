import type { Metadata } from 'next';
import { getBaseUrl } from '../config';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Badges - Made by Human',
  description:
    'Free badges for your projects — Made by Human, Co-created with AI, Crafted by Human, and Human in the Loop. Download SVGs or copy embed codes for your README, website, or portfolio.',
  alternates: {
    canonical: `${baseUrl}/badges`,
  },
  openGraph: {
    title: 'Badges - Made by Human',
    description:
      'Free badges for your projects — signal human creativity and transparency about AI collaboration.',
    url: `${baseUrl}/badges`,
  },
};

export default function BadgesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
