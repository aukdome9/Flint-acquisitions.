import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Manor TX | Cash Offer | Flint House Buyers', description: 'Sell your Manor TX home for cash. We buy houses in 78653, along the SH-130 corridor. No repairs, no agents. Close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-manor-tx/' } };

export default function Manor() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">MANOR · 78653</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Manor, TX<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Manor — along the SH-130 corridor in zip 78653 — has grown quickly as Austin buyers push east. We make competitive cash offers in Manor within 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Manor&apos;s 78653 zip code runs along US-290 east of Austin and connects to SH-130 to the north. The community retains a small-town character and has attracted significant residential development as buyers priced out of central Austin and Pflugerville move further east. Property values here have appreciated sharply over the past five years.</p>
            <p>We buy Manor homes in any condition — older ranch-style properties along Johnson Street, newer construction in the subdivisions near Shadowglen, and manufactured housing on permanent foundations. If you need a fast, private cash sale in Manor TX, contact Flint House Buyers for a written offer within 24 hours.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
