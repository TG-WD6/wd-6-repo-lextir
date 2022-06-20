// IF ELSE

// function pressed() {
//   let maand = document.getElementById("input").value;
//   if (maand == "1") {
//     document.getElementById("header").innerHTML = "Januari";
//   } else if (maand == "2") {
//     document.getElementById("header").innerHTML = "Februari";
//   } else {
//     document.getElementById("header").innerHTML = "Geen geldige maand";
//   }
// }

// SWITCH CASE

// let text = 1;

// function pressed() {
//   let text = document.getElementById("input").value;
//   switch (text) {
//     case "1":
//       document.getElementById("header").innerHTML = "Januari";
//       break;
//     case "2":
//       document.getElementById("header").innerHTML = "Februari";
//       break;
//     default:
//       document.getElementById("header").innerHTML = "Geen geldige maand";
//       break;
//   }
// }

//  TERNARY OPERATOR

// let x = 10;
// let results;

// results = x<=4 && x>=0 ? '2' : '5'

// console.log(results)

// let text = document.getElementById("input").value;

// function pressed(parameter) {
//   console.log("parameter.value");

// }


// // STUDIEKEUZE
// function myFunction() {
//   let x = document.getElementById("studiekeuze").value;
//   document.getElementById("toon-studiekeuze").innerHTML = "Je hebt gekozen: " + x;
// }

// OPDRACHT 4.1 PARAMETERS

// function pressed() {
//   console.log("Hello World")
// }

// function showMessage(voornaam) {
//   console.log('Welkom terug, ' + voornaam)
// }

//  return voorbeeld
// function myFunction(a) {
//   return a * 2;
// }

// let x = myFunction(7);
// document.getElementById("demo").innerHTML = x;


// OPDRACHT 4.3.1

// function randomNumber() {
//   let random = Math.random();
//   console.log(random);
// }

// OPDRACHT 4.3.2

// function randomNumber(x) {
//   let random = Math.floor(Math.random() * 8);
//   console.log(random);
// }

// OPDRACHT 4.4.1

// function pressed() {
//   let naamGroepslid = document.getElementById("inputnaam").value;
//   switch (naamGroepslid) {
//     case "Fares":
//     case "Joost":
//     case "Nathaniel":
//     case "Lex":
//       document.getElementById("toon-naam").innerHTML = naamGroepslid + " zit in jouw groepje";
//       break;
//     default:
//       document.getElementById("toon-naam").innerHTML = naamGroepslid + " zit niet in jouw groepje";
//   }
// }

// OPDRACHT 5.1.1

// let soortenFruit = ['appel', 'peer', 'banaan', 'kiwi', 'ananas', 'meloen', 'mango', 'druiven', 'kersen', 'aardbei'];
// console.log(soortenFruit);

// OPDRACHT 5.1.4

// let soortenFruit = ['appel', 'peer', 'banaan', 'kiwi', 'ananas', 'meloen', 'mango', 'druiven', 'kersen', 'aardbei'];

// let randomFruit = soortenFruit[Math.floor(Math.random() * soortenFruit.length)];

// console.log(randomFruit);

// OPDRACHT 5.1.7

// let soortenFruit = ['appel', 'peer', 'banaan', 'kiwi', 'ananas', 'meloen', 'mango', 'druiven', 'kersen', 'aardbei'];

// soortenFruit[0] = 'peer';
// soortenFruit[1] = 'appel';

// console.log(soortenFruit);

// OPDRACHT 5.2.1

// const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];

// for (i = 0; i < dutchSports.length; i++) {
//   console.log(dutchSports[i]);
// }

// OPDRACHT 5.2.2 (FOR...IN LOOP)

// const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];

// for (const x in dutchSports) {
//   console.log(`dutchSports.${x} = ${dutchSports[x]}`);
// }

// OPDRACHT 5.2.2 (FOR...OF LOOP)

// const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];

// for (const x of dutchSports) {
//   console.log(x);
// }

// OPDRACHT 5.2.3

// for (i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// OPDRACHT 5.2.4

// for (i = 1; i <= 3; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(j);
//   }
// }

// OPDRACHT 5.2.5

// for (i = 1; i <= 3; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(j * i);
//   }
// }

// OPDRACHT 5.2.6

// let fibArray = [0, 1];

// for (i = 2; i <= 50; i++) {
//   fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
//   console.log(fibArray[i]);
// }

// OPDRACHT 5.2.7

// function bubbleSort(array) {

//   for (let i = 0; i < array.length ; i++) {
//     for(let j = 0 ; j < array.length; j++) {
//     if (array[j] > array[j + 1]) {
//       let temp = array[j];
//       array[j] = array[j+1];
//       array[j + 1] = temp;
//     }
//    }
//   }
//   return array;
// }

// let randomNumbers = [2,7,5,10,4,9,3,1,8,6];
// console.log(bubbleSort(randomNumbers));

// OPDRACHT 5.3.1

const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

dutchSports.push("Zeilen", "Zwemmen");
dutchSports.unshift("Volleybal");

const ballSports = dutchSports.slice(0, 3);

dutchSports.splice(0, 3);

console.log(dutchSports);

let sportsLength = dutchSports.map(function (word) {
  return word.length
})


console.log(sportsLength);
