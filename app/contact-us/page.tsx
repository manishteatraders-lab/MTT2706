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

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact selectedProduct="" />
    </div>
  );
}
