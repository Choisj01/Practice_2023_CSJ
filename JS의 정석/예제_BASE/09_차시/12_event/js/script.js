/* 
대상.addEventListener('click',function(){
    수행할 코드
});
*/

let btn = document.getElementById("submit");

btn.addEventListener("click", function () {
    alert("반갑습니다!");
});

/* 
이벤트 종류 :
mouseover, mouseout ,mouseenter, mouseleave
,click ,scroll ,change ,keyup ,keydown ,focus(<->blur) ,keypress ...
*/

let container = document.querySelector(".container");
let i = 0;
// // mouseover 이벤트 실행-이벤트가 계속 발생하는 특징이 있음
// container.addEventListener('mouseover',function(){
//     container.style.backgroundColor='green'; //
//     console.log('mouseover',i++); //마우스 오버시 확인
// });
// // mouseout 이벤트 실행
// container.addEventListener('mouseout',function(){
//     container.style.backgroundColor=''; //
//     console.log('mouseout'); //마우스 아웃시
// });

// mouseenter 이벤트 실행 - 이벤트를 실행할때 한번만 발생시킴.mouseover와의 다른점!
container.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "green"; //
    console.log("mouseenter", i++); //마우스 오버시 확인
});
// mouseout 이벤트 실행
container.addEventListener("mouseleave", function () {
    this.style.backgroundColor = ""; //
    console.log("mouseleave"); //마우스 아웃시
});

// change 이벤트
// 변수지정
let colorSelect = document.getElementById("color");

colorSelect.addEventListener("change", function () {
    // let target = document.querySelector('body');
    let target = document.body;
    // let selectedValue = colorSelect.value;
    let selectedValue = this.value;
    target.style.backgroundColor = selectedValue;
    console.log(selectedValue);
});

//focus 이벤트
let link = document.querySelectorAll("a");

// link[1].addEventListener('focus',function(){
//     link[1].style.backgroundColor='blue';
//     link[1].style.color='#ebebeb';
// });
// link[2].addEventListener('focus',function(){
//     link[2].style.backgroundColor='blue';
//     link[2].style.color='#ebebeb';
// });
// // blur - 포커스 푸는 이벤트
// link[0].addEventListener('blur',function(){
//     link[0].style.backgroundColor='';
//     link[0].style.color='';
// });
// link[1].addEventListener('blur',function(){
//     link[1].style.backgroundColor='blue';
//     link[1].style.color='';
// });
// link[2].addEventListener('blur',function(){
//     link[2].style.backgroundColor='';
//     link[2].style.color='';
// });
//->이벤트 걸 대상이 유사배열이면 반복문으로!

link.forEach(function (item, idx) {
    item.addEventListener("focus", function () {
        // item.style.backgroundColor = "blue";
        // item.style.color = "#ebebeb";
        this.style.backgroundColor = "blue";
        this.style.color = "#ebebeb";
    });
    item.addEventListener("blur", function () {
        this.style.backgroundColor = "";
        this.style.color = "";
    });
});


//keypress(현재는 잘 사용하지 않는 이벤트임->keydown을 씀!)
// keydown(누르는 키마다 이벤트 발생)
// keyup(키를 때는 순간 이벤트 발생) 
// 이벤트

let k = 0;
window.addEventListener('keydown',function(event){
    let userKey = event.key;
    console.log(userKey,k++);
    if(userKey=='ArrowLeft'){
        // 슬라이드 왼쪽 움직인다.
        this.alert('왼쪽');
    }else if(userKey=='ArrowRight'){
        //슬라이드 오른쪽 움직인다
        this.alert('오른쪽');
    }
});