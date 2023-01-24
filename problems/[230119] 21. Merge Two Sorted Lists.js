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
const mergeTwoLists = function(list1, list2) {
  const resultHead = new ListNode();
  let currentResultNode = resultHead;
  let currentList1Node = list1;
  let currentList2Node = list2;

  while (!isNaN(currentList1Node?.val) || !isNaN(currentList2Node?.val)) {
    let min = null;

    if ((currentList1Node?.val ?? 101) < (currentList2Node?.val ?? 101)) {
      min = currentList1Node.val;
      currentList1Node = currentList1Node.next;
    } else {
      min = currentList2Node.val;
      currentList2Node = currentList2Node.next;
    }

    currentResultNode.next = new ListNode(min);
    currentResultNode = currentResultNode.next;
  }

  return resultHead.next;
};
