'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

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

  // Smooth spring animation for mouse position
  const mouseX = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });

  // Mouse tracking for interactive pattern
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const getBadgeUrl = (badge: Badge, variant: 'white' | 'black') => {
    // Get basePath from window.location or use default
    let basePath = '';
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      // Check if we're on GitHub Pages (pathname starts with /madebyhuman)
      if (pathname.startsWith('/madebyhuman')) {
        basePath = '/madebyhuman';
      }
    } else {
      // Server-side or build time: use environment variable or default
      basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    }
    return `${basePath}/badges/${badge.filename}-${variant}.svg`;
  };

  const copyEmbedCode = (badge: Badge, variant: 'white' | 'black', type: 'markdown' | 'html' | 'img') => {
    const url = getBadgeUrl(badge, variant);
    const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;
    
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
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48 min-h-[70vh] flex items-center justify-center">
        {/* Animated Grid Pattern Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg 
            className="absolute inset-0 w-full h-full" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-900 dark:text-zinc-100"/>
              </pattern>
              {/* Filter that brightens grid lines */}
              <filter id="brighten">
                <feComponentTransfer>
                  <feFuncA type="linear" slope="2" intercept="0"/>
                </feComponentTransfer>
              </filter>
              {/* Radial gradient mask for mouse interaction */}
              <radialGradient id="mouseGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="30%" stopColor="white" stopOpacity="0.8" />
                <stop offset="60%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              {/* Blur filter for smoother edges */}
              <filter id="blurMask" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
              </filter>
              <mask id="mouseMask">
                <motion.rect
                  width="700"
                  height="700"
                  fill="url(#mouseGradient)"
                  filter="url(#blurMask)"
                  style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                />
              </mask>
            </defs>
            {/* Base grid - always visible but subtle */}
            <rect 
              width="100%" 
              height="100%" 
              fill="url(#grid)" 
              className="text-zinc-900 dark:text-zinc-100"
              opacity="0.03"
            />
            {/* Enhanced grid that gets brighter near mouse */}
            <rect 
              width="100%" 
              height="100%" 
              fill="url(#grid)" 
              className="text-zinc-900 dark:text-zinc-100"
              opacity="0.15"
              mask="url(#mouseMask)"
            />
          </svg>
          
          {/* Subtle gradient blob that follows mouse */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-10 dark:opacity-5 pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'radial-gradient(circle, rgba(113,113,122,0.3) 0%, transparent 70%)',
              x: mouseX,
              y: mouseY,
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 leading-tight"
          >
            Made by Human
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl sm:text-2xl lg:text-3xl text-zinc-600 dark:text-zinc-400 mb-6 max-w-3xl mx-auto font-light"
          >
            A counterpart to "Not by AI" — celebrating human creativity in an era where AI plays an increasing role.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-500 max-w-2xl mx-auto"
          >
            The project is not about rejecting technology, but about emphasizing that everything created with AI is still a human choice.
          </motion.p>
        </div>
      </section>

      {/* Manifest Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold lg:text-right"
            >
              Our Philosophy
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 pt-2"
            >
              <p>
                The purpose of <strong>Made by Human</strong> is to create a positive movement around the use of AI in creative work.
              </p>
              <p>
                We believe that value arises when humans <strong>choose</strong>, <strong>shape</strong>, and <strong>curate</strong> their tools — even when those tools include AI.
              </p>
              <p>
                As a symbol of this philosophy, a series of badges is being developed for use on websites, products, music, apps, and art projects. Each badge represents a nuance in the interplay between human and machine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Badge Gallery Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            Select your badge
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.filename}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer"
                onClick={() => {
                  setSelectedBadge(badge);
                  setSelectedVariant('white');
                }}
              >
                <div className="aspect-[3/1] bg-zinc-100 dark:bg-zinc-900 rounded mb-4 flex items-center justify-center p-4">
                  <img
                    src={getBadgeUrl(badge, 'white')}
                    alt={badge.name}
                    width={360}
                    height={120}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{badge.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{badge.description}</p>
              </motion.div>
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
                  <img
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold lg:text-right"
            >
              How to Use
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 pt-2"
            >
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
                <code>{'![Co-created with AI](https://jarllyng.github.io/madebyhuman/badges/co-created-white.svg)'}</code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Embed in Website</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Use the "Copy HTML Code" button to get the HTML img tag. Paste it into your HTML file.
              </p>
              <div className="bg-zinc-900 dark:bg-zinc-800 rounded-lg p-4 text-sm font-mono text-zinc-100">
                <code>{'<img src="https://jarllyng.github.io/madebyhuman/badges/co-created-white.svg" alt="Co-created with AI" width="360" height="120">'}</code>
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
          </motion.div>
          </div>
        </div>
      </section>

      {/* Contributing Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold lg:text-right"
            >
              Contributing
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 pt-2"
            >
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
          </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <img
              src={getBadgeUrl(badges[0], 'white')}
              alt="Co-created with AI"
              width={360}
              height={120}
              className="h-16 w-auto dark:hidden"
            />
            <img
              src={getBadgeUrl(badges[0], 'black')}
              alt="Co-created with AI"
              width={360}
              height={120}
              className="h-16 w-auto hidden dark:block"
            />
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
            <p>
              This project is open source under the MIT License.
            </p>
            <p>
              Share, remix, and build upon it — but remember to credit the humans behind it.
            </p>
            <p className="mt-4">
              Made by{' '}
              <a
                href="https://iamjarl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
              >
                IAMJARL
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
