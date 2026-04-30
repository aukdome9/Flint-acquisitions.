import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Lakeway TX | Cash Offer | Flint House Buyers', description: 'Sell your Lakeway TX home for cash. We buy houses in 78734, in the Lake Travis area. No repairs, no agents. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-lakeway/' } };

export default function Lakeway() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">LAKEWAY · 78734</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Lakeway<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Lakeway — zip 78734, along the Lake Travis shoreline — is one of Austin&apos;s most distinctive western suburbs. We buy Lake Travis area homes for cash, any condition.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Lakeway&apos;s 78734 zip code sits along the Highland Lakes chain on the western edge of the Austin metro, anchored by Lake Travis and the community that grew around the World of Tennis resort — now the Lakeway Resort and Spa. The area is characterized by hilly terrain, cedar-covered lots, lake access, and a mix of aging hill country homes alongside newer luxury construction.</p>
            <p>We buy Lakeway and Lake Travis area properties in any condition. Homes with deferred maintenance, lakefront properties with aging docks, or properties that need significant updating — we evaluate all of them at fair market value and deliver a written cash offer within 24 hours of receiving your information.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
