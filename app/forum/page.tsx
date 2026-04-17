import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import { threads } from '@/lib/forumData';

const ForumPage: React.FC = () => (
  <div className="bg-gray-100 min-h-screen pb-16">
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <Breadcrumb crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Forum' },
      ]} />
    </div>

    <div className="container mx-auto px-4 py-10 max-w-4xl">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-[#70CDE2] mb-1">Community Forum</h1>
          <p className="text-gray-500 text-base">
            Discuss projects, ask questions, and share your builds with the community.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/forum/sign-in"
            className="px-5 py-2.5 rounded-lg border border-[#70CDE2] text-[#70CDE2] font-semibold text-sm hover:bg-[#70CDE2] hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/forum/sign-up"
            className="px-5 py-2.5 rounded-lg bg-[#70CDE2] text-white font-semibold text-sm hover:bg-blue-400 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>

      {/* Thread list */}
      <div className="space-y-4">
        {threads.map((thread) => (
          <div
            key={thread.slug}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-stretch">
              {/* Project image */}
              <div className="relative w-full sm:w-36 h-40 sm:h-auto flex-shrink-0">
                <Image
                  src={thread.image}
                  alt={thread.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 144px"
                />
              </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 flex-1">
              {/* Avatar cluster */}
              <div className="flex -space-x-2 flex-shrink-0">
                {thread.posts.slice(0, 3).map((post) => (
                  <div
                    key={post.id}
                    className={`w-9 h-9 rounded-full ${post.avatarColor} flex items-center justify-center text-white text-xs font-bold border-2 border-white`}
                  >
                    {post.initials}
                  </div>
                ))}
              </div>

              <div className="flex-1 min-w-0">
                {/* Project badge */}
                <Link
                  href={thread.projectHref}
                  className="inline-block text-xs font-semibold text-[#70CDE2] bg-blue-50 px-2.5 py-0.5 rounded-full mb-2 hover:bg-blue-100 transition-colors"
                >
                  {thread.projectTitle}
                </Link>

                {/* Thread title */}
                <Link href={`/forum/${thread.slug}`}>
                  <h2 className="text-lg font-bold text-gray-800 hover:text-[#70CDE2] transition-colors leading-snug mb-1">
                    {thread.title}
                  </h2>
                </Link>

                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{thread.description}</p>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                  <span>{thread.posts.length} posts</span>
                  <span>·</span>
                  <span>Last activity {thread.lastActivity}</span>
                  <span>·</span>
                  <span>{thread.posts.reduce((sum, p) => sum + p.likes, 0)} likes total</span>
                </div>
              </div>

              {/* Join button */}
              <Link
                href={`/forum/${thread.slug}`}
                className="flex-shrink-0 px-5 py-2.5 bg-[#70CDE2] text-white rounded-lg text-sm font-semibold hover:bg-blue-400 transition-colors"
              >
                Join Discussion
              </Link>
            </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info banner */}
      <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
        <p className="text-gray-500 text-sm">
          These discussions grew out of real conversations people had with us by email about our projects.
          <br className="hidden sm:block" />
          Sign up to join in, ask questions, or share your build!
        </p>
      </div>
    </div>
  </div>
);

export default ForumPage;
