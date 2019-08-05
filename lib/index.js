const { readFileSync, writeFileSync } = require('fs');
// const chalk = require('chalk');
const transformString = require('./transformString');

const options = require('./handleOptions');

try {
    const inputFile = readFileSync(options.src);
    const codeAsString = inputFile.toString();
    const transformedStringObject = transformString(codeAsString, options);
    if (!transformedStringObject.success) {
        throw Error(transformedStringObject.error);
    }
    writeFileSync(
        options.src.slice(0, options.src.length - 2) + 'logit.js',
        transformedStringObject.code
    );
    console.log(transformedStringObject.code);
} catch (err) {
    console.log('Error: Could not correctly parse input file.');
    console.log(err.message);
}
