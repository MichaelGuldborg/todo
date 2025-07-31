export interface CrudService<
  T extends {
    id: string | undefined;
    [key: string]: unknown;
  },
> {
  path: string;
  compare?: (a: T, b: T) => number;
  set?: (e: T) => Promise<T>;
  setId?: (e: T) => T;
  create: (e: T) => Promise<T>;
  get: (id: string) => Promise<T>;
  getAll: () => Promise<T[]>;
  update: (e: Partial<T>) => Promise<T>;
  delete: (id: string) => Promise<void>;
}
