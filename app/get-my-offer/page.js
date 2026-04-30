import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'Get My Cash Offer | Free, No Obligation',
  description: 'Submit your property details and get a real cash offer from Flint House Buyers within 24 hours. No repairs needed. No agent fees. Close in as little as 7 days.',
  alternates: { canonical: 'https://flinthousebuyers.com/get-my-offer/' },
  robots: { index: false, follow: false },
};

export default function GetMyOffer() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 4rem' }}>
        <div className="container">
          <p className="section-label">FREE · NO OBLIGATION</p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: 'var(--white)',
              letterSpacing: '0.03em',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}
          >
            Get Your
            <br />
            <span style={{ color: 'var(--ember-amber)' }}>Cash Offer</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--ash)',
              maxWidth: '480px',
              lineHeight: 1.8,
            }}
          >
            Fill out the form below. Treyvion will call you within 24 hours with a real number — not a range, not a maybe, a real offer.
          </p>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
