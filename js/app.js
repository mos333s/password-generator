import { generatePassword } from './core/generator/generator.js';

function showToast(message, delay = 3000) {
    const toast = document.querySelector('.toast');
    toast.textContent = message;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, delay);
}

const generateButton = document.querySelector('.generator__button');

const copyButton = document.querySelector('.generator__copy-button');

const lengthSlider = document.querySelector('.generator__slider');
const lengthDisplay = document.querySelector('.generator__length');

const upperCaseCheckbox = document.querySelector('input[name="uppercase"]');
const lowerCaseCheckbox = document.querySelector('input[name="lowercase"]');
const numsCheckbox = document.querySelector('input[name="nums"]');
const symbolsCheckbox = document.querySelector('input[name="symbols"]');

const output = document.querySelector('.generator__password-text');

generateButton.addEventListener('click', () => {
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

copyButton.addEventListener('click', () => {
    if(output.textContent === 'CLICK GENERATE') {
        showToast('Press GENERATE PASSWORD first');
    } else {
        navigator.clipboard.writeText(output.textContent);
        showToast('Copied!');
    }
})