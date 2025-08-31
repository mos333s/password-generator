// Shuffles characters in string using Fisher-Yates algorithm
export function shuffleString(string) {
    const charSet = string.split('');
    for(let i = charSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charSet[i], charSet[j]] = [charSet[j], charSet[i]]
    }

    return charSet.join('')
}