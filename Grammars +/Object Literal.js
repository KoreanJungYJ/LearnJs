/*
     객체 리터럴은 중괄호로 묶인 0개 이상인 객체의 속성명과 관련 값의 쌍 목록이다. 
     {가 블록의 시작으로 해석되기 때문에 오류를 발생시키거나, 의도한 대로 동작하지 않을 수 있다. 따라서 문의 시작에 객체 리터럴을 사용하면 안된다.
 */
/* 예제 1 */
var carName = "K7";

function carSeperate(NameOfCar) {
    if (NameOfCar === "K5") {
        return name;
    }
    else if (NameOfCar === "K7") {
        return "K7 is sold out, sorry.";
    }
    else {}
    return "Do you want buy another car?";
}
var car = {
    myCar: "Atomi"
    , yourCar: "Santumn"
    , getCarName: carSeperate("K3")
    , special: carName
};
console.log(car.myCar);
console.log(car.yourCar);
console.log(car.getCarName);
console.log(car.special);
/* 예제 2 */
//객체 속성명은 빈 문자열을 포함한 모든 문자열이 될 수 있다.
//속성명이 유효한 JS 식별자나 숫자가 아닌 경우 아래처럼 따옴표로 묶어줘야 하며, 유효한 식별자가 아니면 .으로 접근할 수 없다.
//이를 대신하여 배열 "[]"을 이용해 값을 설정할 수 있다.
var body = {
    Face: {
        eyes: "Clean"
        , "nose": "High"
        , Mouse: {
            teeth: "37"
            , tongue: "long"
        }
        , 2: "Ears"
    }
};
console.log(body.Face.eyes);
console.log(body.Face.Mouse.teeth);
console.log(body.Face[2]);
/*
    var foo = {a: "alpha", 2: "two"};
    console.log(foo.a);    // alpha
    console.log(foo[2]);   // two
    //console.log(foo.2);  // Error: missing ) after argument list
    //console.log(foo[a]); // Error: a is not defined
    console.log(foo["a"]); // alpha
    console.log(foo["2"]); // two
*/
//이 외에도 정규식 리터럴이나 문자열 리터럴 등이 존재하며 많이 쓰인다!