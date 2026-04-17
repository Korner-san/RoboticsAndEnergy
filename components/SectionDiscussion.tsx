'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { threads } from '@/lib/forumData';

interface Props {
  threadSlug: string;
  sectionId: string;
}

const SectionDiscussion: React.FC<Props> = ({ threadSlug, sectionId }) => {
  const [expanded, setExpanded] = useState(false);

  const thread = threads.find((t) => t.slug === threadSlug);
  const sectionPosts = thread?.posts.filter((p) => p.section === sectionId) ?? [];

  return (
    <div className="mt-8 pt-5 border-t border-gray-100">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#70CDE2] transition-colors group"
      >
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {sectionPosts.length > 0
          ? `${sectionPosts.length} ${sectionPosts.length === 1 ? 'person' : 'people'} had questions about this section`
          : 'Be the first to ask about this section'}
        <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
      </button>

      {expanded && (
        <div className="mt-4 space-y-3">
          {sectionPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              <div
                className={`w-7 h-7 rounded-full ${post.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5`}
              >
                {post.initials}
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-gray-700">{post.author}</span>
                  {post.author === 'RoboticsAndEnergy' && (
                    <span className="text-xs bg-gray-800 text-white px-1.5 py-0.5 rounded-full leading-none">Team</span>
                  )}
                  <span className="text-xs text-gray-400 ml-auto">{post.date}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{post.body}</p>
              </div>
            </div>
          ))}

          <Link
            href={`/forum/${threadSlug}`}
            className="block text-xs text-[#70CDE2] hover:underline pt-1"
          >
            See full discussion →
          </Link>

          <div className="relative mt-1">
            <input
              type="text"
              disabled
              placeholder="Ask a question about this section..."
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-400 cursor-not-allowed outline-none pr-32"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <Link
                href="/forum/sign-in"
                className="text-xs text-[#70CDE2] font-semibold hover:underline whitespace-nowrap"
              >
                Sign in to ask →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionDiscussion;
