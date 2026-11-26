// Split domains. Set both in Vercel to serve the app on its own subdomain:
//   VITE_SITE_ORIGIN=https://flowgc.co        website, legal pages, close-up
//   VITE_APP_ORIGIN=https://app.flowgc.co     login, dashboard, brand links
// Without them (local dev, preview deploys) everything runs on one host, with the app under /app.
export const SITE_ORIGIN = (import.meta.env.VITE_SITE_ORIGIN || (import.meta.env.PROD ? 'https://flowgc.co' : '')).replace(/\/$/, '');
export const APP_ORIGIN = (import.meta.env.VITE_APP_ORIGIN || (import.meta.env.PROD ? 'https://app.flowgc.co' : '')).replace(/\/$/, '');

// Split only when actually served from one of the two real hosts (preview deploys stay single-host).
export const onApp = !!APP_ORIGIN && location.origin === APP_ORIGIN;
export const split = !!APP_ORIGIN && !!SITE_ORIGIN
  && (onApp || location.origin === SITE_ORIGIN || location.origin === SITE_ORIGIN.replace('://', '://www.'));

/** Path of the desktop dashboard on the app host: '/' on app.flowgc.co, '/app' on a single host. */
export const DASH = split ? '/' : '/app';

/** Full URL on the host that serves the app (the app subdomain when split, else this host). */
export const appUrl = (path: string) => (split ? APP_ORIGIN : location.origin) + path;
