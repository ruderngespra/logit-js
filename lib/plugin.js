const consoleLogNode = require('./consoleLogNode.js');
const logVarDeclarators = require('./logVarDeclarators');
const logArrowFunctionParams = require('./logArrowFunctionParams.js');
const logExpression = require('./logExpression.js');

// const looksLike = require('./third_party_helpers.js');

const isInsideRegion = require('./isInsideRegion.js');
const chalk = require('chalk');

module.exports = logItPlugin;

// let consoleLogCount = 0;

function logItPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-logit',
        pre(state) {},
        visitor: {
            IfStatement(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                const { node } = path;
                const consequent = path.get('consequent');
                consequent.unshiftContainer(
                    'body',
                    consoleLogNode(t, {
                        type: 'info',
                        info: { parentType: node.type, condition: node.test },
                    })
                );
            },
            Function(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
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
            Expression(path, state) {
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
        post(state) {
            // console.log('consoleLogNode.count():', consoleLogNode.count());
            // console.log('state: ', Object.keys(state));
            // console.log('state: ', state.ast.loc);
            // console.log('this: ', this.file.ast.loc);
            // console.log(this.cache);
        },
    };
}

// logItPlugin.getConsoleLogCount = function() {
//     return consoleLogCount;
// };
