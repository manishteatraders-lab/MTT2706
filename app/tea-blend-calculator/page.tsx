import React from 'react';
import BlendCalculatorComponent from '../../components/BlendCalculator/BlendCalculatorComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Tea Blend Calculator | Cost & Ratio Tool for Wholesale Buyers | Manish Tea Traders",
  description: "Free tea blend calculator for wholesale buyers and private label brands. Calculate blend ratios, batch cost per kg, and selling margin. Built by Siliguri tea traders since 2004.",
  alternates: {
    canonical: "https://manishteatraders.in/tea-blend-calculator/"
  }
};

export default function BlendCalculator() {
  return (
    <div className="bg-white">
      <div className="pt-16">
        <BlendCalculatorComponent />
      </div>
    </div>
  );
}
