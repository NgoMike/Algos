const jasmine = require('jasmine');
const { MyArray } = require('../../DS/Array');

describe('Array Class', () => {
  const newArray = new MyArray();

  beforeEach(() => {
    newArray.length = 2;
    newArray.data = {
      '0': 'test1',
      '1': 'test2'
    };
  });

  it('length should keep correct count', () => {
    let length = newArray.length;
    length++;
    expect(length).toEqual(3);
  });

  it('should GET the correct item', () => {
    const result = newArray.get(1);
    expect(result).toBe('test2');
  });

  it('should PUSH the item to the end of the data obj', () => {
    const item = 'test3';

    newArray.push(item);
    const resultArray = newArray.data;
    const resultArrayLength = newArray.length;
    expect(resultArrayLength).toEqual(3);
    expect(resultArray).toEqual({
      '0': 'test1',
      '1': 'test2',
      '2': 'test3'
    });
  });

  it('should POP off last item', () => {
    newArray.pop();
    const resultArray = newArray.data;
    const resultArrayLength = newArray.length;
    expect(resultArrayLength).toBe(1);
    expect(resultArray).toEqual({
      '0': 'test1'
    });
  });

  it('should DELETE item at the index given', () => {
    newArray.delete(1);
    const resultArray = newArray.data;
    const length = newArray.length;
    expect(length).toBe(1);
    expect(resultArray).toEqual({
      '0': 'test1'
    });
  });

  it('should UNSHIFT and add item to the front of the array', () => {
    newArray.unshift('hello');
    const resultArray = newArray.data;
    const length = newArray.length;
    expect(length).toBe(3);
    expect(resultArray).toEqual({
      '0': 'hello',
      '1': 'test1',
      '2': 'test2'
    });
  });

  it('should SHIFT and delete first item in the array', () => {
    newArray.shift();
    const resultArray = newArray.data;
    const length = newArray.length;
    expect(length).toBe(1);
    expect(resultArray).toEqual({
      '0': 'test2'
    });
  });

  it('should INSERT item at the correct index', () => {
    newArray.insert('hi', 1);
    const resultArray = newArray.data;
    const length = newArray.length;
    expect(length).toBe(3);
    expect(resultArray).toEqual({
      '0': 'test1',
      '1': 'hi',
      '2': 'test2'
    });
  });

  it('should shift items left at given index', () => {
    newArray.shiftItemsLeft(0);
    const resultArray = newArray.data;
    const length = newArray.length;
    expect(length).toBe(1);
    expect(resultArray).toEqual({
      '0': 'test2'
    });
  });

  it('should shift items right at given index', () => {
    newArray.push('');
    newArray.shiftItemsRight(0);
    const resultArray = newArray.data;
    expect(resultArray).toEqual({
      '0': 'test1',
      '1': 'test1',
      '2': 'test2'
    });
  });
});
