/**
 * leetcode problem link: https://leetcode.com/problems/break-a-palindrome/
 *
 * @param {string} palindrome
 * @return {string}
 */
const breakPalindrome = function (palindrome) {
  if (palindrome.length === 1) return "";

  const result = palindrome.replace(/[^a]/, "a");

  const deduplicate = new Set(result.split(""));

  if (deduplicate.size === 1) {
    for (let i = palindrome.length - 1; i >= 0; i--) {
      if (palindrome[i] === "a") {
        return palindrome.substring(0, i) + "b" + palindrome.substring(i + 1);
      }
    }
  }

  return result;
};
