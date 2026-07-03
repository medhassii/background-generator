
let seconds = 0;
let timer = null;
let lapNumber = 0;



const displayTime = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const lapBtn = document.querySelector("#lap");
const lapList = document.querySelector("#laps");

startBtn.addEventListener("click", () =>{
    if(timer !== null) return;

    timer =setInterval(() => {
        seconds++;

        let minutes = Math.floor(seconds/60);
    let secs = seconds% 60;

        displayTime.textContent =
String(minutes).padStart(2, "0") + ":" +
String(secs).padStart(2, "0");
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer =null;

});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer =null;
    
    seconds =0;

     displayTime.textContent = "00:00";

     lapList.innerHTML = "";
    lapNumber = 0;
});

lapBtn.addEventListener("click", () => {

    if(seconds === 0) return;
    
    lapNumber++;
    
    let lap = "Lap " + lapNumber + "-" + displayTime.textContent;

    const li = document.createElement("li");
    li.textContent = lap;

    lapList.append(li);


});
