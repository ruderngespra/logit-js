const consoleLogNode = require('./consoleLogNode.js');
const chalk = require('chalk');

module.exports = logItPlugin;

function logItPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-logit',
        visitor: {
            Identifier(path) {},
            Expression(path) {
                // console.log('Expression path.node: ', path.node);
            },
            Statement(path) {
                const { type } = path.node;
                if (type == 'ExpressionStatement') {
                    console.log('ExpressionStatement!');
                }

                // console.log(chalk.red('Statement path.node:'));
                // console.log(path.node);
                // if (path.node.type == 'VariableDeclaration') {
                //     console.log(
                //         chalk.blue('VariableDeclaration declarations: '),
                //         path.node.declarations,
                //         chalk.green('VariableDeclaration declarations[0].id'),
                //         path.node.declarations[0].id
                //     );
                // }
            },
            BlockStatement(path) {
                // console.log(chalk.green('BlockStatement path.node:'));
                // console.log(path.node);
            },
            BindExpression(path) {
                // console.log('bindExpression: path.node', path.node);
            },
            // AssignmentExpression(path, { opts }) {
            //     if (opts.start && opts.start > path.node.loc.start.line) {
            //         return;
            //     }
            //     if (opts.end && opts.end < path.node.loc.end.line) {
            //         return;
            //     }
            //     // console.log('assignmentExpression path.node.name: ', path.node);
            //     path.insertAfter(
            //         consoleLogNode(t, {
            //             name: path.node.declarations[0].id.name,
            //         })
            //     );
            // },
        },
    };
}
