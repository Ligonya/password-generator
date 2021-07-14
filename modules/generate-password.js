const randint = require('./randint');

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const generatePassword = options => {
    const {
        length = 8,
        uppercaseEnabled = false,
        numbersEnabled = false,
        symbolsEnabled = false
    } = options;

    if (!length || length <= 0) return '';

    const chars = [
        ...letters.split(''),
        ...(uppercaseEnabled ? letters.toUpperCase().split('') : []),
        ...(numbersEnabled ? numbers.split('') : []),
        ...(symbolsEnabled ? symbols.split('') : []),
    ];

    return chars[randint(chars.length - 1)] + generatePassword({
        ...options,
        length: length - 1,
    });
};

module.exports = generatePassword;
