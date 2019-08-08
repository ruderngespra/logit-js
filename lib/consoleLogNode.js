// This function builds the console log node that afterwards is
// inserted in the plugin.

module.exports = (t, info) => {
    const { name, loc } = info;
    return t.callExpression(
        t.memberExpression(t.identifier('console'), t.identifier('log')),
        [
            t.stringLiteral(name + ` (${loc.start.line}:${loc.start.column}):`),
            t.identifier(name),
        ]
    );
};

// TODO: Try this out with babel-templates.
