/**
 * leetcode problem link: https://leetcode.com/problems/linked-list-cycle/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  if (!head) return false;

  const visitedSet = new Set();
  let currentNode = head;

  while (currentNode.next) {
    if (visitedSet.has(currentNode)) return true;

    visitedSet.add(currentNode);
    currentNode = currentNode.next;
  }

  return false;
};
