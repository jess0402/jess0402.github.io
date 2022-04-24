// 문서의 내용이 모두 로드되면 할일
// 대상.addEventListener('이벤트종류', '할일');
// DOMContentLoaded
// 할일 = 함수 = function(){ 실제로 }

document.addEventListener('DOMContentLoaded', function(){
    
    // 변수지정
    const $slideWrap = document.querySelector('.container');
    const $slideContainer = document.querySelector('.slider_container');
    const $slide = document.querySelectorAll('.slide');
    const $navPrev = document.getElementById('prev');
    const $navNext = document.getElementById('next');

    $slideWrap.style.height = '200px';

    // 슬라이드의 높이 확인하여 부모의 높이로 지정하기


    // 슬라이드가 있으면 가로로 배열하기

    // 슬라이드 이동함수

    // 버튼기능 업데이트 함수

    // 버튼을 클릭하면 슬라이드 이동시키기

    // 첫번째 슬라이드 먼저 보이도록 하기
});

// 변수 지정
 