"use client";

import React, { useState, useEffect } from "react";
import { trackWhatsAppClick } from "../lib/analytics";
import { Phone, MapPin, Send, Clock, FileText, CheckCircle, CreditCard, ExternalLink } from "lucide-react";
import { CONTACT_INFO, BUSINESS_DETAILS } from "../constants";

interface ContactProps {
  selectedProduct?: string;
  isHomePage?: boolean;
}

const Contact: React.FC<ContactProps> = ({ selectedProduct, isHomePage = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    grade: "",
    quantity: "",
    location: "",
    notes: ""
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({ ...prev, grade: selectedProduct }));
    }
  }, [selectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackWhatsAppClick("Contact Form");
    const text = `*New Price Inquiry* %0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AGrade Required: ${formData.grade}%0AMonthly Demand: ${formData.quantity}%0ALocation: ${formData.location}%0ANotes: ${formData.notes}`;
    const url = `https://wa.me/${CONTACT_INFO.phone}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {isHomePage ? (
            <h2 className="text-3xl font-serif font-bold text-tea-900 sm:text-4xl mt-2">
              Wholesale Inquiries
            </h2>
          ) : (
            <>
              <h1 className="text-3xl font-serif font-bold text-tea-900 sm:text-4xl mt-2">
                Contact Manish Tea Traders – Bulk Tea Wholesale Enquiries
              </h1>
              <p className="mt-6 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                We supply CTC tea, Tea Dust, and Orthodox Leaf in bulk to retailers, distributors, and private label packers across India. Share your preferred tea grade and monthly requirement — we'll send you today's updated wholesale price list along with free sample options. Our team responds within a few hours on WhatsApp.
              </p>
            </>
          )}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif font-bold text-tea-900 mt-2">
            Get Today’s Updated Price List
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-tea-600" />
              <h3 className="text-2xl font-bold text-gray-900">Request Quote</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">Tea Grade / Product Interest</label>
                <input
                  type="text"
                  id="grade"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50"
                  placeholder="e.g. CTC Tea, Rajni Gold..."
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Monthly Demand</label>
                  <input
                    type="text"
                    id="quantity"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="e.g. 50 kg, 200 kg"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Delivery Location</label>
                  <input
                    type="text"
                    id="location"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="City / State"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                <textarea
                  id="notes"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-tea-500 focus:border-transparent outline-none transition-all bg-gray-50 resize-none"
                  placeholder="Any specific requirement about taste, colour or budget..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-tea-600 hover:bg-tea-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Price List via WhatsApp <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-center text-gray-500 mt-2">
                We respect your privacy. No spam.
              </p>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="bg-tea-50 p-8 rounded-2xl border border-tea-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Details</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-tea-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600 mt-1">
                      {CONTACT_INFO.address}, <br />
                      {CONTACT_INFO.city}, {CONTACT_INFO.state} - {CONTACT_INFO.zip}
                    </p>
                    <a href={CONTACT_INFO.mapShareUrl} target="_blank" rel="noreferrer" className="text-tea-600 text-sm font-medium mt-1 inline-block hover:underline">
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-tea-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call / WhatsApp</h3>
                    <p className="text-gray-800 font-bold mt-1 text-lg font-mono">{CONTACT_INFO.displayPhone}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-600">Available for orders</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-tea-600">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Info</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-semibold">Proprietor:</span> {BUSINESS_DETAILS.proprietor}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-semibold">GST No:</span> {BUSINESS_DETAILS.gst}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-semibold">Tea Board (TOMCO):</span> {BUSINESS_DETAILS.tomco}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-tea-600">
                    <ExternalLink className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Verified Seller On</h3>
                    <div className="mt-2 space-y-2">
                      <a
                        href={BUSINESS_DETAILS.indiamartProfile}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-tea-700 hover:text-tea-900 hover:underline font-medium transition-colors"
                      >
                        IndiaMART Profile ↗
                      </a>
                      <a
                        href={BUSINESS_DETAILS.justdialProfile}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-tea-700 hover:text-tea-900 hover:underline font-medium transition-colors"
                      >
                        Justdial Profile ↗
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-tea-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Opening Hours</h3>
                    <p className="text-gray-600 mt-1">10:00 AM – 8:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                src={CONTACT_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Manish Tea Traders Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;