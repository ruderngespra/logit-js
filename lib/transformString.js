// This function takes a string and optionally an object with
// specifications, and returns the transformed new Code. To be able to
// do this, it makes use of my babel plugin.

const babel = require('@babel/core');
// I need it only to prevent some weird styling behaviour:
// const generate = require('@babel/generator').default;
// const { parse } = require('@babel/parser');

const addConsoleLogs = require('./plugin.js');
const addMoreInfo = require('./plugin_addMoreInfo.js');
const addLineNumbers = require('./plugin_addLineNumbers.js');
const removeConsoleLogs = require('./plugin_removeConsoleLogs.js');

// prettier to generate default format:
const prettier = require('prettier');
const prettierConfigObject = {
    printWidth: 120,
    semi: true,
    trailingComma: 'es5',
    singleQuote: true,
    tabWidth: 4,
    parser: 'babel',
};

module.exports = (string, options = {}) => {
    if (typeof string != 'string') {
        return { success: false, error: 'Invalid input type' };
    }
    try {
        let code = string;
        code = prettier.format(string, prettierConfigObject);
        if (options.remove) {
            // TODO!
            const removeLogs = new removeConsoleLogs(babel);
            code = babel.transform(code, {
                plugins: [[removeLogs, options]],
                retainLines: true,
                // compact: true,
            }).code;
        } else {
            const myPlugin = new addConsoleLogs(babel);
            code = babel.transform(string, {
                plugins: [[myPlugin, options]],
                retainLines: true,
            }).code;

            if (options.verbose) {
                const moreInfo = new addMoreInfo(babel);
                code = prettier.format(code, prettierConfigObject);
                code = babel.transform(code, {
                    plugins: [[moreInfo, options]],
                    retainLines: true,
                }).code;
            }

            code = prettier.format(code, prettierConfigObject);

            const lineNumbers = new addLineNumbers(babel);
            code = babel.transform(code, {
                plugins: [[lineNumbers, options]],
                retainLines: true,
            }).code;
        }
        code = prettier.format(code, prettierConfigObject);
        return { success: true, code };
    } catch (err) {
        return { success: false, error: err.message };
    }
};
