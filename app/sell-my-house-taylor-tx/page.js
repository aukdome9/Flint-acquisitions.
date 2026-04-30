import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Taylor TX | Cash Offer | Flint House Buyers', description: 'Sell your Taylor TX home for cash. We buy houses in 76574, along the Samsung corridor. No repairs, no agents. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-taylor-tx/' } };

export default function Taylor() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">TAYLOR · 76574</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Taylor, TX<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Taylor — zip 76574 and home to Samsung&apos;s massive Texas semiconductor campus — is one of the Austin metro&apos;s fast-emerging growth corridors. Cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Taylor&apos;s 76574 zip code is undergoing one of the most significant economic transformations in Central Texas. Samsung&apos;s semiconductor megafab — a multi-billion dollar facility expected to bring thousands of direct and indirect employment opportunities — is located just east of Taylor on Highway 79. The resulting economic activity has sharply accelerated demand for Taylor-area housing.</p>
            <p>Long-time Taylor homeowners who purchased before the Samsung announcement are sitting on dramatically increased equity. We evaluate Taylor properties at fair current market value — not pre-announcement prices — and make written cash offers within 24 hours. Whether you own near downtown Taylor on Main Street or in the residential neighborhoods along FM 2338, we buy as-is on your timeline.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
