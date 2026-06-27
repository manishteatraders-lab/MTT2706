import React from 'react';
import { Package, TrendingUp, TrendingDown, Scale, Target, IndianRupee } from "lucide-react";
import { BlendSummary, Currency } from "@/types/blend";

interface BlendSummaryCardProps {
    summary: BlendSummary;
    currency: Currency;
    roundToDecimals: number;
    wastagePercent: number;
    targetPricePerKg: number;
}

const BlendSummaryCard = ({
    summary,
    currency,
    roundToDecimals,
    wastagePercent,
    targetPricePerKg,
}: BlendSummaryCardProps) => {
    const formatNumber = (num: number) => num.toFixed(roundToDecimals);

    const wastageKg = (summary.totalQuantityKg * wastagePercent) / 100;
    const finalQuantityKg = summary.totalQuantityKg - wastageKg;
    const finalCostPerKg = finalQuantityKg > 0 ? summary.totalCost / finalQuantityKg : 0;

    const profitLossPerKg = targetPricePerKg > 0 ? targetPricePerKg - finalCostPerKg : 0;
    const isProfit = profitLossPerKg >= 0;

    return (
        <div className="space-y-4">
            {/* Main Cost Card */}
            <div className="bg-gradient-tea text-white rounded-2xl p-6 shadow-tea relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <IndianRupee className="w-32 h-32" />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <Package className="h-5 w-5 text-tea-200" />
                        <span className="text-xs font-bold uppercase tracking-widest text-tea-100">Average Master Cost</span>
                    </div>
                    <div className="text-4xl font-black flex items-baseline gap-1">
                        <span className="text-2xl font-bold opacity-80">{currency}</span>
                        {formatNumber(wastagePercent > 0 ? finalCostPerKg : summary.avgCostPerKg)}
                        <span className="text-sm font-medium opacity-70 ml-1">/per kg</span>
                    </div>
                    {wastagePercent > 0 && (
                        <div className="inline-block mt-3 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                            <p className="text-[10px] font-bold uppercase tracking-wider">After {wastagePercent}% wastage adjustment</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-4 shadow-tea-card border border-stone-100 hover:border-tea-200 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                        <Scale className="w-3.5 h-3.5 text-tea-600" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Total Weight</span>
                    </div>
                    <p className="text-xl font-black text-stone-900">{formatNumber(summary.totalQuantityKg)} kg</p>
                    {wastagePercent > 0 && (
                        <p className="text-[10px] font-bold text-red-600 mt-1 uppercase">Net: {formatNumber(finalQuantityKg)} kg</p>
                    )}
                </div>
                <div className="bg-white rounded-xl p-4 shadow-tea-card border border-stone-100 hover:border-brand-gold/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                        <IndianRupee className="w-3.5 h-3.5 text-brand-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Total Outlay</span>
                    </div>
                    <p className="text-xl font-black text-brand-gold">{currency}{formatNumber(summary.totalCost)}</p>
                </div>
            </div>

            {/* Target Comparison */}
            {targetPricePerKg > 0 && (
                <div className={`rounded-xl p-4 border shadow-sm transition-all duration-500 ${isProfit ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isProfit ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {isProfit ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <Target className="w-3 h-3 text-stone-400" />
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                                        Target: {currency}{formatNumber(targetPricePerKg)}
                                    </p>
                                </div>
                                <p className={`text-sm font-black uppercase tracking-tight ${isProfit ? "text-green-800" : "text-red-800"}`}>
                                    {isProfit ? "Below" : "Above"} Target: {currency}{formatNumber(Math.abs(profitLossPerKg))}/kg
                                </p>
                            </div>
                        </div>
                        <div className={`text-xs font-black px-3 py-1 rounded-full border ${isProfit ? "bg-green-100 border-green-200 text-green-800" : "bg-red-100 border-red-200 text-red-800"}`}>
                            {isProfit ? "VIABLE" : "OVER BUDGET"}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlendSummaryCard;
