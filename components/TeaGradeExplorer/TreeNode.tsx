import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Leaf } from 'lucide-react';
import { TeaCategoryData, LeafStyleGroup, TeaGrade, TeaCategory } from '@/data/teaGrades';
import { cn } from '@/lib/utils';

interface TreeNodeProps {
    category: TeaCategoryData;
    onSelectGrade: (grade: TeaGrade) => void;
    selectedGrade: TeaGrade | null;
    isCompareMode: boolean;
    compareGrades: TeaGrade[];
    onToggleCompare: (grade: TeaGrade) => void;
}

const categoryColors: Record<TeaCategory, { bg: string; border: string; text: string; lightBg: string }> = {
    orthodox: {
        bg: 'bg-orthodox',
        border: 'border-orthodox',
        text: 'text-orthodox',
        lightBg: 'bg-orthodox-light'
    },
    ctc: {
        bg: 'bg-ctc',
        border: 'border-ctc',
        text: 'text-ctc',
        lightBg: 'bg-ctc-light'
    },
    specialty: {
        bg: 'bg-specialty',
        border: 'border-specialty',
        text: 'text-specialty',
        lightBg: 'bg-specialty-light'
    }
};

export function TreeNode({
    category,
    onSelectGrade,
    selectedGrade,
    isCompareMode,
    compareGrades,
    onToggleCompare
}: TreeNodeProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const colors = categoryColors[category.id];

    return (
        <div className="tree-node">
            {/* Category Header */}
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    "w-full flex items-center gap-4 p-5 rounded-xl transition-all duration-300",
                    colors.lightBg,
                    "border-2",
                    isExpanded ? colors.border : "border-transparent",
                    "hover:shadow-tea-medium group"
                )}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
            >
                <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn("p-2 rounded-lg", colors.bg, "text-white")}
                >
                    <ChevronRight className="w-5 h-5" />
                </motion.div>

                <span className="text-3xl">{category.icon}</span>

                <div className="flex-1 text-left">
                    <h3 className={cn("text-xl font-serif font-semibold", colors.text)}>
                        {category.name}
                    </h3>
                    <p className="text-sm text-stone-500">{category.tagline}</p>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs">
                    {category.bestFor.slice(0, 2).map((use, i) => (
                        <span key={i} className={cn("px-2 py-1 rounded-full", colors.lightBg, colors.text)}>
                            {use}
                        </span>
                    ))}
                </div>
            </motion.button>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 pl-6 sm:pl-12 space-y-4">
                            {/* Category Description */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="p-4 bg-white rounded-lg border border-stone-200"
                            >
                                <p className="text-sm text-stone-600">{category.description}</p>
                                <p className="mt-2 text-sm">
                                    <span className="font-medium text-stone-900">Taste:</span>{" "}
                                    <span className="text-stone-700">{category.taste}</span>
                                </p>
                            </motion.div>

                            {/* Leaf Styles */}
                            {category.leafStyles.map((style, styleIndex) => (
                                <LeafStyleNode
                                    key={style.id}
                                    style={style}
                                    category={category.id}
                                    colors={colors}
                                    onSelectGrade={onSelectGrade}
                                    selectedGrade={selectedGrade}
                                    isCompareMode={isCompareMode}
                                    compareGrades={compareGrades}
                                    onToggleCompare={onToggleCompare}
                                    delay={0.15 + styleIndex * 0.05}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface LeafStyleNodeProps {
    style: LeafStyleGroup;
    category: TeaCategory;
    colors: typeof categoryColors[TeaCategory];
    onSelectGrade: (grade: TeaGrade) => void;
    selectedGrade: TeaGrade | null;
    isCompareMode: boolean;
    compareGrades: TeaGrade[];
    onToggleCompare: (grade: TeaGrade) => void;
    delay: number;
}

function LeafStyleNode({
    style,
    category,
    colors,
    onSelectGrade,
    selectedGrade,
    isCompareMode,
    compareGrades,
    onToggleCompare,
    delay
}: LeafStyleNodeProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay }}
        >
            {/* Leaf Style Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    "w-full flex items-center gap-3 p-4 rounded-lg transition-all duration-200",
                    "bg-white hover:bg-stone-50 border border-stone-200",
                    isExpanded && "border-stone-300 shadow-sm"
                )}
            >
                <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-stone-400"
                >
                    <ChevronRight className="w-4 h-4" />
                </motion.div>

                <span className="text-xl">{style.icon}</span>

                <div className="flex-1 text-left">
                    <h4 className="font-medium text-stone-900">{style.name}</h4>
                    <p className="text-xs text-stone-500 line-clamp-1">{style.description}</p>
                </div>

                <span className="text-xs text-stone-400">
                    {style.grades.length} grades
                </span>
            </button>

            {/* Grades */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-2 pl-6 sm:pl-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {style.grades.map((grade, gradeIndex) => {
                                const isSelected = selectedGrade?.id === grade.id;
                                const isInCompare = compareGrades.some(g => g.id === grade.id);

                                return (
                                    <motion.button
                                        key={grade.id}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: gradeIndex * 0.03 }}
                                        onClick={() => {
                                            if (isCompareMode) {
                                                onToggleCompare(grade);
                                            } else {
                                                onSelectGrade(grade);
                                            }
                                        }}
                                        className={cn(
                                            "flex items-center gap-2 p-3 rounded-lg text-left transition-all duration-200",
                                            "border hover:shadow-tea-card",
                                            isSelected && !isCompareMode && cn(colors.lightBg, colors.border),
                                            isInCompare && "ring-2 ring-brand-gold",
                                            !isSelected && !isInCompare && "bg-background border-stone-200 hover:border-stone-300"
                                        )}
                                    >
                                        <Leaf className={cn("w-4 h-4 flex-shrink-0", colors.text)} />
                                        <div className="flex-1 min-w-0">
                                            <span className="font-mono font-medium text-sm text-stone-900">
                                                {grade.code}
                                            </span>
                                            <div className="flex items-center gap-1 mt-0.5">
                                                <QualityDots tier={grade.qualityTier} color={colors.text} />
                                            </div>
                                        </div>
                                        {isCompareMode && isInCompare && (
                                            <span className="text-xs bg-brand-gold text-white px-2 py-0.5 rounded-full">
                                                ✓
                                            </span>
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function QualityDots({ tier, color }: { tier: number; color: string }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <div
                    key={i}
                    className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        i <= tier ? color.replace('text-', 'bg-') : "bg-stone-200"
                    )}
                />
            ))}
        </div>
    );
}
