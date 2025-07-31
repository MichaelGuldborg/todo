import {isEmpty} from '../isEmpty/isEmpty';

export const isFloat = (s: string | undefined | null) => {
  try {
    if (isEmpty(s)) return false;
    const value = parseFloat(s);
    return !isNaN(value);
  } catch {
    return false;
  }
};

export const isNotFloat = (s: string | undefined | null) => !isFloat(s);

export const isPositiveFloat = (s: string | undefined | null) => {
  try {
    if (isEmpty(s)) return false;
    const float = parseFloat(s);
    return float >= 0;
  } catch {
    return false;
  }
};
