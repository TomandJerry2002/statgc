// @ts-nocheck
// Generated from "StatGC Mobile Flow.dc.html" by scripts/dc-convert.js. Inline styles and logic are kept as in the prototype so it renders the same.
import React from 'react';
import { DCLogic, DCHost, sty, T, S, L, R, hostPos, XImport } from '@/dc/runtime';


const CSS = `html,body{margin:0;background:#E9E7F0}a{color:#6D55C9}a:hover{color:#4E3AA8}html,body{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none;width:0;height:0}

`;
const LINKS = ["https://fonts.googleapis.com/css2?family=Jost:wght@500;600&display=swap"];

class Component extends DCLogic {
  fr = React.createRef();
  renderVals() {
    return { fr: this.fr, restart: () => { const f = this.fr.current; if (f) f.src = '/?t=' + Date.now(); } };
  }
}

export default class StatGCMobileFlow extends Component {
  render() {
    const v = { ...this.props, ...(this.renderVals() || {}) };
    return (
      <DCHost id="StatGCMobileFlow" css={CSS} links={LINKS} hostStyle={this.props.__hostStyle}>
        <div style={{"minHeight":"100vh","display":"flex","flexWrap":"wrap","alignItems":"center","justifyContent":"center","gap":"48px","padding":"32px","fontFamily":"'Jost',sans-serif","color":"#15122B"}}>{"\n  "}<div style={{"maxWidth":"300px","display":"flex","flexDirection":"column","gap":"14px"}}>{"\n    "}<span style={{"fontSize":"30px","fontWeight":"600","lineHeight":"1.1"}}>Website to dashboard on mobile</span>{"\n    "}<span style={{"fontSize":"16px","fontWeight":"500","lineHeight":"1.5","color":"#5E5E66"}}>Scroll the website, tap Start free or Log in, enter any 10-digit number and code 482 913. You land in the mobile dashboard.</span>{"\n    "}<button type="button" onClick={v.restart} style={{"appearance":"none","alignSelf":"flex-start","cursor":"pointer","height":"44px","padding":"0 18px","borderRadius":"12px","border":"1px solid #D9D0F5","background":"#FFFFFF","fontFamily":"inherit","fontSize":"15px","fontWeight":"600","color":"#15122B"}}>Start again from website</button>{"\n  "}</div>{"\n  "}<div style={{"width":"390px","height":"min(844px, calc(100vh - 64px))","padding":"10px","borderRadius":"50px","background":"#15122B","boxShadow":"0 30px 60px rgba(21,18,43,.18)"}}>{"\n    "}<iframe ref={v.fr} src="/" title="StatGC on mobile" style={{"width":"100%","height":"100%","border":"0","borderRadius":"40px","background":"#07060F","display":"block"}}></iframe>{"\n  "}</div></div>
      </DCHost>
    );
  }
}
