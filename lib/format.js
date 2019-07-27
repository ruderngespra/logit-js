// Dieses Modul stellt die Funktionalität für das saubere Formatieren
// des Strings VOR dem Beginn der Schreib und Trenn-Operationen
// bereit.

const Linter = require('eslint').Linter;
const linter = new Linter();

const messages = linter.verifyAndFix('var foo', {
    rules: {
        semi: 2,
    },
});

console.log('messages: ', messages);

// module.exports = codeString => {
//     const prettierConfigObject = { semi: true, parser: 'babel' };
//     return prettier.format(codeString, prettierConfigObject);
// };

// console.log(prettier.format('foo ( )', { semi: true, parser: 'babel' }));

// console.log({ prettier });
