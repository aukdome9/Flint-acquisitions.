import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Del Valle TX | Cash Offer | Flint House Buyers', description: 'Sell your Del Valle TX home for cash. We buy houses in 78617, near Austin-Bergstrom International Airport. No repairs, no agents. Close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-del-valle/' } };

export default function DelValle() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">DEL VALLE · 78617</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Del Valle<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Del Valle — zip 78617, east of Austin near ABIA — is an established Travis County community with growing demand. Cash offer in 24 hours, close in 7 days.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Del Valle&apos;s 78617 zip code sits southeast of Austin, adjacent to Austin-Bergstrom International Airport along Highway 71 East and Toll 130. The community is one of the last remaining affordable zones in Travis County and has experienced increasing development pressure as buyers seek options east of IH-35 within the Austin ETJ.</p>
            <p>We buy Del Valle properties in any condition — from rural residential parcels along FM roads to tract homes in the subdivision clusters near ABIA. If you own in 78617 and need a fast cash sale, Flint House Buyers makes written offers within 24 hours of receiving your property information.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
