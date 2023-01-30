const song = document.getElementById("song");

const playBtn =  document.querySelector(".player-inner");

const durationTime = document.querySelector(".duration");

const remainingTime = document.querySelector(".remaining");

const rangebar = document.querySelector(".range");

let isPlaying = true;

playBtn.addEventListener("click", playPause);

displaytimer();
let timer 

function playPause(){
  if (isPlaying){

  song.play();
  isPlaying = false;
  playBtn.innerHTML=`<ion-icon name="pause"></ion-icon>`
  timer = setInterval(displaytimer,500);
}else{

    song.pause();
    isPlaying = true;
    playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
    clearInterval(timer);
  }

}

function  displaytimer(){
  console.log("display timer");

  const {duration, currentTime}= song;
  rangebar.max = duration;
  rangebar.value = currentTime;
  remainingTime.textContent = formart(currentTime);
  


  if (!duration) {
    durationTime.textContent = "00:00";
  }else{
    durationTime.textContent = formart(duration); 
  }
}
function formart(number) {
  const minutes = Math.floor(number/60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes}:${seconds}`;
}

rangebar.addEventListener("change", handleChangeBar);
function handleChangeBar(){
  song.currentTime =  rangebar.value;


}