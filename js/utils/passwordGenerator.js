import {CONFIG} from '../config';

// Mapping between settings options and character set names in CONFIG
// Links UI settings to actual character sets used for generation
const charSetOptions = {
    useLowerCase: 'LOWERCASE',
    useUpperCase: 'UPPERCASE',
    useNums: 'NUMS',
    useSymbols: 'SYMBOLS'
}

// Gets array of character sets based on user settings
function getAllowedChars(settings) {
    const allowedChars = [];
    for(const key in settings) {
        if(key in charSetOptions && settings[key] === true) {
            allowedChars.push(CONFIG.CHARACTER_SETS[charSetOptions[key]]);
        }  
    }
    return allowedChars;
}

// Joins array of strings into single string
const joinChars = array => array.join('');

// Shuffles characters in string using Fisher-Yates algorithm
function shuffleString(string) {
    const charSet = string.split('');
    for(let i = charSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charSet[i], charSet[j]] = [charSet[j], charSet[i]]
    }

    return charSet.join('')
}

// Generates string of random characters from given string
const getRandomChars = (string, length) => Array.from({length: length}, () => string[Math.floor(Math.random() * string.length)]).join('')

// Main password generation function
// Orchestrates the password generation pipeline
export function generatePassword(settings) {
    const allowedChars = getAllowedChars(settings);
    const combinedChars = joinChars(allowedChars);
    const shuffledChars = shuffleString(combinedChars);
    const resultPassword = getRandomChars(shuffledChars, settings.length);
    return resultPassword;
}