/*
자바스크립트는 함수 안에 또 다른 함수를 정의하는 것이 가능하는데
이 기능은 외부 함수 안에서 정의된 모든 변수와 함수들을
내부 함수가 완전히 접근할 수 있도록 해준다.

단, 외부 함수는 내부 함수 안에서 정의된 변수와 함수들에 접근할 수 없다.
(private변수 느낌이 난다!)
 */

var pet = function(name){ //외부 함수
    var getName=function(){
        return name; //내부 함수는 외부 함수의 name을 접근함.
    }
    return getName; //내부 함수 return -> 외부 함수로 노출
}, myPet=pet("Mango Candy");

console.log(myPet); //Vivie가 console창에 출력


var structure=function(html){
    var header;

    return{
        setHtml: function(newHtml){
            html=newHtml;
        },
        getHtml: function(){
            return html;
        },
        getHeader:function(){
            return header;
        },
        setHeader:function(newHeader){
            if(typeof newHeader == 'String' && (newHeader.toLowerCase() ==
            "male" || newHeader.toLowerCase()== "female")){
                header=newHeader;
            }
        }
    }
}

var result=structure("Template");
result.getName();

result.setHtml("BootStrap");
result.setHeader("ListView");
result.getHeader();
result.getName();
//여기서 name은 내부 함수로 접근 가능

//클로저를 쓸 때 내부 함수의 변수와 외부 함수의 변수가 같아지지 않게 조심하자!