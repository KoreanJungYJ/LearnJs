//재귀함수란 자신을 참조하고 호출 할 수 있는 함수이다.
//대표적인 예로 factorial이 있다.

function factorial(num){
    if(num==0 || num==1){
        return 1;
    }
    else{
        return (num*factorial(num-1));
    }
}
var number=factorial(6);
console.log(number);

//함수가 자신을 참조하는 방법은 3가지가 있다.
/*
    1. 함수의 이름
    2. arguments.callee 
        ->익명 함수와 같이 함수 이름을 알 수 없는 경우에 유용하다.
    3. 함수를 참조하는 범위 내 변수
*/

function loop(x){
    if(x>=10){
        return;
    }
    loop(x+1);
}
loop(5);

//또 다른 예시

function walkTree(node){
    if(node==null){
        return;
    }
    for(var i=0;i<node.childNodes.length;i++){
        walkTree(node.childNodes[i]);
    }
}

//함수 내에 함수를 끼워 넣을 수 있는데 이를 중첩함수라 부른다.
//중첩된 내부 함수는 그것을 포함하는 외부 함수와 별개로 보며 '클로저'라는 것을 형성한다.
//중첩함수=클로저

function square(width,height){
    function addit(num){
        return num*num;
    }
    return addit(width)+addit(height);
}
var result=square(5,6);
console.log(result);

