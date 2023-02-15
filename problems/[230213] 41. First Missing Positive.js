/**
 * leetcode problem link: https://leetcode.com/problems/first-missing-positive
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
    for (let i = 1; i < nums.length + 2; i++) {
        if (!nums.includes(i)) return i;
    }
};
