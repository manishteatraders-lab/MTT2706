"use client";

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const StickyMobileFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden flex">
      <a 
        href={`tel:${CONTACT_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-tea-800 font-bold text-sm hover:bg-gray-50 active:bg-gray-100 transition-colors"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <div className="w-px bg-gray-300 my-2"></div>
      <a 
        href={`https://wa.me/${CONTACT_INFO.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] active:bg-[#1da851] transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
};

export default StickyMobileFooter;