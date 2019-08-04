module.exports = function({ types: t }) {
    return {
        visitor: {
            BinaryExpression(path, state) {
                console.log('Binary Expression!');
                if (path.node.operator !== '===') {
                    return;
                }
                t.memberExpression(
                    t.memberExpression(
                        t.identifier('member'),
                        t.identifier('expression')
                    ),
                    t.identifier('property')
                );
                path.node.left = t.identifier('sebmck');
                path.node.left = t.identifier('dork');
            },
        },
    };
};

/* Dieses "Plugin" funktioniert mutmaßlich nur, wenn man die Power
 * bestimmter Babel Module hat. Ihm wird ein Babel Objekt übergeben
 * und dann ist es sozusagen ein visitor.

Und dieser wird dann durch den path geschickt, das heißt mit path.traverse(visitor)

Aber was ist path in diesem fall? Die Relation ZWISCHEN zwei nodes.

*/
