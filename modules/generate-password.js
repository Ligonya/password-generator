const randint = require('./randint');

const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const generatePassword = ({
    length = 8,
    uppercaseEnabled = false,
    numbersEnabled = false,
    symbolsEnabled = false
}) => {
    if (!length || length <= 0) return '';

    const chars = [
        ...letters.split(''),
        ...(uppercaseEnabled ? letters.toUpperCase().split('') : []),
        ...(numbersEnabled ? numbers.split('') : []),
        ...(symbolsEnabled ? symbols.split('') : []),
    ];

    return chars[randint(chars.length - 1)] + generatePassword({
        length: length - 1,
        uppercaseEnabled,
        numbersEnabled,
        symbolsEnabled
    });
};

module.exports = generatePassword;
