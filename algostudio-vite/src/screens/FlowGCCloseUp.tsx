// @ts-nocheck
// Generated from "FlowGC Close-up.dc.html" by scripts/dc-convert.js. Inline styles and logic are kept as in the prototype so it renders the same.
import React from 'react';
import { DCLogic, DCHost, sty, T, S, L, R, hostPos, XImport } from '@/dc/runtime';


const CSS = `
@font-face{font-family:'Satoshi';src:url('/assets/Satoshi-Variable.woff2') format('woff2');font-weight:300 900;font-style:normal;font-display:swap}
html,body{margin:0;padding:0;background:#07060F}
body{font-family:'Satoshi',ui-sans-serif,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:geometricPrecision;font-optical-sizing:auto;color:#F3F4F8;overflow-x:hidden}
h1,h2,h3{font-kerning:normal;font-feature-settings:'kern' 1,'liga' 1}
*{box-sizing:border-box}
a{color:inherit;text-decoration:none}
a:hover{color:inherit}
:focus-visible{outline:2px solid #F0BE5E;outline-offset:3px}

`;
const LINKS = ["https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&display=swap"];

class Component extends DCLogic {
  state = (() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1440;
    const still = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    return { m: w < 760, still, rb: null, step: -1 };
  })();
  zoomRef = React.createRef(); zoomInner = React.createRef(); dotRef = React.createRef(); fillRef = React.createRef(); hintRef = React.createRef(); marqWrap = React.createRef();
  revRef = React.createRef(); braceRef = React.createRef(); braceL = React.createRef(); braceR = React.createRef(); braceW = React.createRef();
  benRef = React.createRef(); benMarq = React.createRef();
  waveRef = React.createRef(); waveRow = React.createRef();
  WAVE = 'How you get paid on time';
  waveRefs = this.WAVE.split('').map(() => React.createRef());
  rowRefs = [0, 1, 2, 3, 4].map(() => React.createRef());
  REV = 'Add a brand. Log the offer. Split it into an advance and a final payment. Record what arrives, with the UTR and a screenshot. FlowGC works out where every deal stands and what you should do next.';
  revRefs = this.REV.split(' ').map(() => React.createRef());
  componentDidMount() {
    this._resize = () => { const m = window.innerWidth < 760; if (m !== this.state.m) this.setState({ m }); this._origin = null; this._wx = null; };
    window.addEventListener('resize', this._resize);
    const f = now => { this._raf = requestAnimationFrame(f); this.tick(now / 1000); };
    this._raf = requestAnimationFrame(f);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { this._origin = null; this._wx = null; });
  }
  componentWillUnmount() { cancelAnimationFrame(this._raf); window.removeEventListener('resize', this._resize); }
  prog(el, endOff) {
    if (!el) return 0;
    const r = el.getBoundingClientRect(), total = Math.max(1, el.offsetHeight - (endOff ?? window.innerHeight));
    return Math.max(0, Math.min(1, -r.top / total));
  }
  tick(T) {
    const still = this.state.still, vh = window.innerHeight, vw = window.innerWidth, sy = window.scrollY || 0;
    const cl = v => Math.max(0, Math.min(1, v));
    // marquee rows
    this.rowRefs.forEach((r, i) => {
      const el = r.current; if (!el) return;
      const dir = i % 2 ? 1 : -1, w = el.scrollWidth / 2;
      const x = still ? -w * .25 : ((T * (18 + i * 6) + sy * .5) * dir) % w;
      el.style.transform = `translate3d(${(dir > 0 ? x - w : x).toFixed(1)}px,0,0)`;
    });
    // zoom
    const inner = this.zoomInner.current, dot = this.dotRef.current, fill = this.fillRef.current;
    if (inner && dot && fill) {
      if (still) { inner.style.transform = 'none'; fill.style.opacity = 0; }
      else {
        if (!this._origin) {
          inner.style.transform = 'none';
          const ir = inner.getBoundingClientRect(), dr = dot.getBoundingClientRect();
          this._origin = { x: dr.left + dr.width / 2 - ir.left, y: dr.top + dr.height / 2 - ir.top, d: dr.width };
          inner.style.transformOrigin = `${this._origin.x}px ${this._origin.y}px`;
        }
        const p = this.prog(this.zoomRef.current), O = this._origin;
        const sMax = Math.hypot(vw, vh) * 2.4 / Math.max(4, O.d);
        const k = cl((p - .06) / .8), s = Math.pow(sMax, k * k * (3 - 2 * k) * .35 + k * .65);
        inner.style.transform = `scale(${s.toFixed(4)})`; inner.style.willChange = 'auto';
        fill.style.opacity = cl((p - .8) / .08).toFixed(3);
        const mw = this.marqWrap.current; if (mw) mw.style.opacity = (1 - cl(p / .5)).toFixed(3);
      }
      const h = this.hintRef.current; if (h) h.style.opacity = (1 - cl(sy / 200)).toFixed(3);
    }
    // word reveal
    const rp = still ? 1 : this.prog(this.revRef.current), n = this.revRefs.length;
    this.revRefs.forEach((r, i) => { const el = r.current; if (el) el.style.opacity = (rp * (n + 4) > i ? 1 : .14); });
    // braces
    const br = this.braceRef.current;
    if (br && this.braceL.current) {
      const r = br.getBoundingClientRect(), bp = still ? 1 : cl((vh - r.top) / (vh + r.height * .4));
      const gap = (1 - bp) * 0 + bp * .28;
      this.braceL.current.style.transform = `translateX(${(-gap).toFixed(3)}em)`;
      this.braceR.current.style.transform = `translateX(${gap.toFixed(3)}em)`;
      this.braceW.current.style.opacity = cl(bp * 1.6 - .2).toFixed(3);
      this.braceW.current.style.transform = `scale(${(.8 + .2 * cl(bp * 1.4)).toFixed(3)})`;
    }
    // falling-letter wave
    const wr = this.waveRow.current, ws = this.waveRef.current;
    if (wr && ws) {
      if (!this._wx || this._wvw !== vw) { wr.style.transform = 'none'; this._wvw = vw; this._wx = this.waveRefs.map(r => r.current ? r.current.offsetLeft + r.current.offsetWidth / 2 : 0); this._ww = wr.scrollWidth; }
      const p = still ? 1 : Math.min(1, this.prog(ws) / .88), tx = -p * Math.max(0, this._ww - vw * .42);
      wr.style.transform = `translateX(${Math.round(tx)}px)`;
      const fs = parseFloat(getComputedStyle(wr).fontSize) || 300, edge = vw * .5, span = vw * .55;
      this.waveRefs.forEach((r, i) => {
        const el = r.current; if (!el) return;
        const d = still ? 0 : cl((this._wx[i] + tx - edge) / span), e = d * d * (3 - 2 * d);
        el.style.transform = `translateY(${Math.round(e * fs * .62)}px)`;
        el.style.opacity = (1 - e * .78).toFixed(3);
      });
    }
    // benefits marquee
    const bm = this.benMarq.current, ben = this.benRef.current;
    if (bm && ben) { const w = bm.scrollWidth / 2, r = ben.getBoundingClientRect(); bm.style.transform = `translate3d(${(still ? 0 : -((T * 24 + (vh - r.top) * .6) % w)).toFixed(1)}px,0,0)`; }
  }
  renderVals() {
    const s = this.state, m = s.m, still = s.still;
    const btn = k => ({ y: s.rb === k ? '-50%' : '0%', on: () => this.setState({ rb: k }), off: () => this.setState(st => st.rb === k ? { rb: null } : null) });
    const steps = [
      ['01', 'Add the brand', 'Name, contact person, phone, email and UPI ID, saved once.'],
      ['02', 'Log the offer', 'Enter the dates as it moves. The status and next step update on their own.'],
      ['03', 'Split into payments', 'An advance and a final payment, each with its own amount and due date.'],
      ['04', 'Record what arrives', 'Part payments with method, UTR and a screenshot. See what is still owed.']
    ];
    return {
      zoomRef: this.zoomRef, zoomInner: this.zoomInner, dotRef: this.dotRef, fillRef: this.fillRef, hintRef: this.hintRef, marqWrap: this.marqWrap,
      revRef: this.revRef, braceRef: this.braceRef, braceL: this.braceL, braceR: this.braceR, braceW: this.braceW, benRef: this.benRef, benMarq: this.benMarq,
      navD: m ? 'none' : 'block',
      waveRef: this.waveRef, waveRow: this.waveRow, waveH: still ? '100vh' : '420vh', waveFs: m ? '42vw' : 'min(46vh,30vw)',
      waveChars: this.WAVE.split('').map((ch, i) => ({ ch, ref: this.waveRefs[i] })),
      zoomH: still ? '100vh' : '300vh', revH: still ? 'auto' : '200vh',
      marqRows: this.rowRefs.map(ref => ({ ref })),
      revWords: this.REV.split(' ').map((t, i) => ({ t, ref: this.revRefs[i] })),
      rb: { nav: btn('nav'), a: btn('a'), b: btn('b') },
      stepCols: m ? 'minmax(0,1fr)' : '80px minmax(0,1fr) minmax(0,360px)',
      steps: steps.map(([n, t, b], i) => { const on = s.step === i; return { n, t, b, nc: on ? '#F0BE5E' : '#A48EEA', tc: on ? '#F0BE5E' : '#F3F4F8', x: on && !m ? '16px' : '0px', on: () => this.setState({ step: i }), off: () => this.setState(st => st.step === i ? { step: -1 } : null) }; }),
      feats: [
        { t: 'Brands', b: 'Every brand with its contact person, phone, email and UPI ID.' },
        { t: 'Deal status', b: 'Draft offer, Offer sent, Offer follow-up, Agreed / Active, Declined or Cancelled, worked out from your dates.' },
        { t: 'Next step', b: 'Send offer, Send reminder, Await reply, Create payment schedule, Collect payment or Done. Deals waiting on the brand are flagged.' },
        { t: 'Payments', b: 'Split a deal into payments with their own amounts and due dates. See paid and still owed on each one.' },
        { t: 'Proof', b: 'Part payments with method, UTR number and a screenshot. Mark a payment disputed or written off, and undo it.' },
        { t: 'Insights', b: 'Total owed, overdue, waiting and received for each currency. On-time rate, oldest overdue and your top-paying brand.' }
      ]
    };
  }
}

