// TODO - Given a sorted array of integers, return the index of the given key. Return -1 if not found.
// Description: Binary search compares the target value to the middle element of the array. (Log search)

// Inputs: sorted integers [], key
// Outputs: index of given key or -1 if not found
// Constraints:
// Edge Cases:

//a is sorted array
const binary_search = (array, key) => {
  if (!array.indexOf(key)) return -1;

  let midptIdx;
  const length = array.length;

  if (length % 2 === 0) {
    midptIdx = length / 2 + 1;
  } else {
    midptIdx = Math.round(length / 2);
  }

  const index = array[midptIdx] < key ? 0 : midptIdx;
  const loopLength = array[midptIdx] < key ? length : midptIdx;

  if (array[midptIdx] === key) {
    return midptIdx;
  } else {
    for (let i = index; i < loopLength; i++) {
      let currValue = array[i];
      if (currValue === key) {
        return i;
      }
    }
  }

  return -1;
};

module.exports = { binary_search };
