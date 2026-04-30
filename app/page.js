import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FounderSection from '@/components/FounderSection';
import ThreeSteps from '@/components/ThreeSteps';
import ComparisonTable from '@/components/ComparisonTable';
import WhoWeHelp from '@/components/WhoWeHelp';
import Calculator from '@/components/Calculator';
import OfferForm from '@/components/OfferForm';
import FAQSection from '@/components/FAQSection';

export const metadata = {
  title: 'Sell My House Fast Austin TX | Cash Offer in 24 Hours | Flint House Buyers',
  description:
    'Get a fair cash offer on your Austin home in 24 hours. No repairs, no agents, no fees. Flint House Buyers closes in as little as 7 days. Call or fill out the form now.',
  alternates: { canonical: 'https://flinthousebuyers.com/' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FounderSection />
      <ThreeSteps />
      <ComparisonTable />
      <WhoWeHelp />
      <Calculator />
      <OfferForm />
      <FAQSection />
    </>
  );
}
