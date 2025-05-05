import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://picsum.photos/600/600"
              alt="Eunoia platform illustration"
              layout="fill"
              objectFit="cover"
              data-ai-hint="abstract assessment game"
              className="transition-transform duration-300 hover:scale-105"
            />
             {/* Optional: Add a subtle overlay or border */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-quicksand-medium text-foreground sm:text-4xl">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Eunoia, we're revolutionizing assessments through engaging video games.
              Our mission is to provide accurate, unbiased, and enjoyable diagnostic experiences,
              making the process less stressful and more insightful for everyone involved. We value innovation, empathy, and scientific rigor.
            </p>
             {/* Learn More Link - potentially opens a modal or scrolls */}
            <Button variant="link" asChild className="text-primary px-0">
               <Link href="#about">Learn More</Link>
             </Button>
             {/* TODO: Implement modal or more detailed about section if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
