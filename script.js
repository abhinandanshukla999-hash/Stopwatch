document.querySelector('#start').addEventListener('click',startTimer);
document.querySelector('#reset').addEventListener('click',resetTimer);
document.querySelector('#pause').addEventListener('click',stopTimer);


let ms=0;
let sec=0;
let min=0;
let hour=0;
let timer= null;

function updateTime(){
    ms+=1;
    if(ms===100){
        ms=0;
        sec++;
    }
    if(sec===60){
        sec=0;
        min++;
    }
    if(min===60){
        min=0;
        hour++;
    }
    display();
}
function display(){
    document.querySelector("#stopwatch").textContent=String(hour).padStart(2,"0")+":"+
    String(min).padStart(2,"0")+":"+
    String(sec).padStart(2,"0")+":"+
    String(ms).padStart(2,"0");
}
function startTimer(){
    if(timer===null){
        timer=setInterval(updateTime,10);
    }
}
function stopTimer(){
    clearInterval(timer);
    timer=null;
}
function resetTimer(){
   clearInterval(timer);
   timer=null;
   sec=0;
   min=0;
   hour=0;
   ms=0;
   display();

}
