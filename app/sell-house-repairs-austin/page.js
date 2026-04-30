import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'Sell House As-Is Austin TX | No Repairs Needed | Flint House Buyers',
  description: 'Sell your Austin home as-is — roof damage, foundation issues, water damage, fire damage, mold, code violations. No repairs before closing. Cash offer in 24 hours.',
  alternates: { canonical: 'https://flinthousebuyers.com/sell-house-repairs-austin/' },
};

export default function Repairs() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">AS-IS · AUSTIN, TX</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Repairs Needed?<br /><span style={{ color: 'var(--ember-amber)' }}>We Don&apos;t Care.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Roof damage, foundation issues, water intrusion, fire damage, code violations, mold — condition doesn&apos;t disqualify you. We buy as-is and you spend nothing before closing.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: 'var(--flint-black)', marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
            We Buy Austin Homes With All of These:
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {['Roof damage or full replacement needed', 'Foundation cracks or settling', 'Water damage or flooding history', 'Fire damage', 'Mold or mildew problems', 'Code violations or unpermitted work', 'Outdated electrical or plumbing', 'Deferred maintenance (years of it)', 'Hoarder property', 'Structural issues'].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--ember-amber)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', flexShrink: 0, marginTop: '0.2rem' }}>✓</span>
                <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '0.975rem', color: 'var(--flint-stone)', lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>The condition of the property is factored into the offer, not added to a list of demands before closing. Traditional buyers and agents need the home retail-ready. We do not — because we do the work ourselves after closing.</p>
            <p>This means you walk away without spending a dollar on repairs, without the stress of coordinating contractors, and without watching your closing date slip because a buyer&apos;s inspector found something.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
