import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import FeaturesSection from '@/components/sections/features-section';
import TeamSection from '@/components/sections/team-section';
import ContactSection from '@/components/sections/contact-section';
import AnimatedSection from '@/components/animations/animated-section';

export default function Home() {
  return (
    <>
      <AnimatedSection animationType="fade-in">
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
