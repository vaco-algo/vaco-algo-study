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
const hasCycle = function (head) {
  if (!head || !head.next) return false;

  let temp = head;

  while (temp.next) {
    if (temp.visited) {
      return true;
    }

    temp.visited = true;
    temp = temp.next;
  }

  return false;
};
