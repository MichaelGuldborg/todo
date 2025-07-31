import {sortByKey} from './sortByKey';

describe('sortByKey', () => {
  test('should sort a list of objects by the given key', () => {
    const list = [
      {id: 1, name: 'Alice'},
      {id: 2, name: 'Bob'},
      {id: 3, name: 'Charlie'},
    ];
    const sortedList = sortByKey(list, 'name');
    expect(sortedList).toEqual(
      [
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
      ].sort((a, b) => `${a.name}`.localeCompare(`${b.name}`)),
    );
  });

  test('should return an empty array if the list is undefined', () => {
    const list = undefined;
    const sortedList = sortByKey(list, 'name');
    expect(sortedList).toEqual([]);
  });

  test('should return an empty array if the list is null', () => {
    const list = null;
    const sortedList = sortByKey(list, 'name');
    expect(sortedList).toEqual([]);
  });

  test('should return an empty array if the list is an empty array', () => {
    const sortedList = sortByKey([], 'name');
    expect(sortedList).toEqual([]);
  });
});
