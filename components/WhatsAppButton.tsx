"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "../lib/analytics";

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/917001958588?text=Hello%2C%20I%20want%20to%20know%20the%20wholesale%20price%20of%20tea";

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("Floating Button")}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium px-0 group-hover:px-2">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;