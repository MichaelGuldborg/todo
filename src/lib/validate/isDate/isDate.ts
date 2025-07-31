/*
 * Validates date strings.
 *
 * For Sweden the following are valid date strings:
 * 2019-01-31, 2019.01.31, 2019/01/31
 * Single digit months and days are also ok, eg 2019/1/1
 *
 * For Denmark, Finland and Norway the following are valid date strings:
 * 31-01-2019, 31.01.2019, 31/01/2019
 * Single digit months and days are also ok, eg 1/1/2019
 */
import {isEmpty} from '../isEmpty/isEmpty';

type Language = 'sv' | 'da' | 'fi' | 'no' | 'en';

export const isDate = (
  s: string | undefined | null,
  language: Language = 'en',
): s is string => {
  if (isEmpty(s)) return false;

  const date = tryParseDayMonthYear(s, language);
  if (date === undefined) return false;
  const {day, month, year} = date;

  if (year < 0 || month < 1 || month > 12 || day < 1) {
    return false;
  }

  if (month === 2) {
    const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const limit = leap ? 29 : 28;
    if (day > limit) return false;
  } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    if (day > 31) return false;
  } else {
    if (day > 30) return false;
  }

  return true;
};

const tryParseDayMonthYear = (s: string, language: Language) => {
  try {
    if (language === 'sv') {
      const match = s.match(/^(\d{4})[.\-/](\d{1,2})[.\-/](\d{1,2})$/);
      if (!match) return undefined;
      return {
        day: parseInt(match[3]),
        month: parseInt(match[2]),
        year: parseInt(match[1]),
      };
    } else {
      const match = s.match(/^(\d{1,2})[.\-/](\d{1,2})[.\-/](\d{4})$/);
      if (!match) return undefined;
      return {
        day: parseInt(match[1]),
        month: parseInt(match[2]),
        year: parseInt(match[3]),
      };
    }
  } catch {
    return undefined;
  }
};
