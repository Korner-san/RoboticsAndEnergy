'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SubItem {
  name: string;
  href: string;
  indent?: boolean; // true = shown as a sub-item under a category
}

interface MenuItem {
  name: string;
  href: string;
  subItems?: SubItem[];
}

const menuItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'DIY Projects',
    href: '/projects',
    subItems: [
      // Arduino category + its projects
      { name: 'Arduino Projects', href: '/projects/arduino-projects' },
      { name: 'Robotic Arm with Arduino', href: '/projects/arduino-projects/robotic-arm', indent: true },
      { name: 'Arduino Web Server LED Control', href: '/projects/arduino-projects/arduino-web-server-led-control', indent: true },
      { name: 'RGB LED Strip with Arduino', href: '/projects/arduino-projects/rgb-led-strip-with-arduino', indent: true },
      { name: 'Guitar Amplifier', href: '/projects/arduino-projects/guitar-amplifier', indent: true },
      { name: 'Wearable Epilepsy Detector', href: '/projects/arduino-projects/wearable-epilepsy-detector', indent: true },
      // Raspberry Pi category + its projects
      { name: 'Raspberry Pi Projects', href: '/projects/raspberry-pi-projects' },
      { name: 'Raspberry Pi Car Project', href: '/projects/raspberry-pi-projects/raspberry-pi-car-project', indent: true },
      // Other project pages
      { name: 'CMG Solar Project', href: '/projects/cmg-solar-project' },
      { name: 'Expert Program Computer Project', href: '/projects/expert-program-computer-project' },
    ],
  },
  { name: 'About us', href: '/about-us' },
  { name: 'Contact us', href: '/contact-us' },
  {
    name: 'Education',
    href: '#',
    subItems: [
      { name: 'Internet of Things for Smart Cities', href: '/articles-iot-smart-cities' },
      { name: 'Experts concerns with Artificial intelligence', href: '/articles-ai-experts-concerns' },
      { name: 'Computer memory operation', href: '/articles-computer-memory' },
    ],
  },
];

const DropdownMenu: React.FC<{ items: SubItem[] }> = ({ items }) => (
  // No mt — flush against the nav bar so there is zero gap for the mouse to cross
  <ul className="absolute top-full left-0 w-72 bg-white shadow-xl border border-gray-100 rounded-b-md z-50 py-1">
    {items.map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          className={
            item.indent
              ? 'block pl-7 pr-4 py-1.5 text-sm text-gray-500 hover:bg-blue-50 hover:text-robotics-blue transition-colors duration-150'
              : 'block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-robotics-blue transition-colors duration-150'
          }
        >
          {item.indent ? `– ${item.name}` : item.name}
        </Link>
      </li>
    ))}
  </ul>
);

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className="relative w-full z-40">
      {/* Background banner — increased height for more logo breathing room */}
      <div
        className="relative w-full h-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/2021/01/lol-1.png")',
        }}
      >
        {/* Logo — pushed up slightly so there is visible space between it and the nav bar */}
        <div className="absolute inset-0 flex items-center justify-center pb-10">
          <Link href="/" className="relative z-10 transition-transform hover:scale-105" aria-label="Robotics and Energy Home">
            <Image
              src="/images/2021/01/blue1-transparent.png"
              alt="Robotics and Energy Logo"
              width={200}
              height={80}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="absolute right-4 bottom-3 md:hidden text-white bg-black bg-opacity-30 p-2 rounded"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-sm hidden md:block">
          <div className="container mx-auto px-4">
            {/*
              self-stretch on each <li> makes it fill the full nav bar height.
              This means the hover area extends all the way to the bottom of the nav bar,
              so the mouse never "exits" the <li> before reaching the dropdown —
              eliminating the gap that caused the dropdown to close prematurely.
            */}
            <ul className="flex items-stretch justify-center space-x-10">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative flex items-center"
                  onMouseEnter={() => item.subItems && setOpenMenu(item.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="py-3 text-robotics-blue hover:text-white transition-colors duration-300 font-medium text-sm uppercase tracking-wide flex items-center gap-1"
                  >
                    {item.name}
                    {item.subItems && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.subItems && openMenu === item.name && (
                    <DropdownMenu items={item.subItems} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.name} className="border-b border-gray-100">
                {item.subItems ? (
                  <>
                    <button
                      className="w-full flex justify-between items-center px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                    >
                      {item.name}
                      <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.name && (
                      <ul className="bg-gray-50">
                        {item.subItems.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className={`block py-2 text-sm text-gray-600 hover:text-robotics-blue ${sub.indent ? 'pl-10' : 'pl-6'}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.indent ? `– ${sub.name}` : sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-robotics-blue" onClick={() => setMobileOpen(false)}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
