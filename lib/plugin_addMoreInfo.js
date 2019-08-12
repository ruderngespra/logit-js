const looksLike = require('./third_party_helpers.js');
const addFunctionName = require('./addFunctionName.js');
const consoleLogNode = require('./consoleLogNode.js');

module.exports = addMoreInfoPlugin;

function addMoreInfoPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-add-more-info-to-console-logs',
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
                    if (state.opts.verbose) {
                        addFunctionName(t, path);
                        const varName =
                            node.arguments[node.arguments.length - 1].name;
                        path.insertAfter(
                            consoleLogNode(t, {
                                type: 'typeOf',
                                info: { varName },
                            })
                        );
                    }
                }
            },
        },
    };
}
