const consoleLogNode = require('./consoleLogNode.js');

//

module.exports = (t, path, callback) => {
    const { node } = path;
    if (node.type == 'Identifier') {
        insertConsoleLogsIntoBody(body, t, {
            type: 'varName',
            info: { varName: node.name },
        });
    } else if (node.type == 'ObjectPattern') {
        // console.log('node: ', node);
        node.properties.forEach(({ value }) => {
            insertConsoleLogsIntoBody(body, t, {
                type: 'varName',
                info: { varName: value.name },
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
};

// if (node.id.type == 'Identifier') {
//     return path.insertAfter(
//         consoleLogNode(t, {
//             type: 'varName',
//             info: { varName: node.id.name },
//         })
//     );
// } else if (node.id.type == 'ObjectPattern') {
//     node.id.properties.forEach(({ value }) => {
//         return path.insertAfter(
//             consoleLogNode(t, {
//                 type: 'varName',
//                 info: { varName: value.name },
//             })
//         );
//     });
// } else if (node.id.type == 'ArrayPattern') {
//     node.id.elements.forEach(({ name }) => {
//         return path.insertAfter(
//             consoleLogNode(t, {
//                 type: 'varName',
//                 info: { varName: name },
//             })
//         );
//     });
// }
