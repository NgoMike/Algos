const jasmine = require('jasmine');
const { twoSum } = require('../../Algos/TwoSum');

describe('twoSum function', () => {
  it('should return the correct indices that adds up to equal target', () => {
    const array = [0, 2, 3, 4, 5];
    const target = 6;
    const result = twoSum(array, target);
    expect(result).toEqual([1, 3]);
  });

  it('should return correct indices if there is two of same number that sums to target', () => {
    const array = [3, 3];
    const target = 6;
    const result = twoSum(array, target);
    expect(result).toEqual([0, 1]);
  });
});
