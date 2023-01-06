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
const deleteDuplicates = function(head) {
  let resultHead = null;
  let currentResultNode = null;
  let currentNode = head;

  while (typeof currentNode?.val === "number") {
    if (currentNode.val === currentNode.next?.val) {
      while (currentNode?.val === currentNode.next?.val) {
        currentNode = currentNode.next;
      }
      currentNode = currentNode.next;
      continue;
    }

    if (!resultHead) {
      resultHead = currentNode;
      currentResultNode = resultHead;
    } else {
      currentResultNode.next = currentNode;
      currentResultNode = currentResultNode.next;
    }
    currentNode = currentNode.next;
  }

  currentResultNode?.next && (currentResultNode.next = null);
  return resultHead;
};
