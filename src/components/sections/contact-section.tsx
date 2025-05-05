'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // Simulate form submission
  const onSubmit = async (data: FormData) => {
    // In a real app, you'd send this data to your backend/API
    console.log('Form submitted:', data);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    form.reset(); // Reset form after successful submission
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-quicksand-medium text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Have questions or want to learn more? Send us a message!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
           <Card className="bg-card">
             <CardHeader>
               <CardTitle>Send a Message</CardTitle>
               <CardDescription>We typically respond within 24 hours.</CardDescription>
             </CardHeader>
             <CardContent>
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How can we help you?" {...field} rows={5} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                       {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
               </Form>
             </CardContent>
           </Card>

          {/* Contact Details */}
          <div className="space-y-6 pt-6 md:pt-0">
            <h3 className="text-2xl font-quicksand-medium text-foreground">Contact Information</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <span>123 Assessment Ave, Suite 100<br />DiagnoCity, TX 75001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@eunoiaquest.com" className="hover:text-primary transition-colors">
                  contact@eunoiaquest.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                 <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                 <span>+1 (555) 123-4567</span> {/* Placeholder phone */}
              </div>
            </div>
            {/* Optional: Add a map embed here */}
             <div className="mt-6 aspect-video bg-muted rounded-lg overflow-hidden">
               {/* Placeholder for map - In a real app use @vis.gl/react-google-maps or similar */}
               <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                 Map Placeholder
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
