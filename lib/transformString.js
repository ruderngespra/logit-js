// This function takes a string and optionally an object with
// specifications, and returns the transformed new Code. To be able to
// do this, it makes use of my babel plugin.

const babel = require('@babel/core');
const babylon = require('babylon');
// I need it only to prevent some weird styling behaviour:
const generate = require('@babel/generator').default;

const addConsoleLogs = require('./plugin.js');
const addLineNumbers = require('./plugin_addLineNumbers.js');

// prettier to generate default format:
const prettier = require('prettier');

module.exports = (string, options = {}) => {
    if (typeof string != 'string') {
        return { success: false, error: 'Invalid input type' };
    }
    try {
        const myPlugin = new addConsoleLogs(babel);
        let { code } = babel.transform(string, {
            plugins: [[myPlugin, options]],
        });
        const lineNumbers = new addLineNumbers(babel);
        code = babel.transform(code, {
            plugins: [[lineNumbers, options]],
        }).code;
        code = prettier.format(code, {
            semi: true,
            singleQuote: true,
            tabWidth: 4,
            parser: 'babel',
        });
        return { success: true, code };
    } catch (err) {
        return { success: false, error: err.message };
    }
};
