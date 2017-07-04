/*

    map은 callback함수를 각각의 요소에 대해 한 번씩 순서대로 불러 그
    함수의 리턴값으로 새로운 배열을 만드는 메서드.

    callback함수가 호출 될 때에는, 호출되는 대상 요소의 값, 그 요소의 인덱스,
    그리고 map 메서드가 사용된 배열 객체의 3개의 인수를 전달받는다.

    그리고, thisArg 매개변수가 map에 전달될 때에는, callback함수의 this 값으로
    사용되어 thisArg 매개변수가 없을 때에는 undefined값이 전달된다.

    *map은 호출된 배열의 값을 변형하지는 않는다.
 */

//예시
var keyArray = [
    {key:1, value:10},
    {key:2, value:20},
    {key:3, value:30}
];
var reformatArray = keyArray.map(function(obj){
    var reObj = {};
    reObj[obj.key] = obj.value;
    return reObj;
});

//이 때 reformatArray는 [{1:10},{2:20},{3:30}]이 되고,
//keyArray의 배열은 그대로이다.


//예시2
var mapGet = Array.prototype.map;
var foo = mapGet.call('I am a boy',function(keyValue){
    return keyValue.charCodeAt(0);
});
//I am a boy의 ASCII 코드 값 출력