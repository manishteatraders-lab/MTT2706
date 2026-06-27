// Tea grade images mapped by leaf style
import orthodoxWholeImg from '@/assets/tea-orthodox-whole.webp';
import orthodoxBrokenImg from '@/assets/tea-orthodox-broken.webp';
import fanningsImg from '@/assets/tea-fannings.webp';
import dustImg from '@/assets/tea-dust.webp';
import ctcImg from '@/assets/tea-ctc.webp';
import whiteImg from '@/assets/tea-white.webp';
import greenImg from '@/assets/tea-green.webp';
import oolongImg from '@/assets/tea-oolong.webp';

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
