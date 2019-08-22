//node 이벤트 순서

function first() {
    second();
    console.log('첫번쨰');
}

function second() {
    third();
    console.log('두번째');
}

function third() {
    console.log('세번째');
}  
first()