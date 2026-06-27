import React from 'react';
import Contact from '../../components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Wholesale Tea Enquiries | Manish Tea Traders",
  description: "Contact Manish Tea Traders for bulk tea orders. Phone: +91 70019 58588. Visit us in Siliguri, West Bengal.",
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
