import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Hutto TX | Cash Offer | Flint House Buyers', description: 'Sell your Hutto TX home for cash. We buy houses in 78634, near the Co-Op District. No repairs, no agents. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-hutto-tx/' } };

export default function Hutto() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">HUTTO · 78634</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Hutto, TX<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Hutto — zip 78634, home of the famous Co-Op District — has become one of Williamson County&apos;s most talked-about communities. Cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Hutto&apos;s 78634 zip code sits northeast of Round Rock along US-79 in Williamson County. The community has experienced dramatic growth over the past decade and is home to the renovated Co-Op District — a mixed-use downtown development built around the historic Hutto Co-Op grain elevator that has become a regional draw. Empower Field and Stars and Strikes round out a growing entertainment and dining scene.</p>
            <p>We buy Hutto homes in any condition — from older properties along the original Hutto townsite to newer construction in the master-planned communities ringing the city. If you need a fast, private cash sale in 78634, Flint House Buyers delivers a written offer within 24 hours.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
