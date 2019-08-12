const consoleLogNode = require('./consoleLogNode.js');
const isInsideRegion = require('./isInsideRegion.js');

module.exports = (t, path, state) => {
    const { node } = path;
    if (
        node.type != 'AssignmentExpression' &&
        node.type != 'UpdateExpression'
    ) {
        return;
    }
    if (node.type == 'AssignmentExpression') {
        return path.insertAfter(
            consoleLogNode(t, {
                type: 'varName',
                info: { varName: node.left.name },
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
