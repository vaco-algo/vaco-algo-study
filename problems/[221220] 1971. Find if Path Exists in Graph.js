/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/description/
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function(n, edges, source, destination) {
    const vertices = new Map();
    let result = false;

    edges.forEach(([vertex1, vertex2]) => {
        if (vertices.has(vertex1)) {
            vertices.get(vertex1).push(vertex2);
        } else {
            vertices.set(vertex1, [vertex2]);
        }

        if (vertices.has(vertex2)) {
            vertices.get(vertex2).push(vertex1);
        } else {
            vertices.set(vertex2, [vertex1]);
        }
    });

    function dfs([vertex1, vertex2]) {
        if (vertex1 === destination || vertex2 === destination) return result = true;

        if (vertex1 !== source) dfs(vertices.get(vertex1));
        if (vertex2 !== source) dfs(vertices.get(vertex2));
    }

    dfs(vertices.get(source));

    return result;
};
