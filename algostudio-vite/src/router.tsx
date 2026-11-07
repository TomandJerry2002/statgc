import { lazy, Suspense, type ComponentType } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { registerExternal } from './dc/runtime';
import { DeviceOrFullscreen } from './dc/AndroidChromeDevice';
import { OrbitCatch } from './dc/OrbitCatch';
import { RequireSession } from './lib/auth';

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

export const router = createBrowserRouter([
  // Main StatGC site
  { path: '/', element: screen(() => import('./screens/StatGCWebsite')) },
  { path: '/login', element: screen(() => import('./screens/StatGCWebsiteLogin')) },
  { path: '/app', element: <RequireSession>{screen(() => import('./screens/StatGCApp'), { live: true })}</RequireSession> },
  // Earlier AlgoStudio screens, kept for reference
  { path: '/legacy', element: screen(() => import('./screens/Website')) },
  { path: '/legacy/app', element: screen(() => import('./screens/DesktopApp')) },
  { path: '/m', element: screen(() => import('./screens/MobileWebApp'), { bare: true }) },
  { path: '/brand', element: screen(() => import('./screens/BrandView')) },
  // Working brand links on the localStorage API (Tailwind styled)
  { path: '/d/:token', element: page(() => import('./pages/brand/TermsLink')) },
  { path: '/a/:token', element: page(() => import('./pages/brand/ApprovalLink')) },
  { path: '/lab', element: page(() => import('./pages/Lab')) },
  { path: '*', element: page(() => import('./pages/NotFound')) },
]);
