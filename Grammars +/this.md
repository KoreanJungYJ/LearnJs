<h1>Learn about 'this'!</h1>

웹 브라우저에서 전역 객체는 **window**객체이기 때문에
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

    getFoo.func() -> 30을 반환

    이 때 변수 getFoo가 func의 속성을 가지고 있지 않더라도,
    prototype으로 부터 자동으로 상속받기 때문에 func 멤버를 찾는 데는 전혀 문제가 되지 않는다.

    getFoo.func()부터 참조하기 시작하고, 함수 내부의 this는
    getFoo처럼 나타나는 객체의 값을 취하게 된다.

    -> func는 getFoo의 메소드가 되고, this는 getFoo를 나타내게 된다.


**생성자의 this**

함수가 new와 함께 생성자로 사용될 때 this는 새롭게 생성된 객체에 연결된다.

    function ex1(){
        this.num = 10;
    }

    var save = new ex1();
    save.num -> 10 반환

    function ex2(){
        this.num = 20;
        return {num : 30};
    }

    save = new ex2();
    save.num -> 30 반환

    ex2라는 함수의 return 문이 기존의 this를 버리게 되고
    num에 30을 저장하여 반환하게 된다.
    this가 죽은 것은 아니지만, 어떤 외부 영향도 받지 않는다.


**call과 apply에서의 this**

    function add(num1, num2){
        return this.n1 + this.n2 + num1 + num2;
    }

    var numVal = {num1 : 20, num2 : 13};

    add.call(numVal, 5, 10); -> 48 반환
    add.apply(numVal, [1, 2]); -> 36 반환

    하지만 call과 apply에서 this를 나타내느 값이 개체가 아닐 시,
    내부의 ToObject를 통하여 객체로 변환된다.


**매우 중요한 bind()와 this**

따로 설명하도록 하겠다. 아래는 MDN의 예제이다.

    funtion f(){
        return this.a;
    }

    var g = f.bind({a : "azerty"});
    g() -> azerty 반환

    var o = {a:37, f:f, g:g};
    o.f() -> 37 반환
    o.g() -> azerty 반환

    this를 bind해줘 영구적으로 연결시켜 주었기 때문에,
    o.g()는 azerty가 유지된다.


**eventTarget과 this**

이것도 따로 설명하도록 하겠다.

