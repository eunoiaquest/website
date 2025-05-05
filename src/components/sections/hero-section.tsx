import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className={cn(
        'relative flex items-center justify-center h-screen min-h-[600px]', // Ensure minimum height
        'bg-gradient-to-br from-background via-secondary to-accent/30' // Subtle gradient background
      )}
      style={{
        // Optional: Add a subtle pattern image if desired
        // backgroundImage: 'url(/path/to/abstract-pattern.svg)',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
      }}
    >
      {/* Overlay for contrast if using a background image */}
      {/* <div className="absolute inset-0 bg-background/30 backdrop-blur-sm"></div> */}

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-quicksand-medium tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Welcome to Eunoia
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-5 md:max-w-3xl">
          Video-Gamified Assessments on your platform.
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
