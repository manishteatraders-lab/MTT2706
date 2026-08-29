import React from 'react';
import {
    ClipboardList, CheckCircle, Truck, HelpCircle,
    MapPin, Users, Award, Package, Leaf, Globe,
    ShieldCheck, DollarSign, Box, Star
} from 'lucide-react';
import { CONTACT_INFO, BUSINESS_DETAILS } from '../../constants';
import Reviews from '../../components/Reviews';
import OptimizedImage from '../../components/OptimizedImage';
import SampleRequestForm from '../../components/SampleRequestForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Tea Samples for Business & Serious Buyers | Manish Tea Traders",
  description: "Get free CTC, Assam & Darjeeling tea samples for your wholesale business. Business Sample (free tea + courier) or Startup Sample (₹600, 5–6×200g packs) — dispatched from Siliguri.",
  alternates: {
    canonical: "https://www.manishteatraders.in/request-free-tea-samples/"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you accept trial orders for wholesale tea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We accept trial orders so you can verify quality before committing to large volumes. Contact us on WhatsApp with your grade requirement and we will advise the best starting quantity for your market."
      }
    },
    {
      "@type": "Question",
      "name": "Do you supply tea outside West Bengal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We supply bulk tea pan-India via road transport to Delhi, Mumbai, Kolkata, Patna, Hyderabad, Bangalore and 15+ other cities. Delivery takes 2–8 days depending on location."
      }
    },
    {
      "@type": "Question",
      "name": "Are tea samples available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer two options: (1) Business Sample — tea samples are free, only courier charges (~₹200) apply, refunded in your first order. (2) Startup Sample at ₹600 total, includes 5–6 varieties of 200g foil-packed tea plus courier. Both are dispatched from Siliguri within 48 hours of confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Is Manish Tea Traders FSSAI certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We are FSSAI licensed and registered with the Tea Board of India (KOL/B-7410). GST No: 19AHJPR0891G1ZX. Full compliance documentation available on request."
      }
    },
    {
      "@type": "Question",
      "name": "What tea grades do you supply in bulk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We supply CTC grades (BP, BOPSM, OF, PD, Dust), Orthodox grades (OP, FOP, GFOP, TGFOP), Darjeeling First & Second Flush, Assam whole leaf, Nepal High Grown, and custom blends."
      }
    }
  ]
};

