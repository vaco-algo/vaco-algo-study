
const MyQueue = function() {
  this.mainStack = [];
  this.popStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.mainStack.push(x);
};

/**
 * leetcode problem link: https://leetcode.com/problems/implement-queue-using-stacks
 *
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  while (this.mainStack.length) {
    const poppedTask = this.mainStack.pop();
    this.popStack.push(poppedTask);
  }

  const result = this.popStack.pop();

  while (this.popStack.length) {
    const poppedTask = this.popStack.pop();
    this.mainStack.push(poppedTask);
  }

  return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  while (this.mainStack.length) {
    const poppedTask = this.mainStack.pop();
    this.popStack.push(poppedTask);
  }

  const result = this.popStack[this.popStack.length - 1];

  while (this.popStack.length) {
    const poppedTask = this.popStack.pop();
    this.mainStack.push(poppedTask);
  }

  return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !Boolean(this.mainStack.length);
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * const obj = new MyQueue()
 * obj.push(x)
 * const param_2 = obj.pop()
 * const param_3 = obj.peek()
 * const param_4 = obj.empty()
 */
