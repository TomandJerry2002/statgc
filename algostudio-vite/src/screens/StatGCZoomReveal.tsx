// @ts-nocheck
// Generated from "StatGC Zoom Reveal.dc.html" by scripts/dc-convert.js. Inline styles and logic are kept as in the prototype so it renders the same.
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
  REV = 'Add a brand. Log the offer. Split it into an advance and a final payment. Record what arrives, with the UTR and a screenshot. StatGC works out where every deal stands and what you should do next.';
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

export default class StatGCZoomReveal extends Component {
  render() {
    const v = { ...this.props, ...(this.renderVals() || {}) };
    return (
      <DCHost id="StatGCZoomReveal" css={CSS} links={LINKS} hostStyle={this.props.__hostStyle}>
        <div style={{"position":"relative","background":"#07060F"}}><section ref={v.zoomRef} data-screen-label="Close-up" style={sty(`position:relative;height:${S(v.zoomH)};background:#07060F;border-radius:32px 32px 0 0;box-shadow:0 -40px 80px -30px rgba(0,0,0,.7)`)}>{"\n  "}<div style={{"position":"sticky","top":"0","height":"100vh","overflow":"hidden","display":"grid","placeItems":"center","borderRadius":"32px 32px 0 0"}}>{"\n    "}<div ref={v.marqWrap} aria-hidden="true" style={{"position":"absolute","inset":"0","display":"flex","flexDirection":"column","justifyContent":"center","gap":"2vh","pointerEvents":"none"}}>{"\n      "}{L(v.marqRows).map(($it1, $i1) => { const v1 = { ...v, mr: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n        "}<div ref={v1.mr?.ref} style={{"display":"flex","gap":"4vw","whiteSpace":"nowrap","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"700","fontSize":"clamp(64px,12vw,200px)","lineHeight":".95","letterSpacing":"-.04em","color":"transparent","WebkitTextStroke":"1px rgba(164,142,234,.22)","willChange":"transform"}}>{"\n          "}<span>StatGC ®</span><span>StatGC ®</span><span>StatGC ®</span><span>StatGC ®</span><span>StatGC ®</span><span>StatGC ®</span>{"\n        "}</div>{"\n      "}</React.Fragment>); })}{"\n    "}</div>{"\n    "}<div aria-hidden="true" style={{"position":"absolute","inset":"0","pointerEvents":"none","background":"radial-gradient(60% 55% at 50% 50%,rgba(7,6,15,.92) 0%,rgba(7,6,15,.6) 55%,rgba(7,6,15,0) 100%)"}}></div>{"\n    "}<div ref={v.zoomInner} style={{"position":"relative","zIndex":"1","textAlign":"center","padding":"0 20px","backfaceVisibility":"hidden"}}>{"\n      "}<span style={{"display":"block","fontSize":"13px","fontWeight":"700","letterSpacing":".24em","color":"#A48EEA","marginBottom":"28px"}}>UGC FINANCE MANAGEMENT</span>{"\n      "}<h1 style={{"margin":"0","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"600","fontSize":"clamp(54px,10.5vw,188px)","lineHeight":".9","letterSpacing":"-.045em","color":"#F3F4F8"}}>We just track<br />brand deals<span ref={v.dotRef} style={{"display":"inline-block","width":".19em","height":".19em","borderRadius":"50%","background":"#F3F4F8","marginLeft":".05em"}}></span></h1>{"\n    "}</div>{"\n    "}<div ref={v.fillRef} aria-hidden="true" style={{"position":"absolute","inset":"0","zIndex":"2","background":"#F3F4F8","opacity":"0","pointerEvents":"none"}}></div>{"\n    "}<div ref={v.hintRef} style={{"position":"absolute","left":"0","right":"0","bottom":"32px","zIndex":"3","display":"flex","justifyContent":"center","gap":"10px","alignItems":"center","fontSize":"12px","fontWeight":"700","letterSpacing":".22em","color":"#A9ADBF"}}>{"\n      "}<span>SCROLL TO ZOOM</span>{"\n    "}</div>{"\n  "}</div></section><section ref={v.revRef} data-screen-label="And that's all" style={sty(`position:relative;height:${S(v.revH)};background:#F3F4F8;color:#111111`)}>{"\n  "}<div style={{"position":"sticky","top":"0","minHeight":"100vh","display":"flex","flexDirection":"column","justifyContent":"center","maxWidth":"1240px","margin":"0 auto","padding":"120px clamp(20px,4vw,48px) 80px","gap":"40px"}}>{"\n    "}<span style={{"fontFamily":"'Bricolage Grotesque',sans-serif","fontSize":"clamp(22px,2.4vw,32px)","fontWeight":"500","letterSpacing":"-.02em","color":"#6D55C9"}}>and the money they owe you. That's all.</span>{"\n    "}<p style={{"margin":"0","fontFamily":"'Bricolage Grotesque',sans-serif","fontWeight":"500","fontSize":"clamp(30px,4.6vw,72px)","lineHeight":"1.04","letterSpacing":"-.035em","textWrap":"pretty"}}>{"\n      "}{L(v.revWords).map(($it1, $i1) => { const v1 = { ...v, w: $it1, $index: $i1 }; return (<React.Fragment key={$i1}><span ref={v1.w?.ref} style={{"opacity":".14","transition":"opacity 220ms linear"}}>{T(v1.w?.t)}{" "}</span></React.Fragment>); })}{"\n    "}</p>{"\n    "}<div style={{"display":"flex"}}>{"\n      "}<a href="#login" onMouseEnter={v.rb?.a?.on} onMouseLeave={v.rb?.a?.off} style={{"display":"inline-flex","alignItems":"center","height":"58px","padding":"0 30px","borderRadius":"999px","background":"#111111","color":"#F3F4F8","fontSize":"17px","fontWeight":"700"}}><span style={{"display":"block","height":"22px","overflow":"hidden","lineHeight":"22px"}}><span style={sty(`display:flex;flex-direction:column;transform:translateY(${S(v.rb?.a?.y)});transition:transform 460ms cubic-bezier(.7,0,.2,1)`)}><span>Try it free</span><span>Try it free</span></span></span></a>{"\n    "}</div>{"\n  "}</div></section></div>
      </DCHost>
    );
  }
}
