// Character variety bonus rules: more character sets used = higher score
// Sets: lowercase, uppercase, numbers, symbols (max 4 sets)
export const charVarietyRules = [
    {condition: usedSetsCount => usedSetsCount === 4, score: 40},
    {condition: usedSetsCount => usedSetsCount === 3, score: 30}, 
    {condition: usedSetsCount => usedSetsCount === 2, score: 20},
    {condition: usedSetsCount => usedSetsCount === 1, score: 10} 
];