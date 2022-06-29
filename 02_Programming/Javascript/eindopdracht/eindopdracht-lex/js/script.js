document.addEventListener("DOMContentLoaded", () => {

  //*  CLOCK

setInterval(setClock, 1000);

const hourHand = document.querySelector('.clock__face--hour');
const minuteHand = document.querySelector('.clock__face--minute');
const secondHand = document.querySelector('.clock__face--second');

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(hourHand, hoursRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();


//* CAROUSEL BASIC

  const slides = document.querySelectorAll('.carousel__slide');
  const nextButton = document.querySelector('.carousel__button--next');
  const prevButton = document.querySelector('.carousel__button--prev');
  let currentSlide = 0;


  function nextSlide() {
    // huidige slide wordt verborgen (class '--displayed' wordt verwijderd)
    slides[currentSlide].className = 'carousel__slide';
    // maak de volgende slide de currentSlide
    currentSlide = (currentSlide + 1) % slides.length;
    // nieuwe currentSlide wordt getoond (--displayed wordt toegevoegd)
    slides[currentSlide].className = 'carousel__slide carousel__slide--displayed';
  }

  function prevSlide() {
    slides[currentSlide].className = 'carousel__slide';
    currentSlide = (currentSlide - 1) % slides.length;
    if (currentSlide == -1) {
      currentSlide = slides.length - 1;
    }
    slides[currentSlide].className = 'carousel__slide carousel__slide--displayed';
  }

  nextButton.addEventListener("click", () => {
    nextSlide();
  });

  prevButton.addEventListener("click", () => {
    prevSlide();
  });

});