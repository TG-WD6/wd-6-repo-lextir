# 1. SELECTORS & VISUAL RULES

### Opdracht 1:

_Je kunt op 3 verschillende manieren CSS in je HTML inladen. Op welke 3 manieren kun je dat doen? Leg ook voor elke wijze uit wat het precies inhoud._

- Internal CSS: de CSS regels staan in de head van de HTML
- Inline CSS: staan als een atribuut bij een specifiek HTML-element
- External CSS een apart CSS-bestand waarnaar gelinkt is in de HTML-head.

---

### Opdracht 2:

_CSS pas je toe met een bepaalde syntax. Hoe ziet zo'n syntax eruit? Kun je ook uitleggen wat elk element uit de syntax betekent?_

```html 
selector {
  property: value;
}
```

De selector refereert naar het HTML-element waar de CSS-regel op van toepassing is.

De property is de eigenschap die veranderd wordt.

De waarde is de eenheid of waarde van die verandering.

---

### Opdracht 3:

Type selectors:  
Hiermee selecteer je alle instanties van een bepaald HTML-element. Als dit type element steeds op dezelfde manier gestyled moet worden dan is de een handige selector om te gebruiken. Voor de leesbaarheid van de code zijn deze ook te prefereren.

```html
div {  
  display: flex;  
}
```

Class selectors:  
Hiermee selecteer je alle elementen met dit class-atribuut. Een voorbeeld is dat je hiermee verschillende soorten elementen van dezelfde eigenschappen kan voorzien.

```html
.theesoorten {
  font-family: arial;
}
```

ID selectors:  
Hiermee selecteer je een element met een bepaalde id. ID's zijn uniek in een HTML-document dus hiermee weet je zeker dat je alleen dat element selecteert.

```html 
#groene-thee {  
  color: green;  
}
```

Descendant selectors:  
Hiermee selecteer je een specifieke child van hun parent. Hiermee ben je in staat op een specifieke manier een HTML element te selecteren zonder een nieuwe class aan te maken. Een ander voordeel is dat het voor anderen duidelijk is wat je selecteert.

```html
ul li {  
  color: green;  
}
```

---

### Opdracht 8:

_Leg in eigen woorden uit wat met cascade en inheritance wordt bedoeld. Maak voorbeelden om je antwoord uit te leggen._

Cascade en inheritance gaan over hoe CSS wordt toegepast op de elementen.

Cascade gaat over conflicten binnen je CSS en hoe deze opgelost worden. Dit gebeurt wanneer er twee (of meer) selectors voor hetzelfde element zijn. De cascade-regels zijn:

- latere regels overtreffen eerdere regels
- selectoren met een hogere specificiteit overtreffen die met een lagere. ID > class > type.
- specificiteit overtreft inheritance

Inheritance gaat over of declaraties van parents worden overgenomen door hun children. Dit verschilt per property. Een 'nette' manier van coden zonder herhaling helpt hierbij.

---

# 2. HET BOX-MODEL

### Opdracht 1:

_Wat zijn de eigenschappen van block boxes en inline boxes?_

Block boxes:

- beginnen op een nieuwe regel
- ze nemen de volledige breedte over van hun parent
- width en height properties worden gebruikt

Inline boxes:

- beginnen niet op een nieuwe regel
- width en height properties worden niet gebruikt

---

### Opdracht 3:

_Wat gebeurt er als je een width en een height toevoegt aan de span tag ( &lt;span> ) van vorige opdracht?_

Er gebeurt niets als je width en height toepast op een span.

---

### Opdracht 4:

_Leg uit wat de volgende termen betekenen: content, padding, margin en border._

- Content: de ruimte waar de inhoud wordt vertoond. De afmetingen kunnen bepaald worden met width en height.
- Padding: de ruimte die om de content zit. De 'dikte' en stijl kan worden bepaald met de padding-property.
- Border: de border omvat de content en de padding. De 'dikte' en stijl kan worden bepaald met de border-property.
- Margin: de margin omvat de content, de padding en de border. De 'dikte' kan worden bepaald met de margin-property.

---

### Opdracht 5:

_Als je ruimte wilt maken tussen de border en content, welke css property gebruik je dan? Maak een voorbeeld in je antwoord._

Om ruimte te maken tussen de border en de content dan pas je de padding aan. Zie opdracht5.html.

---

### Opdracht 6:

_Als je ruimte wilt maken tussen de border en buiten de box, welke css property gebruik je dan? Maak een voorbeeld in je antwoord._

Om ruimte te maken tussen de border en buiten de box dan pas je de margin aan. Zie opdracht6.html.

---

### Opdracht 7:

Hoe breed is de box?: 120px  
Hoe hoog is de box?: 120px  
Wat merk je op met width en height?: De inhoud-, padding- en box-waardes bepalen samen de totale box-grootte.

---

### Opdracht 8:

_Welke CSS property kun je gebruiken om ervoor te zorgen dat de waarde van width en height de totale breedte en hoogte is van het blok van de voorgaande opdracht?_

