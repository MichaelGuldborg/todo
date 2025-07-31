import {type CrudService} from './CrudService';
import type {CrudItem} from './CrudItem.ts';
import {createCrudError} from './CrudError.ts';
import {createId} from "./createId";

export const createLocalCrudService = <T extends CrudItem>(
  col: string,
  initial?: T[],
  compare?: (a: T, b: T) => number
): CrudService<T> => {
  const getItems = (): T[] => {
    const json = localStorage.getItem(col);
    if (json === null || json === undefined) return initial ? [...initial] : [];
    return JSON.parse(json);
  };
  const setItems = (items: T[]) => {
    if (items === null || items === undefined) return;
    const json = JSON.stringify(items);
    localStorage.setItem(col, json);
  };

  return {
    path: col,
    set: async (request) => {
      if (request.id === undefined || request.id === null) {
        throw createCrudError(400);
      }
      const items = getItems();
      const index = items.findIndex((e) => e.id === request.id);
      if (index === -1) {
        items.unshift(request);
      } else {
        items[index] = {...request};
      }
      setItems(items);
      return request;
    },
    create: async (item) => {
      item.id = createId();
      const items = getItems();
      items.unshift(item);
      setItems(items);
      return item;
    },
    get: async (id) => {
      const item = getItems().find((e) => e.id === id);
      if (item === undefined) throw createCrudError(404);
      return item;
    },
    getAll: async () => {
      const items = getItems();
      if (compare) items.sort(compare);
      return items;
    },
    update: async (request) => {
      const items = getItems();
      const index = items.findIndex((e) => e.id === request.id);
      if (index === -1) throw createCrudError(404);
      const prev = items[index];
      items[index] = {...prev, ...request};
      setItems(items);
      return items[index];
    },
    delete: async (id) => {
      const elements = getItems();
      const index = elements.findIndex((e) => e.id === id);
      if (index === -1) throw createCrudError(404);
      setItems(elements.splice(index, 1));
    },
  };
};
