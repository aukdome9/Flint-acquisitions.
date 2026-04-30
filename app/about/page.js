import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'About Us | Born & Raised in Austin TX',
  description: 'Treyvion Ojeda founded Flint House Buyers to give Austin homeowners a real, local option when they need to sell fast. Born and raised in Austin. Cash offers in 24 hours.',
  alternates: { canonical: 'https://flinthousebuyers.com/about/' },
};

export default function About() {
  return (
    <>
      {/* Header */}
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">ABOUT FLINT HOUSE BUYERS</p>
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
            <span style={{ color: 'var(--ember-amber)' }}>Austin Born.</span><br />
            Austin Bought.
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
            Flint House Buyers is a local Austin company — not a franchise, not an algorithm, not a call center in another state.
          </p>
        </div>
      </div>

      {/* Founder story */}
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Photo placeholder */}
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              <div
                aria-hidden="true"
                style={{
                  width: '4px',
                  background: 'var(--ember-amber)',
                  flexShrink: 0,
                  borderRadius: '2px 0 0 2px',
                }}
              />
              <div
                style={{
                  flex: 1,
                  aspectRatio: '3/4',
                  background: 'linear-gradient(135deg, #2a2724 0%, #3A3632 50%, #2a2420 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  padding: '3rem',
                }}
                role="img"
                aria-label="Treyvion Ojeda, Founder of Flint House Buyers, Austin Texas"
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--ember-amber)',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}
                >
                  🏠
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--ash)',
                    letterSpacing: '0.1em',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  }}
                >
                  Treyvion Ojeda<br />Founder Photo
                </p>
              </div>
            </div>

            {/* Copy */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ember-amber)',
                  marginBottom: '0.75rem',
                }}
              >
                Founder · Flint House Buyers · Austin, Texas
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'var(--flint-black)',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}
              >
                TREYVION OJEDA
              </h2>
              <span className="amber-rule" />
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '1.1rem',
                  color: 'var(--flint-stone)',
                  lineHeight: 1.8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  marginBottom: '2rem',
                }}
              >
                <p>
                  &ldquo;I was born and raised right here in Austin. I know these neighborhoods — not from a spreadsheet, but from growing up in them. I started Flint House Buyers because I watched too many Austin families get taken advantage of by out-of-state investors who didn&apos;t know the city, didn&apos;t care about the community, and disappeared after closing.
                </p>
                <p>
                  When you call Flint, you&apos;re calling a real Austinite who has a stake in this community long after the deal is done. I&apos;ll give you a fair number, tell you exactly how I got there, and close on your timeline — not mine.&rdquo;
                </p>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--flint-stone)',
                  letterSpacing: '0.08em',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: 'var(--ember-amber)' }}>Austin Native</span> ·{' '}
                <span style={{ color: 'var(--ember-amber)' }}>100+</span> Homes Purchased ·{' '}
                <span style={{ color: 'var(--ember-amber)' }}>7</span>-Day Close Guarantee ·{' '}
                Serving ATX Since <span style={{ color: 'var(--ember-amber)' }}>MMXXV</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company overview */}
      <div style={{ background: 'var(--flint-black)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'var(--white)',
              letterSpacing: '0.02em',
              marginBottom: '2rem',
            }}
          >
            About <span style={{ color: 'var(--ember-amber)' }}>Flint Acquisitions LLC</span>
          </h2>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.05rem',
              color: 'var(--ash)',
              lineHeight: 1.9,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <p>
              Flint House Buyers is a division of Flint Acquisitions LLC, a Texas-registered real estate acquisitions company headquartered in Austin. Every purchase we make is closed through a licensed Texas title company — fully documented and fully protected for the seller.
            </p>
            <p>
              We are not a franchise. We are not affiliated with any national iBuyer. We are a local Austin operation that buys, renovates, and repositions Austin-area homes. Our business model aligns with yours — we need to close deals that make sense for both sides, which means we give honest numbers.
            </p>
            <p>
              When you submit a form or call our number, you reach Treyvion or someone on the Flint team directly. No call centers. No hand-offs. No automated follow-up sequences. Just a real conversation with a real person who knows Austin.
            </p>
          </div>
        </div>
      </div>

      <OfferForm />
    </>
  );
}
