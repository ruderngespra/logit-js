const sliceCode = require('./../../lib/sliceCode');

const testString ="first line\nsecond line\nthird line\nfourth line"

describe('sliceCode', () => {
    test('returns object with three properties with default input', () => {
      const result = sliceCode(testString, {start: 0, end: 1});
      ['before', 'after', 'selection'].forEach((property) => expect(result).toHaveProperty(property))
    });

    test('can find first line as selection', () => {
      const {before, selection, after} = sliceCode(testString, {start: 0, end: 1});
      expect(before).toBe('')
      expect(selection).toBe('first line')
      expect(after).toBe('second line\nthird line\nfourth line');
    })

    test('select more than one line', () => {
      const {before, selection, after} = sliceCode(testString, {start: 0, end: 2});
      expect(before).toBe('')
      expect(selection).toBe('first line\nsecond line')
      expect(after).toBe('third line\nfourth line');
    })

    test('select more than one line', () => {
      const {before, selection, after} = sliceCode(testString, {start: 1, end: 3});
      expect(before).toBe('first line')
      expect(selection).toBe('second line\nthird line')
      expect(after).toBe('fourth line');
    })

})


// TODOS Error handling
// Wann sollen Fehler geworfen werden und welche Art von Fehler? Wie propagated das?
