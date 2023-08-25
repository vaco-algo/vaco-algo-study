/**
 *
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @returns {number[]}
 */

const relocateMarbles = (nums, moveFrom, moveTo) => {
  const set = new Set(nums);

  for (let i = 0; i < moveFrom.length; i++) {
    set.delete(moveFrom[i]);
    set.add(moveTo[i]);
  }

  return Array.from(set).sort((a, b) => a - b);
};
