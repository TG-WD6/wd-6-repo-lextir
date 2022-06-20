// "use strict";

// let message = 'hoi';

// let bericht;

// bericht = message;

// const COLOR_RED = '#F00';

// let doMath = "1erf" / 0;


// let vraagNaam = prompt('Wat is je naam?');
// alert(vraagNaam);

// Type Conversion:

// let sfes = true;
// sfes = String(sfes);

// let value = "23";
// let num = Number(value);
// console.log(typeof sfes);

// IF ELSE
// let vraagBday = prompt('Wat is je geboortejaar');
// if (vraagBday == 1979) {
//     alert('Correct!');
// } else{
//     alert('Fout!');
// }

// let x = prompt('type een nummer');
// if (x > 0) {
//   alert(1);
// } else if (x < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }


// TERNARY OPERATOR
// let vraagGeboortejaar = prompt('Wat is je geboortejaar');
// vraagGeboortejaar == 1979 ? alert('Correct!') : alert('Fout!');

// result (a + b < 4) ? 'Below' : 'Over';

// let message;

// message (login == 'Employee') ? 'Hello' :
// (login == 'Director') ? 'Greetings' :
// (login == '') ?   'No login' :
// '';

// let hour = 14;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   console.log('Wij zijn gesloten');
// } else {
//   console.log('Wij zijn open');
// }


// const first_input = document.querySelector();
// const second_input = document.querySelector();

// const zinnen = ["has escaped", "has kidnapped", "dropped by"]

// document.createElement()

// document.querySelector().appendChild()



// if (bDay == 1979) {
//   console.log('Correct!');
// } else {
//   console.log('Fout!');
// }



// let bDay = 1979;
// let message = (bDay == 1979) ? 'Correct!' : 'Fout!';
// console.log(message);

// let x = 0;
// while (x < 5) {
//   console.log(x);
//   x++;
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }


// function showMessage() {
//   let message = document.querySelector('#textinput').value;
//   console.log(message);
// }


// let selectedColors = ['red', 'blue', 'green'];
// console.log(selectedColors);

// for (let i = 1; i <= 10; i++) {

//   if (i === 5) {
//     continue;
//   }
//   console.log(i);

//   if (i === 7) {
//     break;
//   }
// }
// console.log('Done');

// let dieren = ['koe', 'paard', 'hond', 'kat', 'kameel'];
// console.log(dieren.indexOf('sat'));

// function myFunction(myString) {
//   console.log(myString);
// }

// myFunction(4456);

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(13, 78);
// console.log(result);

// const max = 57;
// let actual = max - 13;
// let percentage = actual / max;

// const song = 'Fight the Power';
// const score = 8;
// const highestScore = 10;
// const output = `I gave the song ${song} a score of ${score/highestScore * 100}%.`;

let x = 24;

if (x < 18) {
  console.log('Je bent jonger dan 18');
} else {
  console.log('Je bent ouder dan 18');
}

switch (x < 18) {

}

function generate () {
  let x = Math.floor(Math.random() * 10);
  console.log(x);
}

console.log(`${generate()}`);
