/**
 * leetcode problem link: https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }

    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.parent(index).value > this.heap[index].value
    ) {
      const parentIndex = this.getParentIndex(index);
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index).value < this.leftChild(index).value
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index].value < this.heap[smallerChildIndex].value) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }
}

function findMaxValue(heap) {
  let maxValue = -Infinity;
  for (const node of heap.heap) {
    if (node.value > maxValue) {
      maxValue = node.value;
    }
  }
  return maxValue;
}

const smallestRange = function (nums) {
  const heap = new MinHeap();
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i][0];
    heap.add({ value, index1: i, index2: 0 });
    if (value > max) max = value;
  }

  let smallestRange = [heap.peek().value, max];

  while (true) {
    const { index1, index2 } = heap.poll();
    let nextIndex2 = index2 + 1;

    if (nums[index1][nextIndex2] === undefined) {
      return smallestRange;
    }

    const newVal = nums[index1][nextIndex2];
    heap.add({ value: newVal, index1, index2: nextIndex2 });

    if (newVal > max) max = newVal;

    const min = heap.peek().value;
    const newRange = [min, max];

    if (newRange[1] - newRange[0] < smallestRange[1] - smallestRange[0]) {
      smallestRange = newRange;
    }
  }
};
