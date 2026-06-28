import React from 'react';
import { TeaGradingSystem } from '../../components/TeaGradeExplorer/TeaGradingSystem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Indian Tea Grades Explained — CTC, Orthodox & Specialty | BP, OF, PD, TGFOP Guide 2026",
  description: "Complete guide to Indian tea grades: BP, BOP, OF, PD, Dust (CTC) and OP, FOP, TGFOP (Orthodox). Explains particle size, cup strength & which grade to buy for your market. From Manish Tea Traders, Siliguri.",
  alternates: {
    canonical: "https://manishteatraders.in/tea-grades/"
  }
};

export default function TeaGradesPage() {
  return (
    <div className="bg-white">
      <main className="pt-16">
        <TeaGradingSystem />
      </main>
    </div>
  );
}
