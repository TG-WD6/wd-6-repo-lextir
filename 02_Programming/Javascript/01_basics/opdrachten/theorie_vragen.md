# 1. Variables, Datatypes & Operators

### Opdracht 1.1:

a) let Tekst Twee - de tweede regel overschrijft de eerste.

b) let Tekst Twee - de waarde van de variable wordt aangepast.

c) foutmelding. const kan niet veranderd worden.

d) var tekst drie - var wordt veranderd.

____________

### Opdracht 1.2:

1) This is a string, with the value number

2) this is a boolean, with the value true
this is a undefined, with the value undefined
this is a number, with the value 22
this is a bigint, with the value 22
error
this is a object, with the value null
this is a object, with the value [object Object]
this is a object, with the value [object Object]
this is a function, with the value function calculateSomething() {}

____________

### Opdracht 1.3:

1) 55
2) dan wordt het een optelsom
3) false, false, true, true

____________

### Opdracht 1.4:

1) 2, 2

2) 3, 5

3) 4

4) false

5) 5 = false; Boolean = false; false = true; "false" = false; true = false; "true" = false; null = true; undefined = true.

6) += is een addition assignment. Met += kan je de variable waarde veranderen door een optelling (alleen bij nummers en boolean combi's) of door de toevoeging er achter aan te plakken (wanneer er een string gebruikt wordt).

Een andere manier om het te schrijven is variable + operand.

7)

-= is een subtraction assignment operator. Zelfde als een += maar dan een aftrekking.

*= is een multiplication assignment operator. Deze vermenigvuldigt het met de operand.

/= is een division assignment operator. deze deelt de variable waarde door de operand.

%= is een remainder assignment operator. deze kijkt hoevaak de operand in de variable past en wat overblijft wordt de nieuwe variable waarde.

**= is een exponentiation assignment operator. deze vermenigvuldigt de variable waarde exponentieel.


____________

# 2. STRING METHODS

### Opdracht 2.1

1)

```javascript
let someKittens = 'De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.';


let zinGebeurtenis = someKittens.slice(0,43);

let zinGevolg = someKittens.slice(43);
```

2)

```javascript
someKittens.toUpperCase()
```

3)   k = 29; s = 35.

4) de letters k en s.

____________
### Opdracht 2.2

Substring en slice geven de waardes weer vanaf en t/m de laatste index en maken er een nieuwe string van. Als er alleen 1 index wordt gegeven dan is het t/m het einde van de string.

1) dan gebeurt hetzelfde alsof de waardes omgedraaid staan.
2) dan geeft hij een empty string ""
3) dan geeft hij een empty string ""
4) dan begint hij vanaf het einde van de string en telt 'terug'

____________

### Opdracht 2.3

```JavaScript
let someKittens = 'Die nieuwe kittens zijn zo schattig';

const array = someKittens.split(" ");
```

____________

# 3. CONDITIONS

### Opdracht 3.1

1)

== is een equality operator. Deze vergelijkt twee operaters of ze gelijk zijn, en geeft dat weer middels een boolean. Operators van een verschillend type worden omgezet omte kijken of de dezelfde waarde hebben.

=== is een strict equality operator. Deze beschouwd operaters van een verschillende type als niet gelijk, ook al hebben ze dezelfde waarde.

2)
'>' is greater than operator. Geeft 'true' als de linker operator groter is dan de rechter operator, en zoniet 'false'.

'>=' is een greater than or equal operator. Geeft 'true' als de linker operator groter is dan of gelijk aan de rechter operator en zoniet 'false'.

3)

```JavaScript
let x = 4;
let y = 8

if (x == 4 && y == 8) {
  console.log("Result!")
}
```

4)

```javascript
let x = 4;
let y = 8

if (x == 4 || y == 8) {
  console.log("Result!")
}
```

5)

```javascript
let x = 4;
let y = 8

if (!(x == 4 || y == 8));

else {
  console.log("Result!")
}
```

6)


7)

```javascript
let x = 4;

if (x > 5 && x < 10) {
  console.log("Result!");
} else if (x >= 11 && x <= 20) {
  console.log("Result!");
} else if (x == 21 || x == 23) {
  console.log("Result!");
} else if (x < 35 || (x > 40 && x < 45)) {
  console.log("Result!");
} else {
  console.log("No result");
}
```
____________

## Opdracht 3.2

