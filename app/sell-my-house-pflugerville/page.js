import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Pflugerville TX | Cash Offer | Flint House Buyers', description: 'Sell your Pflugerville home fast for cash. We buy houses in 78660, near Stone Hill Town Center. No repairs, no agents. Close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-pflugerville/' } };

export default function Pflugerville() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">PFLUGERVILLE · 78660</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Pflugerville<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Pflugerville — zip 78660 — is one of Austin&apos;s most active suburban markets. Near Stone Hill Town Center and SH-130, we know this market and make real offers within 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Pflugerville&apos;s 78660 zip code sits northeast of Austin along the SH-130 corridor, anchored by the Stone Hill Town Center retail district and Lake Pflugerville. The community has grown rapidly since SH-130 opened and continues to attract families relocating from Austin proper due to its relative affordability and strong school district.</p>
            <p>If you own in Pflugerville and need to sell fast — whether to avoid foreclosure, relocate, deal with an inherited property, or simply exit for cash — Flint House Buyers makes competitive offers based on current 78660 comparable sales. We close in as little as 7 days and cover standard closing costs. No repairs, no agents, no waiting.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
