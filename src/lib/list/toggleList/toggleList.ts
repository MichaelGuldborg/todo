export const toggleList = <T>(list: T[] | undefined, item: T) => {
  const filtered = list?.filter((e) => e !== item) ?? [];
  if (list === undefined || list?.length === filtered.length) {
    filtered.push(item);
  }
  return filtered;
};
