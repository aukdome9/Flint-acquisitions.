import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Georgetown TX | Cash Offer | Flint House Buyers', description: 'Sell your Georgetown TX home for cash. We buy houses in 78626 and 78628, near The Square. No repairs, no agents. Close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-georgetown-tx/' } };

export default function Georgetown() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">GEORGETOWN · 78626 · 78628</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Georgetown<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Georgetown — home to The Square, Sun City, and the zip codes 78626 and 78628 — is one of Williamson County&apos;s most distinctive communities. Cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Georgetown spans zip codes 78626 and 78628 in northern Williamson County. The community is anchored by its historic downtown Square — one of the most intact Victorian-era courthouse squares in Texas — and the massive Sun City Texas active adult community that has made Georgetown one of the fastest-growing cities in the United States for over a decade.</p>
            <p>Georgetown&apos;s real estate market is diverse: mid-century homes near downtown, expansive master-planned communities west of IH-35, Sun City properties with age restrictions, and rural acreage on the Georgetown plateau. Flint House Buyers evaluates all of these at fair market value and closes on your timeline.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
