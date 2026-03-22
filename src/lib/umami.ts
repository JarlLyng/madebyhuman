declare global {
  interface Window {
    umami?: {
      track: (eventName: string, data?: Record<string, unknown>) => void;
    };
  }
}

export function trackEvent(eventName: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  try {
    window.umami?.track(eventName, data);
  } catch {
    // Ignore tracking errors to avoid breaking UX
  }
}
