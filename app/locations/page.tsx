import React from 'react';
import Link from 'next/link';
import { LOCATION_PAGES } from '../../data/locationPages';
import { MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tea Wholesale Supply Network | Major Cities in India",
  description: "We supply wholesale tea to major cities across West Bengal, Bihar, UP, Jharkhand and beyond. Check our network coverage.",
  alternates: {
    canonical: "https://manishteatraders.in/locations/"
  },
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9"
      }
    ]
  }
};

export default function LocationsIndex() {
  return (
    <>
      <div className="bg-tea-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-tea-900 mb-6">Our Supply Network</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manish Tea Traders connects the tea gardens of Siliguri to retailers across India. We have established logistics routes for the following regions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATION_PAGES.map((loc) => (
            <Link
              key={loc.id}
              href={`/wholesale-supply/${loc.slug}`}
              className="block group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-tea-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-tea-100 p-3 rounded-full group-hover:bg-tea-600 transition-colors">
                  <MapPin className="h-6 w-6 text-tea-700 group-hover:text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-tea-700">{loc.city}</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {loc.metaDescription}
              </p>
              <span className="text-tea-600 font-medium text-sm group-hover:translate-x-1 inline-block transition-transform">
                View Supply Details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
