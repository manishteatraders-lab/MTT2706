import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import StickyMobileFooter from "../components/StickyMobileFooter";
import BackToTop from "../components/BackToTop";
import AnalyticsTracker from "../components/AnalyticsTracker";
import { GA_MEASUREMENT_ID, CLARITY_PROJECT_ID } from "../lib/analytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweather = Merriweather({ weight: ["300", "400", "700", "900"], subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.manishteatraders.in"),
  title: "Manish Tea Traders | Wholesale Tea Suppliers in India",
  description: "Premium wholesale tea suppliers in Siliguri, India. Sourcing CTC, Orthodox, and Green tea directly from Assam and Darjeeling estates.",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero.webp"
          {...{ fetchPriority: "high" }}
        />

        {/* Google Analytics 4 (GA4) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-sans bg-tea-50 text-stone-800 antialiased`}>
        <AnalyticsTracker />
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileFooter />
        <BackToTop />
      </body>
    </html>
  );
}
