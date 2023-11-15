//document.getElementsByTagName('태그명')
// 대상.style.css속성명='값';
// DOMContentLoaded

// 돔의 내용을 모두 로드한 후 스크립트 실행(함수)
// document.addEventListener('DOMContentLoaded',function(){
//     console.log(document.getElementsByTagName('h1')); //h1태그 선택 잘 됐는지 콘솔 확인->배열로 나옴
// document.getElementsByTagName('h1')[0].style.color='blue';
// })

console.log(document.getElementsByTagName('h1')); //h1태그 선택 잘 됐는지 콘솔 확인->배열로 나옴
// 태그명 요소,스타일 컬러 변경
document.getElementsByTagName('h1')[0].style.color='blue';

// document.getElementsById('아이디명');
document.getElementById('list1').style.backgroundColor='silver';
console.log(document.getElementById('list1')); //앞선 태그명 css선택은 배열이라 []와 순번이 필요했는데 아이디명은 단일요소에 배열이 아니라 [] 필요없음

// document.getElementsByClassName('클래스명')
let list = document.getElementsByClassName('list');
console.log(list);
// list[0].style.listStyle="none";
// list[1].style.listStyle="none";
// list[2].style.listStyle="none";
//-> 반복문으로 바꿔 표현가능

// for 반복문
// for(초기화;조건;증감){
//     반복할 구문
// }
for(let i=0;i<3;i++){
    list[i].style.listStyle="none";
}

//css 선택자
// document.querySelector('선택자')
// document.querySelectorAll('선택자')
// list3 .red
// document.querySelector('#list3 .red').style.color="pink";
console.log(document.querySelectorAll('#list3 .red'));
document.querySelectorAll('#list3 .red')[0].style.color="red";

document.querySelector('#box div div').style.backgroundColor="green";

let myP = document.querySelectorAll('article p');
console.log(myP);

// for문
// for(let i=0;i<myP.length;i++){
//     myP[i].style.backgroundColor="skyblue";
// }


// for of문
// for(mp of myP){
//     mp.style.backgroundColor='red';
// }

//while문
// var x=0;
// while(x<myP){
//     myP[i].style.backgroundColor="skyblue";
//     i++;
// }

// do while 문
// var x=0;
// do{
//     myP[x].style.backgroundColor="skyblue";
//     i++;
// }
// while(i<myP.length);

// forEach 반복문
// item-myP 문장 요소 하나 하나 / idx-요소 순번
myP.forEach(function(item,idx){
    item.style.backgroundColor='skyblue';
})