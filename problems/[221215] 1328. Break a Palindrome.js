/**
 * leetcode problem link: https://leetcode.com/problems/break-a-palindrome/
 *
 * @param {string} palindrome
 * @return {string}
 */
 const breakPalindrome = function(palindrome) {
  if (palindrome.length === 1) {
    return "";
  }

  for (let i = 0; i < palindrome.length; i++) {
    if (
      palindrome[i] !== "a"
      && !(palindrome.length % 2 !== 0 && i === Math.floor(palindrome.length / 2))
    ) {
      return palindrome.slice(0, i) + "a" + palindrome.slice(i + 1);
    }
  }

  return palindrome.slice(0, palindrome.length - 1) + "b";
};
