import { CONFIG } from '../../../cfg/config.js';

// Analyzes password string and returns count of unique character sets used
export const checkCharSets = str => {
    const chars = str.split('');
    const usedSets = new Set();
    
    chars.forEach((char) => {
        if(CONFIG.CHARACTER_SETS.LOWERCASE.includes(char)) usedSets.add('lowercase');
        if(CONFIG.CHARACTER_SETS.UPPERCASE.includes(char)) usedSets.add('uppercase');
        if(CONFIG.CHARACTER_SETS.NUMS.includes(char)) usedSets.add('nums');
        if(CONFIG.CHARACTER_SETS.SYMBOLS.includes(char)) usedSets.add('symbols');
    })
    
    return usedSets.size;
}