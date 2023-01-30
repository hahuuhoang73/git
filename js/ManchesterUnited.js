document.getElementById('hai').onclick = function(){
   const wtdthIteam = document.querySelector('.profile-car').offsetWidth;
   document.getElementById('fromslist').scrollLeft += wtdthIteam;
}
document.getElementById('mot').onclick = function(){
    const wtdthIteam = document.querySelector('.profile-car').offsetWidth;
    document.getElementById('fromslist').scrollLeft -= wtdthIteam;
 }