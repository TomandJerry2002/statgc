// @ts-nocheck
// Generated from "FlowGC Wave Text.dc.html" by scripts/dc-convert.js. Inline styles and logic are kept as in the prototype so it renders the same.
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
  waveRef = React.createRef(); waveRow = React.createRef(); waveH2 = React.createRef(); waveFill = React.createRef();
  WAVE = 'How you get paid on time.';
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
      const h2 = this.waveH2.current, fl = this.waveFill.current, dotEl = this.waveRefs[this.waveRefs.length - 1].current;
      if (!this._wx || this._wvw !== vw) {
        wr.style.transform = 'none'; if (h2) h2.style.transform = 'none'; this.waveRefs.forEach(r => { if (r.current) r.current.style.transform = 'none'; });
        this._wvw = vw; this._wx = this.waveRefs.map(r => r.current ? r.current.offsetLeft + r.current.offsetWidth / 2 : 0); this._ww = wr.scrollWidth;
        if (dotEl && h2) { const dr = dotEl.getBoundingClientRect(), hr = h2.getBoundingClientRect(); this._dot = { x: dr.left + dr.width / 2 - hr.left, y: dr.top + dr.height / 2 - hr.top, d: Math.max(4, dr.width) }; }
      }
      const P = still ? 0 : this.prog(ws), D = this._dot || { x: this._ww, y: 0, d: 20 };
      const p = still ? 1 : cl(P / .92), tx = still ? -Math.max(0, D.x - vw * .5) : -p * (D.x + D.d + vw * .08);
      const z = 0;
      if (h2) {
        const sMax = Math.hypot(vw, vh) * 2.4 / D.d, s = z > 0 ? Math.pow(sMax, z * z * (3 - 2 * z) * .35 + z * .65) : 1;
        h2.style.transformOrigin = `${(D.x + tx).toFixed(1)}px ${D.y.toFixed(1)}px`;
        h2.style.transform = s > 1 ? `scale(${s.toFixed(4)})` : 'none';
      }
      if (fl) fl.style.opacity = cl((z - .86) / .1).toFixed(3);
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
      waveRef: this.waveRef, waveRow: this.waveRow, waveH2: this.waveH2, waveFill: this.waveFill, waveH: still ? '100vh' : '460vh', waveFs: m ? '42vw' : 'min(46vh,30vw)',
      waveChars: this.WAVE.split('').map((ch, i, a) => ({ ch, ref: this.waveRefs[i], dot: i === a.length - 1, txt: i !== a.length - 1 })),
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

export default class FlowGCWaveText extends Component {
  render() {
    const v = { ...this.props, ...(this.renderVals() || {}) };
    return (
      <DCHost id="FlowGCWaveText" css={CSS} links={LINKS} hostStyle={this.props.__hostStyle}>
        <div style={{"position":"relative","background":"#07060F"}}><section ref={v.waveRef} data-screen-label="How you get paid" style={sty(`position:relative;height:${S(v.waveH)};background:#07060F`)}>{"\n  "}<div style={{"position":"sticky","top":"0","height":"100vh","overflow":"hidden","display":"flex","alignItems":"center"}}>{"\n    "}<h2 ref={v.waveH2} aria-label="How you get paid on time." style={sty(`margin:0;will-change:transform;font-family:'Bricolage Grotesque',sans-serif;font-weight:500;font-size:${S(v.waveFs)};line-height:1;letter-spacing:-.03em;color:#F0BE5E;white-space:nowrap`)}>{"\n      "}<span ref={v.waveRow} aria-hidden="true" style={{"display":"inline-flex","alignItems":"baseline","paddingLeft":"4vw"}}>{L(v.waveChars).map(($it1, $i1) => { const v1 = { ...v, wc: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{(v1.wc?.txt) ? (<><span ref={v1.wc?.ref} style={{"display":"inline-block","whiteSpace":"pre"}}>{T(v1.wc?.ch)}</span></>) : null}{(v1.wc?.dot) ? (<><span ref={v1.wc?.ref} style={{"display":"inline-block","width":".17em","height":".17em","borderRadius":"50%","background":"#F0BE5E","marginLeft":".05em"}}></span></>) : null}</React.Fragment>); })}</span>{"\n    "}</h2>{"\n    "}<div ref={v.waveFill} aria-hidden="true" style={{"position":"absolute","inset":"0","background":"#F0BE5E","opacity":"0","pointerEvents":"none"}}></div>{"\n  "}</div></section></div>
      </DCHost>
    );
  }
}
