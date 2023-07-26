/**
 * leetcode problem link: https://leetcode.com/problems/swap-nodes-in-pairs/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  if (!head || !head.next) return head;

  let nextNode = head.next;
  head.next = swapPairs(nextNode.next);
  nextNode.next = head;

  return nextNode;
};
