let container =document.getElementById('container');
let count =50;
for(var i=0;i<50;i++){
    let leftsnow = Math.floor(Math.random()*container.clientWidth);
    let topsnow = Math.floor(Math.random()*container.clientHeight);
    let widthsnow=Math.floor(Math.random()* 80);
    let thimesnow = Math.floor((Math.random()* 5)+5);
    let blur= Math.floor(Math.random() *10);
    let div= document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftsnow + 'px';
    div.style.top = topsnow + 'px';
    div.style.width = widthsnow + 'px';
    div.style.height = widthsnow + 'px';
    div.style.animationDuration = thimesnow + 's';
    div.style.filter = "blur(" + blur + "px)";
    container.appendChild(div);
}
