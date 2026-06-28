import React from 'react';
import Contact from '../../components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Manish Tea Traders | Bulk Tea Wholesale Enquiry | Siliguri, West Bengal",
  description: "Contact for bulk tea pricing, free samples & wholesale enquiries. GST: 19AHJPR0891G1ZX | Tea Board of India Reg: KOL/B-7410. Address: Ganga Nagar, Siliguri 734005. Mon–Sat 10am–8pm.",
  alternates: {
    canonical: "https://manishteatraders.in/contact-us/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you accept trial orders for wholesale tea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We accept trial orders so you can verify quality before committing to large volumes. Contact us on WhatsApp with your grade requirement and we will advise the best starting quantity for your market."
      }
    },
    {
      "@type": "Question",
      "name": "Do you supply tea outside West Bengal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We supply bulk tea pan-India via road transport to Delhi, Mumbai, Kolkata, Patna, Hyderabad, Bangalore and 15+ other cities. Delivery takes 2–8 days depending on location."
      }
    },
    {
      "@type": "Question",
      "name": "Are free tea samples available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We dispatch free samples of CTC, Assam, Darjeeling and Tea Dust grades to serious wholesale buyers anywhere in India within 48 hours of request. No payment required."
      }
    },
    {
      "@type": "Question",
      "name": "Is Manish Tea Traders FSSAI certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We are FSSAI licensed and registered with the Tea Board of India (KOL/B-7410). GST No: 19AHJPR0891G1ZX. Full compliance documentation available on request."
      }
    },
    {
      "@type": "Question",
      "name": "What tea grades do you supply in bulk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We supply CTC grades (BP, BOPSM, OF, PD, Dust), Orthodox grades (OP, FOP, GFOP, TGFOP), Darjeeling First & Second Flush, Assam whole leaf, Nepal High Grown, and custom blends."
      }
    }
  ]
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Contact selectedProduct="" />
    </div>
  );
}
