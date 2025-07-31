import {toggleList} from './toggleList';

describe('toggleList', () => {
  test('should toggle an item in the list', () => {
    const list = [1, 2, 3];
    const item = 2;
    const result = toggleList(list, item);
    expect(result).toEqual([1, 3]);
  });

  test('should add an item to the list if it is not in the list', () => {
    const list = [1, 2, 3];
    const item = 4;
    const result = toggleList(list, item);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should handle empty list', () => {
    const item = 1;
    const result = toggleList(undefined, item);
    expect(result).toEqual([1]);
  });
});
