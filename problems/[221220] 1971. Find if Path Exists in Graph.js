/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.adjacencyList[v1] = [];
    }

    if (!this.adjacencyList[v2]) {
      this.adjacencyList[v2] = [];
    }
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  DFS(vertex, destination) {
    const visited = {};
    const list = this.adjacencyList;
    let result = false;

    function traversal(vertex) {
      visited[vertex] = true;

      if (list[vertex].includes(destination)) {
        result = true;
        return;
      }

      for (let key of list[vertex]) {
        if (!visited[key]) {
          traversal(key);
        }
      }
    }

    traversal(vertex);
    return result;
  }
}

const validPath = function (n, edges, source, destination) {
  if (n <= 2)
    return edges.length ? edges[0].includes(source) : source === destination;

  const graph = new Graph();

  for (let i = 0; i < edges.length; i++) {
    graph.addEdge(edges[i][0].toString(), edges[i][1].toString());
  }

  return graph.DFS(source, destination.toString());
};
