/**
 * Centralized configuration for base path and site origin
 * This ensures consistency across all URL generation (downloads, embeds, metadata)
 */

// Get base path from environment (server-side safe)
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

// Get base path from environment or detect from window location (client-side)
export function getBasePathClient(): string {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    // Check if we're on GitHub Pages (pathname starts with /madebyhuman)
    if (pathname.startsWith('/madebyhuman')) {
      return '/madebyhuman';
    }
  }
  // Fallback to environment variable
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

// Get site origin (domain + protocol) - server-side safe
export function getSiteOrigin(): string {
  return process.env.NEXT_PUBLIC_SITE_ORIGIN || 'https://jarllyng.github.io';
}

// Get site origin (client-side)
export function getSiteOriginClient(): string {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return getSiteOrigin();
}

// Get full base URL (origin + base path) - server-side safe
export function getBaseUrl(): string {
  const origin = getSiteOrigin();
  const basePath = getBasePath();
  return `${origin}${basePath}`;
}

// Get full base URL (client-side)
export function getBaseUrlClient(): string {
  const origin = getSiteOriginClient();
  const basePath = getBasePathClient();
  return `${origin}${basePath}`;
}

// Generate badge URL (for downloads and embeds) - client-side
export function getBadgeUrl(filename: string, variant: 'white' | 'black'): string {
  const basePath = getBasePathClient();
  return `${basePath}/badges/${filename}-${variant}.svg`;
}

// Generate full badge URL with origin (for embed codes that need absolute URLs) - client-side
export function getFullBadgeUrl(filename: string, variant: 'white' | 'black'): string {
  const baseUrl = getBaseUrlClient();
  return `${baseUrl}/badges/${filename}-${variant}.svg`;
}

