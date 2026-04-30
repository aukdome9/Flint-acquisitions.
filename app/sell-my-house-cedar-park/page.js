import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Cedar Park TX | Cash Offer | Flint House Buyers', description: 'Sell your Cedar Park home for cash. We buy houses in 78613 and 78730, near the 183A tollway. No repairs, no agents. Close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-cedar-park/' } };

export default function CedarPark() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">CEDAR PARK · 78613 · 78730</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Cedar Park<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Cedar Park — spanning 78613 and 78730 along the 183A tollway — is one of Williamson County&apos;s largest and most established suburbs. Cash offer in 24 hours, close in 7 days.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Cedar Park&apos;s 78613 and 78730 zip codes run along the 183A tollway corridor through Williamson County. The area includes a mix of established 1990s-era suburban neighborhoods near Lakeline Mall, newer master-planned communities further west, and the upscale residential areas near Lake Travis in 78730. It&apos;s one of the most diverse suburbs in the Austin metro by housing type and price range.</p>
            <p>Whether you own a 1990s brick home in a Cedar Park subdivision or a newer property in the 78730 lake-area neighborhoods, Flint House Buyers evaluates Cedar Park properties at fair market value. We make offers within 24 hours of receiving your information and close on your schedule.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
