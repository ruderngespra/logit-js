const logVarDeclarators = require('./logVarDeclarators.js');
const logExpression = require('./logExpression.js');
const insertConsoleLogsIntoBody = require('./insertConsoleLogsIntoBody.js');
const logFunctionParams = require('./logFunctionParams.js');
const isInsideRegion = require('./isInsideRegion.js');
// const insertVarNameConsoleLogs = require('./insertVarNameConsoleLogs.js');
// const logArrowFunctionParams = require('./logArrowFunctionParams.js');
// const consoleLogNode = require('./consoleLogNode.js');
// const { getCompleteObjectPropertyName } = require('./helper.js');
// const looksLike = require('./third_party_helpers.js');
// const addFunctionName = require('./addFunctionName.js');
// const chalk = require('chalk');

module.exports = logItPlugin;

function logItPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-logit',
        visitor: {
            IfStatement(path, state) {
                if (!isInsideRegion(path, state) || !state.opts.verbose) {
                    return;
                }
                const { node } = path;
                const consequent = path.get('consequent');
                insertConsoleLogsIntoBody(consequent, t, {
                    type: 'info',
                    info: { parentType: node.type, condition: node.test },
                });
                if (node.alternate) {
                    if (node.alternate.type == 'BlockStatement') {
                        const alternate = path.get('alternate');
                        insertConsoleLogsIntoBody(alternate, t, {
                            type: 'info',
                            info: {
                                parentType: 'ElseStatement',
                            },
                        });
                    }
                }
            },
            Function(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                logFunctionParams(t, path);
            },
            Expression(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                logExpression(t, path, state);
            },
            VariableDeclaration(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                const { node } = path;
                node.declarations.forEach(node => {
                    if (node.type == 'VariableDeclarator') {
                        logVarDeclarators(t, path, node);
                    }
                });
            },
        },
    };
}
