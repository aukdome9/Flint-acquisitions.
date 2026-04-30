import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'Sell My House Fast Austin TX | Cash Offer in 24 Hours | Flint House Buyers',
    template: '%s | Flint House Buyers',
  },
  description:
    'Get a fair cash offer on your Austin home in 24 hours. No repairs, no agents, no fees. Flint House Buyers closes in as little as 7 days. Call or fill out the form now.',
  metadataBase: new URL('https://flinthousebuyers.com'),
  keywords: 'sell my house fast Austin TX, cash home buyers Austin, we buy houses Austin Texas, sell house as-is Austin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flinthousebuyers.com',
    siteName: 'Flint House Buyers',
    title: 'Sell My House Fast Austin TX | Cash Offer in 24 Hours | Flint House Buyers',
    description: 'Get a fair cash offer on your Austin home in 24 hours. No repairs, no agents, no fees.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Flint House Buyers',
  founder: 'Treyvion Ojeda',
  foundingLocation: 'Austin, Texas',
  areaServed: [
    'Austin TX',
    'Travis County TX',
    'Williamson County TX',
    'Hays County TX',
    'Bastrop County TX',
  ],
  priceRange: 'Cash offers',
  telephone: '512-894-6038',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
  },
  url: 'https://flinthousebuyers.com',
  openingHours: 'Mo-Su 00:00-23:59',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800&family=Crimson+Pro:ital,wght@1,300&family=DM+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        {/* GTM — async after FCP */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','XXXXXXXXXXXXXXXXX');fbq('track','PageView');`}
        </Script>
      </body>
    </html>
  );
}
