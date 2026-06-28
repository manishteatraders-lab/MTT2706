"use client";

import React from "react";
import { CONTACT_INFO, BUSINESS_DETAILS } from "../constants";
import Logo from "./Logo";
import Link from "next/link";
import { trackWhatsAppClick } from "../lib/analytics";


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tea-900 text-tea-100 pt-16 pb-8 border-t border-tea-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 border-b border-tea-800 pb-12">
          {/* Brand */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-10" variant="light" />
              <span className="text-xl font-bold font-serif text-white leading-tight">
                Manish Tea<br />Traders
              </span>
            </div>
            <p className="text-sm text-tea-200 leading-relaxed">
              Your trusted partner for wholesale tea in Siliguri. Providing quality CTC and Orthodox teas since {BUSINESS_DETAILS.established}.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[10px] bg-tea-800 px-2 py-1 rounded text-tea-300 w-fit">GST: 19AHJPR0891G1ZX</span>
              <span className="text-[10px] bg-tea-800 px-2 py-1 rounded text-tea-300 w-fit">Tea Board of India (KOL/B-7410)</span>
            </div>
            <div className="pt-4">
              <a href="/request-free-tea-samples" className="inline-block bg-tea-500 hover:bg-tea-400 text-tea-900 font-bold px-4 py-2 rounded-full text-sm transition-colors">
                🍵 Request Free Samples
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 underline decoration-tea-500 decoration-2 underline-offset-8">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products/ctc-tea" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Tea Blog</Link></li>
              <li><Link href="/tea-blend-calculator" className="hover:text-white transition-colors">Tea Blend Calculator</Link></li>
              <li><Link href="/tea-grades" className="hover:text-white transition-colors">Tea Grades Guide</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li className="pt-2 border-t border-tea-800/50 mt-2">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-xs">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 underline decoration-tea-500 decoration-2 underline-offset-8">Tea Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/ctc-tea" className="hover:text-white transition-colors">CTC Tea</Link></li>
              <li><Link href="/products/tea-dust" className="hover:text-white transition-colors">Tea Dust</Link></li>
              <li><Link href="/products/orthodox-leaf" className="hover:text-white transition-colors">Darjeeling Tea</Link></li>
              <li><Link href="/services/private-label-tea" className="hover:text-white transition-colors">Private Label</Link></li>
            </ul>
          </div>

          {/* Supply Network */}
          <div>
            <h3 className="text-white font-semibold mb-4 underline decoration-tea-500 decoration-2 underline-offset-8">Supply Network</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/wholesale-supply/siliguri-tea-supplier" className="hover:text-white transition-colors">Siliguri (HQ)</Link></li>
              <li><Link href="/wholesale-supply/kolkata-tea-supplier" className="hover:text-white transition-colors">Kolkata</Link></li>
              <li><Link href="/wholesale-supply/tea-wholesaler-patna-bihar" className="hover:text-white transition-colors">Patna / Bihar</Link></li>
              <li><Link href="/wholesale-supply/tea-wholesaler-jaipur-rajasthan" className="hover:text-white transition-colors">Jaipur</Link></li>
              <li><Link href="/wholesale-tea-suppliers-india" className="hover:text-white transition-colors">Wholesale India</Link></li>
              <li><Link href="/locations" className="text-tea-400 hover:text-white transition-colors font-semibold mt-2 inline-block">View All Cities →</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 underline decoration-tea-500 decoration-2 underline-offset-8">Contact Us</h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-tea-400 mt-1">📍</span>
                <span>{CONTACT_INFO.address}<br />{CONTACT_INFO.city}, {CONTACT_INFO.state}, India, {CONTACT_INFO.zip}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-tea-400">📞</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white">{CONTACT_INFO.displayPhone}</a>
              </div>
              <div className="pt-2">
                <a
                  href={CONTACT_INFO.whatsappChannel}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackWhatsAppClick("Footer")}
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-lg text-xs font-bold hover:bg-green-600 transition-colors"
                >
                  Join Official WhatsApp Channel →
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-tea-400">
          <p>© {currentYear} Manish Tea Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;