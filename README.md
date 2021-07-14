# Password-generator

A simple command line password generator made with `node js` and the package `commander`.

## Setup

```bash
git clone https://github.com/Ligonya/password-generator.git
cd ./password-generator
rm -R ./.git
npm install
npm link
```

> If you want to remove the symlink created with `npm link`, you need to run the command `npm unlink` in the folder of the project.

## Usage

Generate a password of 8 characters :
```bash
passgen
```

All parameters of the command are given with the command `passgen -h` :
```bash
# passgen -h
Usage: index [options]

Simple Password Generator

Options:
  -V, --version          output the version number
  -l, --length <number>  length of password
  -nn, --no-numbers      remove numbers
  -ns, --no-symbols      remove symbols
  -nu, --no-uppercases   remove uppercases
  -h, --help             display help for command
```

