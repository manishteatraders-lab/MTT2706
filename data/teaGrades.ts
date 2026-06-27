export type TeaCategory = 'orthodox' | 'ctc' | 'specialty';
export type LeafStyle = 'whole' | 'broken' | 'fannings' | 'dust' | 'white' | 'green' | 'oolong';
export type Strength = 'light' | 'medium' | 'strong' | 'very-strong';
export type BrewSpeed = 'slow' | 'medium' | 'fast' | 'very-fast';
export type UseCase = 'pure-tasting' | 'daily-premium' | 'milk-tea' | 'chai' | 'tea-bags' | 'gifting' | 'wellness' | 'commercial';

export interface TeaGrade {
    id: string;
    code: string;
    fullName: string;
    description: string;
    leafSize: string;
    appearance: string;
    strength: Strength;
    liquorColor: string;
    aroma: string;
    flavorNotes: string[];
    brewTime: string;
    brewSpeed: BrewSpeed;
    useCases: UseCase[];
    bestFor: string;
    buyerTip: string;
    category: TeaCategory;
    leafStyle: LeafStyle;
    qualityTier: number; // 1-5, 5 being highest
}

export interface LeafStyleGroup {
    id: string;
    name: string;
    description: string;
    icon: string;
    grades: TeaGrade[];
}

export interface TeaCategoryData {
    id: TeaCategory;
    name: string;
    tagline: string;
    description: string;
    bestFor: string[];
    taste: string;
    icon: string;
    leafStyles: LeafStyleGroup[];
}

