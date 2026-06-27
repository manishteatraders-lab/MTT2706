import React from 'react';
import { motion } from 'framer-motion';
import {
    Leaf,
    Clock,
    Droplets,
    Wind,
    Star,
    X,
    ArrowLeftRight
} from 'lucide-react';
import { TeaGrade, strengthLabels, brewSpeedLabels, TeaCategory } from '@/data/teaGrades';
import { getTeaImage } from '@/data/teaImages';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ComparePanelProps {
    grades: TeaGrade[];
    onClose: () => void;
    onRemoveGrade: (grade: TeaGrade) => void;
}

const categoryColors: Record<TeaCategory, { bg: string; text: string; lightBg: string }> = {
    orthodox: {
        bg: 'bg-orthodox',
        text: 'text-orthodox',
        lightBg: 'bg-orthodox-light',
    },
    ctc: {
        bg: 'bg-ctc',
        text: 'text-ctc',
        lightBg: 'bg-ctc-light',
    },
    specialty: {
        bg: 'bg-specialty',
        text: 'text-specialty',
        lightBg: 'bg-specialty-light',
    }
};

export function ComparePanel({ grades, onClose, onRemoveGrade }: ComparePanelProps) {
    if (grades.length < 2) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="info-panel h-full flex flex-col items-center justify-center p-8 text-center bg-white"
            >
                <ArrowLeftRight className="w-16 h-16 text-stone-300 mb-4" />
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    Compare Selection
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                    Select two tea grades from the tree to compare their characteristics side by side.
                    <br />
                    <span className="text-brand-gold font-bold mt-2 inline-block">
                        {grades.length}/2 selected
                    </span>
                </p>
                <Button variant="outline" onClick={onClose} className="mt-8 border-stone-200">
                    Exit Comparison
                </Button>
            </motion.div>
        );
    }

    const [grade1, grade2] = grades;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="info-panel h-full flex flex-col overflow-hidden bg-white"
        >
            {/* Header */}
            <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
                <div className="flex items-center gap-2">
                    <ArrowLeftRight className="w-5 h-5 text-brand-gold" />
                    <h3 className="font-serif font-bold text-stone-900">
                        Side-by-Side Comparison
                    </h3>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-white border border-stone-100">
                    <X className="w-5 h-5" />
                </Button>
            </div>

            {/* Grade Headers with Images */}
            <div className="grid grid-cols-2 border-b border-stone-100">
                {[grade1, grade2].map((grade, i) => {
                    const colors = categoryColors[grade.category];
                    return (
                        <div
                            key={grade.id}
                            className={cn(
                                "relative overflow-hidden",
                                i === 0 && "border-r border-stone-100"
                            )}
                        >
                            {/* Tea Image */}
                            <div className="aspect-[4/3] relative overflow-hidden bg-stone-100">
                                <motion.img
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    src={getTeaImage(grade.category, grade.leafStyle)}
                                    alt={`${grade.fullName} tea leaves`}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                <button
                                    onClick={() => onRemoveGrade(grade)}
                                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 shadow-sm hover:bg-white transition-colors border border-stone-100 z-10"
                                >
                                    <X className="w-3 h-3 text-stone-400" />
                                </button>
                            </div>

                            {/* Grade Info */}
                            <div className="p-4 -mt-8 relative z-10">
                                <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full", colors.lightBg, colors.text, "border border-current/10")}>
                                    {grade.category}
                                </span>
                                <h4 className="text-xl font-serif font-bold text-stone-900 mt-2">
                                    {grade.code}
                                </h4>
                                <div className="flex gap-0.5 mt-1.5">
                                    {[1, 2, 3, 4, 5].map((j) => (
                                        <Star
                                            key={j}
                                            className={cn(
                                                "w-3.5 h-3.5",
                                                j <= grade.qualityTier
                                                    ? "text-brand-gold fill-brand-gold"
                                                    : "text-stone-200 fill-stone-100"
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Comparison Content */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
                <CompareRow
                    label="Leaf Size"
                    icon={<Leaf className="w-4 h-4" />}
                    values={[grade1.leafSize, grade2.leafSize]}
                />
                <CompareRow
                    label="Strength"
                    icon={<Wind className="w-4 h-4" />}
                    values={[strengthLabels[grade1.strength], strengthLabels[grade2.strength]]}
                    highlight={grade1.strength !== grade2.strength}
                />
                <CompareRow
                    label="Brewing Time"
                    icon={<Clock className="w-4 h-4" />}
                    values={[grade1.brewTime, grade2.brewTime]}
                />
                <CompareRow
                    label="Brew Speed"
                    values={[brewSpeedLabels[grade1.brewSpeed], brewSpeedLabels[grade2.brewSpeed]]}
                    highlight={grade1.brewSpeed !== grade2.brewSpeed}
                />
                <CompareRow
                    label="Liquor Color"
                    icon={<Droplets className="w-4 h-4" />}
                    values={[grade1.liquorColor, grade2.liquorColor]}
                />
                <CompareRow
                    label="Aroma Profile"
                    values={[grade1.aroma, grade2.aroma]}
                />

                {/* Flavor Notes */}
                <div className="border-b border-stone-100">
                    <div className="px-4 py-2 bg-stone-50">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Flavor Spectrum</span>
                    </div>
                    <div className="grid grid-cols-2">
                        {[grade1, grade2].map((grade, i) => (
                            <div
                                key={grade.id}
                                className={cn(
                                    "p-4",
                                    i === 0 && "border-r border-stone-100"
                                )}
                            >
                                <div className="flex flex-wrap gap-1.5">
                                    {grade.flavorNotes.map((note, j) => (
                                        <span
                                            key={j}
                                            className={cn(
                                                "px-2.5 py-0.5 rounded-full text-xs font-medium border border-current/10",
                                                categoryColors[grade.category].lightBg,
                                                categoryColors[grade.category].text
                                            )}
                                        >
                                            {note}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buyer Tips */}
                <div className="p-4 bg-stone-50/50">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-4">
                        Expert Recommendations
                    </span>
                    <div className="grid grid-cols-2 gap-4">
                        {[grade1, grade2].map((grade) => {
                            const colors = categoryColors[grade.category];
                            return (
                                <div
                                    key={grade.id}
                                    className={cn("p-4 rounded-xl text-xs leading-relaxed border border-stone-100", colors.lightBg)}
                                >
                                    <p className="text-stone-800 font-medium">{grade.buyerTip}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

interface CompareRowProps {
    label: string;
    icon?: React.ReactNode;
    values: [string, string];
    highlight?: boolean;
}

function CompareRow({ label, icon, values, highlight }: CompareRowProps) {
    return (
        <div className={cn("border-b border-stone-100", highlight && "bg-brand-gold/5")}>
            <div className="px-4 py-2 bg-stone-50 flex items-center gap-2">
                {icon && <span className="text-stone-400">{icon}</span>}
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{label}</span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-stone-100">
                {values.map((value, i) => (
                    <div
                        key={i}
                        className={cn(
                            "px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-stone-800",
                        )}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}
