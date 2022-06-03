# 2. VARIABLES

### Opdracht 4:

*De ‘&’ is een ontzettend handige feature in SASS. Je gebruikt het bij het nesten. Het kan je veel tijd besparen bij het coderen. Kun jij uitzoeken wat je met de ‘&’ kunt en wat de voordelen ervan zijn? Laat met een voorbeeld zien dat je begrijpt wat het voordeel is van het gebruik van ‘&’ bij het nesten.*

De '&’ wordt gebruikt als afkorting voor het parentgedeelte van een selector bij het nesten, wanneer die in combinatie met de child moet worden gebruikt.  
Dit werd ook by pseudo-selectors waarbij het de elementnaam als geheel vervangt.

```html
.button {
  &:visited { }
  &:hover { }
  &:active { }
}
```

______

# 5. EXTEND AND INHERITANCE

### Opdracht 1:

*We hebben nu zowel mixins als extends gezien die beiden styling kunnen overnemen. Lees dit artikel en geef een uitleg wanneer we inheritance gebruiken en wanneer we mixins gebruiken.*

Inheritance gebruik je voor statische stijlen (die niet veranderd hoeven te worden). Het voordeel van extend is dat het minder extra code oplevert omdat het de selectors groepeert die dezelfde stijlen delen. Je kunt @extend gebruiken om de declaraties van een selector over te nemen of een de placholder selector (%) gebruiken om de declaraties van een utility selector over te nemen.

Mixins zijn vooral handig wanneer een bepaalde waarde van een declaratie veranderd moet worden. Met een mixin voor een button kun je bv gemakkeleijk een groene, een rode of een blauwe knop maken.

_____

### Opdracht 2:

*Sass volgt dus het DRY principe. Het DRY principe wordt ook erg mooi meegenomen bij het responsive designen van je website. Om een website responsive te maken met media queries kunnen wij bijvoorbeeld variabelen gebruiken om eenvoud te creëren bij ons responsive design. Lees dit artikel en geef een gecodeerde voorbeeld hoe je hiervan gebruik kan maken in het responsive design.*

Met SASS kun je bv variables maken voor de breakpoints:

```html
$breakpoint-tablet: 768px;

@media (min-width: $breakpoint-tablet) {
  
}
```
_____

# 6. OPERATORS

### Opdracht 1:

```html
.image {
  height: 400px * 2;
  width: auto;
}

.image {
  height: 800px;
  width: auto;
}
```
_____

### Opdracht 2:

```html
.image {
  height: 400px + 100;
  width: auto;
}

.image {
  height: 500px;
  width: auto;
}
```
_____

### Opdracht 3:

```html
.image {
  height: 400px - 300px;
  width: auto;
}

.image {
  height: 100px;
  width: auto;
}
```
_____

### Opdracht 4:

Negative heights zijn niet toegestaan.

```html
.image {
  height: 200px + 100px - 400px;
  width: auto;
}

.image {
  height: 0px;
  width: auto;
}
```
_____

### Opdracht 5:

```html
.image {
  height: 200px * 3;
  width: auto;
}

.image {
  height: 600px;
  width: auto;
}
```
_____

### Opdracht 6:

```html
.image {
  height: 750px * 1px;
  width: auto;
}

.image {
  height: 750px;
  width: auto;
}
```
_____

### Opdracht 7:

Moet width: 24px / 4px; zijn.

```html
.image {
  height: 30px / 5px;
  width: 24px/ 4;
}

.image {
  height: 6px;
  width: 6px;
}
```
