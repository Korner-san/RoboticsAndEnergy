'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SubItem {
  name: string;
  href: string;
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
      { name: 'Arduino Projects', href: '/projects/arduino-projects' },
      { name: 'Raspberry Pi Projects', href: '/projects/raspberry-pi-projects' },
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
  <ul className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border border-gray-100 rounded-md z-50 py-1">
    {items.map((item) => (
      <li key={item.name}>
        <Link
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-robotics-blue transition-colors duration-200"
        >
          {item.name}
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
      {/* Background banner with logo */}
      <div
        className="relative w-full h-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://roboticsandenergy.com/wp-content/uploads/2021/01/lol-1.png")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Link href="/" className="relative z-10 transition-transform hover:scale-105 -mt-4" aria-label="Robotics and Energy Home">
            <Image
              src="https://roboticsandenergy.com/wp-content/uploads/2021/01/blue1-transparent.png"
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
            <ul className="flex items-center justify-center space-x-10 py-3">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.subItems && setOpenMenu(item.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="text-robotics-blue hover:text-white transition-colors duration-300 font-medium text-sm uppercase tracking-wide flex items-center gap-1"
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
                          <li key={sub.name}>
                            <Link href={sub.href} className="block px-8 py-2 text-sm text-gray-600 hover:text-robotics-blue" onClick={() => setMobileOpen(false)}>
                              {sub.name}
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
