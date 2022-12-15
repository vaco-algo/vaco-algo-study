/**
 * leetcode problem link: https://leetcode.com/problems/break-a-palindrome/
 *
 * @param {string} palindrome
 * @return {string}
 */
 const breakPalindrome = function (palindrome) {
  const inputString = palindrome.split("");

  if (inputString.length === 1) return "";

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== "a" && i !== Math.floor(inputString.length / 2)) {
      inputString[i] = "a";
      break;
    }

    if (i === inputString.length - 1) {
      inputString[i] = "b";
    }
  }

  return inputString.join("");
};
