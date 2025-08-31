import { charSetOptions } from "../rules/charSetOptions";
import { CONFIG } from '../../cfg/config';

// Gets array of character sets based on user settings
export function getAllowedChars(settings) {
    const allowedChars = [];
    for(const key in settings) {
        if(key in charSetOptions && settings[key] === true) {
            allowedChars.push(CONFIG.CHARACTER_SETS[charSetOptions[key]]);
        }  
    }
    return allowedChars.join('');
}