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
  title: "Bulk CTC & Assam Tea Wholesaler Siliguri | Manish Tea Traders — Since 2004",
  description: "Direct B2B tea supplier from Siliguri since 2004. CTC, Assam, Darjeeling & private label in bulk. Tea Board of India Reg: KOL/B-7410. FSSAI certified. Trial orders accepted. Free samples in 48 hrs.",
  alternates: {
    canonical: "https://manishteatraders.in/"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": "https://manishteatraders.in/#organization",
      "@type": ["LocalBusiness", "WholesaleStore"],
      "name": "Manish Tea Traders",
      "description": "Wholesale CTC, Assam and Darjeeling tea supplier in Siliguri since 2004.",
      "image": "https://manishteatraders.in/logo.png",
      "priceRange": "₹₹",
      "founder": {
        "@type": "Person",
        "name": "Jaleshwar Ray"
      },
      "foundingDate": "2004",
      "identifier": ["GST: 19AHJPR0891G1ZX", "Tea Board: KOL/B-7410"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ganga Nagar, Mahananda Para",
        "addressLocality": "Siliguri",
        "addressRegion": "West Bengal",
        "postalCode": "734005",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.7271,
        "longitude": 88.3953
      },
      "areaServed": "India",
      "telephone": "+917001958588",
      "url": "https://manishteatraders.in",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Wholesale Tea Products",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bulk CTC Tea" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Assam Orthodox Tea" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Private Label Tea" } }
        ]
      },
      "sameAs": [
        "https://www.indiamart.com/manishteatraders",
        "https://www.justdial.com/Siliguri/Manish-Tea-Traders-Mahananda-Para/9999PX353-X353-241126070451-T2Z7_BZDET"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://manishteatraders.in"
        }
      ]
    }
  ]
};

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
      <About />
      <Products />
      <Suspense fallback={<LoadingFallback />}>
        <Gallery />
      </Suspense>

      <div id="contact">
        <Contact selectedProduct="" />
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <Reviews />
        <FAQ />
      </Suspense>
      <Newsletter />
    </>
  );
}
