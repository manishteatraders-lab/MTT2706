"use client";

import React from "react";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { CONTACT_INFO, BUSINESS_DETAILS } from "../constants";
import { trackWhatsAppClick } from "../lib/analytics";
import OptimizedImage from "./OptimizedImage";

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[100dvh] md:h-auto md:min-h-screen flex flex-col pt-16 pb-8 md:pt-32 overflow-hidden bg-[#1a240f] md:bg-transparent">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/hero.webp"
          alt="Premium Tea Plantation - Manish Tea Traders"
          className="w-full h-full object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/40 via-black/60 to-[#1a240f] md:bg-black/60 md:bg-gradient-to-t md:from-black/90 md:via-black/50 md:to-transparent"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center md:items-center">

        {/* ── Desktop Content (≥ 768px) ── */}
        <div className="hidden md:block w-full">
          <span className="inline-block py-1 px-3 rounded-full bg-tea-500/90 text-white text-sm font-semibold mb-6 backdrop-blur-sm shadow-lg border border-tea-400/30">
            ★ Top Rated Wholesale Supplier
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight drop-shadow-lg">
            Siliguri's Trusted <br /> Tea Wholesaler
            <span className="text-tea-300 block text-2xl lg:text-3xl mt-4 font-sans tracking-wide">Darjeeling, Assam CTC &amp; Nepal Tea — Direct from Source</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-100 mb-2 leading-relaxed font-light">
            Sourced directly from Siliguri's wholesale tea market — we supply CTC, Darjeeling, Assam &amp; Nepal tea in bulk to retailers, distributors, hotels, and private label brands across India.
          </p>
          <p className="max-w-3xl mx-auto text-xl text-gray-200 mb-6 leading-relaxed font-medium">
            Get same-day price lists, free samples, and flexible MOQ.
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-8 text-tea-100/80 text-sm font-medium tracking-wide uppercase">
            {["CTC", "Darjeeling", "Assam", "Nepal", "Tea Powder", "Private Label", "Bulk Supply"].map((kw, i) => (
              <React.Fragment key={kw}>
                <span>{kw}</span>
                {i < 6 && <span className="text-tea-400/50">•</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center bg-white/10 backdrop-blur-md py-4 px-6 rounded-2xl border border-white/10 inline-flex mx-auto mb-10 shadow-2xl">
            <a href={BUSINESS_DETAILS.justdialProfile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium text-base hover:text-blue-200 transition-colors group">
              <CheckCircle className="h-5 w-5 text-blue-400 fill-blue-400/20 group-hover:scale-110 transition-transform" />
              <span className="drop-shadow-sm">Justdial Verified</span>
            </a>
            <div className="w-px h-6 bg-white/30"></div>
            <a href={BUSINESS_DETAILS.indiamartProfile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-medium text-base hover:text-green-200 transition-colors group">
              <CheckCircle className="h-5 w-5 text-green-400 fill-green-400/20 group-hover:scale-110 transition-transform" />
              <span className="drop-shadow-sm">IndiaMART Verified</span>
            </a>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2 text-white font-medium text-base">
              <CheckCircle className="h-5 w-5 text-yellow-400 fill-yellow-400/20" />
              <span className="drop-shadow-sm">FSSAI Registered</span>
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="flex flex-row justify-center gap-4 flex-wrap items-center">
            <a href="#contact" onClick={handleScrollToContact} className="bg-tea-600 hover:bg-tea-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Get Today's Price List <ArrowRight className="h-5 w-5" />
            </a>
            <a href={`https://wa.me/${CONTACT_INFO.phone}`} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("Hero Section")} className="bg-white hover:bg-gray-100 text-tea-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg">
              WhatsApp Us Directly <MessageCircle className="h-5 w-5 text-green-600" />
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <a href={BUSINESS_DETAILS.sampleFormUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-tea-100 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm backdrop-blur-sm tracking-wide">
              <span>🍵</span> Request Free Sample
            </a>
          </div>
        </div>

        {/* ── Mobile Redesign (< 768px) ── */}
        <div className="md:hidden flex flex-col w-full max-w-sm mx-auto px-2 relative z-10 h-full justify-center mt-8">
          {/* Top Badge */}
          <div className="self-center mb-6">
            <span className="bg-[#588157]/80 backdrop-blur-sm text-white border border-white/20 text-[11px] font-bold py-1.5 px-5 rounded-full inline-flex items-center shadow-lg tracking-wide">
              ★ Top Rated Wholesale Supplier
            </span>
          </div>

          {/* Heading Structure - Match Old Layout */}
          <div className="mb-4 text-center mt-2">
            <h1 className="text-white text-[32px] font-serif font-bold leading-[1.1] mb-2 drop-shadow-lg">
              Premium Darjeeling Tea & <br /> Assam CTC Tea
            </h1>
          </div>

          {/* Description */}
          <p className="text-tea-200 text-[14px] leading-[1.6] mb-6 px-1 text-center drop-shadow-md font-medium">
            We provide high-quality Premium Darjeeling Tea & Assam CTC Tea sourced directly from the best estates in West Bengal. Our tea is perfect for retailers, distributors, hotels, cafés, and bulk buyers looking for authentic taste and competitive wholesale rates.
          </p>

          {/* Keyword Pills - simplified to match old layout text links */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8 text-tea-200 text-[13px] font-medium tracking-wide">
            <span>CTC</span> <span>•</span>
            <span>ASSAM</span> <span>•</span>
            <span>NEPAL</span> <span>•</span>
            <span>LOOSE TEA</span>
          </div>

          {/* Buttons - Stacked Full Width like Old Design */}
          <div className="flex flex-col gap-3 mb-5 w-full">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="bg-[#789b37] hover:bg-[#688a2e] text-white py-4 rounded-lg font-bold text-[15px] flex items-center justify-center gap-2 shadow-lg transition-colors w-full"
            >
              Get Today's Price List <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("Hero Section")}
              className="bg-white hover:bg-gray-100 text-tea-900 py-4 rounded-lg font-bold text-[15px] flex items-center justify-center gap-2 shadow-lg transition-colors w-full"
            >
              WhatsApp Us Directly <MessageCircle className="h-5 w-5 text-green-600" />
            </a>
          </div>

          <div className="flex justify-center mb-6">
            <a href={BUSINESS_DETAILS.sampleFormUrl} target="_blank" rel="noopener noreferrer" className="bg-[#789b37]/90 text-white hover:bg-[#789b37] border border-white/20 px-6 py-2.5 rounded-full text-[13px] font-bold shadow-lg flex items-center gap-2 transition-colors">
              <span className="text-xl leading-none">📋</span> Request Tea Samples
            </a>
          </div>

          {/* Trust Bar - Match Old Design */}
          <div className="bg-[#11130d]/90 rounded-xl py-4 flex flex-col items-center justify-center border border-white/5 shadow-2xl mt-2 mb-4 w-full px-4 text-[12px] font-bold text-gray-300 gap-y-3">
            <div className="flex items-center justify-center gap-6 w-full">
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-[#3574d3]" /> Justdial Verified</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-[#00a650]" /> IndiaMART Verified</span>
            </div>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-yellow-500" /> FSSAI Registered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;