1)
```javascript
function pressed() {
  let text = document.getElementById("input").value;
  if (text === "3") {
    document.getElementById("header").innerHTML = "Drie";
  } else if (text > "4") {
    document.getElementById("header").innerHTML = "Groter dan vier";
  } else if (text > "11") {
    document.getElementById("header").innerHTML = "Groter dan elf";
  }
  else if (text < "3") {
    document.getElementById("header").innerHTML = "Kleiner dan drie";
  }
  else {
    document.getElementById("header").innerHTML = "Niets";
  }
}
```

2)
2 geeft als result 'groter dan elf'.

3)

```javascript

let text = 1;

function pressed() {
  let text = document.getElementById("input").value;
  if (text == "1") {
    document.getElementById("header").innerHTML = "Januari";
  } else if (text == "2") {
    document.getElementById("header").innerHTML = "Februari";
  } else if (text == "3") {
    document.getElementById("header").innerHTML = "Maart";
  } else if (text == "4") {
    document.getElementById("header").innerHTML = "April";
  } else if (text == "5") {
    document.getElementById("header").innerHTML = "Mei";
  } else if (text == "6") {
    document.getElementById("header").innerHTML = "Juni";
  } else if (text == "7") {
    document.getElementById("header").innerHTML = "Juli";
  } else if (text == "8") {
    document.getElementById("header").innerHTML = "Augustus";
  } else if (text == "9") {
    document.getElementById("header").innerHTML = "September";
  } else if (text == "10") {
    document.getElementById("header").innerHTML = "Oktober";
  } else if (text == "11") {
    document.getElementById("header").innerHTML = "November";
  } else if (text == "12") {
    document.getElementById("header").innerHTML = "December";
  } else {
    document.getElementById("header").innerHTML = "Geen geldige maand";
  }
}
```

4)

```javascript

let text = 1;

function pressed() {
  let text = document.getElementById("input").value;
  switch (text) {
    case "1":
      document.getElementById("header").innerHTML = "Januari";
      break;
    case "2":
      document.getElementById("header").innerHTML = "Februari";
      break;
    case "3":
      document.getElementById("header").innerHTML = "Maart";
      break;
    case "4":
      document.getElementById("header").innerHTML = "April";
      break;
    default:
      document.getElementById("header").innerHTML = "Geen geldige maand";
      break;
  }
}
```

5)
```javascript
let x = 3;
let results;

results = x<=4 && x>=0 ? '2' : '5'

console.log(results)

```
____________

# 4. FUNCTIONS

### Opdracht 4.1

1)

```javascript
function pressed() {
  console.log("Hello World")
}
```

2)
```javascript
let text = document.getElementById("voornaam").value;
```

3)
```html
      <input type="text" onchange="showMessage(voornaam.value)" id="voornaam">
```

```javascript
function showMessage(voornaam) {
  console.log('Welkom terug, ' + voornaam)
}
```

```javascript
function showMessage(voornaam) {
  return voornaam * 2;
  console.log('Welkom terug, ' + voornaam)
}

let result = return;
console.log(result)
```
____________

### Opdracht 4.2

1)
document.getElementsByClassName:
Selecteert alle elementen op met die class-naam:
```javascript
let menu = document.getElementsByClassName("menu");
```

document.getElementsByTagName
Selecteert alle elementen op met deze HTML tag:
```javascript
let links = document.getElementsByTagName("a");
```

Document.querySelector()
Selecteert het eerste element met die selector.
```javascript
let firstParagraph = document.querySelector("p");
```

document.querySelectorAll
Selecteert alle elementen met die selector.
```javascript
let allParagraphs = document.querySelector("p");
```

element.innerHTML
Geeft of bepaald de waarde van de HTML-inhoud van het element
```javascript
let html = document.getElementById("myP").innerHTML;

document.getElementById("myP").innerHTML = "I have changed!";
```
element.innerText
Geeft of bepaald de waarde van de HTML-inhoud van het element als plain text.
```javascript
document.getElementById("myP").innerText = "Alleen plain text";
```

2)
oninput verandert zodra je typt. onchange pas wanneer de focus ergens anders is.
____________

### OPDRACHT 4.3

1)
Het gegenereerde getal is tussen 0 en 1.

```html
    <section>
      <h2>4.3</h2>
      <button onclick="randomNumber()">Randomize</button>
    </section>
```
```javascript
function randomNumber() {
  let random = Math.random();
  console.log(random);
}
```

2)
Het resultaat gaat tot de waarde die je invult.

```javascript
function randomNumber(x) {
  let random = Math.floor(Math.random() * 8);
  console.log(random);
}
```

3)
Math.min geeft de laagste waarde terug als resultaat. In onderstaand voorbeeld is dat 0.

