import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House South Austin TX | Cash Offer | Flint House Buyers', description: 'Sell your South Austin home fast for cash. We buy houses in 78704, near South Congress and Bouldin Creek. No repairs, no agents. Close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-south-austin/' } };

export default function SouthAustin() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">SOUTH AUSTIN · 78704</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your South Austin<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            From Bouldin Creek to South Congress, 78704 is one of Austin&apos;s most storied zip codes. If you own a home here and need to sell fast, we make a competitive cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>South Austin — led by the 78704 zip code — stretches from the southern bank of the Colorado River through the Bouldin Creek neighborhood down through Travis Heights and beyond. The mix of 1950s bungalows, renovated mid-century homes, and new construction makes this one of Austin&apos;s most diverse real estate markets.</p>
            <p>Long-time South Austin homeowners often have homes that need updating by retail market standards but hold exceptional land value given the proximity to South Congress, Barton Springs, and downtown. We buy these homes as-is — no staging, no updating, no repairs — and make offers that reflect the actual land and location value, not just the surface condition.</p>
            <p>If you own in 78704 and need a fast, private sale, call Treyvion directly. He knows South Austin.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
