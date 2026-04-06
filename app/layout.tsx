import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Robotics and Energy - DIY Electronic Projects',
  description: 'Learn electronics and robotics with step-by-step tutorials and DIY projects. Arduino, Raspberry Pi, and more!',
  keywords: 'robotics, electronics, Arduino, Raspberry Pi, DIY projects, tutorials',
  authors: [{ name: 'Robotics and Energy' }],
  openGraph: {
    title: 'Robotics and Energy - DIY Electronic Projects',
    description: 'Learn electronics and robotics with step-by-step tutorials and DIY projects.',
    type: 'website',
    locale: 'en_US',
  },
};

import TargetCursor from '@/components/TargetCursor';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TargetCursor 
          targetSelector=".cursor-target"
          spinDuration={2}
          hideDefaultCursor={false} // Set to false to avoid completely overriding site cursor if not everything is hoverable, change to true later if wanted
          hoverDuration={0.2}
          parallaxOn={true}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
