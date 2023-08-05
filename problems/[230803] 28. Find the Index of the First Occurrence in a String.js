/**
 * leetcode problem link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;

  return haystack.indexOf(needle);
};
