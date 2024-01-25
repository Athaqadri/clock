const secondhand = document.getElementById('second-hand');
const minutehand = document.getElementById('minute-hand');
const hourhand = document.getElementById('hour-hand');

function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const minutes = (seconds + date.getMinutes())  / 60;
    const hours = (minutes + date.getHours()) /12 ;



rotateClockhand(secondhand, seconds);
rotateClockhand(minutehand, minutes);
rotateClockhand(hourhand, hours);


}

function rotateClockhand(element , rotation){
    element.style.setProperty('--rotate', rotation*360);
}
setInterval(clockTick,1000);