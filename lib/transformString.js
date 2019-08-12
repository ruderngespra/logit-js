// This function takes a string and optionally an object with
// specifications, and returns the transformed new Code. To be able to
// do this, it makes use of my babel plugin.

const babel = require('@babel/core');
// I need it only to prevent some weird styling behaviour:

const generate = require('@babel/generator').default;
const { parse } = require('@babel/parser');

const addConsoleLogs = require('./plugin.js');
const addLineNumbers = require('./plugin_addLineNumbers.js');

// prettier to generate default format:
const prettier = require('prettier');

module.exports = (string, options = {}) => {
    if (typeof string != 'string') {
        return { success: false, error: 'Invalid input type' };
    }
    console.log('options: ', options);
    try {
        const myPlugin = new addConsoleLogs(babel);
        let { code } = babel.transform(string, {
            plugins: [[myPlugin, options]],
            retainLines: true,
            // compact: true,
        });

        code = prettier.format(code, {
            semi: true,
            trailingComma: 'es5',
            singleQuote: true,
            tabWidth: 4,
            parser: 'babel',
        });

        const lineNumbers = new addLineNumbers(babel);
        code = babel.transform(code, {
            plugins: [[lineNumbers, options]],
            retainLines: true,
        }).code;

        code = prettier.format(code, {
            semi: true,
            trailingComma: 'es5',
            singleQuote: true,
            tabWidth: 4,
            parser: 'babel',
        });

        // const ast = parse(code);
        // code = generate(
        //     ast,
        //     {
        //         retainLines: true,
        //         compact: true,
        //     },
        //     code
        // ).code;
        return { success: true, code };
    } catch (err) {
        return { success: false, error: err.message };
    }
};