```html
Box-sizing: border-box
```

---

# 3. DISPLAY & POSITIONING

### Opdracht 1:

_De belangrijkste waardes van “position” zijn static, relative, absolute, fixed & sticky. Leg voor elke uit wat ze doen._

- static  
  Elk element heeft standaard een statische positie. Met deze waarde neemt het element zijn positie in de normale flow van het document. Left/right/top/bottom/z-index hebben geen effect. Dit is de default waarde.
- relative  
  Zoals static maar hier kan je wel left/right/top/bottom/z-index gebruiken. Die properties zijn dan relatief aan de static position.
- absolute  
  Het element staat buiten de normale flow van het document en de andere elementen doen net alsof dat element er niet is. De positie is relatief aan de eerste parent enw ordt uiteidnelijk bepaald door de top, right, bottom, en left waardes.
- fixed  
  Zoals absolute alleen de positie is relatief aan het document en het element scrollt niet mee.
- sticky  
  Zoals relative totdat de scroll locatie van de viewport een bepaald punt bereikt en dan neemt het element een fixed positie in waar hij blijft.

---

# 4. PSEUDO ELEMENTS

### Opdracht 1:

_Er zijn 14 verschillende pseudo-elementen. Beschrijf ze alle 14 kort en maak voor elk een voorbeeld._

::before en ::after  
Dit element maakt een pseudo-element direct voor of na het geselecteerde element en wordt een onderdeel daarvan. Het werkt alleen als je het een content-property geeft en kan dus alleen gebruikt worden bij elementen die een child kunnen hebben. IMG, INPUT en VIDEO kunnen dat bv. niet.

Dit voorbeeld plaatst een asterisk na een element met de klasse 'label':

```html  
.label::after {  
  content: *; 
  }  
```

::backdrop  
Maakt een element tussen het geselecteerde element en de rest van de pagina wanneer het geselcteerde element in full-screen mode wordt gepresenteerd.

Dit voorbeeld maakt een grijze achtergrond wanneer de video fullscreen wordt afgespeeld:

```html  
video::backdrop {  
  background-color: gray;  
  }  
```

::cue  
Hiermee kan je de WebVTT cues styleren, wat de captions zijn van een VIDEO element.  

```html  
video::cue {  
  color: yellow;  
  }  
```

::first-letter  
Selecteert de eerste letter van het element.  
Properties die je kunt toepassen zijn:  

- color
- background properties (zoals background-image)
- border properties (zoals border-color)
- float
- font properties (zoals font-size en font-weight)
- text properties (zoals text-decoration en word-spacing)

```html  
.label::first-letter {  
  color: red;  
  }  
```

::first-line  
Selecteert de eerste regel van het element. Kan alleen toegepast worden als het een waarde heeft van block, inline-block, list-item, table-caption of table-cell.  
Properties die je kunt toepassen zijn:  

- color
- background properties
- font properties
- text properties

```html  
.label::first-line {  
  color: golden;  
  }  
```

::file-selector-button  
Dit selecteert de knop die gebruikt wordt bij een INPUT met type="file".  

```html  
input[type=file]::file-selector-button {  
  border: 2px solid #6c5ce7;  
  }  
```

:grammar-error  
Hiermee wordt de tekst geselecteerd die door de browser beschouwd wordt als grammaticaal incorrect. Deze kan je van styling voorzien.  

```html  
::grammar-error {  
  text-decoration: underline red;  
  color: red;  
  }  
```

::marker  
Hiermee kan je bij lijsten de opsommingstekens en nummers van opmaak voorzien en bij SUMMARY het pijltje.  

```html  
ul li::marker {  
  color: yellow;  
  }  
```

::part  
Selecteert ieder element in een shadow tree met het part-atribuut.  

::placeholder  
Hiermee kan je de PLACEHOLDER-tekst styleren.  

```html  
::placeholder {  
  color: darkcyan;  
  }  
```

::selection  
Hiermee kan je de tekstselectie van een bepaalde opmaak voorzien.  

```html  
::selection {  
  background: green;   
  color: white;  
  }  
```

::slotted()  
Selecteert een element in een slot in een HTML template.  

```html  
::slotted(span) {  
  font-weight: bold;  
  }  
```

::spelling-error  
Hiermee wordt de tekst geselecteerd die door de browser beschouwd wordt als een spelfout. Deze kan je van styling voorzien.  

```html  
::spelling-error {  
  text-decoration: wavy red;  
  }  
```

::target-text  
Dit is de tekst waarnaar gescrolled wordt vanaf een interne link. Deze tekst kun je van opmaak voorzien.  

```html  
::target-text {  
  background-color: blue;  
  }  
```
---

# 6. CSS GRID

### Opdracht 1:
fr staat voor fraction-eenheid. Dit is een relatieve eenheid die afzonderlijk of in combinatie kan worden gebruikt met andere soort eenheden. In dat geval behouden de andere eenheden hun waarde en de fr-eenheden verdelen onderling de resterende ruimte.
