/*
대상.addEventListener('click', function(){
    //수행할 코드
});
*/
var btn = document.getElementById('submit');

btn.addEventListener('click', function(){
    alert('반갑습니다');
});
/*
mouseover, mouseout, mouseenter, mouseleave, scroll, change, focus(blur), keypress, keyDown, keyup
*/
var container = document.querySelector('.container');
var i = 0;
/*
container.addEventListener('mouseover', function(){
    container.style.backgroundColor = '#ebebeb';
    console.log('mouseover', i++);
});
container.addEventListener('mouseout', function(){
    container.style.backgroundColor = '';
    console.log('mouseout');
});
*/
container.addEventListener('mouseenter', function(){
    this.style.backgroundColor = '#ebebeb';
    console.log('mouseover', i++);
});
container.addEventListener('mouseleave', function(){
    this.style.backgroundColor = '';
    console.log('mouseout');
});

//change
var colorSelect = document.getElementById('color');

colorSelect.addEventListener('change', function(){
    //var target = document.querySelector('body');
    var target = document.body;
    var selectedValue = this.value;
    console.log(selectedValue);

    target.style.backgroundColor = selectedValue;
});

var link = document.querySelectorAll('a');

link.forEach(function(item,idx){
    item.addEventListener('focus', function(){
        this.style.backgroundColor = 'blue';
        this.style.color = '#fff';
    });
    item.addEventListener('blur', function(){
        this.style.backgroundColor = '';
        this.style.color = '';
    });    
});

//keypress(deplicated), keydown, keyup
var i = 0;
window.addEventListener('keydown',function(event){
    var userKey = event.key;
    // console.log(userKey, i++);
    if(userKey == 'ArrowLeft'){
        //슬라이드 왼쪽 움직인다.
        alert('왼쪽');
    }else if(userKey == 'ArrowRight'){
        //슬라이드 오른쪽 움직인다
        alert('오른쪽');
    }

});