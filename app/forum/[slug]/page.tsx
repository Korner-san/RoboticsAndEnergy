'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { getThread } from '@/lib/forumData';

const ForumThreadPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const thread = getThread(slug);
  const [replyBody, setReplyBody] = useState('');

  if (!thread) {
    return (
      <div className="bg-gray-100 min-h-screen pb-16">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">Thread not found</h1>
          <Link href="/forum" className="text-[#70CDE2] hover:underline">← Back to Forum</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Forum', href: '/forum' },
          { label: thread.projectTitle },
        ]} />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">

        {/* Thread header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          {/* Project image */}
          <div className="relative w-full h-56 sm:h-72">
            <Image
              src={thread.image}
              alt={thread.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <Link
                href={thread.projectHref}
                className="inline-block text-xs font-semibold text-white bg-[#70CDE2]/80 px-2.5 py-0.5 rounded-full mb-2 hover:bg-[#70CDE2] transition-colors"
              >
                ↗ {thread.projectTitle}
              </Link>
              <h1 className="text-2xl font-bold text-white leading-snug">{thread.title}</h1>
            </div>
          </div>

          <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-500">{thread.posts.length} posts · Last activity {thread.lastActivity}</p>
            {/* Auth buttons */}
            <div className="flex gap-2 flex-shrink-0">
              <Link
                href="/forum/sign-in"
                className="px-4 py-2 rounded-lg border border-[#70CDE2] text-[#70CDE2] font-semibold text-sm hover:bg-[#70CDE2] hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/forum/sign-up"
                className="px-4 py-2 rounded-lg bg-[#70CDE2] text-white font-semibold text-sm hover:bg-blue-400 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4 mb-6">
          {thread.posts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-white rounded-2xl shadow-sm border p-6 ${post.isOP ? 'border-[#70CDE2]/40' : 'border-gray-100'}`}
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full ${post.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {post.initials}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Author row */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-800 text-sm">{post.author}</span>
                    {post.isOP && (
                      <span className="text-xs bg-[#70CDE2]/15 text-[#70CDE2] font-semibold px-2 py-0.5 rounded-full">OP</span>
                    )}
                    {post.author === 'RoboticsAndEnergy' && (
                      <span className="text-xs bg-gray-800 text-white font-semibold px-2 py-0.5 rounded-full">Team</span>
                    )}
                    <span className="text-xs text-gray-400">#{index + 1}</span>
                    <span className="text-xs text-gray-400 ml-auto">{post.date}</span>
                  </div>

                  {/* Body */}
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{post.body}</p>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      disabled
                      title="Sign in to like"
                      className="flex items-center gap-1.5 text-xs text-gray-400 cursor-not-allowed"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {post.likes}
                    </button>
                    <button
                      disabled
                      title="Sign in to reply"
                      className="text-xs text-gray-400 cursor-not-allowed"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply box — locked */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-base font-bold text-gray-800 mb-4">Leave a reply</h3>
          <div className="relative">
            <textarea
              value={replyBody}
              onChange={(e) => setReplyBody(e.target.value)}
              disabled
              rows={4}
              placeholder="Sign in to join the discussion..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-400 resize-none cursor-not-allowed outline-none"
            />
            {/* Lock overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-white/70 backdrop-blur-[2px]">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-sm text-gray-500 font-medium">You must be signed in to reply</p>
              <div className="flex gap-2">
                <Link
                  href="/forum/sign-in"
                  className="px-4 py-2 rounded-lg border border-[#70CDE2] text-[#70CDE2] font-semibold text-sm hover:bg-[#70CDE2] hover:text-white transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/forum/sign-up"
                  className="px-4 py-2 rounded-lg bg-[#70CDE2] text-white font-semibold text-sm hover:bg-blue-400 transition-colors"
                >
                  Create account
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/forum" className="text-sm text-[#70CDE2] hover:underline">← Back to all discussions</Link>
        </div>
      </div>
    </div>
  );
};

export default ForumThreadPage;
