import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House North Austin TX | Cash Offer | Flint House Buyers', description: 'Sell your North Austin home fast for cash. We buy houses in 78751, 78756, Hyde Park, and along Burnet Road. No repairs, no agents. Cash offer in 24 hours.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-north-austin/' } };

export default function NorthAustin() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">NORTH AUSTIN · 78751 · 78756</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your North Austin<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Hyde Park, Cherrywood, the Burnet Road corridor, and the neighborhoods surrounding 78751 and 78756. We know North Austin and we make competitive cash offers here fast.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>North Austin&apos;s 78751 and 78756 zip codes include some of Austin&apos;s most established residential neighborhoods — Hyde Park, Rosedale, Shoal Brook, and the communities that line Burnet Road from 45th Street north toward the Domain area. These are neighborhoods with deep roots, older housing stock, and strong underlying land value.</p>
            <p>Many North Austin homeowners have lived in their homes for decades and are looking for a private, fast sale without showings, without repairs, and without an agent taking 6% out of their equity. That is exactly what we offer. We evaluate the property as-is, make you a real number, and close on your timeline.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
