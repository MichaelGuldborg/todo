// Allowed: letters from all languages, combining marks, apostrophes, hyphens, shortening punctuations, and spaces
// Not allowed: 1) numbers, 2) other punctuation marks than above, 3) other special characters, 4) consecutive spaces, apostrophes, or hyphens, 5) starting or ending with a space, apostrophe, or hyphen
const NAME_REGEX = /^[\p{L}\p{M}]+(?:\.?[''\p{Pd}\s][\p{L}\p{M}]+)*$/u;

// Not allowed: any whitespace characters other than space
const NON_SPACE_WHITESPACE = /[^\S ]/;

export const isName = (name: string): boolean => {
  if (typeof name !== 'string' || name.trim().length === 0) return false;
  if (NON_SPACE_WHITESPACE.test(name)) return false;
  return NAME_REGEX.test(name);
};
