const transformString = require('./../../lib/transformString');
const testStrings = require('./../../samples/demo/provideTestStrings.js');

describe('transformString method', () => {
  describe('default', () => {
    test('transformString simpleStructures', () => {
      const transformedString = transformString(testStrings['simpleStructures'].before)      
      console.log('transformedString: ', JSON.stringify(transformedString, null, 2));
      expect(transformString(testStrings['simpleStructures'].before)).toEqual({
        success: true,
        code: testStrings['simpleStructures'].after,
      });      
    });

    test('transformString promise', () => {
      expect(transformString(testStrings['promises'].before)).toEqual({
        success: true,
        code: testStrings['promises'].after,
      });
    });

    test('transformString pluginFile', () => {
      expect(transformString(testStrings['pluginFile'].before)).toEqual({
        success: true,
        code: testStrings['pluginFile'].after,
      });
    });  
  })

  describe('verbose', () => {
    test('transformString promise verbose', () => {
      expect(transformString(testStrings['promises'].before, { verbose: true })).toEqual({
        success: true,
        code: testStrings['promisesVerbose'].after,
      });
    });

    test('transformString remove from verbose', () => {
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


    test('transformString remove from verbose', () => {
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
  })

})
