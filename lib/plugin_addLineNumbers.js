const looksLike = require('./third_party_helpers.js');
const isInsideRegion = require('./isInsideRegion.js');
const chalk = require('chalk');

module.exports = addLineNumbersPlugin;

function addLineNumbersPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-add-line-numbers-to-console-logs',
        visitor: {
            CallExpression(path, state) {
                // Ganz am Ende werden alle Zeilennummern nachträglich eingefügt,
                // da sie erst jetzt korrekt sind.
                if (!isInsideRegion(path, state)) {
                    return;
                }
                const isConsoleCall = looksLike(path, {
                    node: {
                        callee: {
                            type: 'MemberExpression',
                            object: { type: 'Identifier', name: 'console' },
                        },
                    },
                });
                if (!isConsoleCall) {
                    return;
                }
                const { line, column } = path.node.callee.object.loc.start;
                const prefix = `${line}:${column} `;
                console.log('line:column: ', line, column);
                path.node.arguments.unshift(t.stringLiteral(prefix));
                // console.log(
                //     chalk.blue('path.node.callee.object: '),
                //     path.node.callee.object.loc.start
                // );
            },
        },
    };
}
