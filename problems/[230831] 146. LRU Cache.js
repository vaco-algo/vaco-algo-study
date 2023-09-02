/**
 * leetcode problem link: https://leetcode.com/problems/lru-cache
 */

/**
 * @param {number} capacity
 */

// 접근 방식: get과 put이 O(1)로 끝나야 하기에 자료구조 map을 사용하는 방식으로 접근
// 시간 복잡도: O(1)
// 공간 복잡도: O(1)

const LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;

  const value = this.map.get(key);

  this.map.delete(key);
  this.map.set(key, value);

  return this.map.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.map.delete(key);
  this.map.set(key, value);

  if (this.map.size > this.capacity) {
    const firstValue = this.map.keys().next().value;

    this.map.delete(firstValue);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
