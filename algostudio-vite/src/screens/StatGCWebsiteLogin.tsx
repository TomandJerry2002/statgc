// @ts-nocheck
// Generated from "StatGC Website Login.dc.html" by scripts/dc-convert.js. Inline styles and logic are kept as in the prototype so it renders the same.
import React from 'react';
import { DCLogic, DCHost, sty, T, S, L, R, hostPos, XImport } from '@/dc/runtime';
import { supabase } from '@/lib/supabase';


const CSS = `
@font-face{font-family:'Satoshi';src:url('/assets/Satoshi-Variable.woff2') format('woff2');font-weight:300 900;font-style:normal;font-display:swap}
html,body{margin:0;padding:0;background:#F7F6FA}
body{font-family:'Satoshi',ui-sans-serif,system-ui,sans-serif;color:#15122B;-webkit-font-smoothing:antialiased;font-variant-numeric:tabular-nums}
a{color:#6D55C9;text-decoration:none}
a:hover{color:#5A43B5}
:focus-visible{outline:2px solid #6D55C9;outline-offset:3px}
*{box-sizing:border-box}
input::placeholder{color:#9A97AB}
@keyframes lgFloor{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(0,80px,0)}}
@keyframes lgTx{0%{transform:translate3d(0,150px,0) scale(.96);opacity:0}15%{opacity:1;transform:translate3d(0,120px,0) scale(1)}75%{opacity:1}100%{transform:translate3d(0,0,0) scale(.98);opacity:0}}
@keyframes lgPulse{0%{box-shadow:0 0 0 0 rgba(70,219,165,.6)}70%{box-shadow:0 0 0 8px rgba(70,219,165,0)}100%{box-shadow:0 0 0 0 rgba(70,219,165,0)}}
@keyframes lgDraw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes lgStepIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes lgRise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes lgShake{0%,100%{transform:none}20%{transform:translateX(-5px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(2px)}}
@keyframes lgShake2{0%,100%{transform:none}20%{transform:translateX(-5px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(2px)}}
@keyframes lgPop{0%{opacity:0;transform:scale(.6)}60%{opacity:1;transform:scale(1.08)}100%{transform:scale(1)}}
@keyframes lgCaret{0%,49%{opacity:1}50%,100%{opacity:0}}
@keyframes lgFill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes lgSpin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion: reduce){*{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important}}

.p-statgcwebsitelogin-0:hover{background:#EEEDF3 !important;color:#15122B !important}
.p-statgcwebsitelogin-1:hover{filter:brightness(1.08) !important}
.p-statgcwebsitelogin-2:active{transform:scale(.97) !important}
.p-statgcwebsitelogin-3:hover{background:#F1EDFF !important}
`;
const LINKS = ["https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Jost:wght@400;500;600&display=swap"];

class Component extends DCLogic {
  state = { busy: false, err: '', toast: '', wide: true,
    still: typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches };

  componentDidMount() {
    this._rs = () => this.setState({ wide: window.innerWidth >= 960 });
    this._rs(); window.addEventListener('resize', this._rs);
    // Already signed in: skip the login card.
    try { supabase().auth.getSession().then(({ data }) => { if (data.session) window.location.replace('/app'); }).catch(e => console.error(e)); }
    catch (e) { console.error(e); }
  }
  componentWillUnmount() { window.removeEventListener('resize', this._rs); clearTimeout(this._t); }

  toast(t) { clearTimeout(this._t); this.setState({ toast: t }); this._t = setTimeout(() => this.setState({ toast: '' }), 2600); }

  async google() {
    if (this.state.busy) return;
    this.setState({ busy: true, err: '' });
    try {
      const { error } = await supabase().auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin + '/app' } });
      if (error) throw error;
      // On success the browser leaves for Google, so busy stays on.
    } catch (e) {
      console.error(e);
      this.setState({ busy: false, err: "Couldn't open Google sign-in. Check your connection and try again." });
    }
  }

  renderVals() {
    const s = this.state, ic = n => 'https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg';
    return {
      google: () => this.google(), busy: s.busy, busyOp: s.busy ? 0.8 : 1,
      googleLabel: s.busy ? 'Opening Google…' : 'Continue with Google',
      hasErr: !!s.err, err: s.err,
      hasToast: !!s.toast, toast: s.toast,
      panelDisplay: s.wide ? 'block' : 'none',
      onBack: e => { if (this.props.onClose) { e.preventDefault(); this.props.onClose(); } },
      floorAnim: s.still ? 'none' : 'lgFloor 7s linear infinite', pulseAnim: s.still ? 'none' : 'lgPulse 2s ease-out infinite',
      steps: [
        { label: 'GlowSkin India confirmed terms', time: '10:15', icon: ic('badge-check'), bg: '#F1EDFF', fg: '#6D55C9' },
        { label: '₹25,000 received', time: '14:10', icon: ic('banknote'), bg: '#E9F7F0', fg: '#0E8A5C' },
        { label: 'Reminder sent to Hearth Coffee', time: '15:00', icon: ic('bell-ring'), bg: '#FBEFD8', fg: '#9A6A12' }
      ].map((x, i) => ({ ...x, anim: s.still ? 'none' : `lgTx 7.5s cubic-bezier(.4,0,.6,1) ${-i * 2.5}s infinite` }))
    };
  }
}

