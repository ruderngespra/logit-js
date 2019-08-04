module.exports = captainsLogPlugin;

function captainsLogPlugin(babel) {
    const { types: t } = babel;
    return {
        name: 'captains-log',
        visitor: {
            CallExpression(path) {
                console.log(path);
                path.node.arguments.unshift(t.stringLiteral('Damit'));
            },
        },
    };
}
