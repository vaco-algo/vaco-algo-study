const MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * leetcode problem link: https://leetcode.com/problems/implement-queue-using-stacks
 *
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack2.length) {
    return this.stack2.pop();
  }

  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }

  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack2.length) {
    return this.stack2.at(-1);
  }

  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }

  return this.stack2.at(-1);
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length + this.stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * const obj = new MyQueue()
 * obj.push(x)
 * const param_2 = obj.pop()
 * const param_3 = obj.peek()
 * const param_4 = obj.empty()
 */
