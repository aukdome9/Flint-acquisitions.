import Link from 'next/link';
import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'Who We Help | Every Situation, One Solution',
  description: 'We buy houses in every situation — foreclosure, divorce, probate, relocation, bad tenants, repairs needed, tax liens, and more. No repairs. No fees. Cash in 7 days.',
  alternates: { canonical: 'https://flinthousebuyers.com/who-we-help/' },
};

const situations = [
  { title: 'Facing Foreclosure', href: '/sell-house-foreclosure-austin/', desc: "Stop the process before auction day. We can close faster than your foreclosure timeline and put cash in your pocket instead of letting the bank take everything.", icon: '⚠️' },
  { title: 'Going Through Divorce', href: '/sell-house-divorce-austin/', desc: "A clean, fast sale removes the most complicated shared asset from your divorce settlement. We make the process simple, documented, and final.", icon: '⚖️' },
  { title: 'Inherited a Property', href: '/sell-inherited-house-austin/', desc: "Whether the estate is in probate or clear of it, we buy inherited homes as-is. No repairs, no cleanout, no delays waiting for a retail buyer.", icon: '🏡' },
  { title: 'Relocating for Work', href: '/sell-house-relocating-austin/', desc: "You can't wait 90 days. Neither can your new job. We close on your timeline so your Austin home stops being a problem and starts being your down payment.", icon: '✈️' },
  { title: 'Behind on Repairs', href: '/sell-house-repairs-austin/', desc: "Roof damage, foundation issues, water damage, fire damage, code violations, mold — condition doesn't disqualify you. We buy as-is and you spend nothing before closing.", icon: '🔨' },
  { title: 'Tired Landlord', href: '/sell-house-bad-tenants-austin/', desc: "Done dealing with problem tenants, late-night repair calls, eviction proceedings? Sell the property — even tenant-occupied — and move on.", icon: '🔑' },
  { title: 'Vacant Property', href: '/sell-vacant-house-austin/', desc: "A vacant property is carrying costs every month and attracting risk. Turn it into cash fast.", icon: '🏚️' },
  { title: 'Tax Lien on Property', href: '/sell-house-tax-lien-austin/', desc: "Tax liens don't disqualify your property. We work through the title company to resolve liens from proceeds at closing.", icon: '📋' },
  { title: 'Probate Property', href: '/sell-house-probate-austin/', desc: "Probate real estate requires a specific process. We have experience with it. We move at the pace of your probate, not ours.", icon: '📑' },
  { title: 'Downsizing', href: '/sell-house-downsizing-austin/', desc: "Ready to simplify? Sell fast without the hassle of showings, repairs, or waiting on a buyer's financing.", icon: '📦' },
];

export default function WhoWeHelpPage() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">WHO WE HELP</p>
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
            Whatever Brought<br />
            <span style={{ color: 'var(--ember-amber)' }}>You Here.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--ash)',
              maxWidth: '540px',
              lineHeight: 1.8,
            }}
          >
            Life happens. We buy houses in every situation — no matter the condition, the circumstances, or the timeline.
          </p>
        </div>
      </div>

      <div style={{ background: 'var(--flint-black)', padding: '0 0 6rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {situations.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={{
                  display: 'block',
                  background: 'var(--charcoal)',
                  borderLeft: '3px solid var(--texas-rust)',
                  padding: '2rem',
                  borderRadius: '2px',
                  transition: 'border-color var(--transition-fast)',
                }}
                aria-label={s.title}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    letterSpacing: '0.02em',
                    color: 'var(--white)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '0.975rem',
                    color: 'var(--ash)',
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <OfferForm />
    </>
  );
}
