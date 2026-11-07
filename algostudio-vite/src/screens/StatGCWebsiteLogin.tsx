// @ts-nocheck
// Generated from "StatGC Website Login.dc.html" by scripts/dc-convert.js. Inline styles and logic are kept as in the prototype so it renders the same.
import React from 'react';
import { DCLogic, DCHost, sty, T, S, L, R, hostPos, XImport } from '@/dc/runtime';


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
  static CODE = '482913';
  phoneRef = React.createRef();
  codeRef = React.createRef();
  state = { step: 'phone', phone: '', phoneErr: false, phoneFocus: false, code: '', codeFocus: false, busy: false,
    tries: 3, codeErr: '', locked: false, shakeN: 0, timer: 0, toast: '', wide: true,
    still: typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches };

  componentDidMount() {
    this._rs = () => this.setState({ wide: window.innerWidth >= 960 });
    this._rs(); window.addEventListener('resize', this._rs);
    this._iv = setInterval(() => { if (this.state.timer > 0) this.setState(s => ({ timer: s.timer - 1 })); }, 1000);
    setTimeout(() => this.phoneRef.current && this.phoneRef.current.focus(), 300);
  }
  componentWillUnmount() { window.removeEventListener('resize', this._rs); clearInterval(this._iv); clearTimeout(this._b); clearTimeout(this._t); clearTimeout(this._go); }

  fmt(v) {
    let d = v.replace(/\D/g, '');
    if (d.length > 10 && d.startsWith('91')) d = d.slice(2);
    if (d.startsWith('0')) d = d.slice(1);
    d = d.slice(0, 10);
    return d.length > 5 ? d.slice(0, 5) + ' ' + d.slice(5) : d;
  }
  toast(t) { clearTimeout(this._t); this.setState({ toast: t }); this._t = setTimeout(() => this.setState({ toast: '' }), 2600); }
  shake() { this.setState(s => ({ shakeN: s.shakeN + 1 })); }

  sendCode(e) {
    e && e.preventDefault();
    if (this.state.busy) return;
    if (this.state.phone.replace(/\D/g, '').length !== 10) { this.setState({ phoneErr: true }); this.shake(); this.phoneRef.current && this.phoneRef.current.focus(); return; }
    this.setState({ busy: true });
    this._b = setTimeout(() => {
      this.setState({ busy: false, step: 'code', code: '', codeErr: '', tries: 3, locked: false, timer: 30 });
      setTimeout(() => this.codeRef.current && this.codeRef.current.focus(), 60);
    }, 900);
  }
  check() {
    const s = this.state;
    if (s.busy || s.locked || s.code.length !== 6) return;
    this.setState({ busy: true });
    this._b = setTimeout(() => {
      if (this.state.code === Component.CODE) {
        this.setState({ busy: false, step: 'done' });
        this._go = setTimeout(() => { window.location.href = '/app'; }, 1700);
        return;
      }
      const tries = this.state.tries - 1;
      this.setState({ busy: false, tries, locked: tries <= 0, replace: true,
        codeErr: tries <= 0 ? 'That code has stopped working. Tap Resend code for a new one.' : `That code doesn't match. ${tries} ${tries === 1 ? 'try' : 'tries'} left.` });
      this.shake();
      setTimeout(() => { const el = this.codeRef.current; if (el && tries > 0) { el.focus(); el.select(); } }, 30);
    }, 700);
  }
  onCode(e) {
    let v = e.target.value.replace(/\D/g, '');
    if (this.state.replace && v.length > this.state.code.length) v = v.slice(this.state.code.length);
    v = v.slice(0, 6);
    this.setState({ code: v, codeErr: '', replace: false }, () => { if (v.length === 6) this.check(); });
  }
  resend() {
    this.setState({ code: '', codeErr: '', tries: 3, locked: false, timer: 30, replace: false });
    this.toast('New code sent.');
    setTimeout(() => this.codeRef.current && this.codeRef.current.focus(), 30);
  }

  renderVals() {
    const s = this.state, ic = n => 'https://unpkg.com/lucide-static@0.460.0/icons/' + n + '.svg';
    const shakeA = n => n ? `${n % 2 ? 'lgShake' : 'lgShake2'} 320ms cubic-bezier(.36,.07,.19,.97) both` : 'none';
    const phoneOk = s.phone.replace(/\D/g, '').length === 10;
    const pErr = s.phoneErr && !phoneOk;
    const focusI = s.code.length;
    const boxes = Array.from({ length: 6 }, (_, i) => {
      const d = s.code[i] || '', active = s.codeFocus && !s.locked && i === Math.min(focusI, 5) && focusI < 6;
      const err = !!s.codeErr;
      return { d, filled: !!d, caret: active && !d,
        border: err ? '#E5352B' : active ? '#6D55C9' : d ? '#C9BDF0' : '#E4E2EC',
        bg: err ? '#FDE8E8' : s.locked ? '#F7F7F9' : '#FFFFFF',
        ring: active && !err ? '0 0 0 4px #E5DDFB' : 'none', fg: err ? '#B42318' : '#15122B' };
    });
    const mm = t => '0:' + String(t).padStart(2, '0');
    return {
      isPhone: s.step === 'phone', isCode: s.step === 'code', isDone: s.step === 'done',
      phone: s.phone, phoneRef: this.phoneRef, codeRef: this.codeRef,
      onPhone: e => this.setState({ phone: this.fmt(e.target.value) }),
      phoneFocus: () => this.setState({ phoneFocus: true }), phoneBlur: () => this.setState({ phoneFocus: false }),
      phoneBorder: pErr ? '#E5352B' : s.phoneFocus ? '#6D55C9' : '#E4E2EC',
      phoneBg: pErr ? '#FDE8E8' : '#FFFFFF',
      phoneRing: s.phoneFocus && !pErr ? '0 0 0 4px #E5DDFB' : 'none',
      phoneShake: pErr ? shakeA(s.shakeN) : 'none', phoneInvalid: pErr,
      phoneHint: pErr ? 'Enter a 10-digit mobile number, like 98765 43210.' : 'We’ll send a 6-digit code by SMS.',
      phoneRole: pErr ? 'alert' : undefined, hintFg: pErr ? '#B42318' : '#5B5870', hintW: pErr ? 700 : 500,
      onSendCode: e => this.sendCode(e), busy: s.busy, busyOp: s.busy ? 0.8 : 1,
      sendLabel: s.busy ? 'Sending code…' : 'Send code',
      changeNumber: () => { this.setState({ step: 'phone', code: '', codeErr: '' }); setTimeout(() => this.phoneRef.current && this.phoneRef.current.focus(), 60); },
      boxes, code: s.code, onCode: e => this.onCode(e),
      codeFocus: () => this.setState({ codeFocus: true }), codeBlur: () => this.setState({ codeFocus: false }),
      codeLocked: s.locked || s.busy, codeInvalid: !!s.codeErr,
      codeShake: s.codeErr ? shakeA(s.shakeN) : 'none',
      codeMsg: s.codeErr || (s.busy ? 'Checking code…' : 'The code logs you in as soon as all 6 digits are in.'),
      codeRole: s.codeErr ? 'alert' : undefined, codeMsgFg: s.codeErr ? '#B42318' : '#5B5870', codeMsgW: s.codeErr ? 700 : 500,
      onLogin: e => { e.preventDefault(); this.check(); },
      loginDisabled: s.busy || s.locked || s.code.length !== 6, loginOp: s.busy || s.locked || s.code.length !== 6 ? 0.55 : 1,
      loginLabel: s.busy ? 'Checking code…' : 'Log in',
      canResend: s.timer === 0, counting: s.timer > 0, timer: mm(s.timer), resend: () => this.resend(),
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
        <div data-screen-label="Website Login" style={{"position":"relative","isolation":"isolate","overflow":"hidden","minHeight":"100vh","display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,460px),1fr))","background":"#F7F6FA","color":"#15122B"}}>{"\n  "}<div aria-hidden="true" style={{"position":"absolute","inset":"0","zIndex":"-2","pointerEvents":"none","background":"radial-gradient(900px 620px at 78% 40%,#E8E2FF,rgba(232,226,255,0) 70%),radial-gradient(620px 420px at 90% 92%,#FBEFD8,rgba(251,239,216,0) 70%),#F7F6FA"}}></div>{"\n  "}<div aria-hidden="true" style={{"position":"absolute","left":"-40%","right":"-40%","bottom":"-6%","height":"46%","zIndex":"-1","pointerEvents":"none","overflow":"hidden","transform":"perspective(620px) rotateX(64deg)","transformOrigin":"50% 100%","WebkitMaskImage":"linear-gradient(0deg,#000 0%,transparent 80%)","maskImage":"linear-gradient(0deg,#000 0%,transparent 80%)"}}><div style={sty(`position:absolute;left:0;right:0;top:-80px;bottom:0;background-image:linear-gradient(rgba(109,85,201,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(109,85,201,.10) 1px,transparent 1px);background-size:80px 80px;will-change:transform;animation:${S(v.floorAnim)}`)}></div></div>{"\n\n  "}<div style={{"display":"flex","flexDirection":"column","minHeight":"100vh","padding":"24px clamp(20px,5vw,64px)"}}>{"\n    "}<header style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px","height":"48px"}}>{"\n      "}<a href="/" onClick={v.onBack} aria-label="StatGC home" style={{"display":"flex","alignItems":"center","gap":"10px"}}>{"\n        "}<span aria-hidden="true" style={{"width":"30px","height":"26px","flex":"none","display":"block","background":"linear-gradient(135deg,#7E65D6 0%,#7E65D6 55%,#D9963F 100%)","WebkitMask":"url(/assets/logo-mark-white.png) center/contain no-repeat","mask":"url(/assets/logo-mark-white.png) center/contain no-repeat"}}></span>{"\n        "}<span style={{"fontFamily":"'Jost',sans-serif","fontWeight":"600","fontSize":"20px","color":"#15122B"}}>StatGC</span>{"\n      "}</a>{"\n      "}<a href="/" onClick={v.onBack} style={{"display":"flex","alignItems":"center","gap":"6px","height":"44px","padding":"0 14px","borderRadius":"12px","fontSize":"14px","fontWeight":"600","color":"#5B5870","transition":"background 120ms ease-out,color 120ms ease-out"}} className="p-statgcwebsitelogin-0"><span style={{"width":"15px","height":"15px","background":"currentColor","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-left.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/arrow-left.svg) center/contain no-repeat"}}></span>Back to site</a>{"\n    "}</header>{"\n\n    "}<main style={{"flex":"1","display":"flex","alignItems":"center","justifyContent":"center","padding":"48px 0"}}>{"\n      "}<div style={{"width":"100%","maxWidth":"440px","display":"flex","flexDirection":"column","gap":"28px","padding":"clamp(24px,4vw,36px)","borderRadius":"22px","background":"rgba(255,255,255,.86)","border":"1px solid #E6E3EF","boxShadow":"0 40px 80px -40px rgba(38,26,92,.30),0 12px 32px -16px rgba(17,17,17,.10)","WebkitBackdropFilter":"blur(20px) saturate(140%)","backdropFilter":"blur(20px) saturate(140%)"}}>{"\n\n        "}{(v.isPhone) ? (<>{"\n          "}<form onSubmit={v.onSendCode} noValidate={true} style={{"display":"flex","flexDirection":"column","gap":"28px","animation":"lgStepIn 280ms cubic-bezier(.23,1,.32,1) both"}}>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>{"\n              "}<h1 style={{"margin":"0","fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontWeight":"600","fontSize":"clamp(32px,4vw,40px)","lineHeight":"1.05","color":"#15122B"}}>Log in or sign up</h1>{"\n              "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.5","color":"#5B5870","textWrap":"pretty"}}>Use your mobile number. We'll text you a code, so there's no password to remember.</p>{"\n            "}</div>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>{"\n              "}<label htmlFor="lg-phone" style={{"fontSize":"14px","fontWeight":"700","color":"#15122B"}}>Mobile number</label>{"\n              "}<div style={sty(`display:flex;align-items:center;height:56px;border-radius:14px;border:1.5px solid ${S(v.phoneBorder)};background:${S(v.phoneBg)};box-shadow:${S(v.phoneRing)};transition:border-color 150ms ease,box-shadow 150ms ease,background 150ms ease;animation:${S(v.phoneShake)}`)}>{"\n                "}<span style={{"flex":"none","padding":"0 12px 0 16px","height":"100%","display":"flex","alignItems":"center","fontSize":"17px","fontWeight":"600","color":"#5B5870","borderRight":"1px solid #E6E3EF"}}>+91</span>{"\n                "}<input id="lg-phone" ref={v.phoneRef} type="tel" inputMode="numeric" autoComplete="tel-national" maxLength="11" value={(v.phone) ?? ''} onChange={v.onPhone} onFocus={v.phoneFocus} onBlur={v.phoneBlur} placeholder="98765 43210" aria-describedby="lg-phone-hint" aria-invalid={v.phoneInvalid} style={{"flex":"1","minWidth":"0","height":"100%","padding":"0 16px","border":"0","outline":"none","background":"transparent","font":"inherit","fontSize":"17px","fontWeight":"600","color":"#15122B"}} />{"\n              "}</div>{"\n              "}<span id="lg-phone-hint" role={v.phoneRole} style={sty(`font-size:13px;font-weight:${S(v.hintW)};color:${S(v.hintFg)}`)}>{T(v.phoneHint)}</span>{"\n            "}</div>{"\n            "}<button type="submit" disabled={v.busy} style={sty(`appearance:none;border:0;cursor:pointer;font-family:inherit;height:56px;border-radius:14px;background:#E2A947;color:#1A1433;font-size:16px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 12px 32px -10px rgba(240,190,94,.55);transition:background 150ms ease,transform 160ms cubic-bezier(.23,1,.32,1),opacity 150ms ease;opacity:${S(v.busyOp)}`)} className="p-statgcwebsitelogin-1 p-statgcwebsitelogin-2">{"\n              "}{(v.busy) ? (<><span style={{"width":"16px","height":"16px","borderRadius":"999px","border":"2px solid rgba(26,20,51,.3)","borderTopColor":"#1A1433","animation":"lgSpin 600ms linear infinite"}}></span></>) : null}{"\n              "}{T(v.sendLabel)}{"\n            "}</button>{"\n            "}<span style={{"fontSize":"12px","fontWeight":"500","lineHeight":"1.5","color":"#5B5870"}}>{"By continuing you agree to the "}<a href="#terms" style={{"fontWeight":"700"}}>Terms of Use</a>{" and "}<a href="#privacy" style={{"fontWeight":"700"}}>Privacy Policy</a>.</span>{"\n          "}</form>{"\n        "}</>) : null}{"\n\n        "}{(v.isCode) ? (<>{"\n          "}<form onSubmit={v.onLogin} noValidate={true} style={{"display":"flex","flexDirection":"column","gap":"28px","animation":"lgStepIn 280ms cubic-bezier(.23,1,.32,1) both"}}>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>{"\n              "}<h1 style={{"margin":"0","fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontWeight":"600","fontSize":"clamp(32px,4vw,40px)","lineHeight":"1.05","color":"#15122B"}}>Enter the code</h1>{"\n              "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","lineHeight":"1.5","color":"#5B5870"}}>{"We sent a 6-digit code to "}<b style={{"color":"#15122B","whiteSpace":"nowrap"}}>{"+91 "}{T(v.phone)}</b>.</p>{"\n              "}<button type="button" onClick={v.changeNumber} style={{"appearance":"none","border":"0","cursor":"pointer","fontFamily":"inherit","alignSelf":"flex-start","height":"44px","margin":"-6px 0 -8px -10px","padding":"0 10px","borderRadius":"10px","background":"transparent","fontSize":"14px","fontWeight":"700","color":"#6D55C9","transition":"background 120ms ease-out"}} className="p-statgcwebsitelogin-3">Change number</button>{"\n            "}</div>{"\n\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>{"\n              "}<label htmlFor="lg-code" style={{"fontSize":"14px","fontWeight":"700","color":"#15122B"}}>6-digit code</label>{"\n              "}<div style={sty(`position:relative;animation:${S(v.codeShake)}`)}>{"\n                "}<div aria-hidden="true" style={{"display":"grid","gridTemplateColumns":"repeat(6,minmax(0,1fr))","gap":"8px"}}>{"\n                  "}{L(v.boxes).map(($it1, $i1) => { const v1 = { ...v, b: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n                    "}<span style={sty(`position:relative;height:60px;border-radius:14px;border:1.5px solid ${S(v1.b?.border)};background:${S(v1.b?.bg)};box-shadow:${S(v1.b?.ring)};display:flex;align-items:center;justify-content:center;font-family:'Satoshi',sans-serif;font-weight:600;font-size:24px;font-weight:500;color:${S(v1.b?.fg)};transition:border-color 150ms ease,box-shadow 150ms ease,background 150ms ease`)}>{"\n                      "}{(v1.b?.filled) ? (<><span style={{"animation":"lgPop 220ms cubic-bezier(.23,1,.32,1) both"}}>{T(v1.b?.d)}</span></>) : null}{"\n                      "}{(v1.b?.caret) ? (<><span style={{"width":"2px","height":"24px","borderRadius":"2px","background":"#6D55C9","animation":"lgCaret 1s steps(1) infinite"}}></span></>) : null}{"\n                    "}</span>{"\n                  "}</React.Fragment>); })}{"\n                "}</div>{"\n                "}<input id="lg-code" ref={v.codeRef} type="text" inputMode="numeric" autoComplete="one-time-code" pattern="\\d{6}" maxLength="6" value={(v.code) ?? ''} onChange={v.onCode} onFocus={v.codeFocus} onBlur={v.codeBlur} disabled={v.codeLocked} aria-describedby="lg-code-msg" aria-invalid={v.codeInvalid} style={{"position":"absolute","inset":"0","width":"100%","height":"100%","opacity":"0","border":"0","fontSize":"16px","cursor":"text"}} />{"\n              "}</div>{"\n              "}<span id="lg-code-msg" role={v.codeRole} style={sty(`font-size:13px;font-weight:${S(v.codeMsgW)};line-height:1.5;color:${S(v.codeMsgFg)}`)}>{T(v.codeMsg)}</span>{"\n            "}</div>{"\n\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"10px"}}>{"\n              "}<button type="submit" disabled={v.loginDisabled} style={sty(`appearance:none;border:0;cursor:pointer;font-family:inherit;height:56px;border-radius:14px;background:#E2A947;color:#1A1433;font-size:16px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:0 12px 32px -10px rgba(240,190,94,.55);transition:background 150ms ease,transform 160ms cubic-bezier(.23,1,.32,1),opacity 150ms ease;opacity:${S(v.loginOp)}`)} className="p-statgcwebsitelogin-1 p-statgcwebsitelogin-2">{"\n                "}{(v.busy) ? (<><span style={{"width":"16px","height":"16px","borderRadius":"999px","border":"2px solid rgba(26,20,51,.3)","borderTopColor":"#1A1433","animation":"lgSpin 600ms linear infinite"}}></span></>) : null}{"\n                "}{T(v.loginLabel)}{"\n              "}</button>{"\n              "}<div style={{"display":"flex","flexWrap":"wrap","alignItems":"center","justifyContent":"space-between","gap":"8px","minHeight":"44px"}}>{"\n                "}{(v.canResend) ? (<>{"\n                  "}<button type="button" onClick={v.resend} style={{"appearance":"none","border":"0","cursor":"pointer","fontFamily":"inherit","height":"44px","marginLeft":"-10px","padding":"0 10px","borderRadius":"10px","background":"transparent","fontSize":"14px","fontWeight":"700","color":"#6D55C9","animation":"lgRise 220ms cubic-bezier(.23,1,.32,1) both","transition":"background 120ms ease-out"}} className="p-statgcwebsitelogin-3">Resend code</button>{"\n                "}</>) : null}{"\n                "}{(v.counting) ? (<>{"\n                  "}<span style={{"fontSize":"14px","fontWeight":"500","color":"#5B5870"}}>{"Resend code in "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontWeight":"600","color":"#15122B"}}>{T(v.timer)}</span></span>{"\n                "}</>) : null}{"\n                "}<span style={{"fontFamily":"'Satoshi',sans-serif","fontWeight":"600","fontSize":"11px","color":"#5B5870"}}>Demo code 482 913</span>{"\n              "}</div>{"\n            "}</div>{"\n          "}</form>{"\n        "}</>) : null}{"\n\n        "}{(v.isDone) ? (<>{"\n          "}<div role="status" style={{"display":"flex","flexDirection":"column","alignItems":"flex-start","gap":"18px","animation":"lgStepIn 280ms cubic-bezier(.23,1,.32,1) both"}}>{"\n            "}<span style={{"width":"64px","height":"64px","borderRadius":"999px","background":"#46DBA5","color":"#06261A","display":"flex","alignItems":"center","justifyContent":"center","boxShadow":"0 14px 30px -14px rgba(70,219,165,.7)","animation":"lgPop 420ms cubic-bezier(.23,1,.32,1) 60ms both"}}><span style={{"width":"30px","height":"30px","background":"currentColor","WebkitMask":"url(https://unpkg.com/lucide-static@0.460.0/icons/check.svg) center/contain no-repeat","mask":"url(https://unpkg.com/lucide-static@0.460.0/icons/check.svg) center/contain no-repeat"}}></span></span>{"\n            "}<div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>{"\n              "}<h1 style={{"margin":"0","fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontWeight":"600","fontSize":"clamp(32px,4vw,40px)","lineHeight":"1.05","color":"#15122B"}}>You're logged in</h1>{"\n              "}<p style={{"margin":"0","fontSize":"16px","fontWeight":"500","color":"#5B5870"}}>Opening your deals.</p>{"\n            "}</div>{"\n            "}<span style={{"width":"100%","height":"4px","borderRadius":"999px","background":"#EFEDF5","overflow":"hidden"}}><span style={{"display":"block","height":"100%","background":"#6D55C9","transformOrigin":"0 50%","animation":"lgFill 1400ms cubic-bezier(.65,0,.35,1) both"}}></span></span>{"\n            "}<a href="/app" style={{"fontSize":"14px","fontWeight":"700"}}>Open now</a>{"\n          "}</div>{"\n        "}</>) : null}{"\n      "}</div>{"\n    "}</main>{"\n\n    "}<footer style={{"display":"flex","flexWrap":"wrap","gap":"8px 16px","fontSize":"12px","fontWeight":"500","color":"#5B5870"}}>{"\n      "}<span>© 2026 StatGC</span>{"\n      "}<a href="#privacy" style={{"color":"#5B5870"}}>Privacy</a>{"\n      "}<a href="#terms" style={{"color":"#5B5870"}}>Terms</a>{"\n    "}</footer>{"\n  "}</div>{"\n\n  "}<aside aria-hidden="true" style={sty(`position:relative;overflow:hidden;min-height:100vh;display:${S(v.panelDisplay)}`)}>{"\n    "}<div style={{"position":"absolute","inset":"0","display":"flex","flexDirection":"column","justifyContent":"center","gap":"18px","padding":"clamp(28px,5vw,72px)","perspective":"1600px"}}>{"\n      "}<p style={{"margin":"0","maxWidth":"520px","fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontWeight":"600","fontSize":"clamp(32px,3.2vw,48px)","lineHeight":"1.04","color":"#15122B","textWrap":"balance","animation":"lgRise 600ms cubic-bezier(.23,1,.32,1) 100ms both"}}>{"Your money, finally in "}<span style={{"color":"#C98A1E"}}>motion</span></p>{"\n      "}<div style={{"display":"flex","flexDirection":"column","gap":"12px","maxWidth":"520px","padding":"18px","borderRadius":"22px","background":"rgba(255,255,255,.86)","border":"1px solid #E6E3EF","boxShadow":"0 40px 80px -40px rgba(38,26,92,.30),0 12px 32px -16px rgba(17,17,17,.10)","WebkitBackdropFilter":"blur(20px)","backdropFilter":"blur(20px)","transform":"rotateY(-7deg) rotateX(5deg)","animation":"lgRise 800ms cubic-bezier(.23,1,.32,1) 250ms both"}}>{"\n        "}<div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px"}}><span style={{"fontSize":"15px","fontWeight":"700"}}>Earnings</span><span style={{"display":"flex","alignItems":"center","gap":"6px","fontSize":"12px","fontWeight":"600","color":"#0E8A5C"}}><span style={sty(`width:7px;height:7px;border-radius:50%;background:#0E8A5C;animation:${S(v.pulseAnim)}`)}></span>Live · sample data</span></div>{"\n        "}<div style={{"display":"grid","gridTemplateColumns":"repeat(2,minmax(0,1fr))","gap":"10px"}}>{"\n          "}<div style={{"display":"flex","flexDirection":"column","gap":"6px","padding":"12px 14px","borderRadius":"14px","background":"#FFFFFF","border":"1px solid #ECEAF3"}}><span style={{"fontSize":"12px","fontWeight":"600","color":"#5B5870"}}>Total owed</span><span style={{"fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontSize":"26px","fontWeight":"600","lineHeight":"1"}}>₹2.43L</span></div>{"\n          "}<div style={{"display":"flex","flexDirection":"column","gap":"6px","padding":"12px 14px","borderRadius":"14px","background":"#FFFFFF","border":"1px solid #ECEAF3"}}><span style={{"fontSize":"12px","fontWeight":"600","color":"#5B5870"}}>Received this month</span><span style={{"fontFamily":"'Bricolage Grotesque','Jost',sans-serif","fontSize":"26px","fontWeight":"600","lineHeight":"1"}}>₹1.82L</span></div>{"\n        "}</div>{"\n        "}<svg viewBox="0 0 600 150" style={{"display":"block","width":"100%","height":"auto","overflow":"visible"}}>{"\n          "}<path d="M20 132 L72 124 L124 128 L176 110 L228 104 L280 90 L332 96 L384 76 L436 64 L488 58 L540 42 L590 30 L590 140 L20 140 Z" fill="#E2A947" opacity=".16"></path>{"\n          "}<path d="M20 132 L72 124 L124 128 L176 110 L228 104 L280 90 L332 96 L384 76 L436 64 L488 58 L540 42 L590 30" fill="none" stroke="#D9963F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" style={{"animation":"lgDraw 1800ms cubic-bezier(.45,0,.2,1) 500ms both"}}></path>{"\n          "}<circle cx="590" cy="30" r="5.5" fill="#D9963F" stroke="#FFFFFF" strokeWidth="3"></circle>{"\n        "}</svg>{"\n      "}</div>{"\n      "}<div style={{"position":"relative","maxWidth":"300px","height":"140px"}}>{"\n        "}{L(v.steps).map(($it1, $i1) => { const v1 = { ...v, s: $it1, $index: $i1 }; return (<React.Fragment key={$i1}>{"\n          "}<div style={sty(`position:absolute;left:0;right:0;top:0;opacity:0;will-change:transform,opacity;animation:${S(v1.s?.anim)}`)}>{"\n            "}<div style={{"display":"flex","alignItems":"center","gap":"12px","padding":"11px 14px","borderRadius":"14px","background":"rgba(255,255,255,.94)","border":"1px solid #E6E3EF","boxShadow":"0 18px 40px -20px rgba(38,26,92,.25)","WebkitBackdropFilter":"blur(14px)","backdropFilter":"blur(14px)"}}>{"\n              "}<span style={sty(`width:30px;height:30px;flex:none;border-radius:9px;background:${S(v1.s?.bg)};color:${S(v1.s?.fg)};display:flex;align-items:center;justify-content:center`)}><span style={sty(`width:15px;height:15px;background:currentColor;-webkit-mask:url(${S(v1.s?.icon)}) center/contain no-repeat;mask:url(${S(v1.s?.icon)}) center/contain no-repeat`)}></span></span>{"\n              "}<span style={{"flex":"1","minWidth":"0","fontSize":"13px","fontWeight":"700","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>{T(v1.s?.label)}</span>{"\n              "}<span style={{"fontSize":"12px","fontWeight":"600","color":"#5B5870"}}>{T(v1.s?.time)}</span>{"\n            "}</div>{"\n          "}</div>{"\n        "}</React.Fragment>); })}{"\n      "}</div>{"\n    "}</div>{"\n  "}</aside>{"\n\n  "}{(v.hasToast) ? (<>{"\n    "}<div role="status" style={{"position":"fixed","left":"50%","bottom":"28px","transform":"translateX(-50%)","zIndex":"20","padding":"12px 18px","borderRadius":"12px","background":"#15122B","color":"#FFFFFF","border":"1px solid #15122B","fontSize":"14px","fontWeight":"600","boxShadow":"0 12px 32px -12px rgba(0,0,0,.6)","animation":"lgRise 220ms cubic-bezier(.23,1,.32,1) both"}}>{T(v.toast)}</div>{"\n  "}</>) : null}</div>
      </DCHost>
    );
  }
}
