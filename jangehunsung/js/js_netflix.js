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
                        '자유분방한 조지아가 북부로 이사 온다. 두 아이, 지니와 오스틴을 데리고. 애들을 위해 부유한 동네에서 새 출발을 하는거야! 하지만 그 길은 생각만큼 순탄하지 않다.'));
  dramas.push(new Drama('./images/netflix/dion.jpg', '슈퍼키드 디온', 12, '만화책 원작 TV 프로그램, 가족이 함께 보는 시리즈' , '얼리샤 웨인라이트, 저사이어 영',
                        '모두 제 자식이 특별하겠지만, 내 아들은 정말 특별해!\n 어린 디온을 홀로 키우는 니콜.\n 설명할 수 없는 이상하고 무서운 힘이 아들에게 있다는 것을 알고 두려움에 빠진다.'));
  dramas.push(new Drama('./images/aboutme/medium9.jpg', 'ㅎㅎ', 13, '가족이 함께 보는 시리즈' , '저사이어 영',
                        '설명할 수 없는 이상하고 무서운 힘이 아들에게 있다는 것을 알고 두려움에 빠진다.'));
  dramas.push(new Drama('./images/aboutme/medium11.jpg', 'zz', 18, '만화책 원작 TV 프로그램' , '얼리샤 웨인라이트',
                        '모두 제 자식이 특별하겠지만, 내 아들은 정말 특별해!\n '));
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
          <span class="age">${age}세</span>
          <span class="genre">${genre}</span>
          <span class="cast">${cast}</span>
          <span class="story">${story}</span>
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
    };

    // 버튼기능 업데이트 함수(끝까지 가면 다음버튼이 사라지도록) 버튼을 클릭하면 슬라이드 이동시키기 다음버튼을 클릭하면 할 일, 이전 버튼을
    // 클릭하면 할 일.
    $navPrev.addEventListener('click', function () {
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

  const moving = function(selectedA){
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