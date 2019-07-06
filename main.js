let arr=[];
let btnUp=document.querySelector('.btnUp');
let btnRight=document.querySelector('.btnRight');
let btnLeft=document.querySelector('.btnLeft');
let btnDown=document.querySelector('.btnDown');
let rating=document.querySelector('h1').innerText;
let max = 4;
//console.log( Math.random() * max );

// function getRandom(2,4) {
//     return Math.random();
// }

//считываем значение с ячеек
function numberCell(){
    let number=document.querySelectorAll('.item');
    for(i=0; i<number.length; i++){
        arr.push(+number[i].innerText);    
    }
}

//суммируем строки
function rowSum(){
    let a=arr[12]+arr[8]+arr[4]+arr[0];    
    let b=arr[13]+arr[9]+arr[5]+arr[1];
    let c=arr[14]+arr[10]+arr[6]+arr[2];
    let d=arr[15]+arr[11]+arr[7]+arr[3];
}

//суммируем столбцы
function columnSum(){
    let e=arr[0]+arr[1]+arr[2]+arr[3];    
    let f=arr[4]+arr[5]+arr[6]+arr[7];
    let g=arr[8]+arr[9]+arr[10]+arr[11];
    let h=arr[12]+arr[13]+arr[14]+arr[15];
}

btnUp.addEventListener('click',()=>{
    numberCell();
    rowSum(); 
});
btnRight.addEventListener('click',()=>{
    numberCell();
    columnSum();
});
btnLeft.addEventListener('click',()=>{
    numberCell();
    columnSum();
});
btnDown.addEventListener('click',()=>{
    numberCell();
    rowSum();
});
