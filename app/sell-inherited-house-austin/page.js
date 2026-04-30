import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'Sell Inherited House Austin TX | Probate Property Buyers | Flint House Buyers',
  description: 'Inherited a house in Austin? We buy inherited homes as-is — no estate cleanout, no repairs, no waiting. Get a cash offer in 24 hours and close on your schedule.',
  alternates: { canonical: 'https://flinthousebuyers.com/sell-inherited-house-austin/' },
};

export default function Inherited() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">INHERITED PROPERTY · AUSTIN, TX</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Inherited a House.<br /><span style={{ color: 'var(--ember-amber)' }}>We Handle the Rest.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Probate is complicated. Selling to us isn&apos;t. We buy inherited Austin homes as-is — no estate cleanout, no repairs, no waiting on a retail buyer.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Inheriting property is often a surprise that comes during an already difficult time. Whether the estate is in probate or has already been transferred to you, we can move at whatever pace works for the situation.</p>
            <p>We buy inherited Austin homes regardless of condition. Decades of accumulated belongings, deferred maintenance, or title complications — we work through all of it. A licensed Texas title company handles every step of the closing so everything is documented and legally clean.</p>
            <p>You don&apos;t need to clean out the home, make repairs, or list it with an agent and wait 90 days for a retail buyer. You call us, we make you an offer, and you decide what happens next — on your timeline.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
