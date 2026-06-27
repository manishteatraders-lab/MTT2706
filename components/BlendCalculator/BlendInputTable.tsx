import React from 'react';
import { Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlendRow, Currency } from "@/types/blend";

interface BlendInputTableProps {
    rows: BlendRow[];
    currency: Currency;
    onUpdateRow: (id: string, field: keyof BlendRow, value: string | number | number[]) => void;
    onAddRow: () => void;
    onDeleteRow: (id: string) => void;
    onAddExtraKg: (id: string) => void;
    onUpdateExtraKg: (id: string, index: number, value: number) => void;
    onRemoveExtraKg: (id: string, index: number) => void;
    roundToDecimals: number;
}

const BlendInputTable = ({
    rows,
    currency,
    onUpdateRow,
    onAddRow,
    onDeleteRow,
    onAddExtraKg,
    onUpdateExtraKg,
    onRemoveExtraKg,
    roundToDecimals,
}: BlendInputTableProps) => {
    const formatNumber = (num: number) => num.toFixed(roundToDecimals);

    const calculateTotalQty = (row: BlendRow) => {
        const bagQty = row.numberOfBags * row.weightPerBag;
        const extraQty = row.extraKgs.reduce((sum, kg) => sum + kg, 0);
        return bagQty + extraQty;
    };

    const calculateTotalValue = (row: BlendRow) => calculateTotalQty(row) * row.ratePerKg;

    return (
        <div className="space-y-4">
            {rows.map((row, index) => (
                <div
                    key={row.id}
                    className="bg-white rounded-xl shadow-tea-card p-4 space-y-4 border border-stone-200"
                >
                    {/* Header with row number and delete */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-stone-500">
                            Item {index + 1}
                        </span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onDeleteRow(row.id)}
                            className="text-stone-400 hover:text-red-600 h-8 px-2"
                            disabled={rows.length === 1}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Garden & Grade */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                            <Label className="text-xs text-stone-500">Garden / Estate</Label>
                            <Input
                                value={row.gardenName}
                                onChange={(e) => onUpdateRow(row.id, "gardenName", e.target.value)}
                                placeholder="e.g. Darjeeling"
                                className="h-11 border-stone-200 focus:border-tea-600"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs text-stone-500">Grade</Label>
                            <Input
                                value={row.gradeName}
                                onChange={(e) => onUpdateRow(row.id, "gradeName", e.target.value)}
                                placeholder="e.g. BP, BOPSM"
                                className="h-11 border-stone-200 focus:border-tea-600"
                            />
                        </div>
                    </div>

                    {/* Bags, Weight, Rate */}
                    <div className="grid grid-cols-3 gap-3">
                        <div className="space-y-1.5">
                            <Label className="text-xs text-stone-500">Bags</Label>
                            <Input
                                type="number"
                                min="0"
                                value={row.numberOfBags || ""}
                                onChange={(e) => onUpdateRow(row.id, "numberOfBags", parseFloat(e.target.value) || 0)}
                                placeholder="0"
                                className="h-11 text-center border-stone-200"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs text-stone-500">Wt/Bag (kg)</Label>
                            <div className="flex gap-1">
                                <Input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={row.weightPerBag || ""}
                                    onChange={(e) => onUpdateRow(row.id, "weightPerBag", parseFloat(e.target.value) || 0)}
                                    placeholder="0"
                                    className="h-11 text-center border-stone-200"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    onClick={() => onAddExtraKg(row.id)}
                                    className="h-11 w-11 shrink-0 border-stone-200 text-tea-600 hover:bg-tea-50"
                                    title="Add loose weight (Extra kg)"
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label className="text-xs text-stone-500">Rate/kg ({currency})</Label>
                            <Input
                                type="number"
                                min="0"
                                step="0.01"
                                value={row.ratePerKg || ""}
                                onChange={(e) => onUpdateRow(row.id, "ratePerKg", parseFloat(e.target.value) || 0)}
                                placeholder="0"
                                className="h-11 text-center border-stone-200"
                            />
                        </div>
                    </div>

                    {/* Extra KGs */}
                    {row.extraKgs.length > 0 && (
                        <div className="space-y-2 pl-2 border-l-2 border-tea-200">
                            <Label className="text-xs text-stone-500">Extra kg (Loose weight)</Label>
                            <div className="flex flex-wrap gap-2">
                                {row.extraKgs.map((extraKg, idx) => (
                                    <div key={idx} className="flex items-center gap-1">
                                        <Input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={extraKg || ""}
                                            onChange={(e) => onUpdateExtraKg(row.id, idx, parseFloat(e.target.value) || 0)}
                                            placeholder="0"
                                            className="h-9 w-20 text-center text-sm border-stone-200"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => onRemoveExtraKg(row.id, idx)}
                                            className="h-7 w-7 text-stone-400 hover:text-red-600"
                                        >
                                            <X className="h-3 w-3" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Totals */}
                    <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Total Qty</span>
                            <p className="text-lg font-semibold text-tea-800">{formatNumber(calculateTotalQty(row))} kg</p>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Total Value</span>
                            <p className="text-lg font-bold text-brand-gold">{currency}{formatNumber(calculateTotalValue(row))}</p>
                        </div>
                    </div>
                </div>
            ))}

            <Button
                onClick={onAddRow}
                variant="outline"
                className="w-full h-12 border-dashed border-2 border-tea-200 text-tea-700 hover:bg-tea-50 hover:border-tea-300 transition-all font-bold"
            >
                <Plus className="h-5 w-5 mr-2" />
                Add Next Item
            </Button>
        </div>
    );
};

export default BlendInputTable;
