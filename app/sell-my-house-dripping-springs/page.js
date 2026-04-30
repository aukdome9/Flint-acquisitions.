import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Dripping Springs TX | Cash Offer | Flint House Buyers', description: 'Sell your Dripping Springs TX home for cash. We buy houses in 78620, near Hamilton Pool Road. No repairs, no agents. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-dripping-springs/' } };

export default function DrippingSprings() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">DRIPPING SPRINGS · 78620</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Dripping Springs<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Dripping Springs — zip 78620, Texas&apos;s Wedding Capital and home to Hamilton Pool Road — is one of the Hill Country&apos;s most sought-after communities. Cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Dripping Springs&apos; 78620 zip code is located along US-290 West in Hays County, serving as the gateway to Texas Hill Country. The community has earned the designation "Wedding Capital of Texas" for its concentration of venues along Hamilton Pool Road and the surrounding ranches. The presence of numerous craft breweries, distilleries, and the Hamilton Pool Preserve has made this one of Texas&apos;s premier rural-suburban destinations.</p>
            <p>Property values in the 78620 zip code have risen sharply as buyers seek Hill Country land and acreage within commuting distance of Austin. We buy Dripping Springs properties of all types — acreage with residential improvements, homes in master-planned communities like Belterra and Caliterra, and older rural residential properties along the FM roads west of town. Cash offer in 24 hours, close in as little as 7 days.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
