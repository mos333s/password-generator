import { getAllowedChars } from "./helpers/getAllowedChars.js";
import { shuffleString } from "./helpers/shuffleString.js";
import { getRandomChars } from "./helpers/getRandomChars.js";

// Composes functions sequentially: f(g(x)) => pipe(g, f)(x)
// Each function's output becomes next function's input
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// Main password generation function
// Orchestrates the password generation pipeline
export const generatePassword = settings => {
    return pipe (
        getAllowedChars,
        shuffleString,
        (str) => getRandomChars(str, settings.length)
    ) (settings);
};