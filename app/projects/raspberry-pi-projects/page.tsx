import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Raspberry Pi Projects - Robotics and Energy',
  description: 'Browse Raspberry Pi projects by Robotics and Energy. Advanced electronics with demanding processing power.',
};

const RaspberryPiPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Raspberry Pi Projects' },
    ]} />

    <div className="container mx-auto px-4 pb-16">
      <h1 className="text-3xl font-bold text-robotics-dark mb-4">Our Raspberry Pi Projects</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-3xl">
        Raspberry Pi is a common microcomputer for our electronic projects. It simplifies work on
        resource-intensive endeavors, offering demanding processing power, development software tools,
        and streamlined integration of sensors and external hardware.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
              alt="Raspberry Pi car project"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <h2 className="text-lg font-bold text-robotics-dark mb-2">Raspberry Pi Car Project</h2>
            <p className="text-gray-600 text-sm mb-4">
              Build a remote-controlled car powered by Raspberry Pi with camera streaming and
              web-based control interface.
            </p>
            <Link
              href="/projects/raspberry-pi-projects/raspberry-pi-car-project"
              className="text-sm text-robotics-blue hover:text-blue-600 font-medium flex items-center gap-1"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RaspberryPiPage;
