import React from 'react';
import { LOCATION_PAGES } from "../data/locationPages";
import { MapPin, ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from './SEO';

interface LocationsProps {
  view: 'list' | 'detail';
  locationSlug?: string;
  onLocationClick: (slug: string) => void;
  onBack: () => void;
}

const Locations: React.FC<LocationsProps> = ({ view, locationSlug, onLocationClick, onBack }) => {
  if (view === 'detail' && locationSlug) {
    const page = LOCATION_PAGES.find(p => p.slug === locationSlug);
    if (!page) return <div>Location not found</div>;

    return (
      <div className="bg-white min-h-screen pt-24 pb-16">
        <SEO
          title={page.title}
          description={page.metaDescription}
          schema={{
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Wholesale Tea Supply",
            "areaServed": {
              "@type": "City",
              "name": page.city
            },
            "provider": {
              "@type": "WholesaleStore",
              "name": "Manish Tea Traders"
            }
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={onBack} className="flex items-center text-tea-600 mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" /> View All Locations
          </button>

          <div className="bg-tea-50 rounded-2xl p-8 md:p-12 border border-tea-100 mb-12">
            <div className="inline-flex items-center gap-2 bg-tea-200 text-tea-900 px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <MapPin className="h-4 w-4" /> Service Area: {page.city}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-tea-900 mb-6">{page.heading}</h1>
            <div className="prose prose-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: page.content }}></div>

            <div className="mt-8 pt-8 border-t border-tea-200">
              <h3 className="font-bold text-xl mb-4">Ready to Order in {page.city}?</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-5 w-5 text-green-600" /> Fast Delivery to {page.city}</li>
                <li className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-5 w-5 text-green-600" /> Wholesale Rates Guaranteed</li>
              </ul>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block bg-tea-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-tea-800 transition shadow-lg">
                Get Price List for {page.city}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <SEO
        title="Wholesale Tea Suppliers Across India | Service Areas | Manish Tea Traders"
        description="We supply fresh CTC and leaf tea to Kolkata, Bihar, Jharkhand, Mumbai, Delhi and major cities across India. Check our service network."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-tea-900 mb-4">Areas We Serve</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide fast, reliable tea delivery to major cities and states across India. Click on your city to learn more.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {LOCATION_PAGES.map((loc) => (
            <div key={loc.id} onClick={() => onLocationClick(loc.slug)} className="group cursor-pointer bg-tea-50 hover:bg-tea-100 p-6 rounded-xl border border-tea-100 transition-all text-center flex flex-col items-center">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-tea-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{loc.city}</h3>
              <p className="text-xs text-tea-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">View Supplier Info</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Don't see your city?</h3>
          <p className="text-gray-600 mb-4">We ship PAN India via reliable transport partners.</p>
          <a href="#contact" className="text-tea-700 font-bold hover:underline">Contact us for shipping rates →</a>
        </div>
      </div>
    </div>
  );
};

export default Locations;