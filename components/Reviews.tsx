import React from "react";
import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    text: "Great quality tea at reasonable price. One of the best wholesalers in Siliguri.",
    author: "Ramesh K.",
    role: "Retailer",
    rating: 5
  },
  {
    text: "Fresh stock and timely delivery. Highly recommended for retailers. I have been buying from them for 2 years.",
    author: "Amit Roy",
    role: "Shop Owner",
    rating: 5
  },
  {
    text: "Excellent blends. Perfect strength and colour. My hotel customers love the tea.",
    author: "Suresh Das",
    role: "Hotel Owner",
    rating: 5
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-tea-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-2xl font-bold text-gray-900">4.8</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-500 text-sm">(Google Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-tea-50 p-8 rounded-2xl relative">
              <Quote className="h-10 w-10 text-tea-200 absolute top-4 right-4" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-tea-200 flex items-center justify-center font-bold text-tea-700">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-500 uppercase">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://share.google/RmPDu73CPzrNemGUs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-tea-600 font-semibold hover:text-tea-700 transition-colors"
          >
            Read all reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;