// Length scoring rules: longer passwords get higher scores
// Ranges: 6-8, 9-11, 13-16, 17+ characters
export const lengthRules = [
    {condition: str => str.length >= 6 && str.length < 9, score: 10},
    {condition: str => str.length >= 9 && str.length < 12, score: 20},
    {condition: str => str.length >= 13 && str.length <= 22, score: 30},
    {condition: str => str.length >= 22, score: 40}
];