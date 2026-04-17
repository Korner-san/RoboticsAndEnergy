import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'YouTube', href: '#', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    { name: 'Instagram', href: '#', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z' },
  ];

  const footerLinks = [
    { name: 'Home page', href: '/' },
    { name: 'About us', href: '/about-us' },
    { name: 'Contact us', href: '/contact-us' },
    { name: 'Site map', href: '/site-map' },
    { name: 'Forum', href: '/forum' },
  ];

  const educationLinks = [
    { name: 'IoT for Smart Cities', href: '/articles-iot-smart-cities' },
    { name: 'AI Experts Concerns', href: '/articles-ai-experts-concerns' },
    { name: 'Computer Memory Operation', href: '/articles-computer-memory' },
  ];

  return (
    <footer className="bg-robotics-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-robotics-blue transition-colors duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-robotics-blue transition-colors duration-300"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Featured Projects</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects/arduino-projects/arduino-web-server-led-control" className="text-gray-300 hover:text-robotics-blue transition-colors duration-300">
                  Arduino web server LED control
                </Link>
              </li>
              <li>
                <Link href="/projects/arduino-projects/robotic-arm" className="text-gray-300 hover:text-robotics-blue transition-colors duration-300">
                  Robotic arm with Arduino
                </Link>
              </li>
              <li>
                <Link href="/projects/expert-program-computer-project" className="text-gray-300 hover:text-robotics-blue transition-colors duration-300">
                  PC repair assistant
                </Link>
              </li>
              <li>
                <Link href="/projects/arduino-projects/rgb-led-strip-with-arduino" className="text-gray-300 hover:text-robotics-blue transition-colors duration-300">
                  Web-Controlled RGB LED Light Strip
                </Link>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <ul className="space-y-2">
              {educationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-robotics-blue transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Learn electronics and robotics with our step-by-step tutorials and DIY projects.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Robotics and Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

