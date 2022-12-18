/**
 * leetcode problem link: https://leetcode.com/problems/break-a-palindrome/
 *
 * @param {string} palindrome
 * @return {string}
 */
const breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) return "";

    for (let i = 0; i < Math.floor(palindrome.length / 2); i++) {
        if (palindrome[i] !== "a") {
            return palindrome.substring(0, i) + "a" + palindrome.substring(i + 1);
        }
    }

    return palindrome.substring(0, palindrome.length - 1) + "b";
};
