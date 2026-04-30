import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Bee Cave TX | Cash Offer | Flint House Buyers', description: 'Sell your Bee Cave TX home for cash. We buy houses in 78738, near Hill Country Galleria. No repairs, no agents. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-bee-cave/' } };

export default function BeeCave() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">BEE CAVE · 78738</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Bee Cave<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Bee Cave — zip 78738, home of the Hill Country Galleria — is one of Austin&apos;s most upscale western suburbs. We buy homes here for cash, any condition, any timeline.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Bee Cave&apos;s 78738 zip code is anchored by the Hill Country Galleria — Austin&apos;s premier open-air lifestyle retail center — and surrounded by some of the highest-value residential communities in the Austin metro. The area commands premium land values due to its Hill Country views, proximity to Lake Travis, and the curated retail and dining environment along TX-71.</p>
            <p>We buy Bee Cave properties in any condition. Whether you own a home in Falconhead, Spillman Ranch, or one of the other master-planned communities in 78738, Flint House Buyers evaluates your property at fair market value and delivers a written cash offer within 24 hours. No agents. No repairs. Close on your timeline.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
