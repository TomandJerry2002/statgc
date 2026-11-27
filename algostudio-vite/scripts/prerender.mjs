// Build-time prerender for the public pages. Runs after `vite build`.
// Writes dist/<route>/index.html with real page text, meta tags and structured data,
// so search engines, AI crawlers and link previews (WhatsApp, X, LinkedIn) see content
// without running JavaScript. React replaces the snapshot when the app boots.
// Also writes robots.txt and sitemap.xml. Set SITE_URL to the production domain.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = (process.env.SITE_URL || 'https://www.flowgc.co').replace(/\/$/, '');
const DIST = fileURLToPath(new URL('../dist/', import.meta.url));  // fileURLToPath: also correct on Windows
const shell = readFileSync(join(DIST, 'index.html'), 'utf8');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const DESC = 'FlowGC turns your WhatsApp and DM brand chats into a clear deal page, so you know what was promised, what’s due, and when the money lands.';

const sections = [
  { id: 'what', h: 'Everything a brand deal needs, from the offer to the last payment' },
  { id: 'how', h: 'From the offer to the last payment, one deal at a time', items: [
    ['Add the brand', 'Name, phone, email and Instagram handle, saved once.'],
    ['Log the offer', 'Enter the dates as it moves. The status and next step update on their own.'],
    ['Split into payments', 'An advance and a final payment, each with its own amount and due date.'],
    ['Record what arrives', 'Part payments with method, UTR and a screenshot. See what is still owed.'],
  ] },
  { id: 'risks', h: 'A next step on every deal', p: 'Worked out from the dates you enter.' },
  { id: 'overview', h: 'Every brand, deal and payment, connected' },
  { id: 'proof', h: 'Every payment is recorded with proof', p: 'Record each payment as it arrives, including part payments, with the method, UTR number and a screenshot. FlowGC shows what is paid and still owed, and lets you mark a payment as disputed or written off, then undo it.' },
  { id: 'brands', h: 'A running tally for every brand you work with', p: 'Save each brand once with its phone, email and Instagram handle. FlowGC totals what each one has paid you, tracks how many payments arrived on time and shows which brand has paid you the most.' },
  { id: 'start', h: 'Start with the next brand deal you get', p: 'Add the brand and the offer. FlowGC tells you what to do next.' },
];

const T = 'font-family:Satoshi,ui-sans-serif,system-ui,sans-serif';
const homeBody = `
<div data-prerender style="${T};background:#07060F;color:#F3F4F8">
  <header style="padding:22px clamp(20px,3vw,40px);display:flex;justify-content:space-between;align-items:center;gap:16px">
    <a href="/" style="color:#FFFFFF;text-decoration:none;font-size:22px;font-weight:600">FlowGC</a>
    <nav style="display:flex;gap:20px"><a href="#what" style="color:#FFFFFF;text-decoration:none">What it does</a><a href="#how" style="color:#FFFFFF;text-decoration:none">How it works</a><a href="#brands" style="color:#FFFFFF;text-decoration:none">Brands</a><a href="/login" style="color:#FFFFFF;text-decoration:none">Log in</a></nav>
  </header>
  <main id="top">
    <section style="min-height:calc(100vh - 80px);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 24px">
      <h1 style="margin:0;max-width:900px;font-family:'Bricolage Grotesque',sans-serif;font-weight:500;font-size:clamp(44px,7vw,96px);line-height:1.04">Get every brand deal agreed, tracked, and paid.</h1>
      <p style="margin:22px 0 0;max-width:600px;font-size:18px;line-height:1.55;color:#A9ADBF">${esc(DESC)}</p>
      <p style="margin:32px 0 0;display:flex;gap:12px;flex-wrap:wrap;justify-content:center"><a href="/login" style="padding:14px 24px;border-radius:12px;background:#F3F4F8;color:#07060F;font-weight:700;text-decoration:none">Get started</a><a href="#how" style="padding:14px 22px;border-radius:12px;border:1px solid rgba(255,255,255,.18);color:#F3F4F8;text-decoration:none">How it works</a></p>
    </section>
    ${sections.map(s => `<section id="${s.id}" style="max-width:1120px;margin:0 auto;padding:72px 24px"><h2 style="margin:0;font-family:Jost,sans-serif;font-weight:500;font-size:36px">${esc(s.h)}</h2>${s.p ? `<p style="max-width:620px;color:#A9ADBF;line-height:1.5">${esc(s.p)}</p>` : ''}${s.items ? `<ol>${s.items.map(([t, b]) => `<li><h3>${esc(t)}</h3><p style="color:#A9ADBF">${esc(b)}</p></li>`).join('')}</ol>` : ''}</section>`).join('\n    ')}
  </main>
  <footer style="padding:28px 24px;color:#A9ADBF;font-size:13px">© 2026 FlowGC</footer>
</div>`;

