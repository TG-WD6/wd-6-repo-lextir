// * IF ELSE

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

// * SWITCH CASE

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

// * TERNARY OPERATOR

// let x = 10;
// let results;

// results = x<=4 && x>=0 ? '2' : '5'

// console.log(results)

// let text = document.getElementById("input").value;

// function pressed(parameter) {
//   console.log("parameter.value");

// }


// * STUDIEKEUZE
// function myFunction() {
//   let x = document.getElementById("studiekeuze").value;
//   document.getElementById("toon-studiekeuze").innerHTML = "Je hebt gekozen: " + x;
// }

// * OPDRACHT 4.1

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


// * OPDRACHT 4.3.1

// function randomNumber() {
//   let random = Math.random();
//   console.log(random);
// }

// * OPDRACHT 4.3.2

// function randomNumber(x) {
//   let random = Math.floor(Math.random() * 8);
//   console.log(random);
// }

// * OPDRACHT 4.4.1

// function pressed() {
//   let naamGroepslid = document.getElementById("inputnaam").value;
//   switch (naamGroepslid) {
//     case "fares":
//     case "joost":
//     case "nathaniel":
//     case "lex":
//       document.getElementById("toon-naam").innerText = naamGroepslid + " zit in jouw groepje";
//       break;
//     default:
//       document.getElementById("toon-naam").innerText = naamGroepslid + " zit niet in jouw groepje";
//   }
// }

// * OPDRACHT 5.1.1

// let soortenFruit = ['appel', 'peer', 'banaan', 'kiwi', 'ananas', 'meloen', 'mango', 'druiven', 'kersen', 'aardbei'];

// console.log(soortenFruit);

// * OPDRACHT 5.1.4

// let soortenFruit = ['appel', 'peer', 'banaan', 'kiwi', 'ananas', 'meloen', 'mango', 'druiven', 'kersen', 'aardbei'];

// let randomFruit = soortenFruit[Math.floor(Math.random() * soortenFruit.length)];

// console.log(randomFruit);

// * OPDRACHT 5.1.7

// let soortenFruit = ['appel', 'peer', 'banaan', 'kiwi', 'ananas', 'meloen', 'mango', 'druiven', 'kersen', 'aardbei'];

// soortenFruit[0] = 'peer';
// soortenFruit[1] = 'appel';

// console.log(soortenFruit);

// * OPDRACHT 5.2.1

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

// * OPDRACHT 5.2.3

// for (i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// * OPDRACHT 5.2.4

// for (i = 1; i <= 3; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(j);
//   }
// }

// * OPDRACHT 5.2.5

// for (i = 1; i <= 3; i++) {
//   for (j = 1; j <= 10; j++) {
//     console.log(j * i);
//   }
// }

// * OPDRACHT 5.2.6

// let fibArray = [0, 1];

// for (i = 2; i <= 50; i++) {
//   fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
//   console.log(fibArray[i]);
// }

// * OPDRACHT 5.2.7

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

// * OPDRACHT 5.3.1

// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

// dutchSports.push("Zeilen", "Zwemmen");
// dutchSports.unshift("Volleybal");

// const ballSports = dutchSports.slice(0, 3);

// dutchSports.splice(0, 3);

// console.log(dutchSports);

// let sportsLength = dutchSports.map(function (word) {
//   return word.length
// })

// * OPDRACHT 5.4

// let arrayLike = document.querySelectorAll('div');
// let arrayFrom = Array.from(arrayLike);

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// filter():
// const populatieSteden = [30000, 10000, 50000, 7000];
// let groteSteden = populatieSteden.filter(function (checkPopulatie) {
//   return checkPopulatie > 15000;
// });

// console.log(groteSteden);

// find():
// const populatieSteden = [30000, 10000, 50000, 7000];
// let groteSteden = populatieSteden.find(function (checkPopulatie) {
//   return checkPopulatie > 15000;
// });

// console.log(groteSteden);

// some():
// const populatieSteden = [30000, 10000, 50000, 7000];
// groteSteden = populatieSteden.some(function (checkPopulatie) {
//   return checkPopulatie > 15000;
// });

// console.log(groteSteden)

// every():
// const populatieSteden = [30000, 10000, 50000, 7000];
// groteSteden = populatieSteden.every(function (checkPopulatie) {
//   return checkPopulatie > 15000;
// });

