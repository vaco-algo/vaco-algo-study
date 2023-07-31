/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
  function changedNode(prevNode, node, nextNode) {
    const thirdNode = nextNode.next || null;
    if (prevNode) {
      prevNode.next = nextNode;
    }
    nextNode.next = node;
    node.next = thirdNode;

    thirdNode?.next && changedNode(node, node.next, thirdNode.next);

    return nextNode;
  }

  if (!head || !head?.next) {
    return head;
  }

  return changedNode(null, head, head.next);
};
