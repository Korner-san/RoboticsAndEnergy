import React from 'react';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  comments: number;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, date, comments, href }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-robotics-dark mb-3 hover:text-robotics-blue transition-colors duration-300">
        <Link href={href} aria-label={`Read article: ${title}`}>
          {title}
        </Link>
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
        {excerpt}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <time dateTime={date} className="font-medium">
          {date}
        </time>
        <span>
          {comments} Comment{comments !== 1 ? 's' : ''}
        </span>
      </div>
      <Link
        href={href}
        className="inline-flex items-center text-robotics-blue hover:text-blue-600 font-medium text-sm mt-3 transition-colors duration-300"
        aria-label={`Read more about ${title}`}
      >
        Read More »
      </Link>
    </article>
  );
};

export default ArticleCard;

