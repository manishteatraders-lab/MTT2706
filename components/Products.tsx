"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS } from "../data/products";
import { Info } from "lucide-react";
import ProductModal from "./ProductModal";
import Link from "next/link";
import { BUSINESS_DETAILS } from "../constants";
import OptimizedImage from "./OptimizedImage";

const CATEGORY_SLUGS: Record<string, string> = {
  'CTC': 'ctc-tea',
  'Dust': 'tea-dust',
  'Orthodox': 'orthodox-leaf',
  'Blend': 'ctc-tea',
  'Packaging': 'private-label-tea',
  'Tea Bags': 'private-label-tea'
};

const Products: React.FC = () => {
  const [selectedModalProduct, setSelectedModalProduct] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PRODUCTS.map(p => p.category)));
    return ["All", ...cats];
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const getProductLink = (category: string) => {
    const slug = CATEGORY_SLUGS[category] || 'ctc-tea';
    if (slug === 'private-label-tea') return `/services/${slug}`;
    return `/products/${slug}`;
  };

  return (
    <section id="products" className="py-20 bg-tea-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold text-tea-900 sm:text-4xl">
            Our Premium Tea Collection
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From strong CTC for tea stalls to delicate Orthodox leaves for premium cafes.
            Available in bulk and retail packs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                ? "bg-tea-600 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-tea-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col animate-in fade-in zoom-in duration-300"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <OptimizedImage
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                {product.badge && (
                  <div className="absolute top-4 right-4 bg-tea-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md z-10">
                    {product.badge}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded uppercase tracking-wider border border-white/30">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-tea-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-4 border-t border-gray-100 mt-auto space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-medium uppercase">Wholesale Rate</span>
                    <span className="font-bold text-tea-800">{product.priceRange}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={`/product/${product.slug}/`}
                      className="w-full text-center bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 rounded-lg transition-all border border-gray-200 flex items-center justify-center gap-2 text-sm"
                    >
                      <Info className="h-4 w-4" /> View Details
                    </Link>
                    <a
                      href={BUSINESS_DETAILS.sampleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-tea-600 hover:bg-tea-700 text-white font-medium py-2 rounded-lg transition-all border border-transparent flex items-center justify-center gap-2 text-sm"
                    >
                      Request Sample
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}

        {/* Custom Blend CTA */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-tea-100 text-center">
          <h3 className="text-2xl font-bold text-tea-900 mb-2">Need a Custom Blend?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer blend customization based on liquor strength, colour, aroma, and your budget range.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-tea-800 hover:bg-tea-900 shadow-md transition-all hover:-translate-y-0.5"
          >
            Contact for Custom Orders
          </Link>
        </div>

        {/* Internal Linking to Blog */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Want to know more about tea grades? <Link href="/blog" className="text-tea-600 hover:underline">Read our Wholesale Tea Guide</Link>
          </p>
        </div>
      </div>

      {/* Product Modal - Kept for legacy compatibility if needed or cleaned up if unused. 
          Actually let's remove it from render since we link to pages now. 
      */}
      {selectedModalProduct && (
        <ProductModal
          productId={selectedModalProduct}
          onClose={() => setSelectedModalProduct(null)}
          onRequestSample={(name) => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}
    </section>
  );
};

export default Products;