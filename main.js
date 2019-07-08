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

//перекрашиваем ячейки
function colour(){     
     for(let i=0;i<16;i++) {
       let elem = number[i]; 
         if(elem.textContent==" "){
            elem.style.backgroundColor = "#dedede";
         }   
         else if (elem.textContent=="2") {
            elem.style.backgroundColor="yellow";
         }
         else if (elem.textContent=="4") {
           elem.style.backgroundColor="lightgreen";
         }
         else if (elem.textContent=="8") {
           elem.style.backgroundColor="lightblue";
         }
         else if (elem.textContent=="16") {
           elem.style.backgroundColor="peach";
         }
         else if (elem.textContent=="32") {
           elem.style.backgroundColor="green";
         }
         else if (elem.textContent=="64") {
           elem.style.backgroundColor="red";
         }
         else if (elem.textContent=="128") {
           elem.style.backgroundColor="pinck";
         }
         else if (elem.textContent=="256") {
           elem.style.backgroundColor="#f15";
         }
         else if (elem.textContent=="512") {
           elem.style.backgroundColor="#f05";
         }
         else if (elem.textContent=="1024") {
           elem.style.backgroundColor="#e00";
         }
         else if (elem.textContent=="2048") {
           elem.style.backgroundColor="#dedede";
         }
         else
         {
         elem.style.backgroundColor="#dedede"; 
         }
     }
}colour();


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
    colour();
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
