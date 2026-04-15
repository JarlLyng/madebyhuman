import type { Metadata } from 'next';
import Link from 'next/link';
import { getBaseUrl } from '../config';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'About - Made by Human',
  description:
    'The story behind Made by Human — a positive movement celebrating human creativity, intention, and the meaningful choices we make when we create.',
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: 'About - Made by Human',
    description:
      'The story behind Made by Human — a positive movement celebrating human creativity, intention, and the meaningful choices we make when we create.',
    url: `${baseUrl}/about`,
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
      name: 'About',
      item: `${baseUrl}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            About Made by Human
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto">
            Why define something by what it&apos;s not?
            Why &ldquo;Not By AI&rdquo; and not &ldquo;Made by Human&rdquo;?
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <h2 className="text-3xl sm:text-4xl font-bold lg:text-right">
              The Origin
            </h2>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 pt-2">
              <p>
                It started with a simple observation. Initiatives like &ldquo;Not By AI&rdquo;
                label content as human-made — a kind of Fairtrade label for text and creativity.
                The intention is genuine: transparency about how something was made.
              </p>
              <p>
                But there&apos;s an unspoken message in defining things by what they&apos;re <em>not</em>.
                When we start labelling what&apos;s not made by AI, are we also saying that everything
                else is worth less? Or that human-made automatically means better?
              </p>
              <p>
                <strong>Made by Human</strong> is a friendly counterpoint. Not a protest.
                More a reminder that there&apos;s still a human behind it all — even when AI is part
                of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <h2 className="text-3xl sm:text-4xl font-bold lg:text-right">
              Intention Over Purity
            </h2>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 pt-2">
              <p>
                It&apos;s not about how something is made — it&apos;s about <em>why</em>.
              </p>
              <p>
                Music can feel more genuine when you know the story behind it. A small mistake,
                a pause, an imperfection can make it feel more human. The same goes for design,
                code, and communication. Authenticity doesn&apos;t live in the tool — it lives
                in the intention, and in the connection we create.
              </p>
              <p>
                Sometimes the process starts with an AI tool that sparks an idea. Other times,
                it&apos;s intuition, experience, and human sensibility that lead the way. Most
                often, it&apos;s the combination that works best.
              </p>
              <p>
                True value emerges when humans <strong>choose</strong>, <strong>shape</strong>,
                and <strong>curate</strong> their tools. Whether working entirely by hand or in
                collaboration with AI, the creative vision and decisions remain fundamentally human.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Badges */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <h2 className="text-3xl sm:text-4xl font-bold lg:text-right">
              The Badges
            </h2>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 pt-2">
              <p>
                Our badges represent different nuances in how humans and machines work together.
                They&apos;re free to use on websites, products, music, apps, and art projects — each
                one acknowledging a different relationship between human and tool.
              </p>
              <p>
                They&apos;re not labels of quality or gatekeeping. They&apos;re small, honest signals
                about the process behind the work.
              </p>
              <p className="pt-2">
                <Link
                  href="/badges"
                  className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
                >
                  Explore and download all badges
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <h2 className="text-3xl sm:text-4xl font-bold lg:text-right">
              Looking Forward
            </h2>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 pt-2">
              <p>
                Maybe the labels of the future shouldn&apos;t be about what&apos;s <em>not</em> made
                by AI. Maybe they should remind us <em>why</em> we create things in the first place.
              </p>
              <p>
                Made by Human is open source. Everyone is welcome to contribute — bring your badges,
                ideas, text, design, or code. Our goal is to celebrate the human in every creative
                process, whether that process includes AI or not.
              </p>
              <p className="pt-2">
                <a
                  href="https://github.com/JarlLyng/madebyhuman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
                >
                  Contribute on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
