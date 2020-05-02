const logVarDeclarators = require('./logVarDeclarators.js');
console.log('2:0', 'logVarDeclarators :', logVarDeclarators);
const logExpression = require('./logExpression.js');
console.log('4:0', 'logExpression :', logExpression);
const insertConsoleLogsIntoBody = require('./insertConsoleLogsIntoBody.js');
console.log('6:0', 'insertConsoleLogsIntoBody :', insertConsoleLogsIntoBody);
const logFunctionParams = require('./logFunctionParams.js');
console.log('8:0', 'logFunctionParams :', logFunctionParams);
const isInsideRegion = require('./isInsideRegion.js');
// const insertVarNameConsoleLogs = require('./insertVarNameConsoleLogs.js');
// const logArrowFunctionParams = require('./logArrowFunctionParams.js');
// const consoleLogNode = require('./consoleLogNode.js');
// const { getCompleteObjectPropertyName } = require('./helper.js');
// const looksLike = require('./third_party_helpers.js');
// const addFunctionName = require('./addFunctionName.js');
// const chalk = require('chalk');
console.log('17:0', 'isInsideRegion :', isInsideRegion);
module.exports = logItPlugin;
console.log('19:0', 'module.exports :', module.exports);

function logItPlugin(babel) {
    console.log('22:4', 'babel :', babel);
    const { types: t } = babel;
    console.log('24:4', 't :', t);
    return {
        name: 'babel-logit',
        visitor: {
            IfStatement(path, state) {
                console.log('29:16', 'state :', state);
                console.log('30:16', 'path :', path);
                if (!isInsideRegion(path, state) || !state.opts.verbose) {
                    return;
                }
                const { node } = path;
                console.log('35:16', 'node :', node);
                const consequent = path.get('consequent');
                console.log('37:16', 'consequent :', consequent);
                insertConsoleLogsIntoBody(consequent, t, {
                    type: 'info',
                    info: { parentType: node.type, condition: node.test },
                });

                if (node.alternate) {
                    if (node.alternate.type == 'BlockStatement') {
                        const alternate = path.get('alternate');
                        console.log('46:24', 'alternate :', alternate);
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
                console.log('57:16', 'state :', state);
                console.log('58:16', 'path :', path);
                if (!isInsideRegion(path, state)) {
                    return;
                }
                logFunctionParams(t, path);
            },
            Expression(path, state) {
                console.log('65:16', 'state :', state);
                console.log('66:16', 'path :', path);
                if (!isInsideRegion(path, state)) {
                    return;
                }
                logExpression(t, path, state);
            },
            VariableDeclaration(path, state) {
                console.log('73:16', 'state :', state);
                console.log('74:16', 'path :', path);
                if (!isInsideRegion(path, state)) {
                    return;
                }
                const { node } = path;
                console.log('79:16', 'node :', node);
                node.declarations.forEach(node => {
                    console.log('81:20', 'node :', node);
                    if (node.type == 'VariableDeclarator') {
                        logVarDeclarators(t, path, node);
                    }
                });
            },
        },
    };
}
