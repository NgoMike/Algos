const Jasmine = require('jasmine');
const BinarySearch = require('../../Algos/BinarySearch');

describe('BinarySearch', () => {
  const array = [0, 3, 4, 6, 65, 95, 100];
  let key;

  it('should return -1 if key is not found in array', () => {
    key = 2;
    const index = array.indexOf(key);
    expect(index).toBe(-1);
  });

  it('should return the correct index if found', () => {
    key = 100;
    const index = array.indexOf(key);
    expect(index).toBe(6);
  });
});
