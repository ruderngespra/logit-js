const consoleLogNode = require('./consoleLogNode.js');
const isInsideRegion = require('./isInsideRegion.js');
const chalk = require('chalk');

module.exports = logItPlugin;

function logItPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-logit',
        visitor: {
            AssignmentExpression(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                const { node } = path;
                // path.insertAfter(
                //     consoleLogNode(t, {
                //         name: node.left.name,
                //     })
                // );
            },
            VariableDeclarator(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                // console.log(chalk.red('path.node.id: '), path.node.id);
                // if (path.node.id.type == 'Identifier') {
                //     console.log('path.node.id.name', path.node.id.name);
                //     path.insertAfter(
                //         consoleLogNode(t, { name: path.node.id.name })
                //     );
                // } else if (path.node.id.type == 'ObjectPattern') {
                //     path.node.id.properties.forEach(({ value }) => {
                //         path.insertAfter(
                //             consoleLogNode(t, { name: value.name })
                //         );
                //     });
                // }
            },
            VariableDeclaration(path, state) {
                if (!isInsideRegion(path, state)) {
                    return;
                }
                const { node } = path;
                console.log(chalk.red('node: '), node);
                node.declarations.forEach(node => {
                    if (node.type == 'VariableDeclarator') {
                        if (node.id.type == 'Identifier') {
                            path.insertAfter(
                                consoleLogNode(t, { name: node.id.name })
                            );
                        } else if (node.id.type == 'ObjectPattern') {
                            node.id.properties.forEach(({ value }) => {
                                path.insertAfter(
                                    consoleLogNode(t, { name: value.name })
                                );
                            });
                        }
                    }
                });
            },
        },
    };
}
