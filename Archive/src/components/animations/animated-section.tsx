'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in' | 'slide-up';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationType = 'slide-up', // Default animation
  className,
  threshold = 0.1, // Trigger when 10% of the element is visible
  triggerOnce = true, // Only trigger the animation once
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && sectionRef.current) {
              observer.unobserve(sectionRef.current); // Stop observing after triggering once
            }
          } else if (!triggerOnce) {
             // Optionally reset visibility if triggerOnce is false
             // setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  const animationClass = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
  }[animationType];

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0', // Start invisible
        isVisible && animationClass, // Apply animation class when visible
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
