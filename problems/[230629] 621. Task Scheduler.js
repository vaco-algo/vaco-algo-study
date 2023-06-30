/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (!n) return tasks.length;

  const counter = Object.entries(
    tasks.reduce((counter, cur) => {
      counter[cur] = counter[cur] + 1 || 1;

      return counter;
    }, {})
  ).sort((a, b) => a[1] - b[1]);
  let answer = 0;

  while (counter[counter.length - 1][1] > 1) {
    let i = counter.length - 2;
    let nCount = n;
    const lastCounter = counter[counter.length - 1];

    if (lastCounter[1]) {
      answer++;
      lastCounter[1]--;
    }

    if (lastCounter[1] === 0) {
      counter.pop();
    }

    while (i >= 0) {
      if (counter[i][1] === 0) {
        counter.splice(i, 1);
        i -= 1;
        continue;
      }

      if (nCount <= 0) {
        if (counter[i][1] === 1 || counter[i][1] < lastCounter[1]) {
          break;
        }
      }

      counter[i][1]--;
      nCount--;
      answer++;
      i -= 1;
    }

    if (nCount > 0) {
      answerArr.push("idle");
      tt += nCount;
      answer += nCount;
    }
  }

  while (counter.length) {
    const lastCounter = counter[counter.length - 1];

    if (lastCounter[1] < 1) {
      counter.pop();
    } else {
      lastCounter[1]--;
      answer++;
    }
  }

  return answer;
};
