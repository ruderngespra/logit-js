const consoleLogNode = require('./consoleLogNode.js');
const logVarDeclarators = require('./logVarDeclarators');
const logFunctionDeclarationParams = require('./logFunctionDeclarationParams.js');

const isInsideRegion = require('./isInsideRegion.js');
const chalk = require('chalk');

module.exports = logItPlugin;

const WriteParamsConsoleLogInBodyVisitor = {
    VariableDeclaration(path) {
        console.log(chalk.red('path.node: '), path.node);
    },
};

function logItPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-logit',
        visitor: {
            FunctionDeclaration(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                const body = path.get('body');
                path.node.params.forEach(node => {
                    body.unshiftContainer('body', consoleLogNode(t, node));
                });
            },
            AssignmentExpression(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                const { node } = path;
                path.insertAfter(
                    consoleLogNode(t, { ...node, name: node.left.name })
                );
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
