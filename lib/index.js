const { readFileSync, writeFileSync } = require('fs');
const transformString = require('./transformString');
const optionDefinitions = require('./optionDefinitions.js');
const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);
const chalk = require('chalk');

if (options.help) {
    const help = require('./printHelp.js');
    console.log(help);
} else if (options.version) {
    // Show version number.
} else {
    try {
        if (options.src.slice(-3) != '.js') {
            throw Error('Input is not a javascript file.');
        }
        const inputFile = readFileSync(options.src);
        const codeAsString = inputFile.toString();
        const transformedStringObject = transformString(codeAsString, options);
        if (!transformedStringObject.success) {
            throw Error(transformedStringObject.error);
        }
        if (options.stdout) {
            console.log(transformedStringObject.code);
        } else {
            writeFileSync(options.src.slice(0, options.src.length - 2) + 'logit.js', transformedStringObject.code);
        }
    } catch (err) {
        console.log(chalk.red('Error: Unable to load input file.'));
        console.log(err.message);
    }
}
