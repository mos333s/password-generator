// Duplicates penalty rules: fewer duplicates = higher score  
// Based on count of duplicate characters found
export const duplicatesRules = [
    {condition: arr => arr.length === 0, score: 20},
    {condition: arr => arr.length <= 2, score: 15},
    {condition: arr => arr.length <= 5, score: 10},
    {condition: arr => arr.length > 5, score: 5}
];