Math.max() geeft de hoogste waarde terug.

```javascript
let b = Math.min(0, 150, 30, 20, 38);
```
______________

### OPDRACHT 4.4

1)

```html
<input type="text" id="inputnaam">
<button onclick="pressed()">Klik</button>
<h2 id="toon-naam"></h2>
```

```javascript
function pressed() {
  let naamGroepslid = document.getElementById("inputnaam").value;
  switch (naamGroepslid) {
    case "Fares":
    case "Joost":
    case "Nathaniel":
    case "Lex":
      document.getElementById("toon-naam").innerHTML = naamGroepslid + " zit in jouw groepje";
      break;
    default:
      document.getElementById("toon-naam").innerHTML = naamGroepslid + " zit niet in jouw groepje";
  }
}
```
# 5. ARRAYS & LOOPS

### Opdracht 5.1

1)

```javascript
let numberArray = [1, 5, 6, 4, 8, 2, 9, 3, 7, 10];
console.log(numberArray);
```
2)

```javascript
let soortenFruit = ['appel', 'aardbei', 'banaan', 'kiwi', 'ananas'];
console.log(soortenFruit);
```

3)

```javascript
let soortenFruit =  ['appel', 'aardbei', 'banaan', 'kiwi', 'ananas'];
console.log(soortenFruit[0], soortenFruit[1]);
```

4)
``` javascript
let soortenFruit =  ['appel', 'aardbei', 'banaan', 'kiwi', 'ananas'];
let randomFruit = soortenFruit[Math.floor(Math.random() * soortenFruit.length)];
console.log(randomFruit);
```

5)

```javascript
console.log(soortenFruit.length);
```

7)
```javascript
let soortenFruit =  ['appel', 'aardbei', 'banaan', 'kiwi', 'ananas'];
soortenFruit[0] = 'peer';
```
8)
```javascript
let soortenFruit =  ['appel', 'aardbei', 'banaan', 'kiwi', 'ananas'];
soortenFruit[0] = 'aardbei';
soortenFruit[1] = 'peer';
```
____________

### OPDRACHT 5.2

1)
```javascript
const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];

for (i = 0; i < dutchSports.length; i++) {
  console.log(dutchSports[i]);
}
```

2)
For...in loop:
```javascript
const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];

for (const x in dutchSports) {
  console.log(`dutchSports.${x} = ${dutchSports[x]}`);
}
```
For...of loop:
```javascript
const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];

for (const x of dutchSports) {
  console.log(x);
}
```

3)
```javascript
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
```

4)
```javascript
for (i = 1; i <= 3; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(j);
  }
}
```

5)
```javascript
for (i = 1; i <= 3; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(j * i);
  }
}
```

6)
```javascript
let fibArray = [0, 1];

for (i = 2; i <= 50; i++) {
  fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
  console.log(fibArray[i]);
}
```

7)
```javascript
function bubbleSort(array) {

  for (let i = 0; i < array.length ; i++) {
    for(let j = 0 ; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j+1];
      array[j + 1] = temp;
    }
   }
  }
  return array;
}

let randomNumbers = [2,7,5,10,4,9,3,1,8,6];
console.log(bubbleSort(randomNumbers));
```
____________

### OPDRACHT 5.3

1)
```javascript
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];
dutchSports.push("Zeilen", "Zwemmen");
```

2)
```javascript
dutchSports.unshift("Volleybal");
```

3)
```javascript
const ballSports = dutchSports.slice(0, 3);
```

4)
```javascript
dutchSports.splice(0, 3);
```

7)
```javascript
let sportsLength = dutchSports.map(function (word) {
  return word.length
})
 ```
 ____________

### OPDRACHT 5.4

1)
```javascript
let arrayLike = document.querySelectorAll('div');
let arrayFrom = Array.from(arrayLike);
```

filter() - geeft alle waardes boven 15000:
```javascript
const populatieSteden = [30000, 10000, 50000, 7000];
let groteSteden = populatieSteden.filter(function (checkPopulatie) {
  return checkPopulatie > 15000;
});

console.log(groteSteden);
```
find() - geeft het eerste waarde boven 15000:
```javascript
const populatieSteden = [30000, 10000, 50000, 7000];
let groteSteden = populatieSteden.find(function (checkPopulatie) {
  return checkPopulatie > 15000;
});

console.log(groteSteden);
```
some() - checkt of er tenminste 1 resultaat boven de 15000 is (boolean):
```javascript
const populatieSteden = [30000, 10000, 50000, 7000];
groteSteden = populatieSteden.some(function (checkPopulatie) {
  return checkPopulatie > 15000;
});

console.log(groteSteden)
```
every()  - checkt of alle waardes boven de 15000 zijn (boolean):
```javascript
const populatieSteden = [30000, 10000, 50000, 7000];
groteSteden = populatieSteden.every(function (checkPopulatie) {
  return checkPopulatie > 15000;
});

console.log(groteSteden)
```
includes() - checkt of een array een specifieke waarde bevat (boolean):
```javascript
const populatieSteden = [30000, 10000, 50000, 7000];
const groteSteden = populatieSteden.includes(50000);

console.log(groteSteden);
```
____________

