"use client";

import React from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import SEO from './SEO';
import OptimizedImage from './OptimizedImage';

interface BlogProps {
  view: 'list' | 'detail';
  postId?: string;
  onPostClick: (slug: string) => void;
  onBack: () => void;
}

const Blog: React.FC<BlogProps> = ({ view, postId, onPostClick, onBack }) => {
  if (view === 'detail' && postId) {
    const post = BLOG_POSTS.find(p => p.slug === postId || p.id === postId);

    if (!post) return <div>Post not found</div>;

    return (
      <div className="bg-white min-h-screen pt-24 pb-16">
        <SEO
          title={`${post.title} | Manish Tea Traders Blog`}
          description={post.excerpt}
          keywords={post.keywords}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={onBack} className="flex items-center text-tea-600 mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
          </button>

          <OptimizedImage
            src={post.imageUrl}
            srcSet={`
                ${post.imageUrl.replace('&w=1200', '&w=600')} 600w,
                ${post.imageUrl.replace('&w=1200', '&w=1200')} 1200w
            `}
            sizes="(max-width: 768px) 100vw, 800px"
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-8"
            priority={true}
          />

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex items-center text-gray-500 text-sm mb-8 space-x-4 border-b pb-6">
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</div>
            <div className="flex items-center"><User className="h-4 w-4 mr-1" /> {post.author}</div>
          </div>

          <div className="prose prose-lg prose-tea text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }}>
            {/* Content rendered from HTML string */}
          </div>

          <div className="mt-12 p-6 bg-tea-50 rounded-xl border border-tea-100">
            <h3 className="font-bold text-tea-900 mb-2">Interested in Wholesale Tea?</h3>
            <p className="text-gray-700 mb-4">We supply the premium tea mentioned in this article.</p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-block bg-tea-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-tea-700 transition">Contact Us</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-tea-50 min-h-screen pt-24 pb-16">
      <SEO
        title="Tea Industry Blog | Wholesale Market Insights | Manish Tea Traders"
        description="Read our latest insights on the Indian tea market, wholesale guides, and tips for starting a tea brand in India."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-tea-900 mb-4">Tea Industry Insights</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expert guides on wholesale tea buying, market trends, and tips for tea businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden">
                <OptimizedImage
                  src={post.imageUrl}
                  srcSet={`
                        ${post.imageUrl.replace('&w=1200', '&w=400')} 400w,
                        ${post.imageUrl.replace('&w=1200', '&w=800')} 800w
                    `}
                  sizes="(max-width: 768px) 100vw, 400px"
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="uppercase tracking-wide text-tea-600 font-semibold">Guide</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-tea-700">
                  <button onClick={() => onPostClick(post.slug)} className="text-left">
                    {post.title}
                  </button>
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <button
                  onClick={() => onPostClick(post.slug)}
                  className="flex items-center text-tea-600 font-semibold hover:text-tea-800 mt-auto"
                >
                  Read Article <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;