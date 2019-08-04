module.exports = logItPlugin;

function logItPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'babel-logit',
        visitor: {
            VariableDeclaration(path) {
                const varName = path.node.declarations[0].id.name;
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

// function logitPlugin(babel) {
//     const { types: t } = babel;
//     return {
//         name: 'babel-logit',
//         visitor: {
//             VariableDeclaration(path) {
//                 console.log(path.node.declarations[0].id.name);
//                 const varName = path.node.declarations[0].id.name;
//                 path.insertAfter(
//                     t.expressionStatement(t.stringLiteral(varName + ': '))
//                 );
//             },
//         },
//     };
// }

// path.insertAfter(t.CallExpression(t.MemberExpression(t.Identifier)));

// t.callExpression(
//   t.identifier("console"),
//   t.arrayExpression(t.identifier("log"))
// )
