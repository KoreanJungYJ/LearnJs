/* 동작 */

document.addEventListener('DOMContentLoaded', function() {
    init();
    initEvent();
});

//초기화 시켜주는 함수
function init(){
    var initVal;
}

function initEvent(){
    var btn;

    //눌렀을 경우
    btn.addEventListener('click', function() {
        //필요 변수 선언
        var x = parseInt("example1").value;
        var y = parseInt("example2").value;    

        //움직이는 함수 호출 - 다중 함수
        moveEvent(x, y);
    });

}

function moveEvent(x, y){
    if(x >=0 && y >=0 && y < 300){
        initVal.style.left = x;
        initVal.style.top = y;
    }else{
        console.log("check!");
        alert("Input Again!");
    }
}
