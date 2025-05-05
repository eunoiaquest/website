import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/company/eunoiaquest', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-background/80 py-8 mt-16"> {/* Added margin-top */}
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
        {/* Copyright */}
        <div className="text-sm">
          © {currentYear} Eunoia Quest. All rights reserved.
        </div>

        {/* Contact Info */}
        <div className="text-sm flex flex-col md:flex-row md:space-x-4">
           <span>Göttingen, 37073, Lower Saxonny, </span> {/* Placeholder Address */}
           <a href="mailto:contact@eunoiaquest.com" className="hover:text-primary transition-colors">
             contact@eunoiaquest.com
           </a>
        </div>


        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <Button key={social.label} variant="ghost" size="icon" asChild className="text-background/80 hover:text-primary hover:bg-transparent">
              <Link href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
