/*
eval 함수를 사용하면 String 형태의 JS 코드를 동적으로 실행할 수 있다.
eval() is evil이라는 말이 유행하는데 이는 이해할 만 하다.
eval 함수를 사용하지 않고도 충분히 동일한 동작을 구현할 수 있는 경우가
많은데도 불구하고 eval 함수를 사용하여 문제를 일으키는 사람이 많기 때문이다.
보안상 위험하기도 하고 컴파일러의 최적화 불가 등 문제 때문에 사용을 지양해야
하는 것은 맞는 것 같다.
하지만 프레임워크 구현 등 높은 수준에서 JS를 사용할 때는 eval 함수가 적절히
사용되어야 한다고 하니 상황에 따라서 잘 분별해 사용하면 될 것 같다.
그리고 JSON 같은 경우도 JSON.parse 함수를 이용하는 것이 eval함수보다 안전하고
실행 속도도 빠르다고 하니 유의해두자!

*/

/* 대표적인 쓰임 */
var birthday=["2000","11","22"];
var foo={};
var result=eval("foo."+birthday[0]+"=11"+birthday[2]);
console.log(result);

/* 잘못된 사용 예시 */
function isChecked(InputNumber){
    return eval( "forms[0].option"+InputNumber+".checked!");
}
var result=isChecked(10);

/* Refactoring */
function isChecked(InputNumber){
    return forms[0]["options"+InputNumber].checked;
}
var result=isChecked(10);