export const teaData: TeaCategoryData[] = [
    {
        id: 'orthodox',
        name: 'Orthodox Tea',
        tagline: 'Traditional Whole-Leaf Teas',
        description: 'Traditionally processed teas that preserve the natural leaf shape, offering complex and layered flavors.',
        bestFor: ['Premium drinking', 'Aroma lovers', 'Loose-leaf buyers'],
        taste: 'Complex, smooth, layered flavors',
        icon: '🌿',
        leafStyles: [
            {
                id: 'whole-leaf',
                name: 'Whole Leaf',
                description: 'High aroma, low bitterness. Best for pure tasting, gifting, and slow brewing.',
                icon: '🍃',
                grades: [
                    {
                        id: 'sftgfop1',
                        code: 'SFTGFOP1',
                        fullName: 'Special Finest Tippy Golden Flowery Orange Pekoe 1',
                        description: 'The pinnacle of tea grading. Contains the finest top leaves and abundant golden tips.',
                        leafSize: 'Large, full leaves with tips',
                        appearance: 'Twisted leaves with golden tips visible',
                        strength: 'light',
                        liquorColor: 'Pale gold to bright amber',
                        aroma: 'Highly aromatic, floral, muscatel',
                        flavorNotes: ['Muscatel', 'Floral', 'Honey', 'Stone fruit'],
                        brewTime: '4-5 minutes',
                        brewSpeed: 'slow',
                        useCases: ['pure-tasting', 'gifting'],
                        bestFor: 'Luxury & specialty teas, connoisseurs',
                        buyerTip: 'Ideal for special occasions. Brew without milk to appreciate full complexity.',
                        category: 'orthodox',
                        leafStyle: 'whole',
                        qualityTier: 5
                    },
                    {
                        id: 'ftgfop1',
                        code: 'FTGFOP1',
                        fullName: 'Finest Tippy Golden Flowery Orange Pekoe 1',
                        description: 'Premium grade with excellent tip content and superior flavor profile.',
                        leafSize: 'Large, well-formed leaves',
                        appearance: 'Long twisted leaves with golden tips',
                        strength: 'light',
                        liquorColor: 'Bright golden amber',
                        aroma: 'Aromatic, fruity, delicate',
                        flavorNotes: ['Grape', 'Floral', 'Citrus', 'Sweet'],
                        brewTime: '4-5 minutes',
                        brewSpeed: 'slow',
                        useCases: ['pure-tasting', 'gifting', 'daily-premium'],
                        bestFor: 'Premium daily drinking, gift giving',
                        buyerTip: 'Great balance of quality and value for everyday luxury.',
                        category: 'orthodox',
                        leafStyle: 'whole',
                        qualityTier: 5
                    },
                    {
                        id: 'tgfop',
                        code: 'TGFOP',
                        fullName: 'Tippy Golden Flowery Orange Pekoe',
                        description: 'High-quality grade with good tip content, balanced aroma and body.',
                        leafSize: 'Medium-large leaves',
                        appearance: 'Twisted leaves with some golden tips',
                        strength: 'medium',
                        liquorColor: 'Rich amber',
                        aroma: 'Balanced, malty, sweet',
                        flavorNotes: ['Malt', 'Honey', 'Floral', 'Nutty'],
                        brewTime: '3-4 minutes',
                        brewSpeed: 'medium',
                        useCases: ['daily-premium', 'pure-tasting'],
                        bestFor: 'Daily premium drinking',
                        buyerTip: 'Perfect everyday tea that works black or with a splash of milk.',
                        category: 'orthodox',
                        leafStyle: 'whole',
                        qualityTier: 4
                    },
                    {
                        id: 'gfop',
                        code: 'GFOP',
                        fullName: 'Golden Flowery Orange Pekoe',
                        description: 'Quality grade with some tip presence, good for regular premium drinking.',
                        leafSize: 'Medium leaves',
                        appearance: 'Well-rolled leaves with occasional tips',
                        strength: 'medium',
                        liquorColor: 'Amber to copper',
                        aroma: 'Smooth, malty',
                        flavorNotes: ['Malt', 'Bread', 'Light fruit'],
                        brewTime: '3-4 minutes',
                        brewSpeed: 'medium',
                        useCases: ['daily-premium'],
                        bestFor: 'Regular premium consumption',
                        buyerTip: 'Reliable quality for those who drink tea throughout the day.',
                        category: 'orthodox',
                        leafStyle: 'whole',
                        qualityTier: 4
                    },
                    {
                        id: 'fop',
                        code: 'FOP',
                        fullName: 'Flowery Orange Pekoe',
                        description: 'Standard whole leaf grade with pleasant, mild characteristics.',
                        leafSize: 'Medium leaves',
                        appearance: 'Rolled whole leaves',
                        strength: 'light',
                        liquorColor: 'Light amber',
                        aroma: 'Mild, pleasant',
                        flavorNotes: ['Light malt', 'Grass', 'Sweet'],
                        brewTime: '3-4 minutes',
                        brewSpeed: 'medium',
                        useCases: ['daily-premium', 'pure-tasting'],
                        bestFor: 'Mild tea lovers',
                        buyerTip: 'Great starter tea for those new to orthodox teas.',
                        category: 'orthodox',
                        leafStyle: 'whole',
                        qualityTier: 3
                    },
                    {
                        id: 'op',
                        code: 'OP',
                        fullName: 'Orange Pekoe',
                        description: 'Standard grade whole leaf, larger leaves with lighter, cleaner taste.',
                        leafSize: 'Larger leaves',
                        appearance: 'Long, wiry leaves',
                        strength: 'light',
                        liquorColor: 'Light to medium amber',
                        aroma: 'Clean, subtle',
                        flavorNotes: ['Clean', 'Light', 'Slightly sweet'],
                        brewTime: '3-5 minutes',
                        brewSpeed: 'slow',
                        useCases: ['pure-tasting'],
                        bestFor: 'Light tea preference, afternoon tea',
                        buyerTip: 'Perfect for those who prefer a gentler, less assertive cup.',
                        category: 'orthodox',
                        leafStyle: 'whole',
                        qualityTier: 3
                    },
                    {
                        id: 'pekoe',
                        code: 'Pekoe',
                        fullName: 'Pekoe',
                        description: 'Basic whole leaf grade, short leaves with straightforward taste.',
                        leafSize: 'Smaller whole leaves',
                        appearance: 'Short, rolled leaves',
                        strength: 'light',
                        liquorColor: 'Light amber',
                        aroma: 'Mild, clean',
                        flavorNotes: ['Clean', 'Simple', 'Light'],
                        brewTime: '3-4 minutes',
                        brewSpeed: 'medium',
                        useCases: ['daily-premium'],
                        bestFor: 'Everyday light drinking',
                        buyerTip: 'Good value entry point into orthodox teas.',
                        category: 'orthodox',
                        leafStyle: 'whole',
                        qualityTier: 2
                    }
                ]
            },
            {
                id: 'broken-leaf',
                name: 'Broken Leaf',
                description: 'Stronger, fuller body. Best for regular tea drinkers who want strength with aroma.',
                icon: '🍂',
                grades: [
                    {
                        id: 'tgbop',
                        code: 'TGBOP',
                        fullName: 'Tippy Golden Broken Orange Pekoe',
                        description: 'Premium broken grade with tips, offering strength with refined character.',
                        leafSize: 'Broken pieces with tips',
                        appearance: 'Small pieces with visible golden tips',
                        strength: 'medium',
                        liquorColor: 'Rich copper',
                        aroma: 'Strong yet aromatic',
                        flavorNotes: ['Malt', 'Brisk', 'Honey'],
                        brewTime: '2-3 minutes',
                        brewSpeed: 'medium',
                        useCases: ['daily-premium', 'milk-tea'],
                        bestFor: 'Premium daily tea with or without milk',
                        buyerTip: 'Best of both worlds - strength and sophistication.',
                        category: 'orthodox',
                        leafStyle: 'broken',
                        qualityTier: 4
                    },
                    {
                        id: 'gfbop',
                        code: 'GFBOP',
                        fullName: 'Golden Flowery Broken Orange Pekoe',
                        description: 'Quality broken leaf with good body and pleasant aroma.',
                        leafSize: 'Even broken pieces',
                        appearance: 'Uniform broken leaves',
                        strength: 'medium',
                        liquorColor: 'Bright copper',
                        aroma: 'Balanced, malty',
                        flavorNotes: ['Malt', 'Toast', 'Smooth'],
                        brewTime: '2-3 minutes',
                        brewSpeed: 'medium',
                        useCases: ['daily-premium', 'milk-tea'],
                        bestFor: 'Daily drinking with character',
                        buyerTip: 'Excellent for morning tea ritual.',
                        category: 'orthodox',
                        leafStyle: 'broken',
                        qualityTier: 3
                    },
                    {
                        id: 'fbop',
                        code: 'FBOP',
                        fullName: 'Flowery Broken Orange Pekoe',
                        description: 'Strong broken grade with floral notes, great with milk.',
                        leafSize: 'Small broken pieces',
                        appearance: 'Uniform small particles',
                        strength: 'strong',
                        liquorColor: 'Deep copper to red',
                        aroma: 'Bold, slightly floral',
                        flavorNotes: ['Bold', 'Brisk', 'Floral hints'],
                        brewTime: '2-3 minutes',
                        brewSpeed: 'fast',
                        useCases: ['milk-tea', 'chai'],
                        bestFor: 'Milk tea, bold brews',
                        buyerTip: 'Add milk to balance the strength.',
                        category: 'orthodox',
                        leafStyle: 'broken',
                        qualityTier: 3
                    },
                    {
                        id: 'bop',
                        code: 'BOP',
                        fullName: 'Broken Orange Pekoe',
                        description: 'Standard broken grade, reliable strength and color.',
                        leafSize: 'Small broken pieces',
                        appearance: 'Even, small particles',
                        strength: 'strong',
                        liquorColor: 'Deep reddish copper',
                        aroma: 'Strong, straightforward',
                        flavorNotes: ['Bold', 'Malty', 'Astringent'],
                        brewTime: '2-3 minutes',
                        brewSpeed: 'fast',
                        useCases: ['milk-tea', 'chai'],
                        bestFor: 'Strong tea with milk',
                        buyerTip: 'Classic choice for those who like their tea strong.',
                        category: 'orthodox',
                        leafStyle: 'broken',
                        qualityTier: 2
                    },
                    {
                        id: 'bop1',
                        code: 'BOP1',
                        fullName: 'Broken Orange Pekoe 1',
                        description: 'Slightly finer BOP grade, faster brewing with consistent strength.',
                        leafSize: 'Fine broken pieces',
                        appearance: 'Small, uniform particles',
                        strength: 'strong',
                        liquorColor: 'Deep copper',
                        aroma: 'Robust, clean',
                        flavorNotes: ['Strong', 'Clean', 'Brisk'],
                        brewTime: '2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['milk-tea', 'chai'],
                        bestFor: 'Quick strong brew',
                        buyerTip: 'Fast and reliable when you need a strong cup quickly.',
                        category: 'orthodox',
                        leafStyle: 'broken',
                        qualityTier: 2
                    }
                ]
            },
            {
                id: 'fannings',
                name: 'Fannings',
                description: 'Fast brewing, strong cup. Best for quick brewing and robust flavor.',
                icon: '🌾',
                grades: [
                    {
                        id: 'gof',
                        code: 'GOF',
                        fullName: 'Golden Orange Fannings',
                        description: 'Premium fannings with some golden character, strong but smooth.',
                        leafSize: 'Very small particles',
                        appearance: 'Fine, even particles',
                        strength: 'strong',
                        liquorColor: 'Deep amber to copper',
                        aroma: 'Strong, slightly sweet',
                        flavorNotes: ['Strong', 'Smooth', 'Malty'],
                        brewTime: '1-2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['tea-bags', 'chai'],
                        bestFor: 'Quality tea bags, strong brew',
                        buyerTip: 'Higher quality fannings for better tea bag experience.',
                        category: 'orthodox',
                        leafStyle: 'fannings',
                        qualityTier: 2
                    },
                    {
                        id: 'fof',
                        code: 'FOF',
                        fullName: 'Flowery Orange Fannings',
                        description: 'Standard fannings grade with good color extraction.',
                        leafSize: 'Fine particles',
                        appearance: 'Small, uniform fannings',
                        strength: 'strong',
                        liquorColor: 'Quick copper color',
                        aroma: 'Bold, direct',
                        flavorNotes: ['Bold', 'Quick', 'Strong'],
                        brewTime: '1-2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['tea-bags', 'commercial'],
                        bestFor: 'Commercial tea bags',
                        buyerTip: 'Standard grade for everyday tea bags.',
                        category: 'orthodox',
                        leafStyle: 'fannings',
                        qualityTier: 2
                    }
                ]
            },
            {
                id: 'dust',
                name: 'Dust',
                description: 'Maximum strength and color. Best for very strong tea and quick preparation.',
                icon: '💨',
                grades: [
                    {
                        id: 'opd',
                        code: 'OPD',
                        fullName: 'Orange Pekoe Dust',
                        description: 'Fine dust grade with intense color and strength.',
                        leafSize: 'Very fine particles',
                        appearance: 'Powder-like consistency',
                        strength: 'very-strong',
                        liquorColor: 'Instant deep color',
                        aroma: 'Intense, bold',
                        flavorNotes: ['Intense', 'Bold', 'Astringent'],
                        brewTime: 'Under 1 minute',
                        brewSpeed: 'very-fast',
                        useCases: ['commercial', 'chai'],
                        bestFor: 'Commercial use, instant color',
                        buyerTip: 'Maximum strength in minimum time.',
                        category: 'orthodox',
                        leafStyle: 'dust',
                        qualityTier: 1
                    },
                    {
                        id: 'od',
                        code: 'OD',
                        fullName: 'Orthodox Dust',
                        description: 'Standard dust grade for maximum extraction.',
                        leafSize: 'Finest particles',
                        appearance: 'Fine powder',
                        strength: 'very-strong',
                        liquorColor: 'Instant dark',
                        aroma: 'Very strong',
                        flavorNotes: ['Maximum strength', 'Dark', 'Bold'],
                        brewTime: 'Under 1 minute',
                        brewSpeed: 'very-fast',
                        useCases: ['commercial'],
                        bestFor: 'Bulk commercial use',
                        buyerTip: 'Best for high-volume commercial operations.',
                        category: 'orthodox',
                        leafStyle: 'dust',
                        qualityTier: 1
                    }
                ]
            }
        ]
    },
    {
        id: 'ctc',
        name: 'CTC Tea',
        tagline: 'Crush-Tear-Curl',
        description: 'Machine-processed tea designed for bold strength, fast color, and excellent value.',
        bestFor: ['Masala chai', 'Milk tea', 'Tea bags'],
        taste: 'Bold, strong, fast color',
        icon: '☕',
        leafStyles: [
            {
                id: 'broken-ctc',
                name: 'Broken CTC',
                description: 'Standard loose CTC tea with balanced strength and color.',
                icon: '⚫',
                grades: [
                    {
                        id: 'bp',
                        code: 'BP',
                        fullName: 'Broken Pekoe',
                        description: 'Standard CTC broken grade with good balance.',
                        leafSize: 'Small granules',
                        appearance: 'Round, dark granules',
                        strength: 'strong',
                        liquorColor: 'Rich copper-red',
                        aroma: 'Bold, malty',
                        flavorNotes: ['Malty', 'Strong', 'Brisk'],
                        brewTime: '2-3 minutes',
                        brewSpeed: 'fast',
                        useCases: ['chai', 'milk-tea'],
                        bestFor: 'Everyday chai, milk tea',
                        buyerTip: 'Most popular grade for Indian households.',
                        category: 'ctc',
                        leafStyle: 'broken',
                        qualityTier: 3
                    },
                    {
                        id: 'bp1',
                        code: 'BP1',
                        fullName: 'Broken Pekoe 1',
                        description: 'Slightly finer BP with enhanced color extraction.',
                        leafSize: 'Fine granules',
                        appearance: 'Uniform dark balls',
                        strength: 'strong',
                        liquorColor: 'Deep reddish-brown',
                        aroma: 'Bold, direct',
                        flavorNotes: ['Strong', 'Quick color', 'Bold'],
                        brewTime: '2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['chai', 'milk-tea'],
                        bestFor: 'Quick chai brewing',
                        buyerTip: 'Faster color release than standard BP.',
                        category: 'ctc',
                        leafStyle: 'broken',
                        qualityTier: 3
                    },
                    {
                        id: 'bp2',
                        code: 'BP2',
                        fullName: 'Broken Pekoe 2',
                        description: 'Economical CTC grade with reliable performance.',
                        leafSize: 'Mixed granules',
                        appearance: 'Varied size granules',
                        strength: 'medium',
                        liquorColor: 'Copper-brown',
                        aroma: 'Moderate, clean',
                        flavorNotes: ['Balanced', 'Moderate', 'Clean'],
                        brewTime: '2-3 minutes',
                        brewSpeed: 'medium',
                        useCases: ['chai', 'milk-tea'],
                        bestFor: 'Budget-friendly daily tea',
                        buyerTip: 'Good value for everyday consumption.',
                        category: 'ctc',
                        leafStyle: 'broken',
                        qualityTier: 2
                    },
                    {
                        id: 'bop-ctc',
                        code: 'BOP',
                        fullName: 'Broken Orange Pekoe (CTC)',
                        description: 'Quality CTC with orange pekoe characteristics.',
                        leafSize: 'Uniform granules',
                        appearance: 'Well-formed CTC granules',
                        strength: 'strong',
                        liquorColor: 'Bright copper',
                        aroma: 'Full, rounded',
                        flavorNotes: ['Full-bodied', 'Brisk', 'Malty'],
                        brewTime: '2-3 minutes',
                        brewSpeed: 'fast',
                        useCases: ['chai', 'milk-tea'],
                        bestFor: 'Premium CTC tea',
                        buyerTip: 'Higher quality CTC for discerning chai drinkers.',
                        category: 'ctc',
                        leafStyle: 'broken',
                        qualityTier: 3
                    },
                    {
                        id: 'bopsm',
                        code: 'BOPSM',
                        fullName: 'Broken Orange Pekoe Small',
                        description: 'Smaller BOP with quick infusion properties.',
                        leafSize: 'Small uniform granules',
                        appearance: 'Tight, small balls',
                        strength: 'strong',
                        liquorColor: 'Fast, deep color',
                        aroma: 'Quick release, bold',
                        flavorNotes: ['Fast', 'Bold', 'Strong'],
                        brewTime: '1-2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['chai', 'tea-bags'],
                        bestFor: 'Quick brewing needs',
                        buyerTip: 'Perfect when you need tea in a hurry.',
                        category: 'ctc',
                        leafStyle: 'broken',
                        qualityTier: 2
                    }
                ]
            },
            {
                id: 'fannings-ctc',
                name: 'Fannings',
                description: 'Commercial and retail tea bag grade with fast brewing and bright liquor.',
                icon: '📦',
                grades: [
                    {
                        id: 'pf',
                        code: 'PF',
                        fullName: 'Pekoe Fannings',
                        description: 'Standard fannings for tea bags with good color.',
                        leafSize: 'Fine particles',
                        appearance: 'Small, flat particles',
                        strength: 'strong',
                        liquorColor: 'Quick bright color',
                        aroma: 'Direct, strong',
                        flavorNotes: ['Quick', 'Bright', 'Strong'],
                        brewTime: '1-2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['tea-bags', 'commercial'],
                        bestFor: 'Commercial tea bags',
                        buyerTip: 'Industry standard for retail tea bags.',
                        category: 'ctc',
                        leafStyle: 'fannings',
                        qualityTier: 2
                    },
                    {
                        id: 'pf1',
                        code: 'PF1',
                        fullName: 'Pekoe Fannings 1',
                        description: 'Premium fannings with enhanced quality.',
                        leafSize: 'Uniform fine particles',
                        appearance: 'Consistent small particles',
                        strength: 'strong',
                        liquorColor: 'Bright, quick release',
                        aroma: 'Clean, bold',
                        flavorNotes: ['Clean', 'Quick', 'Bold'],
                        brewTime: '1-2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['tea-bags'],
                        bestFor: 'Quality tea bags',
                        buyerTip: 'Better quality tea bag experience.',
                        category: 'ctc',
                        leafStyle: 'fannings',
                        qualityTier: 2
                    },
                    {
                        id: 'pf2',
                        code: 'PF2',
                        fullName: 'Pekoe Fannings 2',
                        description: 'Economy fannings grade for bulk commercial use.',
                        leafSize: 'Mixed fine particles',
                        appearance: 'Variable small particles',
                        strength: 'medium',
                        liquorColor: 'Good color',
                        aroma: 'Moderate',
                        flavorNotes: ['Moderate', 'Reliable', 'Economical'],
                        brewTime: '1-2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['commercial', 'tea-bags'],
                        bestFor: 'Bulk commercial orders',
                        buyerTip: 'Cost-effective for high volume needs.',
                        category: 'ctc',
                        leafStyle: 'fannings',
                        qualityTier: 1
                    },
                    {
                        id: 'bopf',
                        code: 'BOPF',
                        fullName: 'Broken Orange Pekoe Fannings',
                        description: 'Quality fannings with BOP characteristics.',
                        leafSize: 'Fine, uniform particles',
                        appearance: 'Small, even particles',
                        strength: 'strong',
                        liquorColor: 'Bright, vibrant',
                        aroma: 'Full, rounded',
                        flavorNotes: ['Full', 'Bright', 'Quality'],
                        brewTime: '1-2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['tea-bags'],
                        bestFor: 'Premium tea bags',
                        buyerTip: 'Premium option for branded tea bags.',
                        category: 'ctc',
                        leafStyle: 'fannings',
                        qualityTier: 2
                    },
                    {
                        id: 'of',
                        code: 'OF',
                        fullName: 'Orange Fannings',
                        description: 'Standard orange fannings for commercial applications.',
                        leafSize: 'Small particles',
                        appearance: 'Fine, consistent',
                        strength: 'strong',
                        liquorColor: 'Quick extraction',
                        aroma: 'Bold, straightforward',
                        flavorNotes: ['Bold', 'Quick', 'Standard'],
                        brewTime: '1-2 minutes',
                        brewSpeed: 'fast',
                        useCases: ['commercial', 'tea-bags'],
                        bestFor: 'Commercial blending',
                        buyerTip: 'Reliable choice for blending operations.',
                        category: 'ctc',
                        leafStyle: 'fannings',
                        qualityTier: 2
                    }
                ]
            },
            {
                id: 'dust-ctc',
                name: 'Dust',
                description: 'Extra strong grades for hotels, catering, and instant chai. Maximum strength and color.',
                icon: '⚡',
                grades: [
                    {
                        id: 'pd',
                        code: 'PD',
                        fullName: 'Pekoe Dust',
                        description: 'Standard dust grade with intense extraction.',
                        leafSize: 'Very fine powder',
                        appearance: 'Fine powder-like',
                        strength: 'very-strong',
                        liquorColor: 'Instant deep color',
                        aroma: 'Intense, bold',
                        flavorNotes: ['Intense', 'Maximum color', 'Bold'],
                        brewTime: 'Under 1 minute',
                        brewSpeed: 'very-fast',
                        useCases: ['commercial', 'chai'],
                        bestFor: 'Hotels, catering',
                        buyerTip: 'Designed for commercial kitchen efficiency.',
                        category: 'ctc',
                        leafStyle: 'dust',
                        qualityTier: 1
                    },
                    {
                        id: 'pd1',
                        code: 'PD1',
                        fullName: 'Pekoe Dust 1',
                        description: 'Premium dust with slightly better quality.',
                        leafSize: 'Fine uniform powder',
                        appearance: 'Consistent fine powder',
                        strength: 'very-strong',
                        liquorColor: 'Instant dark',
                        aroma: 'Very strong',
                        flavorNotes: ['Very strong', 'Instant', 'Dark'],
                        brewTime: 'Under 1 minute',
                        brewSpeed: 'very-fast',
                        useCases: ['commercial'],
                        bestFor: 'Premium commercial use',
                        buyerTip: 'Higher quality dust for better commercial results.',
                        category: 'ctc',
                        leafStyle: 'dust',
                        qualityTier: 1
                    },
                    {
                        id: 'd',
                        code: 'D',
                        fullName: 'Dust',
                        description: 'Basic dust grade for maximum extraction.',
                        leafSize: 'Finest particles',
                        appearance: 'Very fine powder',
                        strength: 'very-strong',
                        liquorColor: 'Immediate dark color',
                        aroma: 'Maximum strength',
                        flavorNotes: ['Maximum', 'Instant', 'Strongest'],
                        brewTime: 'Seconds',
                        brewSpeed: 'very-fast',
                        useCases: ['commercial'],
                        bestFor: 'High-volume commercial',
                        buyerTip: 'Maximum efficiency for large-scale operations.',
                        category: 'ctc',
                        leafStyle: 'dust',
                        qualityTier: 1
                    },
                    {
                        id: 'd1',
                        code: 'D1',
                        fullName: 'Dust 1',
                        description: 'Graded dust with consistent performance.',
                        leafSize: 'Uniform fine powder',
                        appearance: 'Consistent powder',
                        strength: 'very-strong',
                        liquorColor: 'Very quick, very dark',
                        aroma: 'Intense',
                        flavorNotes: ['Consistent', 'Intense', 'Quick'],
                        brewTime: 'Seconds',
                        brewSpeed: 'very-fast',
                        useCases: ['commercial'],
                        bestFor: 'Bulk commercial orders',
                        buyerTip: 'Reliable for consistent large-batch brewing.',
                        category: 'ctc',
                        leafStyle: 'dust',
                        qualityTier: 1
                    },
                    {
                        id: 'cd',
                        code: 'CD',
                        fullName: 'Churamani Dust',
                        description: 'Specialty dust grade known for exceptional strength.',
                        leafSize: 'Extra fine',
                        appearance: 'Ultra-fine powder',
                        strength: 'very-strong',
                        liquorColor: 'Darkest, instant',
                        aroma: 'Extremely bold',
                        flavorNotes: ['Extreme', 'Dark', 'Bold'],
                        brewTime: 'Seconds',
                        brewSpeed: 'very-fast',
                        useCases: ['commercial', 'chai'],
                        bestFor: 'Extra strong chai',
                        buyerTip: 'When you need the strongest possible chai.',
                        category: 'ctc',
                        leafStyle: 'dust',
                        qualityTier: 1
                    },
                    {
                        id: 'fd',
                        code: 'FD',
                        fullName: 'Fine Dust',
                        description: 'Finely processed dust for quick extraction.',
                        leafSize: 'Very fine',
                        appearance: 'Powdery',
                        strength: 'very-strong',
                        liquorColor: 'Instant color',
                        aroma: 'Strong, direct',
                        flavorNotes: ['Quick', 'Strong', 'Direct'],
                        brewTime: 'Seconds',
                        brewSpeed: 'very-fast',
                        useCases: ['commercial'],
                        bestFor: 'Instant tea preparation',
                        buyerTip: 'Fastest possible brewing time.',
                        category: 'ctc',
                        leafStyle: 'dust',
                        qualityTier: 1
                    },
                    {
                        id: 'sfd',
                        code: 'SFD',
                        fullName: 'Super Fine Dust',
                        description: 'The finest dust grade for instant extraction.',
                        leafSize: 'Ultra-fine',
                        appearance: 'Finest powder',
                        strength: 'very-strong',
                        liquorColor: 'Immediate maximum color',
                        aroma: 'Maximum intensity',
                        flavorNotes: ['Maximum everything', 'Instant', 'Intense'],
                        brewTime: 'Seconds',
                        brewSpeed: 'very-fast',
                        useCases: ['commercial'],
                        bestFor: 'Industrial tea preparation',
                        buyerTip: 'Maximum extraction in minimum time.',
                        category: 'ctc',
                        leafStyle: 'dust',
                        qualityTier: 1
                    }
                ]
            }
        ]
    },
    {
        id: 'specialty',
        name: 'Specialty & Artisan',
        tagline: 'Premium Craft Teas',
        description: 'Handcrafted specialty teas with unique processing methods, offering distinctive flavor profiles.',
        bestFor: ['Health', 'Gifting', 'Premium markets'],
        taste: 'Delicate, nuanced, artisanal',
        icon: '🌸',
        leafStyles: [
            {
                id: 'white-tea',
                name: 'White Tea',
                description: 'Light and delicate with very low caffeine and high antioxidants.',
                icon: '🤍',
                grades: [
                    {
                        id: 'silver-needle',
                        code: 'Silver Needle',
                        fullName: 'Silver Needle (Bai Hao Yin Zhen)',
                        description: 'The most prized white tea, consisting only of young unopened buds.',
                        leafSize: 'Single buds',
                        appearance: 'Straight needles covered in white down',
                        strength: 'light',
                        liquorColor: 'Pale ivory',
                        aroma: 'Delicate, floral, cucumber',
                        flavorNotes: ['Fresh hay', 'Melon', 'Sweet'],
                        brewTime: '5-7 minutes',
                        brewSpeed: 'slow',
                        useCases: ['pure-tasting', 'gifting', 'wellness'],
                        bestFor: 'True tea connoisseurs',
                        buyerTip: 'Use slightly cooler water to avoid burning the delicate buds.',
                        category: 'specialty',
                        leafStyle: 'white',
                        qualityTier: 5
                    }
                ]
            },
            {
                id: 'green-tea',
                name: 'Green Tea',
                description: 'Unoxidized tea that retains its natural green color and health benefits.',
                icon: '🍵',
                grades: [
                    {
                        id: 'long-jing',
                        code: 'Long Jing',
                        fullName: 'Dragon Well (Long Jing)',
                        description: 'Famous pan-roasted green tea with a characteristic flat leaf.',
                        leafSize: 'Small flat leaves',
                        appearance: 'Flat, spear-like leaves',
                        strength: 'medium',
                        liquorColor: 'Pale yellow-green',
                        aroma: 'Nutty, toasted soybean',
                        flavorNotes: ['Chestnut', 'Spinach', 'Sweet'],
                        brewTime: '2-3 minutes',
                        brewSpeed: 'medium',
                        useCases: ['pure-tasting', 'wellness'],
                        bestFor: 'Morning refreshment',
                        buyerTip: 'High grades have a distinct "flat" shape from hand-roasting.',
                        category: 'specialty',
                        leafStyle: 'green',
                        qualityTier: 5
                    }
                ]
            }
        ]
    }
];

