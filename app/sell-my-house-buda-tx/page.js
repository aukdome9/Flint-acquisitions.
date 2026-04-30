import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Buda TX | Cash Offer | Flint House Buyers', description: 'Sell your Buda TX home for cash. We buy houses in 78610, near Main Street. No repairs, no agents. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-buda-tx/' } };

export default function Buda() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">BUDA · 78610</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Buda, TX<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Buda — zip 78610, anchored by Main Street and rapid IH-35 corridor growth — is one of Hays County&apos;s most charming communities. Cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Buda&apos;s 78610 zip code occupies a prime position between Austin and San Marcos on IH-35 in Hays County. The community&apos;s historic Main Street corridor retains a small-town character while the surrounding subdivision growth has brought thousands of new residents over the past decade. Cabela&apos;s and the Buda Premium Outlets anchor the retail corridor near the freeway.</p>
            <p>We buy Buda homes in any condition — historic properties near downtown Main Street, older ranch-style homes in established neighborhoods, and newer construction in the subdivisions ringing the city. If you need a fast cash sale in 78610, Flint House Buyers delivers a written offer within 24 hours.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
