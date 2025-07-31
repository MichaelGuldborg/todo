import type { CrudItem } from '../lib/crud';

export interface Todo extends CrudItem {
  title: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TodoFilter = 'all' | 'active' | 'completed';