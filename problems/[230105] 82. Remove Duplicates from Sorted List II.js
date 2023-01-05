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
  const nodeHistory = new Map();
  let currentNode = head;

  while (currentNode?.val || currentNode?.val === 0) {
    nodeHistory.set(
      currentNode.val,
      nodeHistory.has(currentNode.val)
        ? nodeHistory.get(currentNode.val) + 1
        : 1
    );
    currentNode = currentNode.next;
  }

  currentNode = head;
  let nonDuplicatedHead = null;
  let currentNonDuplicated = null;

  while (currentNode?.val || currentNode?.val === 0) {
    if (nodeHistory.get(currentNode.val) === 1) {
      if (!nonDuplicatedHead) {
        nonDuplicatedHead = currentNode;
        currentNonDuplicated = nonDuplicatedHead;
      } else {
        currentNonDuplicated.next = currentNode;
        currentNonDuplicated = currentNonDuplicated.next;
      }
    }

    currentNode = currentNode.next;
  }

  currentNonDuplicated?.next && (currentNonDuplicated.next = null);
  return nonDuplicatedHead;
};
