import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { BlendSettings as BlendSettingsType, Currency } from "@/types/blend";

interface BlendSettingsProps {
    settings: BlendSettingsType;
    onUpdateSettings: (field: keyof BlendSettingsType, value: string | number) => void;
}

const BlendSettings = ({ settings, onUpdateSettings }: BlendSettingsProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-tea-card overflow-hidden border border-stone-200">
            {/* Basic Settings - Always visible */}
            <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="text-xs text-stone-500 font-bold uppercase tracking-wider">Blend Name</Label>
                        <Input
                            value={settings.blendName}
                            onChange={(e) => onUpdateSettings("blendName", e.target.value)}
                            placeholder="e.g. Master Blend"
                            className="h-11 border-stone-200"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="text-xs text-stone-500 font-bold uppercase tracking-wider">Currency</Label>
                        <Select
                            value={settings.currency}
                            onValueChange={(value) => onUpdateSettings("currency", value as Currency)}
                        >
                            <SelectTrigger className="h-11 border-stone-200">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="₹">₹ INR</SelectItem>
                                <SelectItem value="$">$ USD</SelectItem>
                                <SelectItem value="£">£ GBP</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Advanced Settings - Collapsible */}
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-stone-400 hover:bg-stone-50 border-t border-stone-100 transition-colors">
                    <span>Advanced Batch Controls</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="p-4 pt-2 space-y-4 border-t border-stone-100 bg-stone-50/50">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <Label className="text-xs text-stone-500">Batch No.</Label>
                                <Input
                                    value={settings.batchNumber}
                                    onChange={(e) => onUpdateSettings("batchNumber", e.target.value)}
                                    placeholder="BT-2024-001"
                                    className="h-11 border-stone-200 bg-white"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-xs text-stone-500">Wastage allowance %</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    max="100"
                                    step="0.1"
                                    value={settings.wastagePercent || ""}
                                    onChange={(e) => onUpdateSettings("wastagePercent", parseFloat(e.target.value) || 0)}
                                    placeholder="0"
                                    className="h-11 border-stone-200 bg-white"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <Label className="text-xs text-stone-500">Target Purchase Price ({settings.currency})</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={settings.targetPricePerKg || ""}
                                    onChange={(e) => onUpdateSettings("targetPricePerKg", parseFloat(e.target.value) || 0)}
                                    placeholder="0"
                                    className="h-11 border-stone-200 bg-white font-bold text-tea-700"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label className="text-xs text-stone-500">Calculation Decimals</Label>
                                <Select
                                    value={settings.roundToDecimals.toString()}
                                    onValueChange={(value) => onUpdateSettings("roundToDecimals", parseInt(value))}
                                >
                                    <SelectTrigger className="h-11 border-stone-200 bg-white">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">Whole (0)</SelectItem>
                                        <SelectItem value="1">1 place</SelectItem>
                                        <SelectItem value="2">2 places</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
};

export default BlendSettings;
