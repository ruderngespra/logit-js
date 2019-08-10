// This function takes a string and optionally an object with
// specifications, and returns the transformed new Code. To be able to
// do this, it makes use of my babel plugin.

const babel = require('@babel/core');
const addConsoleLogs = require('./plugin.js');
const babylon = require('babylon');
// const traverse = require('babel-traverse').default;
// const generate = require('babel-generator').default;

// I need it only to prevent some weird styling behaviour:
const generate = require('@babel/generator').default;

// prettier to generate default format:
const prettier = require('prettier');

module.exports = (string, options = {}) => {
    if (typeof string != 'string') {
        return { success: false, error: 'Invalid input type' };
    }
    try {
        const plugin = new addConsoleLogs(babel);
        // Es müssen dem plugin hier noch ein paar konkrete Optionen übergeben werden.
        const { code } = babel.transform(string, {
            plugins: [[plugin, options]],
        });
        const ast = babylon.parse(code);
        // Das mache ich, damit keine unnötigen Leerzeilen eingefügt werden:
        const { code: compactCode } = generate(
            ast,
            // {
            //     compact: true,
            // },
            code
        );
        // Das mache ich, um einheitliche Formattierung zu haben, es
        // ist bisher ein Workaround, da es nicht zwangsweise den
        // Formattierungsvorlieben der Userin entspricht.
        const formattedCode = prettier.format(compactCode, {
            semi: true,
            singleQuote: true,
            tabWidth: 4,
            parser: 'babel',
        });
        return { success: true, code: formattedCode };
    } catch (err) {
        return { success: false, error: err.message };
    }
};
