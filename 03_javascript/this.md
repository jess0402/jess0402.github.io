# this 용법

1. inline 이벤트속성에 기술된 this는 태그객체 자신이다.
```html
    <input type="checkbox" name="subject" id="subject1"
    onchange="subjectChanged(this);">
```

