import FAQSection from '@/components/FAQSection';
import OfferForm from '@/components/OfferForm';

export const metadata = {
  title: 'FAQ | Frequently Asked Questions',
  description: 'Get answers about how Flint House Buyers works — cash offers, closing timeline, fees, repairs, liens, and more. No surprises. Just straight talk from a real Austin buyer.',
  alternates: { canonical: 'https://flinthousebuyers.com/faq/' },
};

export default function FAQPage() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">FAQ</p>
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
            Straight Answers.
            <br />
            <span style={{ color: 'var(--ember-amber)' }}>No Runaround.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--ash)',
              maxWidth: '520px',
              lineHeight: 1.8,
            }}
          >
            These are the questions sellers ask us every week. If yours isn&apos;t here, call Treyvion directly.
          </p>
        </div>
      </div>
      <FAQSection />
      <OfferForm />
    </>
  );
}
