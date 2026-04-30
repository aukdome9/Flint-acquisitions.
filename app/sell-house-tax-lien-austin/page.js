import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell House With Tax Lien Austin TX | Cash Buyers | Flint House Buyers', description: 'Tax liens on your Austin home don\'t have to block a sale. Flint House Buyers works through the title company to resolve liens at closing. Cash offer in 24 hours.', alternates: { canonical: 'https://flinthousebuyers.com/sell-house-tax-lien-austin/' } };

export default function TaxLien() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">TAX LIEN · AUSTIN, TX</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Tax Lien on Your House?<br /><span style={{ color: 'var(--ember-amber)' }}>We Handle It.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            A tax lien does not disqualify your Austin property from a cash sale. We work with the title company to resolve outstanding liens from proceeds at closing.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Property tax liens and other encumbrances are common — and they are rarely a reason a sale cannot happen. In most cases, the lien amount is simply deducted from the sale proceeds at closing and paid directly to the taxing authority through the title company. You receive the remainder.</p>
            <p>We will review your specific situation and give you a realistic picture of what you would walk away with after resolving the lien. If the numbers work for you, we close. If they don&apos;t, you owe us nothing.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
