const logVarDeclarators = require('./logVarDeclarators.js');
console.log('2:0', 'logVarDeclarators :', logVarDeclarators);
console.log('typeof logVarDeclarators :', typeof logVarDeclarators);
const logExpression = require('./logExpression.js');
console.log('5:0', 'logExpression :', logExpression);
console.log('typeof logExpression :', typeof logExpression);
const insertConsoleLogsIntoBody = require('./insertConsoleLogsIntoBody.js');
console.log('8:0', 'insertConsoleLogsIntoBody :', insertConsoleLogsIntoBody);
console.log('typeof insertConsoleLogsIntoBody :', typeof insertConsoleLogsIntoBody);
const logFunctionParams = require('./logFunctionParams.js');
console.log('11:0', 'logFunctionParams :', logFunctionParams);
console.log('typeof logFunctionParams :', typeof logFunctionParams);
const isInsideRegion = require('./isInsideRegion.js');
// const insertVarNameConsoleLogs = require('./insertVarNameConsoleLogs.js');
// const logArrowFunctionParams = require('./logArrowFunctionParams.js');
// const consoleLogNode = require('./consoleLogNode.js');
// const { getCompleteObjectPropertyName } = require('./helper.js');
// const looksLike = require('./third_party_helpers.js');
// const addFunctionName = require('./addFunctionName.js');
// const chalk = require('chalk');
console.log('21:0', 'isInsideRegion :', isInsideRegion);
console.log('typeof isInsideRegion :', typeof isInsideRegion);
module.exports = logItPlugin;
console.log('24:0', 'module.exports :', module.exports);

function logItPlugin(babel) {
    console.log('27:4', 'Function logItPlugin', 'babel :', babel);
    console.log('typeof babel :', typeof babel);
    const { types: t } = babel;
    console.log('30:4', 'Function logItPlugin', 't :', t);
    console.log('typeof t :', typeof t);
    return {
        name: 'babel-logit',
        visitor: {
            IfStatement(path, state) {
                console.log('36:16', 'state :', state);
                console.log('typeof state :', typeof state);
                console.log('38:16', 'path :', path);
                console.log('typeof path :', typeof path);
                if (!isInsideRegion(path, state) || !state.opts.verbose) {
                    console.log('41:20', 'In IfStatement (!isInsideRegion(path, state) || !state.opts.verbose)');
                    return;
                }
                const { node } = path;
                console.log('45:16', 'node :', node);
                console.log('typeof node :', typeof node);
                const consequent = path.get('consequent');
                console.log('48:16', 'consequent :', consequent);
                console.log('typeof consequent :', typeof consequent);
                insertConsoleLogsIntoBody(consequent, t, {
                    type: 'info',
                    info: { parentType: node.type, condition: node.test },
                });

                if (node.alternate) {
                    console.log('56:20', 'In IfStatement (node.alternate)');
                    if (node.alternate.type == 'BlockStatement') {
                        console.log('58:24', "In IfStatement (node.alternate.type == 'BlockStatement')");
                        const alternate = path.get('alternate');
                        console.log('60:24', 'alternate :', alternate);
                        console.log('typeof alternate :', typeof alternate);
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
                console.log('72:16', 'state :', state);
                console.log('typeof state :', typeof state);
                console.log('74:16', 'path :', path);
                console.log('typeof path :', typeof path);
                if (!isInsideRegion(path, state)) {
                    console.log('77:20', 'In IfStatement (!isInsideRegion(path, state))');
                    return;
                }
                logFunctionParams(t, path);
            },
            Expression(path, state) {
                console.log('83:16', 'state :', state);
                console.log('typeof state :', typeof state);
                console.log('85:16', 'path :', path);
                console.log('typeof path :', typeof path);
                if (!isInsideRegion(path, state)) {
                    console.log('88:20', 'In IfStatement (!isInsideRegion(path, state))');
                    return;
                }
                logExpression(t, path, state);
            },
            VariableDeclaration(path, state) {
                console.log('94:16', 'state :', state);
                console.log('typeof state :', typeof state);
                console.log('96:16', 'path :', path);
                console.log('typeof path :', typeof path);
                if (!isInsideRegion(path, state)) {
                    console.log('99:20', 'In IfStatement (!isInsideRegion(path, state))');
                    return;
                }
                const { node } = path;
                console.log('103:16', 'node :', node);
                console.log('typeof node :', typeof node);
                node.declarations.forEach(node => {
                    console.log('106:20', 'node :', node);
                    console.log('typeof node :', typeof node);
                    if (node.type == 'VariableDeclarator') {
                        console.log('109:24', "In IfStatement (node.type == 'VariableDeclarator')");
                        logVarDeclarators(t, path, node);
                    }
                });
            },
        },
    };
}
