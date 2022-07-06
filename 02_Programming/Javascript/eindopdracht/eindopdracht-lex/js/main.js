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


//* CAROUSEL

let items = document.querySelectorAll('.carousel .carousel__item');
let dots = document.querySelectorAll('.carousel__indicators li');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

function goToItem(n) {
	if (n < currentItem) {
		hideItem('to-right');
		currentItem = n;
		showItem('from-left');
	} else {
		hideItem('to-left');
		currentItem = n;
		showItem('from-right');
	}
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	dots[currentItem].classList.remove('active');
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	dots[currentItem].classList.add('active');
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

document.querySelector('.carousel__control--left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.carousel__control--right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

document.querySelector('.carousel__indicators').addEventListener('click', function(e) {
	let target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
	if (target !== currentItem && target < dots.length) {
		goToItem(target);
	}
});