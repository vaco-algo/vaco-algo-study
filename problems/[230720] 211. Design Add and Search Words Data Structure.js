/**
 * leetcode problem link: https://leetcode.com/problems/design-add-and-search-words-data-structure
 */

var WordDictionary = function () {
  this.mySet = new Set();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.mySet.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */

const compareWord = function (word, target) {
  if (word.length !== target.length) return false;

  for (let i = 0; i < word.length; i++) {
    if (target[i] === ".") continue;
    if (word[i] !== target[i]) return false;
  }

  return true;
};

WordDictionary.prototype.search = function (searchWord) {
  if (this.mySet.has(searchWord)) return true;

  for (const myWord of this.mySet) {
    if (compareWord(myWord, searchWord)) return true;
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
