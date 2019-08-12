module.exports = function(t, path) {
    const functionParent = path.getFunctionParent();
    if (!functionParent) {
        return;
    }
    let parentFunctionName;
    if (
        functionParent.node &&
        (functionParent.node.type == 'FunctionExpression' ||
            functionParent.node.type == 'ArrowFunctionExpression')
    ) {
        parentFunctionName =
            functionParent.parent.id && functionParent.parent.id.name;
    } else if (functionParent.node.type == 'FunctionDeclaration') {
        parentFunctionName =
            functionParent.node.id && functionParent.node.id.name;
    }
    if (parentFunctionName != undefined) {
        return path.node.arguments.unshift(
            t.stringLiteral('Function ' + parentFunctionName)
        );
    }
};
