// @ts-nocheck
// Generated from "StatGC Hero.dc.html" by scripts/dc-convert.js. Inline styles and logic are kept as in the prototype so it renders the same.
import React from 'react';
import { DCLogic, DCHost, sty, T, S, L, R, hostPos, XImport } from '@/dc/runtime';


const CSS = `
@font-face{font-family:'Satoshi';src:url('/assets/Satoshi-Variable.woff2') format('woff2');font-weight:300 900;font-style:normal;font-display:swap}
html,body{margin:0;padding:0;background:#07060F}
body{font-family:'Satoshi',ui-sans-serif,sans-serif;-webkit-font-smoothing:antialiased;font-variant-numeric:tabular-nums}
a{color:#F3F4F8;text-decoration:none}
a:hover{color:#FFFFFF}
:focus-visible{outline:2px solid #F0BE5E;outline-offset:3px}

.p-statgchero-0:hover{color:#F3F4F8 !important}
.p-statgchero-1:hover{background:#F0BE5E !important;color:#1A1433 !important;box-shadow:0 0 0 1px rgba(240,190,94,.6),0 12px 36px -10px rgba(240,190,94,.5) !important}
.p-statgchero-2:active{transform:scale(.98) !important}
.p-statgchero-3:hover{background:rgba(255,255,255,.07) !important;color:#F3F4F8 !important}
.p-statgchero-4:hover{transform:translateY(-6px) !important;border-color:rgba(240,190,94,.42) !important;box-shadow:0 60px 110px -40px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.06),0 0 60px -18px rgba(240,190,94,.32) !important}
`;
const LINKS = ["https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600&display=swap"];

