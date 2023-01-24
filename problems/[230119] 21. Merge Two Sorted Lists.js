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
const mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) {
    return list1;
  }

  if (!list1 && list2) {
    return list2;
  }

  if (list1 && !list2) {
    return list1;
  }

  let firstNodeList = list1;
  let secondNodeList = list2;

  const array = [];

  while (true) {
    if (firstNodeList !== null) {
      array.push(firstNodeList);
      firstNodeList = firstNodeList.next;
    } else if (secondNodeList !== null) {
      array.push(secondNodeList);
      secondNodeList = secondNodeList.next;
    } else {
      break;
    }
  }

  array.sort((a, b) => {
    return a.val - b.val;
  });

  for (let i = 0; i < array.length - 1; i++) {
    array[i].next = array[i + 1];
  }

  return array[0];
};
