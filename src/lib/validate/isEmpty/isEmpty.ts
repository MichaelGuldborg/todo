export const isEmpty = (
  s: string | undefined | null,
): s is null | undefined => {
  return s === null || s === undefined || s.length === 0;
};

export const isNotEmpty = (s: string | undefined | null) => !isEmpty(s);
