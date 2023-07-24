/**
 * leetcode problem link: https://leetcode.com/problems/design-add-and-search-words-data-structure
 */

const WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;

  for (const char of word) {
    if (!node[char]) node[char] = {};

    node = node[char];
  }

  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let node = this.root;

  const searchTrie = (trie, depth) => {
    if (depth === word.length) return trie.isEnd || false;

    const char = word[depth];

    if (char === ".") {
      for (const children of Object.keys(trie)) {
        if (searchTrie(trie[children], depth + 1)) return true;
      }

      return false;
    } else {
      if (!Object.hasOwn(trie, char)) return false;

      return searchTrie(tire[char], depth + 1);
    }
  };

  return searchTrie(node, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
