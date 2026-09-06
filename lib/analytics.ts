// Centralized GA4 & Event Tracking for manishteatraders.in

export const GA_MEASUREMENT_ID = "G-FXJ2QZ3N1F";
export const CLARITY_PROJECT_ID = "ydxfpniuta";

// Silent Webhook Notification (Google Sheets backup)
export const TRACKING_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbyO3wOtQcSrk6_5joKqffSQTtNOJg5PicLTlikAkKXbJgvl6bubvA2Raph2O_ubmdXk/exec";

// Type declaration for gtag and clarity
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Trigger GA4 event safely via window.gtag
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params || {});
  }
};

/**
 * Dedicated helper for WhatsApp Clicks
 */
export const trackWhatsAppClick = (location: string, href?: string) => {
  const pagePath = typeof window !== "undefined" ? window.location.pathname : "";
  const timestamp = new Date().toLocaleString();

  // GA4 event
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: location || href || "WhatsApp Link",
    click_location: location,
    page_path: pagePath,
  });

  // Silent Webhook Notification (Google Sheets)
  if (TRACKING_WEBHOOK_URL) {
    try {
      fetch(TRACKING_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          event: "WhatsApp Click",
          location: location,
          page: pagePath,
          timestamp: timestamp,
        }),
        keepalive: true,
      });
    } catch {
      // ignore
    }
  }
};

