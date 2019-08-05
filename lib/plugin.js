module.exports = logItPlugin;

function logItPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-logit',
        visitor: {
            VariableDeclaration(path, { opts }) {
                const varName = path.node.declarations[0].id.name;
                console.log({ opts });
                console.log('path.node.loc.start:', path.node.loc.start);
                if (opts.start && opts.start > path.node.loc.start.line) {
                    return null;
                }
                if (opts.end && opts.end < path.node.loc.end.line) {
                    return null;
                }
                path.insertAfter(
                    t.callExpression(
                        t.memberExpression(
                            t.identifier('console'),
                            t.identifier('log')
                        ),
                        [t.stringLiteral(varName + ': '), t.identifier(varName)]
                    )
                );
            },
        },
    };
}
