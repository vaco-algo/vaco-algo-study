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
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  let root = head;
  let prevNode = null;
  let currentNode = head;
  let nextNode = head?.next;
  let isDuplicatedNode = false;

  while (nextNode) {
    if (currentNode.val === nextNode.val) {
      currentNode.next = nextNode.next;
      nextNode = currentNode.next;

      isDuplicatedNode = true;

      continue;
    }

    if (isDuplicatedNode) {
      if (currentNode.val === root.val) {
        currentNode.next = null;
        currentNode = nextNode;
        root = currentNode;
      } else {
        prevNode.next = nextNode;
        currentNode = nextNode;
      }

      nextNode = currentNode.next;

      isDuplicatedNode = false;

      continue;
    }

    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = currentNode.next;
  }

  if (isDuplicatedNode) {
    root.next
      ? prevNode.next = null
      : root = null;
  }

  return root;
};
