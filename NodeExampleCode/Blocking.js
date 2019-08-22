//블로킹 방식의 코드
function longRunningTask() { //오래걸리는 작업
    console.log('작업 끝')
}

console.log('시작');
longRunningTask();
console.log('다음작업\n');

//논블로킹 방식의 코드

function longRunningTask() {
    console.log('작업끝');
}
console.log('시작');
setTimeout(longRunningTask, 0);
console.log('다음작업');