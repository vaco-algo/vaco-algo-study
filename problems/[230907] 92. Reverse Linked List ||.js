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
const reverseBetween = function (head, left, right) {
  // 접근 방식: left 에서 right 까지 임시로 저장하여 reverse 하고 다시 대입
  // 시간 복잡도: O(n)
  // 공간 복잡도: O(1)

  const temp = new ListNode(0, null);
  temp.next = head;
  let prev = temp;

  for (let i = 0; i < left - 1; i += 1) {
    prev = prev.next;
  }

  let current = prev.next;

  for (let i = 0; i < right - left; i += 1) {
    const nextNode = current.next;

    current.next = nextNode.next;
    nextNode.next = prev.next;
    prev.next = nextNode;
  }

  return temp.next;
};
