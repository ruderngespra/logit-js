const consoleLogNode = require('./consoleLogNode.js');

module.exports = (t, path, node) => {
    if (node.type == 'Identifier') {
        return path.insertAfter(consoleLogNode(t, { name: node.name }));
    } else if (node.type == 'ObjectPattern') {
        node.id.properties.forEach(({ value }) => {
            return path.insertAfter(consoleLogNode(t, { name: value.name }));
        });
    }
};
