const MyQueue = function () {
  this.helperStack = [];
  this.stackWorkAsQueue = [];
};
/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.helperStack.push(x);
};

/**
 * leetcode problem link: https://leetcode.com/problems/implement-queue-using-stacks
 *
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const length = this.helperStack.length;
  if (!this.stackWorkAsQueue.length) {
    for (let i = 0; i < length; i++) {
      const num = this.helperStack.pop();
      this.stackWorkAsQueue.push(num);
    }
    return this.stackWorkAsQueue.pop();
  } else {
    return this.stackWorkAsQueue.pop();
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stackWorkAsQueue.length
    ? this.stackWorkAsQueue[this.stackWorkAsQueue.length - 1]
    : this.helperStack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.helperStack.length && !this.stackWorkAsQueue.length
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
