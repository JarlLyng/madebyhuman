import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://madebyhuman.iamjarl.com';
const today = new Date().toISOString().split('T')[0];

// Add new pages here as the site grows
const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/badges', changefreq: 'weekly', priority: '0.9' },
  { path: '/guide', changefreq: 'monthly', priority: '0.9' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf-8');
console.log(`Sitemap generated: ${outputPath} (lastmod: ${today})`);
