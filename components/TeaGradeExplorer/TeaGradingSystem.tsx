"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeftRight,
    Filter,
    Leaf,
    BookOpen,
    ChevronDown,
    Search,
    X
} from 'lucide-react';
import { teaData, TeaGrade, Strength, BrewSpeed, UseCase } from '@/data/teaGrades';
import { TreeNode } from './TreeNode';
import { InfoPanel } from './InfoPanel';
import { ComparePanel } from './ComparePanel';
import { FilterBar } from './FilterBar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function TeaGradingSystem() {
    const [selectedGrade, setSelectedGrade] = useState<TeaGrade | null>(null);
    const [isCompareMode, setIsCompareMode] = useState(false);
    const [compareGrades, setCompareGrades] = useState<TeaGrade[]>([]);
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState<{
        strength: Strength[];
        brewSpeed: BrewSpeed[];
        useCase: UseCase[];
    }>({
        strength: [],
        brewSpeed: [],
        useCase: []
    });
    const [searchQuery, setSearchQuery] = useState('');

    const hasActiveFilters =
        filters.strength.length > 0 ||
        filters.brewSpeed.length > 0 ||
        filters.useCase.length > 0;

    // Filter tea data based on active filters and search query
    const filteredTeaData = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        const hasFilters = hasActiveFilters || query !== '';

        if (!hasFilters) return teaData;

        return teaData.map(category => ({
            ...category,
            leafStyles: category.leafStyles.map(style => ({
                ...style,
                grades: style.grades.filter(grade => {
                    // Filter matching
                    const matchesStrength = filters.strength.length === 0 ||
                        filters.strength.includes(grade.strength);
                    const matchesSpeed = filters.brewSpeed.length === 0 ||
                        filters.brewSpeed.includes(grade.brewSpeed);
                    const matchesUseCase = filters.useCase.length === 0 ||
                        grade.useCases.some(uc => filters.useCase.includes(uc));

                    // Search matching
                    const matchesSearch = query === '' ||
                        grade.code.toLowerCase().includes(query) ||
                        grade.fullName.toLowerCase().includes(query) ||
                        grade.description.toLowerCase().includes(query);

                    return matchesStrength && matchesSpeed && matchesUseCase && matchesSearch;
                })
            })).filter(style => style.grades.length > 0)
        })).filter(category => category.leafStyles.length > 0);
    }, [filters, hasActiveFilters, searchQuery]);

    const handleToggleFilter = (type: 'strength' | 'brewSpeed' | 'useCase', value: string) => {
        setFilters(prev => {
            const currentValues = prev[type] as string[];
            const newValues = currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value];
            return { ...prev, [type]: newValues };
        });
    };

    const handleClearFilters = () => {
        setFilters({ strength: [], brewSpeed: [], useCase: [] });
    };

    const handleToggleCompare = (grade: TeaGrade) => {
        setCompareGrades(prev => {
            const exists = prev.some(g => g.id === grade.id);
            if (exists) {
                return prev.filter(g => g.id !== grade.id);
            }
            if (prev.length >= 2) {
                return [prev[1], grade];
            }
            return [...prev, grade];
        });
    };

    const handleExitCompare = () => {
        setIsCompareMode(false);
        setCompareGrades([]);
    };

    const totalGrades = teaData.reduce((acc, cat) =>
        acc + cat.leafStyles.reduce((a, s) => a + s.grades.length, 0), 0
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-stone-50 border-b border-stone-100">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMmMtNS41MTQgMC0xMC00LjQ4Ni0xMC0xMHM0LjQ4Ni0xMCAxMC0xMCAxMCA0LjQ4NiAxMCAxMC00LjQ4NiAxMC0xMCAxMHoiIGZpbGw9IiNkNGFmMzciIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

                <div className="container max-w-7xl mx-auto px-4 py-16 sm:py-20 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-1 bg-brand-gold rounded-full" />
                            <span className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em]">
                                Tea Connoisseur's Guide
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-stone-900 leading-tight mb-6">
                            Indian Tea
                            <span className="block text-tea-600">Grading System</span>
                        </h1>

                        <p className="text-lg text-stone-600 max-w-2xl leading-relaxed mb-10">
                            Master the art of tea selection. Explore {totalGrades}+ distinct tea grades across Orthodox, CTC, and Specialty categories to find the perfect profile for your business or personal blend.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <StatBadge
                                label="Orthodox"
                                count={teaData[0].leafStyles.reduce((a, s) => a + s.grades.length, 0)}
                                color="bg-orthodox-light text-orthodox border-orthodox/10"
                            />
                            <StatBadge
                                label="CTC"
                                count={teaData[1].leafStyles.reduce((a, s) => a + s.grades.length, 0)}
                                color="bg-ctc-light text-ctc border-ctc/10"
                            />
                            <StatBadge
                                label="Specialty"
                                count={teaData[2].leafStyles.reduce((a, s) => a + s.grades.length, 0)}
                                color="bg-specialty-light text-specialty border-specialty/10"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-6 right-4 hidden lg:flex items-center gap-3 text-stone-400 rotate-90 origin-right"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest">Explore the Tree</span>
                        <div className="w-12 h-px bg-stone-200" />
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <div className="container max-w-7xl mx-auto px-4 py-12">
                {/* Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-6 mb-10 pb-6 border-b border-stone-100">
                    <div className="flex flex-wrap items-center gap-4 flex-1">
                        <div className="relative flex-1 max-w-md group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 group-focus-within:text-tea-600 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search grades (e.g. BOP, SFTGFOP1)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-10 pl-10 pr-10 bg-stone-50 border border-stone-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-tea-500/20 focus:border-tea-500 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-stone-200 rounded-full transition-colors"
                                >
                                    <X className="w-3 h-3 text-stone-500" />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                variant={showFilters ? "default" : "outline"}
                                size="sm"
                                onClick={() => setShowFilters(!showFilters)}
                                className={cn("gap-2 font-bold text-[10px] uppercase tracking-widest h-10 px-6", showFilters ? "bg-stone-900" : "border-stone-200 text-stone-600")}
                            >
                                <Filter className="w-3.5 h-3.5" />
                                Intelligence Filters
                                {hasActiveFilters && (
                                    <span className="ml-2 px-1.5 py-0.5 bg-brand-gold text-white text-[10px] rounded-full">
                                        {filters.strength.length + filters.brewSpeed.length + filters.useCase.length}
                                    </span>
                                )}
                            </Button>

                            <Button
                                variant={isCompareMode ? "default" : "outline"}
                                size="sm"
                                onClick={() => {
                                    if (isCompareMode) {
                                        handleExitCompare();
                                    } else {
                                        setIsCompareMode(true);
                                        setSelectedGrade(null);
                                    }
                                }}
                                className={cn("gap-2 font-bold text-[10px] uppercase tracking-widest h-10 px-6", isCompareMode ? "bg-brand-gold border-brand-gold" : "border-stone-200 text-stone-600")}
                            >
                                <ArrowLeftRight className="w-3.5 h-3.5" />
                                Compare Mode
                                {isCompareMode && compareGrades.length > 0 && (
                                    <span className="ml-2 px-1.5 py-0.5 bg-white text-brand-gold text-[10px] rounded-full">
                                        {compareGrades.length}/2
                                    </span>
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        <BookOpen className="w-4 h-4 text-brand-gold" />
                        <span>
                            {hasActiveFilters
                                ? `${filteredTeaData.reduce((a, c) => a + c.leafStyles.reduce((b, s) => b + s.grades.length, 0), 0)} results found`
                                : `${totalGrades} grades available`
                            }
                        </span>
                    </div>
                </div>

                {/* Filter Panel */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="overflow-hidden"
                        >
                            <div className="p-8 mb-10 bg-stone-50 rounded-2xl border border-stone-100 shadow-inner">
                                <FilterBar
                                    activeFilters={filters}
                                    onToggleFilter={handleToggleFilter}
                                    onClearFilters={handleClearFilters}
                                    hasActiveFilters={hasActiveFilters}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Grid */}
                <div className="flex gap-12">
                    {/* Tree View */}
                    <div className={cn(
                        "flex-1 space-y-6 transition-all duration-300",
                        (selectedGrade || isCompareMode) && "lg:pr-0"
                    )}>
                        {filteredTeaData.length > 0 ? (
                            filteredTeaData.map((category, index) => (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <TreeNode
                                        category={category}
                                        onSelectGrade={setSelectedGrade}
                                        selectedGrade={selectedGrade}
                                        isCompareMode={isCompareMode}
                                        compareGrades={compareGrades}
                                        onToggleCompare={handleToggleCompare}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-24 bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200">
                                <Filter className="w-16 h-16 text-stone-200 mx-auto mb-6" />
                                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
                                    No Matching Grades
                                </h3>
                                <p className="text-stone-500 mb-8 max-w-xs mx-auto">
                                    Try broadening your search parameters to explore more tea types.
                                </p>
                                <Button variant="outline" onClick={handleClearFilters} className="border-stone-300 text-stone-600 font-bold uppercase tracking-widest text-[10px]">
                                    Clear All Intelligence Filters
                                </Button>
                            </div>
                        )}

                        {/* Buyer Tip Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-16 p-8 bg-stone-900 rounded-3xl border border-stone-800 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-brand-gold/10 transition-colors duration-500" />

                            <div className="flex items-start gap-6 relative z-10">
                                <div className="p-4 bg-brand-gold rounded-2xl text-white shadow-lg">
                                    <Leaf className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-2xl text-white mb-3">
                                        Pro-Buyer Intelligence
                                    </h3>
                                    <p className="text-stone-400 leading-relaxed text-lg">
                                        <strong className="text-brand-gold">Grade ≠ Strength.</strong>
                                        {" "}In the tea industry, a higher grade signifies superior leaf integrity, careful processing, and complex flavor notes. It does not dictate caffeine levels or "punch". Choose based on your intended <span className="text-white italic">brewing vessel</span> and <span className="text-white italic">market segment</span>.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Side Panel */}
                    <AnimatePresence mode="wait">
                        {(selectedGrade || isCompareMode) && (
                            <motion.div
                                initial={{ width: 0, opacity: 0, x: 20 }}
                                animate={{ width: 420, opacity: 1, x: 0 }}
                                exit={{ width: 0, opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className="hidden lg:block flex-shrink-0 sticky top-24 h-[calc(100vh-8rem)]"
                            >
                                {isCompareMode ? (
                                    <ComparePanel
                                        grades={compareGrades}
                                        onClose={handleExitCompare}
                                        onRemoveGrade={(grade) => setCompareGrades(prev => prev.filter(g => g.id !== grade.id))}
                                    />
                                ) : selectedGrade ? (
                                    <InfoPanel
                                        grade={selectedGrade}
                                        onClose={() => setSelectedGrade(null)}
                                    />
                                ) : null}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile Panel */}
                <AnimatePresence>
                    {(selectedGrade || isCompareMode) && (
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="lg:hidden fixed inset-x-0 bottom-0 z-50 max-h-[90vh] overflow-hidden rounded-t-[2.5rem] shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.25)] border-t border-stone-200"
                        >
                            <div className="bg-white h-full overflow-y-auto">
                                <div className="sticky top-0 bg-white/80 backdrop-blur-md pt-5 pb-3 flex justify-center z-20 border-b border-stone-50">
                                    <div className="w-12 h-1.5 rounded-full bg-stone-200" />
                                </div>

                                <div className="pb-10">
                                    {isCompareMode ? (
                                        <ComparePanel
                                            grades={compareGrades}
                                            onClose={handleExitCompare}
                                            onRemoveGrade={(grade) => setCompareGrades(prev => prev.filter(g => g.id !== grade.id))}
                                        />
                                    ) : selectedGrade ? (
                                        <InfoPanel
                                            grade={selectedGrade}
                                            onClose={() => setSelectedGrade(null)}
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function StatBadge({ label, count, color }: { label: string; count: number; color: string }) {
    return (
        <div className={cn("px-5 py-2.5 rounded-2xl flex items-center gap-3 border shadow-sm transition-all hover:shadow-md", color)}>
            <span className="font-black text-lg">{count}</span>
            <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
        </div>
    );
}
