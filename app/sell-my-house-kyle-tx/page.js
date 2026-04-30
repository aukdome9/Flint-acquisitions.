import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Kyle TX | Cash Offer | Flint House Buyers', description: 'Sell your Kyle TX home for cash. We buy houses in 78640, near Plum Creek. No repairs, no agents. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-kyle-tx/' } };

export default function Kyle() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">KYLE · 78640</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Kyle, TX<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Kyle — zip 78640, home to Plum Creek and one of Texas&apos;s fastest-growing communities — is well within our Hays County service area. Cash offer in 24 hours.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Kyle&apos;s 78640 zip code sits in Hays County directly south of Buda on IH-35 and has grown explosively as Austin&apos;s southern suburbs expanded. The Plum Creek master-planned community is one of the area&apos;s signature neighborhoods, offering new-urbanist design principles in an otherwise traditional suburban environment. The area also includes older neighborhoods near Kyle&apos;s historic downtown along Center Street.</p>
            <p>We buy Kyle homes in any condition and close on your timeline. Whether you own a newer property in Plum Creek, an older home near Kyle High School, or a rural property on the outskirts of the 78640 zip, Flint House Buyers makes written cash offers within 24 hours of receiving your information.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
