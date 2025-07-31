import {isDate} from './isDate';

describe('isDate', () => {
  test('dates invalid', () => {
    expect(isDate(null, 'sv')).toBeFalsy();
    expect(isDate(undefined, 'sv')).toBeFalsy();
    expect(isDate('', 'sv')).toBeFalsy();
    expect(isDate('a', 'sv')).toBeFalsy();
    expect(isDate('0', 'sv')).toBeFalsy();
    expect(isDate('31-01-2019', 'sv')).toBeFalsy();
    expect(isDate('2019-01-31', 'en')).toBeFalsy();
    expect(isDate('2019-01-32', 'en')).toBeFalsy();
    expect(isDate('2019-01-00', 'en')).toBeFalsy();
  });

  test('dates sweden', () => {
    expect(isDate('2019-01-31', 'sv')).toBeTruthy();
    expect(isDate('2019.01.31', 'sv')).toBeTruthy();
    expect(isDate('2019/01/31', 'sv')).toBeTruthy();
    expect(isDate('2019/1/1', 'sv')).toBeTruthy();
  });

  test('dates english', () => {
    expect(isDate('31-01-2019', 'en')).toBeTruthy();
    expect(isDate('31.01.2019', 'en')).toBeTruthy();
    expect(isDate('31/01/2019', 'en')).toBeTruthy();
    expect(isDate('1/1/2019', 'en')).toBeTruthy();
  });
});
