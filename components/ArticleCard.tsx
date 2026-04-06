import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  comments: number;
  href: string;
  imageSrc?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, date, comments, href, imageSrc }) => {
  return (
    <article className="group relative bg-white/60 backdrop-blur-md rounded-[20px] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 overflow-hidden transition-all duration-500 hover:-translate-y-1">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-robotics-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {imageSrc && (
        <Link href={href} aria-label={`Read article: ${title}`} className="block overflow-hidden relative">
          <div className="relative w-full h-64">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Inline subtle gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Elegant pill date badge over the image */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-robotics-dark shadow-sm">
              <time dateTime={date}>{date}</time>
            </div>
          </div>
        </Link>
      )}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-3 group-hover:to-robotics-blue transition-all duration-300">
          <Link href={href} aria-label={`Read article: ${title}`}>
            {title}
          </Link>
        </h3>
        <p className="text-gray-500 mb-5 leading-relaxed text-sm line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <Link
            href={href}
            className="inline-flex items-center text-robotics-blue font-semibold text-sm group-hover:text-blue-600 transition-colors duration-300"
            aria-label={`Read more about ${title}`}
          >
            Read Content
            <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
            {comments} Comment{comments !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
