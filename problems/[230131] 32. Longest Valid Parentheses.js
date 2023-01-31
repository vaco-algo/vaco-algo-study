/**
 * leetcode problem link: undefined
 *
 * @param {string} s
 * @return {number}
 */
class Stack {
  constructor() {
    this.storage = [];
  }

  push(element) {
    this.storage.push(element);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  size() {
    return this.storage.length;
  }
}

const longestValidParentheses = function (s) {
  if (!s) return 0;

  const stack = new Stack();
  let maxCount = 0;
  let tempCount = 0;

  for (let i = 0; i < s.length; i++) {
    const paren = s[i];

    if (!stack.size() && paren === ")" && tempCount > maxCount) {
      maxCount = tempCount;
    } else if (paren === "(") {
      stack.push(paren);
    } else if (stack.peek() + paren === "()") {
      tempCount += 2;
      stack.pop();
    }

    if (i === s.length - 1) {
      return tempCount > maxCount ? tempCount : maxCount;
    }
  }
};
