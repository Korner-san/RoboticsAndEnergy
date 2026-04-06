import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Projects - Robotics and Energy',
  description: 'Browse all DIY electronic projects by Robotics and Energy including Arduino, Raspberry Pi, and more.',
};

const categories = [
  {
    title: 'Arduino Projects',
    description: 'Arduino is the most common microcontroller for beginners. Follow our step-by-step Arduino projects to learn electronics.',
    href: '/projects/arduino-projects',
    projects: [
      'Robotic Arm with Arduino',
      'Arduino Web Server LED Control',
      'RGB LED Strip with Arduino',
      'Guitar Amplifier Project',
      'Wearable Epilepsy Detector',
    ],
  },
  {
    title: 'Raspberry Pi Projects',
    description: 'Raspberry Pi is a powerful single-board computer for more complex projects requiring demanding processing power.',
    href: '/projects/raspberry-pi-projects',
    projects: [
      'Raspberry Pi Car Project',
    ],
  },
  {
    title: 'CMG Solar Project',
    description: 'Exploring solar energy and control moment gyroscopes for sustainable energy applications.',
    href: '/projects/cmg-solar-project',
    projects: [],
  },
  {
    title: 'Expert Program Computer Project',
    description: 'An expert system programmed in Prolog that diagnoses and fixes common PC problems using AI principles.',
    href: '/projects/expert-program-computer-project',
    projects: [],
  },
];

const ProjectsPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]} />

    <div className="container mx-auto px-4 pb-16">
      <h1 className="text-3xl font-bold text-robotics-dark mb-4">Our Projects</h1>
      <p className="text-lg text-gray-600 mb-10">
        Explore our collection of DIY electronic projects. Each project comes with detailed instructions,
        component lists, schematics, and code.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-robotics-dark mb-3">
              <Link href={cat.href} className="hover:text-robotics-blue transition-colors">{cat.title}</Link>
            </h2>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cat.description}</p>
            {cat.projects.length > 0 && (
              <ul className="space-y-1 mb-4">
                {cat.projects.map((p) => (
                  <li key={p} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-robotics-blue flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
            <Link href={cat.href} className="text-sm text-robotics-blue hover:text-blue-600 font-medium flex items-center gap-1">
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;
