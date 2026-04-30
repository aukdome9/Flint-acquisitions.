import Link from 'next/link';
import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'How It Works | 3 Steps to Your Cash Offer',
  description: 'See exactly how Flint House Buyers works — tell us about your home, get a written cash offer in 24 hours, and pick your closing date. No repairs, no agents, no fees.',
  alternates: { canonical: 'https://flinthousebuyers.com/how-it-works/' },
};

const steps = [
  {
    num: '01',
    title: 'Tell Us About Your Home',
    detail: [
      'Fill out the simple form on this page or call Treyvion directly.',
      'We\'ll ask a few questions: address, rough condition, and your timeline.',
      'No judgment. No pressure. No hard sales pitch. Just information so we can build you a real offer.',
      'If you prefer to talk, call us and we\'ll do the form together over the phone in about 5 minutes.',
    ],
  },
  {
    num: '02',
    title: 'Get Your Written Cash Offer',
    detail: [
      'Within 24 hours of receiving your information, you\'ll have a real, written cash offer.',
      'We\'ll walk you through exactly how we arrived at the number — comparable sales, repair estimates, and current market conditions.',
      'No lowballs. No bait-and-switch. No surprises at the closing table.',
      'You can ask us to explain anything. We have nothing to hide.',
    ],
  },
  {
    num: '03',
    title: 'Pick Your Closing Date — We Fund on Time',
    detail: [
      'You choose when we close. As fast as 7 days from signed contract if title is clear.',
      'Need more time to arrange your move? We can extend up to 60 days at your request.',
      'Closing is handled by a licensed Texas title company — fully documented, fully protected.',
      'Cash hits your account on closing day. Not "pending." Not "contingent." Done.',
    ],
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Header */}
      <div
        style={{
          background: 'var(--flint-black)',
          padding: '10rem 0 6rem',
          borderBottom: '1px solid rgba(58,54,50,0.4)',
        }}
      >
        <div className="container">
          <p className="section-label">HOW IT WORKS</p>
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
            Three Steps.<br />
            <span style={{ color: 'var(--ember-amber)' }}>Your Cash.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.2rem',
              color: 'var(--ash)',
              maxWidth: '560px',
              lineHeight: 1.8,
            }}
          >
            Most Austin sellers go from first contact to cash in hand in under two weeks. Here&apos;s exactly how the process works — no guesswork, no surprises.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '2.5rem',
                alignItems: 'start',
                marginBottom: i < steps.length - 1 ? '4rem' : 0,
                paddingBottom: i < steps.length - 1 ? '4rem' : 0,
                borderBottom: i < steps.length - 1 ? '1px solid rgba(58,54,50,0.2)' : 'none',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '5rem',
                  color: 'var(--ember-amber)',
                  lineHeight: 1,
                  opacity: 0.8,
                }}
              >
                {step.num}
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    color: 'var(--flint-black)',
                    letterSpacing: '0.02em',
                    marginBottom: '1.5rem',
                  }}
                >
                  {step.title}
                </h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {step.detail.map((d) => (
                    <li
                      key={d}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        fontSize: '1.05rem',
                        color: 'var(--flint-stone)',
                        lineHeight: 1.75,
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span style={{ color: 'var(--ember-amber)', flexShrink: 0, marginTop: '0.25rem' }}>—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offer form */}
      <OfferForm />
    </>
  );
}
