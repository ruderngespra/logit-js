const { readFileSync } = require('fs');
// const chalk = require('chalk');
const transformString = require('./transformString');

const options = require('./handleOptions');

try {
    const inputFile = readFileSync(options.src);
    const codeAsString = inputFile.toString();

    const transformedStringObject = transformString(codeAsString);
    if (!transformedStringObject.success) {
        throw Error(transformedStringObject.error);
    }
    console.log(transformedStringObject.code);
} catch (err) {
    console.log('Error: Could not correctly parse input file.');
    console.log(err.message);
}
