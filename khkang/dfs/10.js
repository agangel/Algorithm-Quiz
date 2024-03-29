/* 

연결 요소의 개수

백준 링크 : https://www.acmicpc.net/problem/11724

문제
방향 없는 그래프가 주어졌을 때, 연결 요소 (Connected Component)의 개수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 0 ≤ M ≤ N×(N-1)/2) 둘째 줄부터 M개의 줄에 간선의 양 끝점 u와 v가 주어진다. (1 ≤ u, v ≤ N, u ≠ v) 같은 간선은 한 번만 주어진다.

출력
첫째 줄에 연결 요소의 개수를 출력한다.

*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = new Array(n + 1).fill(false);
let cnt = 0;
function dfs(v) {
  visited[v] = true;
  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}

console.log(cnt);
