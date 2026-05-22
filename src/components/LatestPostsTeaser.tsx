import Link from 'next/link';
import { listPosts } from '@/lib/posts';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function LatestPostsTeaser() {
  const posts = listPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      aria-label="Latest from the blog"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
              From the blog
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Latest writing
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-900 dark:text-zinc-100 underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
          >
            View all posts →
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <time
                    dateTime={post.date}
                    className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
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
    </section>
  );
}
