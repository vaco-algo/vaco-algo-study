/**
 * leetcode problem link: https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null;

  const result = new ListNode();
  let currentNode = result;
  let currentL1 = list1;
  let currentL2 = list2;

  while (currentL1 !== null || currentL2 !== null) {
    const currentL1Value = currentL1 ? currentL1.val : 101;
    const currentL2Value = currentL2 ? currentL2.val : 101;

    if (currentL1Value <= currentL2Value) {
      currentNode.val = currentL1Value;
      currentL1 = currentL1.next;
    } else {
      currentNode.val = currentL2Value;
      currentL2 = currentL2.next;
    }

    if (currentL1 !== null || currentL2 !== null) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
  }

  return result;
};
