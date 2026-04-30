import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'Stop Foreclosure Austin TX | Sell Before Auction | Flint House Buyers',
  description: 'Facing foreclosure in Austin? Sell your house fast for cash before the auction date. Flint House Buyers closes in 7 days. Keep cash in your pocket, not the bank.',
  alternates: { canonical: 'https://flinthousebuyers.com/sell-house-foreclosure-austin/' },
};

export default function Foreclosure() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem', borderBottom: '1px solid rgba(168,88,40,0.3)' }}>
        <div className="container">
          <p className="section-label">FORECLOSURE · AUSTIN, TX</p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: 'var(--white)',
              letterSpacing: '0.03em',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}
          >
            Stop Foreclosure.<br />
            <span style={{ color: 'var(--ember-amber)' }}>Keep Your Equity.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.15rem',
              color: 'var(--ash)',
              maxWidth: '580px',
              lineHeight: 1.85,
            }}
          >
            If your Austin home is in foreclosure, you may still have time to sell and walk away with cash. We can close before your auction date — often within 7 days.
          </p>
        </div>
      </div>

      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              color: 'var(--flint-black)',
              marginBottom: '2rem',
              letterSpacing: '0.02em',
            }}
          >
            What Happens If You Do Nothing
          </h2>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.05rem',
              color: 'var(--flint-stone)',
              lineHeight: 1.85,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginBottom: '3rem',
            }}
          >
            <p>When a foreclosure goes to auction, the lender recovers the loan balance and you typically receive nothing. Depending on your equity position, you could be walking away from tens of thousands of dollars that legally belong to you.</p>
            <p>Furthermore, a completed foreclosure stays on your credit report for seven years and can block you from purchasing another home for several years after that.</p>
            <p>Selling to Flint House Buyers before the auction date preserves your equity, protects your credit, and gives you a clean exit on your terms — not the bank&apos;s.</p>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              color: 'var(--flint-black)',
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
            }}
          >
            How We Help Austin Homeowners in Foreclosure
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            {[
              'We can close in as little as 7 days — before most auction dates',
              'We pay cash, so there\'s no financing contingency that could delay your timeline',
              'Liens and past-due payments are handled at closing through the title company',
              'We buy as-is — no repairs required before closing',
              'There is zero cost to you — we cover standard closing costs',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--ember-amber)', flexShrink: 0, marginTop: '0.2rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>✓</span>
                <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.75 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OfferForm />
    </>
  );
}
