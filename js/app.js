import { generatePassword } from './core/generator/generator.js';
import { validateStrength } from './core/validator/validator.js';
import { WEAK_THRESHOLD, MEDIUM_THRESHOLD } from './cfg/config.js';

// DOM elements references
const generateButton = document.querySelector('.generator__button');
const copyButton = document.querySelector('.generator__copy-button');
const lengthSlider = document.querySelector('.generator__slider');
const lengthDisplay = document.querySelector('.generator__length');

// Password configuration checkboxes
const upperCaseCheckbox = document.querySelector('input[name="uppercase"]');
const lowerCaseCheckbox = document.querySelector('input[name="lowercase"]');
const numsCheckbox = document.querySelector('input[name="nums"]');
const symbolsCheckbox = document.querySelector('input[name="symbols"]');

// Password display and validation references
const output = document.querySelector('.generator__password-text');
const validationBorder = document.querySelector('.generator__output-wrapper');
const validationMessage = document.querySelector('.generator__validation-text');

// Toast notification element
const toast = document.querySelector('.toast');

// Function that displays temorary toast notification
function showToast(message, delay = 3000) {
    toast.textContent = message;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, delay);
}

// Function that shows and update password strength
function showPasswordStrength(password) {
    const { score } = validateStrength(password);

    validationBorder.classList.remove('strength-weak', 'strength-medium', 'strength-strong');

    validationMessage.classList.remove('text-weak', 'text-medium', 'text-strong');

    if(score <= WEAK_THRESHOLD) {
        validationBorder.classList.add('strength-weak');
        validationMessage.textContent = 'Password is weak';
        validationMessage.classList.add('text-weak');
    } else if(score > WEAK_THRESHOLD && score <= MEDIUM_THRESHOLD) {
        validationBorder.classList.add('strength-medium');
        validationMessage.textContent = 'Password is medium';
        validationMessage.classList.add('text-medium');
    } else {
        validationBorder.classList.add('strength-strong');
        validationMessage.textContent = 'Password is strong';
        validationMessage.classList.add('text-strong');
    }
}

// Update slider track gradient and length display
function updateSlider() {
    const min = parseInt(lengthSlider.min);
    const max = parseInt(lengthSlider.max);
    const value = parseInt(lengthSlider.value);
    const percentage = ((value - min) / (max - min)) * 100;
    lengthSlider.style.setProperty('--track-bg', `linear-gradient(to right, #7352ac ${percentage}%, #757575 ${percentage}%)`);

    lengthDisplay.textContent = value;
    
}

// Event listener for slider input changes
lengthSlider.addEventListener('input', updateSlider);

// Generate password on button click
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

    showPasswordStrength(password);
})

// Copy password to clipboard
copyButton.addEventListener('click', () => {
    if(output.textContent === 'CLICK GENERATE') {
        showToast('Password not generated');
    } else {
        navigator.clipboard.writeText(output.textContent);
        showToast('Copied!');
    }
})