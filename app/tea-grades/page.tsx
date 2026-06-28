import React from 'react';
import { TeaGradingSystem } from '../../components/TeaGradeExplorer/TeaGradingSystem';
import { Metadata } from 'next';
import { teaData } from '../../data/teaGrades';

export const metadata: Metadata = {
  title: "Indian Tea Grades Explained — CTC, Orthodox & Specialty | BP, OF, PD, TGFOP Guide 2026",
  description: "Complete guide to Indian tea grades: BP, BOP, OF, PD, Dust (CTC) and OP, FOP, TGFOP (Orthodox). Explains particle size, cup strength & which grade to buy for your market. From Manish Tea Traders, Siliguri.",
  alternates: {
    canonical: "https://manishteatraders.in/tea-grades/"
  }
};

export default function TeaGradesPage() {
  const allGrades = teaData.flatMap(category => 
    category.leafStyles.flatMap(style => style.grades)
  );

  return (
    <div className="bg-white">
      <main className="pt-16">
        <TeaGradingSystem />

        {/* SEO Fallback: Static HTML Table of all grades for search engine crawlers */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold font-serif mb-4 text-tea-900">Complete Index of Wholesale Tea Grades</h2>
          <p className="mb-8 text-gray-600">
            Below is the complete text-based index of all {allGrades.length} CTC, Orthodox, and Specialty tea grades available for bulk supply from our Siliguri warehouse.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-tea-50 text-tea-900">
                  <th className="p-4 border border-gray-200 font-bold whitespace-nowrap">Grade Code</th>
                  <th className="p-4 border border-gray-200 font-bold">Full Name</th>
                  <th className="p-4 border border-gray-200 font-bold">Category</th>
                  <th className="p-4 border border-gray-200 font-bold">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {allGrades.map((grade) => (
                  <tr key={grade.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 border border-gray-200 font-bold text-tea-800">{grade.code}</td>
                    <td className="p-4 border border-gray-200 font-medium">{grade.fullName}</td>
                    <td className="p-4 border border-gray-200 capitalize">{grade.category}</td>
                    <td className="p-4 border border-gray-200">{grade.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
