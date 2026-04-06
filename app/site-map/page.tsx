import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Site Map - Robotics and Energy',
  description: 'Complete site map for Robotics and Energy website.',
};

const siteMap = [
  {
    section: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Green Energy', href: '/green-energy' },
      { label: 'Software Downloads', href: '/software-downloads' },
    ],
  },
  {
    section: 'DIY Projects',
    links: [
      { label: 'All Projects', href: '/projects' },
      { label: 'Arduino Projects', href: '/projects/arduino-projects' },
      { label: 'Raspberry Pi Projects', href: '/projects/raspberry-pi-projects' },
      { label: 'CMG Solar Project', href: '/projects/cmg-solar-project' },
      { label: 'Expert Program Computer Project', href: '/projects/expert-program-computer-project' },
    ],
  },
  {
    section: 'Arduino Projects',
    links: [
      { label: 'Robotic Arm with Arduino', href: '/projects/arduino-projects/robotic-arm' },
      { label: 'Arduino Web Server LED Control', href: '/projects/arduino-projects/arduino-web-server-led-control' },
      { label: 'RGB LED Strip with Arduino', href: '/projects/arduino-projects/rgb-led-strip-with-arduino' },
      { label: 'Electric Guitar Amplifier', href: '/projects/arduino-projects/guitar-amplifier' },
      { label: 'Wearable Epilepsy Detector', href: '/projects/arduino-projects/wearable-epilepsy-detector' },
    ],
  },
  {
    section: 'Raspberry Pi Projects',
    links: [
      { label: 'Raspberry Pi Car Project', href: '/projects/raspberry-pi-projects/raspberry-pi-car-project' },
    ],
  },
  {
    section: 'Education Articles',
    links: [
      { label: 'Internet of Things for Smart Cities', href: '/articles-iot-smart-cities' },
      { label: 'Experts Concerns with Artificial Intelligence', href: '/articles-ai-experts-concerns' },
      { label: 'Computer Memory Operation', href: '/articles-computer-memory' },
    ],
  },
];

const SiteMapPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Site Map' }]} />

    <div className="container mx-auto px-4 pb-16">
      <h1 className="text-3xl font-bold text-robotics-dark mb-10">Site Map</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteMap.map(({ section, links }) => (
          <div key={section} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">
              {section}
            </h2>
            <ul className="space-y-2">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 hover:text-robotics-blue transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-robotics-blue flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SiteMapPage;
