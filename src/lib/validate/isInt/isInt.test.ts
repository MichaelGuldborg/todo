import {isInt} from './isInt';

describe('isInt', () => {
  test('empty strings', () => {
    expect(isInt(null)).toBeFalsy();
    expect(isInt(undefined)).toBeFalsy();
    expect(isInt('')).toBeFalsy();
    expect(isInt('01')).toBeFalsy();
  });

  test('integers', () => {
    expect(isInt('-2')).toBeTruthy();
    expect(isInt('-1')).toBeTruthy();
    expect(isInt('0')).toBeTruthy();
    expect(isInt('1')).toBeTruthy();
    expect(isInt('2')).toBeTruthy();
    expect(isInt('3')).toBeTruthy();
    expect(isInt('4')).toBeTruthy();
    expect(isInt('5')).toBeTruthy();
    expect(isInt('6')).toBeTruthy();
    expect(isInt('7')).toBeTruthy();
    expect(isInt('8')).toBeTruthy();
    expect(isInt('9')).toBeTruthy();
    expect(isInt('1234567890')).toBeTruthy();
  });
});
