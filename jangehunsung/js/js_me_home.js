window.onload = function(){

  let i = 0;
  let j = 0;

  const textArr = ["Hey, I'm EhunSung!", "Pre-developer!"];
  const typing_speed = 190;
  const removing_speed = 60;
  const target = document.querySelector('#text_hey');
  
  const txtnum = () => {
    j == textArr.length - 1 ? j = 0 : j++;
  };

  const type = () => {
    i < textArr[j].length
    ? (target.innerHTML += textArr[j].charAt(i), i++, setTimeout(type, typing_speed))
    : (sleep(2400), remove())
  };

  const remove = () => {
    i >= 0 
    ? (target.innerHTML = target.innerHTML.slice(0, i), i--, setTimeout(remove, removing_speed))
    : (txtnum(), type())
  }

  type(); 



  function sleep(delay){
    const start = new Date().getTime();
    while(new Date().getTime() < start + delay);
  }

// function typing(text, tag){
//   tag.innerHTML += text.charAt(index++);
//   if(index > text.length){
//     tag.textContent = "";
//     index = 0;
//     sleep(1500);
//   }
// };

// setInterval(() => typing(hey, hey_tag), 200);
}

