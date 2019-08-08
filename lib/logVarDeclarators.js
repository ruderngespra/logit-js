const consoleLogNode = require('./consoleLogNode.js');

module.exports = (t, path, node) => {
    if (node.id.type == 'Identifier') {
        return path.insertAfter(consoleLogNode(t, { name: node.id.name }));
    } else if (node.id.type == 'ObjectPattern') {
        node.id.properties.forEach(({ value }) => {
            return path.insertAfter(consoleLogNode(t, { name: value.name }));
        });
    }
};
