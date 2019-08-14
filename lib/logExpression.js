const consoleLogNode = require('./consoleLogNode.js');
// const isInsideRegion = require('./isInsideRegion.js');

function getCompleteObjectPropertyName(node, nameString = '') {
    if (node.property && node.property.type == 'Identifier') {
        nameString = '.' + node.property.name + nameString;
        return getCompleteObjectPropertyName(node.object, nameString);
    } else {
        return node.name + nameString;
    }
}

module.exports = (t, path) => {
    const { node } = path;
    if (
        node.type != 'AssignmentExpression' &&
        node.type != 'UpdateExpression'
    ) {
        return;
    }
    if (node.type == 'AssignmentExpression') {
        const varName = getCompleteObjectPropertyName(node.left);
        return path.insertAfter(
            consoleLogNode(t, {
                type: 'varName',
                info: {
                    varName,
                },
            })
        );
    } else if (node.type == 'UpdateExpression') {
        return path.insertAfter(
            consoleLogNode(t, {
                type: 'varName',
                info: { varName: node.argument.name },
            })
        );
    }
};
