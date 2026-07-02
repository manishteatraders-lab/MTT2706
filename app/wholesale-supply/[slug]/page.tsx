import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCATION_PAGES } from '../../../data/locationPages';
import { BUSINESS_DETAILS } from '../../../constants';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const englishLocations = LOCATION_PAGES.filter((post) => post.lang === 'en');
  return englishLocations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const activeData = LOCATION_PAGES.find(p => p.slug === slug && p.lang === 'en') || LOCATION_PAGES.find(p => p.slug === slug);
  
  if (!activeData) {
    return { title: 'Location Not Found' };
  }

  const currentLang = activeData.lang || 'en';
  const translation = activeData.translationId
      ? LOCATION_PAGES.find(p => p.translationId === activeData.translationId && p.lang !== currentLang)
      : null;

  const alternates: Metadata['alternates'] = {
    canonical: `https://www.manishteatraders.in/wholesale-supply/${activeData.slug}/`
  };

  if (translation) {
    alternates.languages = {
      [currentLang]: `https://www.manishteatraders.in${currentLang === 'hi' ? '/hi' : ''}/wholesale-supply/${activeData.slug}/`,
      [translation.lang]: `https://www.manishteatraders.in${translation.lang === 'hi' ? '/hi' : ''}/wholesale-supply/${translation.slug}/`
    };
  }

  return {
    title: activeData.title,
    description: activeData.metaDescription,
    alternates,
    openGraph: {
      images: [{ url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9" }]
    }
  };
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const activeData = LOCATION_PAGES.find(p => p.slug === slug && p.lang === 'en') || LOCATION_PAGES.find(p => p.slug === slug);

  if (!activeData) {
    notFound();
  }

  const currentLang = activeData.lang || 'en';

  const citySchema = {
      "@context": "https://schema.org",
      "@type": "WholesaleStore",
      "name": `Manish Tea Traders - Wholesale Tea Supplier in ${activeData.city}`,
      "description": activeData.metaDescription,
      "url": `https://www.manishteatraders.in/wholesale-supply/${activeData.slug}`,
      "telephone": "+91-7001958588",
      "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ganga Nagar, Mahananda Para",
          "addressLocality": "Siliguri",
          "addressRegion": "West Bengal",
          "postalCode": "734005",
          "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "26.7123", "longitude": "88.4234" },
      "openingHours": "Mo-Sa 10:00-19:00",
      "priceRange": "₹₹",
      "areaServed": { "@type": "City", "name": activeData.city },
      "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Wholesale Tea Catalog",
          "itemListElement": [
              {
                  "@type": "Offer",
                  "itemOffered": {
                      "@type": "Product",
                      "name": currentLang === 'hi' ? "सीटीसी चाय (खुली)" : "CTC Tea (Loose)",
                      "description": currentLang === 'hi'
                          ? `${activeData.city} में डिलीवरी के लिए प्रीमियम ताजा गार्डन चाय`
                          : `Premium fresh garden tea for delivery in ${activeData.city}`
                  }
              },
              {
                  "@type": "Offer",
                  "itemOffered": {
                      "@type": "Product",
                      "name": currentLang === 'hi' ? "असम चाय (बल्क)" : "Assam Tea (Bulk)",
                      "description": currentLang === 'hi'
                          ? `${activeData.city} के थोक विक्रेताओं के लिए कड़क चाय`
                          : `Malty strong tea for wholesalers in ${activeData.city}`
                  }
              }
          ]
      }
  };

  const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": currentLang === 'hi' ? "होम" : "Home", "item": "https://www.manishteatraders.in/" },
          { "@type": "ListItem", "position": 2, "name": currentLang === 'hi' ? "सेवा क्षेत्र" : "Service Areas", "item": `https://www.manishteatraders.in${currentLang === 'hi' ? '/hi' : ''}/locations` },
          { "@type": "ListItem", "position": 3, "name": activeData.city, "item": `https://www.manishteatraders.in${currentLang === 'hi' ? '/hi' : ''}/wholesale-supply/${activeData.slug}` }
      ]
  };

  const faqItems = activeData.faqItems ?? [
      {
          question: currentLang === 'hi' ? `क्या आप ${activeData.city} में डिलीवरी करते हैं?` : `Do you deliver to ${activeData.city}?`,
          answer: currentLang === 'hi'
              ? `हाँ, हम ट्रांसपोर्ट पार्टनर्स (सड़क/रेल) के माध्यम से ${activeData.city} में माल भेजते हैं। सिलीगुड़ी से डिलीवरी में आमतौर पर 3-5 दिन लगते हैं।`
              : `Yes, we deliver to ${activeData.city} via our network of transport partners (Road/Rail). Delivery usually takes 3-5 days from Siliguri.`
      },
      {
          question: currentLang === 'hi' ? "न्यूनतम ऑर्डर मात्रा (MOQ) क्या है?" : "What is the minimum order quantity (MOQ)?",
          answer: currentLang === 'hi'
              ? "थोक ऑर्डर के लिए हमारा MOQ केवल 30 किलो (एक बोरी) है। आप गुणवत्ता जांचने के लिए मिक्स ग्रेड ऑर्डर कर सकते हैं।"
              : "Our MOQ for wholesale orders is just 30 kg (one sack). You can mix different grades in your first order to test quality."
      },
      {
          question: currentLang === 'hi' ? "क्या मुझे GST बिल मिल सकता है?" : "Can I get a GST bill?",
          answer: currentLang === 'hi'
              ? `बिल्कुल। हम एक पंजीकृत व्यवसाय हैं और ${activeData.city} में सभी अंतर-राज्य शिपमेंट के लिए पूरा GST बिल प्रदान करते हैं।`
              : `Absolutely. We are a registered business and provide full GST billing for all interstate shipments to ${activeData.city}.`
      }
  ];

  const faqPageSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
  };

  const schemas = [breadcrumbSchema, citySchema, faqPageSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8 flex flex-col items-start text-left">
              <Link href={currentLang === 'hi' ? "/hi/locations" : "/locations"} className="text-tea-600 hover:underline text-sm mb-4 block w-fit">
                  {currentLang === 'hi' ? "← सेवा क्षेत्रों पर वापस जाएं" : "← Back to Service Areas"}
              </Link>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-tea-900 mb-4 block">
                  {activeData.heading}
              </h1>
              <div className="h-1 w-20 bg-tea-500 rounded"></div>
          </div>

          <div className="prose prose-lg prose-tea max-w-none mb-12" dangerouslySetInnerHTML={{ __html: activeData.content }} />

          {/* Free Sample Banner */}
          <div className="bg-gradient-to-r from-tea-50 to-tea-100 border border-tea-200 rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
              <div className="text-4xl">🍵</div>
              <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-bold text-tea-900 mb-1">
                      {currentLang === 'hi' ? "मुफ्त सैंपल पाएं" : `Free Tea Sample — Before You Order to ${activeData.city}`}
                  </h3>
                  <p className="text-tea-700 text-sm">
                      {currentLang === 'hi'
                          ? "ऑर्डर देने से पहले हमारी चाय का स्वाद लें। हम नमूने मुफ्त में भेजते हैं।"
                          : "Test quality before committing to bulk. We courier samples of CTC, Assam & Darjeeling nationwide at no cost."}
                  </p>
              </div>
              <a
                  href={BUSINESS_DETAILS.sampleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tea-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-tea-700 transition text-sm whitespace-nowrap"
              >
                  {currentLang === 'hi' ? "सैंपल मंगाएं" : "Request Free Sample"}
              </a>
          </div>

          {/* Contact CTA */}
          <div className="bg-tea-50 border border-tea-100 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-tea-900 mb-4">
                  {currentLang === 'hi' ? `${activeData.city} में चाय की सप्लाई चाहिए?` : `Need Tea Supply in ${activeData.city}?`}
              </h2>
              <p className="text-gray-700 mb-6">
                  {currentLang === 'hi'
                      ? `हम नियमित रूप से ${activeData.city} में माल भेजते हैं। ताज़ा रेट और ट्रांसपोर्ट विवरण के लिए संपर्क करें।`
                      : `We dispatch regularly to ${activeData.city}. Contact us for current rates and transport details.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+917001958588" className="bg-tea-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-tea-700 transition-colors">
                      {currentLang === 'hi' ? "अभी कॉल करें" : "Call Now"}
                  </a>
                  <a
                      href={`https://wa.me/917001958588?text=Hello%2C%20I%20need%20wholesale%20tea%20rates%20for%20delivery%20in%20${activeData.city}`}
                      className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                  >
                      {currentLang === 'hi' ? "व्हाट्सएप करें" : "WhatsApp Us"}
                  </a>
              </div>
          </div>

          {/* Regional Hub Links */}
          <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-serif font-bold text-tea-900 mb-4">
                  {currentLang === 'hi' ? "क्षेत्रीय चाय वितरण केंद्र" : "Regional Tea Distribution Hubs"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                  {currentLang === 'hi'
                      ? "हमारा मजबूत लॉजिस्टिक्स नेटवर्क सिलीगुड़ी को प्रमुख केंद्रों से जोड़ता है। अन्य क्षेत्रों में हमारी आपूर्ति क्षमता देखें:"
                      : "We operate a robust logistics network connecting Siliguri to major centers. Explore our supply strengths in other regions:"}
              </p>
              <div className="flex flex-wrap gap-3">
                  {LOCATION_PAGES.filter(p => p.id !== activeData.id && p.lang === currentLang).slice(0, 6).map(city => (
                      <Link
                          key={city.id}
                          href={currentLang === 'hi' ? `/hi/wholesale-supply/${city.slug}` : `/wholesale-supply/${city.slug}`}
                          className="px-4 py-2 bg-white border border-tea-100 rounded-full text-tea-700 text-sm hover:bg-tea-50 hover:border-tea-200 transition-colors"
                      >
                          {currentLang === 'hi' ? `${city.city} में होलसेल चाय` : `Wholesale Tea in ${city.city}`}
                      </Link>
                  ))}
              </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12 mt-12 border-t border-gray-100 pt-10">
              <h3 className="text-2xl font-serif font-bold text-tea-900 mb-6">
                  {currentLang === 'hi' ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
              </h3>
              <div className="space-y-4">
                  {faqItems.map((faq, i) => (
                      <details key={i} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm group">
                          <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-start gap-3">
                              <span>{faq.question}</span>
                              <span className="text-tea-500 group-open:rotate-180 transition-transform shrink-0 mt-0.5">▼</span>
                          </summary>
                          <p className="text-gray-600 text-sm mt-3 leading-relaxed">{faq.answer}</p>
                      </details>
                  ))}
              </div>
          </div>
      </article>
    </>
  );
}
