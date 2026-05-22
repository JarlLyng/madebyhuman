import Link from 'next/link';
import type { Metadata } from 'next';
import { listPosts } from '@/lib/posts';
import { getBaseUrl } from '../config';

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Blog — Made by Human',
  description:
    'Essays and updates on human creativity, AI collaboration, and the Made by Human movement.',
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: 'Blog — Made by Human',
    description:
      'Essays and updates on human creativity, AI collaboration, and the Made by Human movement.',
    type: 'website',
    url: `${baseUrl}/blog`,
    siteName: 'Made by Human',
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
      name: 'Blog',
      item: `${baseUrl}/blog`,
    },
  ],
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const posts = listPosts();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Blog
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light mb-16">
            Essays and updates on human creativity in an AI-saturated world.
          </p>

          {posts.length === 0 ? (
            <p className="text-zinc-500 dark:text-zinc-400">
              No posts yet. Check back soon.
            </p>
          ) : (
            <ul className="space-y-12">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article>
                    <time
                      dateTime={post.date}
                      className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
                    >
                      {formatDate(post.date)}
                    </time>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300">
                      {post.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
