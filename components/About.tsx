import React from "react";
import { Award, Truck, Coffee, Star, Target, Heart, FileText, CheckCircle, Leaf, DollarSign } from "lucide-react";
import { BUSINESS_DETAILS } from "../constants";
import OptimizedImage from "./OptimizedImage";

const features = [
  {
    icon: <Leaf className="h-10 w-10 text-white" />,
    title: "Direct Sourcing",
    desc: "We eliminate middlemen by sourcing directly from gardens in Assam, Dooars & Darjeeling, ensuring you get the freshest tea at factory rates.",
    color: "bg-green-600"
  },
  {
    icon: <DollarSign className="h-10 w-10 text-white" />,
    title: "Competitive Pricing",
    desc: "Our volume-based buying allows us to offer unmatched wholesale rates, giving retailers and distributors healthy profit margins.",
    color: "bg-tea-600"
  },
  {
    icon: <Coffee className="h-10 w-10 text-white" />,
    title: "Wide Product Range",
    desc: "From strong CTC dust for hotels to premium Orthodox leaf for cafes, we have a complete portfolio of over 20+ tea varieties.",
    color: "bg-amber-600"
  },
  {
    icon: <Truck className="h-10 w-10 text-white" />,
    title: "Reliable Delivery",
    desc: "We have established logistics partners ensuring safe and timely delivery to Bihar, UP, Jharkhand, and all major Indian cities.",
    color: "bg-blue-600"
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-serif font-bold text-tea-900 sm:text-4xl mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-tea-500 mb-6"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
              Manish Tea Traders is a trusted wholesale tea supplier located in Siliguri, West Bengal. Established in {BUSINESS_DETAILS.established}.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With years of experience in the tea industry, we specialize in providing fresh, high-quality tea at honest and competitive wholesale prices. We work with retailers, distributors, hotels, cafés, and corporate buyers across India to ensure long-term business relationships. Our commitment to quality ensures that every batch of <strong>Darjeeling</strong>, <strong>Assam CTC</strong>, and <strong>Nepal Tea</strong> meets the highest standards of aroma, taste, and color.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located in the heart of the tea region, Siliguri, we have direct access to the best tea gardens in Darjeeling, Dooars, and Assam. This allows us to source the freshest leaves and deliver them to your doorstep without unnecessary middlemen, ensuring you get the best value for your money. Whether you need loose tea, packet tea, or custom blends, Manish Tea Traders is your reliable partner for all bulk tea requirements.
            </p>

            {/* Mission Card - Enhanced Visuals */}
            <div className="mt-8 bg-gradient-to-br from-tea-50 to-white border border-tea-100 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Target className="h-32 w-32 text-tea-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-tea-600 p-2 rounded-lg shadow-md">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-tea-900 font-serif">
                    Our Mission
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  To provide fresh, high-quality tea at fair wholesale rates to every business, big or small.
                </p>

                <div className="relative pl-6 border-l-4 border-tea-400">
                  <span className="block font-serif font-medium italic text-tea-800 text-lg">
                    "Tea is our passion, delivering the right taste is our commitment."
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-tea-100 rounded-xl transform rotate-2"></div>
            <OptimizedImage
              src="/blog-images/tea-warehouse.webp"
              alt="Tea tasting and selection at Manish Tea Traders"
              className="relative rounded-xl shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-tea-500 z-10">
              <p className="text-4xl font-bold text-tea-600 mb-2">4.8/5</p>
              <p className="text-gray-600 font-medium">Google Rating based on genuine customer reviews.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-tea-600 font-bold tracking-wider uppercase text-sm">Our Advantage</span>
            <h2 className="text-3xl font-serif font-bold text-tea-900 mt-2">Why Choose Manish Tea Traders?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:-translate-y-2 transition-transform duration-300">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform -rotate-3`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Factsheet */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-tea-700 text-white px-8 py-4 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <h3 className="text-xl font-bold">Company Factsheet</h3>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500 font-medium">Nature of Business</span>
                <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.natureOfBusiness}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500 font-medium">Proprietor / CEO</span>
                <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.proprietor}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500 font-medium">Year of Establishment</span>
                <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.established}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500 font-medium">GST No.</span>
                <span className="text-gray-900 font-bold text-right font-mono">{BUSINESS_DETAILS.gst}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500 font-medium">Total Employees</span>
                <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.employees}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500 font-medium">Shipment Mode</span>
                <span className="text-gray-900 font-semibold text-right">{BUSINESS_DETAILS.shipmentMode}</span>
              </div>
            </div>
          </div>
          <div className="bg-tea-50 px-8 py-4 border-t border-gray-200 text-sm text-gray-600 text-center">
            Payment Modes Accepted: <span className="font-medium text-tea-800">{BUSINESS_DETAILS.paymentMode}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;