export default class FlowGCCloseUp extends Component {
  render() {
    const v = { ...this.props, ...(this.renderVals() || {}) };
    return (
      <DCHost id="FlowGCCloseUp" css={CSS} links={LINKS} hostStyle={this.props.__hostStyle}>
        <div style={{"position":"relative","background":"#07060F"}}><header style={{"position":"fixed","top":"0","left":"0","right":"0","zIndex":"50","mixBlendMode":"difference","color":"#FFFFFF","pointerEvents":"none"}}>{"\n  "}<div style={{"maxWidth":"1440px","margin":"0 auto","padding":"22px clamp(20px,3vw,40px)","display":"flex","alignItems":"center","justifyContent":"space-between","gap":"16px"}}>{"\n    "}<a href="#top" style={{"pointerEvents":"auto","fontFamily":"'Bricolage Grotesque',sans-serif","fontSize":"22px","fontWeight":"600","letterSpacing":"-.02em","color":"#FFFFFF"}}>FlowGC</a>{"\n    "}<nav style={{"pointerEvents":"auto","display":"flex","alignItems":"center","gap":"clamp(12px,2vw,28px)"}}>{"\n      "}<a href="#what" style={sty(`display:${S(v.navD)};font-size:15px;font-weight:600;color:#FFFFFF`)}>What it does</a>{"\n      "}<a href="#steps" style={sty(`display:${S(v.navD)};font-size:15px;font-weight:600;color:#FFFFFF`)}>How it works</a>{"\n      "}<a href="#everything" style={sty(`display:${S(v.navD)};font-size:15px;font-weight:600;color:#FFFFFF`)}>Features</a>{"\n      "}<a href="#login" onMouseEnter={v.rb?.nav?.on} onMouseLeave={v.rb?.nav?.off} style={{"display":"inline-flex","alignItems":"center","height":"42px","padding":"0 20px","borderRadius":"999px","border":"1.5px solid #FFFFFF","color":"#FFFFFF","fontSize":"15px","fontWeight":"700"}}><span style={{"display":"block","height":"20px","overflow":"hidden","lineHeight":"20px"}}><span style={sty(`display:flex;flex-direction:column;transform:translateY(${S(v.rb?.nav?.y)});transition:transform 460ms cubic-bezier(.7,0,.2,1)`)}><span>Get started</span><span>Get started</span></span></span></a>{"\n    "}</nav>{"\n  "}</div></header><section id="top" ref={v.zoomRef} data-screen-label="Close-up" style={sty(`position:relative;height:${S(v.zoomH)};background:#07060F`)}>{"\n  "}<div style={{"position":"sticky","top":"0","height":"100vh","overflow":"hidden","display":"grid","placeItems":"center"}}>{"\n    "}<div ref={v.marqWrap} aria-hidden="true" style={{"position":"absolute","inset":"0","display":"flex","flexDirection":"column","justifyContent":"center","gap":"2vh","pointerEvents":"none"}}>{"\n      "}{L(v.marqRows).map(($it1, $i1) => { const v1 = { ...v, mr: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n        "}<div ref={v1.mr?.ref} style={{"display":"flex","gap":"4vw","whiteSpace":"nowrap","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"700","fontSize":"clamp(64px,12vw,200px)","lineHeight":".95","letterSpacing":"-.04em","color":"transparent","WebkitTextStroke":"1px rgba(164,142,234,.22)","willChange":"transform"}}>{"\n          "}<span>FlowGC</span><span>FlowGC</span><span>FlowGC</span><span>FlowGC</span><span>FlowGC</span><span>FlowGC</span>{"\n        "}</div>{"\n      "}</React.Fragment>); })}{"\n    "}</div>{"\n    "}<div aria-hidden="true" style={{"position":"absolute","inset":"0","pointerEvents":"none","background":"radial-gradient(60% 55% at 50% 50%,rgba(7,6,15,.92) 0%,rgba(7,6,15,.6) 55%,rgba(7,6,15,0) 100%)"}}></div>{"\n    "}<div ref={v.zoomInner} style={{"position":"relative","zIndex":"1","textAlign":"center","padding":"0 20px","backfaceVisibility":"hidden"}}>{"\n      "}<span style={{"display":"block","fontSize":"13px","fontWeight":"700","letterSpacing":".24em","color":"#A48EEA","marginBottom":"28px"}}>UGC FINANCE MANAGEMENT</span>{"\n      "}<h1 style={{"margin":"0","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"600","fontSize":"clamp(54px,10.5vw,188px)","lineHeight":".9","letterSpacing":"-.045em","color":"#F3F4F8"}}>We just track<br />brand deals<span ref={v.dotRef} style={{"display":"inline-block","width":".19em","height":".19em","borderRadius":"50%","background":"#F3F4F8","marginLeft":".05em"}}></span></h1>{"\n    "}</div>{"\n    "}<div ref={v.fillRef} aria-hidden="true" style={{"position":"absolute","inset":"0","zIndex":"2","background":"#F3F4F8","opacity":"0","pointerEvents":"none"}}></div>{"\n    "}<div ref={v.hintRef} style={{"position":"absolute","left":"0","right":"0","bottom":"32px","zIndex":"3","display":"flex","justifyContent":"center","gap":"10px","alignItems":"center","fontSize":"12px","fontWeight":"700","letterSpacing":".22em","color":"#A9ADBF"}}>{"\n      "}<span>SCROLL TO ZOOM</span>{"\n    "}</div>{"\n  "}</div></section><section ref={v.revRef} data-screen-label="And that's all" style={sty(`position:relative;height:${S(v.revH)};background:#F3F4F8;color:#111111`)}>{"\n  "}<div style={{"position":"sticky","top":"0","minHeight":"100vh","display":"flex","flexDirection":"column","justifyContent":"center","maxWidth":"1240px","margin":"0 auto","padding":"120px clamp(20px,4vw,48px) 80px","gap":"40px"}}>{"\n    "}<span style={{"fontFamily":"'Bricolage Grotesque',sans-serif","fontSize":"clamp(22px,2.4vw,32px)","fontWeight":"500","letterSpacing":"-.02em","color":"#6D55C9"}}>and the money they owe you. That's all.</span>{"\n    "}<p style={{"margin":"0","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"500","fontSize":"clamp(30px,4.6vw,72px)","lineHeight":"1.04","letterSpacing":"-.035em","textWrap":"pretty"}}>{"\n      "}{L(v.revWords).map(($it1, $i1) => { const v1 = { ...v, w: $it1, $index: $i1 }; return (<React.Fragment key={$i1}><span ref={v1.w?.ref} style={{"opacity":".14","transition":"opacity 220ms linear"}}>{T(v1.w?.t)}{" "}</span></React.Fragment>); })}{"\n    "}</p>{"\n    "}<div style={{"display":"flex"}}>{"\n      "}<a href="#login" onMouseEnter={v.rb?.a?.on} onMouseLeave={v.rb?.a?.off} style={{"display":"inline-flex","alignItems":"center","height":"58px","padding":"0 30px","borderRadius":"999px","background":"#111111","color":"#F3F4F8","fontSize":"17px","fontWeight":"700"}}><span style={{"display":"block","height":"22px","overflow":"hidden","lineHeight":"22px"}}><span style={sty(`display:flex;flex-direction:column;transform:translateY(${S(v.rb?.a?.y)});transition:transform 460ms cubic-bezier(.7,0,.2,1)`)}><span>Try it free</span><span>Try it free</span></span></span></a>{"\n    "}</div>{"\n  "}</div></section><section id="what" ref={v.braceRef} data-screen-label="Easier" style={{"position":"relative","background":"#07060F","overflow":"hidden"}}>{"\n  "}<div style={{"maxWidth":"1440px","margin":"0 auto","padding":"clamp(120px,18vh,200px) clamp(20px,4vw,48px)","display":"flex","flexDirection":"column","alignItems":"center","textAlign":"center","gap":"28px"}}>{"\n    "}<h2 style={{"margin":"0","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"600","fontSize":"clamp(44px,8.4vw,150px)","lineHeight":".92","letterSpacing":"-.045em","color":"#F3F4F8"}}>Designed to make<br />getting paid</h2>{"\n    "}<div style={{"display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"600","fontSize":"clamp(44px,8.4vw,150px)","lineHeight":"1","letterSpacing":"-.045em"}}>{"\n      "}<span ref={v.braceL} style={{"color":"#F0BE5E","willChange":"transform"}}>{"{"}</span>{"\n      "}<span ref={v.braceW} style={{"color":"#F3F4F8","fontStyle":"italic","fontWeight":"500","willChange":"transform,opacity"}}>easier</span>{"\n      "}<span ref={v.braceR} style={{"color":"#F0BE5E","willChange":"transform"}}>{"}"}</span>{"\n    "}</div>{"\n    "}<p style={{"margin":"12px 0 0","maxWidth":"560px","fontSize":"clamp(17px,1.4vw,20px)","fontWeight":"500","lineHeight":"1.55","color":"#A9ADBF","textWrap":"pretty"}}>Every deal shows where it stands and what to do next, worked out from the dates you enter. You stop keeping it all in your head.</p>{"\n  "}</div></section><section id="steps" ref={v.waveRef} data-screen-label="How you get paid" style={sty(`position:relative;height:${S(v.waveH)};background:#07060F`)}>{"\n  "}<div style={{"position":"sticky","top":"0","height":"100vh","overflow":"hidden","display":"flex","alignItems":"center"}}>{"\n    "}<h2 aria-label="How you get paid on time" style={sty(`margin:0;font-family:'Bricolage Grotesque',sans-serif;font-weight:500;font-size:${S(v.waveFs)};line-height:1;letter-spacing:-.03em;color:#F0BE5E;white-space:nowrap`)}>{"\n      "}<span ref={v.waveRow} aria-hidden="true" style={{"display":"inline-flex","alignItems":"baseline","paddingLeft":"4vw"}}>{L(v.waveChars).map(($it1, $i1) => { const v1 = { ...v, wc: $it1, $index: $i1 }; return (<React.Fragment key={$i1}><span ref={v1.wc?.ref} style={{"display":"inline-block","whiteSpace":"pre"}}>{T(v1.wc?.ch)}</span></React.Fragment>); })}</span>{"\n    "}</h2>{"\n  "}</div></section><section data-screen-label="Steps" style={{"position":"relative","background":"#07060F","borderTop":"1px solid rgba(255,255,255,.08)"}}>{"\n  "}<div style={{"maxWidth":"1440px","margin":"0 auto","padding":"clamp(80px,12vh,140px) clamp(20px,4vw,48px)"}}>{"\n    "}{L(v.steps).map(($it1, $i1) => { const v1 = { ...v, st: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n      "}<div onMouseEnter={v1.st?.on} onMouseLeave={v1.st?.off} style={sty(`display:grid;grid-template-columns:${S(v1.stepCols)};gap:16px 32px;align-items:baseline;padding:28px 0;border-top:1px solid rgba(255,255,255,.12);cursor:default`)}>{"\n        "}<span style={sty(`font-size:14px;font-weight:700;letter-spacing:.16em;color:${S(v1.st?.nc)};transition:color 300ms ease`)}>{T(v1.st?.n)}</span>{"\n        "}<span style={sty(`font-family:'Bricolage Grotesque',sans-serif;font-weight:600;font-size:clamp(30px,4.4vw,68px);line-height:1;letter-spacing:-.04em;color:${S(v1.st?.tc)};transform:translateX(${S(v1.st?.x)});transition:color 300ms ease,transform 500ms cubic-bezier(.22,1,.36,1)`)}>{T(v1.st?.t)}</span>{"\n        "}<span style={{"fontSize":"16px","fontWeight":"500","lineHeight":"1.5","color":"#A9ADBF","maxWidth":"360px","textWrap":"pretty"}}>{T(v1.st?.b)}</span>{"\n      "}</div>{"\n    "}</React.Fragment>); })}{"\n  "}</div></section><section id="everything" ref={v.benRef} data-screen-label="Everything" style={{"position":"relative","background":"#F3F4F8","color":"#111111","overflow":"hidden"}}>{"\n  "}<div ref={v.benMarq} aria-hidden="true" style={{"display":"flex","gap":"4vw","whiteSpace":"nowrap","padding":"clamp(72px,10vh,120px) 0 24px","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"700","fontSize":"clamp(64px,11vw,190px)","lineHeight":".95","letterSpacing":"-.045em","color":"#111111","willChange":"transform"}}>{"\n    "}<span>Know what's owed</span><span style={{"color":"#6D55C9"}}>✦</span><span>Know what's owed</span><span style={{"color":"#6D55C9"}}>✦</span><span>Know what's owed</span><span style={{"color":"#6D55C9"}}>✦</span><span>Know what's owed</span><span style={{"color":"#6D55C9"}}>✦</span>{"\n  "}</div>{"\n  "}<div style={{"maxWidth":"1440px","margin":"0 auto","padding":"40px clamp(20px,4vw,48px) clamp(96px,14vh,160px)","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,320px),1fr))","gap":"0 48px"}}>{"\n    "}{L(v.feats).map(($it1, $i1) => { const v1 = { ...v, f: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n      "}<div style={{"display":"flex","flexDirection":"column","gap":"12px","padding":"32px 0","borderTop":"1.5px solid #111111"}}>{"\n        "}<h3 style={{"margin":"0","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"600","fontSize":"clamp(26px,2.4vw,36px)","lineHeight":"1.05","letterSpacing":"-.03em"}}>{T(v1.f?.t)}</h3>{"\n        "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.55","color":"#4A4A52","textWrap":"pretty"}}>{T(v1.f?.b)}</p>{"\n      "}</div>{"\n    "}</React.Fragment>); })}{"\n  "}</div></section><section data-screen-label="Final CTA" style={{"position":"relative","background":"#07060F","overflow":"hidden"}}>{"\n  "}<div style={{"maxWidth":"1440px","margin":"0 auto","padding":"clamp(120px,18vh,200px) clamp(20px,4vw,48px) 120px","display":"flex","flexDirection":"column","alignItems":"center","textAlign":"center","gap":"40px"}}>{"\n    "}<h2 style={{"margin":"0","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"600","fontSize":"clamp(56px,12vw,220px)","lineHeight":".88","letterSpacing":"-.05em","color":"#F3F4F8"}}>Get paid<br /><span style={{"color":"#F0BE5E"}}>on time.</span></h2>{"\n    "}<a href="#login" onMouseEnter={v.rb?.b?.on} onMouseLeave={v.rb?.b?.off} style={{"display":"inline-flex","alignItems":"center","height":"62px","padding":"0 34px","borderRadius":"999px","background":"#F0BE5E","color":"#1A1433","fontSize":"18px","fontWeight":"700"}}><span style={{"display":"block","height":"24px","overflow":"hidden","lineHeight":"24px"}}><span style={sty(`display:flex;flex-direction:column;transform:translateY(${S(v.rb?.b?.y)});transition:transform 460ms cubic-bezier(.7,0,.2,1)`)}><span>Start with your next deal</span><span>Start with your next deal</span></span></span></a>{"\n  "}</div>{"\n  "}<footer style={{"maxWidth":"1440px","margin":"0 auto","padding":"28px clamp(20px,4vw,48px)","borderTop":"1px solid rgba(255,255,255,.1)","display":"flex","flexWrap":"wrap","justifyContent":"space-between","gap":"12px","fontSize":"13px","fontWeight":"500","color":"#A9ADBF"}}>{"\n    "}<span>© 2026 FlowGC</span>{"\n    "}<div style={{"display":"flex","gap":"20px"}}><a href="/" style={{"color":"#A9ADBF"}}>Main site</a><a href="#privacy" style={{"color":"#A9ADBF"}}>Privacy</a><a href="#terms" style={{"color":"#A9ADBF"}}>Terms</a></div>{"\n  "}</footer></section></div>
      </DCHost>
    );
  }
}
