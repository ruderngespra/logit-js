// Here happens the main functionality. This function takes a string
// and optionally an Object with specifications, and returns the
// transformed new Code. To be able to do this, it makes use of my babel plugin.

const babel = require('@babel/core');
const addConsoleLogs = require('./plugin.js');

// const babylon = require('babylon');
// const traverse = require('babel-traverse').default;
// const generate = require('babel-generator').default;

// prettier to generate default format:
const prettier = require('prettier');

module.exports = string => {
    if (typeof string != 'string') {
        return { success: false, error: 'Invalid input type' };
    }
    const plugin = new addConsoleLogs(babel);
    // Es müssen dem plugin hier noch ein paar konkrete Optionen übergeben werden.
    const { code } = babel.transform(string, {
        plugins: [[plugin, {}]],
    });

    const formattedCode = prettier.format(code, {
        semi: true,
        singleQuote: true,
        tabWidth: 4,
        parser: 'babel',
    });

    return { success: true, code: formattedCode };
};

// const ast = babylon.parse(code);

// const formattedCodeObject = generate(
//     ast,
//     {
//         quotes: 'single',
//     },
//     code
// );

// return formattedCodeObject;
