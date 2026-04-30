import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House San Marcos TX | Cash Offer | Flint House Buyers', description: 'Sell your San Marcos TX home for cash. We buy houses in 78666, near Texas State and the Blanco River. No repairs, no agents. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-san-marcos/' } };

export default function SanMarcos() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">SAN MARCOS · 78666</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your San Marcos<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            San Marcos — zip 78666, home of Texas State University and the spring-fed Blanco River — is the Hays County seat and one of Central Texas&apos;s most dynamic communities. Cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>San Marcos&apos; 78666 zip code sits at the midpoint of the IH-35 corridor between Austin and San Antonio in Hays County. The community is anchored by Texas State University — one of the largest universities in Texas — and the crystal-clear Blanco River and Spring Lake, which have sustained human settlement in this location for thousands of years. San Marcos Premium Outlets is one of the highest-traffic outlet centers in the state.</p>
            <p>San Marcos has a diverse housing market shaped by university proximity: older rental properties near campus, established residential neighborhoods along the Blanco River corridor, newer construction in master-planned communities on the city&apos;s edges, and rural acreage in the surrounding Hays County hills. We buy all of these property types at fair market value and deliver written cash offers within 24 hours. No agents. No repairs. Close in as little as 7 days.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
