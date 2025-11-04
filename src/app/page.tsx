'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Badge {
  name: string;
  filename: string;
  description: string;
}

const badges: Badge[] = [
  {
    name: 'Co-created with AI',
    filename: 'co-created',
    description: 'For projects created in collaboration with AI tools',
  },
  {
    name: 'Crafted by Human',
    filename: 'crafted',
    description: 'For projects that are entirely human-made',
  },
  {
    name: 'Human in the Loop',
    filename: 'loop',
    description: 'For projects where humans guide and curate AI output',
  },
];

export default function Home() {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<'white' | 'black'>('white');
  const [copied, setCopied] = useState(false);

  const getBadgeUrl = (badge: Badge, variant: 'white' | 'black') => {
    return `/badges/${badge.filename}-${variant}.svg`;
  };

  const copyEmbedCode = (badge: Badge, variant: 'white' | 'black', type: 'markdown' | 'html' | 'img') => {
    const url = getBadgeUrl(badge, variant);
    let basePath = '';
    if (typeof window !== 'undefined') {
      // Detect if we're on GitHub Pages by checking if pathname starts with /madebyhuman
      const pathname = window.location.pathname;
      if (pathname.startsWith('/madebyhuman')) {
        basePath = '/madebyhuman';
      }
    }
    const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${basePath}${url}` : url;
    
    let code = '';
    if (type === 'markdown') {
      code = `![${badge.name}](${fullUrl})`;
    } else if (type === 'html') {
      code = `<img src="${fullUrl}" alt="${badge.name}" width="360" height="120">`;
    } else {
      code = fullUrl;
    }

    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadBadge = (badge: Badge, variant: 'white' | 'black') => {
    const url = getBadgeUrl(badge, variant);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${badge.filename}-${variant}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Made by Human
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            A counterpart to "Not by AI" — celebrating human creativity in an era where AI plays an increasing role.
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 max-w-xl mx-auto">
            The project is not about rejecting technology, but about emphasizing that everything created with AI is still a human choice.
          </p>
        </div>
      </section>

      {/* Manifest Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Our Philosophy</h2>
          <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300">
            <p>
              The purpose of <strong>Made by Human</strong> is to create a positive movement around the use of AI in creative work.
            </p>
            <p>
              We believe that value arises when humans <strong>choose</strong>, <strong>shape</strong>, and <strong>curate</strong> their tools — even when those tools include AI.
            </p>
            <p>
              As a symbol of this philosophy, a series of badges is being developed for use on websites, products, music, apps, and art projects. Each badge represents a nuance in the interplay between human and machine.
            </p>
          </div>
        </div>
      </section>

      {/* Badge Gallery Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Badge Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {badges.map((badge) => (
              <div
                key={badge.filename}
                className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer"
                onClick={() => {
                  setSelectedBadge(badge);
                  setSelectedVariant('white');
                }}
              >
                <div className="aspect-[3/1] bg-zinc-100 dark:bg-zinc-900 rounded mb-4 flex items-center justify-center p-4">
                  <Image
                    src={getBadgeUrl(badge, 'white')}
                    alt={badge.name}
                    width={360}
                    height={120}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{badge.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{badge.description}</p>
              </div>
            ))}
          </div>

          {/* Badge Detail Modal */}
          {selectedBadge && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedBadge(null)}>
              <div
                className="bg-white dark:bg-zinc-900 rounded-lg max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedBadge.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">{selectedBadge.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedBadge(null)}
                    className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Variant Selector */}
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setSelectedVariant('white')}
                    className={`px-4 py-2 rounded ${
                      selectedVariant === 'white'
                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                    }`}
                  >
                    White
                  </button>
                  <button
                    onClick={() => setSelectedVariant('black')}
                    className={`px-4 py-2 rounded ${
                      selectedVariant === 'black'
                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                    }`}
                  >
                    Black
                  </button>
                </div>

                {/* Badge Preview */}
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 mb-6 flex items-center justify-center">
                  <Image
                    src={getBadgeUrl(selectedBadge, selectedVariant)}
                    alt={selectedBadge.name}
                    width={360}
                    height={120}
                    className="w-full max-w-md h-auto"
                  />
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <button
                    onClick={() => downloadBadge(selectedBadge, selectedVariant)}
                    className="w-full px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium"
                  >
                    Download SVG
                  </button>

                  <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
                    <h4 className="font-semibold mb-3">Embed Code</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => copyEmbedCode(selectedBadge, selectedVariant, 'markdown')}
                        className="w-full text-left px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm"
                      >
                        {copied ? '✓ Copied!' : 'Copy Markdown Code'}
                      </button>
                      <button
                        onClick={() => copyEmbedCode(selectedBadge, selectedVariant, 'html')}
                        className="w-full text-left px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm"
                      >
                        {copied ? '✓ Copied!' : 'Copy HTML Code'}
                      </button>
                      <button
                        onClick={() => copyEmbedCode(selectedBadge, selectedVariant, 'img')}
                        className="w-full text-left px-4 py-2 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors text-sm"
                      >
                        {copied ? '✓ Copied!' : 'Copy Image URL'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How to Use Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">How to Use</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Download</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Click on any badge in the gallery to view it in detail. Then click "Download SVG" to save the badge to your computer.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Embed in GitHub README</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Use the "Copy Markdown Code" button to get the markdown syntax. Paste it directly into your README.md file.
              </p>
              <div className="bg-zinc-900 dark:bg-zinc-800 rounded-lg p-4 text-sm font-mono text-zinc-100">
                <code>{'![Co-created with AI](https://madebyhuman.com/badges/co-created-white.svg)'}</code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Embed in Website</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Use the "Copy HTML Code" button to get the HTML img tag. Paste it into your HTML file.
              </p>
              <div className="bg-zinc-900 dark:bg-zinc-800 rounded-lg p-4 text-sm font-mono text-zinc-100">
                <code>{'<img src="https://madebyhuman.com/badges/co-created-white.svg" alt="Co-created with AI" width="360" height="120">'}</code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">4. Choose the Right Badge</h3>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                <li><strong>Co-created with AI:</strong> For projects created in collaboration with AI tools</li>
                <li><strong>Crafted by Human:</strong> For projects that are entirely human-made</li>
                <li><strong>Human in the Loop:</strong> For projects where humans guide and curate AI output</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contributing Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Contributing</h2>
          <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300">
            <p>
              Everyone is welcome to contribute — with badges, ideas, text, design, or code.
            </p>
            <p>
              The goal is not to take a stance against AI, but to <strong>recenter the human</strong> in the creative process.
            </p>
            <p className="pt-4">
              <a
                href="https://github.com"
                className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400"
              >
                Visit our GitHub repository
              </a>{' '}
              to see how you can contribute.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            This project is open source under the MIT License.
          </p>
          <p className="mt-2">
            Share, remix, and build upon it — but remember to credit the humans behind it.
          </p>
        </div>
      </footer>
    </div>
  );
}
