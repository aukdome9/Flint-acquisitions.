import OfferForm from '@/components/OfferForm';

export const metadata = { title: 'Sell My House Bastrop TX | Cash Offer | Flint House Buyers', description: 'Sell your Bastrop TX home for cash. We buy houses in 78602, in the Lost Pines area. No repairs, no agents. Cash offer in 24 hours, close in 7 days.', alternates: { canonical: 'https://flinthousebuyers.com/sell-my-house-bastrop/' } };

export default function Bastrop() {
  return (
    <>
      <div style={{ background: 'var(--flint-black)', padding: '10rem 0 5rem' }}>
        <div className="container">
          <p className="section-label">BASTROP · 78602</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '1.5rem' }}>
            Sell Your Bastrop<br /><span style={{ color: 'var(--ember-amber)' }}>Home for Cash.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.15rem', color: 'var(--ash)', maxWidth: '580px', lineHeight: 1.85 }}>
            Bastrop — zip 78602, home of the Lost Pines and Bastrop State Park — is a historic community experiencing steady growth. Cash offer in 24 hours, close in 7 days.
          </p>
        </div>
      </div>
      <div style={{ background: 'var(--parchment)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.05rem', color: 'var(--flint-stone)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p>Bastrop&apos;s 78602 zip code is located along the Colorado River corridor roughly 30 miles southeast of downtown Austin. The community is known for the Lost Pines — an isolated pocket of loblolly pines that survived long after their natural range receded — and the Bastrop State Park system. The historic downtown square, the Hyatt Regency Lost Pines resort, and the Circuit of the Americas proximity contribute to Bastrop County&apos;s growing appeal.</p>
            <p>We serve all of Bastrop County, including the city of Bastrop, Bastrop River Estates, and the rural residential areas along the Colorado River. If you own property in the 78602 zip code and need a fast, private cash sale, Flint House Buyers delivers a written offer within 24 hours.</p>
          </div>
        </div>
      </div>
      <OfferForm />
    </>
  );
}
