//*  CLOCK

// setInterval(setClock, 1000);

// const hourHand = document.querySelector('.clock__face--hour');
// const minuteHand = document.querySelector('.clock__face--minute');
// const secondHand = document.querySelector('.clock__face--second');

// function setClock() {
//     const currentDate = new Date();
//     const secondsRatio = currentDate.getSeconds() / 60;
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
//     setRotation(hourHand, hoursRatio);
//     setRotation(minuteHand, minutesRatio);
//     setRotation(secondHand, secondsRatio);
// }

// function setRotation(element, rotationRatio) {
//     element.style.setProperty('--rotation', rotationRatio * 360);
// }

// setClock();

//* CAROUSEL

document.addEventListener("click", e => {
    let arrow
    if (e.target.matches(".carousel__controls")) {
        arrow = e.target
    } else {
        arrow = e.target.closest(".carousel__controls")
    }
    if (arrow != null) onArrowClick(arrow)
})

function onArrowClick(arrow) {
    const slider = arrow.closest(".carousel").querySelector(".carousel__slider")
    const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    if (arrow.classList.contains("carousel__controls--prev")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
    }
    if (arrow.classList.contains("carousel__controls--next")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
    }
}