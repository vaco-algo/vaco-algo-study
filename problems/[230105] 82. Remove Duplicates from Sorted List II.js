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
  if (!head || !head.next) return head;

  let currentNode = head.next;
  let passed = head.val;
  const newList = new ListNode(head.val);
  let copyNewList = newList;

  while (currentNode) {
    if (currentNode.val === copyNewList.val) {
      if (!newList.next && !currentNode.next) {
        return newList.next;
      }

      copyNewList.val = 101;
    }

    if (passed !== currentNode.val) {
      if (
        !currentNode.next ||
        (currentNode.next && currentNode.val !== currentNode.next.val)
      ) {
        if (copyNewList.val === 101) {
          copyNewList.val = currentNode.val;
        } else {
          copyNewList.next = new ListNode(currentNode.val);
          copyNewList = copyNewList.next;
        }
      }
    }

    passed = currentNode.val;
    currentNode = currentNode.next;
  }

  return newList.val === 101 ? newList.next : newList;
};

var deleteDuplicates2 = function (head) {
  if (!head || !head.next) return head;
  let copyHead = head;
  const arr = {};
  while (copyHead) {
    arr[copyHead.val] = arr[copyHead.val] + 1 || 1;
    copyHead = copyHead.next;
  }

  const test = Object.entries(arr)
    .filter(([, value]) => value === 1)
    .map(([key]) => parseInt(key))
    .sort((a, b) => a - b);

  if (!test.length) return new ListNode().next;

  let tt = null;
  let copy;

  for (let key of test) {
    if (!tt) {
      tt = new ListNode(key);
      copy = tt;
      continue;
    }
    copy.next = new ListNode(key);
    copy = copy.next;
  }

  return tt;
};
