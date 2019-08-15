const transformString = require('./../lib/transformString.js');
const testStrings = require('./../samples/demo/provideTestStrings.js');

test('transformString promise verbose', () => {
    expect(transformString(testStrings['promises'].before, { verbose: true })).toEqual({
        success: true,
        code: testStrings['promisesVerbose'].after,
    });
});

test('transformString promise normal1', () => {
    expect(transformString(testStrings['promises'].before)).toEqual({
        success: true,
        code: testStrings['promises'].after,
    });
});

xtest('transformString remove from verbose', () => {
    expect(transformString(testStrings['promisesVerbose'].after, { remove: true })).toEqual({
        success: true,
        code: testStrings['promises'].before,
    });
});

test('transformString simpleStructures verbose', () => {
    expect(transformString(testStrings['simpleStructures'].before, { verbose: true })).toEqual({
        success: true,
        code: testStrings['simpleStructuresVerbose'].after,
    });
});

test('transformString simpleStructures normal1', () => {
    expect(transformString(testStrings['simpleStructures'].before)).toEqual({
        success: true,
        code: testStrings['simpleStructures'].after,
    });
});

xtest('transformString remove from verbose', () => {
    expect(transformString(testStrings['simpleStructuresVerbose'].after, { remove: true })).toEqual({
        success: true,
        code: testStrings['simpleStructures'].before,
    });
});

test('transformString pluginFile verbose', () => {
    expect(transformString(testStrings['pluginFile'].before, { verbose: true })).toEqual({
        success: true,
        code: testStrings['pluginFileVerbose'].after,
    });
});

test('transformString pluginFile normal1', () => {
    expect(transformString(testStrings['pluginFile'].before)).toEqual({
        success: true,
        code: testStrings['pluginFile'].after,
    });
});
