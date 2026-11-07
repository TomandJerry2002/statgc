// @ts-nocheck
// Generated from "StatGC Website.dc.html" by scripts/dc-convert.js. Inline styles and logic are kept as in the prototype so it renders the same.
import React from 'react';
import { DCLogic, DCHost, sty, T, S, L, R, hostPos, XImport } from '@/dc/runtime';
import StatGCApp from './StatGCApp';
import StatGCWebsiteLogin from './StatGCWebsiteLogin';

const CSS = `
@font-face{font-family:'Satoshi';src:url('/assets/Satoshi-Variable.woff2') format('woff2');font-weight:300 900;font-style:normal;font-display:swap}
html{scroll-behavior:smooth;scroll-padding-top:96px}html,body{margin:0;padding:0;background:#FFFFFF}@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
body{font-family:'Satoshi',ui-sans-serif,system-ui,sans-serif;color:#2E2E33;-webkit-font-smoothing:antialiased;font-variant-numeric:tabular-nums}
a{color:#5A43B5;text-decoration:none}
a:hover{color:#4A35A8}
*{box-sizing:border-box}
@keyframes asDriftA{0%{transform:translate3d(0,0,0) rotate(0deg) scale(1)}100%{transform:translate3d(-4%,3%,0) rotate(-3deg) scale(1.05)}}
@keyframes asDriftB{0%{transform:translate3d(2%,-2%,0) rotate(1.5deg) scale(1.03)}100%{transform:translate3d(-2%,2%,0) rotate(-1deg) scale(.98)}}
@keyframes asDriftC{0%{transform:translate3d(0,0,0) rotate(0deg) scale(1)}100%{transform:translate3d(3%,-1.5%,0) rotate(2deg) scale(1.04)}}
@keyframes asDriftSoft{0%{transform:translate3d(0,0,0) rotate(0deg)}100%{transform:translate3d(-1.5%,1%,0) rotate(-1deg)}}
@keyframes asShine{0%{transform:translateX(-130%) skewX(-18deg)}28%,100%{transform:translateX(230%) skewX(-18deg)}}
@keyframes sgPulse{0%{box-shadow:0 0 0 0 currentColor;opacity:1}70%{box-shadow:0 0 0 8px transparent}100%{box-shadow:0 0 0 0 transparent}}
@keyframes sgFlow{0%{stroke-dashoffset:1}100%{stroke-dashoffset:0}}
@keyframes sgFloor{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(0,80px,0)}}
@keyframes sgTx{0%{transform:translate3d(0,120px,0) scale(.96);opacity:0}15%{opacity:1;transform:translate3d(0,100px,0) scale(1)}75%{opacity:1}100%{transform:translate3d(0,0,0) scale(.98);opacity:0}}
@keyframes asRise{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:none}}
@keyframes asFill{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}
@keyframes asCur0{0%{left:96%;top:108%;transform:scale(1);opacity:0}10%{left:96%;top:100%;transform:scale(1);opacity:1}34%{left:62%;top:24%;transform:scale(1);opacity:1}38%{left:62%;top:24%;transform:scale(0.82);opacity:1}42%{left:62%;top:24%;transform:scale(1);opacity:1}70%{left:24%;top:38%;transform:scale(1);opacity:1}100%{left:24%;top:38%;transform:scale(1);opacity:1}}
@keyframes asRip0{0%,37%{transform:scale(.2);opacity:0}38%{transform:scale(.4);opacity:.7}48%,100%{transform:scale(1.6);opacity:0}}
@keyframes asTip0{0%,38%{opacity:0;transform:translateY(4px)}42%,68%{opacity:1;transform:none}74%,100%{opacity:0;transform:translateY(-2px)}}
@keyframes asCur1{0%{left:96%;top:108%;transform:scale(1);opacity:0}10%{left:96%;top:100%;transform:scale(1);opacity:1}34%{left:82%;top:64%;transform:scale(1);opacity:1}38%{left:82%;top:64%;transform:scale(0.82);opacity:1}42%{left:82%;top:64%;transform:scale(1);opacity:1}72%{left:52%;top:82%;transform:scale(1);opacity:1}100%{left:52%;top:82%;transform:scale(1);opacity:1}}
@keyframes asRip1{0%,37%{transform:scale(.2);opacity:0}38%{transform:scale(.4);opacity:.7}48%,100%{transform:scale(1.6);opacity:0}}
@keyframes asTip1{0%,38%{opacity:0;transform:translateY(4px)}42%,68%{opacity:1;transform:none}74%,100%{opacity:0;transform:translateY(-2px)}}
@keyframes asCur2{0%{left:96%;top:108%;transform:scale(1);opacity:0}10%{left:96%;top:100%;transform:scale(1);opacity:1}30%{left:90%;top:27%;transform:scale(1);opacity:1}34%{left:90%;top:27%;transform:scale(0.82);opacity:1}38%{left:90%;top:27%;transform:scale(1);opacity:1}70%{left:70%;top:70%;transform:scale(1);opacity:1}100%{left:70%;top:70%;transform:scale(1);opacity:1}}
@keyframes asRip2{0%,33%{transform:scale(.2);opacity:0}34%{transform:scale(.4);opacity:.7}44%,100%{transform:scale(1.6);opacity:0}}
@keyframes asTip2{0%,34%{opacity:0;transform:translateY(4px)}38%,64%{opacity:1;transform:none}70%,100%{opacity:0;transform:translateY(-2px)}}
@keyframes asCur3{0%{left:96%;top:108%;transform:scale(1);opacity:0}10%{left:96%;top:100%;transform:scale(1);opacity:1}40%{left:56%;top:84%;transform:scale(1);opacity:1}44%{left:56%;top:84%;transform:scale(0.82);opacity:1}48%{left:56%;top:84%;transform:scale(1);opacity:1}100%{left:56%;top:84%;transform:scale(1);opacity:1}}
@keyframes asRip3{0%,43%{transform:scale(.2);opacity:0}44%{transform:scale(.4);opacity:.7}54%,100%{transform:scale(1.6);opacity:0}}
@keyframes asTip3{0%,44%{opacity:0;transform:translateY(4px)}48%,74%{opacity:1;transform:none}80%,100%{opacity:0;transform:translateY(-2px)}}
@keyframes asSwap{0%{opacity:0;filter:blur(6px);transform:translateY(10px) scale(.97)}100%{opacity:1;filter:blur(0);transform:none}}
@keyframes asBreathe{0%{opacity:1}100%{opacity:.68}}

.p-statgcwebsite-0:hover{color:#111111 !important}
.p-statgcwebsite-1:hover{background:{{ navHov }} !important;color:{{ navInk }} !important}
.p-statgcwebsite-2:hover{background:#5A43B5 !important;color:#FFFFFF !important}
.p-statgcwebsite-3:active{transform:scale(.97) !important}
.p-statgcwebsite-4:hover{filter:brightness(1.08) !important;transform:translateY(-1px) !important}
.p-statgcwebsite-5:active{transform:scale(.98) !important}
.p-statgcwebsite-6:hover{background:rgba(255,255,255,.07) !important}
.p-statgcwebsite-7:hover{animation-play-state:paused !important}
.p-statgcwebsite-8:hover{background:#F2F3F5 !important}
.p-statgcwebsite-9:active{transform:scale(.96) !important}
.p-statgcwebsite-a:hover{background:#EBECEF !important}
.p-statgcwebsite-b:hover{color:#111111 !important;transform:translateY(-1px) !important;box-shadow:inset 0 0 0 1px rgba(109,85,201,.28),inset 0 1px 0 #FFFFFF,0 6px 16px -6px rgba(74,53,168,.25) !important}
.p-statgcwebsite-c:active{transform:scale(.97) !important;transition:transform 80ms ease-out !important}
.p-statgcwebsite-d:active{transform:scale(.94) !important}
`;
const LINKS = ["https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Jost:wght@400;500;600&family=Oi&display=swap"];

