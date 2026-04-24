import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          Made by Human
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/about"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            About
          </Link>
          <Link
            href="/badges"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Badges
          </Link>
          <Link
            href="/guide"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Guide
          </Link>
          <a
            href="https://github.com/JarlLyng/madebyhuman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
