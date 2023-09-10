/**
 * @param {number} n
 * @return {number}
 */

function getCombination(n, r) {
  const memo = {};

  function getPermutation(m) {
    if (memo[m]) {
      return memo[m];
    }

    let num = m;
    let permutation = m;

    while (num > 1) {
      permutation = permutation * --num;
    }

    memo[m] = permutation;

    return permutation;
  }

  return n === r
    ? 1
    : getPermutation(n) / (getPermutation(r) * getPermutation(n - r));
}

var climbStairs = function (n) {
  let answer = 1;
  let N = Math.floor(n / 2);
  let R = N;

  while (R) {
    N = N + (n - (N + R));
    answer += getCombination(N, R);
    R--;
  }

  return answer;
};
