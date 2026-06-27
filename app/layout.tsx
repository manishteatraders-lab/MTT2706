import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import StickyMobileFooter from "../components/StickyMobileFooter";
import BackToTop from "../components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweather = Merriweather({ weight: ["300", "400", "700", "900"], subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://manishteatraders.in"),
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
      <body className={`${inter.variable} ${merriweather.variable} font-sans bg-tea-50 text-stone-800 antialiased`}>
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
