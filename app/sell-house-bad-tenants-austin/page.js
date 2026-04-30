import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'Sell Rental Property Austin TX | Problem Tenants | Flint House Buyers',
  description: 'Done with difficult tenants in your Austin rental? Sell your property fast for cash — even tenant-occupied. No eviction required. Close in as little as 7 days.',
  alternates: { canonical: 'https://flinthousebuyers.com/sell-house-bad-tenants-austin/' },
};

export default function BadTenants() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">TIRED LANDLORD · AUSTIN, TX</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Done Being a Landlord.<br /><span style={{ color: 'var(--ember-amber)' }}>We Buy As-Is, Tenants In.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Late rent, property damage, midnight calls, eviction proceedings — there is a point at which the numbers no longer make sense. We buy Austin rental properties in any condition, with tenants in place.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Austin&apos;s landlord-tenant laws have shifted significantly in recent years. Eviction processes that once took weeks can now stretch for months — during which time you&apos;re still paying the mortgage, insurance, and taxes on a property generating no income or generating damage.</p>
            <p>We buy tenant-occupied properties. You don&apos;t have to evict anyone before selling to us. We handle the tenant relationship after closing, on our timeline. You receive cash for the property and exit the situation entirely.</p>
            <p>Whether your property has one tenant or multiple units, is currently generating income or currently a loss, we will evaluate it and make you a real offer based on current Austin market conditions.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
