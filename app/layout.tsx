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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
