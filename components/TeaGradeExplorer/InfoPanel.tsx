import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Leaf,
    Clock,
    Droplets,
    Wind,
    Coffee,
    Star,
    Lightbulb,
    X,
    MessageCircle,
    Thermometer,
    Timer,
    FlaskConical
} from 'lucide-react';
import { TeaGrade, strengthLabels, brewSpeedLabels, useCaseLabels, TeaCategory, getLeafStyleProgression } from '@/data/teaGrades';
import { getTeaImage } from '@/data/teaImages';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface InfoPanelProps {
    grade: TeaGrade;
    onClose: () => void;
}

const categoryColors: Record<TeaCategory, { bg: string; text: string; lightBg: string; gradient: string }> = {
    orthodox: {
        bg: 'bg-orthodox',
        text: 'text-orthodox',
        lightBg: 'bg-orthodox-light',
        gradient: 'from-orthodox/20 to-orthodox/5'
    },
    ctc: {
        bg: 'bg-ctc',
        text: 'text-ctc',
        lightBg: 'bg-ctc-light',
        gradient: 'from-ctc/20 to-ctc/5'
    },
    specialty: {
        bg: 'bg-specialty',
        text: 'text-specialty',
        lightBg: 'bg-specialty-light',
        gradient: 'from-specialty/20 to-specialty/5'
    }
};

const strengthColors: Record<string, string> = {
    'light': 'bg-green-50 text-green-700 border-green-100',
    'medium': 'bg-yellow-50 text-yellow-700 border-yellow-100',
    'strong': 'bg-orange-50 text-orange-700 border-orange-100',
    'very-strong': 'bg-red-50 text-red-700 border-red-100'
};

const brewingGuides: Record<TeaCategory, { temp: string; time: string; ratio: string }> = {
    orthodox: {
        temp: '90-95°C',
        time: '3-5 mins',
        ratio: '2g / 150ml'
    },
    ctc: {
        temp: '100°C',
        time: '2-3 mins',
        ratio: '2.5g / 150ml'
    },
    specialty: {
        temp: '80-85°C',
        time: '2-4 mins',
        ratio: '3g / 150ml'
    }
};

// Glossary mapping
const glossary: Record<string, string> = {
    'Tippy': 'High concentration of unopened leaf buds (tips), indicating superior quality.',
    'Brisk': 'A lively, refreshing quality in the tea liquor, as opposed to flat or soft.',
    'Muscatel': 'A distinctive grape-like flavor found in premium Darjeeling teas.',
    'Body': 'The weight and texture of the tea in the mouth.',
    'Liquor': 'The liquid resulting from brewing tea.',
    'Aroma': 'The fragrance of the brewed tea.',
    'Grainy': 'A desirable texture in CTC tea, indicating uniform and well-processed pellets.',
    'Bloom': 'A sign of good sorting and manufacturing, giving the dry leaf a healthy luster.'
};

function GlossaryTerm({ term }: { term: string }) {
    const definition = glossary[term];
    if (!definition) return <span>{term}</span>;

    return (
        <span className="group relative inline-block">
            <span className="cursor-help border-b border-dotted border-brand-gold/50 text-stone-900 font-medium">
                {term}
            </span>
            <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-stone-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 leading-tight shadow-xl">
                {definition}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-stone-900" />
            </span>
        </span>
    );
}

function renderDescription(text: string) {
    const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
    const pattern = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');

    const parts = text.split(pattern);

    return parts.map((part, i) => {
        const matchingTerm = terms.find(t => t.toLowerCase() === part.toLowerCase());
        if (matchingTerm) {
            return <React.Fragment key={i}><GlossaryTerm term={matchingTerm} /></React.Fragment>;
        }
        return part;
    });
}