export default function RequestSamples() {
  return (
      <main className="bg-white">
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

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
                      <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 2 Sample Options</span>
                      <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Business Sample Free</span>
                      <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 48hr Dispatch</span>
                  </div>

                  {/* ── H1 ── */}
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                      Free Tea Samples for Business<br />
                      <span className="text-yellow-400">&amp; Serious Buyers</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                      For wholesalers, retailers, and private label buyers only. Choose between our <strong>Business Sample</strong> (free tea, courier extra) or <strong>Startup Sample</strong> (₹600 for 5–6 × 200g packs).
                  </p>

                  <a
                      href="#sample-form"
                      className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-tea-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                  >
                      <ClipboardList className="w-6 h-6" />
                      Fill the Sample Request Form
                  </a>

                  <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-300 text-sm">
                      <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-400" />
                          <span>20+ Years in Business</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-yellow-400" />
                          <span>500+ Satisfied Wholesalers</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span>4.8 ★ Google Rating</span>
                      </div>
                  </div>
              </div>
          </section>

          {/* 2. Trust bar */}
          <section className="bg-tea-50 border-b border-tea-100 py-4">
              <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-tea-800">
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-tea-600" /> FSSAI Licensed</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-tea-600" /> Tea Board of India Reg: KOL/B-7410</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-tea-600" /> GST Registered: 19AHJPR0891G1ZX</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-tea-600" /> Business Sample: Free Tea + Courier</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-tea-600" /> 500+ wholesale buyers trust us</span>
              </div>
          </section>

          {/* 3. Form + sidebar two-column layout */}
          <section id="sample-form" className="py-16 bg-white scroll-mt-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                      <span className="text-tea-600 font-bold tracking-wider uppercase text-xs">Step 1 of a long partnership</span>
                      <h2 className="text-3xl font-serif font-bold text-tea-900 mt-2 mb-3">Request Your Free Tea Samples</h2>
                      <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
                          For serious bulk buyers only. Choose between a free Business Sample (courier extra) or Startup Sample at ₹600 (5–6 × 200g packs, courier included).<br />
                          Our team reviews every request and responds on WhatsApp within a few hours.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                      {/* ── Form column ── */}
                      <div className="lg:col-span-2">
                          <SampleRequestForm />
                      </div>

                      {/* ── Sidebar ── */}
                      <div className="space-y-6">
                          {/* What happens next */}
                          <div className="bg-tea-50 border border-tea-100 rounded-2xl p-6">
                              <h3 className="font-serif font-bold text-tea-900 text-lg mb-4">What happens next?</h3>
                              <ol className="space-y-4">
                                  {[
                                      { step: "01", title: "Fill contact & address", desc: "Enter your business details and delivery address." },
                                      { step: "02", title: "Choose sample type", desc: "Business Sample (free tea + courier) or Startup Sample (₹600 for 5–6 × 200g packs)." },
                                      { step: "03", title: "WhatsApp confirmation", desc: "Our team confirms payment (courier or ₹600) and dispatches within 48 hours." },
                                      { step: "04", title: "Price list follows", desc: "We send today's updated wholesale rates along with the samples." },
                                  ].map((item) => (
                                      <li key={item.step} className="flex gap-3">
                                          <div className="flex-none w-8 h-8 bg-tea-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{item.step}</div>
                                          <div>
                                              <p className="font-bold text-sm text-gray-900">{item.title}</p>
                                              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                          </div>
                                      </li>
                                  ))}
                              </ol>
                          </div>

                          {/* Contact alternatives */}
                          <div className="bg-white border border-gray-200 rounded-2xl p-6">
                              <h3 className="font-bold text-gray-900 text-base mb-4">Prefer to talk directly?</h3>
                              <div className="space-y-3">
                                  <a
                                      href={`https://wa.me/${CONTACT_INFO.phone}?text=Hi, I want to request free tea samples for my business.`}
                                      target="_blank" rel="noopener noreferrer"
                                      className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors"
                                  >
                                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                      WhatsApp Us Now
                                  </a>
                                  <a
                                      href={`tel:${CONTACT_INFO.phone}`}
                                      className="flex items-center gap-3 border border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
                                  >
                                      <span className="text-lg">📞</span>
                                      {CONTACT_INFO.displayPhone}
                                  </a>
                                  <p className="text-xs text-gray-400 text-center">Mon–Sat, 10am–8pm IST</p>
                              </div>
                          </div>

                          {/* Grades available */}
                          <div className="bg-white border border-gray-200 rounded-2xl p-6">
                              <h3 className="font-bold text-gray-900 text-base mb-3">Sample grades available</h3>
                              <ul className="space-y-2 text-sm text-gray-600">
                                  {["CTC — BP, OF, PD, Dust", "Assam Orthodox Leaf", "Darjeeling First & Second Flush", "Nepal High Grown", "Green Tea", "Custom Blends / Private Label"].map((g) => (
                                      <li key={g} className="flex items-start gap-2">
                                          <CheckCircle className="w-4 h-4 text-tea-500 flex-none mt-0.5" />
                                          {g}
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* 4. Why Choose Our Samples */}
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

          {/* 5. Tea Products */}
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
                                  href="#sample-form"
                                  className="text-sm font-semibold text-tea-600 hover:text-tea-800 underline decoration-2 underline-offset-4 cursor-pointer block mt-2"
                              >
                                  Request Sample
                              </a>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* 6. Who We Serve */}
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

          {/* 7. Sample Request Process */}
          <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-3xl font-serif font-bold text-tea-900 mb-12">Sample Request Process</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                      <div className="hidden md:block absolute top-1/4 left-1/6 right-1/6 h-0.5 bg-tea-100 -z-10"></div>
                      {[
                          { step: "01", title: "Fill the Form", desc: "Enter your business details and select Business Sample or Startup Sample (₹600)." },
                          { step: "02", title: "Quality Selection", desc: "Our team selects the exact grades matching your market requirements." },
                          { step: "03", title: "Sample Delivery", desc: "Receive samples at your doorstep across India via courier within 3–7 days." }
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
                          href="#sample-form"
                          className="inline-flex items-center gap-2 bg-tea-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-tea-700 transition-colors"
                      >
                          Start the Process <ClipboardList className="w-5 h-5" />
                      </a>
                  </div>
              </div>
          </section>

          {/* 8. About Our Tea Business */}
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
                  </div>
              </div>
          </section>

          {/* 9. Service Areas & Delivery */}
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
                                      <span className="text-gray-600">Serving clients globally with export-standard tea.</span>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div className="flex-1 w-full h-64 md:h-auto bg-gray-200 rounded-xl overflow-hidden relative">
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

          {/* 10. Pricing & Packaging */}
          <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-serif font-bold text-tea-900 text-center mb-12">Pricing & Packaging Options</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="border border-gray-200 p-8 rounded-xl text-center hover:border-tea-500 transition-colors">
                          <h3 className="text-xl font-bold text-tea-800 mb-4">Bulk Wholesale</h3>
                          <p className="text-3xl font-bold text-gray-900 mb-2">₹120 – ₹250</p>
                          <span className="text-sm text-gray-500">per kg (variable)</span>
                          <ul className="mt-6 space-y-2 text-gray-600 text-sm mb-6">
                              <li>26kg – 35kg Jute Bags</li>
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

          {/* 11. Extended FAQ */}
          <section className="py-16 bg-gray-50">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl font-serif font-bold text-tea-900 mb-4">Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-4">
                      {[
                          { q: "How do I request tea samples?", a: "Fill the 4-step form on this page. Step 2 asks you to choose your sample type. We will contact you on WhatsApp within a few hours to confirm details." },
                          { q: "Is there any charge for samples?", a: "We have two options: (1) Business Sample — the tea is free, but courier charges (~₹200) apply and are refundable on your first order. (2) Startup Sample — ₹600 total, which includes 5–6 varieties of 200g foil-packed tea plus courier. Payment is collected via WhatsApp after form submission." },
                          { q: "What information do I need to provide?", a: "We need your business name, GST number (or startup status), full address with PIN code, and your preferred tea grade to send the right samples." },
                          { q: "How long does sample delivery take?", a: "Once confirmed and payment collected (courier or ₹600), samples are dispatched within 48 hours. Delivery takes 3–7 days depending on your location." },
                          { q: "Do you offer private label tea packaging?", a: "Yes! We specialize in private labeling. We can pack tea in your branded pouches starting from 500kg." },
                          { q: "What areas do you deliver to?", a: "We deliver to all states in India. We also have export licenses for international shipment." },
                          { q: "What's your minimum order quantity?", a: "For samples: No minimum quantity. For bulk orders: Usually 1 Lot for loose tea, or 500kg for private label." }
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

          {/* 12. Testimonials */}
          <Reviews />

      </main>
  );
}
