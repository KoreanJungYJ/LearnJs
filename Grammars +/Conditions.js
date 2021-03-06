/*
    1. Label: 프로그램을 다른 곳으로 참조할 수 있도록 식별자로 구문을 제공한다.
    
    2. for in: 객체의 열거 속성을 통해 지정된 변수를 반복한다.
    
    3. for of: 각각의 고유한 특성의 값을 실행할 명령과 함께 사용자 지정 반복 후크를 호출하여, 반복 가능한 객체를 통해 반복하는 루프를 만든다.
*/
/* 1번 */
var a = 0;
var b = 0;
LabelCancel: while (true) {
        console.log("Outer Loops: " + a);
        a += 1;
        b = 1;
        while (true) {
            console.log("Inner Loops: " + b);
            b += 1;
            if (a === 10 && b === 10) {
                break LabelCancel;
            }
            else if (b === 10) {
                console.log("Breaked Inner Loop");
                break;
            }
        }
    }
    /* 
    Outer Loop 1번 -> Inner Loop 9번 + Breaked Inner Loop (else if 구문)
    마지막 Inner, Outer이 10이 될 때 LabelCanel자체가 break됨.
    */
    /* 2번 */
function Dump(obj, objName) {
    var result = "";
    for (var cnt in obj) {
        result += objName + "." + cnt + " = " + obj[cnt] + '<br>';
    }
    result += '<hr>';
    return result;
}
var realResult = Dump("Java", "JDK");
console.log(realResult);
/* 3번 -in과 of의 차이 */
let arr = [10, 20, 30, 40, 50];
for (let i in arr) {
    console.log(i); //in은 배열의 반복 요소 순서를 출력한다.
}
for (let i of arr) {
    console.log(i); //of는 배열 내의 값을 출력한다.
}