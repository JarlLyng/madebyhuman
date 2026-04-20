'use client';

import { useState } from 'react';
import Image from 'next/image';
import { badges } from '@/lib/badges';
import type { Badge } from '@/lib/badges';
import { getBadgeUrl, getEmbedCode, type EmbedType } from '../config';
import { trackEvent } from '@/lib/umami';

function badgeSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function BadgeSection({ badge }: { badge: Badge }) {
  const [variant, setVariant] = useState<'white' | 'black'>('white');
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = async (type: EmbedType) => {
    const code = getEmbedCode(badge.name, badge.filename, variant, type);
    try {
      await navigator.clipboard.writeText(code);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
      trackEvent('copy_embed', { badge: badge.filename, variant, type });
    } catch {
      // Silently fail
    }
  };

  const downloadBadge = () => {
    try {
      const url = getBadgeUrl(badge.filename, variant);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${badge.filename}-${variant}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      trackEvent('download_badge', { badge: badge.filename, variant });
    } catch {
      window.open(getBadgeUrl(badge.filename, variant), '_blank');
    }
  };

  return (
    <section id={badgeSlug(badge.name)} className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Badge Preview */}
          <div>
            <div
              className="rounded-lg p-8 flex items-center justify-center mb-4"
              style={{ backgroundColor: '#F59898' }}
            >
              <Image
                src={getBadgeUrl(badge.filename, variant)}
                alt={badge.name}
                width={360}
                height={120}
                className="w-full max-w-sm h-auto"
              />
            </div>
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setVariant('white')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  variant === 'white'
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                }`}
              >
                White
              </button>
              <button
                onClick={() => setVariant('black')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  variant === 'black'
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                }`}
              >
                Black
              </button>
            </div>
            <button
              onClick={downloadBadge}
              className="w-full px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium"
            >
              Download SVG
            </button>
          </div>

          {/* Badge Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{badge.name}</h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
              {badge.longDescription}
            </p>

            <h3 className="font-semibold text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-3">
              When to use
            </h3>
            <ul className="space-y-2 mb-8">
              {badge.useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                >
                  <span className="text-zinc-400 dark:text-zinc-600 mt-1 shrink-0">&mdash;</span>
                  {useCase}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-3">
              Embed code
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => copyCode('markdown')}
                className="w-full text-left px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm"
              >
                {copied === 'markdown' ? '✓ Copied!' : 'Copy Markdown'}
              </button>
              <button
                onClick={() => copyCode('html')}
                className="w-full text-left px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm"
              >
                {copied === 'html' ? '✓ Copied!' : 'Copy HTML'}
              </button>
              <button
                onClick={() => copyCode('url')}
                className="w-full text-left px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm"
              >
                {copied === 'url' ? '✓ Copied!' : 'Copy Image URL'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BadgesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Badge Gallery
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto">
            Free badges for your projects. Each one signals a different relationship between human creativity and technology.
          </p>
        </div>
      </section>

      {/* Badge Sections */}
      {badges.map((badge, index) => (
        <div
          key={badge.filename}
          className={index % 2 === 0 ? 'bg-zinc-50 dark:bg-zinc-900' : ''}
        >
          <BadgeSection badge={badge} />
        </div>
      ))}

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Have an idea for a new badge?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            Made by Human is open source. Contribute your own badge designs, ideas, or improvements.
          </p>
          <a
            href="https://github.com/JarlLyng/madebyhuman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium"
          >
            Contribute on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