class Component extends DCLogic {
  state = (() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1440;
    const still = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    return { vw: w < 640 ? 'm' : w < 1024 ? 't' : 'd', still, inn: false, drawn: still, counted: still };
  })();
  rootRef = React.createRef(); cvRef = React.createRef(); dimRef = React.createRef(); cueRef = React.createRef(); cueDot = React.createRef(); contentRef = React.createRef();
  floatRef = React.createRef(); pathRef = React.createRef(); dotRef = React.createRef(); dGlow = React.createRef(); dCore = React.createRef();
  trail = [0, 1, 2, 3, 4].map(() => React.createRef());
  vRefs = [0, 1, 2].map(() => React.createRef());
  componentDidMount() {
    this._t0 = performance.now();
    this._tm = [setTimeout(() => this.setState({ inn: true }), 40)];
    if (!this.state.still) this._tm.push(setTimeout(() => { this._drawAt = performance.now(); this.setState({ drawn: true }); }, 820));
    this._resize = () => { const w = window.innerWidth, vw = w < 640 ? 'm' : w < 1024 ? 't' : 'd'; if (vw !== this.state.vw) this.setState({ vw }); this.sizeCanvas(); this.scrollFx(); if (this.state.still) this.drawBg(0); };
    window.addEventListener('resize', this._resize);
    this._onScroll = () => { if (!this._sr) this._sr = requestAnimationFrame(() => { this._sr = 0; this.scrollFx(); }); };
    window.addEventListener('scroll', this._onScroll, { passive: true });
    this._ro = new ResizeObserver(() => { this.sizeCanvas(); this.scrollFx(); });
    if (this.rootRef.current) this._ro.observe(this.rootRef.current);
    this._tm.push(setTimeout(() => this.scrollFx(), 300), setTimeout(() => this.scrollFx(), 1200));
    requestAnimationFrame(() => this.scrollFx());
    this.sizeCanvas(); this.initStars(); this.scrollFx();
    if (this.state.still) { this.drawBg(0); this.placeDot(1, 1); }
    else { const f = now => { this._raf = requestAnimationFrame(f); if (!document.hidden) this.tick(now); }; this._raf = requestAnimationFrame(f); }
  }
  componentWillUnmount() {
    cancelAnimationFrame(this._raf); cancelAnimationFrame(this._sr); this._tm.forEach(clearTimeout);
    window.removeEventListener('resize', this._resize); window.removeEventListener('scroll', this._onScroll); this._ro && this._ro.disconnect();
  }
  sizeCanvas() {
    const cv = this.cvRef.current, r = this.rootRef.current; if (!cv || !r) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1), b = r.getBoundingClientRect();
    if (this._W === b.width && this._H === b.height) return;
    this._W = b.width; this._H = b.height; this._dpr = dpr;
    cv.width = Math.round(b.width * dpr); cv.height = Math.round(b.height * dpr);
  }
  initStars() {
    let s = 7; const rn = () => (s = (s * 16807) % 2147483647) / 2147483647;
    const n = (this.props.stars ?? 46) * (this.state.vw === 'm' ? .55 : 1);
    this._S = Array.from({ length: Math.round(n) }, () => ({ x: rn(), y: rn(), r: .6 + rn() * 1.1, a: .25 + rn() * .5, sp: .004 + rn() * .01, ph: rn() * 6.28 }));
  }
  scrollFx() {
    const r = this.rootRef.current; if (!r) return;
    const vh = window.innerHeight, H = r.offsetHeight || vh, sy = window.scrollY || 0, still = this.state.still;
    if (!this._stk || !this._stk.isConnected || getComputedStyle(this._stk).position !== 'sticky') {
      this._stk = null; let el = r.parentElement;
      while (el && el !== document.body && getComputedStyle(el).position !== 'sticky') el = el.parentElement;
      this._stk = el && el !== document.body ? el : null;
    }
    if (this._stk) this._stk.style.top = Math.min(0, vh - this._stk.offsetHeight) + 'px';
    const p = Math.max(0, Math.min(1, (sy - Math.max(0, H - vh)) / vh));
    const c = this.contentRef.current, d = this.dimRef.current, q = this.cueRef.current;
    if (c) { c.style.transform = still ? 'none' : `translate3d(0,${(-p * 70).toFixed(1)}px,0) scale(${(1 - p * .07).toFixed(4)})`; c.style.opacity = (1 - p * .85).toFixed(3); c.style.filter = still || p < .01 ? 'none' : `blur(${(p * 4).toFixed(2)}px)`; }
    if (d) d.style.opacity = (p * .7).toFixed(3);
    if (q) { const k = H > vh + 8 ? 0 : Math.max(0, 1 - sy / 140); q.style.visibility = k <= 0 ? 'hidden' : 'visible'; q.style.translate = `0 ${((1 - k) * 20).toFixed(1)}px`; q.style.filter = `opacity(${k.toFixed(3)})`; }
  }
  shoot(g, T, W, H) {
    if (this._nextShoot == null) this._nextShoot = T + 1.6;
    this._shots = this._shots || [];
    if (T >= this._nextShoot) {
      const right = Math.random() < .5, ang = right ? .5 + Math.random() * .25 : Math.PI - .5 - Math.random() * .25;
      this._shots.push({ x: W * (.12 + Math.random() * .76), y: H * Math.random() * .4, ang, sp: 780 + Math.random() * 420, life: .8 + Math.random() * .5, t0: T, len: 110 + Math.random() * 90 });
      this._nextShoot = T + 2.4 + Math.random() * 3.6;
    }
    this._shots = this._shots.filter(s => T - s.t0 < s.life);
    for (const s of this._shots) {
      const e = (T - s.t0) / s.life, d = s.sp * (T - s.t0), hx = s.x + Math.cos(s.ang) * d, hy = s.y + Math.sin(s.ang) * d;
      const a = Math.sin(Math.PI * Math.min(1, e * 1.4)) * (1 - e * .4), L = s.len * (.4 + .6 * Math.min(1, e * 3));
      const tx = hx - Math.cos(s.ang) * L, ty = hy - Math.sin(s.ang) * L;
      const lg = g.createLinearGradient(tx, ty, hx, hy);
      lg.addColorStop(0, 'rgba(164,142,234,0)'); lg.addColorStop(.7, `rgba(229,221,251,${(.45 * a).toFixed(3)})`); lg.addColorStop(1, `rgba(255,255,255,${(.95 * a).toFixed(3)})`);
      g.strokeStyle = lg; g.lineWidth = 1.3; g.lineCap = 'round'; g.beginPath(); g.moveTo(tx, ty); g.lineTo(hx, hy); g.stroke();
      const rg = g.createRadialGradient(hx, hy, 0, hx, hy, 7);
      rg.addColorStop(0, `rgba(255,255,255,${(.8 * a).toFixed(3)})`); rg.addColorStop(1, 'rgba(229,221,251,0)');
      g.fillStyle = rg; g.beginPath(); g.arc(hx, hy, 7, 0, 6.283); g.fill();
    }
  }
  drawBg(T) {
    const cv = this.cvRef.current; if (!cv || !this._W) return;
    const g = cv.getContext('2d'), W = this._W, H = this._H;
    g.setTransform(this._dpr, 0, 0, this._dpr, 0, 0); g.clearRect(0, 0, W, H);
    const glow = (cx, cy, rad, col, a) => { const rg = g.createRadialGradient(cx, cy, 0, cx, cy, rad); rg.addColorStop(0, `rgba(${col},${a})`); rg.addColorStop(1, `rgba(${col},0)`); g.fillStyle = rg; g.fillRect(0, 0, W, H); };
    glow(W * (.5 + .16 * Math.sin(T * .05)), H * (.42 + .08 * Math.cos(T * .04)), Math.max(W, H) * .5, '164,142,234', .10);
    glow(W * (.22 + .1 * Math.cos(T * .035)), H * (.78 + .05 * Math.sin(T * .03)), Math.max(W, H) * .42, '126,101,214', .09);
    for (const p of this._S || []) {
      const y = ((p.y - T * p.sp * .1) % 1 + 1) % 1, x = p.x + Math.sin(T * .1 + p.ph) * .004;
      g.fillStyle = `rgba(243,244,248,${p.a * (.65 + .35 * Math.sin(T * .8 + p.ph))})`;
      g.beginPath(); g.arc(x * W, y * H, p.r, 0, 6.283); g.fill();
    }
    if (!this.state.still) {
      const k = (T % 16) / 6;
      if (k < 1) {
        const ang = .32, len = Math.min(320, W * .3), sx = -len + k * (W + len * 2), sy = H * (.12 + k * .3);
        const ex = sx + Math.cos(ang) * len, ey = sy + Math.sin(ang) * len, a = Math.sin(Math.PI * k) * .5;
        const lg = g.createLinearGradient(sx, sy, ex, ey);
        lg.addColorStop(0, 'rgba(240,190,94,0)'); lg.addColorStop(.7, `rgba(240,190,94,${a})`); lg.addColorStop(1, 'rgba(240,190,94,0)');
        g.strokeStyle = lg; g.lineWidth = 1; g.lineCap = 'round'; g.beginPath(); g.moveTo(sx, sy); g.lineTo(ex, ey); g.stroke();
      }
      this.shoot(g, T, W, H);
    }
  }
  placeDot(u, op) {
    const p = this.pathRef.current, gEl = this.dotRef.current; if (!p || !gEl) return;
    const L = p.getTotalLength(), set = (el, v) => { if (!el) return; const pt = p.getPointAtLength(L * Math.max(0, Math.min(1, v))); el.setAttribute('cx', pt.x.toFixed(1)); el.setAttribute('cy', pt.y.toFixed(1)); };
    set(this.dCore.current, u); set(this.dGlow.current, u);
    this.trail.forEach((r, i) => set(r.current, u - (i + 1) * .014));
    gEl.style.opacity = op.toFixed(3);
  }
  tick(now) {
    const T = (now - this._t0) / 1000;
    this.drawBg(T);
    const cd = this.cueDot.current; if (cd) { const k = (T % 2.2) / 2.2; cd.style.transform = `translate3d(0,${(-12 + k * 52).toFixed(1)}px,0)`; cd.style.opacity = Math.sin(Math.PI * k).toFixed(3); }
    const f = this.floatRef.current; if (f) f.style.transform = `translate3d(0,${(Math.sin(T * .55) * 6).toFixed(2)}px,0)`;
    if (this._drawAt) {
      const e = (now - this._drawAt) / 1000;
      if (!this._countDone) {
        const k = Math.min(1, e / 1.2), ez = 1 - Math.pow(1 - k, 3), V = this.vRefs.map(r => r.current);
        if (V[0]) V[0].textContent = '₹' + (8.4 * ez).toFixed(1) + 'L';
        if (V[1]) V[1].textContent = '₹' + (2.1 * ez).toFixed(1) + 'L';
        if (V[2]) V[2].textContent = String(Math.round(6 * ez));
        if (k >= 1) { this._countDone = true; this.setState({ counted: true }); }
      }
      const d = e - 1.6;
      if (d > 0) {
        const c = d % 4.6, run = 3.2;
        if (c < run) { const k = c / run, u = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; this.placeDot(u, Math.min(1, k * 8) * Math.min(1, (1 - k) * 6)); }
        else this.placeDot(1, 0);
      }
    }
  }
  renderVals() {
    const s = this.state, m = s.vw === 'm', t = s.vw === 't', inn = s.inn, still = s.still, done = s.counted;
    return {
      rootRef: this.rootRef, cvRef: this.cvRef, dimRef: this.dimRef, cueRef: this.cueRef, cueDot: this.cueDot, contentRef: this.contentRef,
      floatRef: this.floatRef, pathRef: this.pathRef, dotRef: this.dotRef, dGlow: this.dGlow, dCore: this.dCore,
      t1: this.trail[0], t2: this.trail[1], t3: this.trail[2], t4: this.trail[3], t5: this.trail[4],
      v0: this.vRefs[0], v1: this.vRefs[1], v2: this.vRefs[2],
      scrollNext: () => { const r = this.rootRef.current; if (!r) return; const top = r.getBoundingClientRect().top + window.scrollY + r.offsetHeight; window.scrollTo({ top, behavior: still ? 'auto' : 'smooth' }); },
      L: { pad: m ? '112px 20px 72px' : 'clamp(128px,16vh,168px) 24px 96px', h1: m ? '42px' : t ? '60px' : 'clamp(60px,6.4vw,92px)',
        cardW: m ? '100%' : t ? '480px' : '580px', cardMt: m ? '40px' : '56px', cardPad: m ? '18px' : '24px', mN: m ? 2 : 3, mFs: m ? '22px' : '26px', third: !m },
      E: { op: inn ? 1 : 0, word: inn || still ? 'none' : 'translateY(.45em)', btn: inn || still ? 'none' : 'scale(.96)', card: inn || still ? 'none' : 'translateY(28px)', blur: inn || still ? 'blur(0px)' : 'blur(8px)', ul: inn ? 1 : 0, cue: inn ? 1 : 0 },
      C: { off: s.drawn ? 0 : 1, dur: still ? '0ms' : '1500ms', area: s.drawn ? 1 : 0, v0: done ? '₹8.4L' : '₹0.0L', v1: done ? '₹2.1L' : '₹0.0L', v2: done ? '6' : '0' }
    };
  }
}

