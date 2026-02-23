import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['300', '400', '500'], // Light, Regular, Medium
});

export const metadata: Metadata = {
  title: 'Eunoia Quest',
  description: 'Gamified Mental Health Screening Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          quicksand.variable // Use CSS variable for font
        )}
      >
        <Header />
        <main className="flex flex-col min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))]"> {/* Adjust min-height based on header/footer */}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
