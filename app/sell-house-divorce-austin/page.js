import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'Sell House Fast During Divorce Austin TX | Flint House Buyers',
  description: 'Selling your Austin home during a divorce? Get a fast cash offer and remove the biggest shared asset from the equation. Close in 7 days. No agents. No delays.',
  alternates: { canonical: 'https://flinthousebuyers.com/sell-house-divorce-austin/' },
};

export default function Divorce() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">DIVORCE · AUSTIN, TX</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Selling During Divorce.<br /><span style={{ color: 'var(--ember-amber)' }}>Simple. Clean. Done.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            A fast, clean sale removes the most complicated shared asset from your divorce settlement. We work with both parties and close on a timeline that works for everyone.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Divorce is difficult enough without a 90-day listing, repair negotiations, and an agent caught between two disagreeing parties. The real estate process can extend and complicate an already painful situation — or you can close it out in days.</p>
            <p>We buy Austin homes directly from both parties, coordinating as needed with both sides and both attorneys. Because we pay cash, there is no financing contingency, no appraisal, and no buyer who could walk away at the last minute. You close on a date certain and receive an agreed amount — clear and documented.</p>
            <p>Whether one party stays in the home until closing or it is vacant, we can accommodate your specific situation. We have handled tenant-occupied sales, homes with deferred maintenance, and properties where neither party wants to invest another dollar before selling.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
