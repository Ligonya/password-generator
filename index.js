#!/usr/bin/env node
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const program = require('commander');

const generatePassword = require('./modules/generate-password');

program
    .version('1.0.0')
    .description('Simple Password Generator');

program
    .option('-l, --length <number>', 'length of password')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .option('-nu, --no-uppercases', 'remove uppercases')
    .parse();

const { length, numbers, symbols, uppercases } = program.opts();
const password = generatePassword({
    length,
    uppercaseEnabled: uppercases,
    numbersEnabled: numbers,
    symbolsEnabled: symbols,
});

// Copy to clipboard
clipboardy.writeSync(password);

// Output generated password
console.log(chalk.green('Generated Password: ') + chalk.bold(password));
console.log(chalk.gray('Password copied to clipboard'));
