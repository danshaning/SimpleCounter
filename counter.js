let count = document.querySelector('#count');
let plus = document.querySelector('#btnP');
let less = document.querySelector('#btnL');

let x = 0;

function counterP (){
    x++;
    count.textContent = x;
}

function counterL (){
    x--;
    count.textContent = x;
}

plus.addEventListener('click', counterP);
less.addEventListener('click', counterL);
