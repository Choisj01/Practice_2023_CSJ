document.addEventListener("DOMContentLoaded", () => {
    let btt = document.querySelector("#go-top");
    // 문서 자체로 스크롤 양 확인
    // document.documentElement.scrollTop
    // 윈도우 기준 페이지 스크롤 양 확인
    // window.pageYOffset
    let scrollAmt;

    // 윈도우에 이벤트 스크롤 발생시 할일 함수
    window.addEventListener("scroll", () => {
        scrollAmt = window.pageYOffset;
        console.log(scrollAmt);

        if (scrollAmt > 300) {
            btt.classList.add("active");
            // btt.className='active';
        }
        else{
            btt.classList.remove("active");
        }
    }); ////////// scroll //////////

    btt.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}); //////////////////로드 구역 //////////////
