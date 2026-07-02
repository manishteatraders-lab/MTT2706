import React from 'react';
import BlendCalculatorComponent from '../../components/BlendCalculator/BlendCalculatorComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Tea Blend Calculator | Cost & Ratio Tool for Wholesale Buyers | Manish Tea Traders",
  description: "Free tea blend calculator for wholesale buyers and private label brands. Calculate blend ratios, batch cost per kg, and selling margin. Built by Siliguri tea traders since 2004.",
  alternates: {
    canonical: "https://www.manishteatraders.in/tea-blend-calculator/"
  }
};

export default function BlendCalculator() {
  return (
    <div className="bg-white">
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-tea-900 mb-6">Tea Blend Cost & Ratio Calculator</h1>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              Welcome to the industry's first free <strong>Tea Blend Calculator</strong> designed specifically for wholesale tea buyers, retailers, and private label brands. 
              Whether you are mixing Assam BP with Dooars BOPSM for a household blend or creating a premium hotel dust mix, knowing your exact batch cost is critical to maximizing your profit margins.
            </p>
            <p>
              <strong>How to use this tool:</strong> Enter the name, price per kg, and percentage (or weight) of each tea grade in your blend. The calculator will instantly determine your final <strong>cost per kg</strong> for the blended batch. 
              Use this tool to experiment with ratios and find the perfect balance between cup quality and target selling price.
            </p>
          </div>
        </div>
        <BlendCalculatorComponent />
      </main>
    </div>
  );
}
