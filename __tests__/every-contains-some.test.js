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
describe('contains', () => {
  test('returns false if passed an empty array', () => {
    const array = [];
    const value = 2;
    expect(contains(array, value)).toEqual(false)
  })
  test('returns false if passed array value do not match expected value', () => {
    let array = [3];
    const value = 2;
    expect(contains(array, value)).toEqual(false)
    array = [3, 5, 7];
    expect(contains(array, value)).toEqual(false)
  })
  test('returns true if passed array with match expected value', () => {
    const array = [3, 2];
    const value = 2;
    expect(contains(array, value)).toEqual(true)
  })
})
describe('some', () => {
  const number = (value) => typeof value === 'number';
  test('returns false if passed an empty array', () => {
    expect(some([], number)).toEqual(false)
  })
  test('return false if passed array does not contain number', () => {
    expect(some(['hi', '3', {}, null], number)).toEqual(false)
  })
  test('return true if passed array contain number', () => {
    expect(some(['hi', '3', 3, {}, null], number)).toEqual(true)
  })
})
