"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent, trackWhatsAppClick } from "../lib/analytics";

/**
 * AnalyticsTracker
 * - Listens for global clicks across the site and fires GA4 custom events
 * - Tracks city landing page views when navigating to /wholesale-supply/*
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();

  // Track city / wholesale-supply landing page views
  useEffect(() => {
    if (!pathname) return;

    if (pathname.includes("/wholesale-supply/")) {
      const parts = pathname.split("/wholesale-supply/")[1]?.split("/")[0];
      const citySlug = parts ? decodeURIComponent(parts).replace(/\/$/, "") : "";
      if (citySlug) {
        trackEvent("city_page_view", {
          event_category: "engagement",
          event_label: citySlug,
          city: citySlug,
          page_path: pathname,
        });
      }
    }
  }, [pathname]);

  // Global click delegation for all required event triggers
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest("a") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const text = link.textContent?.trim() || "";

      // 1. WhatsApp click: wa.me
      if (href.includes("wa.me")) {
        const locationContext =
          link.getAttribute("aria-label") ||
          text ||
          (link.closest("header") ? "Header" : link.closest("footer") ? "Footer" : "Page Link");
        trackWhatsAppClick(locationContext, href);
        return;
      }

      // 2. WhatsApp Channel join clicks
      if (href.includes("whatsapp.com/channel")) {
        trackEvent("whatsapp_channel_join", {
          event_category: "engagement",
          event_label: text || href,
          link_url: href,
        });
        return;
      }

      // 3. Call button clicks: tel:...
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          event_category: "engagement",
          event_label: text || href,
          phone_number: href.replace("tel:", ""),
        });
        return;
      }

      // 4. "Request Sample" clicks: href contains /request-free-tea-samples
      if (href.includes("/request-free-tea-samples")) {
        // Find if this link is within a product card/container
        const productCard = link.closest("[data-product-name]") || link.closest(".group");
        const productNameHeading = productCard?.querySelector("h3, h2, h1")?.textContent?.trim();
        const productName =
          link.getAttribute("data-product-name") ||
          productNameHeading ||
          text ||
          "Free Samples";

        trackEvent("sample_request_click", {
          event_category: "engagement",
          event_label: productName,
          product_name: productName,
          source_url: window.location.pathname,
        });
        return;
      }

      // 5. "View Details" product clicks: links matching /product/
      if (href.includes("/product/")) {
        const slugMatch = href.match(/\/product\/([^\/?#]+)/);
        const productSlug = slugMatch ? slugMatch[1] : text;

        trackEvent("product_view_click", {
          event_category: "engagement",
          event_label: productSlug,
          product_slug: productSlug,
          link_text: text,
        });
        return;
      }

      // 6. Blog article clicks: links matching /blog/
      if (href.includes("/blog/") && href !== "/blog" && href !== "/blog/") {
        const slugMatch = href.match(/\/blog\/([^\/?#]+)/);
        const blogSlug = slugMatch ? slugMatch[1] : text;

        trackEvent("blog_click", {
          event_category: "engagement",
          event_label: blogSlug || text,
          blog_slug: blogSlug,
          link_text: text,
        });
        return;
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}
