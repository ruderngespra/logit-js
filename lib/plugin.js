const consoleLogNode = require('./consoleLogNode.js');
const logVarDeclarators = require('./logVarDeclarators');
const logArrowFunctionParams = require('./logArrowFunctionParams.js');

const isInsideRegion = require('./isInsideRegion.js');
const chalk = require('chalk');

module.exports = logItPlugin;

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
            ArrowFunctionExpression(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                const { node } = path;
                logArrowFunctionParams(t, path);
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
