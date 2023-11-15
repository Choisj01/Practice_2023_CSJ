/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/

const tabMenu = document.querySelectorAll('.tab-menu li');
const tabsContent = document.querySelectorAll('#tab-content > div');
const hightLight = document.querySelector('.highlight');
// console.log(tabMenu,tabsContent,hightLight);

// showCont 함수
function showCont(num){
    tabsContent.forEach(function(item){
        item.style.display = 'none';
    });
    tabsContent[num].style.display = 'block';
}
showCont(0);

// 메뉴 클릭 이벤트
tabMenu.forEach(function(item,idx){
    item.addEventListener('click',function(e){
        e.preventDefault();
        showCont(idx);
        movewHightLight(idx);
    });
});

//HightLight 이동함수
function movewHightLight(num){
    let newLeft = tabMenu[num].offsetLeft; 
    let newWidth = tabMenu[num].offsetWidth;
    console.log(newLeft,newWidth);
    hightLight.style.left=newLeft+'px';
    hightLight.style.width=newWidth+'px';
}