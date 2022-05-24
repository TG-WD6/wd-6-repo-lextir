
# 1. SELECTORS & VISUAL RULES

### Opdracht 1:

*Je kunt op 3 verschillende manieren CSS in je HTML inladen. Op welke 3 manieren kun je dat doen? Leg ook voor elke wijze uit wat het precies inhoud.*

- Internal CSS: de CSS regels staan in de head van de HTML  
- Inline CSS: staan als een atribuut bij een specifiek HTML-element  
- External CSS een apart CSS-bestand waarnaar gelinkt is in de HTML-head.  

____  

### Opdracht 2:

*CSS pas je toe met een bepaalde syntax. Hoe ziet zo'n syntax eruit? Kun je ook uitleggen wat elk element uit de syntax betekent?*  

> selector {  
    property: value;  
  }  

De selector refereert naar het HTML-element waar de CSS-regel op van toepassing is.  

De property is de eigenschap die veranderd wordt.  

De waarde is de eenheid of waarde van die verandering.  

____  

### Opdracht 3:

Type selectors:  
Hiermee selecteer je alle instanties van een bepaald HTML-element. Als dit type element steeds op dezelfde manier gestyled moet worden dan is de een handige selector om te gebruiken. Voor de leesbaarheid van de code zijn deze ook te prefereren.  


> div {  
  display: flex;  
}  

Class selectors:  
Hiermee selecteer je alle elementen met dit class-atribuut. Een voorbeeld is dat je hiermee verschillende soorten elementen van dezelfde eigenschappen kan voorzien.  


> .theesoorten {
  font-family: arial;
}

ID selectors:  
Hiermee selecteer je een element met een bepaalde id. ID's zijn uniek in een HTML-document dus hiermee weet je zeker dat je alleen dat element selecteert.  

> #groene-thee {  
  color: green;  
  }  

Descendant selectors:  
Hiermee selecteer je een specifieke child van hun parent. Hiermee ben je in staat op een specifieke manier een HTML element te selecteren zonder een nieuwe class aan te maken. Een ander voordeel is dat het voor anderen duidelijk is wat je selecteert.  

> ul li {  
  color: green;  
}  

____  

### Opdracht 8:

*Leg in eigen woorden uit wat met cascade en inheritance wordt bedoeld. Maak voorbeelden om je antwoord uit te leggen.*

Cascade en inheritance gaan over hoe CSS wordt toegepast op de elementen.  

Cascade gaat over conflicten binnen je CSS en hoe deze opgelost worden. Dit gebeurt wanneer er twee (of meer) selectors voor hetzelfde element zijn. De cascade-regels zijn:  

- latere regels overtreffen eerdere regels  
- selectoren met een hogere specificiteit overtreffen die met een lagere. ID > class > type.  
- specificiteit overtreft inheritance  

Inheritance gaat over of declaraties van parents worden overgenomen door hun children. Dit verschilt per property. Een 'nette' manier van coden zonder herhaling helpt hierbij.  

____  

# 2. HET BOX-MODEL

### Opdracht 1:

*Wat zijn de eigenschappen van block boxes en inline boxes?*  


Block boxes:  
- beginnen op een nieuwe regel  
- ze nemen de volledige breedte over van hun parent  
- width en height properties worden gebruikt  

Inline boxes:  
- beginnen niet op een nieuwe regel  
- width en height properties worden niet gebruikt  

____  

### Opdracht 3:

*Wat gebeurt er als je een width en een height toevoegt aan de span tag ( &lt;span> ) van vorige opdracht?*  

Er gebeurt niets als je width en height toepast op een span.  

____  

### Opdracht 4:  

*Leg uit wat de volgende termen betekenen: content, padding, margin en border.*  

- Content: de ruimte waar de inhoud wordt vertoond. De afmetingen kunnen bepaald worden met width en height.  
- Padding: de ruimte die om de content zit. De 'dikte' en stijl kan worden bepaald met de padding-property.  
- Border: de border omvat de content en de padding. De 'dikte' en stijl kan worden bepaald met de border-property.  
- Margin: de margin omvat de content, de padding en de border. De 'dikte' kan worden bepaald met de margin-property.  

____  

### Opdracht 5:

*Als je ruimte wilt maken tussen de border en content, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.*  

Om ruimte te maken tussen de border en de content dan pas je de padding aan. Zie opdracht5.html.

____  

### Opdracht 6:  

*Als je ruimte wilt maken tussen de border en buiten de box, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.*  

Om ruimte te maken tussen de border en buiten de box dan pas je de margin aan. Zie opdracht6.html.

____  

### Opdracht 7:

Hoe breed is de box?: 120px  
Hoe hoog is de box?: 120px  
Wat merk je op met width en height?: De inhoud-, padding- en box-waardes bepalen samen de totale box-grootte.  

____  

### Opdracht 8:

*Welke CSS property kun je gebruiken om ervoor te zorgen dat de waarde van width en height de totale breedte en hoogte is van het blok van de voorgaande opdracht?*  

> Box-sizing: border-box

____  

# 3. DISPLAY & POSITIONING 

### Opdracht 1:

*De belangrijkste waardes van “position” zijn static, relative, absolute, fixed & sticky. Leg voor elke uit wat ze doen.*  

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

____  

# 4. PSEUDO ELEMENTS

### Opdracht 1:

*Er zijn 14 verschillende pseudo-elementen. Beschrijf ze alle 14 kort en maak voor elk een voorbeeld.*

::after (:after)  
::backdrop  
::before (:before)  
::cue  
::cue-region  
::first-letter (:first-letter)  
::first-line (:first-line)  
::file-selector-button  
:grammar-error   
::marker  
::part()  
::placeholder  
::selection  
::slotted()  
::spelling-error   
::target-text   