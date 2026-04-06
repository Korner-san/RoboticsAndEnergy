import React from 'react';
import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

const Breadcrumb: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => (
  <nav className="bg-gray-100 py-3 px-4 mb-8" aria-label="breadcrumb">
    <div className="container mx-auto">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-gray-400">›</span>}
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-robotics-blue transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </nav>
);

export default Breadcrumb;
