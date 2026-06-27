import React from 'react';
import { motion } from 'framer-motion';
import { Filter, X, Zap, Wind, Clock, Coffee } from 'lucide-react';
import { Strength, BrewSpeed, UseCase, strengthLabels, brewSpeedLabels, useCaseLabels } from '@/data/teaGrades';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FilterBarProps {
    activeFilters: {
        strength: Strength[];
        brewSpeed: BrewSpeed[];
        useCase: UseCase[];
    };
    onToggleFilter: (type: 'strength' | 'brewSpeed' | 'useCase', value: string) => void;
    onClearFilters: () => void;
    hasActiveFilters: boolean;
}

export function FilterBar({
    activeFilters,
    onToggleFilter,
    onClearFilters,
    hasActiveFilters
}: FilterBarProps) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Strength Filters */}
                <FilterGroup
                    icon={<Zap className="w-4 h-4" />}
                    label="Body & Strength"
                    options={Object.entries(strengthLabels) as [Strength, string][]}
                    activeValues={activeFilters.strength}
                    onToggle={(value) => onToggleFilter('strength', value)}
                />

                {/* Brew Speed Filters */}
                <FilterGroup
                    icon={<Clock className="w-4 h-4" />}
                    label="Infusion Speed"
                    options={Object.entries(brewSpeedLabels) as [BrewSpeed, string][]}
                    activeValues={activeFilters.brewSpeed}
                    onToggle={(value) => onToggleFilter('brewSpeed', value)}
                />

                {/* Use Case Filters */}
                <FilterGroup
                    icon={<Coffee className="w-4 h-4" />}
                    label="Application"
                    options={Object.entries(useCaseLabels) as [UseCase, string][]}
                    activeValues={activeFilters.useCase}
                    onToggle={(value) => onToggleFilter('useCase', value)}
                />
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-end pt-2 border-t border-stone-100"
                >
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClearFilters}
                        className="text-stone-400 hover:text-red-600 hover:bg-red-50 font-bold text-[10px] uppercase tracking-widest"
                    >
                        <X className="w-3.5 h-3.5 mr-1.5" />
                        Reset all selections
                    </Button>
                </motion.div>
            )}
        </div>
    );
}

interface FilterGroupProps<T extends string> {
    icon: React.ReactNode;
    label: string;
    options: [T, string][];
    activeValues: T[];
    onToggle: (value: T) => void;
}

function FilterGroup<T extends string>({
    icon,
    label,
    options,
    activeValues,
    onToggle
}: FilterGroupProps<T>) {
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
                <span className="text-brand-gold">{icon}</span>
                <span className="text-xs font-bold text-stone-900 uppercase tracking-widest">{label}</span>
            </div>
            <div className="flex flex-wrap gap-2">
                {options.map(([value, displayLabel]) => {
                    const isActive = activeValues.includes(value);
                    return (
                        <motion.button
                            key={value}
                            onClick={() => onToggle(value)}
                            className={cn(
                                "px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 border",
                                isActive
                                    ? "bg-tea-600 text-white border-tea-600 shadow-sm"
                                    : "bg-white text-stone-500 border-stone-200 hover:border-tea-400 hover:text-tea-700 hover:bg-tea-50/30"
                            )}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {displayLabel}
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
