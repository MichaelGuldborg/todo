export const filterNull = <T>(
  array: (T | undefined | null)[] | undefined | null,
) => array?.filter((e): e is T => e !== undefined && e !== null) ?? [];
