/**
 * leetcode problem link: https://leetcode.com/problems/design-add-and-search-words-data-structure
 */

var WordDictionary = function () {
  this.wordCode = [];
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  [...word].forEach((str) => this.wordCode.push(str.charCodeAt()));
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let result = false;
  const codeArray = [...word].filter(
    (str) => str.charCodeAt() > 96 && str.charCodeAt() < 123
  );

  for (let i = 0; i <= this.wordCode.length - codeArray.length; i += 1) {
    const hasFind = codeArray.every((str, searchIndex) => {
      const strCode = str.charCodeAt();
      const dic = this.wordCode[i + searchIndex];
      return strCode === dic;
    });

    if (hasFind) {
      result = true;
    }
  }

  return result;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
