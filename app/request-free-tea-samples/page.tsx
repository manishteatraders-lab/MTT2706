import React from 'react';
import {
    ClipboardList, CheckCircle, Truck, HelpCircle,
    MapPin, Users, Award, Package, Leaf, Globe,
    ShieldCheck, DollarSign, Box
} from 'lucide-react';
import { CONTACT_INFO, BUSINESS_DETAILS } from '../../constants';
import Reviews from '../../components/Reviews';
import OptimizedImage from '../../components/OptimizedImage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Request Free Tea Samples | Wholesale Tea Supplier Siliguri | Manish Tea Traders",
  description: "Experience premium Assam & Darjeeling tea quality before bulk ordering. Trusted by tea traders. Request free samples from Siliguri's leading tea wholesaler.",
  alternates: {
    canonical: "https://manishteatraders.in/request-free-tea-samples/"
  }
};

export default function RequestSamples() {
  return (
      <main className="bg-white">
          {/* 1. Hero Section */}
          <section className="bg-tea-900 text-white py-20 lg:py-28 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="absolute inset-0 z-0 opacity-40">
                  <OptimizedImage 
                      src="https://images.unsplash.com/photo-1563822249509-cab272d568c8?q=80&w=1600" 
                      alt="Tea Leaves - Manish Tea Traders Siliguri"
                      className="w-full h-full object-cover"
                      priority={true}
                  />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                  <div className="flex justify-center gap-4 mb-8 text-sm font-semibold tracking-wider text-yellow-300">
                      <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Free Samples</span>
                      <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> No Minimum Order</span>
                      <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Export Quality</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                      Request Free Tea Samples from<br />
                      <span className="text-yellow-400">Siliguri&apos;s Leading Tea Wholesaler</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                      Experience premium Assam and Darjeeling tea quality before bulk ordering.
                      Trusted by tea traders, retailers, and private label brands across India.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                          href={BUSINESS_DETAILS.sampleFormUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-tea-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                      >
                          <ClipboardList className="w-6 h-6" />
                          Request Free Samples
                      </a>
                  </div>

                  <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-300 text-sm">
                      <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-400" />
                          <span>20+ Years in Business</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-yellow-400" />
                          <span>500+ Satisfied Wholesalers</span>
                      </div>
                  </div>
              </div>
          </section>

          {/* 2. Introduction Section */}
          <section className="py-16 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-lg leading-relaxed text-gray-700">
                  <p className="mb-6">
                      At <strong>Manish Tea Traders</strong>, we understand that seeing is believing—and in the tea business, <em>tasting</em> is everything. Before you commit to a bulk order, explore the premium range of our <strong>tea wholesale near me</strong> collection.
                  </p>
                  <p className="mb-6">
                      Based in the heart of the <strong>Siliguri tea wholesale market</strong>, we source directly from the finest gardens in Assam and Dooars. Whether you are a retailer looking for &quot;Garden Fresh&quot; quality or a <strong>tea bag manufacturer</strong> seeking consistent dust grades, our samples will prove why we are the preferred <strong>tea suppliers</strong> for businesses across India.
                  </p>
              </div>
          </section>

          {/* 3. Why Request Our Tea Samples */}
          <section className="py-16 bg-tea-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-serif font-bold text-tea-900 text-center mb-12">Why Choose Our Samples?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {[
                          { icon: ShieldCheck, title: "Premium Quality Assurance", desc: "Authentic Assam & Darjeeling tea tested for export-grade quality standards." },
                          { icon: Package, title: "Wide Variety", desc: "From Premium CTC Leaf to Red Dust and Hotel Special blends." },
                          { icon: DollarSign, title: "Competitive Pricing", desc: "Get the best rates directly from the Siliguri tea wholesale market." },
                          { icon: Box, title: "Customization", desc: "Tailored blends and Private Label tea packaging solutions available." }
                      ].map((item, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-tea-100">
                              <div className="w-12 h-12 bg-tea-100 rounded-lg flex items-center justify-center text-tea-600 mb-4">
                                  <item.icon className="w-6 h-6" />
                              </div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                              <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* 4. Our Tea Products Section */}
          <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-serif font-bold text-tea-900 text-center mb-4">Our Tea Products</h2>
                  <p className="text-center text-gray-600 mb-12">Select the samples you need for your business</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                          "Assam Tea Varieties", "Darjeeling Tea Collection", "Premium CTC Tea", "Bopsm blend",
                          "Hotel Special Dust", "Premium Tea Bags", "Green & Specialty Teas", "Custom Blends"
                      ].map((product, idx) => (
                          <div key={idx} className="border border-gray-200 rounded-lg p-6 text-center hover:border-tea-500 transition-colors group">
                              <Leaf className="w-8 h-8 mx-auto text-tea-400 mb-4 group-hover:text-tea-600" />
                              <h3 className="font-bold text-gray-900 mb-4">{product}</h3>
                              <a
                                  href={BUSINESS_DETAILS.sampleFormUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-semibold text-tea-600 hover:text-tea-800 underline decoration-2 underline-offset-4 cursor-pointer block mt-2"
                              >
                                  Request Sample
                              </a>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* 5. Who We Serve */}
          <section className="py-16 bg-tea-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                          <h2 className="text-3xl font-serif font-bold mb-6">Who We Serve</h2>
                          <p className="text-tea-100 mb-6">We are the trusted backend partner for businesses of all sizes.</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {[
                                  "Tea Wholesalers in Siliguri", "Tea Traders & Retailers",
                                  "Export Tea Businesses", "Tea Bag Manufacturers",
                                  "Private Label Packaging", "Wholesale Tea Dealers",
                                  "Chai Patti Distributors", "Hotel & Restaurant Suppliers"
                              ].map((item, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-tea-200">
                                      <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                      <div className="relative h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden">
                          <OptimizedImage
                              src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200"
                              alt="Tea Warehouse - Manish Tea Traders Siliguri"
                              className="absolute inset-0 w-full h-full object-cover"
                          />
                      </div>
                  </div>
              </div>
          </section>

          {/* 6. Sample Request Process */}
          <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-serif font-bold text-tea-900 mb-12">Sample Request Process</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                      {/* Connector Line */}
                      <div className="hidden md:block absolute top-1/4 left-1/6 right-1/6 h-0.5 bg-gray-200 -z-10 bg-tea-100"></div>

                      {[
                          { step: "01", title: "Fill the Form", desc: "Complete our simple sample request form with your business details." },
                          { step: "02", title: "Quality Selection", desc: "Our team selects the exact grades matching your market requirements." },
                          { step: "03", title: "Free Delivery", desc: "Receive samples at your doorstep across India via courier." }
                      ].map((item, idx) => (
                          <div key={idx} className="bg-white p-6">
                              <div className="w-16 h-16 bg-tea-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                                  {item.step}
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                              <p className="text-gray-600">{item.desc}</p>
                          </div>
                      ))}
                  </div>
                  <div className="mt-10">
                      <a
                          href={BUSINESS_DETAILS.sampleFormUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-tea-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-tea-700 transition-colors"
                      >
                          Start Process <ClipboardList className="w-5 h-5" />
                      </a>
                  </div>
              </div>
          </section>

          {/* 7. About Our Tea Business */}
          <section className="py-16 bg-stone-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-serif font-bold text-tea-900 mb-6">About Our Tea Business</h2>
                  <div className="prose prose-lg mx-auto text-gray-700">
                      <p>
                          Established in <strong>{BUSINESS_DETAILS.established}</strong>, Manish Tea Traders has grown from a local shop to a powerhouse in the <strong>Siliguri tea wholesale market</strong>. We are more than just traders; we are curators of the finest Assam and Dooars teas.
                      </p>
                      <p>
                          Our strategic location in Siliguri—the gateway to the North East—allows us to source fresh tea directly from the gardens, bypassing multiple middlemen. This ensures that our clients receive <strong>factory-fresh quality</strong> at unbeatable prices.
                      </p>
                      <p>
                          We are proud to be one of the top <strong>tea manufacturers in Siliguri</strong> offering end-to-end solutions, including private labeling and export-grade sourcing.
                      </p>
                  </div>
              </div>
          </section>

          {/* 8. Service Areas & Delivery */}
          <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-tea-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                      <div className="flex-1">
                          <h2 className="text-3xl font-serif font-bold text-tea-900 mb-6">Service Areas & Delivery</h2>
                          <ul className="space-y-4">
                              <li className="flex items-start gap-3">
                                  <MapPin className="w-6 h-6 text-tea-600 flex-shrink-0" />
                                  <div>
                                      <strong className="block text-gray-900">Primary Hub</strong>
                                      <span className="text-gray-600">Siliguri, West Bengal (Headquarters)</span>
                                  </div>
                              </li>
                              <li className="flex items-start gap-3">
                                  <Truck className="w-6 h-6 text-tea-600 flex-shrink-0" />
                                  <div>
                                      <strong className="block text-gray-900">Pan-India Delivery</strong>
                                      <span className="text-gray-600">Bihar, UP, Rajasthan, Gujarat, Maharashtra, Punjab, and more.</span>
                                  </div>
                              </li>
                              <li className="flex items-start gap-3">
                                  <Globe className="w-6 h-6 text-tea-600 flex-shrink-0" />
                                  <div>
                                      <strong className="block text-gray-900">International Export</strong>
                                      <span className="text-gray-600">serving clients globally with export-standard tea.</span>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div className="flex-1 w-full h-64 md:h-auto bg-gray-200 rounded-xl overflow-hidden relative">
                          {/* Placeholder for Map */}
                          <iframe
                              src={CONTACT_INFO.mapEmbedUrl}
                              width="100%"
                              height="100%"
                              style={{ border: 0, minHeight: '300px' }}
                              allowFullScreen
                              loading="lazy"
                              title="Service Area Map"
                          ></iframe>
                      </div>
                  </div>
              </div>
          </section>

          {/* 9. Pricing & Packaging */}
          <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-serif font-bold text-tea-900 text-center mb-12">Pricing & Packaging Options</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="border border-gray-200 p-8 rounded-xl text-center hover:border-tea-500 transition-colors">
                          <h3 className="text-xl font-bold text-tea-800 mb-4">Bulk Wholesale</h3>
                          <p className="text-3xl font-bold text-gray-900 mb-2">₹120 - ₹250</p>
                          <span className="text-sm text-gray-500">per kg (variable)</span>
                          <ul className="mt-6 space-y-2 text-gray-600 text-sm mb-6">
                              <li>26kg - 35kg Jute Bags</li>
                              <li>Economy to Premium Grades</li>
                              <li>MOQ: 1 Lot</li>
                          </ul>
                          <span className="inline-block px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">Best for Re-sellers</span>
                      </div>

                      <div className="border-2 border-yellow-400 p-8 rounded-xl text-center relative transform md:-translate-y-4 bg-white shadow-xl">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-tea-900 px-4 py-1 rounded-full text-xs font-bold tracking-wide">MOST POPULAR</div>
                          <h3 className="text-xl font-bold text-tea-800 mb-4">Private Label</h3>
                          <p className="text-3xl font-bold text-gray-900 mb-2">Custom</p>
                          <span className="text-sm text-gray-500">pricing based on blend</span>
                          <ul className="mt-6 space-y-2 text-gray-600 text-sm mb-6">
                              <li>Your Brand Pouch (250g/1kg)</li>
                              <li>Custom Blend Creation</li>
                              <li>MOQ: 500 kg</li>
                          </ul>
                          <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold">Best for Brands</span>
                      </div>

                      <div className="border border-gray-200 p-8 rounded-xl text-center hover:border-tea-500 transition-colors">
                          <h3 className="text-xl font-bold text-tea-800 mb-4">Premium Export</h3>
                          <p className="text-3xl font-bold text-gray-900 mb-2">₹400+</p>
                          <span className="text-sm text-gray-500">per kg</span>
                          <ul className="mt-6 space-y-2 text-gray-600 text-sm mb-6">
                              <li>Orthodox & High-Grown</li>
                              <li>Vacuum Packed</li>
                              <li>MOQ: 50 kg</li>
                          </ul>
                          <span className="inline-block px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">Best for Exporters</span>
                      </div>
                  </div>
              </div>
          </section>

          {/* 10. Extended FAQ */}
          <section className="py-16 bg-gray-50">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl font-serif font-bold text-tea-900 mb-4">Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-4">
                      {[
                          { q: "How do I request tea samples?", a: "Simply click the 'Request Free Samples' button and fill out the form. We will contact you to confirm the details." },
                          { q: "Is there any charge for samples?", a: "The tea samples are free. We may charge a nominal courier fee for new clients, which is refundable on your first order." },
                          { q: "What information do I need to provide?", a: "We need your business name, full address with PIN code, and your rough monthly requirement to send the right grades." },
                          { q: "How long does sample delivery take?", a: "Once confirmed, samples are dispatched within 24 hours. Delivery takes 3-7 days depending on your location." },
                          { q: "Do you offer private label tea packaging?", a: "Yes! We specialize in private labeling. We can pack tea in your branded pouches." },
                          { q: "What areas do you deliver to?", a: "We deliver to all states in India. We also have export licenses for international shipment." },
                          { q: "What's your minimum order quantity?", a: "For samples: No minimum. For bulk orders: Usually 1 Lot for loose tea." }
                      ].map((item, idx) => (
                          <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                              <h3 className="font-bold text-gray-900 mb-2 flex gap-3 text-lg">
                                  <HelpCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                                  {item.q}
                              </h3>
                              <p className="text-gray-600 pl-8">{item.a}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* 11. Testimonials */}
          <Reviews />

      </main>
  );
}
