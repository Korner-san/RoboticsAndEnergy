import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Robotics and Energy',
  description: 'Learn about the founders of Robotics and Energy, our mission, and our goal to help beginners build electronic projects.',
};

const AboutPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />

    <div className="container mx-auto px-4 pb-16">
      {/* Who Are We */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h1 className="text-3xl font-bold text-robotics-dark mb-4">Who Are We?</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Robotics and Energy produces electronic projects and tutorials for educational purposes.
          Our goal is to provide beginners with the knowledge they need to build their desired
          electronic project while sharing our project ideas with audiences from all around the world.
        </p>
      </section>

      {/* Our Goal */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-robotics-dark mb-4">Our Goal</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We aim to provide beginners with the knowledge they need to build their desired electronic
          project. Through our detailed tutorials, component lists, schematics, and code examples,
          we make it possible for anyone to learn electronics and start creating.
        </p>
      </section>

      {/* Founders */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-robotics-dark mb-8">Our Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center p-6 border border-gray-100 rounded-lg">
            <div className="w-24 h-24 bg-robotics-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              KK
            </div>
            <h3 className="text-xl font-semibold text-robotics-dark mb-1">Koren Klein</h3>
            <p className="text-robotics-blue font-medium mb-3">SEO | Webmaster | Founder</p>
            <p className="text-gray-600 text-sm">
              Managing the web presence, SEO strategy, and overall direction of Robotics and Energy.
            </p>
          </div>
          <div className="text-center p-6 border border-gray-100 rounded-lg">
            <div className="w-24 h-24 bg-robotics-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              GC
            </div>
            <h3 className="text-xl font-semibold text-robotics-dark mb-1">Gena Charnukha</h3>
            <p className="text-robotics-blue font-medium mb-3">Engineer | Programmer | Founder</p>
            <p className="text-gray-600 text-sm">
              Leading the engineering and programming side of all projects and tutorials.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-robotics-blue rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Have a Question?</h2>
        <p className="mb-6 opacity-90">Feel free to reach out to us anytime.</p>
        <Link
          href="/contact-us"
          className="inline-block bg-white text-robotics-blue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  </div>
);

export default AboutPage;
