<h2><u><i>1. SELECTORS & VISUAL RULES</i></u></h2>
<p>
<h3><u>Opdracht 1:</u></h3>
<i>Je kunt op 3 verschillende manieren CSS in je HTML inladen. Op welke 3 manieren kun je dat doen? Leg ook voor elke wijze uit wat het precies inhoud.</i><BR>
- Internal CSS: de CSS regels staan in de head van de HTML<BR>
- Inline CSS: staan als een atribuut bij een specifiek HTML-element<BR>
- External CSS een apart CSS-bestand waarnaar gelinkt is in de HTML-head.<BR>

<p>
<h3><u>Opdracht 2:</u></h3>
<i>CSS pas je toe met een bepaalde syntax. Hoe ziet zo'n syntax eruit? Kun je ook uitleggen wat elk element uit de syntax betekent?</i><BR>
<P>

<code>selector {
  property: value;
}</code>

De selector refereert naar het HTML-element waar de CSS-regel op van toepassing is.

De property is de eigenschap die veranderd wordt.

De waarde is de eenheid of waarde van die verandering.

<p>
<h3><u>Opdracht 3:</u></h3>
- type selectors
Hiermee selecteer je alle instanties van een bepaald HTML-element. Als dit type element steeds op dezelfde manier gestyled moet worden dan is de een handige selector om te gebruiken. Voor de leesbaarheid van de code zijn deze ook te prefereren.

<code>
div {
  display: flex;
}</code>

class selectors:
Hiermee selecteer je alle elementen met dit class-atribuut. Een voorbeeld is dat je hiermee verschillende soorten elementen van dezelfde eigenschappen kan voorzien.

<code>
.theesoorten {
  font-family: arial;
}</code>

ID selectors
Hiermee selecteer je een element met een bepaalde id. ID's zijn uniek in een HTML-document dus hiermee weet je zeker dat je alleen dat element selecteert.

Voorbeeld:

#groene-thee {

  color: green;
  }

- descendant selectors
Hiermee selecteer je een specifieke child van hun parent.
Hiermee ben je in staat op een specifieke manier een HTML element te selecteren zonder een nieuwe class aan te maken. Een ander voordeel is dat het voor anderen duidelijk is wat je selecteert.

ul li {
  color: green;
}

<p>
<h3>Opdracht 8:</h3>
Cascade en inheritance gaan over hoe CSS wordt toegepast op de elementen.
<P>
Cascade gaat over conflicten binnen je CSS en hoe deze opgelost worden. Dit gebeurt wanneer er twee (of meer) selectors voor hetzelfde element zijn. De cascade-regels zijn:

* latere regels overtreffen eerdere regels
* selectoren met een hogere specificiteit overtreffen die met een lagere. ID > class > type.
* specificiteit overtreft inheritance

Inheritance gaat over of declaraties van parents worden overgenomen door hun children. Dit verschilt per property. Een 'nette' manier van coden zonder herhaling helpt hierbij.

<h2><u><i>2. Het box-model</i></u></h2>
<p>
<h3>Opdracht 1:</h3>
<i>Wat zijn de eigenschappen van block boxes en inline boxes?</i>

<br>
Block boxes:
- beginnen op een nieuwe regel
- ze nemen de volledige breedte over van hun parent
- width en height properties worden gebruikt
<p>
Inline boxes:
- beginnen niet op een nieuwe regel
- width en height properties worden niet gebruikt
<p>
<h3>Opdracht 3:</h3>
<i>Wat gebeurt er als je een width en een height toevoegt aan de span tag ( &lt;span> ) van vorige opdracht?</i><br>
Er gebeurt niets als je width en height toepast op een span.
<p>
<h3>Opdracht 4:</h3>
- Content: de ruimte waar de inhoud wordt vertoond. De afmetingen kunnen bepaald worden met width en height.
- Padding: de ruimte die om de content zit. De 'dikte' en stijl kan worden bepaald met de padding-property.
- Border: de border omvat de content en de padding. De 'dikte' en stijl kan worden bepaald met de border-property.
- Margin: de margin omvat de content, de padding en de border. De 'dikte' kan worden bepaald met de margin-property.

<p>
<h3>Opdracht 5:</h3>
Om ruimte te maken tussen de border en de content dan pas je de padding aan. Zie opdracht5.html.
<p>
<h3>Opdracht 6:</h3>
<i>Als je ruimte wilt maken tussen de border en buiten de box, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.</i><br>
Om ruimte te maken tussen de border en buiten de bpx dan pas je de margin aan. Zie opdracht6.html.
<p>
<h3>Opdracht 7:</h3>
Hoe breed is de box?<br>
120px<br>
Hoe hoog is de box?<br>
120px<br>
Wat merk je op met width en height?<br>
De inhoud-, padding- en box-waardes bepalen samen de totale box-grootte.
<p>
<h3>Opdracht 8:</h3>
<i>Welke CSS property kun je gebruiken om ervoor te zorgen dat de waarde van width en height de totale breedte en hoogte is van het blok van de voorgaande opdracht?</i>
Box-sizing: border-box

<h2><u><i>3. Display & Positioning</i></u></h2>
<p>
<h3>Opdracht 1</h3>
<i>De belangrijkste waardes van “position” zijn static, relative, absolute, fixed & sticky. Leg voor elke uit wat ze doen.</i>
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

<h2><u><i>4. PSEUDO ELEMENTS</i></u></h2>
<p>
<h3>Opdracht 1</h3>
<i>Er zijn 14 verschillende pseudo-elementen. Beschrijf ze alle 14 kort en maak voor elk een voorbeeld.</i>

::after (:after)<BR>
`code`


::backdrop<BR>
::before (:before)<BR>
::cue<BR>
::cue-region<BR>
::first-letter (:first-letter)<BR>
::first-line (:first-line)<BR>
::file-selector-button<BR>
:grammar-error <BR>
::marker<BR>
::part()<BR>
::placeholder<BR>
::selection<BR>
::slotted()<BR>
::spelling-error <BR>
::target-text <BR>