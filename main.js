
window.onload = () => {
    generateClockMarkings();
    intializeClockTime();
};

function intializeClockTime(){
    let currentTime = new Date() ;

    // get current time in seconds
    let seconds = currentTime.getSeconds() ;
    let minutes = currentTime.getMinutes() ;
    let hours   = currentTime.getHours() ;

    // calculate Offsets based on passed time
    let secondHandOffset = seconds;
    let minuteHandOffset = minutes * 60 + seconds;
    let hourHandOffset   = hours * 3600 + minuteHandOffset ;

    // Apply offsets to clock hands
    let secondHand = document.querySelector(".clock-second-hand") ;
    let minuteHand = document.querySelector(".clock-minute-hand") ;
    let hourHand   = document.querySelector(".clock-hour-hand") ;

    secondHand.style.animationDelay = (-secondHandOffset) + "s" ;
    minuteHand.style.animationDelay = (-minuteHandOffset) + "s" ;
    hourHand.style.animationDelay   = (-hourHandOffset) + "s" ;
}

// this function generates markings 
function generateClockMarkings() {
    let markingContainer = document.querySelector(".clock-markings");

    for(var i=0;i<360;i+=6) {
        markingContainer.innerHTML += `<div class="mark" style="transform: translate(-50%,-50%) rotate(${i}deg);opacity:${i%30==0?0.75:0.3};"></div>` ;
    }

}

let darkModeEnabled = false ;
let bodyElement = null ;
let themeSwitch = null ;
// function to change theme
function switchTheme() {
    if(themeSwitch === null) 
        themeSwitch = document.getElementById("theme-switch");
    if(bodyElement === null)
        bodyElement = document.querySelector("body") ;
    
    if(darkModeEnabled === true) {
        themeSwitch.setAttribute("data-state","light-mode") ;
        bodyElement.classList.remove("dark-theme");
        bodyElement.classList.remove("light-theme");
        bodyElement.classList.add("light-theme");
        darkModeEnabled = false ;
    } else {
        themeSwitch.setAttribute("data-state","dark-mode") ;
        bodyElement.classList.remove("dark-theme");
        bodyElement.classList.remove("light-theme");
        bodyElement.classList.add("dark-theme");
        darkModeEnabled = true ;
    }

}
