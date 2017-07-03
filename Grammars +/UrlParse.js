var url=require("url");

var InternalUrl=url.parse("https://www.google.co.kr/search?q=%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C+%EB%B2%84%EC%A0%84+3.0&oq=%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C+%EB%B2%84%EC%A0%84+3.0&aqs=chrome..69i57j0.2582j0j7&sourceid=chrome&ie=UTF-8");
var StringUrl=url.format(InternalUrl);
console.log("주소 문자열: "+StringUrl);
console.dir(InternalUrl);

//Node.js가 설치되어 있어야 url 관련 method()를 사용할 수 있고
//parsing된 데이터 값을 제대로 얻을 수 있다.