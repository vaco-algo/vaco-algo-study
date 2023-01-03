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

  while (true) {
    if (!currentNode.next) return false;

    if (visitedSet.has(currentNode.val)) return true;

    visitedSet.add(currentNode.val);
    currentNode = currentNode.next;
  }
};
