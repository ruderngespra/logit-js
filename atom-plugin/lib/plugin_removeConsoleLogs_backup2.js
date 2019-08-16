const looksLike = require('./third_party_helpers.js');
// const isInsideRegion = require('./isInsideRegion.js');

module.exports = function({ types: t }) {
    return {
        name: 'transform-basic-remove-console',
        visitor: {
            CallExpression(path, state) {
                // if (!isInsideRegion(path, state)) {
                //     return;
                // }
                const isConsoleCall = looksLike(path, {
                    node: {
                        callee: {
                            type: 'MemberExpression',
                            object: { type: 'Identifier', name: 'console' },
                        },
                    },
                });
                if (!isConsoleCall) {
                    return;
                }
                path.remove();
            },
        },
    };
};
