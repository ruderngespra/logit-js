const consoleLogNode = require('./consoleLogNode.js');
const insertConsoleLogsIntoBody = require('./insertConsoleLogsIntoBody.js');
const { getCompleteObjectPropertyName } = require('./helper.js');

//

module.exports = (t, path, location) => {
    const { node } = path;
    let varName;
    let body;
    if (location == 'after') {
        if (node.type == 'Identifier') {
            varName = node.name;
            return path.insertAfter(
                consoleLogNode(t, {
                    type: 'varName',
                    info: { varName },
                })
            );
        }
        if (node.type == 'ObjectPattern') {
            return node.properties.forEach(({ value }) => {
                path.insertAfter(
                    consoleLogNode(t, {
                        type: 'varName',
                        info: { varName: value },
                    })
                );
            });
        }
        if (node.type == 'AssignmentExpression') {
            varName = getCompleteObjectPropertyName(node.left);
            return path.insertAfter(
                consoleLogNode(t, {
                    type: 'varName',
                    info: {
                        varName,
                    },
                })
            );
        }
        if (node.type == 'UpdateExpression') {
            varName = node.argument.name;
            return path.insertAfter(
                consoleLogNode(t, {
                    type: 'varName',
                    info: { varName },
                })
            );
        }
        if (node.type == 'ArrayPattern') {
            return node.elements.forEach(({ name }) => {
                path.insertAfter(
                    consoleLogNode(t, {
                        type: 'varName',
                        info: { varName: name },
                    })
                );
            });
        }
    }
    if (location == 'body') {
        if (node.type == 'Identifier') {
            varName = node.name;
            return insertConsoleLogsIntoBody(body, t, {
                type: 'varName',
                info: { varName },
            });
        }
        if (node.type == 'ObjectPattern') {
            return node.properties.forEach(({ value }) => {
                insertConsoleLogsIntoBody(body, t, {
                    type: 'varName',
                    info: { varName: value.name },
                });
            });
        } else if (node.type == 'AssignmentPattern') {
            varName = getCompleteObjectPropertyName(node.left);
            return insertConsoleLogsIntoBody(body, t, {
                type: 'varName',
                info: {
                    varName,
                },
            });
        }
    }
};
