import {filterDuplicateByKey} from './filterDuplicateByKey';

describe('filterDuplicateByKey', () => {
  const input = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 1, name: 'James'},
    {id: 3, name: 'Jake'},
  ];

  test('should return an empty array when the input list is undefined', () => {
    expect(filterDuplicateByKey(undefined, 'id')).toEqual([]);
  });

  test('should remove duplicate objects based on the specified key', () => {
    const expectedOutput = [
      {id: 1, name: 'John'},
      {id: 2, name: 'Jane'},
      {id: 3, name: 'Jake'},
    ];
    expect(filterDuplicateByKey(input, 'id')).toEqual(expectedOutput);
  });

  test('should work with keys that have different data types', () => {
    const inputWithMixedTypes = [
      {id: 1, name: 'John'},
      {id: '2', name: 'Jane'},
      {id: 1, name: 'James'},
      {id: 3, name: 'Jake'},
    ];
    const expectedOutput = [
      {id: 1, name: 'John'},
      {id: '2', name: 'Jane'},
      {id: 3, name: 'Jake'},
    ];
    expect(filterDuplicateByKey(inputWithMixedTypes, 'id')).toEqual(
      expectedOutput,
    );
  });
});
