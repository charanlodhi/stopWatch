let startStopBtn = document.getElementById('startStopBtm');
let intervalId = null;
let secound = 0;
let hours = 0;
let minutes = 0;

function updateTime(){
    secound++;
    if(secound >= 60){
        secound = 0;
        minutes++
        if(minutes >= 60){
            minutes = 0;
            hours++
        }
    }
    const formatedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}: ${secound.toString().padStart(2, '0')}`;
    document.getElementById('stopWatch').innerHTML = formatedTime;
    console.log("", formatedTime)
}

function startWatch(){
    if(!intervalId){
        intervalId = setInterval(updateTime, 1000)
    }
}

function stopWatch(){
    clearInterval(intervalId);
    intervalId = null;
}

startStopBtn.addEventListener('click', function(){
if(intervalId){
    stopWatch()
    this.innerHTML = 'Start';
} else{
    startWatch();
    this.innerHTML = "Stop"
}
})

