## Vaco Algo Study 🤔

<details>
<summary>Greedy Algorithm 22.12.08 - 22.12.15</summary>

- [[221208] 1710. Maximum Units on a Truck](https://github.com/vaco-algo/vaco-algo-study/blob/problems/problems/%5B221208%5D%201710.%20Maximum%20Units%20on%20a%20Truck.js)
- [[221209] 2078. Two Furthest Houses With Different Colors](https://github.com/vaco-algo/vaco-algo-study/blob/problems/problems/%5B221209%5D%202078.%20Two%20Furthest%20Houses%20With%20Different%20Colors.js)
- [[221211] 561. Array Partition](https://github.com/vaco-algo/vaco-algo-study/blob/problems/problems/%5B221211%5D%20561.%20Array%20Partition.js)
- [[221213] 11. Container With Most Water](https://github.com/vaco-algo/vaco-algo-study/tree/problems/problems)

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
