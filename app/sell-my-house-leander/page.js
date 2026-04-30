import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Leander TX | Cash Offer | Flint House Buyers', description: 'Sell your Leander TX home for cash. We buy houses in 78641, near Crystal Falls and Leander Station. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-leander/' } };

export default function Leander() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">LEANDER · 78641</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Leander<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Leander — zip 78641, home to Crystal Falls and Leander Station — has grown into one of the Austin metro&apos;s most active real estate markets. Cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Leander&apos;s 78641 zip code has transformed over the past decade from a small Williamson County town into one of the fastest-growing communities in Texas. The Crystal Falls master-planned community, the Rails at Leander mixed-use development near Leander Station, and ongoing residential expansion north of 183A have all contributed to Leander&apos;s explosive growth.</p>
            <p>We buy Leander homes in any condition — from older properties along the historic FM roads to newer construction in Leander&apos;s master-planned communities. If you need a fast, cash exit from your 78641 property, Flint House Buyers delivers a written offer within 24 hours. No agents. No repairs. Close in as little as 7 days.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
