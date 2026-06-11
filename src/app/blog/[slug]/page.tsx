import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost, getRelatedPosts, listPostSlugs } from '@/lib/posts';
import { getBaseUrl } from '../../config';

const baseUrl = getBaseUrl();

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return listPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    const url = `${baseUrl}/blog/${post.slug}`;
    return {
      title: `${post.title} — Made by Human`,
      description: post.description,
      alternates: { canonical: url },
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        url,
        siteName: 'Made by Human',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined,
        tags: post.tags,
      },
    };
  } catch {
    return {};
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

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
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${baseUrl}/blog/${post.slug}`,
      },
    ],
  };

  const blogPostJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: post.author
      ? {
          '@type': 'Person',
          name: post.author,
          url: 'https://iamjarl.com',
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Made by Human',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
      />
      <article className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            ← Back to blog
          </Link>

          <header className="mt-8 mb-12">
            <time
              dateTime={post.date}
              className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
            >
              {formatDate(post.date)}
              {post.author ? ` · ${post.author}` : null}
            </time>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-3 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light">
              {post.description}
            </p>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-zinc prose-headings:font-bold prose-a:text-zinc-900 dark:prose-a:text-zinc-100 prose-a:underline prose-a:underline-offset-4">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      <RelatedPosts slug={post.slug} />
    </main>
  );
}

function RelatedPosts({ slug }: { slug: string }) {
  const related = getRelatedPosts(slug, 3);
  if (related.length === 0) return null;

  return (
    <aside
      aria-label="Related posts"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
              Keep reading
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Related posts
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            All posts →
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((post) => (
            <li key={post.slug}>
              <article className="h-full">
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <time
                    dateTime={post.date}
                    className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {post.description}
                  </p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
