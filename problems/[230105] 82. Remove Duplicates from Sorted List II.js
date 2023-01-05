/**
 * leetcode problem link: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let resultNode = head;
  let result = resultNode;

  let isDuplicated = false;

  while (resultNode.next) {
    if (resultNode.val === resultNode.next) {
      isDuplicated = true;
      resultNode = resultNode.next;
    } else {
      if (isDuplicated) {
        isDuplicated = false;
        resultNode = resultNode.next;
      }

      result.val = resultNode;
      resultNode = resultNode.next;
    }
  }

  return resultNode;
};
