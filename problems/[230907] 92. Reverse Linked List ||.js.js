/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) return head;

  let copyList = head;
  let i = 1;
  const valuesArr = [];

  while (copyList && i <= right) {
    if (i >= left) {
      valuesArr.push(copyList.val);
    }

    copyList = copyList.next;
    i++;
  }

  if (valuesArr.length) {
    copyList = head;
    i = 1;

    while (valuesArr.length) {
      if (i >= left) {
        copyList.val = valuesArr.pop();
      }

      copyList = copyList.next;
      i++;
    }
  }

  return head;
};
