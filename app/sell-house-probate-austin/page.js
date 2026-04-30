import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell Probate Property Austin TX | Fast Close | Flint House Buyers', description: 'Need to sell Austin probate property? We understand the probate process and move at its pace. Cash offers. Licensed title company. No repairs needed.', alternates: { canonical: 'https://flinthousebuyers.com/sell-house-probate-austin/' } };

export default function Probate() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">PROBATE · AUSTIN, TX</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Probate Property.<br /><span style={{ color: 'var(--ember-amber)' }}>We Know the Process.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Selling probate real estate in Austin requires a specific legal process. We have experience navigating it — and we move at the pace of your probate, not ours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Probate real estate sales in Texas require court approval and must be handled within the timeline the court establishes. We understand this process and work within it — we do not pressure you to move faster than your attorney or the court allows.</p>
            <p>All of our probate purchases close through a licensed Texas title company with full documentation. We buy as-is, which means the estate does not need to invest in repairs, cleanouts, or staging before the sale. The property can transfer exactly as it is.</p>
            <p>If you are the executor or administrator of an estate that includes Austin real estate, call us and we will walk you through what a cash sale would look like for your specific situation.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
