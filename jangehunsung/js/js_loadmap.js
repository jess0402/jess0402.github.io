window.onload = function(){
  const slideWrap = document.querySelector('.advice-container');
  const slideContainer = document.querySelector('.slide-container');
  const slide = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const slideCount = slide.length;
  let timer = undefined;

  // 슬라이드 가로로 배열
  slide[0].style.left = 0 + '%';
  for (let i = 0; i < slide.length; i++) {
      // slide[i].style.left = i * 100 + 10 + '%';
      slide[i].style.left = i * 100 + '%';
  };

  // 슬라이드 이동
  function goToSlide(idx) {

    slideContainer.classList.add('animated');
    slideContainer.style.left = -100 * idx + '%';
    currentIndex = idx;
      
  };

  // 자동 슬라이드
  const startSlide = () => {
    timer = setInterval(function(){
      let nextIdx = (currentIndex + 1) % slideCount;
      goToSlide(nextIdx);
    }, 4000);
  }
  startSlide();

  // 사용자가 마우스 올리면 멈춤
  $('.slide').on('mouseover', (e) => {
    clearInterval(timer);
  });
  $('.slide').on('mouseout', (e) => {
    startSlide();
  });

  

  // pager
  const pager = document.querySelectorAll('.pager span');
  console.log(pager);

  console.log($('.pager span'));


  $('.pager span').on('click', (e) => {
    let index = e.target.getAttribute('idx');
    goToSlide(index);
    });
  
  $('.pager span').on('mouseover', (e) => {
    e.target.classList.add('active');
  });

  $('.pager span').on('mouseout', (e) => {
    e.target.classList.remove('active');
  });

  let goalWrap = document.querySelector('#goal-wrapper').offsetTop;
  let bookWrap = document.querySelector('#book_start').offsetTop;
  let adviceWrap = document.querySelector('#advice').offsetTop;

  console.log(goalWrap);
  console.log(bookWrap);
  console.log(adviceWrap);
  window.addEventListener('scroll', () => {

   

    if(Math.round($(window).scrollTop()) < goalWrap){
      head.style.color = 'white';
      $('#navigation').find('a').css('color', 'white');
    }
    else if(Math.round($(window).scrollTop()) >= goalWrap && Math.round($(window).scrollTop()) < bookWrap){
      head.style.color = 'black';
      $('#navigation').find('a').css('color', 'black');
    }
    else if(Math.round($(window).scrollTop()) >= bookWrap && Math.round($(window).scrollTop()) < adviceWrap){
      head.style.color = 'white';
      $('#navigation').find('a').css('color', 'white');
    }
    else {
      head.style.color = 'black';
      $('#navigation').find('a').css('color', 'black');
    }

});
}

