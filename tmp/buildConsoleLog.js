// This function builds the console log node that afterwards is
// inserted in the plugin.

module.exports = (t, info) => {
    const { name, type } = info;
    return t.callExpression(
        t.memberExpression(t.identifier('console'), t.identifier('log')),
        [t.stringLiteral(name + ': '), t.identifier(name)]
    );
};

// TODO: Try this out with babel-templates.
