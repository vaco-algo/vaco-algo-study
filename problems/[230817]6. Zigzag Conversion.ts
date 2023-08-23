function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const rows: string[] = Array(numRows).fill(""); // 2차원 배열 형식처럼 각 행 마다 빈 문자열 설정

  let count: number = 0; // 현재 row
  let direction: boolean = true; // 진행 방향

  for (const char of s) {
    // 모든 문자열 순회
    rows[count] += char; // 차례로 문자 입력

    if (count === 0 || count === numRows - 1) {
      direction = !direction; // 첫 줄이거나 마지막줄에서 방향 전환
    }

    count += direction ? -1 : 1; // 방항 변경
  }
  const result: string = rows.join("");

  return result;
}
