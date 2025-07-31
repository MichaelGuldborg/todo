import {isEmpty} from './isEmpty';

describe('isEmpty', () => {
  test('empty strings', () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty('')).toBeTruthy();
  });

  test('non-empty strings', () => {
    expect(isEmpty(' ')).toBeFalsy();
    expect(isEmpty('0')).toBeFalsy();
    expect(isEmpty('1')).toBeFalsy();
    expect(isEmpty('a')).toBeFalsy();
    expect(isEmpty('\n')).toBeFalsy();
    expect(isEmpty('\t')).toBeFalsy();
  });
});
