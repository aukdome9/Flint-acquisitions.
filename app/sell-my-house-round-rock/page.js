import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Round Rock TX | Cash Offer | Flint House Buyers', description: 'Sell your Round Rock home for cash. We buy houses in 78664 and 78681, near Brushy Creek. No repairs, no agents. Close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-round-rock/' } };

export default function RoundRock() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">ROUND ROCK · 78664 · 78681</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Round Rock<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            From Brushy Creek to Old Settlers Park, Round Rock&apos;s 78664 and 78681 zip codes cover one of Williamson County&apos;s most established communities. Cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Round Rock — zip codes 78664 and 78681 — is anchored by the Brushy Creek greenbelt and features housing stock that spans from 1970s ranch-style homes near downtown Round Rock to newer construction in master-planned communities west of IH-35. It&apos;s one of the most family-oriented markets in the Austin metro and consistently ranks among the fastest-growing cities in Texas.</p>
            <p>We buy Round Rock homes in any condition, on any timeline. Whether your property is near Brushy Creek Regional Trail, the Dell Diamond corridor, or in one of the established neighborhoods closer to Georgetown or Pflugerville, Flint House Buyers will evaluate it fairly and deliver a written cash offer within 24 hours of your submission.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