export default class StatGCWebsiteLogin extends Component {
  render() {
    const v = { ...this.props, ...(this.renderVals() || {}) };
    return (
      <DCHost id="StatGCWebsiteLogin" css={CSS} links={LINKS} hostStyle={this.props.__hostStyle}>
        <div data-screen-label="Website Login" style={{"position":"relative","isolation":"isolate","overflow":"hidden","minHeight":"100vh","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,460px),1fr))","background":"#F7F6FA","color":"#15122B"}}>{"\n  "}<div aria-hidden="true" style={{"position":"absolute","inset":"0","zIndex":"-2","pointerEvents":"none","background":"radial-gradient(900px 620px at 78% 40%,#E8E2FF,rgba(232,226,255,0) 70%),radial-gradient(620px 420px at 90% 92%,#FBEFD8,rgba(251,239,216,0) 70%),#F7F6FA"}}></div>{"\n  "}<div aria-hidden="true" style={{"position":"absolute","left":"-40%","right":"-40%","bottom":"-6%","height":"46%","zIndex":"-1","pointerEvents":"none","overflow":"hidden","transform":"perspective(620px) rotateX(64deg)","transformOrigin":"50% 100%","WebkitMaskImage":"linear-gradient(0deg,#000 0%,transparent 80%)","maskImage":"linear-gradient(0deg,#000 0%,transparent 80%)"}}><div style={sty(`position:absolute;left:0;right:0;top:-80px;bottom:0;background-image:linear-gradient(rgba(109,85,201,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(109,85,201,.10) 1px,transparent 1px);background-size:80px 80px;will-change:transform;animation:${S(v.floorAnim)}`)}></div></div>{"\n\n  "}<div style={{"display":"flex","flexDirection":"column","minHeight":"100vh","padding":"24px clamp(20px,5vw,64px)"}}>{"\n    "}<header style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","height":"48px"}}>{"\n      "}<a href="/" onClick={v.onBack} aria-label="StatGC home" style={{"display":"flex","alignItems":"center","gap":"10px"}}>{"\n        "}<span aria-hidden="true" style={{"width":"30px","height":"26px","flex":"none","display":"block","background":"linear-gradient(135deg,#7E65D6 0%,#7E65D6 55%,#D9963F 100%)","WebkitMask":"url(/assets/logo-mark-white.png) center/contain no-repeat","mask":"url(/assets/logo-mark-white.png) center/contain no-repeat"}}></span>{"\n        "}<span style={{"fontFamily":"'Jost',sans-serif","fontWeight":"600","fontSize":"20px","color":"#15122B"}}>StatGC</span>{"\n      "}</a>{"\n      "}<a href="/" onClick={v.onBack} style={{"display":"flex","alignItems":"center","gap":"6px","height":"44px","padding":"0 14px","borderRadius":"12px","fontSize":"14px","fontWeight":"600","color":"#5B5870","transition":"background 120ms ease-out,color 120ms ease-out"}} className="p-statgcwebsitelogin-0"><span style={{"width":"15px","height":"15px","background":"currentColor","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-left.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-left.svg) center/contain no-repeat"}}></span>Back to site</a>{"\n    "}</header>{"\n\n    "}<main style={{"flex":"1","display":"flex","alignItems":"center","justifyContent":"center","padding":"48px 0"}}>{"\n      "}<div style={{"width":"100%","maxWidth":"440px","display":"flex","flexDirection":"column","gap":"28px","padding":"clamp(24px,4vw,36px)","borderRadius":"22px","background":"rgba(255,255,255,.86)","border":"1px solid #E6E3EF","boxShadow":"0 40px 80px -40px rgba(38,26,92,.30),0 12px 32px -16px rgba(17,17,17,.10)","WebkitBackdropFilter":"blur(20px) saturate(140%)","backdropFilter":"blur(20px) saturate(140%)"}}>{"\n\n        "}<div style={{"display":"flex","flexDirection":"column","gap":"28px","animation":"lgStepIn 280ms cubic-bezier(.23,1,.32,1) both"}}>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>{"\n              "}<h1 style={{"margin":"0","fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontWeight":"600","fontSize":"clamp(32px,4vw,40px)","lineHeight":"1.05","color":"#15122B"}}>Log in or sign up</h1>{"\n              "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.5","color":"#5B5870","textWrap":"pretty"}}>Use your Google account. There's no password or code to remember.</p>{"\n            "}</div>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>{"\n              "}<button type="button" onClick={v.google} disabled={v.busy} style={sty(`appearance:none;border:0;cursor:pointer;font-family:inherit;height:56px;border-radius:14px;background:#E2A947;color:#1A1433;font-size:16px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 12px 32px -10px rgba(240,190,94,.55);transition:background 150ms ease,transform 160ms cubic-bezier(.23,1,.32,1),opacity 150ms ease;opacity:${S(v.busyOp)}`)} className="p-statgcwebsitelogin-1 p-statgcwebsitelogin-2">{"\n                "}{(v.busy) ? (<><span style={{"width":"16px","height":"16px","borderRadius":"999px","border":"2px solid rgba(26,20,51,.3)","borderTopColor":"#1A1433","animation":"lgSpin 600ms linear infinite"}}></span></>) : null}{(v.busy) ? null : (<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>)}{"\n                "}{T(v.googleLabel)}{"\n              "}</button>{"\n              "}{(v.hasErr) ? (<span role="alert" style={{"fontSize":"13px","fontWeight":"700","color":"#B42318"}}>{T(v.err)}</span>) : null}{"\n            "}</div>{"\n            "}<span style={{"fontSize":"12px","fontWeight":"500","lineHeight":"1.5","color":"#5B5870"}}>{"By continuing you agree to the "}<a href="#terms" style={{"fontWeight":"700"}}>Terms of Use</a>{" and "}<a href="#privacy" style={{"fontWeight":"700"}}>Privacy Policy</a>.</span>{"\n          "}</div>{"\n      "}</div>{"\n    "}</main>{"\n\n    "}<footer style={{"display":"flex","flexWrap":"wrap","gap":"8px 16px","fontSize":"12px","fontWeight":"500","color":"#5B5870"}}>{"\n      "}<span>© 2026 StatGC</span>{"\n      "}<a href="#privacy" style={{"color":"#5B5870"}}>Privacy</a>{"\n      "}<a href="#terms" style={{"color":"#5B5870"}}>Terms</a>{"\n    "}</footer>{"\n  "}</div>{"\n\n  "}<aside aria-hidden="true" style={sty(`position:relative;overflow:hidden;min-height:100vh;display:${S(v.panelDisplay)}`)}>{"\n    "}<div style={{"position":"absolute","inset":"0","display":"flex","flexDirection":"column","justifyContent":"center","gap":"18px","padding":"clamp(28px,5vw,72px)","perspective":"1600px"}}>{"\n      "}<p style={{"margin":"0","maxWidth":"520px","fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontWeight":"600","fontSize":"clamp(32px,3.2vw,48px)","lineHeight":"1.04","color":"#15122B","textWrap":"balance","animation":"lgRise 600ms cubic-bezier(.23,1,.32,1) 100ms both"}}>{"Your money, finally in "}<span style={{"color":"#C98A1E"}}>motion</span></p>{"\n      "}<div style={{"display":"flex","flexDirection":"column","gap":"12px","maxWidth":"520px","padding":"18px","borderRadius":"22px","background":"rgba(255,255,255,.86)","border":"1px solid #E6E3EF","boxShadow":"0 40px 80px -40px rgba(38,26,92,.30),0 12px 32px -16px rgba(17,17,17,.10)","WebkitBackdropFilter":"blur(20px)","backdropFilter":"blur(20px)","transform":"rotateY(-7deg) rotateX(5deg)","animation":"lgRise 800ms cubic-bezier(.23,1,.32,1) 250ms both"}}>{"\n        "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px"}}><span style={{"fontSize":"15px","fontWeight":"700"}}>Earnings</span><span style={{"display":"flex","alignItems":"center","gap":"6px","fontSize":"12px","fontWeight":"600","color":"#0E8A5C"}}><span style={sty(`width:7px;height:7px;border-radius:50%;background:#0E8A5C;animation:${S(v.pulseAnim)}`)}></span>Live · sample data</span></div>{"\n        "}<div style={{"display":"grid","gridTemplateColumns":"repeat(2,minmax(0,1fr))","gap":"10px"}}>{"\n          "}<div style={{"display":"flex","flexDirection":"column","gap":"6px","padding":"12px 14px","borderRadius":"14px","background":"#FFFFFF","border":"1px solid #ECEAF3"}}><span style={{"fontSize":"12px","fontWeight":"600","color":"#5B5870"}}>Total owed</span><span style={{"fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontSize":"26px","fontWeight":"600","lineHeight":"1"}}>₹2.43L</span></div>{"\n          "}<div style={{"display":"flex","flexDirection":"column","gap":"6px","padding":"12px 14px","borderRadius":"14px","background":"#FFFFFF","border":"1px solid #ECEAF3"}}><span style={{"fontSize":"12px","fontWeight":"600","color":"#5B5870"}}>Received this month</span><span style={{"fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontSize":"26px","fontWeight":"600","lineHeight":"1"}}>₹1.82L</span></div>{"\n        "}</div>{"\n        "}<svg viewBox="0 0 600 150" style={{"display":"block","width":"100%","height":"auto","overflow":"visible"}}>{"\n          "}<path d="M20 132 L72 124 L124 128 L176 110 L228 104 L280 90 L332 96 L384 76 L436 64 L488 58 L540 42 L590 30 L590 140 L20 140 Z" fill="#E2A947" opacity=".16"></path>{"\n          "}<path d="M20 132 L72 124 L124 128 L176 110 L228 104 L280 90 L332 96 L384 76 L436 64 L488 58 L540 42 L590 30" fill="none" stroke="#D9963F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" style={{"animation":"lgDraw 1800ms cubic-bezier(.45,0,.2,1) 500ms both"}}></path>{"\n          "}<circle cx="590" cy="30" r="5.5" fill="#D9963F" stroke="#FFFFFF" strokeWidth="3"></circle>{"\n        "}</svg>{"\n      "}</div>{"\n      "}<div style={{"position":"relative","maxWidth":"300px","height":"140px"}}>{"\n        "}{L(v.steps).map(($it1, $i1) => { const v1 = { ...v, s: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n          "}<div style={sty(`position:absolute;left:0;right:0;top:0;opacity:0;will-change:transform,opacity;animation:${S(v1.s?.anim)}`)}>{"\n            "}<div style={{"display":"flex","alignItems":"center","gap":"12px","padding":"11px 14px","borderRadius":"14px","background":"rgba(255,255,255,.94)","border":"1px solid #E6E3EF","boxShadow":"0 18px 40px -20px rgba(38,26,92,.25)","WebkitBackdropFilter":"blur(14px)","backdropFilter":"blur(14px)"}}>{"\n              "}<span style={sty(`width:30px;height:30px;flex:none;border-radius:9px;background:${S(v1.s?.bg)};color:${S(v1.s?.fg)};display:flex;align-items:center;justify-content:center`)}><span style={sty(`width:15px;height:15px;background:currentColor;-webkit-mask:url(${S(v1.s?.icon)}) center/contain no-repeat;mask:url(${S(v1.s?.icon)}) center/contain no-repeat`)}></span></span>{"\n              "}<span style={{"flex":"1","minWidth":"0","fontSize":"13px","fontWeight":"700","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>{T(v1.s?.label)}</span>{"\n              "}<span style={{"fontSize":"12px","fontWeight":"600","color":"#5B5870"}}>{T(v1.s?.time)}</span>{"\n            "}</div>{"\n          "}</div>{"\n        "}</React.Fragment>); })}{"\n      "}</div>{"\n    "}</div>{"\n  "}</aside>{"\n\n  "}{(v.hasToast) ? (<>{"\n    "}<div role="status" style={{"position":"fixed","left":"50%","bottom":"28px","transform":"translateX(-50%)","zIndex":"20","padding":"12px 18px","borderRadius":"12px","background":"#15122B","color":"#FFFFFF","border":"1px solid #15122B","fontSize":"14px","fontWeight":"600","boxShadow":"0 12px 32px -12px rgba(0,0,0,.6)","animation":"lgRise 220ms cubic-bezier(.23,1,.32,1) both"}}>{T(v.toast)}</div>{"\n  "}</>) : null}</div>
      </DCHost>
    );
  }
}
