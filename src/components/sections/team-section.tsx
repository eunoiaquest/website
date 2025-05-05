import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'CEO & Lead Scientist',
    imageUrl: 'https://picsum.photos/id/1005/200/200', // Placeholder
    social: {
      linkedin: '#',
      twitter: '#',
    },
    aiHint: 'professional woman headshot',
  },
  {
    name: 'Alex Chen',
    role: 'Head of Game Development',
    imageUrl: 'https://picsum.photos/id/1011/200/200', // Placeholder
    social: {
      linkedin: '#',
      twitter: '#',
    },
     aiHint: 'professional man headshot',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-quicksand-medium text-foreground sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            The minds behind Eunoia's innovative assessment solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 justify-center max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center border-0 shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center pt-6 space-y-4">
                <Avatar className="h-32 w-32 mb-4 border-4 border-primary/20 shadow-sm">
                  <AvatarImage src={member.imageUrl} alt={member.name} data-ai-hint={member.aiHint} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-quicksand-medium text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
                <div className="flex space-x-3 pt-2">
                   {member.social.linkedin && (
                    <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                      <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                   )}
                   {member.social.twitter && (
                     <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                        <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} Twitter`}>
                          <Twitter className="h-5 w-5" />
                        </Link>
                     </Button>
                   )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
