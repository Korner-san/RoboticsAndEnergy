import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Arduino Projects - Robotics and Energy',
  description: 'Browse all Arduino DIY projects by Robotics and Energy. Step-by-step tutorials with code, schematics and components lists.',
};

const arduinoProjects = [
  {
    title: 'Robotic Arm with Arduino',
    description: 'Build a 6-axis programmable robotic arm controlled via a computer interface using Arduino UNO and servo motors.',
    href: '/projects/arduino-projects/robotic-arm',
    imageSrc: 'https://roboticsandenergy.com/wp-content/uploads/2021/01/Real-robotic-arm-yay.jpg',
  },
  {
    title: 'Arduino Web Server LED Control',
    description: 'Create a small website on your LAN with an Ethernet shield, implement password protection, and control RGB LEDs through a web interface.',
    href: '/projects/arduino-projects/arduino-web-server-led-control',
    imageSrc: 'https://roboticsandenergy.com/wp-content/uploads/2021/01/f-1.png',
  },
  {
    title: 'Web-Controlled RGB LED Light Strip',
    description: 'Control an RGB LED strip from any smart device on your network using Arduino, an Ethernet shield, and MOSFETs.',
    href: '/projects/arduino-projects/rgb-led-strip-with-arduino',
    imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  },
  {
    title: 'Electric Guitar Amplifier',
    description: 'Design a Class B guitar amplifier with 100x amplification, using op-amps and push-pull BJT transistors.',
    href: '/projects/arduino-projects/guitar-amplifier',
    imageSrc: 'https://roboticsandenergy.com/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-26-22.59.13-A-simple-black-and-white-illustration-of-a-guitar-amplifier-circuit-diagram.-The-diagram-should-show-basic-components-such-as-transistors-resistors.webp',
  },
  {
    title: 'Wearable Epilepsy Detector',
    description: 'A wearable device that detects epileptic seizures using sensors and sends alerts through an Arduino-based system.',
    href: '/projects/arduino-projects/wearable-epilepsy-detector',
    imageSrc: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
];

const ArduinoProjectsPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Arduino Projects' },
    ]} />

    <div className="container mx-auto px-4 pb-16">
      <h1 className="text-3xl font-bold text-robotics-dark mb-4">Arduino Projects</h1>
      <p className="text-lg text-gray-600 mb-10">
        Arduino is the most common MicroController for beginners to use in their Electronic projects.
        With its global affordability and beginner-friendly ecosystem, it&apos;s the perfect platform to
        start learning electronics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {arduinoProjects.map((project) => (
          <div key={project.title} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 bg-gray-200">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-bold text-robotics-dark mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
              <Link
                href={project.href}
                className="text-sm text-robotics-blue hover:text-blue-600 font-medium flex items-center gap-1"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ArduinoProjectsPage;
