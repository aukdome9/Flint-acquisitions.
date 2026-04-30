import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell Vacant House Austin TX | Fast Cash Offer | Flint House Buyers', description: 'Sell your vacant Austin home fast for cash. Every month it sits empty costs you money. We close in as little as 7 days — no repairs, no agents, no fees.', alternates: { canonical: 'https://flinthousebuyers.com/sell-vacant-house-austin/' } };

export default function Vacant() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">VACANT PROPERTY · AUSTIN, TX</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Empty House.<br /><span style={{ color: 'var(--ember-amber)' }}>Full Cash Offer.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            A vacant Austin property costs you money every month — mortgage, insurance, taxes, utilities, and the risk that comes with an unoccupied home. Turn it into cash fast.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Vacant Austin homes carry compounding costs without generating income. Meanwhile, vacancy increases vandalism risk, raises your insurance premiums, and can lead to maintenance issues going unnoticed — burst pipes, pest intrusion, weather damage.</p>
            <p>We buy vacant Austin properties directly, in any condition, and close on your timeline. No showings to arrange, no property to stage, no reason to wait another month while carrying costs pile up.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
