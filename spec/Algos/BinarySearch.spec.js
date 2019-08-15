const Jasmine = require('jasmine');
const { binary_search } = require('../../Algos/BinarySearch');

describe('BinarySearch', () => {
  let array;
  let key;

  it('should return -1 if key is not found in array', () => {
    array = [0, 3, 4, 6, 65, 95, 100];
    key = 2;
    const result = binary_search(array, key);
    expect(result).toBe(-1);
  });

  it('should return the correct index if found in an odd array length', () => {
    array = [0, 3, 4, 6, 65, 95, 100];
    key = 100;
    const result = binary_search(array, key);
    expect(result).toBe(6);
  });

  it('should return the correct index if found in an even array length', () => {
    array = [0, 3, 4, 65, 95, 100];
    key = 65;
    const result = binary_search(array, key);
    expect(result).toBe(3);
  });
});
