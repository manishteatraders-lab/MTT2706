import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '../../data/blogPosts';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from '../../components/OptimizedImage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tea Business & Wholesale Blog 2026 | Market Prices, Grades & Tips | Manish Tea Traders",
  description: "Expert guides on wholesale tea prices, CTC grades, profit margins & starting your tea brand in India. Updated 2026 market data from Siliguri's leading tea wholesaler.",
  alternates: {
    canonical: "https://manishteatraders.in/blog/",
    languages: {
      'en': 'https://manishteatraders.in/blog/',
      'hi': 'https://manishteatraders.in/hi/blog/'
    }
  },
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9"
      }
    ]
  }
};

export default function BlogIndex() {
  const filteredPosts = BLOG_POSTS.filter(p => p.lang === 'en');

  return (
    <div className="bg-tea-50 min-h-screen pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-tea-900 mb-4 inline-flex items-center">
            Tea Industry Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert guides on wholesale tea buying, market trends, and tips for tea businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col group">
              <Link href={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
                <OptimizedImage
                  src={post.imageUrl}
                  srcSet={`
                      ${post.imageUrl.replace('&w=1200', '&w=400')} 400w,
                      ${post.imageUrl.replace('&w=1200', '&w=800')} 800w
                  `}
                  sizes="(max-width: 768px) 100vw, 400px"
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="uppercase tracking-wide text-tea-600 font-semibold">Guide</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-tea-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center text-tea-600 font-semibold hover:text-tea-800 mt-auto"
                >
                  Read Article <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
