import React from "react";
import { ZoomIn } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-tea-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tea-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-tea-600 font-bold tracking-wider uppercase text-sm">Visual Tour</span>
          <h2 className="text-4xl font-serif font-bold text-tea-900 mt-2">
            Experience Our Quality
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse into our daily operations, premium stocks, and the tea gardens we source from.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

          {/* Item 1: Large Feature (Top Left) - 2x2 */}
          <div className="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden shadow-md">
            <OptimizedImage
              src="/images/products/finetea.webp"
              alt="Lush Tea Gardens - Manish Tea Traders Siliguri"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="bg-tea-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Sourcing</span>
                <h3 className="text-white text-3xl font-serif font-bold mb-1">Finest Tea Gardens</h3>
                <p className="text-gray-200 text-sm">Directly sourced from Assam & Dooars estates for maximum freshness.</p>
              </div>
            </div>
          </div>

          {/* Item 2: Tall (Top Right) - 1x2 */}
          <div className="md:col-span-1 md:row-span-2 group relative rounded-2xl overflow-hidden shadow-md">
            <OptimizedImage
              src="/images/products/readystock.webp"
              alt="Bulk Warehouse Stock - Manish Tea Traders Siliguri"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl font-bold mb-1">Ready Stock</h3>
                <p className="text-gray-200 text-xs">Bulk quantities available anytime.</p>
              </div>
            </div>
          </div>

          {/* Item 3: Small (Bottom Right 1) */}
          <div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden shadow-md">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop"
              alt="Tea Tasting Process - Manish Tea Traders Siliguri"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/95 backdrop-blur text-tea-900 text-xs font-bold px-3 py-1 rounded shadow-sm">
                Premium Quality
              </span>
            </div>
          </div>

          {/* Item 4: Small (Bottom Right 2) */}
          <div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden shadow-md">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop"
              alt="CTC Granules Texture - Manish Tea Traders Siliguri"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/95 backdrop-blur text-tea-900 text-xs font-bold px-3 py-1 rounded shadow-sm">
                Perfect Grain
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;