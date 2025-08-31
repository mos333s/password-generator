import { lengthRules } from './rules/lengthRules'; 
import { duplicatesRules } from './rules/duplicatesRules';
import { charVarietyRules } from './rules/charVarietyRules';
import { getDuplicates } from './helpers/getDuplicates';
import { checkCharSets } from './helpers/checkCharSets';

// Returns score value based on length of generated password
const scoreLength = str => {
    const rule = lengthRules.find(rule => rule.condition(str));
    return { score: rule.score, str};
}

// Returns score value based on how many duplicates in password
const scoreUniqueness = obj => {
    const duplicates = getDuplicates(obj.str);
    const rule = duplicatesRules.find(rule => rule.condition(duplicates));
    return {score: obj.score + rule.score, str: obj.str};
}

// Returns score value based on how many different character sets are used in password
const scoreCharacterVariety = obj => {
    const usedSetsCount = checkCharSets(obj.str);
    const rule = charVarietyRules.find(rule => rule.condition(usedSetsCount));
    return {score: obj.score + rule.score, str: obj.str};
}

// Composes functions sequentially: f(g(x)) => pipe(g, f)(x)
// Each function's output becomes next function's input
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// Main password validation function
// Orchestrates the password validation pipeline
export const validateStrength = pipe(scoreLength, scoreUniqueness, scoreCharacterVariety);