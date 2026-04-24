import Link from 'next/link';

export default function GuidePage() {
  const siteUrl = 'https://madebyhuman.iamjarl.com';

  const markdownExample = `[![Made by Human](${siteUrl}/badges/made-white.svg)](${siteUrl})`;
  const htmlExample = `<a href="${siteUrl}">
  <img src="${siteUrl}/badges/made-white.svg" alt="Made by Human" width="360" height="120">
</a>`;

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            How to Add a Badge
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-2xl mx-auto">
            A step-by-step guide to adding Made by Human badges to your GitHub
            README, website, or portfolio.
          </p>
        </div>
      </section>

      {/* Step 1 */}
      <section
        id="step-1"
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <div className="lg:text-right">
              <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
                Step 1
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">Choose your badge</h2>
            </div>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 pt-2">
              <p>
                There are four badges, each signalling a different relationship
                between human creativity and technology:
              </p>
              <ul className="space-y-3">
                <li>
                  <strong>Made by Human</strong> — A general badge for any
                  project where a human made the creative decisions.
                </li>
                <li>
                  <strong>Co-created with AI</strong> — For work where AI tools
                  helped generate, refine, or translate content.
                </li>
                <li>
                  <strong>Crafted by Human</strong> — For work made entirely by
                  hand, without AI involvement.
                </li>
                <li>
                  <strong>Human in the Loop</strong> — For AI-assisted workflows
                  with human oversight and editorial control.
                </li>
              </ul>
              <p>
                Each badge is available in white and black variants.{' '}
                <Link
                  href="/badges"
                  className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
                >
                  Browse the full gallery
                </Link>{' '}
                to preview all four.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section
        id="step-2"
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <div className="lg:text-right">
              <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
                Step 2
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">Copy the embed code</h2>
            </div>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 pt-2">
              <p>
                On the <Link
                  href="/badges"
                  className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
                >
                  badges page
                </Link>
                , click the badge you want. You&apos;ll see three copy buttons:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Copy Markdown</strong> — for GitHub READMEs and other
                  markdown files
                </li>
                <li>
                  <strong>Copy HTML</strong> — for websites and web apps
                </li>
                <li>
                  <strong>Copy Image URL</strong> — the raw SVG URL, useful for
                  custom setups
                </li>
              </ul>
              <p>
                All embed codes include a link back to{' '}
                <code className="text-sm bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                  madebyhuman.iamjarl.com
                </code>{' '}
                so visitors can learn about the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section
        id="step-3"
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <div className="lg:text-right">
              <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 mb-2">
                Step 3
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">Paste it in</h2>
            </div>
            <div className="space-y-8 text-lg text-zinc-700 dark:text-zinc-300 pt-2">
              {/* GitHub README */}
              <div>
                <h3 className="text-xl font-semibold mb-3">GitHub README</h3>
                <p className="mb-4">
                  Paste the Markdown code into your{' '}
                  <code className="text-sm bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded">
                    README.md
                  </code>{' '}
                  file. The badge renders directly in your repository.
                </p>
                <pre className="bg-zinc-900 dark:bg-zinc-800 rounded-lg p-4 text-sm font-mono text-zinc-100 overflow-x-auto">
                  <code>{markdownExample}</code>
                </pre>
              </div>

              {/* Website */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Website</h3>
                <p className="mb-4">
                  Paste the HTML code into your page template, component, or CMS
                  rich-text editor:
                </p>
                <pre className="bg-zinc-900 dark:bg-zinc-800 rounded-lg p-4 text-sm font-mono text-zinc-100 overflow-x-auto">
                  <code>{htmlExample}</code>
                </pre>
              </div>

              {/* Portfolio / other */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Portfolios, decks, and other projects</h3>
                <p>
                  For tools that don&apos;t support Markdown or HTML, download
                  the SVG file directly from the{' '}
                  <Link
                    href="/badges"
                    className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
                  >
                    badges page
                  </Link>{' '}
                  and use it like any other image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best practices */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <h2 className="text-3xl sm:text-4xl font-bold lg:text-right">
              Best practices
            </h2>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 pt-2">
              <div>
                <h3 className="text-xl font-semibold mb-2">Be honest about the process</h3>
                <p>
                  The badges exist to make transparency easier, not to decorate.
                  If AI helped, the <em>Co-created with AI</em> or <em>Human in the Loop</em>{' '}
                  badge says so clearly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">One badge is enough</h3>
                <p>
                  Pick the one that best describes your process. Using multiple
                  badges can dilute the message.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Match the variant to the background</h3>
                <p>
                  Use the white variant on dark backgrounds and the black
                  variant on light backgrounds for maximum legibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">No attribution required</h3>
                <p>
                  The badges are MIT licensed. You don&apos;t have to credit
                  anyone — though the embed codes include a link back to the
                  project, which helps others discover the badges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 items-start">
            <h2 className="text-3xl sm:text-4xl font-bold lg:text-right">
              Questions
            </h2>
            <div className="space-y-8 text-lg text-zinc-700 dark:text-zinc-300 pt-2">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Do I need to ask permission to use a badge?
                </h3>
                <p>
                  No. All badges are free under the MIT License. Use them on any
                  project, commercial or not.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What if my project uses AI in some parts but not others?
                </h3>
                <p>
                  Most projects are mixed. <em>Co-created with AI</em> or{' '}
                  <em>Human in the Loop</em> both acknowledge AI involvement
                  without overstating it. Pick the one that feels most honest.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Can I modify the badges?
                </h3>
                <p>
                  Yes. Fork the{' '}
                  <a
                    href="https://github.com/JarlLyng/madebyhuman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
                  >
                    GitHub repository
                  </a>{' '}
                  and modify the SVG files. The MIT License covers modifications.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Can I suggest a new badge?
                </h3>
                <p>
                  Absolutely. Open a{' '}
                  <a
                    href="https://github.com/JarlLyng/madebyhuman/issues/new?template=badge_idea.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
                  >
                    issue on GitHub
                  </a>{' '}
                  or start a{' '}
                  <a
                    href="https://github.com/JarlLyng/madebyhuman/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 dark:text-zinc-100 underline hover:text-zinc-600 dark:hover:text-zinc-400 font-medium"
                  >
                    discussion
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to add your badge?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            Browse the gallery and copy your embed code in a few clicks.
          </p>
          <Link
            href="/badges"
            className="inline-block px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium"
          >
            Go to Badge Gallery
          </Link>
        </div>
      </section>
    </main>
  );
}
