const looksLike = require('./third_party_helpers.js');

// const chalk = require('chalk');

module.exports = addLineNumbersPlugin;

function addLineNumbersPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-add-line-numbers-to-console-logs',
        visitor: {
            CallExpression(path, state) {
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
                const { node } = path;
                if (node.arguments[0].value == 'logit') {
                    const { line, column } = path.node.callee.object.loc.start;
                    const prefix = `${line}:${column}`;
                    node.arguments[0].value = prefix;
                }
            },
        },
    };
}
