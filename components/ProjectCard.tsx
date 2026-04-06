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
    <div className="relative group bg-white/70 backdrop-blur-xl rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(112,205,226,0.15)] transition-all duration-500 p-6 border border-white/40 overflow-hidden hover:-translate-y-2">
      {/* Decorative gradient orb for glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-robotics-blue/0 via-robotics-blue/10 to-purple-500/10 rounded-[28px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10 w-full">
        {/* TiltedCard for the project image */}
        <div className="mb-6 rounded-[15px] w-full overflow-hidden">
          <TiltedCard
            imageSrc={imageSrc}
            altText={altText || title}
            captionText={title}
            containerHeight="350px"
            containerWidth="100%"
            imageHeight="350px"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.03}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
          />
        </div>

        {/* Project content */}
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-robotics-dark to-gray-700 mb-3 group-hover:to-robotics-blue transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-robotics-dark text-white font-medium hover:bg-robotics-blue hover:shadow-lg hover:shadow-robotics-blue/30 transition-all duration-300 group/btn"
          aria-label={`Learn more about ${title}`}
        >
          Explore Project
          <svg 
            className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
