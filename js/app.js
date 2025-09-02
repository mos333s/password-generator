import { generatePassword } from './core/generator/generator.js';

const button = document.querySelector('.generator__button');

const lengthSlider = document.querySelector('.generator__slider');
const lengthDisplay = document.querySelector('.generator__length');

const upperCaseCheckbox = document.querySelector('input[name="uppercase"]');
const lowerCaseCheckbox = document.querySelector('input[name="lowercase"]');
const numsCheckbox = document.querySelector('input[name="nums"]');
const symbolsCheckbox = document.querySelector('input[name="symbols"]');

const output = document.querySelector('.generator__output');

button.addEventListener('click', () => {
    const currentSettings = {
        length: parseInt(lengthSlider.value),
        useLowerCase: lowerCaseCheckbox.checked,
        useUpperCase: upperCaseCheckbox.checked,
        useNums: numsCheckbox.checked,
        useSymbols: symbolsCheckbox.checked,
    }
    
    const password = generatePassword(currentSettings);
    output.textContent = password;
})

lengthSlider.addEventListener('input', () => {
    lengthDisplay.textContent = parseInt(lengthSlider.value);
})