import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Downsizing in Austin TX | Sell Fast for Cash | Flint House Buyers', description: 'Ready to downsize in Austin? Sell your home fast for cash without showings, repairs, or waiting on buyer financing. Close in as little as 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-house-downsizing-austin/' } };

export default function Downsizing() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">DOWNSIZING · AUSTIN, TX</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Simplify.<br /><span style={{ color: 'var(--ember-amber)' }}>Cash in 7 Days.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Whether you&apos;re retiring, moving closer to family, or simply ready for a smaller footprint — we make the Austin home sale side of that transition fast and straightforward.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Downsizing often involves coordinating a home sale with a new purchase — and timing those two events is one of the most stressful parts of the process. When you sell to Flint, you control the closing date, which means you can coordinate your Austin sale to happen exactly when your new home is ready.</p>
            <p>There are no showings, no open houses, no strangers walking through your home. No repairs to make, no contractors to schedule. You call us, we make you an offer, and you pick the date. The transaction is documented through a licensed Texas title company and cash is delivered at closing.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
