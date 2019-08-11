const consoleLogNode = require('./consoleLogNode.js');
const logVarDeclarators = require('./logVarDeclarators');
const logArrowFunctionParams = require('./logArrowFunctionParams.js');
const logExpression = require('./logExpression.js');

// const looksLike = require('./third_party_helpers.js');

const isInsideRegion = require('./isInsideRegion.js');
const chalk = require('chalk');

module.exports = logItPlugin;

// let consoleLogCount = 0;

const MyVisitor = {
    Identifier(path) {
        console.log('Visiting: ' + path.node.name);
        consoleLogNode(this.t, { type: 'varName', info: { varName: 'hey' } });
    },
};

function logItPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-logit',
        pre(state) {},
        visitor: {
            BlockStatement(path, state) {
                // console.log(Object.keys(path.node));
            },
            IfStatement(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                // console.log('if path keys: ', Object.keys(path));
                // console.log('if path parentPath: ', path.parentPath);
                // console.log('if path parentKey: ', path.parentKey);
                const { node } = path;
                const consequent = path.get('consequent');
                consequent.unshiftContainer(
                    'body',
                    consoleLogNode(t, {
                        type: 'info',
                        info: { parentType: node.type, condition: node.test },
                    })
                );
                if (node.alternate) {
                    if (node.alternate.type == 'BlockStatement') {
                        // console.log('node.alternate: ', node.alternate);
                        const alternate = path.get('alternate');
                        alternate.unshiftContainer(
                            'body',
                            consoleLogNode(t, {
                                type: 'info',
                                info: {
                                    parentType: 'ElseStatement',
                                },
                            })
                        );

                        // console.log('node.alternate.type', node.alternate.type);
                        // t.stringLiteral('hey');
                        // path.traverse(MyVisitor, { t });
                        // .unshiftContainer(
                        // 'body',
                        // consoleLogNode(t, {
                        //     type: 'info',
                        //     info: {
                        //         parentType: 'ElseStatement',
                        //     },
                        // })
                        // );
                    }
                }
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
                        body.unshiftContainer(
                            'body',
                            consoleLogNode(t, {
                                type: 'varName',
                                info: { varName: node.name },
                            })
                        );
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
