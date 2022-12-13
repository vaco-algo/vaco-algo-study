/**
 * leetcode problem link: https://leetcode.com/problems/container-with-most-water/
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  const max = {
    value: null,
    index: null
  };

  let result = 0;

  for (let i = 0; i < height.length; i++) {
    if (height[i] > max.value) {
      max.value = height[i];
      max.index = [i];
    } else if (height[i] === max.value) {
      max.index.push(i);
    }
  }

  for (let j = 0; j < height.length; j++) {
    for (let k = 0; k < max.index.length; k++) {
      const area = Math.abs((max.index[k] - j) * height[j]);

      if (area > result) {
        result = area;
      }
    }
  }

  return result;
};
