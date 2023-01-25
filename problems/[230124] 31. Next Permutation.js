/**
 * leetcode problem link: undefined
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function TreeNode(val, left, right) {
  this.value = val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;

  this.addTree = (val) => {
    let currentNode = this;
    while (currentNode.value !== val) {
      if (val < currentNode.value && currentNode.left === null) {
        currentNode.left = new TreeNode(val);

        return;
      } else if (val > currentNode.value && currentNode.right === null) {
        currentNode.right = new TreeNode(val);

        return;
      }

      currentNode =
        val < currentNode.value ? currentNode.left : currentNode.right;
    }

    return;
  };
}

const searchSmallestBiggerNumber = (number, node) => {
  let result;
  let currentNode = node;

  while (currentNode !== null) {
    result = currentNode.value;

    if (number >= currentNode.value) {
      currentNode = currentNode.right;
    } else {
      currentNode = currentNode.left;
    }
  }

  return result > number ? result : null;
};

const nextPermutation = function (nums) {
  const root = new TreeNode(nums.at(-1));
  const numbers = {};
  numbers[nums.at(-1)] = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i -= 1) {
    const targetNumber = searchSmallestBiggerNumber(nums[i], root);

    if (targetNumber) {
      [nums[i], nums[numbers[targetNumber]]] = [
        nums[numbers[targetNumber]],
        nums[i],
      ];

      const tail = nums.splice(i + 1);
      Array.prototype.push.apply(
        nums,
        tail.sort((a, b) => a - b)
      );

      return;
    }

    numbers[nums[i]] = i;
    root.addTree(nums[i]);
  }

  nums.sort((a, b) => a - b);
};
