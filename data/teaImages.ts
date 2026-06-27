// Tea grade images mapped by leaf style — using public URL strings (Next.js static export)
const BASE = '/assets';
const orthodoxWholeImg = `${BASE}/tea-orthodox-whole.webp`;
const orthodoxBrokenImg = `${BASE}/tea-orthodox-broken.webp`;
const fanningsImg = `${BASE}/tea-fannings.webp`;
const dustImg = `${BASE}/tea-dust.webp`;
const ctcImg = `${BASE}/tea-ctc.webp`;
const whiteImg = `${BASE}/tea-white.webp`;
const greenImg = `${BASE}/tea-green.webp`;
const oolongImg = `${BASE}/tea-oolong.webp`;

import { LeafStyle, TeaCategory } from './teaGrades';

// Image mapping based on category and leaf style
export function getTeaImage(category: TeaCategory, leafStyle: LeafStyle): string {
    // Specialty teas have their own images
    if (category === 'specialty') {
        switch (leafStyle) {
            case 'white':
                return whiteImg;
            case 'green':
                return greenImg;
            case 'oolong':
                return oolongImg;
            default:
                return orthodoxWholeImg;
        }
    }

    // CTC teas
    if (category === 'ctc') {
        switch (leafStyle) {
            case 'dust':
                return dustImg;
            case 'fannings':
                return fanningsImg;
            default:
                return ctcImg;
        }
    }

    // Orthodox teas
    switch (leafStyle) {
        case 'whole':
            return orthodoxWholeImg;
        case 'broken':
            return orthodoxBrokenImg;
        case 'fannings':
            return fanningsImg;
        case 'dust':
            return dustImg;
        default:
            return orthodoxWholeImg;
    }
}
