/**
 * leetcode problem link: undefined
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  const result = nums
    .sort((a, b) => {
      if (a === b) return 0;

      const stringA = a.toString();
      const stringB = b.toString();

      return Number(stringB + stringA) - Number(stringA + stringB);
    })
    .join("");

  return Number(result) ? result : "0";
};
const isBalanced = function (root) {
  if (!root) return true;

  const getDepthDFS = (node, depth) => {
    if (!node) return depth;
    return Math.max(
      getDepthDFS(node.left, depth + 1),
      getDepthDFS(node.right, depth + 1)
    );
  };

  if (Math.abs(getDepthDFS(root.left, 0) - getDepthDFS(root.right, 0)) > 1)
    return false;

  return isBalanced(root.left) && isBalanced(root.right);
};
