## Vaco Algo Study 🤔

<details>
<summary>Greedy Algorithm 22.12.08 - 22.12.15</summary>

- [[221208] 1710. Maximum Units on a Truck](https://github.com/vaco-algo/vaco-algo-study/blob/problems/problems/%5B221208%5D%201710.%20Maximum%20Units%20on%20a%20Truck.js)
- [[221209] 2078. Two Furthest Houses With Different Colors](https://github.com/vaco-algo/vaco-algo-study/blob/problems/problems/%5B221209%5D%202078.%20Two%20Furthest%20Houses%20With%20Different%20Colors.js)
- [[221211] 561. Array Partition](https://github.com/vaco-algo/vaco-algo-study/blob/problems/problems/%5B221211%5D%20561.%20Array%20Partition.js)
- [[221213] 11. Container With Most Water](https://github.com/vaco-algo/vaco-algo-study/tree/problems/problems)
- [[221215] 1328. Break a Palindrome](https://github.com/vaco-algo/vaco-algo-study/blob/problems/problems/%5B221215%5D%201328.%20Break%20a%20Palindrome.js)

## Greedy Algorithm

- Greedy : 탐욕스러운, 욕심 많은
- 당장 눈 앞에 보이는 최적의 상황만을 쫓아 최종적인 해답에 도달하는 방법 (그때 그때 가장 최선인 선택을 하는 방법)
- 탐욕 알고리즘은 최적해를 구하는 데에 사용되는 근사적인 방법
- 순간마다 하는 최적의 선택으로 최종적인 해답을 만들었다고 해서, 그것이 최적이라는 보장은 없다. 하지만 탐욕 알고리즘을 적용할 수 있는 문제들은 지역적으로 최적이면서 전역적으로 최적인 문제들이다.

### 탐욕 알고리즘이 적용되는 조건 2가지

- 탐욕스런 선택 조건(greedy choice property)
  - 앞의 선택이 이후의 선택에 영향을 주지 않음
- 최적 부분 구조 조건(optimal substructure)
  - 문제에 대한 최종 해결 방법은 부분 문제에 대한 최적 문제 해결 방법으로 구성된다.

### 풀이 기록

- 홀수 또는 짝수의 index만 필요할 경우 모두 순회할 필요 없으므로 for문 index를 2씩 더해가며 반복 횟수를 반으로 줄이는 방법
  ```js
  for (let i = 0; i < arr.length; i += 2) {
    ...
  }
  ```

출처

- [[알고리즘] 탐욕 알고리즘(Greedy Algorithm)](https://hanamon.kr/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%83%90%EC%9A%95%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-greedy-algorithm/)

</details>

<details>
<summary>Space Complexity</summary>

[[2022.12.13] 은혜님 정리](https://github.com/vaco-algo/vaco-algo-study/pull/29)

- booleans, numbers, undefined, null : O(1)
- strings : O(n) -> 문자열 길이
- array, objects : O(n) -> 배열이나 객체의 길이

```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

위 함수에서는 total & i 두 변수가 사용됩니다.
total과 i 모두 number로 O(1)의 공간 복잡도를 갖게 됩니다.

```js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

위 함수에서는 newArr & i 두 변수가 사용됩니다.
i는 number이지만, newArr은 배열로 O(n)의 공간 복잡도를 갖게 됩니다.

```js
function subtotals(arr) {
  let subtotalArray = Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
```

위 함수에서는 subtotalArray & i & j & subtotal 총 4개의 변수가 사용되므로,
O(n)의 공간 복잡도를 갖습니다.

\*\* 참고로 재귀함수의 경우에는 함수가 몇 번 실행되느냐에 따라 stack이 쌓이는 경우를 다루기 때문에 별도로 다뤄주셔야 해요..!

</details>