export const strengthLabels: Record<Strength, string> = {
    'light': 'Light',
    'medium': 'Medium',
    'strong': 'Strong',
    'very-strong': 'Very Strong'
};

export const brewSpeedLabels: Record<BrewSpeed, string> = {
    'slow': 'Slow (4-5 min)',
    'medium': 'Medium (2-3 min)',
    'fast': 'Fast (1-2 min)',
    'very-fast': 'Very Fast (<1 min)'
};

export const useCaseLabels: Record<UseCase, string> = {
    'pure-tasting': 'Pure Tasting',
    'daily-premium': 'Daily Premium',
    'milk-tea': 'Milk Tea',
    'chai': 'Masala Chai',
    'tea-bags': 'Tea Bags',
    'gifting': 'Gifting',
    'wellness': 'Wellness',
    'commercial': 'Commercial'
};

export const leafStyleOrder: LeafStyle[] = ['whole', 'broken', 'fannings', 'dust', 'white', 'green', 'oolong'];

export function getLeafStyleProgression(style: LeafStyle): number {
    const progressionMap: Record<LeafStyle, number> = {
        'whole': 100,
        'broken': 75,
        'fannings': 50,
        'dust': 25,
        'white': 100,
        'green': 100,
        'oolong': 100
    };
    return progressionMap[style];
}

export function getAllGrades(): TeaGrade[] {
    return teaData.flatMap(category =>
        category.leafStyles.flatMap(style => style.grades)
    );
}