const loginBody = `
<div data-prerender style="${T};min-height:100vh;display:flex;align-items:center;justify-content:center;background:#FFFFFF;color:#15122B">
  <main style="text-align:center;padding:24px"><h1 style="font-family:'Bricolage Grotesque',sans-serif;font-weight:500">Log in to FlowGC</h1><p><a href="/" style="color:#5A43B5">Back to FlowGC</a></p></main>
</div>`;

const privacyBody = `
<div data-prerender style="${T};max-width:720px;margin:0 auto;padding:72px 24px;color:#2E2E33">
  <p><a href="/" style="color:#5A43B5">FlowGC</a></p>
  <h1 style="font-family:Jost,sans-serif;font-weight:500">Privacy Policy</h1>
  <p>FlowGC helps creators track brand deals and the payments that come with them. This policy explains what we collect, why, who we share it with and the choices you have.</p>
  <p>Contact: <a href="mailto:privacyflowgc@gmail.com">privacyflowgc@gmail.com</a></p>
</div>`;

const legal = (h, intro) => `
<div data-prerender style="${T};max-width:720px;margin:0 auto;padding:72px 24px;color:#2E2E33">
  <p><a href="/" style="color:#5A43B5">FlowGC</a></p>
  <h1 style="font-family:Jost,sans-serif;font-weight:500">${h}</h1>
  <p>${intro}</p>
  <p><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/data">Data collection</a></p>
</div>`;

