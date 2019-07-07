let arr=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let btnUp=document.querySelector('.btnUp');
let btnRight=document.querySelector('.btnRight');
let btnLeft=document.querySelector('.btnLeft');
let btnDown=document.querySelector('.btnDown');
let rating=document.querySelector('h1').innerText;
let number=document.querySelectorAll('.item');
let x;

//считываем значение с ячеек
function numberCell(){    
    for(let i=0; i<number.length; i++){       
        arr[i]===+number[i].innerText;                        
    } 
    return arr;   
}
numberCell();

//выбираем случайный номер ячейки
function rand(){
    let x = Math.floor((Math.random() * 16));
    number[x].innerHTML='2';
    arr[x]=+2;
}
rand();

//суммируем строки
function rowSumUp(){
    for (let i=0; i<4; i++){
       let b=arr[i]+arr[i+4]+arr[i+8]+arr[i+12];
       number[i].innerHTML=b;
    }
    for(i=4; i<16; i++){
        number[i].innerHTML='';
    }
}

//суммируем столбцы
function columnSum(){
    
}

btnUp.addEventListener('click',function (){
    numberCell();     
    rowSumUp(); 
    rand();
});
btnRight.addEventListener('click',function (){
    numberCell();
    rand();   
});
btnLeft.addEventListener('click',function (){
    numberCell();
    rand();
});
btnDown.addEventListener('click',function (){
    numberCell();
    rand();
});
