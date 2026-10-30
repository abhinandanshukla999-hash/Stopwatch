window.addEventListener("load", () => {
    console.log('loading the page')
    document.querySelector(".loader").style.display = "none";

});

let dis=document.querySelector('#stopwatch');
document.querySelector('#start').addEventListener('click',startTimer);
document.querySelector('#reset').addEventListener('click',resetTimer);
document.querySelector('#pause').addEventListener('click',stopTimer);

document.querySelector('#saffron').addEventListener('click',  ()=>{
    document.body.style.backgroundColor = "rgb(255, 104, 11)";
    
});

document.querySelector('#black').addEventListener('click',  ()=>{
    document.body.style.backgroundColor = "rgb(255, 242, 104)";
    document.body.style.color="white";
});

document.querySelector('#green').addEventListener('click',  ()=>{
    document.body.style.backgroundColor = "rgb(25, 221, 129)";
    document.body.style.color="white";
});

document.querySelector('#darkblue').addEventListener('click',  ()=>{
    document.body.style.backgroundColor = "rgb(128, 118, 244)";
    document.body.style.color="black";
});

document.querySelector('#white').addEventListener('click',  ()=>{
    document.body.style.backgroundColor = "rgb(245, 244, 245)";
});

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

    const li=document.createElement('li');
    li.textContent=dis.textContent;
    document.getElementById('#list').appendChild(li);
    
    
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
