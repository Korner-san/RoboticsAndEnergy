import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Software Downloads - Robotics and Energy',
  description: 'Download software packages for Robotics and Energy projects including robotic arm control, expert system, and LED control software.',
};

const downloads = [
  {
    title: 'Robotic Arm – Release',
    description: 'Official release package for the 6-DOF robotic arm control software. Includes GUI for controlling all 6 servo axes.',
    filename: 'Release.zip',
    updated: 'January 2021',
    href: 'https://roboticsandenergy.com/wp-content/uploads/2021/01/Release.zip',
    project: '/projects/arduino-projects/robotic-arm',
  },
  {
    title: 'Expert System',
    description: 'PC troubleshooting expert system that diagnoses and fixes common hardware issues using Prolog-based AI.',
    filename: 'Expert-System.zip',
    updated: 'April 2021',
    href: 'https://roboticsandenergy.com/wp-content/uploads/2021/04/Expert-System.zip',
    project: '/projects/expert-program-computer-project',
  },
  {
    title: 'RGB LED WEB',
    description: 'Arduino-based web project to control RGB LEDs from your browser. Includes all web files for the SD card.',
    filename: 'RGB-LED-WEB.zip',
    updated: 'April 2023',
    href: 'https://roboticsandenergy.com/wp-content/uploads/2023/04/RGB-LED-WEB.zip',
    project: '/projects/arduino-projects/arduino-web-server-led-control',
  },
  {
    title: 'LED Strip Server & Web Software',
    description: 'Server and web UI for advanced RGB LED strip control with color effects and pattern animations.',
    filename: 'LED-Strip-Server-and-web-software-1.zip',
    updated: 'October 2023',
    href: 'https://roboticsandenergy.com/wp-content/uploads/2023/10/LED-Strip-Server-and-web-software-1.zip',
    project: '/projects/arduino-projects/rgb-led-strip-with-arduino',
  },
];

const SoftwareDownloadsPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Software Downloads' }]} />

    <div className="container mx-auto px-4 pb-16">
      <h1 className="text-3xl font-bold text-robotics-dark mb-4">Software Downloads</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Download software packages for our projects. Each package includes all code and files
        needed to get started.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {downloads.map((dl) => (
          <div key={dl.title} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-lg font-bold text-robotics-dark">{dl.title}</h2>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded ml-2 flex-shrink-0">ZIP</span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{dl.description}</p>
            <p className="text-xs text-gray-400 mb-4">Last updated: {dl.updated}</p>
            <div className="flex items-center gap-3">
              <a
                href={dl.href}
                className="flex items-center gap-2 bg-robotics-blue text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-400 transition-colors"
                download
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </a>
              <a href={dl.project} className="text-sm text-gray-500 hover:text-robotics-blue transition-colors">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SoftwareDownloadsPage;
