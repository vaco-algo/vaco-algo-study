/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 *
 */

class Graph {
  constructor(verticesNumber) {
    this.adjacencyMatrix = Array.from({ length: verticesNumber }, () =>
      Array.from({ length: verticesNumber }, () => 0)
    );

    this.adjacencyList = {};

    this.lastVertex = verticesNumber - 1;
  }

  addEdgeToMatrix([vertex1, vertex2]) {
    if (vertex1 > this.lastVertex || vertex2 > this.lastVertex) return;

    this.adjacencyMatrix[vertex1][vertex2] = 1;
    this.adjacencyMatrix[vertex2][vertex1] = 1;
  }

  addEdgeToList([vertex1, vertex2]) {
    if (vertex1 > this.lastVertex || vertex2 > this.lastVertex) return;

    if (!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = [];
    if (!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = [];

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

class CustomQueue {
  constructor() {
    this.storage = [];
  }

  enqueue(element) {
    this.storage.unshift(element);
  }

  dequeue() {
    return this.storage.pop();
  }

  isEmpty() {
    return !this.storage.length;
  }
}

const GRAPH_TYPE = "matrix";

const validPath = function (n, edges, source, destination) {
  const graph = new Graph(n);

  edges.forEach((edge) => {
    GRAPH_TYPE === "matrix"
      ? graph.addEdgeToMatrix(edge)
      : graph.addEdgeToList(edge);
  });

  const BFS = (graph, from, to) => {
    const queue = new CustomQueue();
    const visitedSet = new Set();

    queue.enqueue(from);
    visitedSet.add(from);

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue();

      if (currentVertex === to) return true;

      const traverseMatrix = () => {
        graph.adjacencyMatrix[currentVertex].forEach((value, vertex) => {
          const isVisitedVertex = visitedSet.has(vertex)

          if (isVisitedVertex || value === 0) return;

          queue.enqueue(vertex);
          visitedSet.add(vertex);
        });
      };

      const traverseList = () => {
        graph.adjacencyList[currentVertex].forEach((adjancyVertex) => {
          const isVisitedVertex = visitedSet.has(adjancyVertex);

          if (isVisitedVertex) return;

          queue.enqueue(adjancyVertex);
          visitedSet.add(adjancyVertex);
        });
      };

      GRAPH_TYPE === "matrix" ? traverseMatrix() : traverseList();
    }

    return false;
  };

  return BFS(graph, source, destination);
};
