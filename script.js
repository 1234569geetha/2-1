let millisecounds = 0 , secound=0,minutes=0,hours=0;
let timeshow = document.getElementById('timeshow')
let timeref;

document.getElementById('start').onclick = function(){
    timeref = setInterval(updateTime,10)

}
function updateTime(){
    millisecounds = millisecounds+10;
    if(millisecounds==1000){
        secound=secound+1;
        millisecounds=0;
        if(secound==60){
            minutes=minutes+1;
            secound=0;
            if(minutes==0){
                hours = hours+1;
                minutes=0;
            }

        }
    }
    let h,m,s,ms;
    if(hours<10){
        h= '0'+hours
    }
    else{
        h=hours
    }
    if(minutes<10){
        m='0'+minutes
    }
    else{
        m=minutes
    }
    if(secound<10){
        s='0'+secound
    }
    else{
        s=secound
    }if(millisecounds<10){
        ms='0'+millisecounds
    }
    else if(millisecounds<100){
        ms='00'+millisecounds
    }
    else{
        ms=millisecounds     
    }
    timeshow.innerHTML=`${h} : ${m} : ${s} : ${ms}`

}
document.getElementById('pause').onclick=function(){
    clearInterval(timeref)
}

document.getElementById('reset').onclick= function(){
    clearInterval(timeref)
    millisecounds = 0;
    secound = 0;
    minutes =0;
    hours = 0;
    timeshow.innerHTML = "00:00:00:00"
}