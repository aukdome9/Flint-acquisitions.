import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'Relocating from Austin? Sell Fast for Cash | Flint House Buyers',
  description: 'Relocating from Austin for work or life? Get a cash offer in 24 hours and close before your move date. No showings, no agents, no listing.',
  alternates: { canonical: 'https://flinthousebuyers.com/sell-house-relocating-austin/' },
};

export default function Relocating() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">RELOCATING · AUSTIN, TX</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Moving On.<br /><span style={{ color: 'var(--ember-amber)' }}>We Close Fast.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            You don&apos;t have time for a 90-day listing. Your new city doesn&apos;t care about your Austin real estate timeline. We close on your schedule so your home stops being a problem.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Relocation creates a hard deadline that the traditional real estate market does not respect. You need to be in your new city, your kids need to start school, your job starts Monday — and you still have a house in Austin with a mortgage attached to it.</p>
            <p>We can close your Austin home in as little as 7 days and wire the proceeds to wherever you&apos;re moving. No showings. No open houses. No waiting on a buyer&apos;s financing to clear. Just a clean sale that lets you focus on what&apos;s next.</p>
            <p>We also understand that relocation sometimes takes longer than expected. If you need 30 or 60 days to coordinate your move, we accommodate that too. The date is yours.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
