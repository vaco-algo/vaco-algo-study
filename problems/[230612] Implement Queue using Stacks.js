const MyQueue = function () {};
this.modelStackOfQueue = [];
this.helperStack = [];
/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.modelStackOfQueue.push(x);
};

/**
 * leetcode problem link: https://leetcode.com/problems/implement-queue-using-stacks
 *
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const length = this.modelStackOfQueue.length;
  if (!this.helperStack.length) {
    for (let i = 0; i < length; i++) {
      const num = this.modelStackOfQueue.pop();
      this.helperStack.push(num);
    }
    return this.helperStack.pop();
  } else {
    return this.helperStack.pop();
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.helperStack.length
    ? this.helperStack[this.helperStack.length - 1]
    : this.modelStackOfQueue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.modelStackOfQueue.length && !this.helperStack.length
    ? true
    : false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * const obj = new MyQueue()
 * obj.push(x)
 * const param_2 = obj.pop()
 * const param_3 = obj.peek()
 * const param_4 = obj.empty()
 */
