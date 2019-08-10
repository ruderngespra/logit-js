const manipulatedString = require('@babel/core').transform(
    `function name(arg) {
    var a = '32423';
    console.log(a);
}
`,
    {
        plugins: ['transform-remove-console'],
    }
);

function name(arg) {
    var a = '32423';
    console.log(a);
}

console.log(manipulatedString);
