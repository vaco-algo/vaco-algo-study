/**
 * leetcode problem link: https://leetcode.com/problems/first-missing-positive
 *
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
    const sequence = Array.from({ length: nums.length + 1 }, (_, i) => i + 1);

    for (let i = 0; i < sequence.length; i++) {
        if (!nums.includes(sequence[i])) return sequence[i];
    }
};
