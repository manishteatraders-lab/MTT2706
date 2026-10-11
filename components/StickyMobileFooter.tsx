"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageSquareText, Package } from "lucide-react";

const StickyMobileFooter: React.FC = () => {
  const pathname = usePathname();
  const isSamplesPage = pathname?.includes("/request-free-tea-samples");

  const handleSamplesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isSamplesPage) {
      e.preventDefault();
      const formElement = document.getElementById("sample-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] z-40 md:hidden flex p-2 gap-2"
      style={{
        paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))",
      }}
    >
      {/* Button 1: Get Today's Price List (Green) */}
      <a
        href="https://wa.me/917001958588?text=Hi%2C%20please%20send%20me%20today%27s%20tea%20price%20list."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Today's Price List on WhatsApp"
        className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-lg bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20bd5a] active:bg-[#1da851] transition-colors shadow-sm text-center leading-tight"
      >
        <MessageSquareText className="h-4 w-4 flex-shrink-0" />
        <span>Get Today&apos;s Price List</span>
      </a>

      {/* Button 2: Get Free Samples (Brand Tea Colour) */}
      <a
        href="/request-free-tea-samples/#sample-form"
        onClick={handleSamplesClick}
        aria-label="Get Free Samples"
        className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-lg bg-tea-700 text-white font-bold text-xs sm:text-sm hover:bg-tea-800 active:bg-tea-900 transition-colors shadow-sm text-center leading-tight"
      >
        <Package className="h-4 w-4 flex-shrink-0" />
        <span>Get Free Samples</span>
      </a>
    </nav>
  );
};

export default StickyMobileFooter;