const { readFileSync, writeFileSync } = require('fs');
const chalk = require('chalk');
const transformString = require('./transformString');
const optionDefinitions = require('./optionDefinitions.js');
const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);

if (options.help) {
    const help = require('./printHelp.js');
    console.log(help);
} else if (options.version) {
    // Show version number.
} else {
    // Try to get the input file and parse it:
    try {
        const inputFile = readFileSync(options.src);
        const codeAsString = inputFile.toString();
        const transformedStringObject = transformString(codeAsString, options);
        if (!transformedStringObject.success) {
            throw Error(transformedStringObject.error);
        }
        if (options.stdout) {
            console.log(transformedStringObject.code);
        } else {
            writeFileSync(
                options.src.slice(0, options.src.length - 2) + 'logit.js',
                transformedStringObject.code
            );
        }
    } catch (err) {
        console.log(chalk.red('Error: Could not load input file.'));
        console.log(err.message);
        return;
    }
    // Try to transform the input using transformString module:

    // -- handle options externally to babel:

    // console.log(transformedStringObject.code);
}
