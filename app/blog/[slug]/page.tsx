import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '../../../data/blogPosts';
import { AUTHORS } from '../../../data/authors';
import { Calendar, ArrowLeft, Award, Phone, MessageCircle, FileText } from 'lucide-react';
import { BUSINESS_DETAILS } from '../../../constants';
import OptimizedImage from '../../../components/OptimizedImage';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const englishPosts = BLOG_POSTS.filter((post) => post.lang === 'en');
  return englishPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = BLOG_POSTS.find(p => p.slug === slug && p.lang === 'en') || BLOG_POSTS.find(p => p.slug === slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const currentLang = post.lang || 'en';
  const translation = post.translationId
      ? BLOG_POSTS.find(p => p.translationId === post.translationId && p.lang !== currentLang)
      : null;

  const alternates: Metadata['alternates'] = {
    canonical: `https://www.manishteatraders.in/blog/${post.slug}/`
  };

  if (translation) {
    alternates.languages = {
      [currentLang]: `https://www.manishteatraders.in${currentLang === 'hi' ? '/hi' : ''}/blog/${post.slug}/`,
      [translation.lang]: `https://www.manishteatraders.in${translation.lang === 'hi' ? '/hi' : ''}/blog/${translation.slug}/`
    };
  }

  return {
    title: `${post.title} | Manish Tea Traders Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates,
    openGraph: {
      images: [{ url: post.imageUrl }]
    }
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = BLOG_POSTS.find(p => p.slug === slug && p.lang === 'en') || BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const currentLang = post.lang || 'en';

  const injectCTA = (html: string) => {
    const isBlendingPost = post.keywords.toLowerCase().includes('blend') || 
                           post.slug.includes('blend') || 
                           post.title.toLowerCase().includes('blend') ||
                           post.keywords.toLowerCase().includes('margin') ||
                           post.title.toLowerCase().includes('profit');

    const generalCtaHtml = `
      <div class="my-10 p-6 sm:p-8 bg-tea-50 border-l-4 border-tea-600 rounded-r-xl shadow-sm not-prose">
        <h4 class="text-tea-900 font-bold text-xl mt-0 mb-2">${currentLang === 'hi' ? 'अपने व्यापार के लिए चाय खोज रहे हैं?' : 'Sourcing tea for your business?'}</h4>
        <p class="text-tea-700 text-base mb-5">${currentLang === 'hi' ? 'थोक रेट पर प्रीमियम CTC, असम और दार्जिलिंग चाय प्राप्त करें। हम 48 घंटे के भीतर पूरे भारत में मुफ्त सैंपल भेजते हैं।' : 'Get wholesale pricing on premium CTC, Assam, and Darjeeling teas. We dispatch free samples across India within 48 hours.'}</p>
        <a href="/request-free-tea-samples" class="inline-block bg-tea-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-tea-700 transition-colors shadow-sm">
          ${currentLang === 'hi' ? 'मुफ्त सैंपल का अनुरोध करें →' : 'Request Free Samples →'}
        </a>
      </div>
    `;

    const blendCtaHtml = `
      <div class="my-10 p-6 sm:p-8 bg-tea-900 text-white rounded-xl shadow-lg not-prose">
        <h4 class="text-white font-bold text-xl mt-0 mb-2">${currentLang === 'hi' ? 'मुफ़्त टी ब्लेंड कैलकुलेटर' : 'Free Tea Blend Calculator'}</h4>
        <p class="text-tea-100 text-base mb-5">${currentLang === 'hi' ? 'अपने लाभ मार्जिन और रेसिपी को तुरंत ऑप्टिमाइज़ करें। थोक खरीदारों और प्राइवेट लेबल ब्रांड्स के लिए मुफ्त टूल।' : 'Instantly calculate blend ratios, batch cost per kg, and selling margin. Built for wholesale buyers and private label brands.'}</p>
        <a href="/tea-blend-calculator" class="inline-block bg-white text-tea-900 px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-sm">
          ${currentLang === 'hi' ? 'मुफ्त कैलकुलेटर खोलें →' : 'Open Free Calculator →'}
        </a>
      </div>
    `;

    const finalCta = isBlendingPost ? blendCtaHtml : generalCtaHtml;

    // Try to split by H2 to find a good middle spot
    const parts = html.split('<h2>');
    if (parts.length >= 3) {
      const middleIndex = Math.floor(parts.length / 2);
      parts.splice(middleIndex, 0, finalCta + '<h2>');
      return parts.join('<h2>').replace('<h2><h2>', '<h2>');
    }
    
    return html + finalCta; // Fallback to end if not enough H2s
  };

  const blogSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": post.imageUrl,
      "datePublished": new Date(post.date).toISOString(),
      "dateModified": new Date(post.date).toISOString(),
      "author": {
          "@type": "Person",
          "name": post.author,
          "jobTitle": AUTHORS[post.author]?.role || "Expert",
          "description": AUTHORS[post.author]?.bio || "",
          "url": "https://www.manishteatraders.in/about-us"
      },
      "publisher": {
          "@type": "Organization",
          "name": "Manish Tea Traders",
          "logo": { "@type": "ImageObject", "url": "https://www.manishteatraders.in/logo.png" }
      }
  };

  const faqPageSchema = post.faqSchema ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": post.faqSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
  } : null;

  const schema = faqPageSchema
      ? [blogSchema, faqPageSchema]
      : blogSchema;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-white min-h-screen pt-8 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12 lg:items-start">
                  {/* Main Content Column */}
                  <div className="max-w-3xl">
                      <Link href={currentLang === 'hi' ? "/hi/blog" : "/blog"} className="flex items-center text-tea-600 mb-8 hover:underline text-sm font-medium">
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          {currentLang === 'hi' ? "ब्लॉग पर वापस जाएं" : "Back to Blog"}
                      </Link>

                      <figure className="mb-8">
                          <OptimizedImage
                              src={post.imageUrl}
                              srcSet={`
                                  ${post.imageUrl.replace('&w=1200', '&w=600')} 600w,
                                  ${post.imageUrl.replace('&w=1200', '&w=1200')} 1200w
                              `}
                              sizes="(max-width: 768px) 100vw, 800px"
                              alt={post.title}
                              className="w-full h-64 md:h-[400px] object-cover rounded-2xl shadow-lg"
                              priority={true}
                          />
                      </figure>

                      <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                          {post.title}
                      </h1>

                      <div className="flex flex-wrap items-center gap-y-2 text-gray-500 text-sm mb-10 pb-8 border-b border-gray-100">
                          <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full text-gray-600 font-medium mr-4">
                              <Calendar className="h-4 w-4 mr-2 text-tea-600" />
                              {currentLang === 'hi' ? "प्रकाशित: " : "Published: "}{post.date}
                          </div>
                          <div className="flex items-center text-gray-700 font-bold">
                              <span className="text-tea-800">{post.author}</span>
                          </div>
                      </div>

                      <article
                          className="prose prose-lg prose-tea max-w-none text-gray-800 leading-normal"
                          dangerouslySetInnerHTML={{ __html: injectCTA(post.content) }}
                      />

                      {/* FAQ Accordion */}
                      {post.faqSchema && post.faqSchema.length > 0 && (
                          <div className="mt-12 border-t border-gray-100 pt-10">
                              <h2 className="text-2xl font-serif font-bold text-tea-900 mb-6">
                                  {currentLang === 'hi' ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
                              </h2>
                              <div className="space-y-3">
                                  {post.faqSchema.map((faq, i) => (
                                      <details key={i} className="bg-tea-50 border border-tea-100 rounded-xl p-5 group">
                                          <summary className="font-bold text-tea-900 cursor-pointer list-none flex justify-between items-start gap-3">
                                              <span>{faq.question}</span>
                                              <span className="text-tea-500 group-open:rotate-180 transition-transform shrink-0 mt-0.5">▼</span>
                                          </summary>
                                          <p className="mt-3 text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                                      </details>
                                  ))}
                              </div>
                          </div>
                      )}

                      {/* Author Profile */}
                      {AUTHORS[post.author] && (
                          <div className="mt-16 bg-white border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow">
                              <div className="flex-grow">
                                  <div className="flex items-center gap-2 mb-2">
                                      <h4 className="text-xl font-bold font-serif text-gray-900">{AUTHORS[post.author].name}</h4>
                                      <Award className="h-4 w-4 text-tea-600" />
                                  </div>
                                  <p className="text-tea-700 font-bold text-xs uppercase tracking-wider mb-3">
                                      {AUTHORS[post.author].role}
                                  </p>
                                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                      {AUTHORS[post.author].bio}
                                  </p>
                                  <Link href="/about-us" className="text-tea-600 text-xs font-bold hover:underline inline-flex items-center gap-1 uppercase tracking-tighter">
                                      Read More About Our Story →
                                  </Link>
                              </div>
                          </div>
                      )}

                      {/* Bottom CTA */}
                      <div className="mt-16 p-8 bg-tea-50 rounded-2xl border border-tea-100 text-center">
                          <h3 className="font-serif font-bold text-2xl text-tea-900 mb-3">
                              {currentLang === 'hi' ? "थोक चाय व्यापार में रुचि रखते हैं?" : "Interested in Wholesale Tea?"}
                          </h3>
                          <p className="text-gray-700 mb-6 max-w-lg mx-auto">
                              {currentLang === 'hi'
                                  ? "हम सीधे सिलीगुड़ी से प्रीमियम चाय की सप्लाई करते हैं। आज ही अपने व्यापार के लिए ताज़ा रेट प्राप्त करें।"
                                  : "We supply premium quality tea directly from Siliguri. Get a custom quote for your business today."}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                              <Link
                                  href={currentLang === 'hi' ? "/hi/contact" : "/contact-us"}
                                  className="inline-block bg-tea-600 text-white px-8 py-3 rounded-full font-bold hover:bg-tea-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                              >
                                  {currentLang === 'hi' ? "संपर्क करें" : "Contact Sales Team"}
                              </Link>
                              <a
                                  href={BUSINESS_DETAILS.sampleFormUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block bg-white border-2 border-tea-600 text-tea-700 px-8 py-3 rounded-full font-bold hover:bg-tea-50 transition"
                              >
                                  {currentLang === 'hi' ? "मुफ्त सैंपल पाएं" : "Request Free Sample"}
                              </a>
                          </div>
                      </div>
                  </div>

                  {/* Desktop Sticky Sidebar (lg+ only) */}
                  <aside className="hidden lg:block">
                      <div className="sticky top-24 space-y-4">
                          {/* Contact Card */}
                          <div className="bg-tea-900 text-white rounded-2xl p-5">
                              <h3 className="font-bold text-lg mb-1">Manish Tea Traders</h3>
                              <p className="text-tea-200 text-xs mb-4">Siliguri, West Bengal — Since 2004</p>
                              <a
                                  href="tel:+917001958588"
                                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-lg px-4 py-3 mb-3 text-sm font-medium"
                              >
                                  <Phone className="h-4 w-4 text-tea-300" />
                                  +91 70019 58588
                              </a>
                              <a
                                  href="https://wa.me/917001958588?text=Hello%2C%20I%20want%20to%20know%20the%20wholesale%20price%20of%20tea"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 bg-[#25D366] hover:bg-green-500 transition rounded-lg px-4 py-3 mb-3 text-sm font-bold"
                              >
                                  <MessageCircle className="h-4 w-4" />
                                  Chat on WhatsApp
                              </a>
                              <div className="text-xs text-tea-300 space-y-1 pt-2 border-t border-white/10">
                                  <p>✓ GST: 19AHJPR0891G1ZX</p>
                                  <p>✓ Tea Board of India (KOL/B-7410)</p>
                                  <p>✓ Free samples available</p>
                              </div>
                          </div>

                          {/* Free Sample CTA */}
                          <a
                              href={BUSINESS_DETAILS.sampleFormUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block bg-gradient-to-br from-tea-50 to-tea-100 border border-tea-200 rounded-2xl p-5 hover:shadow-md transition text-center group"
                          >
                              <div className="text-3xl mb-2">🍵</div>
                              <h3 className="font-bold text-tea-900 mb-1">Request Free Sample</h3>
                              <p className="text-tea-700 text-xs mb-3">Try before you buy. We ship CTC, Assam & Darjeeling samples across India.</p>
                              <span className="inline-block bg-tea-600 text-white text-xs font-bold px-4 py-2 rounded-full group-hover:bg-tea-700 transition">
                                  Get Free Sample →
                              </span>
                          </a>

                          {/* Price List */}
                          <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
                              <FileText className="h-8 w-8 text-tea-600 mx-auto mb-2" />
                              <h3 className="font-bold text-gray-900 mb-1 text-sm">2026 Wholesale Price List</h3>
                              <p className="text-gray-500 text-xs mb-3">CTC, Assam & Darjeeling — all grades</p>
                              <a
                                  href="https://wa.me/917001958588?text=Please%20share%20the%202026%20wholesale%20tea%20price%20list"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block bg-tea-600 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-tea-700 transition"
                              >
                                  Get Price List on WhatsApp
                              </a>
                          </div>
                      </div>
                  </aside>
              </div>
          </div>
      </div>
    </>
  );
}
