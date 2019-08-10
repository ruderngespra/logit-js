const consoleLogNode = require('./consoleLogNode.js');
const logVarDeclarators = require('./logVarDeclarators');
const logArrowFunctionParams = require('./logArrowFunctionParams.js');
const looksLike = require('./third_party_helpers.js');

const isInsideRegion = require('./isInsideRegion.js');
const chalk = require('chalk');

module.exports = logItPlugin;

let consoleLogCount = 0;

function logItPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-logit',
        visitor: {
            Program(path, state) {
                console.log(
                    'Program path.node.loc.end.line: ',
                    path.node.loc.end.line
                );
            },
            Function(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                consoleLogCount++;
                const { node } = path;
                if (node.type == 'ArrowFunctionExpression') {
                    logArrowFunctionParams(t, path);
                } else {
                    const body = path.get('body');
                    path.node.params.forEach(node => {
                        body.unshiftContainer('body', consoleLogNode(t, node));
                    });
                }
            },
            AssignmentExpression(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                consoleLogCount++;
                const { node } = path;
                path.insertAfter(
                    consoleLogNode(t, { ...node, name: node.left.name })
                );
            },
            VariableDeclaration(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                consoleLogCount++;
                const { node } = path;
                node.declarations.forEach(node => {
                    if (node.type == 'VariableDeclarator') {
                        logVarDeclarators(t, path, node);
                    }
                });
            },
            Program(path, state) {
                console.log(
                    'Program path.node.loc.end.line: ',
                    path.node.loc.end.line
                );
            },
        },
    };
}

logItPlugin.getConsoleLogCount = function() {
    return consoleLogCount;
};
