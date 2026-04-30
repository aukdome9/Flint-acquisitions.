import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House East Austin TX | Cash Offer | Flint House Buyers', description: 'Get a fast cash offer for your East Austin home. We buy houses in 78702, 78721, near Manor Road and East 6th. No repairs, no agents. Close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-east-austin/' } };

export default function EastAustin() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">EAST AUSTIN · 78702 · 78721</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your East Austin<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            East Austin has changed dramatically — and so has the value of homes in 78702 and 78721. Whether you&apos;re on Manor Road, near East 6th, or deeper in the traditional neighborhoods, we know this market.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>East Austin — zip codes 78702 and 78721 — has experienced one of the most dramatic transformations of any urban neighborhood in Texas over the past decade. The corridor from East 6th to Manor Road has shifted from working-class residential to one of Austin&apos;s most sought-after areas. Long-time homeowners in these zips are sitting on significant equity.</p>
            <p>Treyvion grew up knowing East Austin before the restaurants and the breweries — the actual community that built this part of the city. If you or your family are longtime East Austin homeowners looking for a fast, trustworthy exit, Flint House Buyers is a local buyer who understands exactly what your property is worth in today&apos;s market.</p>
            <p>We buy East Austin homes in any condition — older bungalows, post-construction properties, homes with deferred maintenance or code issues. Cash offer in 24 hours. Close in 7 days.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
