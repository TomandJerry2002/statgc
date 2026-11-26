import { lazy, Suspense, type ComponentType, type ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { registerExternal } from './dc/runtime';
import { DeviceOrFullscreen } from './dc/AndroidChromeDevice';
import { OrbitCatch } from './dc/OrbitCatch';
import { RequireSession, PhoneToMobile } from './lib/auth';
import { SITE_ORIGIN, APP_ORIGIN, onApp, split } from './lib/hosts';

registerExternal('AndroidChromeDevice', DeviceOrFullscreen);
registerExternal('AndroidDevice', DeviceOrFullscreen);
registerExternal('orbit-catch', OrbitCatch);

// Screens converted 1:1 from the design files (src/screens). Each loads on demand.
const screen = (load: () => Promise<{ default: ComponentType<any> }>, props: Record<string, unknown> = {}) => {
  const C = lazy(load);
  return <div id="dc-root"><Suspense fallback={null}><C {...props} /></Suspense></div>;
};
const page = (load: () => Promise<{ default: ComponentType<any> }>) => {
  const C = lazy(load);
  return <Suspense fallback={null}><C /></Suspense>;
};

// Hard redirect to the other host, keeping the query string and hash.
function Away({ to }: { to: string | (() => string) }) {
  location.replace((typeof to === 'function' ? to() : to) + location.search + location.hash);
  return null;
}
const toApp = (path: string) => <Away to={APP_ORIGIN + path} />;

if (onApp) {
  const m = document.createElement('meta');
  m.name = 'robots'; m.content = 'noindex';
  document.head.appendChild(m);
}

// Live screens (real data, Google sign-in). Phones opening the dashboard land on /mobile.
const live = (el: ReactNode) => <RequireSession>{el}</RequireSession>;
const dashboard = (urlBase: string) =>
  live(<PhoneToMobile>{screen(() => import('./screens/FlowGCApp'), { live: true, urlBase })}</PhoneToMobile>);
const invoice = () => live(screen(() => import('./screens/InvoiceGenerator'), { live: true }));
const mobile = () => live(screen(() => import('./screens/FlowGCMobile'), { live: true }));

const brandLinks = [
  { path: '/d/:token', element: page(() => import('./pages/brand/TermsLink')) },
  { path: '/a/:token', element: page(() => import('./pages/brand/ApprovalLink')) },
];

// app.flowgc.co: / home, /deals, /deals/:id, /money, /brands, /settings, /login, /mobile, /new
const appRoutes = [
  { path: '/login', element: screen(() => import('./screens/FlowGCWebsiteLogin')) },
  { path: '/new/*', element: screen(() => import('./screens/FlowGCAppEmpty'), { urlBase: '/new' }) },
  { path: '/invoice', element: invoice() },
  { path: '/mobile', element: mobile() },
  ...brandLinks,
  { path: '/app/*', element: <AppPathFix /> },
  { path: '/privacy', element: <Away to={SITE_ORIGIN + '/privacy'} /> },
  { path: '/terms', element: <Away to={SITE_ORIGIN + '/terms'} /> },
  { path: '/data', element: <Away to={SITE_ORIGIN + '/data'} /> },
  { path: '/*', element: dashboard('') },
];
// Old /app/... links on the app host drop the prefix.
function AppPathFix() {
  history.replaceState(null, '', location.pathname.replace(/^\/app/, '') || '/');
  location.reload();
  return null;
}

// flowgc.co: website and legal pages. On split domains, app paths hand off to the app host.
const siteRoutes = [
  { path: '/', element: screen(() => import('./screens/FlowGCWebsite')) },
  { path: '/privacy', element: screen(() => import('./screens/FlowGCPrivacy')) },
  { path: '/terms', element: screen(() => import('./screens/FlowGCTerms')) },
  { path: '/data', element: screen(() => import('./screens/FlowGCDataCollection')) },
  { path: '/close-up', element: screen(() => import('./screens/FlowGCCloseUp')) },
  ...(split ? [
    { path: '/login', element: toApp('/login') },
    { path: '/app/*', element: <Away to={() => APP_ORIGIN + (location.pathname.replace(/^\/app/, '') || '/')} /> },
    { path: '/invoice', element: toApp('/invoice') },
    { path: '/mobile', element: toApp('/mobile') },
    { path: '/d/:token', element: <Away to={() => APP_ORIGIN + location.pathname} /> },
    { path: '/a/:token', element: <Away to={() => APP_ORIGIN + location.pathname} /> },
  ] : [
    { path: '/login', element: screen(() => import('./screens/FlowGCWebsiteLogin')) },
    { path: '/app/new/*', element: screen(() => import('./screens/FlowGCAppEmpty'), { urlBase: '/app/new' }) },
    { path: '/app/*', element: dashboard('/app') },
    { path: '/invoice', element: invoice() },
    { path: '/mobile', element: mobile() },
    ...brandLinks,
  ]),
  // Mobile previews (demo data)
  { path: '/mobile/flow', element: screen(() => import('./screens/FlowGCMobileFlow')) },
  { path: '/mobile/redesign', element: screen(() => import('./screens/MobileRedesign')) },
  { path: '/lab', element: page(() => import('./pages/Lab')) },
  { path: '*', element: page(() => import('./pages/NotFound')) },
];

export const router = createBrowserRouter(onApp ? appRoutes : siteRoutes);
