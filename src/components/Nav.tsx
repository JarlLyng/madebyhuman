'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/badges', label: 'Badges' },
  { href: '/guide', label: 'Guide' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          aria-current={pathname === '/' ? 'page' : undefined}
          className="font-bold text-lg text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
        >
          Made by Human
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`transition-colors ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-100 underline underline-offset-4'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://github.com/JarlLyng/madebyhuman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
