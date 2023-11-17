let buttonWrite = document.querySelector(".btn-write");
let buttonClear = document.querySelector(".btn-clean");
let pTxt = document.querySelector('.text')

let userName = prompt("як вас звати?")

function task1 (){
pTxt.innerHTML = 'привіт, ' + userName
}
function task11 (){
    pTxt.innerHTML = '';
    }
buttonWrite.onclick = task1;

buttonClear.onclick = task11;

// ----------------------------------------------------------------------------------------------
// 1

let a=7 ;
let  b=9;
let div1 = document.querySelector('.out-1');
div1.innerHTML = a * b ;

// 2
let div2 = document.querySelector('.out-2');
div2.innerHTML = a / b ;



let div3 = document.querySelector('.out-3');
div3.innerHTML = a + b ;


let el = "3" ;
let fi = 5 ;
let div4 = document.querySelector('.out-4');
div4.innerHTML = el + fi ;


let e = 3 ;
let f = 0 ;
let div5 = document.querySelector('.out-5');
div5.innerHTML = e / f ;



let e = 3 ;
let f = "Hello" ;
let div6 = document.querySelector('.out-6');
div6.innerHTML = e + f ;


let e = 3 ;
let f = "Hello" ;
let div7 = document.querySelector('.out-7');
div7.innerHTML = e * f ;