// console.log(groteSteden)

// includes():
// const populatieSteden = [30000, 10000, 50000, 7000];
// const groteSteden = populatieSteden.includes(5000);

// console.log(groteSteden);

// * OPDRACHT 6.1.1

// Object Constructor:
// let petOne = new Object();
//   petOne.name = "bennie"
//   petOne.type = "dog"
//   console.log(petOne);

//   Literal Constructor:
// let petTwo = {
//   name : "bea",
//   type: "canary"
// }
//   console.log(petTwo);

//   Function Constructor:
// function Pet (name, type) {
//   this.name = name
//   this.type = type
// }
// let petThree = new Pet("Minous", "cat");
// console.log(petThree);

//   Function Constructor:
//   let petFour = new function() {
//     this.name = "Karel",
//     this.type = "guinea pig"
//   }
//   console.log(petFour);

// Class-based Constructor:
// class Pet {
//   constructor(name, type) {
//     this.name = name
//     this.type = type
//   }
// }
// const petFour = new Pet("Joop", "fish")
// console.log(petFour);

// * OPDRACHT 6.1.2

// const petTemplate = {
//   name: this.name,
//   type: this.type,
// }
// const petOne = Object.create(petTemplate);
// petOne.name = "Bennie";
// petOne.type = "dog";

// console.log(petOne);

// * OPDRACHT 6.1.3

// let users = [
//   { name: "John", age: 20 },
//   { name: "Peter", age: 39 },
//   { name: "Alice", age: 28 },
//   { name: "Kate", age: 33 },
//   { name: "Jack", age: 40 },
//   { name: "Jill", age: 45 },
//   { name: "John", age: 16 },
//   { name: "Peter", age: 60 },
//   { name: "Alice", age: 25 },
//   { name: "Kate", age: 30 },
// ]

// users.sort(function(a, b) {return a.age - b.age});
// console.log(users);

// * OPDRACHT 6.2.1

// class Club {
//   constructor(name, type, members) {
//     this.name = name
//     this.type = type
//     this.members = members
//   }
// }

// * OPDRACHT 6.2.2

// class Club {
//   constructor(name, type, members, contact) {
//     this.name = name;
//     this.type = type;
//     this.members = members;
//     this.contact = contact;
//   }
// }

// class Contact {
//   constructor(address, phone, contactperson) {
//     this.address = address;
//     this.phone = phone;
//     this.contactperson = contactperson;
//   }
// }

// let myClub = new Club('lex', 'voetbal', '100', new Contact('javastraat', 34234324, 'piet'))

// console.log(myClub);

// * OPDRACHT 6.2.3

// class footballClub {
//   constructor(name, phone, contact) {
//     this.name = name;
//     this.phone = phone;
//     this.contact = contact;
//   }
// }

// let ajax = new footballClub('ajax', '06-12345678', 'paolo')
// let feyenoord = new footballClub('feyenoord', '06-12945678', 'piet')
// let psv = new footballClub('psv', '06-12342678', 'dorien')
// let twente = new footballClub('twente', '06-12344678', 'anne')
// let az = new footballClub('az', '06-12335678', 'joop')

// let clubArray = [ajax, feyenoord, psv, twente, az];

// for (let i = 0; i < clubArray.length; i++) {
//   console.log(clubArray[i].name, clubArray[i].phone, clubArray[i].contact);
// }

// * OPDRACHT 6.2.4

// class footballClub {
//   constructor(name, phone, contact) {
//     this.name = name;
//     this.phone = phone;
//     this.contact = contact;
//   }
// }

// class Contact {
//   constructor(contact) {
//     this.contact = contact;
//   }
// }

// let newContactDude = new Contact('xander')

// let ajax = new footballClub('ajax', '06-12345678', newContactDude)
// let feyenoord = new footballClub('feyenoord', '06-12945678', 'piet')
// let psv = new footballClub('psv', '06-12342678', newContactDude)
// let twente = new footballClub('twente', '06-12344678', 'anne')
// let az = new footballClub('az', '06-12335678', 'joop')

// let clubArray = [ajax, feyenoord, psv, twente, az];

// for (let i = 0; i < clubArray.length; i++) {
//   console.log(clubArray[i].name, clubArray[i].phone, clubArray[i].contact);
// }

