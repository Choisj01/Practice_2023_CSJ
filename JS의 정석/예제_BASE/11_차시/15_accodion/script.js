// 탭 아코디언(클릭하는 박스만 블록됐다가 논됐다가 하면서 클릭한 요소만을 보여줌) 형식 js 구현

let panelQuestion = document.querySelectorAll('.panel-question');
let btnCollapse = document.getElementById('btn-collapse');

for(var pq of panelQuestion){
    pq.addEventListener('click',function(){
        hideAll();
        this.classList.add('active');
    }); //////// click //////////////
} /////////// for of 문///////////////

// 패널 퀘스천 안보이게 하는 함수
function hideAll(){
    for(q of panelQuestion){
        q.classList.remove('active');
    }
}

btnCollapse.addEventListener('click',hideAll);