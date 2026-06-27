import React from 'react';
import { TeaGradingSystem } from '../../components/TeaGradeExplorer/TeaGradingSystem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tea Grading System Guide - Understanding Indian Tea Grades",
  description: "Explore our comprehensive guide to Indian tea grading. Learn about Orthodox, CTC, and Specialty tea grades, leaf sizes, and brewing recommendations.",
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
