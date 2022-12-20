/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  search(val) {
    if (!this.root) false;

    let copySize = this.size;
    const copyRoot = this.root;
    while (copySize !== 0) {
      if (copyRoot.next === val) {
        return true;
      }
    }
  }

  add(node) {
    this.size++;

    if (this.size === 1) {
      this.root = node;
      return;
    }

    if (this.size === 2) {
      if (this.root.val < node.val) {
        this.root.right = node;
      } else {
        node.right = this.root;
        this.root = node;
      }

      return;
    }

    const copyRoot = this.root;

    while (copyRoot.right) {
      if (copyRoot.right > node) {
        copyRoot = copyRoot.right;
      }
      if (copyRoot.right < node) {
        copyRoot.right = node;
        node.left = copyRoot;
      }
    }
  }
}

const validPath = function (n, edges, source, destination) {
  if (n === 1) return source === destination;
  if (n === 2) return edges[0].include(0);

  const arr = [];

  for (let [first, second] of edges) {
    for (let i = 0; i < arr.length; i++) {}

    if (!arr.length) {
      const tree = new Tree();

      tree.add(new Node(first));
      tree.add(new Node(second));

      console.log(tree);
    }
  }
};