export function InfoPanel({ grade, onClose }: InfoPanelProps) {
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
    const colors = categoryColors[grade.category];
    const progression = getLeafStyleProgression(grade.leafStyle);
    const teaImageUrl = getTeaImage(grade.category, grade.leafStyle);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="info-panel h-full flex flex-col bg-white"
            >
                {/* Header / Image Section - Fixed at top */}
                <div className="relative group overflow-hidden bg-stone-100 border-b border-stone-200">
                    <div
                        className="relative aspect-[4/3] sm:aspect-video overflow-hidden cursor-zoom-in"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <motion.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                            src={teaImageUrl}
                            alt={`${grade.fullName} tea leaves`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                                Full Inspection Mode
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white border border-stone-200 z-20 shadow-sm"
                        >
                            <X className="w-5 h-5" />
                        </Button>

                        <div className="absolute bottom-4 left-4 z-10">
                            <span className={cn(
                                "text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm border border-white/20 backdrop-blur-md",
                                colors.bg, "text-white"
                            )}>
                                {grade.category} • {grade.leafStyle}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Area - Takes up all remaining space */}
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    {/* Grade Info Section */}
                    <div className="px-6 py-8">
                        <div className="flex items-end justify-between gap-4">
                            <div>
                                <h2 className="text-4xl font-serif font-black text-stone-900 leading-none">
                                    {grade.code}
                                </h2>
                                <p className="text-base text-stone-500 font-bold mt-2 flex items-center gap-2">
                                    <Leaf className={cn("w-4 h-4", colors.text)} />
                                    {grade.fullName}
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-1.5">
                                <span className="text-[10px] text-stone-400 font-black uppercase tracking-tighter">Quality Tier</span>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star
                                            key={i}
                                            className={cn(
                                                "w-4 h-4",
                                                i <= grade.qualityTier
                                                    ? "text-brand-gold fill-brand-gold"
                                                    : "text-stone-200 fill-stone-100"
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Leaf Progression Bar */}
                        {['whole', 'broken', 'fannings', 'dust'].includes(grade.leafStyle) && (
                            <div className="mt-8">
                                <div className="flex items-center justify-between text-[10px] text-stone-400 mb-2 font-black uppercase tracking-widest">
                                    <span>Leaf Integrity</span>
                                    <span className={cn("px-2 py-0.5 rounded bg-stone-100", colors.text)}>{grade.leafStyle}</span>
                                </div>
                                <div className="progression-bar h-2.5 bg-stone-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progression}%` }}
                                        transition={{ duration: 0.8, ease: "circOut" }}
                                        className={cn("h-full", colors.bg)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <Separator className="bg-stone-100" />

                    {/* Detailed Content */}
                    <div className="px-6 py-8 space-y-10">
                        {/* Description */}
                        <div>
                            <p className="text-sm text-stone-700 leading-relaxed italic">
                                "{renderDescription(grade.description)}"
                            </p>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard
                                icon={<Leaf className="w-4 h-4" />}
                                label="Leaf Size"
                                value={grade.leafSize}
                            />
                            <StatCard
                                icon={<Droplets className="w-4 h-4" />}
                                label="Color"
                                value={grade.liquorColor}
                            />
                            <StatCard
                                icon={<Wind className="w-4 h-4" />}
                                label="Aroma"
                                value={grade.aroma}
                            />
                            <StatCard
                                icon={<Clock className="w-4 h-4" />}
                                label="Brew Time"
                                value={grade.brewTime}
                            />
                        </div>

                        {/* Body & Speed */}
                        <div className="flex flex-wrap gap-2">
                            <span className={cn(
                                "px-3 py-1.5 rounded-full text-xs font-bold border",
                                strengthColors[grade.strength]
                            )}>
                                {strengthLabels[grade.strength]} Body
                            </span>
                            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-stone-100 text-stone-600 border border-stone-200">
                                {brewSpeedLabels[grade.brewSpeed]}
                            </span>
                        </div>

                        {/* Flavor Profile */}
                        <div>
                            <h4 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                                <Coffee className="w-4 h-4 text-stone-400" />
                                Flavor Profile
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {grade.flavorNotes.map((note, i) => (
                                    <span
                                        key={i}
                                        className={cn("px-3 py-1 rounded-full text-xs font-medium", colors.lightBg, colors.text, "border border-current/10")}
                                    >
                                        {note}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Use Cases */}
                        <div>
                            <h4 className="text-sm font-bold text-stone-900 mb-3">
                                Usage Recommendation
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {grade.useCases.map((useCase) => (
                                    <span
                                        key={useCase}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-stone-50 text-stone-600 border border-stone-200"
                                    >
                                        {useCaseLabels[useCase]}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-stone-500 mt-3 leading-relaxed">
                                {grade.bestFor}
                            </p>
                        </div>

                        {/* Expert Tip */}
                        <div className={cn("p-5 rounded-xl border", "bg-stone-50 border-stone-200")}>
                            <div className="flex items-start gap-3">
                                <div className={cn("p-2 rounded-lg", colors.bg, "text-white shadow-sm")}>
                                    <Lightbulb className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className={cn("text-xs font-bold uppercase tracking-wider mb-1", colors.text)}>
                                        Expert Buyer Tip
                                    </h4>
                                    <p className="text-sm text-stone-800 leading-relaxed">
                                        {grade.buyerTip}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Brewing Methods */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                                <Thermometer className="w-4 h-4 text-stone-400" />
                                Professional Brewing Guide
                            </h4>
                            <div className="grid grid-cols-3 gap-3">
                                <BrewStat
                                    icon={<Thermometer className="w-3 h-3" />}
                                    label="Temp"
                                    value={brewingGuides[grade.category].temp}
                                />
                                <BrewStat
                                    icon={<Timer className="w-3 h-3" />}
                                    label="Time"
                                    value={brewingGuides[grade.category].time}
                                />
                                <BrewStat
                                    icon={<FlaskConical className="w-3 h-3" />}
                                    label="Ratio"
                                    value={brewingGuides[grade.category].ratio}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section - Fixed at bottom */}
                <div className="px-6 py-4 bg-white border-t border-stone-100 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]">
                    <Button
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-xl shadow-lg shadow-green-100 flex items-center justify-center gap-2 group transition-all"
                        onClick={() => {
                            const message = encodeURIComponent(
                                `Hello Manish Tea Traders, I am interested in [${grade.code}] - ${grade.fullName}. I saw this in your Tea Grade Explorer. Please provide pricing and sample details.`
                            );
                            window.open(`https://wa.me/917001958588?text=${message}`, '_blank');
                        }}
                    >
                        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-bold">Request Expert Sample</span>
                    </Button>
                    <p className="text-[10px] text-center text-stone-400 mt-2 font-medium">
                        Direct connection to our Siliguri quality control team
                    </p>
                </div>
            </motion.div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-stone-900/95 flex items-center justify-center p-4 sm:p-10"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 text-white hover:bg-white/10"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </Button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            src={teaImageUrl}
                            alt={grade.fullName}
                            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                        />
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 text-center">
                            High-Resolution Master Study
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function BrewStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="bg-stone-50 border border-stone-100 rounded-lg p-2 text-center">
            <div className="flex items-center justify-center gap-1 text-stone-400 mb-1">
                {icon}
                <span className="text-[8px] font-bold uppercase tracking-tighter">{label}</span>
            </div>
            <p className="text-xs font-bold text-stone-800">{value}</p>
        </div>
    );
}

interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

function StatCard({ icon, label, value }: StatCardProps) {
    return (
        <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
            <div className="flex items-center gap-2 text-stone-400 mb-1.5">
                {icon}
                <span className="text-[10px] font-bold uppercase tracking-tight">{label}</span>
            </div>
            <p className="text-sm font-semibold text-stone-800 line-clamp-2">
                {value}
            </p>
        </div>
    );
}
