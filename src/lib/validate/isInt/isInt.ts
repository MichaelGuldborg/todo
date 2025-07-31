import {isEmpty} from '../isEmpty/isEmpty';

const regex = /^-?([1-9]\d*|0)$/;
export const isInt = (s: string | undefined | null): s is string => {
  if (s === null || s === undefined) return false;
  return regex.test(s);
};

export const isNotInt = (s: string | undefined | null): s is undefined | null =>
  !isInt(s);

export const isPositiveInt = (s: string | undefined | null) => {
  try {
    if (isEmpty(s)) return false;
    const float = parseInt(s);
    return float >= 0;
  } catch {
    return false;
  }
};
