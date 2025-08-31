// Generates string of random characters from given string
export const getRandomChars = (string, length) => Array.from(
    {length: length}, () => string[Math.floor(Math.random() * string.length)]).join('')