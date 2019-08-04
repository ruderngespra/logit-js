// Das ist bisher nur ein temporärer Pfad:
const transformString = require('./../lib/index.js');
const testStrings = require('./../samples/provideTestStrings.js');

xtest('basic log only the part specified by line numbers', () => {
    expect(
        transformString(testStrings['lineNumbers'].before, {
            lineStart: 7,
            lineEnd: 9,
        })
    ).toEqual({
        success: true,
        code: testStrings['lineNumbers'].after,
    });
});
