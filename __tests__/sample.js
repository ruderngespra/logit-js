// Das ist bisher nur ein temporärer Pfad:
const transformString = require('./../lib/transformString.js');
const testStrings = require('./../samples/provideTestStrings.js');

// Dummy test:
// xtest('two plus two is four', () => {
//     expect(2 + 2).toBe(4);
// });

test('transformString returns error if and only if input is no string', () => {
    let test = transformString([]);
    expect(test).toEqual(
        expect.objectContaining({ success: false, error: 'Invalid input type' })
    );
    test = transformString({ hello: 'world' });
    expect(test).toEqual(
        expect.objectContaining({ success: false, error: 'Invalid input type' })
    );
    test = transformString(234);
    expect(test).toEqual(
        expect.objectContaining({ success: false, error: 'Invalid input type' })
    );
    test = transformString(true);
    expect(test).toEqual(
        expect.objectContaining({ success: false, error: 'Invalid input type' })
    );
    test = transformString('testString');
    expect(test).toEqual(
        expect.not.objectContaining({
            error: 'Invalid input type',
        })
    );
});

test('transformString without extra options adds basic console logs', () => {
    expect(transformString(testStrings['1'].before)).toEqual({
        success: true,
        code: testStrings['1'].after,
    });
});

// test('simpleArrowDestructuring and logging', () => {
//     expect(
//         transformString(testStrings['simpleArrowDestructuring'].before)
//     ).toEqual({
//         success: true,
//         code: testStrings['simpleArrowDestructuring'].after,
//     });
// });

// test('noSemicolons and logging', () => {
//     expect(transformString(testStrings['noSemicolons'].before)).toEqual({
//         success: true,
//         code: testStrings['noSemicolons'].after,
//     });
// });

// test('transformString without extra options adds basic console logs more complicated', () => {
//     expect(transformString(testStrings['2'].before)).toEqual({
//         success: true,
//         code: testStrings['2'].after,
//     });
// });

// test('transformString without extra options adds basic console logs with promises and destructuring of arrow functions', () => {
//     expect(transformString(testStrings['promises1'].before)).toEqual({
//         success: true,
//         code: testStrings['promises1'].after,
//     });
// });
