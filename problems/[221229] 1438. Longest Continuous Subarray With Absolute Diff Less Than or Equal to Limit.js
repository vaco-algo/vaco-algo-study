/**
 * leetcode problem link: https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Q {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.min = null;
    this.max = null;
  }

  setMin(val) {
    if (val) {
      if (!this.min) {
        return (this.min = val);
      }
      this.min = Math.min(val, this.min);
      return;
    }
    let current = this.head;
    let currentMin = this.head.value;

    while (current.next) {
      current = current.next;

      if (currentMin > current.value) {
        currentMin = current.value;
      }
    }

    this.min = currentMin;
    return this.min;
  }

  setMax(val) {
    if (val) {
      if (!this.max) {
        return (this.max = val);
      }
      this.max = Math.max(val, this.max);
      return;
    }

    let current = this.head;
    let currentMax = this.head.value;

    while (current.next) {
      current = current.next;

      if (currentMax < current.value) {
        currentMax = current.value;
      }
    }

    this.max = currentMax;
    return this.max;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
      this.setMin(val);
      this.setMax(val);
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.setMin(val);
      this.setMax(val);
    }

    this.size++;
  }

  dequeue() {
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.min = null;
      this.max = null;
    } else {
      this.head = this.head.next;
      this.setMin();
      this.setMax();
    }

    this.size--;
  }
}

const longestSubarray = function (nums, limit) {
  if (nums.length === 1) return 1;

  const newQueue = new Q();
  let size = 1;

  for (let i = 0; i < nums.length; i++) {
    newQueue.enqueue(nums[i]);

    const diff = newQueue.max - newQueue.min;

    if (diff <= limit) {
      size = size < newQueue.size ? newQueue.size : size;
    } else {
      newQueue.dequeue();
    }
  }

  return size;
};
