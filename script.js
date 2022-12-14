setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')


function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/ 60
    //console.log(secondHand)
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setrotation(secondHand, secondsRatio)
    setrotation(minuteHand, minutesRatio)
    setrotation(hourHand, hoursRatio)
}

function setrotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()