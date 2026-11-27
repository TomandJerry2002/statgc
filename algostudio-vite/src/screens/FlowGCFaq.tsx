// Homepage questions section. The same answers feed the prerendered page and the FAQPage
// JSON-LD (scripts/prerender.mjs), so search engines and AI answers quote what visitors see.
import faq from '@/content/faq.json';

const CSS = `
.fq-item{border-bottom:1px solid #E4E4E8}
.fq-item summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:22px 0;font-size:18px;font-weight:600;color:#111111}
.fq-item summary::-webkit-details-marker{display:none}
.fq-item summary::after{content:'+';flex:none;font-size:22px;font-weight:400;color:#5E5E66;transition:transform 200ms cubic-bezier(.23,1,.32,1)}
.fq-item[open] summary::after{transform:rotate(45deg)}
.fq-item summary:focus-visible{outline:2px solid #5A43B5;outline-offset:4px;border-radius:4px}
.fq-item p{margin:0;padding:0 0 22px;max-width:680px;font-size:16px;font-weight:500;line-height:1.55;color:#5E5E66;text-wrap:pretty}
@media (prefers-reduced-motion:reduce){.fq-item summary::after{transition:none}}
`;

export default function FlowGCFaq() {
  return (
    <section id="faq" data-screen-label="Questions" style={{ borderTop: '1px solid #E4E4E8', background: '#FFFFFF' }}>
      <style>{CSS}</style>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '112px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: '48px 72px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          <h2 style={{ margin: 0, fontFamily: "'Jost','Satoshi',sans-serif", fontWeight: 500, fontSize: 'clamp(32px,4vw,40px)', lineHeight: 1.1, color: '#111111', textWrap: 'balance' }}>Questions creators ask about FlowGC</h2>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: 500, lineHeight: 1.5, color: '#5E5E66', textWrap: 'pretty' }}>What FlowGC does for your brand deals, payments, tax and invoices.</p>
        </div>
        <div style={{ borderTop: '1px solid #E4E4E8' }}>
          {faq.map(([q, a]) => (
            <details key={q} className="fq-item">
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
