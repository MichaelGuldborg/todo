import { createLocalCrudService } from '../lib/crud';
import type { Todo } from '../types/Todo';

export const todoService = createLocalCrudService<Todo>(
  'todos',
  [],
  (a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
);