module.exports = {
    type: 'Program',
    start: 0,
    end: 30,
    body: [
        {
            type: 'ExpressionStatement',
            start: 2,
            end: 29,
            expression: {
                type: 'CallExpression',
                start: 2,
                end: 29,
                callee: {
                    type: 'MemberExpression',
                    start: 2,
                    end: 13,
                    object: {
                        type: 'Identifier',
                        start: 2,
                        end: 9,
                        name: 'console',
                    },
                    property: {
                        type: 'Identifier',
                        start: 10,
                        end: 13,
                        name: 'log',
                    },
                    computed: false,
                },
                arguments: [
                    {
                        type: 'Literal',
                        start: 14,
                        end: 28,
                        value: 'Hello World!',
                        raw: "'Hello World!'",
                    },
                ],
            },
        },
    ],
    sourceType: 'module',
};
