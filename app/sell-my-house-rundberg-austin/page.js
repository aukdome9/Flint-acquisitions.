import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Rundberg Austin TX | Cash Offer | Flint House Buyers', description: 'Sell your Rundberg Austin home fast for cash. We buy houses in 78753, near North Lamar. No repairs, no agents. Cash offer in 24 hours.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-rundberg-austin/' } };

export default function Rundberg() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">RUNDBERG · AUSTIN · 78753</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Rundberg<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Rundberg and the surrounding 78753 zip code represent one of Austin&apos;s most resilient working-class communities. We buy homes here at fair prices with no judgment and no runaround.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>The Rundberg Lane corridor and the broader 78753 zip code along North Lamar have been home to Austin&apos;s working community for generations. This area is experiencing increasing attention from investors — but many homeowners here have not been treated fairly by out-of-state buyers who undervalue the community&apos;s actual position in the Austin market.</p>
            <p>Treyvion Ojeda knows this community. Flint House Buyers evaluates Rundberg properties at fair market value — not at a predatory discount. We buy homes in any condition, on any timeline, and we are transparent about how we calculate our offers. If you want to compare numbers, we encourage it.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
