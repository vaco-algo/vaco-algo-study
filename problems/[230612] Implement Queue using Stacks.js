const MyQueue = function () {
  this.innerStack = [];
  this.outerStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.innerStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outerStack.length > 0) {
    return this.outerStack.pop();
  }

  const limit = this.innerStack.length - 1;

  for (let i = 0; i < limit; i += 1) {
    this.outerStack.push(this.innerStack.pop());
  }

  return this.innerStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.outerStack.length > 0
    ? this.outerStack[this.outerStack.length - 1]
    : this.innerStack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.innerStack.length === 0 && this.outerStack.length === 0;
};
