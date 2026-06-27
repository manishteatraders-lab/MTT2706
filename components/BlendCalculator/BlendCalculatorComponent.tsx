"use client";
import React, { useState, useCallback, useMemo } from "react";
import { Leaf, Calculator, Printer, AlertCircle, Share2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import BlendInputTable from "./BlendInputTable";
import BlendSettings from "./BlendSettings";
import BlendSummaryCard from "./BlendSummaryCard";
import BreakdownTable from "./BreakdownTable";
import {
    BlendRow,
    BlendSettings as BlendSettingsType,
    BlendSummary,
    GradeBreakdown,
    GardenBreakdown,
} from "@/types/blend";

const generateId = () => Math.random().toString(36).substring(2, 9);

const createEmptyRow = (): BlendRow => ({
    id: generateId(),
    gardenName: "",
    gradeName: "",
    numberOfBags: 0,
    weightPerBag: 0,
    extraKgs: [],
    ratePerKg: 0,
});

const BlendCalculatorComponent = () => {
    const [rows, setRows] = useState<BlendRow[]>([createEmptyRow()]);
    const [settings, setSettings] = useState<BlendSettingsType>({
        currency: "₹",
        wastagePercent: 0,
        targetPricePerKg: 0,
        blendName: "",
        batchNumber: "",
        roundToDecimals: 2,
    });
    const [showResults, setShowResults] = useState(false);
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const handleUpdateRow = useCallback(
        (id: string, field: keyof BlendRow, value: string | number | number[]) => {
            setRows((prev) =>
                prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
            );
        },
        []
    );

    const handleAddExtraKg = useCallback((id: string) => {
        setRows((prev) =>
            prev.map((row) =>
                row.id === id ? { ...row, extraKgs: [...row.extraKgs, 0] } : row
            )
        );
    }, []);

    const handleUpdateExtraKg = useCallback((id: string, index: number, value: number) => {
        setRows((prev) =>
            prev.map((row) => {
                if (row.id === id) {
                    const newExtraKgs = [...row.extraKgs];
                    newExtraKgs[index] = value;
                    return { ...row, extraKgs: newExtraKgs };
                }
                return row;
            })
        );
    }, []);

    const handleRemoveExtraKg = useCallback((id: string, index: number) => {
        setRows((prev) =>
            prev.map((row) => {
                if (row.id === id) {
                    const newExtraKgs = row.extraKgs.filter((_, i) => i !== index);
                    return { ...row, extraKgs: newExtraKgs };
                }
                return row;
            })
        );
    }, []);

    const handleAddRow = useCallback(() => {
        setRows((prev) => [...prev, createEmptyRow()]);
    }, []);

    const handleDeleteRow = useCallback((id: string) => {
        setRows((prev) => prev.filter((row) => row.id !== id));
    }, []);

    const handleUpdateSettings = useCallback(
        (field: keyof BlendSettingsType, value: string | number) => {
            setSettings((prev) => ({ ...prev, [field]: value }));
        },
        []
    );

    const validateInputs = (): string[] => {
        const errors: string[] = [];

        const hasValidRow = rows.some(
            (row) =>
                row.gardenName.trim() &&
                row.gradeName.trim() &&
                row.numberOfBags > 0 &&
                row.weightPerBag > 0 &&
                row.ratePerKg > 0
        );

        if (!hasValidRow) {
            errors.push("Add at least one complete item with all values filled.");
        }

        return errors;
    };

    const { summary, gradeBreakdown, gardenBreakdown } = useMemo(() => {
        const validRows = rows.filter(
            (row) =>
                row.gardenName.trim() &&
                row.gradeName.trim() &&
                row.numberOfBags > 0 &&
                row.weightPerBag > 0 &&
                row.ratePerKg > 0
        );

        if (validRows.length === 0) {
            return {
                summary: {
                    totalQuantityKg: 0,
                    totalCost: 0,
                    avgCostPerKg: 0,
                    numberOfGardens: 0,
                    numberOfGrades: 0,
                },
                gradeBreakdown: [],
                gardenBreakdown: [],
            };
        }

        let totalQuantityKg = 0;
        let totalCost = 0;

        validRows.forEach((row) => {
            const bagQty = row.numberOfBags * row.weightPerBag;
            const extraQty = row.extraKgs.reduce((sum, kg) => sum + kg, 0);
            const qty = bagQty + extraQty;
            const value = qty * row.ratePerKg;
            totalQuantityKg += qty;
            totalCost += value;
        });

        const avgCostPerKg = totalQuantityKg > 0 ? totalCost / totalQuantityKg : 0;

        const gradeMap = new Map<string, { totalKg: number; totalValue: number }>();
        validRows.forEach((row) => {
            const bagQty = row.numberOfBags * row.weightPerBag;
            const extraQty = row.extraKgs.reduce((sum, kg) => sum + kg, 0);
            const qty = bagQty + extraQty;
            const value = qty * row.ratePerKg;
            const existing = gradeMap.get(row.gradeName) || { totalKg: 0, totalValue: 0 };
            gradeMap.set(row.gradeName, {
                totalKg: existing.totalKg + qty,
                totalValue: existing.totalValue + value,
            });
        });

        const gradeBreakdown: GradeBreakdown[] = Array.from(gradeMap.entries()).map(
            ([gradeName, data]) => ({
                gradeName,
                totalKg: data.totalKg,
                percentage: totalQuantityKg > 0 ? (data.totalKg / totalQuantityKg) * 100 : 0,
                totalValue: data.totalValue,
                costContribution: totalCost > 0 ? (data.totalValue / totalCost) * 100 : 0,
            })
        );

        const gardenMap = new Map<string, { totalKg: number; totalValue: number }>();
        validRows.forEach((row) => {
            const bagQty = row.numberOfBags * row.weightPerBag;
            const extraQty = row.extraKgs.reduce((sum, kg) => sum + kg, 0);
            const qty = bagQty + extraQty;
            const value = qty * row.ratePerKg;
            const existing = gardenMap.get(row.gardenName) || { totalKg: 0, totalValue: 0 };
            gardenMap.set(row.gardenName, {
                totalKg: existing.totalKg + qty,
                totalValue: existing.totalValue + value,
            });
        });

        const gardenBreakdown: GardenBreakdown[] = Array.from(gardenMap.entries()).map(
            ([gardenName, data]) => ({
                gardenName,
                totalKg: data.totalKg,
                percentage: totalQuantityKg > 0 ? (data.totalKg / totalQuantityKg) * 100 : 0,
                totalValue: data.totalValue,
                costContribution: totalCost > 0 ? (data.totalValue / totalCost) * 100 : 0,
            })
        );

        const summary: BlendSummary = {
            totalQuantityKg,
            totalCost,
            avgCostPerKg,
            numberOfGardens: gardenMap.size,
            numberOfGrades: gradeMap.size,
        };

        return { summary, gradeBreakdown, gardenBreakdown };
    }, [rows]);

    const handleCalculate = () => {
        const errors = validateInputs();
        setValidationErrors(errors);
        setShowResults(errors.length === 0);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-stone-50 pb-24">
            {/* Tool Header */}
            <header className="bg-white border-b border-stone-200 py-6 px-4 sticky top-0 z-20 shadow-sm print:static print:shadow-none">
                <div className="max-w-xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-tea-600 rounded-2xl text-white shadow-tea transform -rotate-3 group-hover:rotate-0 transition-transform">
                            <Calculator className="h-6 w-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-stone-900 leading-tight">Tea Blend Calculator</h1>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-tea-600">for tea packers who run their own brand</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 print:hidden">
                        <Button variant="ghost" size="icon" className="rounded-full text-stone-400">
                            <Share2 className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-xl mx-auto px-4 py-8 space-y-8">
                {/* Settings */}
                <div className="animate-in slide-in-from-top-4 duration-500">
                    <BlendSettings settings={settings} onUpdateSettings={handleUpdateSettings} />
                </div>

                {/* Input Cards */}
                <div className="animate-in slide-in-from-bottom-4 duration-500 delay-100">
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h2 className="text-xs font-black uppercase tracking-widest text-stone-400">Inventory Items</h2>
                        <span className="text-[10px] font-bold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">{rows.length} Total</span>
                    </div>
                    <BlendInputTable
                        rows={rows}
                        currency={settings.currency}
                        onUpdateRow={handleUpdateRow}
                        onAddRow={handleAddRow}
                        onDeleteRow={handleDeleteRow}
                        onAddExtraKg={handleAddExtraKg}
                        onUpdateExtraKg={handleUpdateExtraKg}
                        onRemoveExtraKg={handleRemoveExtraKg}
                        roundToDecimals={settings.roundToDecimals}
                    />
                </div>

                {/* Validation Errors */}
                {validationErrors.length > 0 && (
                    <Alert variant="destructive" className="bg-red-50 border-red-100 shadow-sm animate-in shake duration-500">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription className="font-bold text-xs">{validationErrors[0]}</AlertDescription>
                    </Alert>
                )}

                {/* Results */}
                {showResults && summary.totalQuantityKg > 0 && (
                    <div className="space-y-8 animate-in zoom-in-95 duration-500">
                        <Separator className="bg-stone-200" />

                        {settings.blendName && (
                            <div className="text-center py-2">
                                <div className="inline-block px-4 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20 mb-2">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">Master Certificate</p>
                                </div>
                                <h2 className="text-3xl font-black text-stone-900">{settings.blendName}</h2>
                                {settings.batchNumber && (
                                    <div className="mt-2 flex items-center justify-center gap-2">
                                        <Save className="w-3 h-3 text-stone-300" />
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Batch Record: {settings.batchNumber}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        <BlendSummaryCard
                            summary={summary}
                            currency={settings.currency}
                            roundToDecimals={settings.roundToDecimals}
                            wastagePercent={settings.wastagePercent}
                            targetPricePerKg={settings.targetPricePerKg}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <BreakdownTable
                                title="Grade"
                                data={gradeBreakdown}
                                nameKey="gradeName"
                                currency={settings.currency}
                                roundToDecimals={settings.roundToDecimals}
                            />

                            <BreakdownTable
                                title="Garden"
                                data={gardenBreakdown}
                                nameKey="gardenName"
                                currency={settings.currency}
                                roundToDecimals={settings.roundToDecimals}
                            />
                        </div>

                        <Button
                            onClick={handlePrint}
                            variant="outline"
                            className="w-full h-14 border-stone-200 shadow-sm hover:bg-stone-50 text-stone-600 font-black text-xs uppercase tracking-widest print:hidden"
                        >
                            <Printer className="h-5 w-5 mr-3" />
                            Generate Official Report
                        </Button>
                    </div>
                )}
            </main>

            {/* Fixed Calculate Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-stone-200 print:hidden z-30">
                <div className="max-w-xl mx-auto">
                    <Button
                        onClick={handleCalculate}
                        className="w-full h-14 bg-tea-600 hover:bg-tea-700 text-white shadow-tea text-sm font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Calculator className="h-5 w-5 mr-3" />
                        Calculate Master Blend
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BlendCalculatorComponent;