class Component extends DCLogic {
  state = (() => {
    const mm = q => typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q).matches : false;
    return { vw: mm('(max-width: 639px)') ? 'm' : mm('(max-width: 1023px)') ? 't' : 'd', still: mm('(prefers-reduced-motion: reduce)'), clip: 'linear-gradient(#0000,#0000)' };
  })();
  heroRef = React.createRef();
  burstRef = React.createRef();
  brandRef = React.createRef();
  appWrapRef = React.createRef();
  appVals(H) {
    const s = this.state, view = s.appView || 'home', done = s.appDone || [], filter = s.appFilter || 'all';
    const icon = n => `url(https://unpkg.com/lucide-static@0.460.0/icons/${n}.svg) center/contain no-repeat`;
    const result = {
      HC: ['Payment reminder sent to Hearth Coffee', 'Reminder', 'Hi Rohan, a reminder that ₹ 25,000 for the café menu Reels was due on 28 Mar, as agreed on 10 Mar.', 'Hearth Coffee gets an email with the agreed term.'],
      KL: ['Revision submitted to Kora Living', 'Brand\'s note', 'Can the opening shot show the full living room before the close-up? Rest is great.', 'Revision 1 of 2. Kora Living reviews the new version.'],
      GI: ['Reminder sent to GlowSkin India', 'Reminder', 'Hi Ananya, the terms link for the Vitamin C serum launch expires today at 18:00.', 'The link stays the same.'],
      TS: ['Reel 1 submitted to Tara Studio', 'What you are submitting', 'Reel 1 · Festive kurta drop · 34 sec, vertical, with captions.', 'Tara Studio gets a link to review it.'],
      MN: ['Payment due date added. Ready to send.', 'Missing term', 'Payment due date: 30 days after the post goes live.', 'You can send the link to Mitti Naturals next.'],
    };
    const ctas = { HC: 'Send payment reminder', KL: 'Submit revision', GI: 'Send reminder', TS: 'Submit work', MN: 'Add due date' };
    const toast = msg => { clearTimeout(this._appT); this.setState({ appToast: msg, appToastOn: true }); this._appT = setTimeout(() => this.setState({ appToastOn: false }), 2600); };
    const open = ini => () => this.setState({ appSheet: ini });
    const needs = H.homeNeeds.filter(r => !done.includes(r.ini)).map(r => ({ ...r, open: open(r.ini) }));
    const all = H.homeAll.map(r => ({ ...r, open: done.includes(r.ini) || !result[r.ini] ? () => toast(r.brand + ' · ' + r.status) : open(r.ini), next: done.includes(r.ini) ? 'Done' : r.next }));
    const deals = filter === 'needs' ? all.filter(r => result[r.ini] && !done.includes(r.ini)) : filter === 'brand' ? all.filter(r => !result[r.ini]) : all;
    const sh = s.appSheet, d = sh && sh !== 'create' ? H.homeAll.find(r => r.ini === sh) : null;
    const sheet = sh === 'create'
      ? { heading: 'Create deal', kicker: 'Paste the DM or email', title: 'New deal from a message', rows: [{ l: 'Brand', v: 'Sana Beauty' }, { l: 'Deliverables', v: '2 Reels' }, { l: 'Amount', v: '₹ 40,000' }], noteLabel: 'Pasted from Instagram', note: 'Hey Ananya! We are launching a lip tint in May. 2 reels, 40k total. Interested?', cta: 'Create draft', foot: 'You check the terms before anything is sent.' }
      : d ? { heading: d.brand, kicker: d.title, title: d.status, rows: [{ l: 'Amount', v: d.amount }, { l: 'Stage', v: d.stage }, { l: 'Date', v: d.date }], noteLabel: result[d.ini][1], note: result[d.ini][2], cta: ctas[d.ini], foot: result[d.ini][3] }
      : { heading: '', kicker: '', title: '', rows: [], noteLabel: '', note: '', cta: '', foot: '' };
    const needN = needs.length;
    return {
      appWrapRef: this.appWrapRef,
      appScale: s.appScale || 0.9, appWrapH: Math.round(760 * (s.appScale || 0.9)) + 'px',
      appUrl: 'app.statgc.in/' + (view === 'home' ? '' : view),
      appIsHome: view === 'home', appIsDeals: view === 'deals', appIsPayments: view === 'payments',
      appNav: [['home', 'Home', 'house', ''], ['deals', 'Deals', 'list', needN ? String(needN) : ''], ['payments', 'Payments', 'wallet', ''], ['settings', 'Settings', 'settings', '']].map(([id, l, ic, c]) => {
        const on = id === view;
        return { label: l, mask: icon(ic), count: c, bg: on ? '#111111' : 'transparent', hbg: on ? '#111111' : '#F2F3F5', fg: on ? '#FFFFFF' : '#2E2E33', fw: on ? 700 : 500, cc: on ? '#FFFFFF' : '#B42318',
          go: () => id === 'settings' ? toast('Settings are not part of this preview') : this.setState({ appView: id, appSheet: null }) };
      }),
      appNeeds: needs, appNeedsEmpty: needN === 0, appNeedsCount: needN + (needN === 1 ? ' deal' : ' deals'),
      appOverdueLine: done.includes('HC') ? 'reminder sent for 1 overdue payment' : '1 payment overdue',
      appDeals: deals,
      appFilters: [['all', 'All 8'], ['needs', 'Needs you ' + needN], ['brand', "Brand's turn 3"]].map(([id, l]) => ({ label: l, bg: id === filter ? '#111111' : 'transparent', fg: id === filter ? '#FFFFFF' : '#2E2E33', fw: id === filter ? 700 : 500, go: () => this.setState({ appFilter: id }) })),
      appGoPayments: () => this.setState({ appView: 'payments' }),
      appCreate: () => this.setState({ appSheet: 'create' }),
      appClose: () => this.setState({ appSheet: null }),
      appDo: () => {
        if (sh === 'create') { this.setState({ appSheet: null }); toast('Draft created for Sana Beauty'); return; }
        if (!d) return;
        this.setState(st => ({ appSheet: null, appDone: [...(st.appDone || []), d.ini] }));
        toast(result[d.ini][0]);
      },
      appReset: () => this.setState({ appView: 'home', appDone: [], appFilter: 'all', appSheet: null, appToastOn: false }),
      sheet,
      appSheetX: sh ? '0%' : '102%', appScrimOp: sh ? 1 : 0, appScrimPe: sh ? 'auto' : 'none',
      appToast: s.appToast || '', appToastOp: s.appToastOn ? 1 : 0, appToastY: s.appToastOn ? '0px' : '16px',
    };
  }
  brandStep(p) {
    clearTimeout(this._bt);
    if (this.state.still) { this.setState({ bPhase: 'read' }); return; }
    const seq = { idle: ['read', 350], read: ['aim', 1700], aim: ['press', 1000], press: ['done', 220], done: ['idle', 2800] };
    this.setState({ bPhase: p });
    if (this.state.bManual) return;
    const [next, ms] = seq[p] || seq.idle;
    this._bt = setTimeout(() => { if (this._bVisible && !this.state.bPaused && !this.state.bManual) this.brandStep(next); else this._bWait = next; }, ms);
  }
  startBurst() {
    const cv = this.burstRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'), still = this.state.still;
    let W = 0, H = 0, dpr = 1, cols = 0, rows = 0;
    const pal = ['#F6DDB0', '#F2C48D', '#F2C48D', '#E2A947', '#D9963F', '#6D55C9', '#5A43B5', '#4A35A8'];
    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cols = Math.round(W / (W < 640 ? 16 : 13)); rows = W < 640 ? 18 : 26;
    };
    build();
    const ptr = { x: -9999, y: -9999, tx: -9999, ty: -9999, on: 0, ton: 0 };
    const host = cv.parentElement;
    const move = e => { const r = cv.getBoundingClientRect(); ptr.tx = e.clientX - r.left; ptr.ty = e.clientY - r.top; ptr.ton = 1; if (ptr.x < -999) { ptr.x = ptr.tx; ptr.y = ptr.ty; } };
    const leave = () => { ptr.ton = 0; };
    host.addEventListener('pointermove', move); host.addEventListener('pointerleave', leave);
    let visible = true, raf = 0;
    const io = new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible && !raf && !still) raf = requestAnimationFrame(frame); });
    io.observe(cv);
    const ro = new ResizeObserver(() => { build(); if (still) draw(0); });
    ro.observe(cv);
    const draw = t => {
      ptr.x += (ptr.tx - ptr.x) * 0.1; ptr.y += (ptr.ty - ptr.y) * 0.1; ptr.on += (ptr.ton - ptr.on) * 0.05;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, sig2 = 2 * 120 * 120, T = still ? 0 : t;
      const pts = new Array(cols);
      for (let j = 0; j < rows; j++) {
        const p = j / (rows - 1), depth = 0.35 + 0.65 * p;
        const baseY = H * 0.06 + Math.pow(p, 1.35) * H * 0.86;
        const spread = W * (0.62 + 0.55 * p);
        for (let i = 0; i < cols; i++) {
          const q = i / (cols - 1);
          const x = cx + (q - 0.5) * spread;
          const env = Math.sin(Math.PI * q);
          let z = (22 * Math.sin(i * 0.16 + T * 0.0007 + j * 0.32) + 14 * Math.sin(i * 0.05 - T * 0.00045 + j * 0.18) + 10 * Math.sin(j * 0.5 + T * 0.0009)) * env;
          const dx = ptr.x - x, dy = ptr.y - baseY;
          const k = ptr.on * Math.exp(-(dx * dx + dy * dy) / sig2);
          z += 46 * k;
          pts[i] = { x: x - dx * 0.08 * k, y: baseY - z * depth, z, k, env };
        }
        ctx.globalAlpha = 0.08 + 0.12 * p;
        ctx.strokeStyle = '#6D55C9'; ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < cols; i++) i ? ctx.lineTo(pts[i].x, pts[i].y) : ctx.moveTo(pts[i].x, pts[i].y);
        ctx.stroke();
        for (let i = 0; i < cols; i++) {
          const pt = pts[i];
          const n = Math.max(0, Math.min(1, (pt.z + 40) / 100));
          ctx.fillStyle = pal[Math.min(pal.length - 1, Math.floor(n * pal.length))];
          ctx.globalAlpha = (0.25 + 0.75 * pt.env) * (0.45 + 0.55 * p) * (1 - 0.2 * (1 - n)) + pt.k * 0.3;
          const rad = (0.7 + 1.5 * p) * (1 + pt.k * 0.9);
          ctx.beginPath(); ctx.arc(pt.x, pt.y, rad, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };
    let lastB = 0; const frame = t => { raf = 0; if (!visible) return; if (t - lastB > 32) { lastB = t; draw(t); } raf = requestAnimationFrame(frame); };
    if (still) draw(0); else raf = requestAnimationFrame(frame);
    this._burstStop = () => { cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); host.removeEventListener('pointermove', move); host.removeEventListener('pointerleave', leave); };
  }
  h1Ref = React.createRef();
  openLogin() {
    clearTimeout(this._lgT);
    this._lgPrevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    this.setState({ loginMounted: true, loginIn: false }, () => requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ loginIn: true }))));
  }
  closeLogin() {
    if (location.hash === '#login') history.replaceState(null, '', location.pathname + location.search);
    this.setState({ loginIn: false });
    clearTimeout(this._lgT);
    this._lgT = setTimeout(() => { this.setState({ loginMounted: false }); document.documentElement.style.overflow = this._lgPrevOverflow || ''; }, 200);
  }
  finRef = React.createRef(); burstCv = React.createRef(); burstCta = React.createRef();
  burstVals() {
    const d = !!this.state.burstDark;
    return {
      finRef: this.finRef, burstCv: this.burstCv, burstCta: this.burstCta,
      burstBg: d ? '#120E22' : '#FFFFFF', burstLine: d ? '#120E22' : '#E4E4E8',
      burstH: d ? '#F5F3F9' : '#111111', burstP: d ? '#BDB9C7' : '#5E5E66',
      burstLogoOp: d ? 0 : 1, burstLogoWOp: d ? 1 : 0,
      burstBtnBg: d ? 'rgba(255,255,255,.08)' : '#FFFFFF', burstBtnFg: d ? '#F5F3F9' : '#111111',
      burstBtnSh: d ? 'inset 0 0 0 1px rgba(255,255,255,.14)' : '0 1px 2px rgba(17,17,17,.06), inset 0 0 0 1px #E4E4E8',
      burstSunOp: d ? 0 : 1, burstSunTf: d ? 'rotate(-90deg) scale(.4)' : 'none',
      burstMoonOp: d ? 1 : 0, burstMoonTf: d ? 'none' : 'rotate(90deg) scale(.4)',
      burstToggleLabel: d ? 'Switch to light' : 'Switch to dark', burstPressed: d ? 'true' : 'false',
      burstToggle: () => this.setState(s => ({ burstDark: !s.burstDark })),
      burstGo: e => {
        e.preventDefault();
        if (this._finGoT) return;
        const go = () => { this._finGoT = 0; if (location.hash !== '#login') history.replaceState(null, '', '#login'); this.openLogin(); };
        if (this.state.still || !this._finBoom) return go();
        this._finBoom(); this._finGoT = setTimeout(go, 950);
      },
      burstConvOn: () => { if (this._finGoT) return; this._finConv = 1; this._finKick && this._finKick(); }, burstConvOff: () => { this._finConv = 0; this._finKick && this._finKick(); },
    };
  }
  startFin() {
    const sec = this.finRef.current, cv = this.burstCv.current;
    if (!sec || !cv) return;
    const ctx = cv.getContext('2d');
    let seed = 7; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const N = 260;
    const rays = Array.from({ length: N }, (_, i) => {
      const u = i / (N - 1);
      return { a: -Math.PI * (0.03 + 0.94 * u) + (r() - .5) * .02, l: (0.3 + 0.7 * Math.pow(r(), .6)) * (0.5 + 0.5 * Math.sin(u * Math.PI)),
        ph: r() * 6.28, sp: .4 + r() * .9, w: r(), d: r(), tip: r() < .55 ? 1 + r() * 2.2 : 0, ring: .75 + r() * .5 };
    });
    const still = this.state.still;
    let W = 0, H = 0, dpr = 1, t0 = still ? -1e9 : null, tm = this.state.burstDark ? 1 : 0, c = 0, pk = 0, px = 0, py = 0, pOn = false, vis = false, cta = null;
    this._finConv = 0;
    const size = () => { dpr = Math.min(2, window.devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; cta = null; };
    size();
    this._finRO = new ResizeObserver(size); this._finRO.observe(cv);
    this._finIO = new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && t0 === null) t0 = performance.now(); if (vis && !this._finRaf) this._finRaf = requestAnimationFrame(frame); }, { threshold: .15 });
    this._finIO.observe(sec);
    this._finMove = e => { const b = sec.getBoundingClientRect(); px = e.clientX - b.left; py = e.clientY - b.top; pOn = true; };
    this._finLeave = () => { pOn = false; };
    sec.addEventListener('pointermove', this._finMove); sec.addEventListener('pointerleave', this._finLeave);
    const mix = (a, b, k) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
    const rgb = (a, al = 1) => `rgba(${a[0]},${a[1]},${a[2]},${al})`;
    const ease = x => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
    let boom = null, sparks = [], lastT = 0;
    this._finBoom = () => {
      if (!cta) return;
      const now = performance.now();
      boom = { t: now, x: cta.x, y: cta.y };
      c *= .5; this._finConv = 0;
      sparks = Array.from({ length: 120 }, () => {
        const a = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.8, sp = 240 + Math.random() * 620;
        return { x: cta.x + (Math.random() - .5) * 60, y: cta.y + (Math.random() - .5) * 16, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: .8 + Math.random() * .8, age: 0, w: .6 + Math.random() * 1.4, hue: Math.random() };
      });
      this._finKick();
    };
    const frame = t => {
      this._finRaf = 0;
      if (!vis) return;
      const dt = Math.min(.05, lastT ? (t - lastT) * .001 : .016); lastT = t;
      const bp = boom ? (t - boom.t) / 1500 : 1;
      const kx = bp < 1 ? Math.sin(Math.min(1, bp / .16) * Math.PI / 2) * Math.exp(-Math.max(0, bp - .16) * 3.6) : 0;
      tm += ((this.state.burstDark ? 1 : 0) - tm) * .07;
      c += (this._finConv - c) * (this._finConv ? .07 : .05);
      pk += ((pOn && !still ? 1 : 0) - pk) * .08;
      if (!cta || c > .01) { const s = sec.getBoundingClientRect(), b = this.burstCta.current && this.burstCta.current.getBoundingClientRect(); if (b) cta = { x: b.left - s.left + b.width / 2, y: b.top - s.top + b.height / 2, rx: b.width / 2 + 26, ry: b.height / 2 + 26 }; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      const ox = W / 2, oy = H + 10, R = Math.min(H * 1.02, W * .62);
      const core = mix([246, 214, 150], [255, 240, 205], tm), mid = mix([109, 85, 201], [226, 169, 71], tm), edge = mix([74, 53, 168], [240, 206, 140], tm), bg = mix([255, 255, 255], [18, 12, 34], tm);
      let g = ctx.createRadialGradient(ox, oy, 0, ox, oy, R * .85);
      g.addColorStop(0, rgb(core, Math.min(1, .42 + .18 * tm + .2 * c + .45 * kx))); g.addColorStop(.55, rgb(mid, .1 + .06 * tm)); g.addColorStop(1, rgb(mid, 0));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      g = ctx.createRadialGradient(ox, oy, 0, ox, oy, R);
      g.addColorStop(0, rgb(core)); g.addColorStop(.4, rgb(mid)); g.addColorStop(1, rgb(edge));
      ctx.strokeStyle = g; ctx.fillStyle = g;
      const pa = Math.atan2(py - oy, px - ox), T = t * .001;
      for (const ry of rays) {
        const e = t0 === null ? 0 : ease((t - t0 - ry.d * 700) / 1200);
        if (e <= 0) continue;
        let a = ry.a, dd = Math.atan2(Math.sin(pa - a), Math.cos(pa - a)), near = Math.exp(-Math.abs(dd) * 6);
        a += dd * .2 * pk * near + kx * .05 * Math.sin(ry.ph * 7 + bp * 14);
        let len = R * ry.l * e * (1 + (still ? 0 : .035 * Math.sin(T * ry.sp + ry.ph))) * (1 + kx * (.45 + .5 * ry.w)) + pk * near * R * .1;
        let x = ox + Math.cos(a) * len, y = oy + Math.sin(a) * len;
        if (cta && c > .001) {
          const k = ease(c * 1.15 - ry.d * .15);
          const tx = cta.x + Math.cos(ry.a) * cta.rx * ry.ring, ty = cta.y + Math.sin(ry.a) * cta.ry * ry.ring * 1.6;
          x += (tx - x) * k; y += (ty - y) * k;
        }
        ctx.globalAlpha = Math.min(1, (.16 + .4 * ry.w) * (1 + .5 * tm) * Math.min(1, e * 1.5) * (1 + 1.2 * kx));
        ctx.lineWidth = .5 + ry.w * .8 + kx * .6;
        ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(x, y); ctx.stroke();
        if (ry.tip) { ctx.globalAlpha = Math.min(1, .55 + .4 * ry.w) * e; ctx.beginPath(); ctx.arc(x, y, ry.tip * (1 - .35 * c), 0, 6.283); ctx.fill(); }
      }
      ctx.globalAlpha = 1;
      const wy = H * .4, wr = Math.min(W * .55, 460);
      g = ctx.createRadialGradient(ox, wy, 0, ox, wy, wr);
      const wa = .9 * (1 - .75 * c) * (1 - .55 * kx);
      g.addColorStop(0, rgb(bg, wa)); g.addColorStop(.6, rgb(bg, wa * .7)); g.addColorStop(1, rgb(bg, 0));
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      if (boom && bp < 1) {
        const maxR = Math.hypot(W, H) * .6;
        for (const [d, wgt] of [[0, 1], [.12, .55]]) {
          const q = Math.max(0, bp - d) / (1 - d); if (q <= 0) continue;
          ctx.globalAlpha = (1 - q) * .55 * wgt; ctx.strokeStyle = rgb(mid); ctx.lineWidth = 2.2 * (1 - q) + .4;
          ctx.beginPath(); ctx.ellipse(boom.x, boom.y, ease(q) * maxR, ease(q) * maxR * .62, 0, 0, 6.283); ctx.stroke();
        }
        ctx.globalAlpha = Math.max(0, .5 * (1 - bp * 3));
        const fg = ctx.createRadialGradient(boom.x, boom.y, 0, boom.x, boom.y, 140);
        fg.addColorStop(0, rgb(core, 1)); fg.addColorStop(1, rgb(core, 0));
        ctx.fillStyle = fg; ctx.fillRect(boom.x - 140, boom.y - 140, 280, 280);
      }
      if (sparks.length) {
        ctx.lineCap = 'round';
        for (const s of sparks) {
          s.age += dt; const dr = Math.exp(-2.6 * dt); s.vx *= dr; s.vy = s.vy * dr + 300 * dt;
          s.x += s.vx * dt; s.y += s.vy * dt;
          const lf = 1 - s.age / s.life; if (lf <= 0) continue;
          ctx.globalAlpha = Math.min(1, lf * 1.4);
          ctx.strokeStyle = rgb(mix(core, s.hue > .5 ? mid : edge, Math.min(1, s.age / s.life * 1.6)));
          ctx.lineWidth = s.w * (.5 + .5 * lf);
          ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * .035, s.y - s.vy * .035); ctx.stroke();
        }
        sparks = sparks.filter(s => s.age < s.life);
        ctx.globalAlpha = 1;
      }
      const settling = Math.abs(tm - (this.state.burstDark ? 1 : 0)) > .002 || Math.abs(c - this._finConv) > .002 || pk > .002 || bp < 1 || sparks.length > 0;
      if (!still || settling || (t0 !== null && t - t0 < 2200)) this._finRaf = requestAnimationFrame(frame);
    };
    this._finKick = () => { if (vis && !this._finRaf) this._finRaf = requestAnimationFrame(frame); };
    if (still) { this._finMove = () => {}; }
  }
  startCursor() {
    if (this._curOn || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    this._curOn = true;
    const still = this.state.still, mk = (css) => { const d = document.createElement('div'); d.setAttribute('aria-hidden', 'true'); d.style.cssText = css; document.body.appendChild(d); return d; };
    const st = document.createElement('style');
    st.textContent = 'html.as-cur, html.as-cur * { cursor: none !important } html.as-cur input, html.as-cur textarea, html.as-cur [contenteditable="true"] { cursor: text !important }';
    document.head.appendChild(st);
    const glow = mk('position:fixed;left:0;top:0;width:560px;height:560px;margin:-280px 0 0 -280px;border-radius:50%;pointer-events:none;z-index:9997;background:radial-gradient(closest-side,rgba(226,169,71,.22),rgba(226,169,71,.08) 45%,rgba(226,169,71,0));mix-blend-mode:multiply;opacity:0;transition:opacity 400ms ease;will-change:transform');
    const ring = mk('position:fixed;left:0;top:0;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;pointer-events:none;z-index:9999;border:1.5px solid rgba(109,85,201,.7);background:rgba(109,85,201,0);opacity:0;transition:width 260ms cubic-bezier(.23,1,.32,1),height 260ms cubic-bezier(.23,1,.32,1),margin 260ms cubic-bezier(.23,1,.32,1),background 200ms ease,border-color 200ms ease,opacity 200ms ease;will-change:transform');
    const dot = mk('position:fixed;left:0;top:0;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:50%;pointer-events:none;z-index:10000;background:#6D55C9;box-shadow:0 0 0 1.5px rgba(255,255,255,.85);opacity:0;transition:opacity 200ms ease,width 200ms ease,height 200ms ease,margin 200ms ease;will-change:transform');
    let mx = -100, my = -100, rx = -100, ry = -100, gx = -100, gy = -100, raf = 0, down = false, hov = false, txt = false, shown = false;
    const setRing = () => {
      const s = txt ? 0 : hov ? 54 : 34, sc = down ? .82 : 1;
      ring.style.width = ring.style.height = s + 'px'; ring.style.margin = (-s / 2) + 'px 0 0 ' + (-s / 2) + 'px';
      ring.style.background = hov ? 'rgba(109,85,201,.10)' : 'rgba(109,85,201,0)';
      ring.style.borderColor = hov ? 'rgba(109,85,201,.35)' : 'rgba(109,85,201,.7)';
      ring.dataset.sc = sc;
      const ds = hov || txt ? 0 : 6; dot.style.width = dot.style.height = ds + 'px'; dot.style.margin = (-ds / 2) + 'px 0 0 ' + (-ds / 2) + 'px';
    };
    const show = v => { shown = v; ring.style.opacity = dot.style.opacity = v && !txt ? 1 : 0; glow.style.opacity = v ? 1 : 0; };
    const loop = () => {
      raf = 0;
      const k = still ? 1 : .2, kg = still ? 1 : .08;
      rx += (mx - rx) * k; ry += (my - ry) * k; gx += (mx - gx) * kg; gy += (my - gy) * kg;
      dot.style.transform = `translate3d(${mx}px,${my}px,0)`;
      ring.style.transform = `translate3d(${rx}px,${ry}px,0) scale(${ring.dataset.sc || 1})`;
      glow.style.transform = `translate3d(${gx}px,${gy}px,0)`;
      if (Math.abs(mx - rx) + Math.abs(my - ry) + Math.abs(mx - gx) + Math.abs(my - gy) > .3) raf = requestAnimationFrame(loop);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
    const move = e => {
      mx = e.clientX; my = e.clientY;
      if (!shown) { rx = gx = mx; ry = gy = my; document.documentElement.classList.add('as-cur'); show(true); }
      kick();
    };
    const over = e => {
      const t = e.target;
      const nTxt = !!(t.closest && t.closest('input:not([type=button]):not([type=submit]):not([type=checkbox]):not([type=radio]),textarea,[contenteditable="true"]'));
      const nHov = !nTxt && !!(t.closest && t.closest('a[href],button,[role="button"],label,select,summary,[tabindex]:not([tabindex="-1"])'));
      if (nTxt !== txt || nHov !== hov) { txt = nTxt; hov = nHov; setRing(); show(shown); }
    };
    const leave = e => { if (!e.relatedTarget) show(false); };
    const md = () => { down = true; setRing(); kick(); }, mu = () => { down = false; setRing(); kick(); };
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseout', leave);
    window.addEventListener('mousedown', md); window.addEventListener('mouseup', mu);
    setRing();
    this._curStop = () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over); document.removeEventListener('mouseout', leave);
      window.removeEventListener('mousedown', md); window.removeEventListener('mouseup', mu);
      [glow, ring, dot, st].forEach(n => n.remove()); document.documentElement.classList.remove('as-cur'); this._curOn = false;
    };
  }
  ringCv = React.createRef(); ringAnchor = React.createRef();
  startRings() {
    const cv = this.ringCv.current, an = this.ringAnchor.current;
    if (!cv || !an || this._ringOn) return;
    this._ringOn = true;
    const ctx = cv.getContext('2d'), still = this.state.still;
    let W = 0, H = 0, dpr = 1, cx = 0, cy = 0, rings = [], vis = false, raf = 0;
    const build = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      const s = cv.getBoundingClientRect(), b = an.getBoundingClientRect();
      cx = b.left - s.left + b.width / 2; cy = b.top - s.top + b.height * .62;
      const gap = W < 640 ? 30 : 32, n = Math.min(28, Math.ceil(Math.hypot(Math.max(cx, W - cx), H) / gap));
      rings = Array.from({ length: n }, (_, k) => { const r = 90 + k * gap; return { r, n: Math.max(12, Math.round(2 * Math.PI * r / 24)), sp: (k % 2 ? -1 : 1) * (.05 + 2.4 / (k + 6)) * .06, off: k * .37 }; });
    };
    build();
    const ro = new ResizeObserver(() => { build(); if (still) draw(0); }); ro.observe(cv);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && !raf && !still) raf = requestAnimationFrame(frame); }); io.observe(cv);
    const P = 3600, tilt = .38;
    const draw = t => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      const T = t * .001, maxR = rings.length ? rings[rings.length - 1].r : 1;
      const fronts = [0, 1].map(i => ((t + i * P / 2) % P) / P * maxR * 1.1);
      for (const rg of rings) {
        const edge = Math.max(0, 1 - Math.pow(rg.r / maxR, 2.2));
        let lift = 0; for (const f of fronts) lift = Math.max(lift, Math.exp(-Math.pow((rg.r - f) / 34, 2)));
        if (still) lift = 0;
        const wob = still ? 0 : 5 * Math.sin(rg.r * .035 - T * 1.6);
        for (let i = 0; i < rg.n; i++) {
          const th = (i / rg.n) * Math.PI * 2 + rg.off + T * rg.sp;
          const front = Math.sin(th), depth = .5 + .5 * front;
          const x = cx + Math.cos(th) * rg.r, y = cy + front * rg.r * tilt - (lift * 22 + wob) * (.4 + .6 * depth);
          if (x < -10 || x > W + 10 || y < -10 || y > H + 10) continue;
          const fadeX = W > 900 ? Math.min(1, Math.max(.12, (x - W * .18) / (W * .32))) : .7;
          const a = edge * fadeX * (.14 + .46 * depth + .5 * lift);
          if (a < .02) continue;
          ctx.globalAlpha = Math.min(1, a);
          ctx.fillStyle = lift > .45 ? '#E2A947' : depth > .55 ? '#6D55C9' : '#F2C48D';
          const rr = (.6 + 1.2 * depth) * (1 + lift * .9); ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2);
        }
      }
      ctx.globalAlpha = 1;
    };
    let lastF = 0; const frame = t => { raf = 0; if (!vis) return; if (t - lastF > 32) { lastF = t; draw(t); } raf = requestAnimationFrame(frame); };
    if (still) draw(0);
    this._ringStop = () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); this._ringOn = false; };
  }
  componentDidUpdate() {
    if (this._appFit && this.appWrapRef.current !== this._appEl) this._appFit(); this._finKick && this._finKick(); if (!this._ringOn) this.startRings(); }
  componentDidMount() {
    this.heroStart();
    this.startFin();
    this.startRings();
    this._climbScroll = () => { if (this._climbQ) return; this._climbQ = requestAnimationFrame(() => { this._climbQ = 0; this.climbMeasure(); }); };
    window.addEventListener('scroll', this._climbScroll, { passive: true });
    window.addEventListener('resize', this._climbScroll);
    setTimeout(() => { this.climbMeasure(); this.climbApply(true); this.climbDraw(performance.now()); }, 60);
    this._lgHash = () => { if (location.hash === '#login') { if (!this.state.loginMounted || !this.state.loginIn) this.openLogin(); } else if (this.state.loginMounted) this.closeLogin(); };
    window.addEventListener('hashchange', this._lgHash);
    this._lgKey = e => { if (e.key === 'Escape' && this.state.loginMounted) this.closeLogin(); };
    document.addEventListener('keydown', this._lgKey);
    this._lgClick = e => { const a = e.target.closest && e.target.closest('a[href="#login"]:not([data-burst])'); if (a) { e.preventDefault(); if (location.hash !== '#login') history.replaceState(null, '', '#login'); this.openLogin(); } };
    document.addEventListener('click', this._lgClick, true);
    if (location.hash === '#login') this.openLogin();
    this._mq = ['(max-width: 639px)', '(max-width: 1023px)', '(prefers-reduced-motion: reduce)'].map(q => window.matchMedia(q));
    this._onMq = () => this.setState({ vw: this._mq[0].matches ? 'm' : this._mq[1].matches ? 't' : 'd', still: this._mq[2].matches });
    this._mq.forEach(m => m.addEventListener('change', this._onMq));
    this._measure = () => {
      const s = this.heroRef.current, t = this.h1Ref.current;
      if (!s || !t) return;
      const a = s.getBoundingClientRect(), r = t.getBoundingClientRect();
      const t0 = Math.round(r.top - a.top), b0 = Math.round(r.bottom - a.top);
      const clip = `linear-gradient(180deg, #0000 ${t0 - 40}px, #000 ${t0}px, #000 ${b0}px, #0000 ${b0 + 40}px)`;
      if (clip !== this.state.clip) this.setState({ clip });
    };
    this._ro = new ResizeObserver(this._measure);
    if (this.heroRef.current) this._ro.observe(this.heroRef.current);
    if (this.h1Ref.current) this._ro.observe(this.h1Ref.current);
    this._measure();
    this.startBurst();
    requestAnimationFrame(() => this.setupScrollFx());
    if (this.riskRef.current) { this._rio = new IntersectionObserver(es => { if (es[0].isIntersecting) { this.setState({ rSeen: true }); this._rio.disconnect(); this._rs = setTimeout(() => this.setState({ rSettled: true }), 2400); } }, { threshold: 0.3 }); this._rio.observe(this.riskRef.current); }
    this._onScroll = () => { if (this._sr) return; this._sr = requestAnimationFrame(() => { this._sr = 0; const y = window.scrollY || document.documentElement.scrollTop; const m = this.state.navMini ? y > 24 : y > 72; if (m !== !!this.state.navMini) this.setState({ navMini: m }); }); };
    window.addEventListener('scroll', this._onScroll, { passive: true }); this._onScroll();
    this._pvClick = e => {
      const root = this.pvRef.current; if (!root || !root.contains(e.target)) return;
      const a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
      const h = decodeURIComponent(a.getAttribute('href') || '');
      if (h === '#login') return;
      e.preventDefault(); e.stopPropagation();
      if (h === '#' || h === '') return;
      const map = [['Home Desktop', 'Home'], ['Deals', 'Deals'], ['Payments', 'Payments'], ['Deliverables', 'Deliverables'], ['Templates', 'Templates'], ['Brands', 'Brands'], ['Reports', 'Reports'], ['Settings', 'Settings'], ['Login', 'Log out']];
      if (/Create Deal/.test(h)) { history.replaceState(null, '', '#login'); this.openLogin(); return; }
      const m = map.find(([k2]) => h.indexOf(k2) !== -1);
      this.pvGo(m ? m[1] : '');
    };
    document.addEventListener('click', this._pvClick, true);
    if (this.appWrapRef.current && 'IntersectionObserver' in window) {
      this._pvIo = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { this.setState({ pvNear: true }); this._pvIo.disconnect(); } }, { rootMargin: '600px 0px' });
      this._pvIo.observe(this.appWrapRef.current);
    } else this.setState({ pvNear: true });
    this._appFit = () => { const el = this.appWrapRef.current; if (!el) return; if (this._appEl !== el) { this._appEl = el; this._appRo.disconnect(); this._appRo.observe(el); } const w = el.clientWidth; if (w) { const sc = Math.min(1, w / 1200); if (Math.abs(sc - (this.state.appScale || 0)) > 0.001) this.setState({ appScale: sc }); } };
    this._appRo = new ResizeObserver(() => this._appFit());
    window.addEventListener('resize', this._appFit);
    this._appFit();
    if (this.brandRef.current) {
      this._bio = new IntersectionObserver(es => {
        this._bVisible = es[0].isIntersecting;
        if (this._bVisible && !this._bStarted) { this._bStarted = true; this.brandStep('idle'); }
        else if (this._bVisible && this._bWait) { const n = this._bWait; this._bWait = null; this.brandStep(n); }
      }, { threshold: 0.35 });
      this._bio.observe(this.brandRef.current);
    }
    document.fonts && document.fonts.ready.then(this._measure);
  }
  componentWillUnmount() {
    this.heroStop && this.heroStop();
    this._ringStop && this._ringStop(); clearTimeout(this._finGoT); this._appFit && window.removeEventListener('resize', this._appFit); this._curStop && this._curStop();
    cancelAnimationFrame(this._finRaf); this._finRO && this._finRO.disconnect(); this._finIO && this._finIO.disconnect();
    const bs = this.finRef.current; if (bs) { bs.removeEventListener('pointermove', this._finMove); bs.removeEventListener('pointerleave', this._finLeave); }
    document.removeEventListener('click', this._pvClick, true); clearTimeout(this._pvT);
    window.removeEventListener('scroll', this._climbScroll); window.removeEventListener('resize', this._climbScroll); cancelAnimationFrame(this._climbAnim); cancelAnimationFrame(this._climbQ);
    window.removeEventListener('hashchange', this._lgHash); document.removeEventListener('keydown', this._lgKey); document.removeEventListener('click', this._lgClick, true); clearTimeout(this._lgT);
    this._mq && this._mq.forEach(m => m.removeEventListener('change', this._onMq));
    this._ro && this._ro.disconnect();
    this._burstStop && this._burstStop();
    this._bio && this._bio.disconnect(); clearTimeout(this._bt);
    this._appRo && this._appRo.disconnect(); clearTimeout(this._appT);
    window.removeEventListener('scroll', this._onScroll);
    this._rio && this._rio.disconnect();
    this._revIo && this._revIo.disconnect();
    if (this._progScroll) { window.removeEventListener('scroll', this._progScroll); window.removeEventListener('resize', this._progScroll); } clearTimeout(this._rs);
    clearTimeout(this._rt); clearTimeout(this._rc);
  }
  brandVals() {
    const p = this.state.bPhase || (this.state.still ? 'read' : 'idle');
    const res = p === 'done' || p === 'change';
    const shown = p !== 'idle';
    const terms = [
      { label: 'Deliverables', value: '1 Reel · 3 Stories' },
      { label: 'Amount', value: '₹ 25,000' },
      { label: 'Payment due', value: '28 Mar 2026' },
      { label: 'Usage rights', value: 'Brand can repost on its own channels for 90 days' },
    ];
    return {
      brandRef: this.brandRef,
      brandTerms: terms.map((t, i) => ({ ...t, op: shown ? 1 : 0, tf: shown ? 'none' : 'translateY(6px)', delay: shown ? (i * 90) + 'ms' : '0ms' })),
      bActionsOp: res ? 0 : 1, bActionsTf: res ? 'scale(.98)' : 'none', bActionsPe: res ? 'none' : 'auto',
      bConfirmBg: p === 'aim' || p === 'press' ? '#5A43B5' : '#6D55C9',
      bConfirmTf: p === 'press' ? 'scale(.96)' : 'none',
      bConfirmSh: p === 'aim' ? '0 8px 20px -6px rgba(109,85,201,.45)' : '0 1px 2px rgba(109,85,201,.2)',
      bResultOp: res ? 1 : 0, bResultTf: res ? 'none' : 'translateY(6px) scale(.98)', bResultPe: res ? 'auto' : 'none',
      bResultBg: p === 'change' ? '#F2F3F5' : 'linear-gradient(90deg,rgba(109,85,201,.10),rgba(109,85,201,.03))',
      bResultDot: p === 'change' ? '#5E5E66' : 'linear-gradient(180deg,#E2A947,#6D55C9)',
      bCheckOff: res ? 0 : 12,
      bResultTitle: p === 'change' ? 'Change requested' : 'Terms confirmed',
      bResultSub: p === 'change' ? 'Priya will see your note on the deal.' : '13 Mar 2026, 10:05 IST',
      bCurL: p === 'aim' || p === 'press' ? '96px' : '110%', bCurT: p === 'aim' || p === 'press' ? '24px' : '140%',
      bCurOp: p === 'aim' || p === 'press' ? 1 : 0, bCurS: p === 'press' ? 0.86 : 1,
      brandPause: () => this.setState({ bPaused: true }),
      brandResume: () => { this.setState({ bPaused: false }); if (this._bWait && !this.state.bManual) { const n = this._bWait; this._bWait = null; this.brandStep(n); } },
      brandConfirm: () => { clearTimeout(this._bt); this.setState({ bManual: true, bPhase: 'done' }); },
      brandChange: () => { clearTimeout(this._bt); this.setState({ bManual: true, bPhase: 'change' }); },
      brandReplay: () => { this.setState({ bManual: false }, () => this.brandStep('idle')); },
    };
  }
  riskRef = React.createRef();
  progRef = React.createRef();
  setupScrollFx() {
    const still = this.state.still;
    const names = ['Draft', 'Sent to brand', 'Confirmed', 'In progress', 'Submitted', 'Revision', 'Approved', 'Payment due', 'Paid'];
    const root = this.progRef.current;
    if (root) {
      const segs = [...root.querySelectorAll('[data-seg]')], label = root.querySelector('[data-lbl]');
      let idle = 0, raf = 0, last = -1;
      const upd = () => {
        raf = 0;
        const d = document.documentElement, max = Math.max(1, d.scrollHeight - window.innerHeight);
        const p = Math.min(1, Math.max(0, (window.scrollY || d.scrollTop) / max)), v = p * 9;
        segs.forEach((s, i) => { s.style.transform = 'scaleX(' + Math.min(1, Math.max(0, v - i)).toFixed(3) + ')'; });
        const idx = Math.min(8, Math.floor(v));
        if (idx !== last) { last = idx; label.textContent = names[idx]; }
        root.style.opacity = p > 0.01 ? 1 : 0;
        label.style.opacity = 1; label.style.transform = 'none';
        clearTimeout(idle); idle = setTimeout(() => { label.style.opacity = 0; label.style.transform = 'translateY(-3px)'; }, 900);
      };
      this._progScroll = () => { if (!raf) raf = requestAnimationFrame(upd); };
      window.addEventListener('scroll', this._progScroll, { passive: true });
      window.addEventListener('resize', this._progScroll);
      upd(); label.style.opacity = 0;
    }
    if (still || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
    const main = document.getElementById('top'); if (!main) return;
    const blocks = [];
    const seenEl = new Set();
    main.querySelectorAll('section').forEach(sec => {
      if (sec.dataset.screenLabel === 'Hero' || sec.closest('[data-screen-label="Hero"]')) return;
      const inner = sec.querySelector(':scope > div:not([aria-hidden])'); if (!inner) return;
      [...inner.children].slice(0, 3).forEach((el, i) => { if (!seenEl.has(el)) { seenEl.add(el); blocks.push([el, i]); } });
    });
    const vh = window.innerHeight;
    const pending = blocks.filter(([el]) => el.getBoundingClientRect().top > vh * 0.9);
    pending.forEach(([el]) => { el.style.opacity = '0'; });
    this._revIo = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, i = +el.dataset.rv || 0;
      this._revIo.unobserve(el);
      const an = el.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 480, delay: i * 90, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'backwards' });
      el.style.opacity = '';
      an.onfinish = () => an.cancel();
    }), { rootMargin: '0px 0px -12% 0px' });
    pending.forEach(([el, i]) => { el.dataset.rv = i; this._revIo.observe(el); });
  }
  riskVals(icon) {
    const s = this.state, cur = s.rCur ?? 0, added = s.rAdded || [], sw = !!s.rSwap, still = s.still;
    const T = [
      ['Usage rights', 'Usage rights were not mentioned.', 'Sets where the brand can reuse your content, and for how long.', 'Will the content be used in paid advertising, and for how long?'],
      ['Paid advertising', 'Paid advertising was not mentioned.', 'Paid use is often priced separately from an organic post.', 'Do you plan to run this content as a paid ad? If so, on which platforms and for how long?'],
      ['Exclusivity', 'Exclusivity was not mentioned.', 'Limits which other brands you can work with, and for how long.', 'Is there an exclusivity period? Which brands does it cover, and for how long?'],
      ['Revision limits', 'Revision limits were not mentioned.', 'Without a limit, revision requests can keep coming after you deliver.', 'How many rounds of revisions are included in this fee?'],
      ['Payment due date', 'Payment due date was not mentioned.', 'Gives you a date to follow up on if payment is late.', 'When will the payment be made, and how many days after the content goes live?'],
      ['Whitelisting', 'Whitelisting was not mentioned.', 'Lets the brand run ads from your account.', 'Will you need to run ads from my account? If so, for how long?'],
    ];
    const pick = i => {
      if (i === (this.state.rCur ?? 0)) return;
      if (still) { this.setState({ rCur: i }); return; }
      clearTimeout(this._rt); this.setState({ rSwap: true });
      this._rt = setTimeout(() => this.setState({ rCur: i, rSwap: false }), 130);
    };
    const seen = !!s.rSeen || still;
    const isAdded = added.includes(cur);
    const reply = 'Hi, before I confirm, a few questions:\n' + added.map(i => '• ' + T[i][3]).join('\n');
    const left = T.length - added.length;
    return {
      riskCount: left ? left + ' not mentioned' : 'All added to your reply',
      risks: T.map(([label], i) => {
        const on = i === cur, a = added.includes(i);
        return { label: label + '?', sel: on ? 'true' : 'false', pick: () => pick(i),
          bg: on ? '#111111' : a ? '#F1EDFF' : '#FFFFFF', fg: on ? '#FFFFFF' : a ? '#5A43B5' : '#B4560F',
          sh: on ? '0 6px 16px -6px rgba(17,17,17,.4)' : a ? 'inset 0 0 0 1px rgba(109,85,201,.18)' : 'inset 0 0 0 1px rgba(180,86,15,.28)',
          op: seen ? 1 : 0, tf: seen ? 'none' : 'translateY(6px) scale(.96)', d: s.rSettled ? '0ms' : (1400 + i * 60) + 'ms',
          fw: on ? 700 : 500, stC: a ? '#6D55C9' : '#B4560F', status: a ? 'Added' : 'Not mentioned',
          dotW: a ? '0px' : '6px', chkD: a ? 'block' : 'none' };
      }),
      risk: { title: T[cur][1], why: T[cur][2], q: T[cur][3] },
      riskRef: this.riskRef,
      rScanX: seen ? '260%' : '-100%', rScanOp: seen ? 0 : 1,
      rHl0: seen ? 'rgba(226,169,71,.16)' : 'rgba(226,169,71,0)', rHlLine0: seen ? '#E2A947' : 'rgba(226,169,71,0)',
      rHl1: seen ? 'rgba(226,169,71,.16)' : 'rgba(226,169,71,0)', rHlLine1: seen ? '#E2A947' : 'rgba(226,169,71,0)',
      rHl2: seen ? 'rgba(226,169,71,.16)' : 'rgba(226,169,71,0)', rHlLine2: seen ? '#E2A947' : 'rgba(226,169,71,0)',
      rFound: ['Deliverables', 'Amount', 'Go-live date'].map((label, i) => ({ label, op: seen ? 1 : 0, tf: seen ? 'none' : 'translateY(6px) scale(.96)', d: (1100 + i * 70) + 'ms' })),
      rReply: added.map(i => ({ t: T[i][3] })), rEmpty: added.length === 0,
      rSwapOp: sw ? 0 : 1, rSwapBlur: sw ? '4px' : '0px', rSwapY: sw ? '4px' : '0px',
      riskAddLabel: isAdded ? 'Added to reply' : 'Add to reply',
      riskAddBg: isAdded ? '#F1EDFF' : '#6D55C9', riskAddFg: isAdded ? '#5A43B5' : '#FFFFFF',
      riskAddIcon: icon(isAdded ? 'check' : 'plus'),
      riskAdd: () => {
        this.setState(st => { const ad = st.rAdded || [], c = st.rCur ?? 0; return { rAdded: ad.includes(c) ? ad.filter(x => x !== c) : [...ad, c] }; });
      },
      riskSkip: () => { const n = T.findIndex((_, i) => i > cur && !added.includes(i)); pick(n >= 0 ? n : (cur + 1) % T.length); },
      riskReplyLine: added.length ? added.length + (added.length === 1 ? ' question' : ' questions') + ' in your reply to GlowSkin India' : 'Your reply to GlowSkin India is empty',
      riskCopyDisabled: added.length === 0,
      riskCopyCursor: added.length ? 'pointer' : 'default',
      riskCopyFg: added.length ? '#6D55C9' : '#B4B4BA',
      riskCopyLabel: s.rCopied ? 'Copied' : 'Copy reply',
      riskCopy: () => {
        if (!added.length) return;
        try { navigator.clipboard && navigator.clipboard.writeText(reply); } catch (e) {}
        clearTimeout(this._rc); this.setState({ rCopied: true }); this._rc = setTimeout(() => this.setState({ rCopied: false }), 1600);
      },
    };
  }
  pvRef = React.createRef();
  pvToast(t) { clearTimeout(this._pvT); this.setState({ pvToast: t }); this._pvT = setTimeout(() => this.setState({ pvToast: '' }), 2200); }
  pvGo(label) {
    const k = { Home: 'home', Deals: 'deals', Payments: 'pay' }[label];
    if (k) { const cur = this.state.pv || 'home'; if (k !== cur) this.setState(st => ({ pv: k, pvSeen: [...new Set([...(st.pvSeen || []), cur, k])] })); return; }
    this.pvToast((label ? label + ' opens' : 'This opens') + ' after you sign up');
  }
  pvVals() {
    const s = this.state, cur = s.pv || 'home', seen = s.pvSeen || [], near = !!s.pvNear;
    const icon = n => `url(https://unpkg.com/lucide-static@0.460.0/icons/${n}.svg) center/contain no-repeat`;
    const T = [['home', 'Home', 'house', 'Home shows what needs you next and what is still to receive.', ''], ['deals', 'Deals', 'list', 'Deals sorts every deal by whose turn it is.', 'deals'], ['pay', 'Money', 'wallet', 'Money shows what is paid, what is due and what is late.', 'payments']];
    const idx = T.findIndex(t => t[0] === cur), out = { path: T[idx][4], caption: T[idx][3].replace(/\.$/, ''), pillX: (idx * 100) + '%', hasToast: !!s.pvToast, toast: s.pvToast };
    T.forEach(([k], i) => {
      const on = k === cur;
      Object.assign(out, {
        [k + 'Mount']: near && (on || seen.includes(k)), [k + 'Hidden']: on ? 'false' : 'true', [k + 'Pe']: on ? 'auto' : 'none',
        [k + 'Op']: on ? 1 : 0, [k + 'B']: on ? '0px' : '6px', [k + 'S']: on ? 1 : .985, [k + 'Y']: on ? '0px' : (i < idx ? '-14px' : '14px'),
        [k + 'T']: on ? 'opacity 380ms cubic-bezier(.23,1,.32,1) 60ms, filter 380ms cubic-bezier(.23,1,.32,1) 60ms, transform 460ms cubic-bezier(.23,1,.32,1) 60ms' : 'opacity 200ms ease-out, filter 200ms ease-out, transform 200ms ease-out'
      });
    });
    out.tabs = T.map(([k, label, ic]) => ({ label, mask: icon(ic), on: k === cur ? 'true' : 'false', fg: k === cur ? '#FFFFFF' : '#2E2E33',
      go: () => this.setState(st => ({ pv: k, pvSeen: [...new Set([...(st.pvSeen || []), cur, k])] })) }));
    return out;
  }
  climbRef = React.createRef();
  climbCvRef = React.createRef();
  climbStackRef = React.createRef();
  climbTiltRef = React.createRef();
  _climbCardRefs = { c0: React.createRef(), c1: React.createRef(), c2: React.createRef(), c3: React.createRef() };
  _climbS = { p: 0, fan: 0, tx: 0, ty: 0 };
  climbKick() { if (!this._climbAnim && !this.state.still) { this._climbAnim = requestAnimationFrame(t => this.climbStep(t)); } else if (this.state.still) this.climbApply(true); }
  climbStep(t) {
    this._climbAnim = 0;
    const done = this.climbApply(false);
    if (this._climbVis) this.climbDraw(t);
    if (!done || this._climbVis) this._climbAnim = requestAnimationFrame(tt => this.climbStep(tt));
  }
  climbApply(snap) {
    const S = this._climbS, P = this._climbP || 0, M = this._climbM || { x: 0, y: 0, on: 0 };
    const k = snap ? 1 : .1, kf = snap ? 1 : .12;
    S.p += (P - S.p) * k; S.fan += (M.on - S.fan) * kf; S.tx += (M.x - S.tx) * kf; S.ty += (M.y - S.ty) * kf;
    const ease = v => 1 - Math.pow(1 - v, 3), cl = (v, lo, hi) => Math.max(lo, Math.min(hi, v)), mix = (a, b, t) => a + (b - a) * t;
    const p4 = S.p * 4.2, actF = cl(p4, 0, 3), fan = S.fan;
    const tilt = this.climbTiltRef.current;
    if (tilt) tilt.style.transform = `rotateX(${(-S.ty * 10).toFixed(2)}deg) rotateY(${(S.tx * 14).toFixed(2)}deg)`;
    for (let i = 0; i < 4; i++) {
      const el = this._climbCardRefs['c' + i].current; if (!el) continue;
      const e = ease(cl((p4 - i) * 1.25 + 1, 0, 1)), d = cl(actF - i, 0, 3);
      let y = (1 - e) * 160 - d * 30, sc = 1 - d * .065, rx = (1 - e) * -28, op = e * (1 - d * .2);
      const fy = (i - actF) * 64 + (i <= actF ? 0 : 40);
      y = mix(y, e > .02 ? fy : y, fan); sc = mix(sc, .9, fan); op = mix(op, e > .02 ? e : 0, fan);
      el.style.transform = `translate3d(0,${y.toFixed(1)}px,${(-d * 40 + fan * i * 18).toFixed(1)}px) rotateX(${rx.toFixed(2)}deg) scale(${sc.toFixed(4)})`;
      el.style.opacity = op.toFixed(3);
    }
    const act = Math.min(3, Math.floor(S.p * 4 + .12));
    if (act !== this.state.climbAct) this.setState({ climbAct: act });
    return Math.abs(P - S.p) < .0005 && Math.abs(M.on - S.fan) < .002 && Math.abs(M.x - S.tx) < .002 && Math.abs(M.y - S.ty) < .002;
  }
  climbMeasure() {
    const el = this.climbRef.current; if (!el) return;
    const r = el.getBoundingClientRect(), total = Math.max(1, el.offsetHeight - window.innerHeight);
    const p = Math.min(1, Math.max(0, -r.top / total));
    this._climbP = p; this._climbVis = r.bottom > 0 && r.top < window.innerHeight;
    this.climbKick();
    if (this.state.still) this.climbDraw(performance.now());
  }
  climbDraw(t) {
    const cv = this.climbCvRef.current; if (!cv) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1), W = cv.clientWidth, H = cv.clientHeight;
    if (!W || !H) return;
    if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); }
    const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
    const p = this.state.still ? (this._climbP || 0) : this._climbS.p, ox = W * (W < 760 ? .5 : .7), oy = H * 1.04, R = Math.hypot(W, H) * .62;
    const glow = g.createRadialGradient(ox, oy, 0, ox, oy, R * (.55 + .35 * p));
    glow.addColorStop(0, 'rgba(226,169,71,.55)'); glow.addColorStop(.35, 'rgba(109,85,201,.28)'); glow.addColorStop(1, 'rgba(18,12,34,0)');
    g.fillStyle = glow; g.fillRect(0, 0, W, H);
    if (!this._rays) { let s = 7; const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647; this._rays = Array.from({ length: 190 }, () => ({ a: Math.PI * (1.04 + rnd() * .92), l: .25 + rnd() * .75, w: rnd(), ph: rnd() * 6.28 })); }
    const grow = .3 + .7 * p, tt = t / 1000;
    for (const ray of this._rays) {
      const len = R * ray.l * grow * (1 + .035 * Math.sin(tt * .8 + ray.ph));
      const ex = ox + Math.cos(ray.a) * len, ey = oy + Math.sin(ray.a) * len;
      const lg = g.createLinearGradient(ox, oy, ex, ey);
      lg.addColorStop(0, 'rgba(255,214,140,.0)'); lg.addColorStop(.25, 'rgba(232,184,96,.30)'); lg.addColorStop(1, ray.w > .7 ? 'rgba(229,221,251,.85)' : 'rgba(226,169,71,.55)');
      g.strokeStyle = lg; g.lineWidth = ray.w > .85 ? 1.2 : .7;
      g.beginPath(); g.moveTo(ox, oy); g.lineTo(ex, ey); g.stroke();
      if (ray.w > .45) { g.fillStyle = ray.w > .8 ? '#E5DDFB' : '#E2A947'; g.beginPath(); g.arc(ex, ey, ray.w > .8 ? 2.2 : 1.4, 0, 6.283); g.fill(); }
    }
  }
  climbGo(i) {
    const el = this.climbRef.current; if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY, total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + total * ((i + .5) / 4), behavior: this.state.still ? 'auto' : 'smooth' });
  }
  climbVals() {
    const s = this.state, act = s.climbAct ?? 0, n = s.climbN ?? 1, hov = s.climbHov ?? -1, still = s.still;
    const D = [
      ['PASTE', 'Paste the message', 'Drop in the DM, WhatsApp or email. StatGC pulls out the brand, deliverables, amount and dates.'],
      ['CHECK', 'Check the terms', 'Anything missing is named before you send, like usage rights or a payment date.'],
      ['SEND', 'Send the link', 'The brand reads the terms and confirms in the browser. No account, no app.'],
      ['PAID', 'Track it to paid', 'Every step is timestamped. Reminders quote what was agreed, so you get paid on time.']
    ];
    const one = s.vw === 'm' || (typeof window !== 'undefined' && window.innerWidth < 840);
    const scale = s.vw === 'm' ? .52 : one ? .6 : s.vw === 't' ? .8 : 1;
    return {
      climbRef: this.climbRef,
      climbTextH: one ? '190px' : 'clamp(260px,38vh,360px)', climbStageH: one ? '300px' : 'clamp(380px,60vh,560px)',
      climbMt: one ? '40px' : '120px', climbPad: one ? '72px 20px 16px' : 'clamp(88px,12vh,128px) 24px 40px', climbGap: one ? '8px' : '24px 40px',
      climbCanvas: this._climbEl || (this._climbEl = React.createElement('canvas', { ref: this.climbCvRef, style: { position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' } })),
      climbScale: scale,
      climbHint: act === 3 ? 'Draft to paid' : 'Scroll to climb', climbHintOp: 1,
      climbLeave: () => this.setState({ climbHov: -1 }),
      climbTexts: D.map(([w, title, body], i) => {
        const on = i === act;
        return { n: String(i + 1).padStart(2, '0'), title, body, hidden: on ? 'false' : 'true',
          op: on ? 1 : 0, blur: on ? '0px' : '8px', y: on ? '0px' : (i < act ? '-18px' : '18px') };
      }),
      climbTicks: D.map(([w, title], i) => ({ label: 'Step ' + (i + 1) + ': ' + title, go: () => this.climbGo(i),
        w: i === act ? '40px' : '14px', bg: i <= act ? '#E2A947' : 'rgba(255,255,255,.22)' })),
      climbStackRef: this.climbStackRef, climbTiltRef: this.climbTiltRef,
      climbCards: this._climbCardRefs,
      climbMove: e => { const el = this.climbStackRef.current; if (!el) return; const r = el.getBoundingClientRect(); this._climbM = { x: (e.clientX - r.left) / r.width - .5, y: (e.clientY - r.top) / r.height - .5, on: 1 }; this.climbKick(); },
      climbLeave: () => { this._climbM = { x: 0, y: 0, on: 0 }; this.climbKick(); }
    };
  }
  howVals(icon) {
    const act = this.state.how ?? 0, paused = this.state.howPaused, still = this.state.still;
    const steps = [
      { n: '01', mask: icon('clipboard-paste'), title: 'Paste the DM or email', body: 'StatGC pulls the brand, deliverables, amount and dates into a draft.' },
      { n: '02', mask: icon('file-pen-line'), title: 'Check the terms', body: 'Anything missing is named before you send, like “Add payment due date to send.”' },
      { n: '03', mask: icon('send'), title: 'Send a confirmation link', body: 'The brand reads the terms and confirms in the browser. No account needed.' },
      { n: '04', mask: icon('circle-check'), title: 'Track it to paid', body: 'Each deal shows whose turn it is and the next date. Reminders quote the agreed term.' }
    ];
    const names = ['Draft', 'Sent to brand', 'Confirmed', 'In progress', 'Submitted', 'Revision', 'Approved', 'Payment due', 'Paid'];
    const reach = [0, 0, 2, 7][act];
    const next = () => this.setState(s => ({ how: ((s.how ?? 0) + 1) % 4 }));
    return {
      how0: act === 0, how1: act === 1, how2: act === 2, how3: act === 3,
      howPause: () => this.setState({ howPaused: true }),
      howResume: () => this.setState({ howPaused: false }),
      howStageLabel: names[reach],
      howCursor: still ? null : (() => {
        const h = React.createElement, tips = ['Paste', 'Add due date', 'Copy link', 'Send'];
        const run = n => `${n} 6s cubic-bezier(.45,0,.25,1) both`;
        const ps = paused ? 'paused' : 'running';
        return h('div', { key: 'cur' + act, 'aria-hidden': true, style: { position: 'absolute', zIndex: 5, width: 0, height: 0, pointerEvents: 'none', animation: run('asCur' + act), animationPlayState: ps } },
          h('span', { style: { position: 'absolute', left: -14, top: -14, width: 28, height: 28, borderRadius: 999, background: 'rgba(109,85,201,.35)', animation: run('asRip' + act), animationPlayState: ps } }),
          h('svg', { width: 20, height: 22, viewBox: '0 0 14 20', style: { position: 'absolute', left: -2, top: -1, overflow: 'visible', filter: 'drop-shadow(0 2px 3px rgba(17,17,17,.25))' } },
            h('path', { d: 'M1,1 L1,16 L5,12.3 L7.8,18.6 L10.4,17.5 L7.7,11.3 L13,11.3 Z', fill: '#111111', stroke: '#FFFFFF', strokeWidth: 1.4, strokeLinejoin: 'round' })),
          h('span', { style: { position: 'absolute', left: 16, top: 18, whiteSpace: 'nowrap', height: 24, padding: '0 9px', borderRadius: 8, background: '#111111', color: '#FFFFFF', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', animation: run('asTip' + act), animationPlayState: ps } }, tips[act]));
      })(),
      howBars: names.map((label, i) => ({ label, bg: i < reach ? '#6D55C9' : i === reach ? '#E2A947' : '#E4E4E8', delay: (i * 40) + 'ms' })),
      howSteps: steps.map((s, i) => {
        const on = i === act;
        return { ...s, pressed: on ? 'true' : 'false', select: () => this.setState({ how: i }),
          bg: on ? '#F2F3F5' : 'transparent', iconBg: on ? '#6D55C9' : '#F2F3F5', iconFg: on ? '#FFFFFF' : '#5E5E66',
          nColor: on ? '#6D55C9' : '#86868E', titleColor: on ? '#111111' : '#5E5E66', rows: on ? '1fr' : '0fr',
          bar: on ? React.createElement('span', { key: 'bar' + act, onAnimationEnd: next, style: { display: 'block', height: '100%', background: '#6D55C9', transformOrigin: 'left', transform: still ? 'scaleX(1)' : undefined, animation: still ? 'none' : 'asFill 6s linear both', animationPlayState: paused ? 'paused' : 'running' } }) : null };
      }),
    };
  }
  featureCards(icon) {
    const { vw, hov, open } = this.state;
    const data = [
      ['Turns brand messages into clear deals', 'Creators can paste an Instagram DM, WhatsApp message or email and organise it into structured terms such as deliverables, payment, deadlines and revisions.'],
      ['Finds missing or unclear terms', 'It highlights details that were not agreed, such as usage rights, exclusivity, payment due dates or revision limits.'],
      ['Lets brands confirm deals through a link', 'Creators can send a shareable link where the brand reviews the terms and confirms, requests changes or declines—without creating an account.'],
      ['Tracks content, revisions and approvals', 'Creators can submit deliverables, manage versions, receive revision requests and keep track of which work the brand approved.'],
      ['Tracks payment and preserves evidence', 'StatGC shows money due, overdue payments and payment history while keeping a timestamped record of terms, messages, submissions, approvals and payment updates.'],
    ];
    const spans = vw === 'm' ? [6, 6, 6, 6, 6] : vw === 't' ? [6, 3, 3, 3, 3] : [4, 2, 2, 2, 2];
    const washes = ['radial-gradient(120% 90% at 100% 100%, #F6DDB0 0%, #FFF6E6 40%, rgba(255,255,255,0) 70%)', 'radial-gradient(110% 80% at 100% 0%, #F8E3BC 0%, rgba(255,255,255,0) 65%)', 'radial-gradient(110% 80% at 0% 100%, #F8E3BC 0%, rgba(255,255,255,0) 65%)', 'radial-gradient(110% 80% at 50% 110%, #E8E1FB 0%, rgba(255,255,255,0) 65%)', 'radial-gradient(110% 80% at 100% 100%, #F6DDB0 0%, rgba(255,255,255,0) 65%)'];
    const out = {};
    data.forEach(([title, body], i) => {
      const k = 'k' + (i + 1), h = hov === k, o = open === k;
      out[k] = {
        n: '0' + (i + 1), title, body, open: o ? 'true' : 'false',
        span: 'span ' + spans[i], minH: i === 0 || i === 1 ? '440px' : '400px',
        shadow: h ? '0 16px 40px rgba(17,17,17,.08)' : '0 1px 2px rgba(17,17,17,.04)',
        lift: h && !this.state.still ? 'translateY(-4px)' : 'none',
        wash: washes[i], washOp: h || o ? 1 : 0.45,
        visT: h && !this.state.still ? 'translateY(-8px) scale(1.03)' : 'none',
        panelT: o ? 'translateY(0)' : 'translateY(101%)',
        btnBg: h || o ? '#6D55C9' : '#F1EDFF', btnFg: h || o ? '#FFFFFF' : '#6D55C9',
        btnIcon: icon('plus'), ttlOp: o ? 0 : 1, btnRot: o ? 'rotate(45deg)' : 'none',
        enter: () => this.setState({ hov: k }),
        leave: () => this.setState(s => s.hov === k ? { hov: null } : null),
        toggle: () => this.setState(s => ({ open: s.open === k ? null : k })),
      };
    });
    return out;
  }
  ribbons(layer) {
    const h = React.createElement, { vw, still } = this.state;
    if (layer === 'over') return null;
    const B = [
      { id: 'mint', blur: 50, op: .4, anim: 'asDriftC', dur: 47, delay: -11, d: ['M120,-150 C340,200 520,560 1150,960 L1150,1100 C480,700 260,300 -80,-150 Z'], g: [[0,'#FFF8EC',0],[.5,'#F8E3BC',1],[1,'#F3D29A',.6]] },
      { id: 'haze', blur: 40, op: .6, anim: 'asDriftB', dur: 37, delay: -5, d: ['M250,-150 C460,180 640,500 1150,820 L1150,1150 C700,800 480,420 60,-150 Z'], g: [[0,'#FFF6E6',0],[.4,'#F6DDB0',.9],[1,'#E8B860',.6]] },
      { id: 'deep', blur: 22, op: .75, anim: 'asDriftC', dur: 53, delay: -19, d: ['M760,-150 C820,180 920,470 1150,520 L1150,1150 C930,900 700,340 600,-150 Z', 'M780,-150 C800,220 950,440 1150,480 L1150,1150 C900,880 720,300 620,-150 Z'], md: 43, g: [[0,'#6D55C9',.15],[.4,'#6D55C9',1],[1,'#261A5C',1]] },
      { id: 'main', blur: 14, op: .92, anim: 'asDriftA', dur: 31, delay: -8, d: ['M400,-150 C540,180 700,430 1150,660 L1150,940 C760,680 560,380 240,-150 Z', 'M430,-150 C520,220 760,400 1150,620 L1150,900 C720,700 600,330 270,-150 Z'], md: 41, g: [[0,'#FFF6E6',0],[.18,'#F6DDB0',1],[.45,'#E2A947',1],[.75,'#6D55C9',1],[1,'#4A35A8',1]], shift: 29 },
      { id: 'teal', blur: 8, op: .7, anim: 'asDriftB', dur: 23, delay: -3, d: ['M520,-150 C640,150 800,380 1150,540 L1150,640 C790,470 620,240 450,-150 Z', 'M540,-150 C620,190 830,350 1150,500 L1150,600 C800,450 600,280 470,-150 Z'], md: 33, g: [[0,'#FBEFD8',0],[.3,'#EEC77E',1],[.7,'#D9963F',1],[1,'#9A6A12',1]] },
      { id: 'sheen', blur: 4, op: .85, anim: 'asDriftA', dur: 31, delay: -8, d: ['M380,-150 C520,190 690,450 1150,690 L1150,715 C680,480 500,215 350,-150 Z', 'M410,-150 C500,230 750,420 1150,650 L1150,675 C740,450 480,255 380,-150 Z'], md: 41, g: [[0,'#FFFFFF',0],[.4,'#FFFFFF',1],[1,'#FFFFFF',.15]] },
      { id: 'sheen2', blur: 3, op: .6, anim: 'asDriftB', dur: 23, delay: -3, d: ['M600,-150 C700,170 860,400 1150,560 L1150,575 C850,415 690,190 585,-150 Z', 'M615,-150 C690,210 880,370 1150,520 L1150,535 C870,385 680,230 600,-150 Z'], md: 33, g: [[0,'#FFFFFF',0],[.5,'#FFFAF0',1],[1,'#FFFFFF',.1]] },
    ];
    const keep = vw === 'm' ? ['haze', 'main', 'sheen'] : vw === 't' ? ['haze', 'deep', 'main', 'teal', 'sheen'] : null;
    const bands = keep ? B.filter(b => keep.includes(b.id)) : B;
    const blurK = vw === 'm' ? .45 : vw === 't' ? .7 : 1;
    const box = vw === 'm' ? { left: '-30%', right: '-45%', top: '-8%', bottom: '25%' } : vw === 't' ? { left: '-10%', right: '-30%', top: '-12%', bottom: '-10%' } : { left: '-4%', right: '-24%', top: '-16%', bottom: '-14%' };
    const spline = { calcMode: 'spline', keyTimes: '0;0.5;1', keySplines: '0.45 0 0.55 1;0.45 0 0.55 1', repeatCount: 'indefinite' };
    const kids = bands.map(b => {
      const gid = 'as-' + layer + '-' + b.id;
      const animName = vw === 'd' ? b.anim : 'asDriftSoft';
      const pathKids = [];
      const gradKids = b.g.map((s, i) => h('stop', { key: i, offset: s[0], stopColor: s[1], stopOpacity: s[2] }));
      return h('div', { key: b.id, style: { position: 'absolute', inset: 0, opacity: b.op, transformOrigin: '70% 25%', willChange: still ? 'auto' : 'transform', transform: 'translateZ(0)', animation: still ? 'none' : `${animName} ${b.dur}s ease-in-out ${b.delay}s infinite alternate` } },
        h('svg', { viewBox: '0 0 1000 1000', preserveAspectRatio: 'none', style: { position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible', filter: `blur(${(b.blur * blurK).toFixed(1)}px)` } },
          h('defs', null, h('linearGradient', { id: gid, x1: 0, y1: 0, x2: 1, y2: 1 }, gradKids)),
          h('path', { d: b.d[0], fill: `url(#${gid})` }, pathKids)));
    });
    const outer = { position: 'absolute', inset: 0 };
    if (layer === 'over') Object.assign(outer, { maskImage: this.state.clip, WebkitMaskImage: this.state.clip, opacity: .5 });
    return h('div', { style: outer }, h('div', { style: { position: 'absolute', ...box } }, kids));
  }
  homeVals(icon) {
    const red = '#B42318', orange = '#B4560F';
    const chip = {
      overdue: ['Payment overdue', '#FDE8E8', '#B42318'], revision: ['Revision requested', '#FFF0E3', '#9A4A0C'],
      sent: ['Sent to brand', '#EEF2FF', '#2F45C4'], wip: ['In progress', '#EBECEF', '#2E2E33'], draft: ['Draft', '#EBECEF', '#2E2E33'],
      submitted: ['Submitted', '#EEF2FF', '#2F45C4'], due: ['Payment due', '#FFF0E3', '#9A4A0C']
    };
    const d = (ini, brand, title, amount, st, status, sc, action, date, mine) => ({ ini, brand, title, amount, status, sc, action, date,
      stage: chip[st][0], chipBg: chip[st][1], chipFg: chip[st][2], next: action, aw: mine ? 700 : 500, ac: mine ? '#5A43B5' : '#5E5E66' });
    const needs = [
      d('HC', 'Hearth Coffee', 'Café menu Reels', '₹ 25,000', 'overdue', 'Payment overdue by 5 days', red, 'Send payment reminder', 'Due 28 Mar', 1),
      d('KL', 'Kora Living', 'Monsoon home edit', '₹ 18,000', 'revision', 'Brand requested a revision on Reel 1', orange, 'Submit revision', 'Asked 01 Apr', 1),
      d('GI', 'GlowSkin India', 'Vitamin C serum launch', '₹ 25,000', 'sent', 'Link expires today at 18:00', orange, 'Send reminder to GlowSkin India', 'Sent 27 Mar', 1),
      d('TS', 'Tara Studio', 'Festive kurta drop', '₹ 22,000', 'wip', 'Reel 1 due tomorrow', orange, 'Submit work', 'Due 03 Apr', 1),
      d('MN', 'Mitti Naturals', 'Clay mask review', '₹ 15,000', 'draft', 'Add payment due date to send', orange, 'Complete terms', 'Created 01 Apr', 1)
    ];
    const waiting = [
      d('VW', 'Veda Wellness', 'Ashwagandha Story set', '₹ 12,000', 'due', 'Waiting for payment · due in 5 days', '', 'Wait for payment', 'Due 07 Apr', 0),
      d('NF', 'Nila Foods', 'Millet snacks unboxing', '₹ 15,000', 'submitted', 'Waiting for Nila Foods to review Reel 1', '', 'Wait for approval', 'Submitted 29 Mar', 0),
      d('LS', 'Lumen Skincare', 'Everyday sunscreen', '₹ 30,000', 'sent', 'Waiting for Lumen Skincare to confirm terms', '', 'Wait for confirmation', 'Sent 31 Mar', 0)
    ];
    const tabs = [['home','house','Home'],['deals','list','Deals'],['payments','wallet','Payments'],['settings','settings','Settings']]
      .map(([id, ic, l]) => ({ label: l, mask: icon(ic), fg: id === 'home' ? '#111111' : '#5E5E66', fw: id === 'home' ? 700 : 500, badge: id === 'deals' ? 'flex' : 'none' }));
    const n = (t, items) => ({ t, items: items.map((x, i) => ({ n: String(i + 1).padStart(2, '0'), t: x })) });
    return {
      homeNav: [['Home','house',1,''],['Deals','list',0,'5'],['Templates','copy',0,''],['Payments','wallet',0,''],['Settings','settings',0,'']]
        .map(([l, ic, on, c]) => ({ label: l, mask: icon(ic), bg: on ? '#111111' : 'transparent', fg: on ? '#FFFFFF' : '#2E2E33', fw: on ? 700 : 500, count: c })),
      homeNeeds: needs, homeWaiting: waiting, homeAll: [...needs, ...waiting],
      homePay: [
        { label: 'Overdue', c: red, amount: '₹ 25,000', detail: 'Hearth Coffee · was due 28 Mar' },
        { label: 'Due in the next 7 days', c: '#2E2E33', amount: '₹ 12,000', detail: 'Veda Wellness · due 07 Apr' },
        { label: 'Received this month', c: '#3E7420', amount: '₹ 18,000', detail: 'Saffron Tea · marked paid 01 Apr' }
      ],
      homeTabsL: tabs.slice(0, 2), homeTabsR: tabs.slice(2),
      homeSkel: [{ w: '45%' }, { w: '55%' }, { w: '40%' }, { w: '50%' }],
      firstGuide: [
        { t: 'Terms added from the message', mask: icon('circle-check'), c: '#3E7420', tc: '#2E2E33', w: 500 },
        { t: 'Add payment due date', mask: icon('circle-alert'), c: '#B4560F', tc: '#111111', w: 700 },
        { t: 'Send the link to Mitti Naturals', mask: icon('circle-dashed'), c: '#B4B4BA', tc: '#5E5E66', w: 500 },
        { t: 'Mitti Naturals confirms the terms', mask: icon('circle-dashed'), c: '#B4B4BA', tc: '#5E5E66', w: 500 }
      ],
      homeRules: [
        n('Section order and visibility', [
          'Greeting, then the summary, Needs you today, Waiting for brands, Payments, All active deals.',
          'A section with no deals is hidden. If nothing needs the creator, Needs you today shows one line: "Nothing needs you today."',
          'Payments only shows once a brand has confirmed a deal. Received this month only shows if something was marked paid this month.',
          'The summary counts only confirmed deals as "still to receive". Drafts and sent deals are counted in "active deals" only.'
        ]),
        n('Sorting', [
          'Needs you today: payment overdue, then revision requested, link expiring within 24h, work due within 3 days, draft missing terms, expired link. Ties go to the earliest date, then the larger amount.',
          'Waiting for brands: longest wait first, so the creator sees who to nudge.',
          'All active deals: same urgency order, then by next date. Closed deals live in Deals.',
          'A deal appears in Needs you or Waiting, never both. All active deals is the complete list.'
        ]),
        n('Deal row behaviour', [
          'Row: brand, deal title, status sentence (who, what, when), amount, date. The stage is never shown by colour alone.',
          'Mobile: the whole row is one 56px+ target. It opens the deal at the related section, with that action as the sticky primary.',
          'Desktop: the row is a link, and the action is a secondary button that opens its sheet over Home. When the action is done, the row moves or leaves, with a Toast.',
          'Long brand names wrap to 2 lines. Amounts and dates never wrap. Waiting rows have no inline action.'
        ]),
        n('One dominant Create deal', [
          'Create deal is the only emerald element on Home: the FAB on mobile, the sidebar button on desktop.',
          'Row actions are grey secondary buttons (desktop) or emerald-700 text (mobile). There is no Next action card on Home.',
          'Exceptions: the new-creator card (E1) holds the emerald action because nothing else exists yet.',
          'Filters and search only filter All active deals. The summary and the sections above it never change.'
        ])
      ]
    };
  }
  sceneRef = React.createRef();
  bgCv = React.createRef();
  hAps = [
    { n: 'Nova Audio', team: '2 Reels + 1 Story', by: 'due today', amt: 48000 },
    { n: 'GlowSkin India', team: 'Serum launch Reel', by: 'due 28 Nov', amt: 25000 },
    { n: 'Kora Living', team: 'Home tour video', by: 'due 3 Dec', amt: 40000 }
  ];
  heroTheme() {
    const obs = (this.props.heroPalette ?? 'StatGC gold') === 'Observatory';
    const T = obs
      ? { bg: '#05070D', surf: '#0B1220', acc: '#34D399', acc2: '#60A5FA', pos: '#34D399', warn: '#F59E0B', ctaInk: '#04140D', accSh: 'rgba(52,211,153,.45)', gridC: 'rgba(96,165,250,.11)', rA: [52, 211, 153], rB: [96, 165, 250],
          glow: 'radial-gradient(900px 620px at 72% 44%,rgba(96,165,250,.16),rgba(96,165,250,0) 70%),radial-gradient(620px 420px at 86% 86%,rgba(52,211,153,.10),rgba(52,211,153,0) 70%),radial-gradient(760px 520px at 0% 0%,rgba(49,46,129,.38),rgba(49,46,129,0) 70%),#05070D' }
      : { bg: '#07060F', surf: '#100E1F', acc: '#F0BE5E', acc2: '#A48EEA', pos: '#46DBA5', warn: '#F28A4B', ctaInk: '#1A1433', accSh: 'rgba(240,190,94,.45)', gridC: 'rgba(240,190,94,.10)', rA: [240, 190, 94], rB: [164, 142, 234],
          glow: 'radial-gradient(900px 620px at 72% 44%,rgba(126,101,214,.24),rgba(126,101,214,0) 70%),radial-gradient(620px 420px at 86% 86%,rgba(240,190,94,.11),rgba(240,190,94,0) 70%),radial-gradient(760px 520px at 0% 0%,rgba(42,40,112,.40),rgba(42,40,112,0) 70%),#07060F' };
    T.glass = obs ? 'rgba(11,18,32,.66)' : 'rgba(18,16,36,.66)';
    T.glassHi = obs ? 'rgba(14,22,40,.78)' : 'rgba(22,20,44,.80)';
    T.warnB = obs ? 'rgba(245,158,11,.38)' : 'rgba(242,138,75,.40)'; T.warnBg = obs ? 'rgba(245,158,11,.14)' : 'rgba(242,138,75,.14)';
    return T;
  }
  heroVals() {
    const S = this.state, T = this.heroTheme(); this._hT = T;
    const vw = S.vw, d = vw === 'd', mob = vw === 'm', ph = S.hPh ?? 0, inn = !!S.hIn, still = S.still;
    const IC = n => `url(https://unpkg.com/lucide-static@0.460.0/icons/${n}.svg) center/contain no-repeat`;
    const hl = { cols: d ? 'minmax(0,.8fr) minmax(0,1.2fr)' : 'minmax(0,1fr)', gap: d ? '48px' : '48px', al: d ? 'flex-start' : 'center', ta: d ? 'left' : 'center',
      h1: mob ? '46px' : 'clamp(56px,5.6vw,88px)', pad: mob ? '40px 16px 56px' : d ? '56px 32px 72px' : '56px 24px 72px',
      sat: d, tabs: !mob, sceneH: d ? '620px' : 'auto', mainPos: d ? 'absolute' : 'relative', mainT: d ? '84px' : 'auto', mainL: d ? '6%' : 'auto', mainR: d ? '13%' : 'auto',
      tilt: d ? 'translate3d(calc(var(--px) * 12px), calc(var(--py) * 9px), 0) rotateY(calc(var(--px) * -3deg - 7deg)) rotateX(calc(var(--py) * 2deg + 5deg))' : 'translate3d(0, calc(var(--py) * -14px), 0) rotateX(calc(var(--py) * 4deg))',
      dPad: mob ? '14px' : '18px', kpiN: mob ? 2 : 3, kpiFs: mob ? '24px' : '26px', viewH: mob ? '200px' : '236px' };
    const rv = { op: inn ? 1 : 0, tf: inn ? 'none' : 'translateY(14px)', wt: inn ? 'none' : 'translateY(.5em)', st: inn ? 'none' : 'translateY(36px)' };
    const auto = ph >= 3 && ph < 5, recal = ph >= 4 && ph < 5, alertOn = ph >= 2 && ph < 5, drawn = !!S.hDrawn;
    const user = S.hUser || [], isDone = i => user.includes(i) || (i === 0 && auto); const a0 = isDone(0);
    const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
    const apAmt = this.hAps.reduce((s, a, i) => s + (isDone(i) ? a.amt : 0), 0), pend = this.hAps.filter((_, i) => !isDone(i)).length;
    const owed = 2.43 - apAmt / 1e5, got = 1.82 + apAmt / 1e5, counted = !!S.hCounted;
    const kpis = [
      { key: 'owed', to: owed, l: 'Total owed', v: counted ? '₹' + owed.toFixed(2) + 'L' : '₹0.00L', sub: 'Across 4 brands', sc: '#A9ADBF', dp: 2 },
      { key: 'got', to: got, l: 'Received this month', v: counted ? '₹' + got.toFixed(2) + 'L' : '₹0.00L', sub: '+18% vs October', sc: T.pos, dp: 2 },
      { key: 'pend', to: pend, l: 'Payments due', v: counted ? String(pend) : '0', sub: pend ? '1 overdue' : 'All paid', sc: pend ? T.warn : T.pos }
    ].filter(k => !mob || k.key !== 'got');
    this._hKpis = kpis;
    const hist = [0.62, 0.7, 0.66, 0.84, 0.9, 1.05, 0.98, 1.2, 1.32, 1.4, 1.55, got];
    const X = i => +(30 + i * (566 / 14)).toFixed(1), Y = v => +(170 - v / 3 * 150).toFixed(1);
    const line = hist.map((v, i) => (i ? 'L' : 'M') + X(i) + ' ' + Y(v)).join(' ');
    const slope = recal ? .3 : .15, fc = [0, 1, 2, 3].map(k => (k ? 'L' : 'M') + X(11 + k) + ' ' + Y(Math.min(3, got + slope * k))).join(' ');
    const mo = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
    const ch = { line, area: line + ` L${X(11)} 170 L${X(0)} 170 Z`, fc, fcCss: `path('${fc}')`, off: drawn ? 0 : 1, areaOp: drawn ? .12 : 0, flowOp: drawn && !still ? .9 : 0,
      cx: X(11), cy: Y(got), grid: [0, 1, 2, 3].map(g => ({ y: Y(g), ty: Y(g) - 5, l: g ? '₹' + g + 'L' : '' })), months: mo.map((l, i) => ({ l, x: X(i) })).filter((_, i) => i % 2 === 1),
      fcLabel: recal ? 'GlowSkin confirmed · forecast +₹0.9L by Feb' : 'Forecast from confirmed deals · +₹0.45L by Feb', fcC: recal ? T.pos : '#A9ADBF' };
    const view = mob ? 'cash' : (S.hView || 'cash'), V = k => ({ op: view === k ? 1 : 0, tf: view === k ? 'none' : 'translateY(8px) scale(.99)', pe: view === k ? 'auto' : 'none', hid: view !== k });
    const vc = V('cash'), vb = V('bud'), va = V('ap');
    const vwv = { cashOp: vc.op, cashTf: vc.tf, cashPe: vc.pe, cashHid: vc.hid, budOp: vb.op, budTf: vb.tf, budPe: vb.pe, budHid: vb.hid, apOp: va.op, apTf: va.tf, apPe: va.pe, apHid: va.hid };
    const tabs = [['cash', 'Earnings'], ['bud', 'Brands'], ['ap', 'Payments due']].map(([k, l]) => ({ l, on: view === k, c: view === k ? '#F3F4F8' : '#A9ADBF', go: () => this.setState({ hView: k }) }));
    const bars = [['GlowSkin India', 100, '6 deals'], ['Nova Audio', a0 ? 100 : 67, '3 deals'], ['Kora Living', 100, '2 deals'], ['Hearth Coffee', 50, '2 deals'], ['Kettle & Co.', 100, '1 deal']].map(([l, p, n], i) => ({ l: l + ' · ' + n, v: p + '% on time', w: (drawn && view === 'bud' ? p : 0) + '%', fill: p < 60 ? T.warn : i % 2 ? T.acc2 : T.acc, c: p < 60 ? T.warn : '#A9ADBF', d: (i * 80) + 'ms' }));
    const aps = this.hAps.map((a, i) => { const dn = isDone(i); return { n: a.n, meta: a.team + ' · ' + a.by, amt: inr(a.amt), done: dn, btn: dn ? 'Received' : 'Mark received', bg: dn ? 'rgba(70,219,165,.14)' : T.acc, fg: dn ? T.pos : T.ctaInk, go: () => this.heroApprove(i) }; });
    const sat = { alOp: alertOn ? 1 : 0, alTf: alertOn ? 'none' : 'translateY(10px) scale(.96)',
      ringDash: (drawn ? (recal || a0 ? 92 : 86) : 0) + ' 100', ringPct: (recal || a0 ? 92 : 86) + '%', ringC: recal || a0 ? T.pos : T.acc, ringSub: recal || a0 ? 'Up after Nova Audio paid' : '1 brand paying late', ringSubC: recal || a0 ? T.pos : T.warn,
      apName: this.hAps[0].team, apAmt: inr(this.hAps[0].amt), pendOp: a0 ? 0 : 1, okOp: a0 ? 1 : 0, apDone: a0, btn: a0 ? 'Received' : 'Mark received', btnBg: a0 ? 'rgba(70,219,165,.14)' : T.acc, btnFg: a0 ? T.pos : T.ctaInk,
      apB: a0 ? 'rgba(70,219,165,.45)' : 'rgba(255,255,255,.10)', approve: () => this.heroApprove(0) };
    const hot = !!S.hPulse;
    const N = [['Brands', 26, 22, 'start', 38, 18], ['Deals', 26, 98, 'start', 38, 112], ['Bank', 214, 22, 'end', 202, 18], ['Reminders', 214, 98, 'end', 202, 112]];
    const net = { edges: N.map(([, x, y], i) => ({ x, y, c: hot && (i === 2 || i === 3) ? T.pos : 'rgba(255,255,255,.14)' })),
      nodes: N.map(([l, x, y, anc, tx, ty], i) => ({ l, x, y, anc, tx, ty, c: hot && (i === 2 || i === 3) ? T.pos : i % 2 ? T.acc2 : T.acc })),
      pulse: React.createElement('g', { key: 'pg', ref: this._pulseG || (this._pulseG = React.createRef()) },
        React.createElement('circle', { r: 4, fill: T.pos, opacity: 0, style: { filter: `drop-shadow(0 0 6px ${T.pos})` } },
          React.createElement('animateMotion', { begin: 'indefinite', dur: '1.1s', path: 'M214 98 L120 60 L214 22', fill: 'remove', calcMode: 'spline', keyTimes: '0;1', keySplines: '.4 0 .2 1' }),
          React.createElement('animate', { attributeName: 'opacity', begin: 'indefinite', dur: '1.1s', values: '0;1;1;0', keyTimes: '0;.1;.85;1', fill: 'remove' }))) };
    const tx = [['GlowSkin India', '₹25,000', 'Serum Reel', 'Received'], ['Hearth Coffee', '₹18,000', 'Café menu Reels', 'Overdue'], ['Nova Audio', '$600', 'Unboxing Story', 'Received'], ['Kora Living', '₹40,000', 'Home tour video', 'Terms confirmed']];
    const txs = tx.map(([v, amt, cat, st], i) => { const fl = st === 'Overdue';
      return { v, amt, cat, st, tip: S.hTx === i, dot: fl ? T.warn : st === 'Terms confirmed' ? T.acc2 : T.pos, ac: fl ? T.warn : '#F3F4F8', bd: fl ? T.warnB : 'rgba(255,255,255,.10)',
        anim: still ? 'none' : `sgTx 8s cubic-bezier(.4,0,.6,1) ${-i * 2}s infinite`, in: () => this.setState({ hTx: i }), out: () => this.setState(s => s.hTx === i ? { hTx: null } : null) }; });
    const liveDot = React.createElement('span', { key: 'ld', style: { width: 7, height: 7, borderRadius: '50%', background: T.pos, display: 'inline-block', color: T.pos, animation: still ? 'none' : 'sgPulse 2s ease-out infinite' } });
    return { hx: T, hl, rv, ch, vw: vwv, sat, net, sceneRef: this.sceneRef, bgCv: this.bgCv,
      hs: { trust: [['Terms confirmed by brands', 'badge-check'], ['Payment reminders', 'bell-ring'], ['Every deal on record', 'file-clock'], ['INR and USD', 'wallet']].map(([l, i]) => ({ l, ic: IC(i) })),
        kpis, tabs, pillX: ({ cash: 0, bud: 100, ap: 200 })[view] + '%', bars, aps, txs, liveDot, pendLabel: pend ? pend + ' to collect' : 'All paid',
        floorAnim: still ? 'none' : 'sgFloor 7s linear infinite', flowAnim: still ? 'none' : 'sgFlow 3.6s linear infinite',
        move: e => this.heroMove(e), leave: () => this.heroMove(null), watch: () => this.heroWatch() },
      navInk: !S.navMini ? '#F3F4F8' : '#111111', navMuted: !S.navMini ? '#C4C7D6' : '#5E5E66', navHov: !S.navMini ? 'rgba(255,255,255,.10)' : '#F2F3F5', navBgOp2: 0 };
  }
  heroMove(e) {
    if (this.state.vw !== 'd' || this.state.still) return;
    const el = this.sceneRef.current, sec = this.heroRef.current; if (!el || !sec) return;
    if (e) { const b = sec.getBoundingClientRect(); this._hTx = ((e.clientX - b.left) / b.width - .5) * 2; this._hTy = ((e.clientY - b.top) / b.height - .5) * 2; } else { this._hTx = 0; this._hTy = 0; }
    if (this._hMr) return;
    const step = () => { this._hCx = (this._hCx || 0) + ((this._hTx || 0) - (this._hCx || 0)) * .12; this._hCy = (this._hCy || 0) + ((this._hTy || 0) - (this._hCy || 0)) * .12;
      el.style.setProperty('--px', this._hCx.toFixed(4)); el.style.setProperty('--py', this._hCy.toFixed(4));
      this._hMr = Math.abs(this._hTx - this._hCx) + Math.abs(this._hTy - this._hCy) > .002 ? requestAnimationFrame(step) : 0; };
    this._hMr = requestAnimationFrame(step);
  }
  heroApprove(i) {
    const u = this.state.hUser || []; if (u.includes(i)) return;
    this.setState({ hUser: [...u, i] }); this.heroPulse();
  }
  heroPulse() {
    this.setState({ hPulse: true }); clearTimeout(this._hPt); this._hPt = setTimeout(() => this.setState({ hPulse: false }), 1300);
    const g = this._pulseG && this._pulseG.current; if (g) g.querySelectorAll('animate,animateMotion').forEach(a => { try { a.beginElement(); } catch (_) {} });
    this._bgPulse = performance.now();
  }
  heroCount() {
    const root = this.heroRef.current; if (!root || this.state.still) { this.setState({ hCounted: true }); return; }
    const els = [...root.querySelectorAll('[data-kpi]')], K = this._hKpis || [], t0 = performance.now(), ms = 1700;
    const f = t => { const k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 4);
      els.forEach(el => { const kp = K.find(x => x.key === el.dataset.kpi); if (!kp) return; const v = kp.to * e; el.textContent = kp.key === 'pend' ? String(Math.round(v)) : '₹' + v.toFixed(kp.dp || 1) + 'L'; });
      if (k < 1) this._hCr = requestAnimationFrame(f); else this.setState({ hCounted: true }); };
    this._hCr = requestAnimationFrame(f);
  }
  heroLoop(first) {
    this._hTm.forEach(clearTimeout); this._hTm = [];
    const at = (ms, fn) => this._hTm.push(setTimeout(fn, ms));
    if (first) { at(60, () => this.setState({ hIn: true })); at(1500, () => { this.setState({ hPh: 1, hDrawn: true }); this.heroCount(); }); }
    else this.setState({ hPh: 1 });
    const o = first ? 0 : -1500;
    at(3500 + o, () => this.setState({ hPh: 2 }));
    at(5500 + o, () => { this.setState({ hPh: 3 }); this.heroPulse(); });
    at(7500 + o, () => this.setState({ hPh: 4 }));
    at(10000 + o, () => this.setState({ hPh: 5 }));
    at(12000 + o, () => this.heroLoop(false));
  }
  heroWatch() {
    cancelAnimationFrame(this._hCr);
    this.setState({ hPh: 0, hDrawn: false, hCounted: false, hUser: [], hView: 'cash' }, () => { this._hTm = this._hTm || []; this.heroLoop(true); });
  }
  heroStart() {
    this._hTm = [];
    if (this.state.still) { this.setState({ hIn: true, hDrawn: true, hCounted: true, hPh: 2 }); }
    else this.heroLoop(true);
    this.heroBg();
    this._hScroll = () => { if (this.state.vw === 'd' || this.state.still) return; const el = this.sceneRef.current; if (!el) return; const y = Math.max(-1, Math.min(1, (window.scrollY || 0) / 400)); el.style.setProperty('--py', y.toFixed(3)); };
    window.addEventListener('scroll', this._hScroll, { passive: true });
    this.heroStop = () => { this._hTm.forEach(clearTimeout); cancelAnimationFrame(this._hCr); cancelAnimationFrame(this._hMr); clearTimeout(this._hPt); this._hBgStop && this._hBgStop(); window.removeEventListener('scroll', this._hScroll); };
  }
  heroBg() {
    const cv = this.bgCv.current, sec = this.heroRef.current; if (!cv || !sec) return;
    const ctx = cv.getContext('2d'), still = this.state.still;
    let W = 0, H = 0, dpr = 1, pts = [], vis = true, raf = 0, last = 0;
    const seed = (() => { let s = 11; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
    const size = () => { dpr = Math.min(1.5, window.devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr;
      const n = W < 640 ? 26 : 64; pts = Array.from({ length: n }, () => ({ x: seed() * W, y: seed() * H, vx: (seed() - .5) * .12, vy: (seed() - .5) * .08, r: .6 + seed() * 1.3, tw: seed() * 6.28 })); };
    size();
    const trails = [[0, .78, .35, .52, .7, .62, 1, .32], [0, .92, .4, .75, .62, .5, 1, .58], [0, .6, .3, .3, .66, .4, 1, .14]];
    const bez = (p, u) => { const m = 1 - u; return [m*m*m*p[0] + 3*m*m*u*p[2] + 3*m*u*u*p[4] + u*u*u*p[6], m*m*m*p[1] + 3*m*m*u*p[3] + 3*m*u*u*p[5] + u*u*u*p[7]]; };
    const draw = now => {
      const T = this._hT || { rA: [240, 190, 94], rB: [164, 142, 234] }, A = T.rA, B = T.rB;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      const ts = now * .001, pk = this._bgPulse ? Math.max(0, 1 - (now - this._bgPulse) / 1400) : 0;
      trails.forEach((p, k) => {
        const P = p.map((v, i) => v * (i % 2 ? H : W));
        ctx.lineWidth = 1; ctx.strokeStyle = `rgba(${B[0]},${B[1]},${B[2]},.07)`; ctx.beginPath();
        for (let i = 0; i <= 40; i++) { const [x, y] = bez(P, i / 40); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
        const head = ((ts * (.07 + k * .02)) + k * .33) % 1;
        for (let j = 0; j < 22; j++) { const u = head - j * .006; if (u < 0) break; const [x, y] = bez(P, u), al = (1 - j / 22) * (.5 + pk * .5);
          ctx.fillStyle = `rgba(${A[0]},${A[1]},${A[2]},${al})`; ctx.fillRect(x - 1.2, y - 1.2, 2.4, 2.4); }
      });
      for (const q of pts) { if (!still) { q.x += q.vx; q.y += q.vy; if (q.x < 0) q.x += W; if (q.x > W) q.x -= W; if (q.y < 0) q.y += H; if (q.y > H) q.y -= H; } }
      ctx.lineWidth = .6;
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) { const a = pts[i], b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx*dx + dy*dy;
        if (d2 < 12100) { ctx.strokeStyle = `rgba(${B[0]},${B[1]},${B[2]},${(.12 * (1 - d2 / 12100)).toFixed(3)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); } }
      for (const q of pts) { const al = .35 + .35 * Math.sin(ts * 1.2 + q.tw); ctx.fillStyle = `rgba(${A[0]},${A[1]},${A[2]},${al.toFixed(3)})`; ctx.fillRect(q.x - q.r / 2, q.y - q.r / 2, q.r, q.r); }
    };
    const frame = now => { raf = 0; if (!vis || document.hidden) return; if (now - last > 33) { last = now; draw(now); } raf = requestAnimationFrame(frame); };
    const ro = new ResizeObserver(() => { size(); if (still) draw(0); }); ro.observe(cv);
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis && !raf && !still) raf = requestAnimationFrame(frame); }); io.observe(sec);
    const vh = () => { if (!document.hidden && vis && !raf && !still) raf = requestAnimationFrame(frame); }; document.addEventListener('visibilitychange', vh);
    if (still) draw(0); else raf = requestAnimationFrame(frame);
    this._hBgStop = () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); document.removeEventListener('visibilitychange', vh); };
  }
  renderVals() {
    const icon = n => `url(https://unpkg.com/lucide-static@0.460.0/icons/${n}.svg) center/contain no-repeat`;
    const stages = {
      sent: { chip: 'Sent to brand', chipBg: '#EEF2FF', chipFg: '#2F45C4', sentence: 'Waiting for GlowSkin India to confirm terms.', detail: 'Sent 2 days ago · link expires 19 Mar', action: 'Send reminder', filled: 2 },
      due: { chip: 'Payment due', chipBg: '#FFF0E3', chipFg: '#B4560F', sentence: 'Payment due in 3 days.', detail: '₹ 25,000 from GlowSkin India, due 28 Mar', action: 'Send payment reminder', filled: 8 },
      paid: { chip: 'Paid', chipBg: '#3E7420', chipFg: '#FFFFFF', sentence: 'Paid ₹ 25,000 on 02 Apr 2026.', detail: 'Record saved · 9 of 9 stages', action: '', filled: 9 }
    };
    const stage = stages[this.props.heroStage ?? 'due'] || stages.due;
    const ctas = { create: 'Create your first deal', start: 'Get started free', waitlist: 'Join waitlist' };
    const stripStages = [['Draft','file-pen-line'],['Sent to brand','send'],['Confirmed','shield-check'],['In progress','circle-dashed'],['Submitted','inbox'],['Revision','rotate-ccw'],['Approved','badge-check'],['Payment due','calendar-clock'],['Paid','circle-check']];
    const cur = { sent: 1, due: 7, paid: 8 }[this.props.heroStage ?? 'due'] ?? 7;
    const lgIn = !!this.state.loginIn;
    return {
      ...this.heroVals(),
      loginMounted: !!this.state.loginMounted, closeLogin: () => this.closeLogin(),
      loginSt: { position: 'fixed', inset: 0, zIndex: 200, overflowY: 'auto', background: '#F7F6FA', opacity: lgIn ? 1 : 0, transform: lgIn ? 'none' : 'translateY(12px)', transition: lgIn ? 'opacity 280ms cubic-bezier(.23,1,.32,1), transform 280ms cubic-bezier(.23,1,.32,1)' : 'opacity 180ms ease-out, transform 180ms ease-out' },
      heroRef: this.heroRef,
      h1Ref: this.h1Ref,
      ribbonsUnder: this.ribbons('under'),
      ribbonsOver: this.ribbons('over'),
      ...this.featureCards(icon),
      ...this.howVals(icon),
      ...this.climbVals(),
      ...this.burstVals(),
      ringCv: this.ringCv, ringAnchor: this.ringAnchor,
      pv: this.pvVals(), pvRef: this.pvRef, pvNav: label => this.pvGo(label),
      ...this.riskVals(icon),
      burstCanvas: this._burstEl || (this._burstEl = React.createElement('canvas', { ref: this.burstRef, 'aria-hidden': true, style: { position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' } })),
      chevron: icon('chevron-right'),
      arrowX: this.state.ctaHover ? '3px' : '0px',
      ctaIn: () => this.setState({ ctaHover: true }),
      ctaOut: () => this.setState({ ctaHover: false }),
      ctaShine: this.state.still ? null : React.createElement('span', { 'aria-hidden': true, style: { position: 'absolute', top: 0, bottom: 0, left: 0, width: '45%', zIndex: 0, pointerEvents: 'none', background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.32) 50%, rgba(255,255,255,0) 100%)', animation: (this.state.ctaHover ? 'asShine 1.1s' : 'asShine 5s') + ' ease-in-out infinite' } }),
      heroStrip: stripStages.map(([label, ic], i) => ({ label, mask: icon(ic), color: i === cur ? '#6D55C9' : i < cur ? '#2E2E33' : '#6E6E76', weight: i === cur ? 700 : 500 })),
      stage,
      ctaLabel: ctas[this.props.cta ?? 'create'] || ctas.create,
      showBrands: this.props.showBrands ?? true,
      bars: Array.from({ length: 9 }, (_, i) => ({ bg: i < stage.filled ? '#6D55C9' : '#E4E4E8' })),
      steps: [
        { n: '01', mask: icon('clipboard-paste'), title: 'Paste the DM or email', body: 'StatGC pulls the brand, deliverables, amount and dates into a draft.' },
        { n: '02', mask: icon('file-pen-line'), title: 'Check the terms', body: 'Anything missing is named before you send, like “Add payment due date to send.”' },
        { n: '03', mask: icon('send'), title: 'Send a confirmation link', body: 'The brand reads the terms and confirms in the browser. No account needed.' },
        { n: '04', mask: icon('circle-check'), title: 'Track it to paid', body: 'Each deal shows whose turn it is and the next date. Reminders quote the agreed term.' }
      ],
      ...this.brandVals(),
      scrollStages: this._progEl || (this._progEl = React.createElement('div', { ref: this.progRef, 'aria-hidden': true, style: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30, pointerEvents: 'none', opacity: 0, transition: 'opacity 300ms ease' } },
        React.createElement('div', { style: { display: 'flex', gap: 3, height: 3, padding: '0 3px' } },
          Array.from({ length: 9 }, (_, i) => React.createElement('span', { key: i, style: { flex: 1, borderRadius: 999, background: 'rgba(109,85,201,.12)', overflow: 'hidden', display: 'block' } },
            React.createElement('span', { 'data-seg': i, style: { display: 'block', height: '100%', background: i === 8 ? 'linear-gradient(90deg,#6D55C9,#E2A947)' : '#6D55C9', transformOrigin: 'left', transform: 'scaleX(0)' } })))),
        React.createElement('span', { 'data-lbl': 1, style: { position: 'absolute', right: 12, top: 10, fontFamily: "'Satoshi',sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5A43B5', background: 'rgba(255,255,255,.92)', padding: '4px 8px', borderRadius: 6, boxShadow: '0 0 0 1px rgba(109,85,201,.14)', opacity: 0, transition: 'opacity 220ms ease, transform 220ms cubic-bezier(.23,1,.32,1)' } }, 'Draft'))),
      ...(() => { const m = !!this.state.navMini; return {
        navH: m ? '72px' : '88px', navMb: m ? '16px' : '0px', navBgOp: m ? 0 : 1,
        navLogoL: m ? '50%' : '24px', navLogoX: m ? '-50%' : '0%',
        navLogoGap: m ? '0px' : '12px', navLogoH: m ? '52px' : '44px', navLogoPad: m ? '0 12px' : '0px',
        navLogoBg: m ? 'rgba(255,255,255,.96)' : 'rgba(255,255,255,0)',
        navLogoSh: m ? '0 0 0 1px rgba(17,17,17,.06), 0 10px 30px -10px rgba(74,53,168,.25)' : '0 0 0 0 rgba(17,17,17,0)',
        navMarkW: m ? '30px' : '38px', navWordW: m ? '0px' : '240px', navWordOp: m ? 0 : 1,
        navNavOp: m ? 0 : 1, navLinkD: this.state.vw === 'm' ? 'none' : 'block', navNavY: m ? '-14px' : '0px', navNavPe: m ? 'none' : 'auto',
      }; })(),
      dlY: this.state.dlHov ? '2px' : '0px',
      dlIn: () => this.setState({ dlHov: true }),
      dlOut: () => this.setState({ dlHov: false }),
      record: [
        ['Terms v2 sent to GlowSkin India', '12 Mar 2026, 14:32 IST'],
        ['Ananya from GlowSkin India confirmed terms', '13 Mar 2026, 10:05 IST'],
        ['Reel 1 submitted for review', '18 Mar 2026, 19:48 IST'],
        ['Reel 1 approved', '20 Mar 2026, 11:20 IST'],
        ['Paid ₹ 25,000', '02 Apr 2026, 16:02 IST']
      ].map(([title, time], i) => {
        const paid = i === 4, h = this.state.recHov === i;
        return {
          title, time,
          enter: () => this.setState({ recHov: i }),
          leave: () => this.setState(s => s.recHov === i ? { recHov: null } : null),
          pad: paid ? '18px 20px 18px 8px' : '14px 20px 14px 8px',
          bg: paid ? (h ? 'linear-gradient(90deg,rgba(109,85,201,.11),rgba(109,85,201,.03))' : 'linear-gradient(90deg,rgba(109,85,201,.08),rgba(109,85,201,.015))') : (h ? 'rgba(17,17,17,.03)' : 'rgba(17,17,17,0)'),
          size: paid ? '12px' : '9px',
          fill: paid ? 'linear-gradient(180deg,#E2A947 0%,#6D55C9 100%)' : h ? '#6D55C9' : '#FFFFFF',
          ring: paid ? '0 0 0 3px #FFFFFF, 0 0 0 4px rgba(109,85,201,.25)' : h ? '0 0 0 3px rgba(109,85,201,.14)' : 'inset 0 0 0 1.5px #CCC7D9',
          scale: h ? 1.15 : 1,
          glow: paid ? 1 : 0,
          tSize: paid ? '17px' : '15px', tWeight: paid ? 700 : 600,
          timeColor: paid ? '#5F5878' : '#6E6E76',
          tag: '', tagOp: 0,
        };
      }),
      ...(() => { const H = this.homeVals(icon); return { ...H, ...this.appVals(H) }; })(),
      terms: [
        { label: 'Deliverables', value: '1 Reel and 3 Stories on Instagram' },
        { label: 'Amount', value: '₹ 25,000' },
        { label: 'Payment due', value: '30 days after posting' },
        { label: 'Usage rights', value: 'Brand can repost on its own channels for 90 days' }
      ]
    };
  }
}

export default class StatGCWebsite extends Component {
  render() {
    const v = { ...this.props, ...(this.renderVals() || {}) };
    return (
      <DCHost id="StatGCWebsite" css={CSS} links={LINKS} hostStyle={this.props.__hostStyle}>
        <div style={{"minHeight":"100vh","background":"#FFFFFF","display":"flex","flexDirection":"column"}}>{"\n\n"}{T(v.scrollStages)}{"\n"}<header style={sty(`position:sticky;top:0;z-index:20;height:${S(v.navH)};margin-bottom:${S(v.navMb)};pointer-events:none;transition:height 520ms cubic-bezier(.2,.9,.25,1), margin-bottom 520ms cubic-bezier(.2,.9,.25,1)`)}>{"\n  "}<div aria-hidden="true" style={sty(`position:absolute;inset:0;background:#FFFFFF;border-bottom:1px solid #E4E4E8;opacity:${S(v.navBgOp2)};transition:opacity 360ms ease-out`)}></div>{"\n  "}<div style={{"position":"relative","maxWidth":"1200px","height":"100%","margin":"0 auto","padding":"0 24px"}}>{"\n    "}<a href="#top" aria-label="StatGC" style={sty(`pointer-events:auto;position:absolute;top:50%;left:${S(v.navLogoL)};transform:translate(${S(v.navLogoX)},-50%);display:flex;align-items:center;gap:${S(v.navLogoGap)};height:${S(v.navLogoH)};padding:${S(v.navLogoPad)};border-radius:999px;background:${S(v.navLogoBg)};box-shadow:${S(v.navLogoSh)};color:#111111;transition:left 620ms cubic-bezier(.2,.9,.25,1), transform 620ms cubic-bezier(.2,.9,.25,1), padding 520ms cubic-bezier(.2,.9,.25,1), height 520ms cubic-bezier(.2,.9,.25,1), gap 520ms cubic-bezier(.2,.9,.25,1), background 360ms ease-out, box-shadow 360ms ease-out`)} className="p-statgcwebsite-0">{"\n      "}<span aria-hidden="true" style={sty(`width:${S(v.navMarkW)};aspect-ratio:30/26;flex:none;display:block;background:#7E65D6;-webkit-mask:url(/assets/logo-mark-white.png) center/contain no-repeat;mask:url(/assets/logo-mark-white.png) center/contain no-repeat;transition:width 520ms cubic-bezier(.2,.9,.25,1)`)}></span>{"\n      "}<span style={sty(`display:block;overflow:hidden;white-space:nowrap;max-width:${S(v.navWordW)};opacity:${S(v.navWordOp)};font-family:'Jost',sans-serif;font-weight:600;font-size:20px;color:${S(v.navInk)};transition:max-width 520ms cubic-bezier(.2,.9,.25,1), opacity 260ms ease-out`)}>StatGC</span>{"\n    "}</a>{"\n    "}<nav style={sty(`position:absolute;right:24px;top:50%;transform:translateY(calc(-50% + ${S(v.navNavY)}));opacity:${S(v.navNavOp)};pointer-events:${S(v.navNavPe)};display:flex;align-items:center;gap:6px;transition:opacity 280ms ease-out, transform 420ms cubic-bezier(.2,.9,.25,1)`)}>{"\n      "}<a href="#how" style={sty(`display:${S(v.navLinkD)};font-size:16px;font-weight:500;color:${S(v.navMuted)};padding:10px 16px;border-radius:12px;transition:background 120ms ease-out, color 120ms ease-out`)} className="p-statgcwebsite-1">How it works</a>{"\n      "}<a href="#brands" style={sty(`display:${S(v.navLinkD)};font-size:16px;font-weight:500;color:${S(v.navMuted)};padding:10px 16px;border-radius:12px;transition:background 120ms ease-out, color 120ms ease-out`)} className="p-statgcwebsite-1">Brands</a>{"\n      "}<a href="#login" style={sty(`font-size:16px;font-weight:500;color:${S(v.navInk)};padding:10px 16px;border-radius:12px;transition:background 120ms ease-out, color 120ms ease-out`)} className="p-statgcwebsite-1">Log in</a>{"\n      "}<a href="#login" style={{"display":"inline-flex","alignItems":"center","height":"46px","padding":"0 20px","marginLeft":"6px","borderRadius":"12px","background":"#6D55C9","color":"#FFFFFF","fontSize":"15px","fontWeight":"700","whiteSpace":"nowrap","transition":"background 120ms ease-out, transform 100ms ease-out"}} className="p-statgcwebsite-2 p-statgcwebsite-3">{T(v.ctaLabel)}</a>{"\n    "}</nav>{"\n  "}</div></header><main id="top" style={{"flex":"1"}}><section ref={v.heroRef} data-screen-label="Hero" onMouseMove={v.hs?.move} onMouseLeave={v.hs?.leave} style={sty(`position:relative;overflow:hidden;isolation:isolate;margin-top:-88px;padding-top:88px;min-height:100vh;background:${S(v.hx?.bg)};color:#F3F4F8;display:flex;flex-direction:column;justify-content:center`)}>{"\n  "}<div aria-hidden="true" style={sty(`position:absolute;inset:0;z-index:-3;pointer-events:none;background:${S(v.hx?.glow)}`)}></div>{"\n  "}<div aria-hidden="true" style={{"position":"absolute","left":"-40%","right":"-40%","bottom":"-6%","height":"52%","zIndex":"-2","pointerEvents":"none","overflow":"hidden","transform":"perspective(620px) rotateX(64deg)","transformOrigin":"50% 100%","WebkitMaskImage":"linear-gradient(0deg,#000 0%,transparent 80%)","maskImage":"linear-gradient(0deg,#000 0%,transparent 80%)"}}>{"\n    "}<div style={sty(`position:absolute;left:0;right:0;top:-80px;bottom:0;background-image:linear-gradient(${S(v.hx?.gridC)} 1px,transparent 1px),linear-gradient(90deg,${S(v.hx?.gridC)} 1px,transparent 1px);background-size:80px 80px;will-change:transform;animation:${S(v.hs?.floorAnim)}`)}></div>{"\n  "}</div>{"\n  "}<canvas ref={v.bgCv} aria-hidden="true" style={{"position":"absolute","inset":"0","zIndex":"-1","width":"100%","height":"100%","display":"block","pointerEvents":"none"}}></canvas>{"\n  "}<div style={sty(`position:relative;width:100%;max-width:1360px;margin:0 auto;padding:${S(v.hl?.pad)};display:grid;grid-template-columns:${S(v.hl?.cols)};gap:${S(v.hl?.gap)};align-items:center`)}>{"\n    "}<div style={sty(`display:flex;flex-direction:column;align-items:${S(v.hl?.al)};text-align:${S(v.hl?.ta)};gap:28px;max-width:560px;justify-self:${S(v.hl?.al)}`)}>{"\n      "}<h1 ref={v.h1Ref} style={sty(`margin:0;display:flex;flex-wrap:wrap;justify-content:${S(v.hl?.al)};column-gap:.24em;font-family:'Bricolage Grotesque','Jost',sans-serif;font-weight:600;font-size:${S(v.hl?.h1)};line-height:1;color:#F3F4F8`)}><span style={sty(`display:inline-block;opacity:${S(v.rv?.op)};transform:${S(v.rv?.wt)};transition:opacity 600ms cubic-bezier(.2,.8,.2,1) 0ms,transform 900ms cubic-bezier(.34,1.4,.64,1) 0ms`)}>Your</span><span style={sty(`display:inline-block;opacity:${S(v.rv?.op)};transform:${S(v.rv?.wt)};transition:opacity 600ms cubic-bezier(.2,.8,.2,1) 90ms,transform 900ms cubic-bezier(.34,1.4,.64,1) 90ms`)}>money,</span><span style={sty(`display:inline-block;opacity:${S(v.rv?.op)};transform:${S(v.rv?.wt)};transition:opacity 600ms cubic-bezier(.2,.8,.2,1) 180ms,transform 900ms cubic-bezier(.34,1.4,.64,1) 180ms`)}>finally</span><span style={sty(`display:inline-block;opacity:${S(v.rv?.op)};transform:${S(v.rv?.wt)};transition:opacity 600ms cubic-bezier(.2,.8,.2,1) 270ms,transform 900ms cubic-bezier(.34,1.4,.64,1) 270ms`)}>in</span><span style={sty(`display:inline-block;color:${S(v.hx?.acc)};opacity:${S(v.rv?.op)};transform:${S(v.rv?.wt)};transition:opacity 600ms cubic-bezier(.2,.8,.2,1) 360ms,transform 900ms cubic-bezier(.34,1.4,.64,1) 360ms`)}>motion</span></h1>{"\n      "}<p style={sty(`margin:0;max-width:500px;font-size:clamp(17px,1.4vw,19px);font-weight:500;line-height:1.55;color:#A9ADBF;text-wrap:pretty;opacity:${S(v.rv?.op)};transform:${S(v.rv?.tf)};transition:opacity 700ms cubic-bezier(.2,.8,.2,1) 420ms,transform 800ms cubic-bezier(.2,.8,.2,1) 420ms`)}>StatGC turns brand deals, confirmed terms, payments and reminders into one clear, real-time view.</p>{"\n      "}<div style={sty(`display:flex;flex-wrap:wrap;justify-content:${S(v.hl?.al)};gap:12px;opacity:${S(v.rv?.op)};transform:${S(v.rv?.tf)};transition:opacity 700ms cubic-bezier(.2,.8,.2,1) 520ms,transform 800ms cubic-bezier(.2,.8,.2,1) 520ms`)}>{"\n        "}<a href="#login" style={sty(`display:inline-flex;align-items:center;gap:8px;height:52px;padding:0 24px;border-radius:12px;background:${S(v.hx?.acc)};color:${S(v.hx?.ctaInk)};font-size:16px;font-weight:700;white-space:nowrap;box-shadow:0 12px 32px -10px ${S(v.hx?.accSh)};transition:transform 160ms ease,filter 160ms ease`)} className="p-statgcwebsite-4 p-statgcwebsite-5">Start free<span aria-hidden="true" style={{"width":"16px","height":"16px","background":"currentColor","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-right.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-right.svg) center/contain no-repeat"}}></span></a>{"\n        "}<button type="button" onClick={v.hs?.watch} style={{"appearance":"none","cursor":"pointer","fontFamily":"inherit","display":"inline-flex","alignItems":"center","gap":"8px","height":"52px","padding":"0 20px","borderRadius":"12px","background":"transparent","border":"1px solid rgba(255,255,255,.18)","color":"#F3F4F8","fontSize":"16px","fontWeight":"600","whiteSpace":"nowrap","transition":"background 160ms ease,transform 160ms ease"}} className="p-statgcwebsite-6 p-statgcwebsite-5"><span aria-hidden="true" style={{"width":"15px","height":"15px","background":"currentColor","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/play.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/play.svg) center/contain no-repeat"}}></span>Watch it work</button>{"\n      "}</div>{"\n      "}<ul style={sty(`list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;justify-content:${S(v.hl?.al)};gap:10px 20px;opacity:${S(v.rv?.op)};transform:${S(v.rv?.tf)};transition:opacity 700ms cubic-bezier(.2,.8,.2,1) 620ms,transform 800ms cubic-bezier(.2,.8,.2,1) 620ms`)}>{"\n        "}{L(v.hs?.trust).map(($it1, $i1) => { const v1 = { ...v, tr: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n          "}<li style={{"display":"flex","alignItems":"center","gap":"8px","fontSize":"14px","fontWeight":"500","color":"#A9ADBF","whiteSpace":"nowrap"}}><span aria-hidden="true" style={sty(`width:15px;height:15px;flex:none;background:${S(v1.hx?.pos)};-webkit-mask:${S(v1.tr?.ic)};mask:${S(v1.tr?.ic)}`)}></span>{T(v1.tr?.l)}</li>{"\n        "}</React.Fragment>); })}{"\n      "}</ul>{"\n    "}</div>{"\n\n    "}<div ref={v.sceneRef} style={sty(`position:relative;min-width:0;width:100%;perspective:1600px;--px:0;--py:0;opacity:${S(v.rv?.op)};transform:${S(v.rv?.st)};transition:opacity 1000ms cubic-bezier(.2,.8,.2,1) 300ms,transform 1200ms cubic-bezier(.2,.8,.2,1) 300ms`)}>{"\n      "}{(v.hl?.sat) ? (<>{"\n        "}<div style={{"display":"flex","justifyContent":"space-between","alignItems":"stretch","gap":"16px","marginBottom":"18px"}}>{"\n        "}<div role="status" style={{"position":"relative","flex":"0 1 280px","minWidth":"0","zIndex":"4","alignSelf":"center","transform":"translate3d(calc(var(--px) * 26px), calc(var(--py) * 20px), 0)","willChange":"transform"}}>{"\n          "}<div style={sty(`display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:14px;background:${S(v.hx?.glassHi)};border:1px solid ${S(v.hx?.warnB)};box-shadow:0 20px 40px -18px rgba(0,0,0,.7);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);opacity:${S(v.sat?.alOp)};transform:${S(v.sat?.alTf)};transition:opacity 500ms ease 150ms,transform 700ms cubic-bezier(.34,1.4,.64,1) 150ms`)}>{"\n            "}<span aria-hidden="true" style={sty(`width:30px;height:30px;flex:none;border-radius:9px;background:${S(v.hx?.warnBg)};display:grid;place-items:center`)}><span style={sty(`width:15px;height:15px;background:${S(v.hx?.warn)};-webkit-mask:url(https://unpkg.com/lucide-static@0.460.0/icons/triangle-alert.svg) center/contain no-repeat;mask:url(https://unpkg.com/lucide-static@0.460.0/icons/triangle-alert.svg) center/contain no-repeat`)}></span></span>{"\n            "}<span style={{"fontSize":"13px","fontWeight":"700","lineHeight":"1.35","color":"#F3F4F8"}}>Hearth Coffee payment 6 days overdue</span>{"\n          "}</div>{"\n        "}</div>{"\n        "}<div style={{"position":"relative","flex":"0 1 250px","minWidth":"0","zIndex":"4","transform":"translate3d(calc(var(--px) * 30px), calc(var(--py) * 24px), 0)","willChange":"transform"}}>{"\n          "}<div style={sty(`display:flex;flex-direction:row;align-items:center;gap:14px;padding:12px 16px;border-radius:18px;background:${S(v.hx?.glassHi)};border:1px solid rgba(255,255,255,.10);box-shadow:0 24px 48px -20px rgba(0,0,0,.75);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)`)}>{"\n            "}<div style={{"position":"relative","width":"64px","height":"64px","flex":"none"}}>{"\n              "}<svg viewBox="0 0 100 100" width="64" height="64" style={{"display":"block","transform":"rotate(-90deg)"}}><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="9"></circle><circle cx="50" cy="50" r="40" fill="none" stroke={v.sat?.ringC} strokeWidth="9" strokeLinecap="round" pathLength="100" strokeDasharray={v.sat?.ringDash} style={{"transition":"stroke-dasharray 1400ms cubic-bezier(.34,1.25,.64,1),stroke 600ms ease"}}></circle></svg>{"\n              "}<span style={{"position":"absolute","inset":"0","display":"grid","placeItems":"center","fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontSize":"16px","fontWeight":"600","color":"#F3F4F8"}}>{T(v.sat?.ringPct)}</span>{"\n            "}</div>{"\n            "}<span style={{"display":"flex","flexDirection":"column","gap":"3px","minWidth":"0"}}><span style={{"fontSize":"13px","fontWeight":"700","color":"#F3F4F8"}}>Paid on time</span>{"\n            "}<span style={sty(`font-size:12px;font-weight:600;color:${S(v.sat?.ringSubC)};transition:color 400ms ease;text-align:left`)}>{T(v.sat?.ringSub)}</span></span>{"\n          "}</div>{"\n        "}</div>{"\n        "}</div>{"\n      "}</>) : null}{"\n      "}<div style={sty(`position:relative;z-index:3;transform:${S(v.hl?.tilt)};transform-style:preserve-3d;will-change:transform`)}>{"\n        "}<div style={sty(`display:flex;flex-direction:column;gap:14px;padding:${S(v.hl?.dPad)};border-radius:22px;background:${S(v.hx?.glass)};border:1px solid rgba(255,255,255,.10);box-shadow:0 60px 120px -40px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.06),0 0 90px -30px ${S(v.hx?.accSh)};-webkit-backdrop-filter:blur(20px) saturate(140%);backdrop-filter:blur(20px) saturate(140%)`)}>{"\n          "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","flexWrap":"wrap"}}>{"\n            "}<div style={{"display":"flex","alignItems":"center","gap":"10px"}}><span style={{"fontSize":"16px","fontWeight":"700","color":"#F3F4F8"}}>Overview</span><span style={sty(`display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:${S(v.hx?.pos)}`)}>{T(v.hs?.liveDot)}{"Live · sample data"}</span></div>{"\n            "}{(v.hl?.tabs) ? (<>{"\n              "}<div role="tablist" aria-label="Dashboard view" style={{"position":"relative","display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))","padding":"3px","borderRadius":"11px","background":"rgba(255,255,255,.05)","border":"1px solid rgba(255,255,255,.08)"}}>{"\n                "}<span aria-hidden="true" style={sty(`position:absolute;top:3px;bottom:3px;left:3px;width:calc((100% - 6px) / 3);border-radius:8px;background:rgba(255,255,255,.10);transform:translateX(${S(v.hs?.pillX)});transition:transform 420ms cubic-bezier(.34,1.3,.64,1)`)}></span>{"\n                "}{L(v.hs?.tabs).map(($it1, $i1) => { const v1 = { ...v, tb: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                  "}<button type="button" role="tab" aria-selected={v1.tb?.on} onClick={v1.tb?.go} style={sty(`position:relative;z-index:1;appearance:none;border:0;background:transparent;cursor:pointer;font-family:inherit;height:32px;padding:0 12px;border-radius:8px;font-size:13px;font-weight:700;white-space:nowrap;color:${S(v1.tb?.c)};transition:color 200ms ease`)}>{T(v1.tb?.l)}</button>{"\n                "}</React.Fragment>); })}{"\n              "}</div>{"\n            "}</>) : null}{"\n          "}</div>{"\n          "}<div style={sty(`display:grid;grid-template-columns:repeat(${S(v.hl?.kpiN)},minmax(0,1fr));gap:10px`)}>{"\n            "}{L(v.hs?.kpis).map(($it1, $i1) => { const v1 = { ...v, k: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n              "}<div style={{"display":"flex","flexDirection":"column","gap":"6px","padding":"12px 14px","borderRadius":"14px","background":"rgba(255,255,255,.04)","border":"1px solid rgba(255,255,255,.07)","minWidth":"0"}}>{"\n                "}<span style={{"fontSize":"12px","fontWeight":"600","color":"#A9ADBF","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>{T(v1.k?.l)}</span>{"\n                "}<span data-kpi={v1.k?.key} style={sty(`font-family:'Bricolage Grotesque','Jost',sans-serif;font-size:${S(v1.hl?.kpiFs)};font-weight:600;line-height:1;color:#F3F4F8;white-space:nowrap`)}>{T(v1.k?.v)}</span>{"\n                "}<span style={sty(`font-size:12px;font-weight:600;color:${S(v1.k?.sc)};white-space:nowrap;overflow:hidden;text-overflow:ellipsis`)}>{T(v1.k?.sub)}</span>{"\n              "}</div>{"\n            "}</React.Fragment>); })}{"\n          "}</div>{"\n          "}<div style={sty(`position:relative;height:${S(v.hl?.viewH)}`)}>{"\n            "}<div aria-hidden={v.vw?.cashHid} style={sty(`position:absolute;inset:0;display:flex;flex-direction:column;gap:8px;opacity:${S(v.vw?.cashOp)};transform:${S(v.vw?.cashTf)};pointer-events:${S(v.vw?.cashPe)};transition:opacity 420ms ease,transform 520ms cubic-bezier(.2,.8,.2,1)`)}>{"\n              "}<div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","gap":"8px"}}><span style={{"fontSize":"14px","fontWeight":"700","color":"#F3F4F8"}}>Earnings</span><span style={sty(`font-size:12px;font-weight:600;color:${S(v.ch?.fcC)};transition:color 400ms ease`)}>{T(v.ch?.fcLabel)}</span></div>{"\n              "}<svg viewBox="0 0 600 190" role="img" aria-label="Brand deal earnings rising over twelve months with a forecast from confirmed deals" style={{"display":"block","width":"100%","flex":"1","minHeight":"0","overflow":"visible"}} preserveAspectRatio="xMidYMid meet">{"\n                "}{L(v.ch?.grid).map(($it1, $i1) => { const v1 = { ...v, g: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                  "}<line x1="20" x2="600" y1={v1.g?.y} y2={v1.g?.y} stroke="rgba(255,255,255,.07)" strokeWidth="1"></line>{"\n                  "}<text x="0" y={v1.g?.ty} fontSize="11" fontWeight="600" fill="#8E92A6" fontFamily="Satoshi, sans-serif">{T(v1.g?.l)}</text>{"\n                "}</React.Fragment>); })}{"\n                "}<path d={v.ch?.area} fill={v.hx?.acc} style={sty(`opacity:${S(v.ch?.areaOp)};transition:opacity 900ms ease 900ms`)}></path>{"\n                "}<path d={v.ch?.line} fill="none" stroke={v.hx?.acc} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset={v.ch?.off} style={{"transition":"stroke-dashoffset 1900ms cubic-bezier(.45,0,.2,1)"}}></path>{"\n                "}<path d={v.ch?.line} fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" pathLength="1" strokeDasharray="0.06 0.94" style={sty(`opacity:${S(v.ch?.flowOp)};filter:drop-shadow(0 0 6px ${S(v.hx?.acc)});animation:${S(v.hs?.flowAnim)};transition:opacity 600ms ease`)}></path>{"\n                "}<path d={v.ch?.fc} fill="none" stroke={v.hx?.acc2} strokeWidth="2.5" strokeDasharray="6 7" strokeLinecap="round" style={sty(`d:${S(v.ch?.fcCss)};opacity:${S(v.ch?.areaOp)};transition:d 1200ms cubic-bezier(.34,1.2,.64,1),opacity 500ms ease 1600ms`)}></path>{"\n                "}<circle r="5.5" cx={v.ch?.cx} cy={v.ch?.cy} fill={v.hx?.acc} stroke={v.hx?.bg} strokeWidth="3" style={sty(`opacity:${S(v.ch?.areaOp)};transition:opacity 400ms ease 1700ms`)}></circle>{"\n                "}{L(v.ch?.months).map(($it1, $i1) => { const v1 = { ...v, m: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                  "}<text x={v1.m?.x} y="188" textAnchor="middle" fontSize="11" fontWeight="600" fill="#8E92A6" fontFamily="Satoshi, sans-serif">{T(v1.m?.l)}</text>{"\n                "}</React.Fragment>); })}{"\n              "}</svg>{"\n            "}</div>{"\n            "}<div aria-hidden={v.vw?.budHid} style={sty(`position:absolute;inset:0;display:flex;flex-direction:column;gap:12px;opacity:${S(v.vw?.budOp)};transform:${S(v.vw?.budTf)};pointer-events:${S(v.vw?.budPe)};transition:opacity 420ms ease,transform 520ms cubic-bezier(.2,.8,.2,1)`)}>{"\n              "}<div style={{"display":"flex","justifyContent":"space-between","gap":"8px"}}><span style={{"fontSize":"14px","fontWeight":"700","color":"#F3F4F8"}}>Brands</span><span style={{"fontSize":"12px","fontWeight":"600","color":"#A9ADBF"}}>Paid on time</span></div>{"\n              "}{L(v.hs?.bars).map(($it1, $i1) => { const v1 = { ...v, b: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                "}<div style={{"display":"flex","flexDirection":"column","gap":"5px"}}>{"\n                  "}<div style={{"display":"flex","justifyContent":"space-between","gap":"8px","fontSize":"12px","fontWeight":"600"}}><span style={{"color":"#F3F4F8"}}>{T(v1.b?.l)}</span><span style={sty(`color:${S(v1.b?.c)};transition:color 300ms ease`)}>{T(v1.b?.v)}</span></div>{"\n                  "}<div style={{"height":"7px","borderRadius":"4px","background":"rgba(255,255,255,.08)","overflow":"hidden"}}><div style={sty(`height:100%;width:${S(v1.b?.w)};border-radius:4px;background:${S(v1.b?.fill)};transition:width 1100ms cubic-bezier(.34,1.2,.64,1) ${S(v1.b?.d)},background 300ms ease`)}></div></div>{"\n                "}</div>{"\n              "}</React.Fragment>); })}{"\n            "}</div>{"\n            "}<div aria-hidden={v.vw?.apHid} style={sty(`position:absolute;inset:0;display:flex;flex-direction:column;gap:8px;opacity:${S(v.vw?.apOp)};transform:${S(v.vw?.apTf)};pointer-events:${S(v.vw?.apPe)};transition:opacity 420ms ease,transform 520ms cubic-bezier(.2,.8,.2,1)`)}>{"\n              "}<div style={{"display":"flex","justifyContent":"space-between","gap":"8px"}}><span style={{"fontSize":"14px","fontWeight":"700","color":"#F3F4F8"}}>Payments due</span><span style={{"fontSize":"12px","fontWeight":"600","color":"#A9ADBF"}}>{T(v.hs?.pendLabel)}</span></div>{"\n              "}{L(v.hs?.aps).map(($it1, $i1) => { const v1 = { ...v, a: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                "}<div style={{"display":"grid","gridTemplateColumns":"minmax(0,1fr) auto auto","alignItems":"center","gap":"12px","padding":"10px 12px","borderRadius":"12px","background":"rgba(255,255,255,.04)","border":"1px solid rgba(255,255,255,.07)"}}>{"\n                  "}<span style={{"display":"flex","flexDirection":"column","gap":"2px","minWidth":"0"}}><span style={{"fontSize":"14px","fontWeight":"700","color":"#F3F4F8","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>{T(v1.a?.n)}</span><span style={{"fontSize":"12px","fontWeight":"500","color":"#A9ADBF"}}>{T(v1.a?.meta)}</span></span>{"\n                  "}<span style={{"fontSize":"14px","fontWeight":"700","color":"#F3F4F8"}}>{T(v1.a?.amt)}</span>{"\n                  "}<button type="button" onClick={v1.a?.go} disabled={v1.a?.done} style={sty(`appearance:none;border:0;cursor:pointer;font-family:inherit;height:34px;min-width:96px;padding:0 12px;border-radius:9px;background:${S(v1.a?.bg)};color:${S(v1.a?.fg)};font-size:13px;font-weight:700;transition:background 300ms ease,color 300ms ease,transform 120ms ease`)} className="p-statgcwebsite-3">{T(v1.a?.btn)}</button>{"\n                "}</div>{"\n              "}</React.Fragment>); })}{"\n            "}</div>{"\n          "}</div>{"\n        "}</div>{"\n      "}</div>{"\n\n      "}{(v.hl?.sat) ? (<>{"\n        "}<div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,210px),1fr))","gap":"16px","marginTop":"18px","alignItems":"start"}}>{"\n        "}<div style={{"position":"relative","minWidth":"0","zIndex":"4","transform":"translate3d(calc(var(--px) * 34px), calc(var(--py) * 26px), 0)","willChange":"transform"}}>{"\n          "}<div style={sty(`display:flex;flex-direction:column;gap:10px;padding:14px 16px;border-radius:16px;background:${S(v.hx?.glassHi)};border:1px solid ${S(v.sat?.apB)};box-shadow:0 24px 48px -20px rgba(0,0,0,.75),0 0 0 0 transparent;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);transition:border-color 500ms ease`)}>{"\n            "}<div style={{"display":"flex","justifyContent":"space-between","alignItems":"center","gap":"8px"}}>{"\n              "}<span style={{"fontSize":"12px","fontWeight":"600","color":"#A9ADBF"}}>Payment from Nova Audio</span>{"\n              "}<span style={{"position":"relative","display":"grid","fontSize":"12px","fontWeight":"700"}}><span style={sty(`grid-area:1/1;color:${S(v.hx?.warn)};opacity:${S(v.sat?.pendOp)};transition:opacity 300ms ease`)}>Due today</span><span style={sty(`grid-area:1/1;color:${S(v.hx?.pos)};opacity:${S(v.sat?.okOp)};transition:opacity 300ms ease`)}>Received</span></span>{"\n            "}</div>{"\n            "}<div style={{"display":"flex","justifyContent":"space-between","alignItems":"baseline","gap":"8px"}}><span style={{"fontSize":"14px","fontWeight":"700","color":"#F3F4F8"}}>{T(v.sat?.apName)}</span><span style={{"fontSize":"14px","fontWeight":"700","color":"#F3F4F8"}}>{T(v.sat?.apAmt)}</span></div>{"\n            "}<button type="button" onClick={v.sat?.approve} disabled={v.sat?.apDone} style={sty(`appearance:none;border:0;cursor:pointer;font-family:inherit;height:40px;border-radius:10px;background:${S(v.sat?.btnBg)};color:${S(v.sat?.btnFg)};font-size:14px;font-weight:700;transition:background 300ms ease,color 300ms ease,transform 120ms ease`)} className="p-statgcwebsite-5">{T(v.sat?.btn)}</button>{"\n          "}</div>{"\n        "}</div>{"\n        "}<div style={{"position":"relative","minWidth":"0","zIndex":"4","transform":"translate3d(calc(var(--px) * 22px), calc(var(--py) * 18px), 0)","willChange":"transform"}}>{"\n          "}<div style={sty(`display:flex;flex-direction:column;gap:6px;padding:12px 14px 10px;border-radius:16px;background:${S(v.hx?.glassHi)};border:1px solid rgba(255,255,255,.10);box-shadow:0 24px 48px -20px rgba(0,0,0,.75);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)`)}>{"\n            "}<span style={{"fontSize":"12px","fontWeight":"600","color":"#A9ADBF"}}>Your deal network</span>{"\n            "}<svg viewBox="0 0 240 120" width="100%" style={{"display":"block","overflow":"visible"}}>{"\n              "}{L(v.net?.edges).map(($it1, $i1) => { const v1 = { ...v, ed: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                "}<line x1="120" y1="60" x2={v1.ed?.x} y2={v1.ed?.y} stroke={v1.ed?.c} strokeWidth="1.5" style={{"transition":"stroke 500ms ease"}}></line>{"\n              "}</React.Fragment>); })}{"\n              "}{T(v.net?.pulse)}{"\n              "}<circle cx="120" cy="60" r="15" fill={v.hx?.surf} stroke={v.hx?.acc} strokeWidth="1.5"></circle>{"\n              "}<text x="120" y="64" textAnchor="middle" fontSize="10" fontWeight="800" fill={v.hx?.acc} fontFamily="Satoshi, sans-serif">You</text>{"\n              "}{L(v.net?.nodes).map(($it1, $i1) => { const v1 = { ...v, nd: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                "}<circle cx={v1.nd?.x} cy={v1.nd?.y} r="5" fill={v1.nd?.c} style={{"transition":"fill 500ms ease"}}></circle>{"\n                "}<text x={v1.nd?.tx} y={v1.nd?.ty} textAnchor={v1.nd?.anc} fontSize="11" fontWeight="600" fill="#C4C7D6" fontFamily="Satoshi, sans-serif">{T(v1.nd?.l)}</text>{"\n              "}</React.Fragment>); })}{"\n            "}</svg>{"\n          "}</div>{"\n        "}</div>{"\n        "}<div style={{"position":"relative","minWidth":"0","height":"150px","overflow":"visible","zIndex":"5","transform":"translate3d(calc(var(--px) * 40px), calc(var(--py) * 30px), 0)"}}>{"\n          "}{L(v.hs?.txs).map(($it1, $i1) => { const v1 = { ...v, x: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n            "}<div onMouseEnter={v1.x?.in} onMouseLeave={v1.x?.out} style={sty(`position:absolute;left:0;right:0;top:0;opacity:0;will-change:transform,opacity;animation:${S(v1.x?.anim)}`)} className="p-statgcwebsite-7">{"\n              "}<div style={sty(`position:relative;display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;background:${S(v1.hx?.glassHi)};border:1px solid ${S(v1.x?.bd)};box-shadow:0 16px 32px -16px rgba(0,0,0,.7);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);cursor:default`)}>{"\n                "}<span aria-hidden="true" style={sty(`width:8px;height:8px;flex:none;border-radius:50%;background:${S(v1.x?.dot)}`)}></span>{"\n                "}<span style={{"flex":"1","minWidth":"0","fontSize":"13px","fontWeight":"700","color":"#F3F4F8","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>{T(v1.x?.v)}</span>{"\n                "}<span style={sty(`font-size:13px;font-weight:700;color:${S(v1.x?.ac)}`)}>{T(v1.x?.amt)}</span>{"\n                "}{(v1.x?.tip) ? (<>{"\n                  "}<div role="tooltip" style={{"position":"absolute","right":"0","bottom":"calc(100% + 8px)","zIndex":"6","width":"200px","display":"grid","gridTemplateColumns":"auto 1fr","gap":"4px 12px","padding":"12px 14px","borderRadius":"12px","background":"#151827","border":"1px solid rgba(255,255,255,.14)","boxShadow":"0 20px 40px -16px rgba(0,0,0,.8)","fontSize":"12px","fontWeight":"600","animation":"asRise 180ms cubic-bezier(.2,.8,.2,1) both"}}>{"\n                    "}<span style={{"color":"#8E92A6"}}>Brand</span><span style={{"color":"#F3F4F8","textAlign":"right"}}>{T(v1.x?.v)}</span>{"\n                    "}<span style={{"color":"#8E92A6"}}>Amount</span><span style={{"color":"#F3F4F8","textAlign":"right"}}>{T(v1.x?.amt)}</span>{"\n                    "}<span style={{"color":"#8E92A6"}}>Deal</span><span style={{"color":"#F3F4F8","textAlign":"right"}}>{T(v1.x?.cat)}</span>{"\n                    "}<span style={{"color":"#8E92A6"}}>Status</span><span style={sty(`color:${S(v1.x?.ac)};text-align:right`)}>{T(v1.x?.st)}</span>{"\n                  "}</div>{"\n                "}</>) : null}{"\n              "}</div>{"\n            "}</div>{"\n          "}</React.Fragment>); })}{"\n        "}</div>{"\n\n        "}</div>{"\n      "}</>) : null}{"\n    "}</div>{"\n  "}</div></section><section id="what" data-screen-label="What it does" style={{"background":"#F8F7FB"}}>{"\n  "}<div style={{"maxWidth":"1120px","margin":"0 auto","padding":"88px 24px","display":"flex","flexDirection":"column","gap":"40px"}}>{"\n    "}<div style={{"display":"flex","flexDirection":"column","gap":"12px","maxWidth":"640px"}}>{"\n      "}<h2 style={{"margin":"0","fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"clamp(32px,4vw,40px)","lineHeight":"1.1","color":"#111111","textWrap":"balance"}}>Everything a brand deal needs, from the first message to the payment</h2>{"\n    "}</div>{"\n    "}<div style={{"display":"grid","gridTemplateColumns":"repeat(6,minmax(0,1fr))","gap":"12px"}}>{"\n      "}<div onMouseEnter={v.k1?.enter} onMouseLeave={v.k1?.leave} onClick={v.k1?.toggle} role="button" tabIndex="0" aria-expanded={v.k1?.open} style={sty(`grid-column:${S(v.k1?.span)};position:relative;overflow:hidden;isolation:isolate;cursor:pointer;background:#FFFFFF;border-radius:16px;min-height:${S(v.k1?.minH)};display:flex;flex-direction:column;box-shadow:${S(v.k1?.shadow)};transform:${S(v.k1?.lift)};transition:transform 280ms cubic-bezier(.2,.8,.2,1), box-shadow 280ms ease-out`)}>{"\n        "}<div aria-hidden="true" style={sty(`position:absolute;inset:0;z-index:0;pointer-events:none;background:${S(v.k1?.wash)};opacity:${S(v.k1?.washOp)};transition:opacity 400ms ease-out`)}></div>{"\n        "}<div style={{"position":"relative","zIndex":"3","display":"flex","alignItems":"flex-start","justifyContent":"space-between","gap":"16px","padding":"24px 24px 0"}}>{"\n          "}<h3 style={sty(`margin:0;font-family:'Jost','Satoshi',sans-serif;font-weight:500;font-size:22px;line-height:1.2;color:#1A1433;max-width:300px;text-wrap:balance;opacity:${S(v.k1?.ttlOp)}`)}>{T(v.k1?.title)}</h3>{"\n          "}<span style={sty(`position:relative;z-index:3;width:32px;height:32px;flex:none;border-radius:10px;display:flex;align-items:center;justify-content:center;background:${S(v.k1?.btnBg)};color:${S(v.k1?.btnFg)};transition:background 200ms ease-out, color 200ms ease-out`)}><span style={sty(`width:16px;height:16px;background:currentColor;-webkit-mask:${S(v.k1?.btnIcon)};mask:${S(v.k1?.btnIcon)};transform:${S(v.k1?.btnRot)};transition:transform 280ms cubic-bezier(.2,.8,.2,1)`)}></span></span>{"\n        "}</div>{"\n        "}<div style={sty(`position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;padding:24px;transform:${S(v.k1?.visT)};transition:transform 400ms cubic-bezier(.2,.8,.2,1)`)}><div style={{"display":"flex","flexWrap":"wrap","gap":"12px","alignItems":"center","justifyContent":"center","width":"100%"}}>{"\n  "}<div style={{"background":"#FFFFFF","borderRadius":"14px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"16px","width":"min(100%,250px)"}}><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","color":"#6E6E76"}}>Instagram DM</span><div style={{"marginTop":"10px","background":"#F2F3F5","borderRadius":"14px 14px 14px 4px","padding":"10px 12px","fontSize":"12px","fontWeight":"500","lineHeight":"1.45","color":"#2E2E33"}}>Hi! Loved your skincare reels. Can you do 1 reel + 3 stories for our serum? Budget 25k, live by end of March?</div></div>{"\n  "}<span style={{"width":"28px","height":"28px","borderRadius":"999px","background":"#6D55C9","display":"flex","alignItems":"center","justifyContent":"center","flex":"none"}}><span style={sty(`width:14px;height:14px;background:#FFFFFF;-webkit-mask:${S(v.chevron)};mask:${S(v.chevron)}`)}></span></span>{"\n  "}<div style={{"background":"#FFFFFF","borderRadius":"14px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"16px","width":"min(100%,270px)"}}><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"8px","paddingBottom":"10px"}}><span style={{"fontSize":"14px","fontWeight":"700","color":"#111111"}}>GlowSkin India</span><span style={{"display":"inline-flex","alignItems":"center","height":"22px","padding":"0 9px","borderRadius":"999px","fontSize":"11px","fontWeight":"700","whiteSpace":"nowrap","background":"#F2F3F5","color":"#2E2E33"}}>Draft</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Deliverables</span><span style={{"fontSize":"12px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>1 Reel · 3 Stories</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Payment</span><span style={{"fontSize":"12px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>₹ 25,000</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Go live by</span><span style={{"fontSize":"12px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>31 Mar 2026</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Revisions</span><span style={{"fontSize":"12px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>2 rounds</span></div></div></div>{"\n        "}</div>{"\n        "}<div style={sty(`position:absolute;inset:0;z-index:2;background:#FFFFFF;padding:24px;display:flex;flex-direction:column;justify-content:flex-end;gap:12px;transform:${S(v.k1?.panelT)};transition:transform 320ms cubic-bezier(.2,.8,.2,1)`)}>{"\n          "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","fontWeight":"500","color":"#6D55C9"}}>{T(v.k1?.n)}</span>{"\n          "}<span style={{"fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"24px","lineHeight":"1.2","color":"#1A1433","maxWidth":"420px","textWrap":"balance"}}>{T(v.k1?.title)}</span>{"\n          "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.55","color":"#5F5878","maxWidth":"460px","textWrap":"pretty"}}>{T(v.k1?.body)}</p>{"\n        "}</div>{"\n      "}</div>{"\n      "}<div onMouseEnter={v.k2?.enter} onMouseLeave={v.k2?.leave} onClick={v.k2?.toggle} role="button" tabIndex="0" aria-expanded={v.k2?.open} style={sty(`grid-column:${S(v.k2?.span)};position:relative;overflow:hidden;isolation:isolate;cursor:pointer;background:#FFFFFF;border-radius:16px;min-height:${S(v.k2?.minH)};display:flex;flex-direction:column;box-shadow:${S(v.k2?.shadow)};transform:${S(v.k2?.lift)};transition:transform 280ms cubic-bezier(.2,.8,.2,1), box-shadow 280ms ease-out`)}>{"\n        "}<div aria-hidden="true" style={sty(`position:absolute;inset:0;z-index:0;pointer-events:none;background:${S(v.k2?.wash)};opacity:${S(v.k2?.washOp)};transition:opacity 400ms ease-out`)}></div>{"\n        "}<div style={{"position":"relative","zIndex":"3","display":"flex","alignItems":"flex-start","justifyContent":"space-between","gap":"16px","padding":"24px 24px 0"}}>{"\n          "}<h3 style={sty(`margin:0;font-family:'Jost','Satoshi',sans-serif;font-weight:500;font-size:22px;line-height:1.2;color:#1A1433;max-width:300px;text-wrap:balance;opacity:${S(v.k2?.ttlOp)}`)}>{T(v.k2?.title)}</h3>{"\n          "}<span style={sty(`position:relative;z-index:3;width:32px;height:32px;flex:none;border-radius:10px;display:flex;align-items:center;justify-content:center;background:${S(v.k2?.btnBg)};color:${S(v.k2?.btnFg)};transition:background 200ms ease-out, color 200ms ease-out`)}><span style={sty(`width:16px;height:16px;background:currentColor;-webkit-mask:${S(v.k2?.btnIcon)};mask:${S(v.k2?.btnIcon)};transform:${S(v.k2?.btnRot)};transition:transform 280ms cubic-bezier(.2,.8,.2,1)`)}></span></span>{"\n        "}</div>{"\n        "}<div style={sty(`position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;padding:24px;transform:${S(v.k2?.visT)};transition:transform 400ms cubic-bezier(.2,.8,.2,1)`)}><div style={{"background":"#FFFFFF","borderRadius":"14px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"16px","width":"min(100%,280px)"}}><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111"}}>4 terms to check</span><div style={{"height":"8px"}}></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Usage rights</span><span style={{"display":"inline-flex","alignItems":"center","height":"22px","padding":"0 9px","borderRadius":"999px","fontSize":"11px","fontWeight":"700","whiteSpace":"nowrap","background":"#FFF0E3","color":"#9A4A0C"}}>Not agreed</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Exclusivity</span><span style={{"display":"inline-flex","alignItems":"center","height":"22px","padding":"0 9px","borderRadius":"999px","fontSize":"11px","fontWeight":"700","whiteSpace":"nowrap","background":"#FFF0E3","color":"#9A4A0C"}}>Unclear</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Payment due</span><span style={{"display":"inline-flex","alignItems":"center","height":"22px","padding":"0 9px","borderRadius":"999px","fontSize":"11px","fontWeight":"700","whiteSpace":"nowrap","background":"#FEECEB","color":"#B42318"}}>Missing</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Revisions</span><span style={{"display":"inline-flex","alignItems":"center","height":"22px","padding":"0 9px","borderRadius":"999px","fontSize":"11px","fontWeight":"700","whiteSpace":"nowrap","background":"#EAF4E4","color":"#3E7420"}}>2 rounds</span></div></div>{"\n        "}</div>{"\n        "}<div style={sty(`position:absolute;inset:0;z-index:2;background:#FFFFFF;padding:24px;display:flex;flex-direction:column;justify-content:flex-end;gap:12px;transform:${S(v.k2?.panelT)};transition:transform 320ms cubic-bezier(.2,.8,.2,1)`)}>{"\n          "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","fontWeight":"500","color":"#6D55C9"}}>{T(v.k2?.n)}</span>{"\n          "}<span style={{"fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"24px","lineHeight":"1.2","color":"#1A1433","maxWidth":"420px","textWrap":"balance"}}>{T(v.k2?.title)}</span>{"\n          "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.55","color":"#5F5878","maxWidth":"460px","textWrap":"pretty"}}>{T(v.k2?.body)}</p>{"\n        "}</div>{"\n      "}</div>{"\n      "}<div onMouseEnter={v.k3?.enter} onMouseLeave={v.k3?.leave} onClick={v.k3?.toggle} role="button" tabIndex="0" aria-expanded={v.k3?.open} style={sty(`grid-column:${S(v.k3?.span)};position:relative;overflow:hidden;isolation:isolate;cursor:pointer;background:#FFFFFF;border-radius:16px;min-height:${S(v.k3?.minH)};display:flex;flex-direction:column;box-shadow:${S(v.k3?.shadow)};transform:${S(v.k3?.lift)};transition:transform 280ms cubic-bezier(.2,.8,.2,1), box-shadow 280ms ease-out`)}>{"\n        "}<div aria-hidden="true" style={sty(`position:absolute;inset:0;z-index:0;pointer-events:none;background:${S(v.k3?.wash)};opacity:${S(v.k3?.washOp)};transition:opacity 400ms ease-out`)}></div>{"\n        "}<div style={{"position":"relative","zIndex":"3","display":"flex","alignItems":"flex-start","justifyContent":"space-between","gap":"16px","padding":"24px 24px 0"}}>{"\n          "}<h3 style={sty(`margin:0;font-family:'Jost','Satoshi',sans-serif;font-weight:500;font-size:22px;line-height:1.2;color:#1A1433;max-width:300px;text-wrap:balance;opacity:${S(v.k3?.ttlOp)}`)}>{T(v.k3?.title)}</h3>{"\n          "}<span style={sty(`position:relative;z-index:3;width:32px;height:32px;flex:none;border-radius:10px;display:flex;align-items:center;justify-content:center;background:${S(v.k3?.btnBg)};color:${S(v.k3?.btnFg)};transition:background 200ms ease-out, color 200ms ease-out`)}><span style={sty(`width:16px;height:16px;background:currentColor;-webkit-mask:${S(v.k3?.btnIcon)};mask:${S(v.k3?.btnIcon)};transform:${S(v.k3?.btnRot)};transition:transform 280ms cubic-bezier(.2,.8,.2,1)`)}></span></span>{"\n        "}</div>{"\n        "}<div style={sty(`position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;padding:24px;transform:${S(v.k3?.visT)};transition:transform 400ms cubic-bezier(.2,.8,.2,1)`)}><div style={{"background":"#FFFFFF","borderRadius":"14px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"16px","width":"min(100%,250px)"}}><div style={{"display":"flex","alignItems":"center","gap":"8px"}}><span aria-hidden="true" style={{"width":"16px","height":"14px","flex":"none","display":"block","background":"#7E65D6","WebkitMask":"url(/assets/logo-mark-white.png) center/contain no-repeat","mask":"url(/assets/logo-mark-white.png) center/contain no-repeat"}}></span><span style={{"fontSize":"11px","fontWeight":"500","color":"#6E6E76"}}>statgc.in/d/glowskin</span></div><div style={{"padding":"14px 0 12px","display":"flex","flexDirection":"column","gap":"4px"}}><span style={{"fontSize":"14px","fontWeight":"700","color":"#111111"}}>Review terms from Priya</span><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>1 Reel · 3 Stories · ₹ 25,000</span></div><div style={{"display":"flex","flexDirection":"column","gap":"6px"}}><span style={{"height":"34px","borderRadius":"10px","background":"#6D55C9","color":"#FFFFFF","fontSize":"12px","fontWeight":"700","display":"flex","alignItems":"center","justifyContent":"center"}}>Confirm terms</span><span style={{"height":"34px","borderRadius":"10px","background":"#F2F3F5","color":"#111111","fontSize":"12px","fontWeight":"700","display":"flex","alignItems":"center","justifyContent":"center"}}>Request changes</span><span style={{"height":"28px","color":"#B42318","fontSize":"12px","fontWeight":"700","display":"flex","alignItems":"center","justifyContent":"center"}}>Decline</span></div></div>{"\n        "}</div>{"\n        "}<div style={sty(`position:absolute;inset:0;z-index:2;background:#FFFFFF;padding:24px;display:flex;flex-direction:column;justify-content:flex-end;gap:12px;transform:${S(v.k3?.panelT)};transition:transform 320ms cubic-bezier(.2,.8,.2,1)`)}>{"\n          "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","fontWeight":"500","color":"#6D55C9"}}>{T(v.k3?.n)}</span>{"\n          "}<span style={{"fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"24px","lineHeight":"1.2","color":"#1A1433","maxWidth":"420px","textWrap":"balance"}}>{T(v.k3?.title)}</span>{"\n          "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.55","color":"#5F5878","maxWidth":"460px","textWrap":"pretty"}}>{T(v.k3?.body)}</p>{"\n        "}</div>{"\n      "}</div>{"\n      "}<div onMouseEnter={v.k4?.enter} onMouseLeave={v.k4?.leave} onClick={v.k4?.toggle} role="button" tabIndex="0" aria-expanded={v.k4?.open} style={sty(`grid-column:${S(v.k4?.span)};position:relative;overflow:hidden;isolation:isolate;cursor:pointer;background:#FFFFFF;border-radius:16px;min-height:${S(v.k4?.minH)};display:flex;flex-direction:column;box-shadow:${S(v.k4?.shadow)};transform:${S(v.k4?.lift)};transition:transform 280ms cubic-bezier(.2,.8,.2,1), box-shadow 280ms ease-out`)}>{"\n        "}<div aria-hidden="true" style={sty(`position:absolute;inset:0;z-index:0;pointer-events:none;background:${S(v.k4?.wash)};opacity:${S(v.k4?.washOp)};transition:opacity 400ms ease-out`)}></div>{"\n        "}<div style={{"position":"relative","zIndex":"3","display":"flex","alignItems":"flex-start","justifyContent":"space-between","gap":"16px","padding":"24px 24px 0"}}>{"\n          "}<h3 style={sty(`margin:0;font-family:'Jost','Satoshi',sans-serif;font-weight:500;font-size:22px;line-height:1.2;color:#1A1433;max-width:300px;text-wrap:balance;opacity:${S(v.k4?.ttlOp)}`)}>{T(v.k4?.title)}</h3>{"\n          "}<span style={sty(`position:relative;z-index:3;width:32px;height:32px;flex:none;border-radius:10px;display:flex;align-items:center;justify-content:center;background:${S(v.k4?.btnBg)};color:${S(v.k4?.btnFg)};transition:background 200ms ease-out, color 200ms ease-out`)}><span style={sty(`width:16px;height:16px;background:currentColor;-webkit-mask:${S(v.k4?.btnIcon)};mask:${S(v.k4?.btnIcon)};transform:${S(v.k4?.btnRot)};transition:transform 280ms cubic-bezier(.2,.8,.2,1)`)}></span></span>{"\n        "}</div>{"\n        "}<div style={sty(`position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;padding:24px;transform:${S(v.k4?.visT)};transition:transform 400ms cubic-bezier(.2,.8,.2,1)`)}><div style={{"background":"#FFFFFF","borderRadius":"14px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"16px","width":"min(100%,260px)"}}><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111"}}>Reel · Serum launch</span><div style={{"height":"8px"}}></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Version 3</span><span style={{"display":"inline-flex","alignItems":"center","height":"22px","padding":"0 9px","borderRadius":"999px","fontSize":"11px","fontWeight":"700","whiteSpace":"nowrap","background":"#EAF4E4","color":"#3E7420"}}>Approved</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Version 2</span><span style={{"display":"inline-flex","alignItems":"center","height":"22px","padding":"0 9px","borderRadius":"999px","fontSize":"11px","fontWeight":"700","whiteSpace":"nowrap","background":"#FFF0E3","color":"#9A4A0C"}}>Revision requested</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 0","borderTop":"1px solid #EEEFF2"}}><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Version 1</span><span style={{"display":"inline-flex","alignItems":"center","height":"22px","padding":"0 9px","borderRadius":"999px","fontSize":"11px","fontWeight":"700","whiteSpace":"nowrap","background":"#EEF2FF","color":"#2F45C4"}}>Submitted</span></div><div style={{"paddingTop":"10px","fontSize":"11px","fontWeight":"500","color":"#6E6E76"}}>Revision 1 of 2 used</div></div>{"\n        "}</div>{"\n        "}<div style={sty(`position:absolute;inset:0;z-index:2;background:#FFFFFF;padding:24px;display:flex;flex-direction:column;justify-content:flex-end;gap:12px;transform:${S(v.k4?.panelT)};transition:transform 320ms cubic-bezier(.2,.8,.2,1)`)}>{"\n          "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","fontWeight":"500","color":"#6D55C9"}}>{T(v.k4?.n)}</span>{"\n          "}<span style={{"fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"24px","lineHeight":"1.2","color":"#1A1433","maxWidth":"420px","textWrap":"balance"}}>{T(v.k4?.title)}</span>{"\n          "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.55","color":"#5F5878","maxWidth":"460px","textWrap":"pretty"}}>{T(v.k4?.body)}</p>{"\n        "}</div>{"\n      "}</div>{"\n      "}<div onMouseEnter={v.k5?.enter} onMouseLeave={v.k5?.leave} onClick={v.k5?.toggle} role="button" tabIndex="0" aria-expanded={v.k5?.open} style={sty(`grid-column:${S(v.k5?.span)};position:relative;overflow:hidden;isolation:isolate;cursor:pointer;background:#FFFFFF;border-radius:16px;min-height:${S(v.k5?.minH)};display:flex;flex-direction:column;box-shadow:${S(v.k5?.shadow)};transform:${S(v.k5?.lift)};transition:transform 280ms cubic-bezier(.2,.8,.2,1), box-shadow 280ms ease-out`)}>{"\n        "}<div aria-hidden="true" style={sty(`position:absolute;inset:0;z-index:0;pointer-events:none;background:${S(v.k5?.wash)};opacity:${S(v.k5?.washOp)};transition:opacity 400ms ease-out`)}></div>{"\n        "}<div style={{"position":"relative","zIndex":"3","display":"flex","alignItems":"flex-start","justifyContent":"space-between","gap":"16px","padding":"24px 24px 0"}}>{"\n          "}<h3 style={sty(`margin:0;font-family:'Jost','Satoshi',sans-serif;font-weight:500;font-size:22px;line-height:1.2;color:#1A1433;max-width:300px;text-wrap:balance;opacity:${S(v.k5?.ttlOp)}`)}>{T(v.k5?.title)}</h3>{"\n          "}<span style={sty(`position:relative;z-index:3;width:32px;height:32px;flex:none;border-radius:10px;display:flex;align-items:center;justify-content:center;background:${S(v.k5?.btnBg)};color:${S(v.k5?.btnFg)};transition:background 200ms ease-out, color 200ms ease-out`)}><span style={sty(`width:16px;height:16px;background:currentColor;-webkit-mask:${S(v.k5?.btnIcon)};mask:${S(v.k5?.btnIcon)};transform:${S(v.k5?.btnRot)};transition:transform 280ms cubic-bezier(.2,.8,.2,1)`)}></span></span>{"\n        "}</div>{"\n        "}<div style={sty(`position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;padding:24px;transform:${S(v.k5?.visT)};transition:transform 400ms cubic-bezier(.2,.8,.2,1)`)}><div style={{"background":"#FFFFFF","borderRadius":"14px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"16px","width":"min(100%,260px)"}}><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","color":"#6E6E76"}}>Payment due</span><div style={{"display":"flex","alignItems":"baseline","justifyContent":"space-between","gap":"8px","padding":"6px 0 10px"}}><span style={{"fontSize":"26px","fontWeight":"700","color":"#111111"}}>₹ 25,000</span><span style={{"display":"inline-flex","alignItems":"center","height":"22px","padding":"0 9px","borderRadius":"999px","fontSize":"11px","fontWeight":"700","whiteSpace":"nowrap","background":"#FEECEB","color":"#B42318"}}>Overdue 5 days</span></div><div style={{"display":"flex","flexDirection":"column","gap":"8px","borderTop":"1px solid #EEEFF2","paddingTop":"10px"}}><div style={{"display":"flex","alignItems":"center","gap":"8px"}}><span style={{"width":"6px","height":"6px","borderRadius":"999px","background":"#6D55C9","flex":"none"}}></span><span style={{"fontSize":"12px","fontWeight":"500","color":"#2E2E33","flex":"1"}}>Terms confirmed</span><span style={{"fontSize":"11px","fontWeight":"500","color":"#6E6E76","whiteSpace":"nowrap"}}>12 Mar, 14:32</span></div><div style={{"display":"flex","alignItems":"center","gap":"8px"}}><span style={{"width":"6px","height":"6px","borderRadius":"999px","background":"#6D55C9","flex":"none"}}></span><span style={{"fontSize":"12px","fontWeight":"500","color":"#2E2E33","flex":"1"}}>Reel approved</span><span style={{"fontSize":"11px","fontWeight":"500","color":"#6E6E76","whiteSpace":"nowrap"}}>24 Mar, 10:05</span></div><div style={{"display":"flex","alignItems":"center","gap":"8px"}}><span style={{"width":"6px","height":"6px","borderRadius":"999px","background":"#6D55C9","flex":"none"}}></span><span style={{"fontSize":"12px","fontWeight":"500","color":"#2E2E33","flex":"1"}}>Reminder sent</span><span style={{"fontSize":"11px","fontWeight":"500","color":"#6E6E76","whiteSpace":"nowrap"}}>02 Apr, 09:00</span></div></div></div>{"\n        "}</div>{"\n        "}<div style={sty(`position:absolute;inset:0;z-index:2;background:#FFFFFF;padding:24px;display:flex;flex-direction:column;justify-content:flex-end;gap:12px;transform:${S(v.k5?.panelT)};transition:transform 320ms cubic-bezier(.2,.8,.2,1)`)}>{"\n          "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","fontWeight":"500","color":"#6D55C9"}}>{T(v.k5?.n)}</span>{"\n          "}<span style={{"fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"24px","lineHeight":"1.2","color":"#1A1433","maxWidth":"420px","textWrap":"balance"}}>{T(v.k5?.title)}</span>{"\n          "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.55","color":"#5F5878","maxWidth":"460px","textWrap":"pretty"}}>{T(v.k5?.body)}</p>{"\n        "}</div>{"\n      "}</div>{"\n    "}</div>{"\n  "}</div></section><section id="how" data-screen-label="How it works" style={{"borderTop":"1px solid #E4E4E8"}}>{"\n  "}<div ref={v.climbRef} data-screen-label="How it works · climb" style={{"position":"relative","height":"360vh","background":"#120E22"}}>{"\n    "}<div style={{"position":"sticky","top":"0","height":"100vh","overflow":"hidden"}}>{"\n      "}<div aria-hidden="true" style={{"position":"absolute","inset":"0"}}>{T(v.climbCanvas)}</div>{"\n      "}<div aria-hidden="true" style={{"position":"absolute","inset":"0","background":"transparent"}}></div>{"\n      "}<div style={sty(`position:relative;height:100%;max-width:1120px;margin:0 auto;padding:${S(v.climbPad)};display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:${S(v.climbGap)};align-items:center;align-content:center`)}>{"\n        "}<div style={{"display":"flex","flexDirection":"column","gap":"28px","minWidth":"0"}}>{"\n          "}<div style={sty(`position:relative;min-height:${S(v.climbTextH)}`)}>{"\n            "}{L(v.climbTexts).map(($it1, $i1) => { const v1 = { ...v, c: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n              "}<div aria-hidden={v1.c?.hidden} style={sty(`position:absolute;inset:0;display:flex;flex-direction:column;gap:18px;opacity:${S(v1.c?.op)};filter:blur(${S(v1.c?.blur)});transform:translateY(${S(v1.c?.y)});transition:opacity 420ms cubic-bezier(.23,1,.32,1),filter 420ms cubic-bezier(.23,1,.32,1),transform 520ms cubic-bezier(.23,1,.32,1);pointer-events:none`)}>{"\n                "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"15px","color":"#E5DDFB"}}>{"( "}{T(v1.c?.n)}{" )"}</span>{"\n                "}<h2 style={{"margin":"0","fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"clamp(36px,6vw,80px)","lineHeight":".95","color":"#FFFFFF","textWrap":"balance"}}>{T(v1.c?.title)}</h2>{"\n                "}<p style={{"margin":"0","maxWidth":"400px","fontSize":"clamp(16px,1.4vw,19px)","fontWeight":"500","lineHeight":"1.5","color":"#D4CBEF","textWrap":"pretty"}}>{T(v1.c?.body)}</p>{"\n              "}</div>{"\n            "}</React.Fragment>); })}{"\n          "}</div>{"\n          "}<div style={{"display":"flex","alignItems":"center","gap":"14px"}}>{"\n            "}<div style={{"display":"flex","gap":"6px"}}>{"\n              "}{L(v.climbTicks).map(($it1, $i1) => { const v1 = { ...v, t: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                "}<button type="button" onClick={v1.t?.go} aria-label={v1.t?.label} style={{"appearance":"none","border":"0","cursor":"pointer","padding":"10px 0","background":"transparent"}}><span style={sty(`display:block;width:${S(v1.t?.w)};height:4px;border-radius:999px;background:${S(v1.t?.bg)};transition:width 420ms cubic-bezier(.77,0,.175,1),background 300ms ease`)}></span></button>{"\n              "}</React.Fragment>); })}{"\n            "}</div>{"\n            "}<span style={sty(`font-family:'Satoshi',sans-serif;font-size:11px;color:#E8B860;white-space:nowrap;opacity:${S(v.climbHintOp)};transition:opacity 300ms ease`)}>{T(v.climbHint)}</span>{"\n          "}</div>{"\n        "}</div>{"\n        "}<div ref={v.climbStackRef} onMouseMove={v.climbMove} onMouseLeave={v.climbLeave} style={sty(`position:relative;height:${S(v.climbStageH)};perspective:1200px`)}>{"\n          "}<div ref={v.climbTiltRef} style={{"position":"absolute","inset":"0","transformStyle":"preserve-3d","willChange":"transform"}}>{"\n            "}<div ref={v.climbCards?.c0} style={{"position":"absolute","left":"50%","top":"50%","width":"min(380px,82vw)","marginLeft":"calc(min(380px,82vw) / -2)","marginTop":"-118px","zIndex":"1","borderRadius":"20px","background":"#FFFFFF","boxShadow":"0 0 0 1px rgba(255,255,255,.6),0 30px 60px -24px rgba(0,0,0,.65),0 8px 20px -10px rgba(38,26,92,.6)","padding":"20px","display":"flex","flexDirection":"column","gap":"12px","opacity":"0","willChange":"transform,opacity","transformOrigin":"50% 100%"}}>{"\n              "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"8px"}}><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","fontWeight":"500","color":"#5E5E66"}}>Pasted from WhatsApp</span><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","color":"#5E5E66"}}>GlowSkin India</span></div>{"\n              "}<div style={{"background":"#F2F3F5","borderRadius":"14px 14px 14px 4px","padding":"12px 14px","fontSize":"14px","fontWeight":"500","lineHeight":"1.5","color":"#2E2E33"}}>Hi Priya, we'd love 1 reel + 3 stories for the serum launch. 25k, live before 31 March?</div>{"\n              "}<div style={{"display":"flex","alignItems":"center","gap":"8px"}}><span style={{"width":"6px","height":"6px","borderRadius":"999px","background":"#6D55C9"}}></span><span style={{"fontSize":"12px","fontWeight":"700","color":"#6D55C9"}}>Draft created from the message</span></div>{"\n            "}</div>{"\n            "}<div ref={v.climbCards?.c1} style={{"position":"absolute","left":"50%","top":"50%","width":"min(380px,82vw)","marginLeft":"calc(min(380px,82vw) / -2)","marginTop":"-118px","zIndex":"2","borderRadius":"20px","background":"#FFFFFF","boxShadow":"0 0 0 1px rgba(255,255,255,.6),0 30px 60px -24px rgba(0,0,0,.65),0 8px 20px -10px rgba(38,26,92,.6)","padding":"20px","display":"flex","flexDirection":"column","gap":"12px","opacity":"0","willChange":"transform,opacity","transformOrigin":"50% 100%"}}>{"\n              "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"8px"}}><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","fontWeight":"500","color":"#5E5E66"}}>Check the terms</span><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","color":"#5E5E66"}}>GlowSkin India</span></div>{"\n              "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"9px 12px","borderRadius":"10px","background":"#F2F3F5"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Deliverables</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>1 Reel · 3 Stories</span></div>{"\n              "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"9px 12px","borderRadius":"10px","background":"#F2F3F5"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Amount</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>₹ 25,000</span></div>{"\n              "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"9px 12px","borderRadius":"10px","background":"#FFF0E3"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#B4560F"}}>Usage rights</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#B4560F","whiteSpace":"nowrap"}}>Missing</span></div>{"\n            "}</div>{"\n            "}<div ref={v.climbCards?.c2} style={{"position":"absolute","left":"50%","top":"50%","width":"min(380px,82vw)","marginLeft":"calc(min(380px,82vw) / -2)","marginTop":"-118px","zIndex":"3","borderRadius":"20px","background":"#FFFFFF","boxShadow":"0 0 0 1px rgba(255,255,255,.6),0 30px 60px -24px rgba(0,0,0,.65),0 8px 20px -10px rgba(38,26,92,.6)","padding":"20px","display":"flex","flexDirection":"column","gap":"12px","opacity":"0","willChange":"transform,opacity","transformOrigin":"50% 100%"}}>{"\n              "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"8px"}}><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","fontWeight":"500","color":"#5E5E66"}}>Confirmation link</span><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","color":"#5E5E66"}}>GlowSkin India</span></div>{"\n              "}<div style={{"display":"flex","alignItems":"center","gap":"10px","padding":"10px 12px","borderRadius":"10px","background":"#F2F3F5"}}><span aria-hidden="true" style={{"width":"16px","height":"14px","flex":"none","display":"block","background":"#7E65D6","WebkitMask":"url(/assets/logo-mark-white.png) center/contain no-repeat","mask":"url(/assets/logo-mark-white.png) center/contain no-repeat"}}></span><span style={{"flex":"1","minWidth":"0","fontFamily":"'Satoshi',sans-serif","fontSize":"12px","color":"#2E2E33","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}}>statgc.in/d/glowskin-serum</span><span style={{"fontSize":"12px","fontWeight":"700","color":"#6D55C9"}}>Sent</span></div>{"\n              "}<div style={{"display":"flex","alignItems":"center","gap":"10px","padding":"12px","borderRadius":"12px","background":"#F3EFFD"}}><span style={{"width":"28px","height":"28px","flex":"none","borderRadius":"999px","background":"#6D55C9","display":"flex","alignItems":"center","justifyContent":"center"}}><span style={{"width":"14px","height":"14px","background":"#FFFFFF","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/check.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/check.svg) center/contain no-repeat"}}></span></span><div style={{"display":"flex","flexDirection":"column","gap":"1px"}}><span style={{"fontSize":"14px","fontWeight":"700","color":"#5A43B5"}}>Confirmed by Priya Nair</span><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","color":"#2E2E33"}}>03 Apr, 14:32 IST</span></div></div>{"\n            "}</div>{"\n            "}<div ref={v.climbCards?.c3} style={{"position":"absolute","left":"50%","top":"50%","width":"min(380px,82vw)","marginLeft":"calc(min(380px,82vw) / -2)","marginTop":"-118px","zIndex":"4","borderRadius":"20px","background":"#FFFFFF","boxShadow":"0 0 0 1px rgba(255,255,255,.6),0 30px 60px -24px rgba(0,0,0,.65),0 8px 20px -10px rgba(38,26,92,.6)","padding":"20px","display":"flex","flexDirection":"column","gap":"12px","opacity":"0","willChange":"transform,opacity","transformOrigin":"50% 100%"}}>{"\n              "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"8px"}}><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","fontWeight":"500","color":"#5E5E66"}}>Payment</span><span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","color":"#5E5E66"}}>GlowSkin India</span></div>{"\n              "}<div style={{"display":"flex","alignItems":"baseline","justifyContent":"space-between","gap":"8px"}}><span style={{"fontFamily":"'Jost','Satoshi',sans-serif","fontSize":"40px","fontWeight":"500","color":"#111111"}}>₹ 25,000</span><span style={{"display":"inline-flex","alignItems":"center","height":"24px","padding":"0 10px","borderRadius":"999px","background":"#6D55C9","color":"#FFFFFF","fontSize":"12px","fontWeight":"700"}}>Paid</span></div>{"\n              "}<div style={{"display":"flex","gap":"3px"}}><span style={{"flex":"1","height":"6px","borderRadius":"999px","background":"#6D55C9"}}></span><span style={{"flex":"1","height":"6px","borderRadius":"999px","background":"#6D55C9"}}></span><span style={{"flex":"1","height":"6px","borderRadius":"999px","background":"#6D55C9"}}></span><span style={{"flex":"1","height":"6px","borderRadius":"999px","background":"#E2A947"}}></span></div>{"\n              "}<span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Received 28 Apr · 2 days before the agreed date</span>{"\n            "}</div>{"\n          "}</div>{"\n        "}</div>{"\n      "}</div>{"\n    "}</div>{"\n  "}</div>{"\n  "}<div style={{"maxWidth":"1120px","margin":"0 auto","padding":"96px 24px","display":"flex","flexDirection":"column","gap":"48px"}}>{"\n    "}<div style={{"display":"flex","flexDirection":"column","gap":"12px","maxWidth":"640px"}}>{"\n      "}<h2 style={{"margin":"0","fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"clamp(32px,4vw,40px)","lineHeight":"1.1","color":"#111111","textWrap":"balance"}}>From the first message to the payment, one deal at a time</h2>{"\n    "}</div>{"\n    "}<div onMouseEnter={v.howPause} onMouseLeave={v.howResume} style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,400px),1fr))","gap":"24px","alignItems":"stretch"}}>{"\n      "}<div style={{"display":"flex","flexDirection":"column","gap":"4px"}}>{"\n        "}{L(v.howSteps).map(($it1, $i1) => { const v1 = { ...v, s: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n          "}<div onClick={v1.s?.select} role="button" tabIndex="0" aria-pressed={v1.s?.pressed} style={sty(`cursor:pointer;border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:10px;background:${S(v1.s?.bg)};transition:background 200ms ease-out,transform 160ms cubic-bezier(.23,1,.32,1)`)} className="p-statgcwebsite-8 p-statgcwebsite-5">{"\n            "}<div style={{"display":"flex","alignItems":"center","gap":"14px"}}>{"\n              "}<span style={sty(`width:36px;height:36px;flex:none;border-radius:10px;display:flex;align-items:center;justify-content:center;background:${S(v1.s?.iconBg)};color:${S(v1.s?.iconFg)};transition:background 200ms ease-out, color 200ms ease-out`)}><span style={sty(`width:18px;height:18px;background:currentColor;-webkit-mask:${S(v1.s?.mask)};mask:${S(v1.s?.mask)}`)}></span></span>{"\n              "}<span style={sty(`font-family:'Satoshi',sans-serif;font-size:11px;font-weight:500;color:${S(v1.s?.nColor)}`)}>{T(v1.s?.n)}</span>{"\n              "}<span style={sty(`font-size:18px;font-weight:700;line-height:1.3;color:${S(v1.s?.titleColor)};transition:color 200ms ease-out`)}>{T(v1.s?.title)}</span>{"\n            "}</div>{"\n            "}<div style={sty(`display:grid;grid-template-rows:${S(v1.s?.rows)};transition:grid-template-rows 320ms cubic-bezier(.2,.8,.2,1)`)}>{"\n              "}<div style={{"overflow":"hidden","minHeight":"0","display":"flex","flexDirection":"column","gap":"14px","paddingLeft":"50px"}}>{"\n                "}<span style={{"fontSize":"15px","fontWeight":"500","lineHeight":"1.5","color":"#5E5E66","textWrap":"pretty"}}>{T(v1.s?.body)}</span>{"\n                "}<span style={{"display":"block","height":"3px","borderRadius":"999px","background":"#E4E4E8","overflow":"hidden","marginBottom":"4px"}}>{T(v1.s?.bar)}</span>{"\n              "}</div>{"\n            "}</div>{"\n          "}</div>{"\n        "}</React.Fragment>); })}{"\n      "}</div>{"\n      "}<div style={{"background":"#F2F3F5","borderRadius":"24px","padding":"clamp(20px,4vw,40px)","display":"flex","flexDirection":"column","gap":"24px","minHeight":"520px"}}>{"\n        "}<div style={{"flex":"1","display":"flex","alignItems":"center","justifyContent":"center"}}>{"\n          "}{(v.how0) ? (<><div style={{"position":"relative","background":"#FFFFFF","borderRadius":"16px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"20px","display":"flex","flexDirection":"column","gap":"14px","width":"min(100%,420px)","animation":"asSwap 420ms cubic-bezier(.23,1,.32,1) both"}}>{T(v.howCursor)}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","fontWeight":"500","color":"#6E6E76"}}>Pasted from WhatsApp</span><div style={{"background":"#F2F3F5","borderRadius":"14px 14px 14px 4px","padding":"12px 14px","fontSize":"13px","fontWeight":"500","lineHeight":"1.5","color":"#2E2E33","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 0ms both"}}>Hi Priya, we'd love 1 reel + 3 stories for the serum launch. 25k, live before 31 March?</div><div style={{"display":"flex","alignItems":"center","gap":"8px","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 160ms both"}}><span style={{"width":"6px","height":"6px","borderRadius":"999px","background":"#6D55C9"}}></span><span style={{"fontSize":"12px","fontWeight":"700","color":"#6D55C9"}}>Draft created</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 12px","borderRadius":"10px","background":"#F2F3F5","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 260ms both"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Brand</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>GlowSkin India</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 12px","borderRadius":"10px","background":"#F2F3F5","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 340ms both"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Deliverables</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>1 Reel · 3 Stories</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 12px","borderRadius":"10px","background":"#F2F3F5","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 420ms both"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Amount</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>₹ 25,000</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 12px","borderRadius":"10px","background":"#F2F3F5","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 500ms both"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Go live by</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>31 Mar 2026</span></div></div></>) : null}{"\n          "}{(v.how1) ? (<><div style={{"position":"relative","background":"#FFFFFF","borderRadius":"16px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"20px","display":"flex","flexDirection":"column","gap":"14px","width":"min(100%,420px)","animation":"asSwap 420ms cubic-bezier(.23,1,.32,1) both"}}>{T(v.howCursor)}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","fontWeight":"500","color":"#6E6E76"}}>Check the terms</span><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 12px","borderRadius":"10px","background":"#F2F3F5","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 0ms both"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Deliverables</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>1 Reel · 3 Stories</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 12px","borderRadius":"10px","background":"#F2F3F5","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 80ms both"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Amount</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>₹ 25,000</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 12px","borderRadius":"10px","background":"#FFF0E3","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 160ms both"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#B4560F"}}>Usage rights</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#B4560F","whiteSpace":"nowrap"}}>Not agreed</span></div><div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","padding":"10px 12px","borderRadius":"10px","background":"#FFF0E3","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 240ms both"}}><span style={{"fontSize":"13px","fontWeight":"500","color":"#B4560F"}}>Payment due</span><span style={{"fontSize":"13px","fontWeight":"700","color":"#B4560F","whiteSpace":"nowrap"}}>Missing</span></div><div style={{"display":"flex","flexDirection":"column","gap":"6px","paddingTop":"4px"}}><span style={{"height":"44px","borderRadius":"12px","background":"#EBECEF","color":"#5E5E66","fontSize":"14px","fontWeight":"700","display":"flex","alignItems":"center","justifyContent":"center","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 320ms both"}}>Send to brand</span><span style={{"fontSize":"12px","fontWeight":"500","color":"#B4560F","textAlign":"center","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 380ms both"}}>Add payment due date to send</span></div></div></>) : null}{"\n          "}{(v.how2) ? (<><div style={{"position":"relative","background":"#FFFFFF","borderRadius":"16px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"20px","display":"flex","flexDirection":"column","gap":"14px","width":"min(100%,420px)","animation":"asSwap 420ms cubic-bezier(.23,1,.32,1) both"}}>{T(v.howCursor)}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","fontWeight":"500","color":"#6E6E76"}}>Confirmation link</span><div style={{"display":"flex","alignItems":"center","gap":"10px","padding":"10px 12px","borderRadius":"10px","background":"#F2F3F5","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 0ms both"}}><span aria-hidden="true" style={{"width":"16px","height":"14px","flex":"none","display":"block","background":"#7E65D6","WebkitMask":"url(/assets/logo-mark-white.png) center/contain no-repeat","mask":"url(/assets/logo-mark-white.png) center/contain no-repeat"}}></span><span style={{"fontSize":"13px","fontWeight":"500","color":"#2E2E33","flex":"1","minWidth":"0","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}}>statgc.in/d/glowskin-serum</span><span style={{"fontSize":"12px","fontWeight":"700","color":"#6D55C9"}}>Copied</span></div><div style={{"display":"flex","flexDirection":"column","gap":"10px","padding":"4px 0 0"}}><div style={{"display":"flex","alignItems":"center","gap":"10px","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 140ms both"}}><span style={{"width":"8px","height":"8px","borderRadius":"999px","background":"#2F45C4","flex":"none"}}></span><span style={{"fontSize":"13px","fontWeight":"500","color":"#111111","flex":"1"}}>Sent to GlowSkin India</span><span style={{"fontSize":"12px","fontWeight":"500","color":"#6E6E76","whiteSpace":"nowrap"}}>12 Mar, 11:04</span></div><div style={{"display":"flex","alignItems":"center","gap":"10px","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 300ms both"}}><span style={{"width":"8px","height":"8px","borderRadius":"999px","background":"#2F45C4","flex":"none"}}></span><span style={{"fontSize":"13px","fontWeight":"500","color":"#111111","flex":"1"}}>Opened by Priya Nair</span><span style={{"fontSize":"12px","fontWeight":"500","color":"#6E6E76","whiteSpace":"nowrap"}}>12 Mar, 14:20</span></div><div style={{"display":"flex","alignItems":"center","gap":"10px","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 460ms both"}}><span style={{"width":"8px","height":"8px","borderRadius":"999px","background":"#6D55C9","flex":"none"}}></span><span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","flex":"1"}}>Terms confirmed</span><span style={{"fontSize":"12px","fontWeight":"500","color":"#6E6E76","whiteSpace":"nowrap"}}>12 Mar, 14:32 IST</span></div></div><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 560ms both"}}>Priya's confirmation is saved with a timestamp.</span></div></>) : null}{"\n          "}{(v.how3) ? (<><div style={{"position":"relative","background":"#FFFFFF","borderRadius":"16px","boxShadow":"0 4px 16px rgba(17,17,17,.06)","padding":"20px","display":"flex","flexDirection":"column","gap":"14px","width":"min(100%,420px)","animation":"asSwap 420ms cubic-bezier(.23,1,.32,1) both"}}>{T(v.howCursor)}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"8px","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 0ms both"}}><span style={{"fontSize":"15px","fontWeight":"700","color":"#111111"}}>GlowSkin India</span><span style={{"display":"inline-flex","alignItems":"center","height":"24px","padding":"0 10px","borderRadius":"999px","fontSize":"12px","fontWeight":"700","background":"#FFF0E3","color":"#9A4A0C"}}>Payment due</span></div><div style={{"display":"flex","flexDirection":"column","gap":"4px","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 100ms both"}}><span style={{"fontSize":"18px","fontWeight":"700","color":"#111111"}}>Payment due in 3 days.</span><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>₹ 25,000 from GlowSkin India, due 28 Mar</span></div><div style={{"background":"#F2F3F5","borderRadius":"12px","padding":"12px 14px","fontSize":"13px","fontWeight":"500","lineHeight":"1.5","color":"#2E2E33","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 220ms both"}}>Hi Priya, a reminder that ₹ 25,000 for the serum reel is due on 28 Mar, as agreed on 12 Mar.</div><span style={{"height":"44px","borderRadius":"12px","background":"#6D55C9","color":"#FFFFFF","fontSize":"14px","fontWeight":"700","display":"flex","alignItems":"center","justifyContent":"center","animation":"asRise 420ms cubic-bezier(.2,.8,.2,1) 320ms both"}}>Send payment reminder</span></div></>) : null}{"\n        "}</div>{"\n        "}<div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>{"\n          "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px"}}>{"\n            "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","fontWeight":"500","color":"#6E6E76","whiteSpace":"nowrap"}}>Draft to paid</span>{"\n            "}<span style={{"fontSize":"12px","fontWeight":"700","color":"#6D55C9","whiteSpace":"nowrap"}}>{T(v.howStageLabel)}</span>{"\n          "}</div>{"\n          "}<div style={{"display":"flex","gap":"3px"}}>{"\n            "}{L(v.howBars).map(($it1, $i1) => { const v1 = { ...v, bar: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n              "}<span title={v1.bar?.label} style={sty(`flex:1;height:6px;border-radius:999px;background:${S(v1.bar?.bg)};transition:background 300ms ease-out ${S(v1.bar?.delay)}`)}></span>{"\n            "}</React.Fragment>); })}{"\n          "}</div>{"\n        "}</div>{"\n      "}</div>{"\n    "}</div>{"\n  "}</div></section><section id="risks" ref={v.riskRef} data-screen-label="Hidden terms" style={{"position":"relative","overflow":"hidden","borderTop":"1px solid #E4E4E8","background":"#FFFFFF"}}>{"\n  "}<div style={{"position":"relative","maxWidth":"1120px","margin":"0 auto","padding":"112px 24px","display":"flex","flexDirection":"column","gap":"48px"}}>{"\n    "}<div style={{"display":"flex","flexWrap":"wrap","alignItems":"flex-end","justifyContent":"space-between","gap":"16px 48px"}}>{"\n      "}<div style={{"display":"flex","flexDirection":"column","gap":"14px","maxWidth":"620px"}}>{"\n        "}<h2 style={{"margin":"0","fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"clamp(34px,4.6vw,52px)","lineHeight":"1.04","color":"#111111","textWrap":"balance"}}>The terms brands forget to mention</h2>{"\n      "}</div>{"\n      "}<p style={{"margin":"0","fontSize":"18px","fontWeight":"500","lineHeight":"1.5","color":"#5E5E66","maxWidth":"320px"}}>A brand deal is more than deliverables.</p>{"\n    "}</div>{"\n\n    "}<div style={{"borderRadius":"24px","padding":"1px","background":"rgba(17,17,17,.08)","boxShadow":"0 1px 2px rgba(17,17,17,.04),0 40px 80px -40px rgba(60,40,20,.22)"}}>{"\n      "}<div style={{"borderRadius":"23px","background":"#FFFFFF","overflow":"hidden","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,420px),1fr))"}}>{"\n\n        "}<div style={{"position":"relative","padding":"32px","display":"flex","flexDirection":"column","gap":"24px","background":"#FAFAFB","borderRight":"1px solid #EEEFF2"}}>{"\n          "}<div style={{"display":"flex","alignItems":"center","gap":"10px"}}>{"\n            "}<span style={{"width":"28px","height":"28px","borderRadius":"999px","background":"#EBECEF","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"11px","fontWeight":"700","color":"#2E2E33"}}>GI</span>{"\n            "}<div style={{"display":"flex","flexDirection":"column"}}><span style={{"fontSize":"14px","fontWeight":"700","color":"#111111"}}>GlowSkin India</span><span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>Instagram DM · pasted 12 Mar</span></div>{"\n          "}</div>{"\n          "}<div style={{"position":"relative","overflow":"hidden","background":"#FFFFFF","borderRadius":"18px 18px 18px 6px","padding":"20px 22px","boxShadow":"0 0 0 1px rgba(17,17,17,.05)"}}>{"\n            "}<p style={{"margin":"0","fontSize":"17px","fontWeight":"500","lineHeight":"1.65","color":"#2E2E33","textWrap":"pretty"}}>{"Hi! We love your skincare content. Could you do "}<span style={sty(`border-radius:6px;padding:1px 3px;margin:0 -3px;background:${S(v.rHl0)};box-shadow:inset 0 -2px 0 ${S(v.rHlLine0)};transition:background 300ms ease 700ms, box-shadow 300ms ease 700ms`)}>1 Reel and 3 Stories</span>{" for our new serum? Budget is "}<span style={sty(`border-radius:6px;padding:1px 3px;margin:0 -3px;background:${S(v.rHl1)};box-shadow:inset 0 -2px 0 ${S(v.rHlLine1)};transition:background 300ms ease 840ms, box-shadow 300ms ease 840ms`)}>₹ 25,000</span>{", and we'd like it "}<span style={sty(`border-radius:6px;padding:1px 3px;margin:0 -3px;background:${S(v.rHl2)};box-shadow:inset 0 -2px 0 ${S(v.rHlLine2)};transition:background 300ms ease 980ms, box-shadow 300ms ease 980ms`)}>live before 31 March</span>. Let us know!</p>{"\n            "}<span aria-hidden="true" style={sty(`position:absolute;top:0;bottom:0;left:0;width:40%;background:rgba(109,85,201,0);transform:translateX(${S(v.rScanX)});opacity:${S(v.rScanOp)};transition:transform 900ms cubic-bezier(.65,0,.35,1), opacity 300ms ease 700ms;pointer-events:none`)}></span>{"\n          "}</div>{"\n          "}<div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>{"\n            "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","fontWeight":"500","color":"#5E5E66"}}>Mentioned</span>{"\n            "}<div style={{"display":"flex","flexWrap":"wrap","gap":"6px"}}>{"\n              "}{L(v.rFound).map(($it1, $i1) => { const v1 = { ...v, t: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                "}<span style={sty(`display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:999px;background:#F1EDFF;color:#5A43B5;font-size:13px;font-weight:700;white-space:nowrap;opacity:${S(v1.t?.op)};transform:${S(v1.t?.tf)};transition:opacity 260ms ease ${S(v1.t?.d)}, transform 360ms cubic-bezier(.23,1,.32,1) ${S(v1.t?.d)}`)}><span style={{"width":"13px","height":"13px","background":"currentColor","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/check.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/check.svg) center/contain no-repeat"}}></span>{T(v1.t?.label)}</span>{"\n              "}</React.Fragment>); })}{"\n            "}</div>{"\n          "}</div>{"\n          "}<div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>{"\n            "}<div style={{"display":"flex","alignItems":"baseline","justifyContent":"space-between","gap":"12px"}}>{"\n              "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"10px","fontWeight":"500","color":"#B4560F","whiteSpace":"nowrap"}}>What about</span>{"\n              "}<span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66","whiteSpace":"nowrap"}}>{T(v.riskCount)}</span>{"\n            "}</div>{"\n            "}<div style={{"display":"flex","flexWrap":"wrap","gap":"6px"}}>{"\n              "}{L(v.risks).map(($it1, $i1) => { const v1 = { ...v, r: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                "}<button type="button" aria-pressed={v1.r?.sel} onClick={v1.r?.pick} style={sty(`appearance:none;border:0;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;border-radius:999px;background:${S(v1.r?.bg)};color:${S(v1.r?.fg)};box-shadow:${S(v1.r?.sh)};font-size:14px;font-weight:700;white-space:nowrap;opacity:${S(v1.r?.op)};transform:${S(v1.r?.tf)};transition:background 160ms ease, color 160ms ease, box-shadow 160ms ease, opacity 260ms ease ${S(v1.r?.d)}, transform 360ms cubic-bezier(.23,1,.32,1) ${S(v1.r?.d)}`)} className="p-statgcwebsite-9">{"\n                  "}<span style={sty(`width:13px;height:13px;display:${S(v1.r?.chkD)};background:currentColor;-webkit-mask:url(https://unpkg.com/lucide-static@0.460.0/icons/check.svg) center/contain no-repeat;mask:url(https://unpkg.com/lucide-static@0.460.0/icons/check.svg) center/contain no-repeat`)}></span>{T(v1.r?.label)}{"\n                "}</button>{"\n              "}</React.Fragment>); })}{"\n            "}</div>{"\n          "}</div>{"\n        "}</div>{"\n\n        "}<div style={{"padding":"32px","display":"flex","flexDirection":"column","gap":"24px"}}>{"\n          "}<div style={{"display":"flex","alignItems":"center","gap":"8px"}}>{"\n            "}<img src="/assets/logo-mark.png" alt="" style={{"width":"18px","display":"block"}} />{"\n            "}<span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>StatGC</span>{"\n            "}<span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66","whiteSpace":"nowrap"}}>· before you confirm</span>{"\n          "}</div>{"\n          "}<div style={sty(`display:flex;flex-direction:column;gap:20px;opacity:${S(v.rSwapOp)};filter:blur(${S(v.rSwapBlur)});transform:translateY(${S(v.rSwapY)});transition:opacity 180ms ease, filter 180ms ease, transform 240ms cubic-bezier(.23,1,.32,1)`)}>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>{"\n              "}<span style={{"fontFamily":"'Jost','Satoshi',sans-serif","fontSize":"clamp(26px,3vw,32px)","fontWeight":"500","lineHeight":"1.15","color":"#111111","textWrap":"balance"}}>{T(v.risk?.title)}</span>{"\n              "}<span style={{"fontSize":"15px","fontWeight":"500","lineHeight":"1.5","color":"#5E5E66","textWrap":"pretty"}}>{T(v.risk?.why)}</span>{"\n            "}</div>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>{"\n              "}<span style={{"fontSize":"14px","fontWeight":"700","color":"#111111"}}>Ask the brand:</span>{"\n              "}<div style={{"alignSelf":"flex-end","maxWidth":"92%","background":"#6D55C9","color":"#FFFFFF","borderRadius":"18px 18px 6px 18px","padding":"16px 18px","fontSize":"17px","fontWeight":"500","lineHeight":"1.45","textWrap":"pretty","boxShadow":"0 10px 24px -12px rgba(109,85,201,.55)"}}>{"“"}{T(v.risk?.q)}{"”"}</div>{"\n            "}</div>{"\n          "}</div>{"\n          "}<div style={{"display":"flex","flexWrap":"wrap","alignItems":"center","gap":"8px"}}>{"\n            "}<button type="button" onClick={v.riskAdd} style={sty(`appearance:none;border:0;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 18px;border-radius:12px;background:${S(v.riskAddBg)};color:${S(v.riskAddFg)};font-size:14px;font-weight:700;white-space:nowrap;transition:background 160ms ease, color 160ms ease, transform 140ms ease-out`)} className="p-statgcwebsite-3"><span style={sty(`width:16px;height:16px;background:currentColor;-webkit-mask:${S(v.riskAddIcon)};mask:${S(v.riskAddIcon)}`)}></span>{T(v.riskAddLabel)}</button>{"\n            "}<button type="button" onClick={v.riskSkip} style={{"appearance":"none","border":"0","cursor":"pointer","fontFamily":"inherit","height":"44px","padding":"0 16px","borderRadius":"12px","background":"transparent","color":"#2E2E33","fontSize":"14px","fontWeight":"700","whiteSpace":"nowrap","transition":"background 160ms ease, transform 140ms ease-out"}} className="p-statgcwebsite-8 p-statgcwebsite-3">Next term</button>{"\n          "}</div>{"\n          "}<div style={{"marginTop":"auto","borderRadius":"16px","background":"#F2F3F5","padding":"16px 18px","display":"flex","flexDirection":"column","gap":"10px"}}>{"\n            "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px"}}>{"\n              "}<span style={{"fontSize":"13px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap"}}>Reply to GlowSkin India</span>{"\n              "}<button type="button" onClick={v.riskCopy} disabled={v.riskCopyDisabled} style={sty(`appearance:none;border:0;cursor:${S(v.riskCopyCursor)};font-family:inherit;height:30px;padding:0 10px;border-radius:8px;background:transparent;color:${S(v.riskCopyFg)};font-size:13px;font-weight:700;white-space:nowrap`)} className="p-statgcwebsite-a">{T(v.riskCopyLabel)}</button>{"\n            "}</div>{"\n            "}{(v.rEmpty) ? (<>{"\n              "}<span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>Questions you add appear here.</span>{"\n            "}</>) : null}{"\n            "}{L(v.rReply).map(($it1, $i1) => { const v1 = { ...v, q: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n              "}<span style={{"fontSize":"13px","fontWeight":"500","lineHeight":"1.45","color":"#2E2E33","animation":"asRise 280ms cubic-bezier(.23,1,.32,1) both"}}>{"• "}{T(v1.q?.t)}</span>{"\n            "}</React.Fragment>); })}{"\n          "}</div>{"\n        "}</div>{"\n      "}</div>{"\n    "}</div>{"\n  "}</div></section><section data-screen-label="Burst" style={{"position":"relative","overflow":"hidden","background":"#FFFFFF"}}>{"\n  "}<div aria-hidden="true" style={{"position":"absolute","left":"50%","bottom":"-40%","width":"min(1400px,160vw)","aspectRatio":"1","transform":"translateX(-50%)","borderRadius":"50%","background":"transparent","pointerEvents":"none","WebkitMaskImage":"linear-gradient(180deg,transparent 0%,transparent 30%,#000 60%)","maskImage":"linear-gradient(180deg,transparent 0%,transparent 30%,#000 60%)"}}></div>{"\n  "}<div style={{"position":"relative","maxWidth":"1120px","margin":"0 auto","padding":"72px 24px 0","display":"flex","flexDirection":"column","alignItems":"center","gap":"12px","textAlign":"center"}}>{"\n    "}<h2 style={{"margin":"0","fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"clamp(32px,4vw,44px)","lineHeight":"1.1","color":"#1A1433","maxWidth":"640px","textWrap":"balance"}}>Every message, term and payment, connected to the deal</h2>{"\n  "}</div>{"\n  "}<div style={{"position":"relative","height":"clamp(340px,44vw,540px)","cursor":"crosshair"}}>{T(v.burstCanvas)}</div></section><section id="inside" data-screen-label="Inside the app" style={{"position":"relative","background":"#FFFFFF","borderTop":"1px solid #E4E4E8"}}>{"\n  "}<div style={{"maxWidth":"1120px","margin":"0 auto","padding":"96px 24px 112px","display":"flex","flexDirection":"column","gap":"40px"}}>{"\n    "}<div style={{"display":"flex","flexWrap":"wrap","alignItems":"flex-end","justifyContent":"space-between","gap":"16px 40px"}}>{"\n      "}<div style={{"display":"flex","flexDirection":"column","gap":"12px","maxWidth":"620px"}}>{"\n        "}<h2 style={{"margin":"0","fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"clamp(32px,4vw,40px)","lineHeight":"1.1","color":"#111111","textWrap":"balance"}}>{T(v.pv?.caption)}</h2>{"\n      "}</div>{"\n      "}<div style={{"display":"flex","alignItems":"center","gap":"12px"}}>{"\n        "}<div role="tablist" aria-label="App preview" style={{"position":"relative","display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))","padding":"4px","borderRadius":"14px","background":"#FFFFFF","boxShadow":"inset 0 0 0 1px rgba(17,17,17,.08)"}}>{"\n          "}<span aria-hidden="true" style={sty(`position:absolute;top:4px;bottom:4px;left:4px;width:calc((100% - 8px) / 3);border-radius:10px;background:#111111;box-shadow:0 6px 14px -6px rgba(17,17,17,.5);transform:translateX(${S(v.pv?.pillX)});transition:transform 420ms cubic-bezier(.77,0,.175,1)`)}></span>{"\n          "}{L(v.pv?.tabs).map(($it1, $i1) => { const v1 = { ...v, t: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n            "}<button type="button" role="tab" aria-selected={v1.t?.on} onClick={v1.t?.go} style={sty(`position:relative;z-index:1;appearance:none;border:0;cursor:pointer;font-family:inherit;height:38px;padding:0 18px;border-radius:10px;background:transparent;font-size:14px;font-weight:700;white-space:nowrap;color:${S(v1.t?.fg)};display:flex;align-items:center;justify-content:center;gap:8px;transition:color 250ms ease 80ms,transform 160ms cubic-bezier(.23,1,.32,1)`)} className="p-statgcwebsite-3"><span style={sty(`width:15px;height:15px;background:currentColor;-webkit-mask:${S(v1.t?.mask)};mask:${S(v1.t?.mask)}`)}></span>{T(v1.t?.label)}</button>{"\n          "}</React.Fragment>); })}{"\n        "}</div>{"\n      "}</div>{"\n    "}</div>{"\n    "}<div ref={v.appWrapRef} style={sty(`position:relative;width:100%;max-width:100%;overflow:hidden;height:${S(v.appWrapH)}`)}>{"\n      "}<div style={sty(`position:absolute;left:0;top:0;width:1200px;height:760px;transform-origin:0 0;transform:scale(${S(v.appScale)});border-radius:18px;padding:1px;background:rgba(109,85,201,.25);box-shadow:0 40px 80px -40px rgba(38,26,92,.45),0 12px 32px -16px rgba(17,17,17,.18)`)}>{"\n        "}<div style={{"position":"relative","width":"100%","height":"100%","borderRadius":"17px","overflow":"hidden","background":"#ECEDEE","display":"flex","flexDirection":"column"}}>{"\n          "}<div style={{"height":"40px","flex":"none","display":"flex","alignItems":"center","gap":"12px","padding":"0 16px","borderBottom":"1px solid #E4E4E8","background":"#FBFBFC"}}>{"\n            "}<div style={{"display":"flex","gap":"6px"}}><span style={{"width":"11px","height":"11px","borderRadius":"999px","background":"#FF5F57"}}></span><span style={{"width":"11px","height":"11px","borderRadius":"999px","background":"#FEBC2E"}}></span><span style={{"width":"11px","height":"11px","borderRadius":"999px","background":"#28C840"}}></span></div>{"\n            "}<div style={{"flex":"1","display":"flex","justifyContent":"center"}}><span style={{"display":"flex","alignItems":"center","gap":"6px","height":"26px","padding":"0 14px","borderRadius":"8px","background":"#F2F3F5","fontFamily":"'Satoshi',sans-serif","fontSize":"12px","color":"#5E5E66"}}><span style={{"width":"11px","height":"11px","background":"currentColor","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/lock.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/lock.svg) center/contain no-repeat"}}></span>{"app.statgc.in/"}{T(v.pv?.path)}</span></div>{"\n            "}<span style={{"width":"57px"}}></span>{"\n          "}</div>{"\n          "}<div ref={v.pvRef} style={{"position":"relative","flex":"1","overflow":"hidden"}}>{"\n          "}<div aria-hidden={v.pv?.homeHidden} style={sty(`position:absolute;left:0;top:0;width:1440px;height:864px;transform-origin:0 0;transform:scale(.8334) translateY(${S(v.pv?.homeY)}) scale(${S(v.pv?.homeS)});opacity:${S(v.pv?.homeOp)};filter:blur(${S(v.pv?.homeB)});transition:${S(v.pv?.homeT)};pointer-events:${S(v.pv?.homePe)};background:#ECEDEE`)}>{"\n            "}{(v.pv?.homeMount) ? (<>{"\n              "}<StatGCApp startPage="home" embedW={1440} embedH={864} />{"\n            "}</>) : null}{"\n          "}</div>{"\n          "}<div aria-hidden={v.pv?.dealsHidden} style={sty(`position:absolute;left:0;top:0;width:1440px;height:864px;transform-origin:0 0;transform:scale(.8334) translateY(${S(v.pv?.dealsY)}) scale(${S(v.pv?.dealsS)});opacity:${S(v.pv?.dealsOp)};filter:blur(${S(v.pv?.dealsB)});transition:${S(v.pv?.dealsT)};pointer-events:${S(v.pv?.dealsPe)};background:#ECEDEE`)}>{"\n            "}{(v.pv?.dealsMount) ? (<>{"\n              "}<StatGCApp startPage="deals" embedW={1440} embedH={864} />{"\n            "}</>) : null}{"\n          "}</div>{"\n          "}<div aria-hidden={v.pv?.payHidden} style={sty(`position:absolute;left:0;top:0;width:1440px;height:864px;transform-origin:0 0;transform:scale(.8334) translateY(${S(v.pv?.payY)}) scale(${S(v.pv?.payS)});opacity:${S(v.pv?.payOp)};filter:blur(${S(v.pv?.payB)});transition:${S(v.pv?.payT)};pointer-events:${S(v.pv?.payPe)};background:#ECEDEE`)}>{"\n            "}{(v.pv?.payMount) ? (<>{"\n              "}<StatGCApp startPage="money" embedW={1440} embedH={864} />{"\n            "}</>) : null}{"\n          "}</div>{"\n            "}{(v.pv?.hasToast) ? (<><div role="status" style={{"position":"absolute","left":"50%","top":"24px","transform":"translateX(-50%)","zIndex":"10","display":"flex","alignItems":"center","gap":"8px","padding":"12px 18px","borderRadius":"12px","background":"#111111","color":"#FFFFFF","fontSize":"15px","fontWeight":"600","whiteSpace":"nowrap","boxShadow":"0 16px 32px -12px rgba(0,0,0,.5)","animation":"asSwap 260ms cubic-bezier(.23,1,.32,1) both"}}><span style={{"width":"15px","height":"15px","background":"#E8B860","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/lock.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/lock.svg) center/contain no-repeat"}}></span>{T(v.pv?.toast)}</div></>) : null}{"\n            "}<div style={{"position":"absolute","left":"0","right":"0","bottom":"0","height":"120px","pointerEvents":"none","background":"#ECEDEE","display":"flex","alignItems":"flex-end","justifyContent":"center","paddingBottom":"24px"}}>{"\n              "}<div style={{"pointerEvents":"auto","display":"flex","alignItems":"center","gap":"16px","padding":"12px 12px 12px 20px","borderRadius":"16px","background":"rgba(255,255,255,.86)","WebkitBackdropFilter":"blur(12px)","backdropFilter":"blur(12px)","boxShadow":"0 0 0 1px rgba(17,17,17,.06),0 16px 32px -16px rgba(17,17,17,.3)"}}>{"\n                "}<span style={{"width":"16px","height":"16px","flex":"none","background":"#5A43B5","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/eye.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/eye.svg) center/contain no-repeat"}}></span>{"\n                "}<span style={{"fontSize":"15px","fontWeight":"600","color":"#111111","whiteSpace":"nowrap"}}>Home, Deals and Money are live here. Try it out.</span>{"\n                "}<a href="#login" style={{"display":"inline-flex","alignItems":"center","height":"42px","padding":"0 18px","borderRadius":"12px","background":"#6D55C9","color":"#FFFFFF","fontSize":"15px","fontWeight":"700","whiteSpace":"nowrap"}}>Create your first deal</a>{"\n              "}</div>{"\n            "}</div>{"\n          "}</div>{"\n        "}</div>{"\n      "}</div>{"\n    "}</div>{"\n  "}</div></section><section data-screen-label="The record" style={{"borderTop":"1px solid #E4E4E8"}}>{"\n  "}<div style={{"maxWidth":"1120px","margin":"0 auto","padding":"112px 24px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,400px),1fr))","gap":"72px","alignItems":"center"}}>{"\n    "}<div style={{"display":"flex","flexDirection":"column","gap":"16px","maxWidth":"460px"}}>{"\n      "}<h2 style={{"margin":"0","fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"clamp(32px,4vw,40px)","lineHeight":"1.1","color":"#111111","textWrap":"balance"}}>Every confirmation is saved with a timestamp</h2>{"\n      "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.5","color":"#5E5E66","textWrap":"pretty"}}>Each version of the terms, each confirmation, submission, approval and payment is added to the deal's record. Download it whenever you need to show what was agreed.</p>{"\n    "}</div>{"\n    "}<div style={{"position":"relative","borderRadius":"22px","padding":"1px","background":"rgba(109,85,201,.16)","boxShadow":"0 1px 2px rgba(17,17,17,.04),0 24px 48px -24px rgba(74,53,168,.18)"}}>{"\n      "}<div style={{"position":"relative","overflow":"hidden","borderRadius":"21px","background":"#FFFFFF","display":"flex","flexDirection":"column"}}>{"\n        "}<div aria-hidden="true" style={{"position":"absolute","right":"-30%","bottom":"-40%","width":"80%","aspectRatio":"1","borderRadius":"50%","background":"transparent","pointerEvents":"none"}}></div>{"\n        "}<div style={{"position":"relative","display":"flex","alignItems":"baseline","justifyContent":"space-between","gap":"16px","padding":"24px 28px 18px"}}>{"\n          "}<div style={{"display":"flex","flexDirection":"column","gap":"4px","minWidth":"0"}}>{"\n            "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontSize":"11px","fontWeight":"500","color":"#5E5E66"}}>Deal record</span>{"\n            "}<span style={{"fontSize":"16px","fontWeight":"700","color":"#111111"}}>GlowSkin India · 1 Reel</span>{"\n          "}</div>{"\n          "}<span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66","whiteSpace":"nowrap"}}>5 entries</span>{"\n        "}</div>{"\n        "}<div style={{"position":"relative","height":"1px","margin":"0 28px","background":"#EEEFF2"}}></div>{"\n        "}<div style={{"position":"relative","padding":"12px 16px 12px"}}>{"\n          "}<div aria-hidden="true" style={{"position":"absolute","left":"35px","top":"36px","bottom":"44px","width":"1px","background":"#E4E4E8"}}></div>{"\n          "}{L(v.record).map(($it1, $i1) => { const v1 = { ...v, ev: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n            "}<div onMouseEnter={v1.ev?.enter} onMouseLeave={v1.ev?.leave} style={sty(`position:relative;display:grid;grid-template-columns:24px minmax(0,1fr) auto;column-gap:16px;align-items:center;padding:${S(v1.ev?.pad)};border-radius:14px;background:${S(v1.ev?.bg)};transition:background 160ms ease-out`)}>{"\n              "}<span style={{"position":"relative","width":"24px","height":"24px","display":"flex","alignItems":"center","justifyContent":"center"}}>{"\n                "}<span style={sty(`position:absolute;inset:0;border-radius:999px;background:transparent;opacity:${S(v1.ev?.glow)};transition:opacity 200ms ease-out`)}></span>{"\n                "}<span style={sty(`position:relative;width:${S(v1.ev?.size)};height:${S(v1.ev?.size)};border-radius:999px;background:${S(v1.ev?.fill)};box-shadow:${S(v1.ev?.ring)};transform:scale(${S(v1.ev?.scale)});transition:transform 240ms cubic-bezier(.2,.9,.3,1),background 160ms ease-out,box-shadow 160ms ease-out`)}></span>{"\n              "}</span>{"\n              "}<div style={{"display":"flex","flexDirection":"column","gap":"3px","minWidth":"0"}}>{"\n                "}<span style={sty(`font-size:${S(v1.ev?.tSize)};font-weight:${S(v1.ev?.tWeight)};line-height:1.3;color:#111111;text-wrap:pretty`)}>{T(v1.ev?.title)}</span>{"\n                "}<span style={sty(`font-size:13px;font-weight:500;color:${S(v1.ev?.timeColor)};font-variant-numeric:tabular-nums`)}>{T(v1.ev?.time)}</span>{"\n              "}</div>{"\n              "}<span style={sty(`font-size:12px;font-weight:700;color:#6D55C9;white-space:nowrap;opacity:${S(v1.ev?.tagOp)}`)}>{T(v1.ev?.tag)}</span>{"\n            "}</div>{"\n          "}</React.Fragment>); })}{"\n        "}</div>{"\n        "}<div style={{"position":"relative","height":"1px","margin":"0 28px","background":"#EEEFF2"}}></div>{"\n        "}<div style={{"position":"relative","display":"flex","alignItems":"center","justifyContent":"space-between","gap":"16px","padding":"16px 20px 16px 28px"}}>{"\n          "}<span style={{"fontSize":"12px","fontWeight":"500","color":"#5E5E66"}}>PDF with every timestamp</span>{"\n          "}<a href="#login" onMouseEnter={v.dlIn} onMouseLeave={v.dlOut} style={{"display":"inline-flex","alignItems":"center","gap":"8px","height":"40px","padding":"0 16px 0 14px","borderRadius":"12px","background":"#FFFFFF","boxShadow":"inset 0 0 0 1px rgba(17,17,17,.08),inset 0 1px 0 #FFFFFF,0 1px 2px rgba(17,17,17,.06)","color":"#111111","fontSize":"14px","fontWeight":"700","whiteSpace":"nowrap","transition":"transform 200ms cubic-bezier(.2,.9,.3,1),box-shadow 200ms ease-out"}} className="p-statgcwebsite-b p-statgcwebsite-c">{"\n            "}<span style={{"width":"16px","height":"16px","overflow":"hidden","position":"relative","display":"block"}}>{"\n              "}<span style={sty(`position:absolute;inset:0;background:#6D55C9;-webkit-mask:url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-down-to-line.svg) center/contain no-repeat;mask:url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-down-to-line.svg) center/contain no-repeat;transform:translateY(${S(v.dlY)});transition:transform 240ms cubic-bezier(.2,.9,.3,1)`)}></span>{"\n            "}</span>{"\n            Download record\n          "}</a>{"\n        "}</div>{"\n      "}</div>{"\n    "}</div>{"\n  "}</div></section>{(v.showBrands) ? (<><section id="brands" ref={v.brandRef} data-screen-label="Brand tally" style={{"position":"relative","overflow":"hidden","borderTop":"1px solid #E4E4E8","background":"#FFFFFF"}}>{"\n  "}<div aria-hidden="true" style={{"position":"absolute","left":"-10%","top":"10%","width":"min(720px,90vw)","aspectRatio":"1","borderRadius":"50%","background":"transparent","pointerEvents":"none"}}></div>{"\n  "}<canvas ref={v.ringCv} aria-hidden="true" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","display":"block","pointerEvents":"none"}}></canvas>{"\n  "}<div style={{"position":"relative","maxWidth":"1120px","margin":"0 auto","padding":"112px 24px","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,400px),1fr))","gap":"72px","alignItems":"center"}}>{"\n    "}<div style={{"display":"flex","flexDirection":"column","gap":"16px","maxWidth":"460px"}}>{"\n      "}<h2 style={{"margin":"0","fontFamily":"'Jost','Satoshi',sans-serif","fontWeight":"500","fontSize":"clamp(32px,4vw,40px)","lineHeight":"1.1","color":"#111111","textWrap":"balance"}}>A running tally for every brand you work with</h2>{"\n      "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.5","color":"#5E5E66","textWrap":"pretty"}}>StatGC adds each brand the first time you log a deal with them. From then on it counts their deals, totals what they have paid you and records whether each payment arrived on time.</p>{"\n    "}</div>{"\n    "}<div ref={v.ringAnchor} style={{"position":"relative","borderRadius":"22px","padding":"1px","background":"rgba(226,169,71,.35)","boxShadow":"0 1px 2px rgba(17,17,17,.04),0 24px 48px -24px rgba(74,53,168,.18)"}}>{"\n      "}<div style={{"position":"relative","overflow":"hidden","borderRadius":"21px","background":"#FFFFFF","display":"flex","flexDirection":"column","padding":"24px 28px 12px"}}>{"\n        "}<div style={{"display":"flex","alignItems":"baseline","justifyContent":"space-between","gap":"12px","paddingBottom":"16px"}}>{"\n          "}<span style={{"fontSize":"20px","fontWeight":"700","color":"#111111"}}>Brands</span>{"\n          "}<span style={{"fontSize":"13px","fontWeight":"600","color":"#9A6A12"}}>3 brands · 11 deals</span>{"\n        "}</div>{"\n        "}<div style={{"display":"flex","flexDirection":"column"}}>{"\n            "}<div style={{"display":"grid","gridTemplateColumns":"auto minmax(0,1fr) auto","alignItems":"center","gap":"14px","padding":"14px 0","borderTop":"1px solid #EEEFF2"}}>{"\n              "}<span style={{"width":"40px","height":"40px","borderRadius":"12px","background":"#F1EDFF","color":"#6D55C9","fontSize":"13px","fontWeight":"800","display":"grid","placeItems":"center"}}>GS</span>{"\n              "}<div style={{"display":"flex","flexDirection":"column","gap":"2px","minWidth":"0"}}><span style={{"fontSize":"15px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>GlowSkin India</span><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>6 deals · On time · 5 of 6</span></div>{"\n              "}<span style={{"fontSize":"16px","fontWeight":"700","color":"#111111"}}>₹2,40,000</span>{"\n            "}</div>{"\n            "}<div style={{"display":"grid","gridTemplateColumns":"auto minmax(0,1fr) auto","alignItems":"center","gap":"14px","padding":"14px 0","borderTop":"1px solid #EEEFF2"}}>{"\n              "}<span style={{"width":"40px","height":"40px","borderRadius":"12px","background":"#FFF6E6","color":"#9A6A12","fontSize":"13px","fontWeight":"800","display":"grid","placeItems":"center"}}>NA</span>{"\n              "}<div style={{"display":"flex","flexDirection":"column","gap":"2px","minWidth":"0"}}><span style={{"fontSize":"15px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>Nova Audio</span><span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>3 deals · On time · 3 of 3</span></div>{"\n              "}<span style={{"fontSize":"16px","fontWeight":"700","color":"#111111"}}>$4,800</span>{"\n            "}</div>{"\n            "}<div style={{"display":"grid","gridTemplateColumns":"auto minmax(0,1fr) auto","alignItems":"center","gap":"14px","padding":"14px 0","borderTop":"1px solid #EEEFF2"}}>{"\n              "}<span style={{"width":"40px","height":"40px","borderRadius":"12px","background":"#F1EDFF","color":"#6D55C9","fontSize":"13px","fontWeight":"800","display":"grid","placeItems":"center"}}>KC</span>{"\n              "}<div style={{"display":"flex","flexDirection":"column","gap":"2px","minWidth":"0"}}><span style={{"fontSize":"15px","fontWeight":"700","color":"#111111","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>{"Kettle & Co."}</span><span style={{"fontSize":"13px","fontWeight":"500","color":"#B42318"}}>2 deals · 1 overdue</span></div>{"\n              "}<span style={{"fontSize":"16px","fontWeight":"700","color":"#111111"}}>₹68,000</span>{"\n            "}</div>{"\n        "}</div>{"\n      "}</div>{"\n    "}</div>{"\n  "}</div></section></>) : null}<section ref={v.finRef} data-screen-label="Final CTA burst" style={sty(`position:relative;overflow:hidden;border-top:1px solid ${S(v.burstLine)};background:${S(v.burstBg)};transition:background 600ms cubic-bezier(.23,1,.32,1),border-color 600ms ease`)}>{"\n  "}<canvas ref={v.burstCv} aria-hidden="true" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","display":"block","pointerEvents":"none"}}></canvas>{"\n  "}<div style={{"position":"relative","zIndex":"1","maxWidth":"1120px","margin":"0 auto","padding":"128px 24px 200px","display":"flex","flexDirection":"column","alignItems":"center","textAlign":"center","gap":"20px"}}>{"\n    "}<button type="button" onClick={v.burstToggle} aria-label={v.burstToggleLabel} aria-pressed={v.burstPressed} style={sty(`position:absolute;top:24px;right:24px;width:44px;height:44px;border-radius:999px;border:none;cursor:pointer;display:grid;place-items:center;background:${S(v.burstBtnBg)};color:${S(v.burstBtnFg)};box-shadow:${S(v.burstBtnSh)};transition:background 400ms ease,color 400ms ease,box-shadow 400ms ease,transform 160ms ease-out`)} className="p-statgcwebsite-d">{"\n      "}<span style={sty(`grid-area:1/1;width:18px;height:18px;background:currentColor;-webkit-mask:url(https://unpkg.com/lucide-static@0.460.0/icons/sun.svg) center/contain no-repeat;mask:url(https://unpkg.com/lucide-static@0.460.0/icons/sun.svg) center/contain no-repeat;opacity:${S(v.burstSunOp)};transform:${S(v.burstSunTf)};transition:opacity 300ms ease,transform 500ms cubic-bezier(.34,1.4,.64,1)`)}></span>{"\n      "}<span style={sty(`grid-area:1/1;width:18px;height:18px;background:currentColor;-webkit-mask:url(https://unpkg.com/lucide-static@0.460.0/icons/moon.svg) center/contain no-repeat;mask:url(https://unpkg.com/lucide-static@0.460.0/icons/moon.svg) center/contain no-repeat;opacity:${S(v.burstMoonOp)};transform:${S(v.burstMoonTf)};transition:opacity 300ms ease,transform 500ms cubic-bezier(.34,1.4,.64,1)`)}></span>{"\n    "}</button>{"\n    "}<div style={{"display":"grid","width":"48px"}}>{"\n      "}<img src="/assets/logo-mark.png" alt="" style={sty(`grid-area:1/1;width:48px;height:auto;display:block;opacity:${S(v.burstLogoOp)};transition:opacity 500ms ease`)} />{"\n      "}<img src="/assets/logo-mark-white.png" alt="" style={sty(`grid-area:1/1;width:48px;height:auto;display:block;opacity:${S(v.burstLogoWOp)};transition:opacity 500ms ease`)} />{"\n    "}</div>{"\n    "}<h2 style={sty(`margin:0;font-family:'Jost','Satoshi',sans-serif;font-weight:500;font-size:clamp(32px,4vw,44px);line-height:1.1;color:${S(v.burstH)};max-width:640px;text-wrap:balance;transition:color 500ms ease`)}>Start with the next brand message you get</h2>{"\n    "}<p style={sty(`margin:0;font-size:16px;font-weight:500;line-height:1.5;color:${S(v.burstP)};max-width:480px;transition:color 500ms ease`)}>Paste it in. You check the terms before anything is sent.</p>{"\n    "}<a ref={v.burstCta} href="#login" data-burst="1" onClick={v.burstGo} onMouseEnter={v.burstConvOn} onMouseLeave={v.burstConvOff} onFocus={v.burstConvOn} onBlur={v.burstConvOff} style={{"display":"inline-flex","alignItems":"center","height":"48px","padding":"0 20px","borderRadius":"12px","background":"#6D55C9","color":"#FFFFFF","fontSize":"15px","fontWeight":"700","marginTop":"4px"}} className="p-statgcwebsite-2">{T(v.ctaLabel)}</a>{"\n  "}</div></section></main><footer style={{"borderTop":"1px solid #E4E4E8"}}>{"\n  "}<div style={{"maxWidth":"1120px","margin":"0 auto","padding":"28px 24px","display":"flex","flexWrap":"wrap","alignItems":"center","justifyContent":"space-between","gap":"16px"}}>{"\n    "}<div style={{"display":"flex","alignItems":"center","gap":"10px"}}>{"\n      "}<img src="/assets/logo-mark.png" alt="" style={{"width":"22px","height":"auto","display":"block"}} />{"\n      "}<span style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}}>© 2026 StatGC</span>{"\n    "}</div>{"\n    "}<nav style={{"display":"flex","gap":"20px"}}>{"\n      "}<a href="#privacy" style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}} className="p-statgcwebsite-0">Privacy</a>{"\n      "}<a href="#terms" style={{"fontSize":"13px","fontWeight":"500","color":"#5E5E66"}} className="p-statgcwebsite-0">Terms</a>{"\n    "}</nav>{"\n  "}</div></footer>{(v.loginMounted) ? (<>{"\n  "}<div role="dialog" aria-modal="true" aria-label="Log in to StatGC" style={sty(v.loginSt)}>{"\n    "}<StatGCWebsiteLogin embedded={true} onClose={v.closeLogin} />{"\n  "}</div></>) : null}</div>
      </DCHost>
    );
  }
}
