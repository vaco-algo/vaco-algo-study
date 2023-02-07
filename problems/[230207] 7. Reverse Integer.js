/**
 *  leetcode problem link: https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const string = Math.abs(x).toString();
    let reversedNumber = Number(string.split("").reverse().join(""));

    if (x < 0) reversedNumber = reversedNumber * -1;

    if (reversedNumber > Math.pow(2, 31) - 1 || reversedNumber < Math.pow(-2, 31)) return 0;

    return reversedNumber;
};
