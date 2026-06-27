import React from 'react';
import BlendCalculatorComponent from '../../components/BlendCalculator/BlendCalculatorComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tea Blend Cost & Ratio Calculator | Manish Tea Traders B2B Utility",
  description: "Calculate tea blend ratios, wholesale costs, and margins accurately. An essential tool for tea traders, blenders, and private label brands.",
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
