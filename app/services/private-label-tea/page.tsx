import React from 'react';
import Link from 'next/link';
import { Package, CheckCircle, MessageCircle, Phone, ArrowRight, Star } from 'lucide-react';
import { BUSINESS_DETAILS } from '../../../constants';
import OptimizedImage from '../../../components/OptimizedImage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Label Tea Manufacturing India — Your Brand in 30 Days",
  description: "Launch your own tea brand in 30 days. We handle blending, packaging & printing. MOQ 50 kg. 200+ brands launched across India.",
  alternates: {
    canonical: "https://manishteatraders.in/services/private-label-tea/"
  },
  openGraph: {
    images: [
      {
        url: "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03"
      }
    ]
  }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the minimum order quantity for private label tea?",
            "acceptedAnswer": { "@type": "Answer", "text": "Our minimum order for private label tea is 50 kg. This can be a single blend or a mix of grades (e.g., 25 kg CTC + 25 kg Dust). For custom printed pouches, a minimum print run of 500 units is typically required for the artwork setup to be economical." }
        },
        {
            "@type": "Question",
            "name": "How long does it take to launch my own tea brand?",
            "acceptedAnswer": { "@type": "Answer", "text": "From your first inquiry to receiving your first batch of branded tea typically takes 20–30 days: 3–5 days for sample approval, 5–7 days for packaging design and artwork, 5–7 days for printing, and 3–5 days for filling and dispatch. Rush orders can be accommodated in some cases." }
        },
        {
            "@type": "Question",
            "name": "Do I need an FSSAI license to launch a private label tea brand?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, you need an FSSAI registration or license to sell packaged food including tea. Basic FSSAI Registration (for turnover under ₹12 lakh/year) costs approximately ₹100/year. A State License (for turnover ₹12–20 crore) costs ₹2,000–5,000/year. We can guide you through the process. GST registration is also recommended for claiming input tax credit on wholesale purchases." }
        }
    ]
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Label Tea Manufacturing",
    "provider": {
        "@type": "WholesaleStore",
        "name": "Manish Tea Traders",
        "image": "https://manishteatraders.in/logo.png"
    },
    "serviceType": "Co-packing and Private Labeling",
    "areaServed": { "@type": "Country", "name": "India" },
    "description": "End-to-end private label tea manufacturing: sourcing, blending, custom packaging and brand printing. MOQ 50 kg. 200+ brands launched.",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
    }
};

const schemas = [serviceSchema, faqSchema];

