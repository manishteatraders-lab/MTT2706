import ReactGA from "react-ga4";

// Replace with your GA4 Measurement ID
export const GA_MEASUREMENT_ID = "G-51CXM4KKZ2";

// Replace with your Webhook URL (e.g., Formspree, Make.com, etc.)
export const TRACKING_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyO3wOtQcSrk6_5joKqffSQTtNOJg5PicLTlikAkKXbJgvl6bubvA2Raph2O_ubmdXk/exec";

export const initGA = () => {
    if (GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes("XXX")) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
    }
};

export const trackWhatsAppClick = async (location: string) => {
    const timestamp = new Date().toLocaleString();
    const pagePath = window.location.pathname;

    // 1. Track in GA4
    if (GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes("XXX")) {
        ReactGA.event("whatsapp_click", {
            click_location: location,
            page_path: pagePath,
            timestamp: timestamp
        });
    }

    // 2. Silent Webhook Notification (Google Sheets)
    if (TRACKING_WEBHOOK_URL) {
        try {
            // Using 'no-cors' to avoid CORS preflight (OPTIONS) issues with Google Apps Script.
            // Sending the JSON as a string in the body. Since we don't set Content-Type to JSON, 
            // it behaves as a 'simple request' and populates e.postData.contents in the script.
            fetch(TRACKING_WEBHOOK_URL, {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify({
                    event: "WhatsApp Click",
                    location: location,
                    page: pagePath,
                    timestamp: timestamp
                }),
                keepalive: true
            });
        } catch (error) {
            console.error("Silent tracking failed", error);
        }
    }
};
