// const consoleLogNode = require('./consoleLogNode.js');
const template = require('@babel/template').default;
const insertConsoleLogsIntoBody = require('./insertConsoleLogsIntoBody.js');
const { getCompleteObjectPropertyName } = require('./helper.js');

const realBody = template(`
{ return %%returnIdentifier%% }
`);

module.exports = (t, path) => {
    let { node } = path;
    let body = path.get('body');
    if (path.node.params.length == 0) {
        return;
    }
    if (
        node.type == 'ArrowFunctionExpression' &&
        body.type != 'BlockStatement'
    ) {
        const ast = realBody({
            returnIdentifier: body.node,
        });
        path.get('body').replaceWith(ast);
    }
    return path.node.params.forEach(node => {
        if (node.type == 'Identifier') {
            insertConsoleLogsIntoBody(body, t, {
                type: 'varName',
                info: { varName: node.name },
            });
        } else if (node.type == 'ObjectPattern') {
            node.properties.forEach(node => {
                return insertConsoleLogsIntoBody(body, t, {
                    type: 'varName',
                    info: { varName: node.value.name },
                });
            });
        } else if (node.type == 'AssignmentPattern') {
            const varName = getCompleteObjectPropertyName(node.left);
            insertConsoleLogsIntoBody(body, t, {
                type: 'varName',
                info: {
                    varName,
                },
            });
        }
    });
};
