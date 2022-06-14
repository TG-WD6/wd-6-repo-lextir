# Variables, Datatypes & Operators

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

# STRING METHODS

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

# CONDITIONS

## Opdracht 3.1

1)

== is een equality operator. Deze vergelijkt twee operaters of ze gelijk zijn, en geeft dat weer middels een boolean. Operators van een verschillend type worden omgezet omte kijken of de dezelfde waarde hebben.  

=== is een strict equality operator. Deze beschouwd operaters van een verschillende type als niet gelijk, ook al hebben ze dezelfde waarde.  

2)  
> is greater than operator. Geeft 'true' als de linker operator groter is dan de rechter operator, en zoniet 'false'. 

>= is een greater than or equal operator. Geeft 'true' als de linker operator groter is dan of gelijk aan de rechter operator en zoniet 'false'.  

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

2) 2 geeft als result 'groter dan elf'.

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

# Opdracht 4.1

1)  

```javascript
function pressed() {
  console.log("Hello World")
}
```

2) 
```javascript
let text ="woord";

let text = document.getElementById("input").value;
```

3)