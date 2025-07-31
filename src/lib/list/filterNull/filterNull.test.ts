import {filterNull} from './filterNull';

describe('filterNull', () => {
  test('undefined', () => {
    const result = filterNull(undefined);
    expect(result.length).toBe(0);
  });
  test('empty list', () => {
    const result = filterNull([]);
    expect(result.length).toBe(0);
  });
  test('non empty list', () => {
    const result = filterNull([0, '', false]);
    expect(result.length).toBe(3);
  });
  test('non empty list', () => {
    const result = filterNull(['value', undefined, null]);
    expect(result.length).toBe(1);
  });
});
