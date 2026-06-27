"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, CONTACT_INFO } from "../constants";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: any) => {
    e.preventDefault();
    setIsOpen(false);

    const targetPath = item.href.includes('#') ? item.href.split('#')[0] : item.href;
    const hash = item.href.includes('#') ? item.href.split('#')[1] : null;

    // Map 'home' to '/'
    const finalPath = targetPath === 'home' ? '/' : `/${targetPath}`;

    if (pathname === finalPath && hash) {
      // Scrol on same page
      scrollToHash(hash);
    } else if (pathname !== finalPath) {
      // Navigate to new page
      router.push(finalPath);
      if (hash) {
        setTimeout(() => scrollToHash(hash), 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  const scrollToHash = (hash: string) => {
    const element = document.getElementById(hash);
    const navHeight = 80;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-md shadow-sm"
        }`}
    >
      {/* Trust Bar */}
      <div className="bg-tea-900 text-tea-50 text-[10px] sm:text-xs font-medium py-1.5 px-4 text-center tracking-wide">
        <span className="opacity-90">GST: 19AHJPR0891G1ZX</span>
        <span className="mx-2 opacity-50">|</span>
        <span className="opacity-90">Tea Board of India (KOL/B-7410)</span>
        <span className="mx-2 opacity-50">|</span>
        <span className="opacity-90">Est. 2004</span>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" onClick={() => window.scrollTo(0, 0)}>
            <Logo className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" variant="dark" />
            <span className="text-xl font-bold font-serif text-tea-900 leading-tight">
              Manish Tea<br /><span className="text-tea-600">Traders</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors">Home</Link>
            <Link href="/about-us" className="text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors">About Us</Link>

            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors flex items-center gap-1">
                Products
              </button>
              <div
                className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 text-left overflow-hidden z-50 px-0"
                style={{ minWidth: 'max-content' }}
              >
                <Link href="/products/ctc-tea" className="block px-6 py-3 text-sm text-gray-700 hover:bg-tea-50 hover:text-tea-700 font-medium border-b border-gray-50 whitespace-nowrap">CTC Tea</Link>
                <Link href="/products/tea-dust" className="block px-6 py-3 text-sm text-gray-700 hover:bg-tea-50 hover:text-tea-700 font-medium border-b border-gray-50 whitespace-nowrap">Tea Dust</Link>
                <Link href="/products/orthodox-leaf" className="block px-6 py-3 text-sm text-gray-700 hover:bg-tea-50 hover:text-tea-700 font-medium border-b border-gray-50 whitespace-nowrap">Orthodox Leaf</Link>
                <Link href="/services/private-label-tea" className="block px-6 py-3 text-sm text-tea-700 bg-tea-50 hover:bg-tea-100 font-bold whitespace-nowrap">Private Label</Link>
              </div>
            </div>

            <Link href="/tea-grades" className="text-sm font-bold text-tea-600 hover:text-tea-700 transition-colors flex items-center gap-1">
              Tea Grades
              <span className="flex h-2 w-2 rounded-full bg-brand-gold"></span>
            </Link>

            <Link href="/locations" className="text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors">Locations</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors">Blog</Link>
            <Link href="/contact-us" className="text-sm font-medium text-gray-700 hover:text-tea-600 transition-colors">Contact</Link>
            
            <Link href="/request-free-tea-samples" className="text-sm font-bold text-tea-700 bg-tea-100 hover:bg-tea-200 px-4 py-2 rounded-full transition-colors">
              Free Samples
            </Link>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bg-tea-600 hover:bg-tea-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg border-t h-screen">
          <div className="px-4 pt-4 pb-20 space-y-2 flex flex-col">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50">Home</Link>
            <Link href="/about-us" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50">About Us</Link>

            <div className="pl-3 border-l-2 border-tea-100 my-2">
              <span className="block px-3 py-2 text-sm font-bold text-gray-400 uppercase tracking-wider">Products</span>
              <Link href="/products/ctc-tea" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-tea-600">CTC Tea</Link>
              <Link href="/products/tea-dust" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-tea-600">Tea Dust</Link>
              <Link href="/products/orthodox-leaf" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-tea-600">Orthodox Leaf</Link>
              <Link href="/services/private-label-tea" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-tea-600">Private Label</Link>
              <Link href="/tea-grades" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-brand-gold bg-brand-gold/5 rounded-md mt-1">Tea Grade Explorer</Link>
            </div>

            <Link href="/locations" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50">Locations</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50">Blog</Link>
            <Link href="/contact-us" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-tea-50">Contact</Link>

            <Link href="/request-free-tea-samples" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-lg text-lg font-bold text-tea-700 bg-tea-100 mt-2 text-center">
              Request Free Samples
            </Link>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="block w-full text-center mt-6 bg-tea-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              Call Us: {CONTACT_INFO.displayPhone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;