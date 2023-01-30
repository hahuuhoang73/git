document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

function submitForm(event){ 
    event.preventDefault();
   var ele = document.getElementById("valueInput");
   document.getElementById('results').innerHTML =  `Giá Trị ô input ${ele.value}`
 }