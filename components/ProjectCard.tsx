import React from 'react';
import Link from 'next/link';
import TiltedCard from './TiltedCard';

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  altText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  href, 
  imageSrc, 
  altText 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      {/* TiltedCard for the project image */}
      <div className="mb-6">
        <TiltedCard
          imageSrc={imageSrc}
          altText={altText || title}
          captionText={title}
          containerHeight="250px"
          containerWidth="100%"
          imageHeight="250px"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={false}
        />
      </div>

      {/* Project content */}
      <h3 className="text-xl font-semibold text-robotics-dark mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center text-robotics-blue hover:text-blue-600 font-medium transition-colors duration-300"
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <svg 
          className="ml-2 w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ProjectCard;

