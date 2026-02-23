import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Brain, Gamepad2, BarChart3, ShieldCheck } from 'lucide-react'; // Example Icons

const features = [
  {
    icon: Brain,
    title: 'Cognitive Insights',
    description: 'Gain deep understanding through scientifically-validated game mechanics.',
  },
  {
    icon: Gamepad2,
    title: 'Engaging Gameplay',
    description: 'Assessments that feel less like tests and more like playing a game.',
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    description: 'Receive clear, comprehensive reports to guide decisions.',
  },
   {
    icon: ShieldCheck,
    title: 'Secure & Private',
    description: 'Your data is protected with industry-standard security measures.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-quicksand-medium text-foreground sm:text-4xl">
            Why Choose Eunoia?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages of our gamified assessment platform.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col" // Added flex flex-col
            >
              <CardHeader className="items-center text-center">
                 <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-8 w-8" />
                 </div>
                <CardTitle className="text-xl font-quicksand-medium">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow"> {/* Added flex-grow */}
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
