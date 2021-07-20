const { every, contains, some } = require('../every-contains-some');

describe('every', () => {
  test('returns true if passed an empty array or positive number', () => {
    const positiveNum = (num) => num > 0;
    expect(every([], positiveNum)).toEqual(true)
    expect(every([1], positiveNum)).toEqual(true)
  })
  test('returns false if passed negative number', () => {
    const positiveNum = (num) => num > 0;
    expect(every([-1], positiveNum)).toEqual(false)
  })
  test('returns true if passed array contain positive numbers', () => {
    const positiveNum = (num) => num > 0;
    expect(every([1, 2, 3, 5], positiveNum)).toEqual(true)
  })
  test('returns false if passed array contain at least one negative numbers', () => {
    const positiveNum = (num) => num > 0;
    expect(every([1, -2, 3, 5], positiveNum)).toEqual(false)
  })
});
