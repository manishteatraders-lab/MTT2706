import React from 'react';
import { GradeBreakdown, GardenBreakdown, Currency } from "@/types/blend";

interface BreakdownTableProps {
    title: string;
    data: (GradeBreakdown | GardenBreakdown)[];
    nameKey: "gradeName" | "gardenName";
    currency: Currency;
    roundToDecimals: number;
}

const BreakdownTable = ({
    title,
    data,
    nameKey,
    currency,
    roundToDecimals,
}: BreakdownTableProps) => {
    const formatNumber = (num: number) => num.toFixed(roundToDecimals);

    if (data.length === 0) return null;

    const sortedData = [...data].sort((a, b) => b.percentage - a.percentage);

    return (
        <div className="bg-white rounded-xl shadow-tea-card overflow-hidden border border-stone-200">
            {title && (
                <div className="px-4 py-3 border-b border-stone-100 bg-stone-50/50">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">{title} Analysis</h3>
                </div>
            )}
            <div className="divide-y divide-stone-100">
                {sortedData.map((item, index) => (
                    <div key={index} className="p-4 space-y-3 hover:bg-stone-50/50 transition-colors">
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-stone-900 text-sm">
                                {nameKey === "gradeName"
                                    ? (item as GradeBreakdown).gradeName
                                    : (item as GardenBreakdown).gardenName}
                            </span>
                            <div className="text-right">
                                <span className="text-xs font-black text-tea-700 bg-tea-50 px-2 py-0.5 rounded border border-tea-100">
                                    {formatNumber(item.percentage)}%
                                </span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-tea rounded-full transition-all duration-700 ease-out"
                                    style={{ width: `${Math.min(item.percentage, 100)}%` }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-stone-400">
                            <span className="flex items-center gap-1.5 font-black text-stone-500">
                                {formatNumber(item.totalKg)} <span className="opacity-50">kg</span>
                            </span>
                            <span className="text-brand-gold font-black">
                                {currency}{formatNumber(item.totalValue)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BreakdownTable;