export default function PrivateLabelPage() {
    const whatsappUrl = "https://wa.me/917001958588?text=Hello%2C%20I%20want%20to%20start%20a%20private%20label%20tea%20brand.%20Please%20share%20details.";

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            {/* Hero */}
            <section className="relative py-24 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <OptimizedImage
                        src="https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=2000&auto=format&fit=crop"
                        alt="Tea Packaging Factory"
                        className="w-full h-full object-cover"
                        priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block bg-tea-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6 shadow-lg border border-tea-400">
                        For Startups &amp; Established Brands
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-md">
                        Launch Your Own <span className="text-tea-400">Tea Brand</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                        End-to-end private label tea manufacturing — we handle sourcing, blending, printing and packing so you can focus entirely on selling.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-green-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5" /> WhatsApp to Get Started
                        </a>
                        <a
                            href="#pricing"
                            className="bg-white text-tea-900 font-bold px-8 py-4 rounded-xl hover:bg-tea-50 transition-all shadow-xl inline-flex items-center gap-2"
                        >
                            <Package className="h-5 w-5 text-tea-600" /> View Pricing
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-tea-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { stat: "200+", label: "Brands Launched" },
                            { stat: "50 kg",  label: "Min Order (MOQ)" },
                            { stat: "30",     label: "Days to Launch" },
                            { stat: "FSSAI",  label: "Compliant Facility" },
                        ].map((item) => (
                            <div key={item.label}>
                                <div className="text-2xl md:text-3xl font-bold text-tea-300 mb-1">{item.stat}</div>
                                <div className="text-sm text-tea-200">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works (4-step diagram) */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-tea-900 mb-3 text-center">How Private Label Works</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">From first call to delivery in your warehouse — here&apos;s exactly what happens.</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        {/* connector line (desktop only) */}
                        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-tea-200 z-0" />
                        {[
                            { step: "01", title: "Choose Your Blend", desc: "Select from our existing catalogue (CTC, Dust, Darjeeling) or commission a custom blend matched to your local market's taste and water profile.", icon: "🍵" },
                            { step: "02", title: "Design Your Pack", desc: "Share your brand name, logo and color scheme. Our design team creates print-ready artwork for your pouches — 50g to 1 kg sizes.", icon: "🎨" },
                            { step: "03", title: "Approve a Sample", desc: "We send a physical sample of your tea in your branded pack. You approve the taste and design before any bulk production begins.", icon: "✅" },
                            { step: "04", title: "Receive & Sell", desc: "Full production is completed in 15–20 days. Finished packs arrive at your warehouse FSSAI-labelled and shelf-ready.", icon: "🚚" },
                        ].map((s) => (
                            <div key={s.step} className="relative z-10 text-center bg-white">
                                <div className="w-20 h-20 rounded-full bg-tea-50 border-2 border-tea-200 flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
                                    {s.icon}
                                </div>
                                <div className="text-xs font-bold text-tea-500 uppercase tracking-widest mb-2">Step {s.step}</div>
                                <h3 className="font-bold text-gray-900 mb-2 text-lg">{s.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section id="pricing" className="py-16 bg-tea-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-tea-900 mb-3 text-center">Private Label Pricing Tiers</h2>
                    <p className="text-gray-600 text-center mb-10">Indicative pricing — exact quote based on grade, pack size and quantity.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Starter",
                                moq: "50 kg",
                                price: "₹220–280/kg",
                                includes: ["1 blend of your choice", "250g / 500g pouches", "Basic print design", "FSSAI label compliance", "5-day sample turnaround"],
                                highlight: false,
                            },
                            {
                                name: "Growth",
                                moq: "100–500 kg",
                                price: "₹190–240/kg",
                                includes: ["Up to 3 blends", "50g to 1 kg pouches", "Premium design artwork", "FSSAI + Batch coding", "Priority dispatch (2–3 days)"],
                                highlight: true,
                            },
                            {
                                name: "Enterprise",
                                moq: "500+ kg",
                                price: "Custom quote",
                                includes: ["Unlimited blends", "All pack formats incl. box", "Dedicated account manager", "Monthly supply contracts", "Full logistics coordination"],
                                highlight: false,
                            },
                        ].map((tier) => (
                            <div key={tier.name} className={`rounded-2xl p-6 border ${tier.highlight ? 'bg-tea-900 border-tea-700 text-white shadow-xl' : 'bg-white border-gray-200 shadow-sm'}`}>
                                {tier.highlight && <div className="text-xs font-bold text-tea-300 uppercase tracking-widest mb-3">Most Popular</div>}
                                <h3 className={`text-xl font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                                <div className={`text-sm mb-1 ${tier.highlight ? 'text-tea-300' : 'text-gray-500'}`}>MOQ: {tier.moq}</div>
                                <div className={`text-2xl font-bold mb-5 ${tier.highlight ? 'text-tea-300' : 'text-tea-700'}`}>{tier.price}</div>
                                <ul className="space-y-2.5">
                                    {tier.includes.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm">
                                            <CheckCircle className={`h-4 w-4 mt-0.5 shrink-0 ${tier.highlight ? 'text-tea-400' : 'text-green-500'}`} />
                                            <span className={tier.highlight ? 'text-tea-100' : 'text-gray-700'}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-6 block text-center px-4 py-3 rounded-xl font-bold text-sm transition ${tier.highlight ? 'bg-tea-600 hover:bg-tea-500 text-white' : 'bg-tea-50 hover:bg-tea-100 text-tea-800 border border-tea-200'}`}
                                >
                                    Get Quote on WhatsApp
                                </a>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-6">*Pricing depends on tea grade, packaging format, and artwork complexity. All prices excluding GST and transport.</p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-tea-900 mb-10 text-center">Brands We&apos;ve Helped Launch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                quote: "We launched our 'Sone Ki Chai' brand with Manish Tea Traders with just 50 kg. Within 3 months we scaled to 300 kg/month. The consistent quality means customers come back every time.",
                                name: "Rajesh Kumar",
                                location: "Patna, Bihar",
                                brand: "Sone Ki Chai"
                            },
                            {
                                quote: "I was nervous about starting a tea brand but they made it incredibly simple. The sample approval process gave me confidence. We now supply 50+ kirana stores in Lucknow.",
                                name: "Anita Sharma",
                                location: "Lucknow, UP",
                                brand: "Morning Fresh Tea"
                            },
                            {
                                quote: "As a hotel chain, we wanted our own branded tea for room service. Manish Tea Traders custom-blended a recipe that perfectly complements our water quality and guests love it.",
                                name: "Vikram Mehta",
                                location: "Jaipur, Rajasthan",
                                brand: "Hotel Private Label"
                            },
                        ].map((t) => (
                            <div key={t.name} className="bg-tea-50 border border-tea-100 rounded-2xl p-6">
                                <div className="flex gap-1 mb-4">
                                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-tea-500 text-tea-500" />)}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">&quot;{t.quote}&quot;</p>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                                    <div className="text-tea-600 text-xs font-medium">{t.brand} • {t.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Partner With Us */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-tea-900 mb-10 text-center">Why 200+ Brands Choose Us</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🏭", title: "Direct Auction Sourcing", desc: "We buy at Siliguri auctions — garden-fresh tea at 15–20% below market rates." },
                            { icon: "🧪", title: "Custom Blend Expertise", desc: "20+ years of blending experience. We reverse-engineer popular regional tastes." },
                            { icon: "📦", title: "Low MOQ: Just 50 kg", desc: "No need to order a truckload. Start small, validate, then scale confidently." },
                            { icon: "🎨", title: "Design Support Included", desc: "Our team creates print-ready artwork at no extra cost for Growth+ orders." },
                            { icon: "📋", title: "FSSAI Compliant",       desc: "All products manufactured and labelled to full FSSAI food safety standards." },
                            { icon: "📞", title: "WhatsApp-first Support", desc: "Direct access to our team for every query — no call centers or long waits." },
                        ].map((item) => (
                            <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6">
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-serif font-bold text-tea-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <details key={i} className="bg-tea-50 border border-tea-100 rounded-xl p-5 group">
                                <summary className="font-bold text-tea-900 cursor-pointer list-none flex justify-between items-start gap-3">
                                    <span>{faq.name}</span>
                                    <span className="text-tea-500 group-open:rotate-180 transition-transform shrink-0 mt-0.5">▼</span>
                                </summary>
                                <p className="mt-3 text-gray-700 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" className="py-16 bg-tea-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-4">Ready to Launch Your Tea Brand?</h2>
                    <p className="text-tea-200 mb-8 text-lg max-w-2xl mx-auto">
                        Join 200+ entrepreneurs who&apos;ve launched their own tea brand with us. WhatsApp us today — get a quote within 2 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-green-500 transition inline-flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle className="h-5 w-5" /> WhatsApp for Quote
                        </a>
                        <a
                            href="tel:+917001958588"
                            className="bg-white text-tea-900 px-8 py-4 rounded-xl font-bold hover:bg-tea-50 transition inline-flex items-center justify-center gap-2"
                        >
                            <Phone className="h-5 w-5" /> Call +91 70019 58588
                        </a>
                        <a
                            href={BUSINESS_DETAILS.sampleFormUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-tea-400 text-tea-200 px-8 py-4 rounded-xl font-bold hover:bg-tea-800 transition inline-flex items-center justify-center gap-2"
                        >
                            <ArrowRight className="h-5 w-5" /> Request Free Sample First
                        </a>
                    </div>
                    <p className="text-tea-400 text-sm">Manish Tea Traders · Ganga Nagar, Mahananda Para, Siliguri, WB 734005 · FSSAI Registered · Since 2004</p>
                </div>
            </section>
        </>
    );
}
