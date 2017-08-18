<h1>Learn about 'this'!</h1>

웹 브라우저에서 전역 객체느 **window**객체이기 때문에
this === window의 반환값은 true가 된다.

-> 기본적으로 this는 strict mode에 관계 없이 전역 객체를 참조한다는 것!

**bind()**는 함수의 호출에 관계없이 this값을 설정해주는 메소드이다.


    this.document === document -> true 반환
    this === window -> true 반환
    this.a = b , window.a = b 반환


**함수 호출에 따른 this**

    function f1(){
        return this;
    }

    fi() === window -> global object
이때 this는 호출에 의해 그 값이 설정되지 않는다.


**strict mode에서의 this**

    function strict(){
        "use strict" // to strict mode
        return this;
    }

    strict() === undefined;

strict mode에서 this가 정의되지 않았다면 undefined로 유지된다. 그리고 **어떤 값**이든 설정할 수 있게 된다!


**함수가 정의된 방법이나 위치에 전혀 영향을 받지 않는 this의 동작**

    var example = {
        propVal: 12,
        innerVal: function(){
            return this.propVal;
        }
    };

    example.innerval(); -> 12 반환
    실행될 때 함수 내부의 this는 example 객체에 연결되게 된다.

    ------------------------

    var test = {val : 10};

    function change() {
        return this.val;
    }

    test.another = change;

    test.another() -> 10 반환


**객체의 prototype 체인에서의 this**
-> 메소드가 한 객체의 prototype 체인에 있을 시, 메소드는
객체에 았는 것 처럼되며 이 때 this는 메소드가 호출된 객체를 아래와 같이 나타내게 된다.

    var foo = {func: function(){ return this.num1 + this.num2;}};
    
    var getFoo = Object.create(foo); // getFoo에서 foo 건들 수 있음!

    getFoo.num1 = 10;
    getFoo.num2 = 20;

    getFoo.f() -> 30을 반환