export default class StatGCHero extends Component {
  render() {
    const v = { ...this.props, ...(this.renderVals() || {}) };
    return (
      <DCHost id="StatGCHero" css={CSS} links={LINKS} hostStyle={this.props.__hostStyle}>
        <section ref={v.rootRef} data-screen-label="Hero" style={sty(`position:relative;overflow:hidden;isolation:isolate;min-height:100vh;padding:${S(v.L?.pad)};display:flex;flex-direction:column;align-items:center;color:#F3F4F8;background:radial-gradient(900px 620px at 50% 28%,rgba(126,101,214,.22),rgba(126,101,214,0) 70%),radial-gradient(760px 520px at 0% 0%,rgba(42,40,112,.42),rgba(42,40,112,0) 70%),radial-gradient(620px 420px at 100% 100%,rgba(42,40,112,.32),rgba(42,40,112,0) 70%),#07060F`)}>{"\n  "}<canvas ref={v.cvRef} aria-hidden="true" style={{"position":"absolute","inset":"0","width":"100%","height":"100%","display":"block","zIndex":"-1","pointerEvents":"none"}}></canvas>{"\n  "}<div ref={v.dimRef} aria-hidden="true" style={{"position":"absolute","inset":"0","zIndex":"2","pointerEvents":"none","background":"#07060F","opacity":"0"}}></div>{"\n  "}<button type="button" ref={v.cueRef} onClick={v.scrollNext} aria-label="Scroll to the next section" style={sty(`position:absolute;left:50%;top:min(calc(100% - 104px), calc(100vh - 104px));z-index:3;transform:translateX(-50%);appearance:none;border:0;background:transparent;cursor:pointer;font-family:inherit;display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px 12px;border-radius:12px;color:#A9ADBF;opacity:${S(v.E?.cue)};transition:opacity 600ms ease 1100ms`)} className="p-statgchero-0">{"\n    "}<span style={{"fontSize":"11px","fontWeight":"700","letterSpacing":".24em"}}>SCROLL</span>{"\n    "}<span style={{"position":"relative","width":"1px","height":"40px","background":"rgba(255,255,255,.14)","overflow":"hidden","borderRadius":"1px"}}><span ref={v.cueDot} style={{"position":"absolute","left":"-1px","top":"0","width":"3px","height":"12px","borderRadius":"2px","background":"linear-gradient(180deg,rgba(240,190,94,0),#F0BE5E)"}}></span></span>{"\n  "}</button>{"\n  "}<div ref={v.contentRef} style={{"width":"100%","maxWidth":"900px","display":"flex","flexDirection":"column","alignItems":"center","textAlign":"center","transformOrigin":"50% 30%"}}>{"\n    "}<span style={sty(`font-size:12px;font-weight:700;letter-spacing:.24em;color:#A48EEA;opacity:${S(v.E?.op)};transition:opacity 500ms cubic-bezier(.22,1,.36,1)`)}>UGC FINANCE MANAGEMENT</span>{"\n    "}<h1 style={sty(`margin:22px 0 0;font-family:'Bricolage Grotesque',sans-serif;font-weight:500;font-size:${S(v.L?.h1)};line-height:1.04;letter-spacing:-.01em;color:#F3F4F8;display:flex;flex-wrap:wrap;justify-content:center;column-gap:.24em;row-gap:.02em;max-width:14ch`)}>{"\n      "}<span style={sty(`display:inline-block;opacity:${S(v.E?.op)};transform:${S(v.E?.word)};transition:opacity 600ms cubic-bezier(.22,1,.36,1) 100ms,transform 600ms cubic-bezier(.22,1,.36,1) 100ms`)}>Financial</span>{"\n      "}<span style={sty(`display:inline-block;opacity:${S(v.E?.op)};transform:${S(v.E?.word)};transition:opacity 600ms cubic-bezier(.22,1,.36,1) 180ms,transform 600ms cubic-bezier(.22,1,.36,1) 180ms`)}><span style={{"position":"relative","display":"inline-block"}}>clarity<span aria-hidden="true" style={sty(`position:absolute;left:0;right:0;bottom:.02em;height:2px;border-radius:2px;background:linear-gradient(90deg,rgba(240,190,94,0),#F0BE5E 20%,#F0BE5E 80%,rgba(240,190,94,0));transform-origin:left;transform:scaleX(${S(v.E?.ul)});transition:transform 600ms cubic-bezier(.22,1,.36,1) 560ms`)}></span></span>,</span>{"\n      "}<span style={sty(`display:inline-block;opacity:${S(v.E?.op)};transform:${S(v.E?.word)};transition:opacity 600ms cubic-bezier(.22,1,.36,1) 260ms,transform 600ms cubic-bezier(.22,1,.36,1) 260ms`)}>beautifully</span>{"\n      "}<span style={sty(`display:inline-block;opacity:${S(v.E?.op)};transform:${S(v.E?.word)};transition:opacity 600ms cubic-bezier(.22,1,.36,1) 340ms,transform 600ms cubic-bezier(.22,1,.36,1) 340ms`)}>simple.</span>{"\n    "}</h1>{"\n    "}<p style={sty(`margin:22px 0 0;max-width:520px;font-size:clamp(17px,1.4vw,19px);font-weight:500;line-height:1.55;color:#A9ADBF;text-wrap:pretty;opacity:${S(v.E?.op)};transition:opacity 500ms cubic-bezier(.22,1,.36,1) 640ms`)}>Track spending, approvals, budgets, and cash flow in one calm view.</p>{"\n    "}<div style={sty(`margin-top:32px;display:flex;flex-wrap:wrap;justify-content:center;gap:12px;opacity:${S(v.E?.op)};transform:${S(v.E?.btn)};transition:opacity 450ms cubic-bezier(.22,1,.36,1) 700ms,transform 450ms cubic-bezier(.22,1,.36,1) 700ms`)}>{"\n      "}<a href="#login" style={{"display":"inline-flex","alignItems":"center","gap":"8px","height":"52px","padding":"0 24px","borderRadius":"12px","background":"#F3F4F8","color":"#07060F","fontSize":"16px","fontWeight":"700","whiteSpace":"nowrap","transition":"background 320ms ease,color 320ms ease,box-shadow 320ms ease,transform 160ms ease"}} className="p-statgchero-1 p-statgchero-2">Start free<span aria-hidden="true" style={{"width":"16px","height":"16px","background":"currentColor","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-right.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-right.svg) center/contain no-repeat"}}></span></a>{"\n      "}<a href="#how" style={{"display":"inline-flex","alignItems":"center","height":"52px","padding":"0 22px","borderRadius":"12px","border":"1px solid rgba(255,255,255,.18)","color":"#F3F4F8","fontSize":"16px","fontWeight":"600","whiteSpace":"nowrap","transition":"background 200ms ease,transform 160ms ease"}} className="p-statgchero-3 p-statgchero-2">See how it works</a>{"\n    "}</div>{"\n    "}<ul style={sty(`list-style:none;margin:22px 0 0;padding:0;display:flex;flex-wrap:wrap;justify-content:center;gap:8px 20px;opacity:${S(v.E?.op)};transition:opacity 450ms ease 760ms`)}>{"\n      "}<li style={{"display":"flex","alignItems":"center","gap":"8px","fontSize":"14px","fontWeight":"500","color":"#A9ADBF","whiteSpace":"nowrap"}}><span aria-hidden="true" style={{"width":"4px","height":"4px","borderRadius":"999px","background":"#A48EEA"}}></span>Real-time visibility</li>{"\n      "}<li style={{"display":"flex","alignItems":"center","gap":"8px","fontSize":"14px","fontWeight":"500","color":"#A9ADBF","whiteSpace":"nowrap"}}><span aria-hidden="true" style={{"width":"4px","height":"4px","borderRadius":"999px","background":"#A48EEA"}}></span>Smart approvals</li>{"\n      "}<li style={{"display":"flex","alignItems":"center","gap":"8px","fontSize":"14px","fontWeight":"500","color":"#A9ADBF","whiteSpace":"nowrap"}}><span aria-hidden="true" style={{"width":"4px","height":"4px","borderRadius":"999px","background":"#A48EEA"}}></span>Bank-grade security</li>{"\n    "}</ul>{"\n    "}<div style={sty(`margin-top:${S(v.L?.cardMt)};width:100%;max-width:${S(v.L?.cardW)};opacity:${S(v.E?.op)};transform:${S(v.E?.card)};filter:${S(v.E?.blur)};transition:opacity 500ms cubic-bezier(.22,1,.36,1) 700ms,transform 500ms cubic-bezier(.22,1,.36,1) 700ms,filter 500ms cubic-bezier(.22,1,.36,1) 700ms`)}>{"\n      "}<div ref={v.floatRef}>{"\n        "}<div style={sty(`display:flex;flex-direction:column;gap:18px;padding:${S(v.L?.cardPad)};border-radius:22px;text-align:left;background:rgba(18,16,36,.66);border:1px solid rgba(255,255,255,.10);-webkit-backdrop-filter:blur(20px) saturate(140%);backdrop-filter:blur(20px) saturate(140%);box-shadow:0 50px 100px -40px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.06),0 0 80px -30px rgba(164,142,234,.45);transition:transform 320ms cubic-bezier(.22,1,.36,1),border-color 320ms ease,box-shadow 320ms ease`)} className="p-statgchero-4">{"\n          "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","flexWrap":"wrap"}}>{"\n            "}<span style={{"fontSize":"16px","fontWeight":"700","color":"#F3F4F8"}}>Cash flow this month</span>{"\n          "}</div>{"\n          "}<svg viewBox="0 0 520 150" role="img" aria-label="Cash flow rising steadily through the month" style={{"display":"block","width":"100%","height":"auto","overflow":"visible"}}>{"\n            "}<defs><linearGradient id="sgcArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#A48EEA" stopOpacity=".22"></stop><stop offset="1" stopColor="#A48EEA" stopOpacity="0"></stop></linearGradient></defs>{"\n            "}<line x1="0" x2="520" y1="40" y2="40" stroke="rgba(255,255,255,.06)"></line>{"\n            "}<line x1="0" x2="520" y1="90" y2="90" stroke="rgba(255,255,255,.06)"></line>{"\n            "}<line x1="0" x2="520" y1="140" y2="140" stroke="rgba(255,255,255,.08)"></line>{"\n            "}<path d="M0 122 C 40 118, 70 108, 110 110 S 180 96, 220 90 S 300 78, 340 66 S 430 42, 516 24 L516 140 L0 140 Z" fill="url(#sgcArea)" style={sty(`opacity:${S(v.C?.area)};transition:opacity 900ms ease 700ms`)}></path>{"\n            "}<path ref={v.pathRef} d="M0 122 C 40 118, 70 108, 110 110 S 180 96, 220 90 S 300 78, 340 66 S 430 42, 516 24" fill="none" stroke="#F3F4F8" strokeWidth="2.2" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={v.C?.off} style={sty(`transition:stroke-dashoffset ${S(v.C?.dur)} cubic-bezier(.45,0,.2,1)`)}></path>{"\n            "}<g ref={v.dotRef} style={{"opacity":"0"}}>{"\n              "}<circle ref={v.t5} r="2" fill="#F0BE5E" opacity=".12"></circle>{"\n              "}<circle ref={v.t4} r="2.2" fill="#F0BE5E" opacity=".2"></circle>{"\n              "}<circle ref={v.t3} r="2.4" fill="#F0BE5E" opacity=".3"></circle>{"\n              "}<circle ref={v.t2} r="2.7" fill="#F0BE5E" opacity=".42"></circle>{"\n              "}<circle ref={v.t1} r="3" fill="#F0BE5E" opacity=".55"></circle>{"\n              "}<circle ref={v.dGlow} r="12" fill="#F0BE5E" opacity=".16"></circle>{"\n              "}<circle ref={v.dCore} r="4.2" fill="#F0BE5E"></circle>{"\n            "}</g>{"\n          "}</svg>{"\n          "}<div style={sty(`display:grid;grid-template-columns:repeat(${S(v.L?.mN)},minmax(0,1fr));gap:10px`)}>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"6px","padding":"12px 14px","borderRadius":"14px","background":"rgba(255,255,255,.04)","border":"1px solid rgba(240,190,94,.28)"}}>{"\n              "}<span style={{"fontSize":"12.5px","fontWeight":"600","color":"#A9ADBF","whiteSpace":"nowrap"}}>Available balance</span>{"\n              "}<span ref={v.v0} style={sty(`font-family:'Bricolage Grotesque',sans-serif;font-size:${S(v.L?.mFs)};font-weight:600;line-height:1;color:#F0BE5E;white-space:nowrap`)}>{T(v.C?.v0)}</span>{"\n            "}</div>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"6px","padding":"12px 14px","borderRadius":"14px","background":"rgba(255,255,255,.04)","border":"1px solid rgba(255,255,255,.07)"}}>{"\n              "}<span style={{"fontSize":"12.5px","fontWeight":"600","color":"#A9ADBF","whiteSpace":"nowrap"}}>Monthly spend</span>{"\n              "}<span ref={v.v1} style={sty(`font-family:'Bricolage Grotesque',sans-serif;font-size:${S(v.L?.mFs)};font-weight:600;line-height:1;color:#F3F4F8;white-space:nowrap`)}>{T(v.C?.v1)}</span>{"\n            "}</div>{"\n            "}{(v.L?.third) ? (<>{"\n              "}<div style={{"display":"flex","flexDirection":"column","gap":"6px","padding":"12px 14px","borderRadius":"14px","background":"rgba(255,255,255,.04)","border":"1px solid rgba(255,255,255,.07)"}}>{"\n                "}<span style={{"fontSize":"12.5px","fontWeight":"600","color":"#A9ADBF","whiteSpace":"nowrap"}}>Pending approvals</span>{"\n                "}<span ref={v.v2} style={sty(`font-family:'Bricolage Grotesque',sans-serif;font-size:${S(v.L?.mFs)};font-weight:600;line-height:1;color:#F3F4F8;white-space:nowrap`)}>{T(v.C?.v2)}</span>{"\n              "}</div>{"\n            "}</>) : null}{"\n          "}</div>{"\n        "}</div>{"\n      "}</div>{"\n    "}</div>{"\n  "}</div></section>
      </DCHost>
    );
  }
}
