import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { InteractiveCharacter } from '@/components/ui/InteractiveCharacter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto -mt-24 relative z-10 flex justify-center">
        <InteractiveCharacter />
      </div>
      <ServicesSection />
      <TechStackSection />
      <WhyChooseUsSection />
    </>
  );
}
