export const metadata = {
  title: 'Thank You | Flint House Buyers',
  description: 'We received your information. Treyvion will call you within 24 hours.',
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div
      style={{
        background: 'var(--flint-black)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            background: 'var(--ember-amber)',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            margin: '0 auto 2rem',
          }}
          aria-hidden="true"
        >
          ✓
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'var(--white)',
            letterSpacing: '0.03em',
            lineHeight: 1,
            marginBottom: '1.5rem',
          }}
        >
          We Got Your Info.
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '1.15rem',
            color: 'var(--ash)',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}
        >
          Treyvion or a member of the Flint team will call you within 24 hours — not a bot, not a call center. A real Austinite who read your submission.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              color: 'var(--ember-amber)',
              textTransform: 'uppercase',
            }}
          >
            What Happens Next
          </p>
          {[
            '1. Treyvion reviews your property details personally',
            '2. He calls you to confirm info and ask a few quick questions',
            '3. A written cash offer is delivered within 24 hours',
            '4. You decide — no pressure, no deadline, no obligation',
          ].map((s) => (
            <p
              key={s}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--ash)',
                letterSpacing: '0.04em',
                textAlign: 'left',
              }}
            >
              {s}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
