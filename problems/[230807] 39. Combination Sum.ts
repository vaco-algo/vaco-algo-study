/**
* leetcode problem link: https://leetcode.com/problems/combination-sum/
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]} a list of all unique combinations of candidates where the chosen numbers sum to target
 */

const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];

  const DFS = (candidate: number[] = [], goal: number = target, index: number = 0): void => {
    const sum: number = candidate.reduce((acc, cur) => acc + cur, 0);

    if (sum === goal) {
      result.push(candidate);
      return;
    }

    for (let i = index; i < candidates.length; i += 1) {
      if (sum + candidates[i] <= goal) {
        DFS([...candidate, candidates[i]], goal, i);
      }
    }
  };

  DFS();

  return result;
};
