import {isFloat, isNotFloat, isPositiveFloat} from './isFloat';

describe('isFloat', () => {
  it('should return true for valid float values', () => {
    expect(isFloat('3.14')).toBe(true);
    expect(isFloat('-2.718')).toBe(true);
    expect(isFloat('0')).toBe(true);
    expect(isFloat('.5')).toBe(true);
  });

  it('should return false for invalid float values', () => {
    expect(isFloat('')).toBe(false);
    expect(isFloat(null)).toBe(false);
    expect(isFloat(undefined)).toBe(false);
    expect(isFloat('not a float')).toBe(false);
  });
});

describe('isNotFloat', () => {
  it('should return the opposite of isFloat', () => {
    expect(isNotFloat('3.14')).toBe(false);
    expect(isNotFloat('-2.718')).toBe(false);
    expect(isNotFloat('0')).toBe(false);
    expect(isNotFloat('.5')).toBe(false);

    expect(isNotFloat('')).toBe(true);
    expect(isNotFloat(null)).toBe(true);
    expect(isNotFloat(undefined)).toBe(true);
    expect(isNotFloat('not a float')).toBe(true);
  });
});

describe('isPositiveFloat', () => {
  it('should return true for positive float values', () => {
    expect(isPositiveFloat('3.14')).toBe(true);
    expect(isPositiveFloat('0')).toBe(true);
    expect(isPositiveFloat('.5')).toBe(true);
  });

  it('should return false for negative or invalid float values', () => {
    expect(isPositiveFloat('-2.718')).toBe(false);
    expect(isPositiveFloat('')).toBe(false);
    expect(isPositiveFloat(null)).toBe(false);
    expect(isPositiveFloat(undefined)).toBe(false);
    expect(isPositiveFloat('not a float')).toBe(false);
  });
});
