import type { Metadata } from 'next';

type OpenGraph = NonNullable<Metadata['openGraph']>;

export const socialCard = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  type: 'image/png',
  alt: 'The Made by Human badge, a heart beside the words Made By Human, on a pink background',
};

// Next.js replaces a parent's openGraph and twitter objects instead of merging them, so a page
// that sets its own title loses the layout's card and repeats the home page's twitter title.
// Every page builds both through here, so each one carries the card and the two always agree.
export function socialMetadata(
  openGraph: OpenGraph & { title: string; description: string },
): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      type: 'website',
      siteName: 'Made by Human',
      locale: 'en_US',
      ...openGraph,
      images: [socialCard],
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraph.title,
      description: openGraph.description,
      images: [{ url: socialCard.url, alt: socialCard.alt }],
      creator: '@iamjarl',
    },
  };
}
