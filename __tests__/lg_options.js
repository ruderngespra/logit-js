// Das ist bisher nur ein temporärer Pfad:
const transformString = require('./../lib/transformString.js');
const testStrings = require('./../samples/automated_testing/provideTestStrings.js');

test('basic log only the part specified by line numbers', () => {
    expect(
        transformString(testStrings['lineNumbers'].before, {
            start: 7,
            end: 9,
        })
    ).toEqual({
        success: true,
        code: testStrings['lineNumbers'].after,
    });
});
