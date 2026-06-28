import React, { Suspense } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Newsletter from "../components/Newsletter";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Reviews from "../components/Reviews";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bulk CTC & Leaf Tea Supplier | Manish Tea Traders",
  description: "Direct B2B tea supplier from Siliguri. CTC, Assam, Darjeeling & private label teas in bulk. Tea Board of India Reg: KOL/B-7410. Trial orders accepted. Free samples in 48 hrs.",
  alternates: {
    canonical: "https://manishteatraders.in/"
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "WholesaleStore"],
    "name": "Manish Tea Traders",
    "description": "Wholesale CTC, Assam and Darjeeling tea supplier in Siliguri, West Bengal since 2004.",
    "foundingDate": "2004",
    "url": "https://manishteatraders.in",
    "telephone": "+917001958588",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ganga Nagar, Mahananda Para, Ward No. 5",
      "addressLocality": "Siliguri",
      "addressRegion": "West Bengal",
      "postalCode": "734005",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.70445006858671,
      "longitude": 88.41120717507069
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47",
      "bestRating": "5"
    },
    "priceRange": "₹₹",
    "areaServed": "India",
    "sameAs": [
      "https://www.indiamart.com/manishteatraders",
      "https://www.justdial.com/Siliguri/Manish-Tea-Traders-Mahananda-Para/9999PX353-X353-241126070451-T2Z7_BZDET"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you accept trial orders for wholesale tea?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We accept trial orders so you can verify quality before scaling up. Contact us on WhatsApp and we will advise the right starting quantity for your market and grade requirement."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free tea samples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Free samples of CTC, Assam, Darjeeling and Tea Dust are dispatched within 48 hours to serious wholesale buyers anywhere in India. No payment required."
        }
      },
      {
        "@type": "Question",
        "name": "Is Manish Tea Traders FSSAI certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We are FSSAI licensed and registered with the Tea Board of India (KOL/B-7410). GST No: 19AHJPR0891G1ZX."
        }
      }
    ]
  }
];

// Loading Fallback
const LoadingFallback = () => (
  <div className="py-20 flex justify-center items-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tea-600"></div>
  </div>
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About isHomePage={true} />
      <Products />
      <Suspense fallback={<LoadingFallback />}>
        <Gallery />
      </Suspense>

      <div id="contact">
        <Contact selectedProduct="" isHomePage={true} />
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <Reviews />
        <FAQ />
      </Suspense>
      <Newsletter />
    </>
  );
}
