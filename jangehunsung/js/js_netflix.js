// window.onload = function() {

  navigation.classList.add('disabled');

  function Drama(img, title, age, genre, cast, story) {
    this.img = img;
    this.title = title;
    this.age = age;
    this.genre = genre;
    this.cast = cast;
    this.story = story;
  }
  
  const dramas = [];
  dramas.push(new Drama('./images/netflix/gg.jpg', '지니 앤 조지아', 18, '청소년, 로맨틱 코미디', '브리앤 하위, 안토니아 젠트리', 
                        '30세의 젊은 엄마 조지아와 십대 딸 지니가\n 새로운 동네에 이사오며 벌어지는 이야기'));
  dramas.push(new Drama('./images/netflix/dion.jpg', '슈퍼키드 디온', 12, '만화책 원작 TV 프로그램, 가족이 함께 보는 시리즈' , '얼리샤 웨인라이트, 저사이어 영',
                        '하루아침에 초능력을 갖게 된 꼬마 디온과\n 그런 아들을 보호하기 위해 고군분투하는 싱글맘 니콜의 이야기.'));
  dramas.push(new Drama('./images/netflix/seas.jpg', '씨스피라시', 15, '자연 & 생태 다큐멘터리' , '알리 타브리지, 킵 앤더슨',
                        '아무런 규제 없이 무차별적으로 행해지고 있는 현시대의 수산업이\n 바다 생태계를 어떻게 망가뜨리는지 보여주는 다큐멘터리'));
  
  let index = 2;                      
  movie_container.innerHTML += dramas.reduce((html, drama) => {
    let {img, title, age, genre, cast, story} = drama;
    story = story.replace(/\n/g, '<br>');

    nav_container.innerHTML += `<li>
      <div class="circle_container">
        <a href="#" class="circle" id="circle${index}" onmouseover=show(this); onmouseout="hide(this);" onclick="moving(this);"></a>
        <span class="circle_title" id="title${index}">${title}</span>
      </div>
    </li>`;

    return html + `<li class="slide" id="slide${index++}">
        <div class="movie_img">
          <img src=${img}>
        </div>
        <div class="movie_info">
          <span class="title">${title}</span>
          <span class="age">${age}세이상 관람가</span>
          <span class="genre">장르: ${genre}</span>
          <span class="cast">출연: ${cast}</span>
          <span class="story">줄거리: ${story}</span>
        </div>
      </li>`;
  }, "");

    // 변수 지정
    /**
     * 클래스명: container -> 변수명: $slideWrap
     * 클래스명: slider-container -> 변수명 $slideContainer
     * 클래스명: slide -> 변수명: $slide
     * 이전버튼: $navPrev
     * 다음버튼: $navNext
     */
    const $slideWrap = document.querySelector('.container');
    const $slideContainer = document.querySelector('.slide_container');
    const $slide = document.querySelectorAll('.slide');
    const $navPrev = document.getElementById('prev');
    const $navNext = document.getElementById('next');
    let $currentIndex = 0;
    const $slideCount = $slide.length;

    

    // 슬라이드가 있으면 가로로 배열하기
    $slide[0].style.left = 0 + '%';
    for (let i = 0; i < $slide.length; i++) {
        $slide[i].style.left = i * 100 + '%';
    };

    // 첫번째 슬라이드에서는 화살표 안보이도록
    if ($currentIndex == 0) {
        $navPrev.classList.add('disabled');
    }

    // 슬라이드 이동함수
    function goToSlide(idx) {
      
      $slideContainer.style.left = -100 * idx + '%';
      $slideContainer.classList.add('animated');
      $currentIndex = idx;
      if($currentIndex != 0)
        document.querySelectorAll('#nav_container a')[$currentIndex-1].classList.add('color');
    };

    // 버튼기능 업데이트 함수(끝까지 가면 다음버튼이 사라지도록) 버튼을 클릭하면 슬라이드 이동시키기 다음버튼을 클릭하면 할 일, 이전 버튼을
    // 클릭하면 할 일.
    $navPrev.addEventListener('click', function () {
      document.querySelectorAll('#nav_container a')[$currentIndex-1].classList.remove('color');
        goToSlide($currentIndex - 1);
        ckPrev();

    });

    const ckPrev = () => {
        if ($currentIndex == 0) {
            $navPrev.classList.add('disabled');
            navigation.classList.add('disabled');
        } else if ($currentIndex != ($slideCount - 1)) {
            $navNext.classList.remove('disabled');
        }
    }

    $navNext.addEventListener('click', function () {
      if($currentIndex != 0)
        document.querySelectorAll('#nav_container a')[$currentIndex-1].classList.remove('color');
      goToSlide($currentIndex + 1);
      ckNext();

    });

    const ckNext = () => {
      if ($currentIndex == $slideCount - 1) { // 마지막슬라이드라면
            $navNext.classList.add('disabled');
        } else if ($currentIndex != 0) {
            $navPrev.classList.remove('disabled');
            navigation.classList.remove('disabled');
        };
    };

  const init = () => {
    navigation.classList.add('disabled');
  };

  const aArr = document.querySelectorAll('.circle')
  // console.log(aArr);
  const moving = function(selectedA){
    for(aa of aArr){
      aa.classList.remove('color');
    }
    selectedA.classList.add('color');

    let leftVal = (selectedA.id.charAt(6) - 1) * -100 + '%'

    $currentIndex = selectedA.id.charAt(6) - 1;
    ckPrev();
    ckNext();
    $slideContainer.style.left = leftVal;

  };

  const show = function(selectedA){
    let idx = selectedA.id.charAt(6);
    document.getElementById(`title${idx}`).classList.add('show');
  };

  const hide = function(selectedA){
    let idx = selectedA.id.charAt(6);
    document.getElementById(`title${idx}`).classList.remove('show');
  };

// }