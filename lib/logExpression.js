const consoleLogNode = require('./consoleLogNode.js');
const { getCompleteObjectPropertyName } = require('./helper.js');

// const isInsideRegion = require('./isInsideRegion.js');

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
