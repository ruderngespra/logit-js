// Dieses Modul stellt die Funktionalität für das saubere Formatieren
// des Strings VOR dem Beginn der Schreib und Trenn-Operationen
// bereit.

const CLIEngine = require('eslint').CLIEngine;

const Linter = require('eslint').Linter;
const linter = new Linter();

// console.log(linter.getRules());

module.exports = codeString => {
    // const cli = new CLIEngine({
    //     // useEslintrc: false,
    //     rules: {
    //         semi: 2,
    //     },
    // });

    // console.log(cli.executeOnText(codeString));

    const eslintConfigObject = { allowInlineConfig: true, rules: { semi: 2 } };
    const { fixed, output, messages } = linter.verifyAndFix(
        codeString,
        eslintConfigObject
    );
    if (fixed) {
        return output;
    } else {
        console.log({ fixed, output, messages });
        throw Error('Eslint did not properly prepare the code.', messages);
    }
};

/* eslint-disable */

/* eslint-enable */