### OPDRACHT 6.1

1)

Object Constructor:
```javascript
let petOne = new Object();
  petOne.name = "bennie"
  petOne.type = "dog"
  console.log(petOne);
  ```

  Literal Constructor:
  ```javascript
  let petTwo = {
    name : "bea",
    type: "canary"
  }
  console.log(petTwo);
  ```

  Function Constructor:
  ```javascript
  function Pet (name, type) {
    this.name = name
    this.type = type
  }
  let petThree = new Pet("Minous", "cat");
  console.log(petThree);
  ```

  Function Constructor:
  ```javascript
  let petFour = new function() {
    this.name = "Karel",
    this.type = "guinea pig"
  }
  console.log(petFour);
  ```

  Class-based Constructor:
  ```javascript
  class Pet {
    constructor(name, type) {
      this.name = name
      this.type = type
    }
  }
  const petFour = new Pet("Joop", "fish")
  console.log(petFour);
  ```

 2)
```javascript
const petTemplate = {
  name: this.name,
  type: this.type,
}
const petOne = Object.create(petTemplate);
petOne.name = "Bennie";
petOne.type = "dog";
```
3)
```javascript
let users = [
  { name: "John", age: 20 },
  { name: "Peter", age: 39 },
  { name: "Alice", age: 28 },
  { name: "Kate", age: 33 },
  { name: "Jack", age: 40 },
  { name: "Jill", age: 45 },
  { name: "John", age: 16 },
  { name: "Peter", age: 60 },
  { name: "Alice", age: 25 },
  { name: "Kate", age: 30 },
]

users.sort(function(a, b) {return a.age - b.age});
console.log(users);
```
____________

### OPDRACHT 6.2

1)
 ```javascript
class Club {
  constructor(name, type, members) {
    this.name = name
    this.type = type
    this.members = members
  }
}
```

2)
 ```javascript
class Club {
  constructor(name, type, members, contact) {
    this.name = name;
    this.type = type;
    this.members = members;
    this.contact = contact
  }
}

class Contact {
  constructor(address, phone, contactperson) {
    this.address = address;
    this.phone = phone;
    this.contactperson = contactperson;
  }
}

let myClub = new Club('lex', 'voetbal', '100', new Contact('javastraat', 34234324, 'piet'))

console.log(myClub);
```
3)
```javascript
class footballClub {
  constructor(name, phone, contact) {
    this.name = name;
    this.phone = phone;
    this.contact = contact;
  }
}

let ajax = new footballClub('ajax', '06-12345678', 'paolo')
let feyenoord = new footballClub('feyenoord', '06-12945678', 'piet')
let psv = new footballClub('psv', '06-12342678', 'dorien')
let twente = new footballClub('twente', '06-12344678', 'anne')
let az = new footballClub('az', '06-12335678', 'joop')

let clubArray = [ajax, feyenoord, psv, twente, az];

for (let i = 0; i < clubArray.length; i++) {
  console.log(clubArray[i].name, clubArray[i].phone, clubArray[i].contact);
}
```
4)
```javascript
class footballClub {
  constructor(name, phone, contact) {
    this.name = name;
    this.phone = phone;
    this.contact = contact;
  }
}

class Contact {
  constructor(contact) {
    this.contact = contact;
  }
}

let newContactDude = new Contact('xander')

let ajax = new footballClub('ajax', '06-12345678', newContactDude)
let feyenoord = new footballClub('feyenoord', '06-12945678', 'piet')
let psv = new footballClub('psv', '06-12342678', newContactDude)
let twente = new footballClub('twente', '06-12344678', 'anne')
let az = new footballClub('az', '06-12335678', 'joop')

let clubArray = [ajax, feyenoord, psv, twente, az];

for (let i = 0; i < clubArray.length; i++) {
  console.log(clubArray[i].name, clubArray[i].phone, clubArray[i].contact);
}

```