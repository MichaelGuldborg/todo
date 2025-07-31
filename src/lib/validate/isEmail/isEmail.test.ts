import {isEmail} from './isEmail';

describe('isEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('firstname.lastname@example.com')).toBe(true);
    expect(isEmail('user1234@example.co.uk')).toBe(true);
    expect(isEmail('user+test@example.com')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isEmail()).toBe(false);
    expect(isEmail('')).toBe(false);
    expect(isEmail('notanemailaddress')).toBe(false);
    expect(isEmail('test@example')).toBe(false);
    expect(isEmail('test@example.')).toBe(false);
    expect(isEmail('test@example.com.')).toBe(false);
    expect(isEmail('test@.com')).toBe(false);
    expect(isEmail('@example.com')).toBe(false);
    expect(isEmail('test@example..com')).toBe(false);
    expect(isEmail('test@example.c')).toBe(false);
  });
});
