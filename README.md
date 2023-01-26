## Tree

```js
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      return (this.root = node);
    }

    let current = this.root;

    while (true) {
      if (current.val < value) {
        if (current.right === null) {
          return (current.right = node);
        }

        current = current.right;
      } else {
        if (current.left === null) {
          return (current.left = node);
        }

        current = current.left;
      }
    }
  }

  find(value) {
    if (this.root.val === null) return null;

    let current = this.root;

    while (current) {
      if (current.val === value) return current;

      if (current.val < value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return null;
  }

  BFS() {
    const queue = [];
    const visited = [];

    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();
      visited.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return visited;
  }

  DFSPreOrder() {
    const current = this.root;
    const visited = [];

    function traverse(node) {
      visited.push(node.val);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      return;
    }

    traverse(current);

    return visited;
  }

  DFSPostOrder() {
    const current = this.root;
    const visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      visited.push(node.val);

      return;
    }

    traverse(current);

    return visited;
  }

  DFSInOrder() {
    const current = this.root;
    const visited = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      visited.push(node.val);

      if (node.right) {
        traverse(node.right);
      }

      return;
    }

    traverse(current);

    return visited;
  }
}
```

## Graph

기본적으로 모든 SNS에서 사용됨
사용자 추천 엔진 등 만들 때 사용
지도 길 찾기, 라우팅
트리도 그래프의 한 종류
인접 리스트
bfs, dfs로 순회
그래프란?
노드들 + 노드들의 연결
노드와 각 꼭지점의 연결쌍의 집합
vertex: 노드의 다른 말
edge: 간선
tree는 하나의 경로로 이어져 있는 그래프
Undirected graph
그래프 방향이나 양극, 음극 따위가 없다.
Directed graph
Weighted graph 가중 그래프
엣지에 값을 부여 (지도의 버텍스와 버텍스를 잇는 거리)
인접 행렬 adjacency matrix
행렬은 이차원 구조 보통 중첩 행렬로 표현
Adjacency List
root가 있는 것이 아니다.
시작점을 정해주어야 한다.
트리는 방향이 명확
너비 우선

## Hash Tables

- 키 + 값 쌍의 형태로 이루어진 자료 구조
- 많은 언어에는 기본 유형으로 내장되어있는 Hash Table이나 Hash Map이 있다.
- 순서가 없음
- 값 추가, 삭제 속도 빠름
- 연속적인 흐름이 있는 데이터 -> 배열 사용

- Python -> `Dictionaries`
- JS -> `Objects, Maps`
  - Objects는 문자열만 키로 사용할 수 있다.
- Java, Go & Scala -> `Maps`
- Ruby -> `Hashes`

### Hash Table이 뭔지

- 해시 함수는 pink나 cyan 같은 스트링으로 된 키를 배열에서 사용하는 유효한 인덱스로 바꿔주는..
- 정보 보호, 저장, 암호화폐.. , 암호화 해시

js는 내장되어 잇는 hash 함수를 노출하지 않지만 파이선은 볼 수 있다.
단방향 함수 (반대로 작업할 수는 없다)

## 어떤 해시 함수가 좋은 함수?

- 빠르다. (constant time)
- 값을 고르게 분배해야 한다.
- 좋은 해시 함수는 결정론적이다. (특정 값을 입력할때마다 같은 출력값)

- 모든 글자는 각각에 해당하는 유니코드가 있다.

"a".charCodeAt(0) - 96 = 알파벳 순서

모듈로 연산을 사용
-> % 사용
13 %

10000000 % 10 < 10
1283918273891273917293712938 % 10 < 10

```js
function hash(key, arrayLength) {
  let total = 0;

  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLenth;
  }

  return total;
}
```

- string에 대해서만 작동
- 같은 값이 나오는 경우가 있음
- 상수 값의 시간을 가지지 않음

```js
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}
```

- 해시 함수는 거의 소수를 이용한다. 소수를 이용하면 충돌이 줄어듬 (31, 13..)

## Separate Chaining 개별 체이닝

- 기본적으로 같은 장소에 여러 데이터를 저장할 때 배열이나 연결리스트 등을 이용해서 중첩 데이터 구조를 쓰는 것 같은 키-값 쌍은 같은 자리에 저장할 수 있다.

## Linear Probing 직선 탐색법

- 각 자리에 하나의 데이터만을 저장
- 충돌 발생 -> 다음 칸 어딘지 탐색
- 중첩 구조 쓸 필요 x

```js
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.miin(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    
  }
}
```
