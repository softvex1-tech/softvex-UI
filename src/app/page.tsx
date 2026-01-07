import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <WhyChooseUsSection />
    </>
  );
}
