 // 자바스크립트의 함수는 일급 객체이므로 함수의 매개변수에게 함수를 전달할 수 있다. 

 // 콜백 함수를 전달받는 함수
 function print(f) {
   var string = 'Hello';
   // 콜백 함수를 전달받는 함수가 콜백 함수의 호출 시기를 결정하고 호출
   return f(string);
 }

 // print 함수에 콜백 함수를 전달하면서 호출
 var res1 = print(function (str) {
   return str.toUpperCase();
 });

 // print 함수에 콜백 함수를 전달하면서 호출
 var res2 = print(function (str) {
   return str.toLowerCase();
 });

 console.log(res1, res2);