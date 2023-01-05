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
  if (!head) return head;

  let removedLinkedList = null;

  let prev = head;
  let curr = head.next;
  const duplicates = [];
  let currentNode = null;

  while (prev) {
    if (prev.val !== curr?.val && duplicates.indexOf(prev.val) === -1) {
      const newNode = new ListNode(prev.val);

      if (!removedLinkedList) {
        removedLinkedList = newNode;
        currentNode = removedLinkedList;
      } else {
        currentNode.next = newNode;
        currentNode = currentNode.next;
      }
    }

    if (prev.val === curr?.val) {
      duplicates.push(prev.val);
    }

    prev = curr;
    curr = curr?.next;
  }

  return removedLinkedList;
};
