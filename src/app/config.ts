/**
 * Centralized configuration for site origin
 * This ensures consistency across all URL generation (downloads, embeds, metadata)
 * 
 * With custom domain (madebyhuman.iamjarl.com), we no longer need basePath
 */

// Get site origin (domain + protocol) - server-side safe
export function getSiteOrigin(): string {
  return process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://madebyhuman.iamjarl.com';
}

// Get site origin (client-side)
export function getSiteOriginClient(): string {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return getSiteOrigin();
}

// Get full base URL (origin) - server-side safe
export function getBaseUrl(): string {
  return getSiteOrigin();
}

// Get full base URL (client-side)
export function getBaseUrlClient(): string {
  return getSiteOriginClient();
}

// Generate badge URL (for downloads and embeds) - client-side
export function getBadgeUrl(filename: string, variant: 'white' | 'black'): string {
  return `/badges/${filename}-${variant}.svg`;
}

// Generate full badge URL with origin (for embed codes that need absolute URLs) - client-side
export function getFullBadgeUrl(filename: string, variant: 'white' | 'black'): string {
  const baseUrl = getBaseUrlClient();
  return `${baseUrl}/badges/${filename}-${variant}.svg`;
}

/**
 * Generate embed code for a badge.
 * Wraps the image in a link back to madebyhuman.iamjarl.com for organic backlinks.
 * Every README or site that uses this code becomes a backlink — the strongest SEO growth lever.
 */
export type EmbedType = 'markdown' | 'html' | 'url';

export function getEmbedCode(
  badgeName: string,
  filename: string,
  variant: 'white' | 'black',
  type: EmbedType,
): string {
  const fullUrl = getFullBadgeUrl(filename, variant);
  const siteUrl = getBaseUrlClient();

  switch (type) {
    case 'markdown':
      return `[![${badgeName}](${fullUrl})](${siteUrl})`;
    case 'html':
      return `<a href="${siteUrl}"><img src="${fullUrl}" alt="${badgeName}" width="360" height="120"></a>`;
    case 'url':
      return fullUrl;
  }
}

