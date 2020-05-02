const consoleLogNode = require('./consoleLogNode.js');

module.exports = (t, path, node) => {
    if (node.id.type == 'Identifier') {
        return path.insertAfter(
            consoleLogNode(t, {
                type: 'varName',
                info: { varName: node.id.name },
            })
        );
    } else if (node.id.type == 'ObjectPattern') {
        node.id.properties.forEach(({ value }) => {
            return path.insertAfter(
                consoleLogNode(t, {
                    type: 'varName',
                    info: { varName: value.name },
                })
            );
        });
    } else if (node.id.type == 'ArrayPattern') {
        node.id.elements.forEach(({ name }) => {
            return path.insertAfter(
                consoleLogNode(t, {
                    type: 'varName',
                    info: { varName: name },
                })
            );
        });
    }
};
