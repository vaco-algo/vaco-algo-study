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
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  let currentNode = head;

  while (!!currentNode?.next) {
    if (currentNode.visited) {
      return true;
    }

    currentNode.visited = true;
    currentNode = currentNode.next;
  }

  return false;
};
