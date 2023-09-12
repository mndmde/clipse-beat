(()=>{document.documentElement.style="touch-action: manipulation;"})()

document.addEventListener("touchstart", e => {
  console.log("Start")
})

document.addEventListener("touchmove", e => {
  console.log("Move")
})

document.addEventListener("touchend", e => {
  console.log("End")
})

function pic() {
  var bgm = ['./bg/1.jpeg','./bg/2.jpeg','./bg/3.jpeg'];
  $('html').css({
    'background' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ') no-repeat',
    'background-position' : 'center',
  });
}
pic();

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

function playSoundOnClick(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`); 

  if (audio) {
    key.classList.add('playing');    
    audio.currentTime = 0;
    audio.play();
  }
}

keys.forEach((element, index) => element.addEventListener('touch', () => playSoundOnClick({ keyCode: keys[index].getAttribute('data-key') })));
