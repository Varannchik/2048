let arr=[];
let btnUp=document.querySelector('.btnUp');
let btnRight=document.querySelector('.btnRight');
let btnLeft=document.querySelector('.btnLeft');
let btnDown=document.querySelector('.btnDown');
let rating=document.querySelector('h1').innerText;
let number=document.querySelectorAll('.item');

//считываем значение с ячеек
function numberCell(){    
    for(let i=0; i<number.length; i++){
        arr.push(+number[i].innerText);         
    }
}

//выбираем случайный номер ячейки
function rand(){
    let x = Math.floor((Math.random() * 16));       
}

//суммируем строки
function rowSumUp(){
    

}

//суммируем столбцы
function columnSum(){
    
}

btnUp.addEventListener('click',function (){    
    numberCell();
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
