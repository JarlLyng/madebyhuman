import { writeFileSync, readFileSync, readdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://madebyhuman.iamjarl.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/badges', changefreq: 'weekly', priority: '0.9' },
  { path: '/guide', changefreq: 'monthly', priority: '0.9' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
];

const postsDir = resolve(__dirname, '../src/content/blog');
const posts = readdirSync(postsDir)
  .filter((file) => file.endsWith('.mdx'))
  .map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const { data } = matter(readFileSync(join(postsDir, file), 'utf8'));
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const blogPages = posts.map((post) => ({
  path: `/blog/${post.slug}`,
  lastmod: post.date,
  changefreq: 'yearly',
  priority: '0.7',
}));

const pages = [
  ...staticPages.map((p) => ({ ...p, lastmod: today })),
  ...blogPages,
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), sitemap, 'utf-8');

const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const rssItems = posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`,
  )
  .join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Made by Human — Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Essays and updates on human creativity in an AI-saturated world.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${rssItems}
  </channel>
</rss>
`;

writeFileSync(resolve(__dirname, '../public/rss.xml'), rss, 'utf-8');

console.log(
  `Generated sitemap (${pages.length} URLs) and rss.xml (${posts.length} posts)`,
);