const routes = [
  { path: '/', title: 'FlowGC · Brand deals and payments for creators', desc: DESC, body: homeBody, priority: '1.0',
    ld: [{ '@context': 'https://schema.org', '@graph': [
      // ── Organization: who makes FlowGC ──
      { '@type': 'Organization', '@id': SITE + '/#organization', name: 'FlowGC', url: SITE + '/', logo: SITE + '/assets/logo-as.png' },
      // ── WebSite: the public site ──
      { '@type': 'WebSite', '@id': SITE + '/#website', name: 'FlowGC', url: SITE + '/', inLanguage: 'en-IN', publisher: { '@id': SITE + '/#organization' } },
      // ── SoftwareApplication: the platform, and who it is for ──
      { '@type': 'SoftwareApplication', '@id': SITE + '/#app', name: 'FlowGC', url: SITE + '/', description: DESC,
        applicationCategory: 'BusinessApplication', applicationSubCategory: 'Brand deal and payment tracking', operatingSystem: 'Web',
        provider: { '@id': SITE + '/#organization' }, publisher: { '@id': SITE + '/#organization' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },  // "Get started free" on the homepage
        // Each line matches something the homepage says
        featureList: [
          'Brand deal tracking from the offer to the last payment',
          'Turn WhatsApp and DM brand chats into a deal page',
          'Payment milestones: an advance and a final payment, each with its own amount and due date',
          'UTR number and screenshot proof logged with every payment, including part payments',
          'Tax set-aside calculation on every payment (20% by default)',
          'Payment reminders for overdue payments',
          'Running tally of what each brand has paid',
          'Invoice generator for brand deals',
        ],
        // ── Invoice: the app creates invoices for brand deals (no sample invoice: real ones are private) ──
        potentialAction: { '@type': 'CreateAction', name: 'Create an invoice for a brand deal',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://app.flowgc.co/invoice' },
          result: { '@type': 'Invoice', name: 'Brand deal invoice', description: 'An invoice a creator sends to a brand for a deal, with the deliverables, amount, due date and bank or UPI details.' } },
        audience: [
          { '@type': 'Audience', audienceType: 'Content Creators' },
          { '@type': 'Audience', audienceType: 'Freelancers' },
          { '@type': 'Audience', audienceType: 'UGC Creators' },
        ] },
    ] }] },
  { path: '/login', title: 'Log in · FlowGC', desc: 'Log in to FlowGC to track your brand deals and payments.', body: loginBody, index: false },  // hands off to app.flowgc.co, which is noindex
  { path: '/privacy', title: 'Privacy Policy · FlowGC', desc: 'How FlowGC collects, uses and protects your data, and the rights you have over it.', body: privacyBody, priority: '0.3' },
  { path: '/terms', title: 'Terms and Conditions · FlowGC', desc: 'The terms for using the FlowGC website, web app and mobile app.', body: legal('Terms and Conditions', 'These terms cover your use of the FlowGC website, web app and mobile app.'), priority: '0.3' },
  { path: '/data', title: 'Data Collection · FlowGC', desc: 'Every type of data FlowGC collects, why, who it is shared with and how long it is kept.', body: legal('Data Collection', 'A plain list of the data FlowGC collects, why we need it, who processes it and how long we keep it.'), priority: '0.3' },
];

const head = r => {
  const url = SITE + r.path;
  return [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.desc)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="${r.index === false ? 'noindex,follow' : 'index,follow'}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="FlowGC" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE}/assets/logo-as.png" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${esc(r.title)}" />`,
    `<meta name="twitter:description" content="${esc(r.desc)}" />`,
    ...(r.ld || []).map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`),
  ].join('\n    ');
};

// The app subdomain serves these same files (app.flowgc.co/ is the dashboard), so there the
// website snapshot is hidden before it paints instead of flashing until React replaces it.
const HIDE_ON_APP = `<script>if(location.hostname.indexOf('app.')===0)document.documentElement.setAttribute('data-app-host','')</script>
    <style>[data-app-host] [data-prerender]{display:none!important}</style>`;

for (const r of routes) {
  const html = shell
    .replace('<head>', `<head>\n    ${HIDE_ON_APP}`)
    .replace(/<title>[\s\S]*?<\/title>/, head(r))
    .replace(/<meta name="description"[^>]*>\s*/, '')
    .replace('<div id="root"></div>', `<div id="root">${r.body}</div>`);
  const dir = join(DIST, r.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
}

// The app shell for everything else (the SPA fallback) stays out of search results.
writeFileSync(join(DIST, '200.html'), shell.replace('<head>', '<head>\n    <meta name="robots" content="noindex" />'));

// App pages (/app, /mobile, /invoice, /lab, /close-up) stay crawlable on purpose: they serve
// 200.html with noindex, and Google only drops a page it is allowed to fetch and see that on.
// Brand links carry private tokens, so crawlers are kept out of them entirely.
writeFileSync(join(DIST, 'robots.txt'), [
  'User-agent: *',
  'Disallow: /d/',
  'Disallow: /a/',
  '',
  `Sitemap: ${SITE}/sitemap.xml`,
  '',
].join('\n'));

const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.filter(r => r.index !== false).map(r => `  <url><loc>${SITE}${r.path}</loc><lastmod>${today}</lastmod><priority>${r.priority}</priority></url>`).join('\n')}
</urlset>
`);

console.log(`Prerendered ${routes.length} pages for ${SITE}`);
