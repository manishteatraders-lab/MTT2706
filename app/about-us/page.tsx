import React from "react";
import About from "../../components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Manish Tea Traders | Tea Wholesaler Since 2004 | Siliguri",
  description: "FSSAI licensed & Tea Board registered wholesale tea supplier in Siliguri since 2004. Direct sourcing from Assam & Darjeeling gardens. 200+ buyers across India.",
  alternates: {
    canonical: "https://manishteatraders.in/about-us/"
  },
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1200",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "WholesaleStore",
        "name": "Manish Tea Traders",
        "foundingDate": "2004",
        "founder": {
          "@type": "Person",
          "name": "Jaleshwar Ray"
        },
        "description": "Premium wholesale tea supplier based in Siliguri, West Bengal.",
        "areaServed": ["West Bengal", "Bihar", "Uttar Pradesh", "Jharkhand"],
        "knowsAbout": ["Tea Tasting", "Tea Blending", "Wholesale Distribution"]
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
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://manishteatraders.in/about-us/"
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-20">
        <About />
      </div>
    </>
  );
}
