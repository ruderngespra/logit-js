// Ich habe etwas experimentiert. Die Pointe: Der Weg ist immer über das Definitions

function captainsLogPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'captains-log',
        visitor: {
            VariableDeclaration(path) {
                console.log(path.node.declarations[0].id.name);
                const varName = path.node.declarations[0].id.name;
                path.insertAfter(
                    t.callExpression(t.identifier('console'), [
                        t.identifier('log'),
                    ])
                );
            },
        },
    };
}
