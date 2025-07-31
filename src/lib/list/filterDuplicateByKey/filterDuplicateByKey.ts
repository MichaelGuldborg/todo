export const filterDuplicateByKey = <T extends object>(
  list: T[] | undefined,
  key: keyof T,
) => {
  if (!list?.length) return [];
  const seen: Record<string, boolean> = {};
  return list.filter(function (e) {
    const k = `${e[key]}`;
    return seen[k] ? false : (seen[k] = true);
  });
};
