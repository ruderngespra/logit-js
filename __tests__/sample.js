// Das ist bisher nur ein temporärer Pfad:
const transformString = require('./../lib/transformString.js');
const testStrings = require('./../samples/automated_testing/provideTestStrings.js');

test('transformString universal verbose1', () => {
    expect(
        transformString(testStrings['normal1'].before, { verbose: true })
    ).toEqual({
        success: true,
        code: testStrings['verbose1'].after,
    });
});

test('transformString universal normal1', () => {
    expect(transformString(testStrings['normal1'].before)).toEqual({
        success: true,
        code: testStrings['normal1'].after,
    });
});

// test('transformString without extra options adds basic console logs', () => {
//     expect(transformString(testStrings['1'].before)).toEqual({
//         success: true,
//         code: testStrings['1'].after,
//     });
// });

// xtest('simpleArrowDestructuring and logging', () => {
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
