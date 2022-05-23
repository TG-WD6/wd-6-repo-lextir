<h2><u><i>Selectors & Visual rules</i></u></h2>
<p>
<h3>Opdracht 1:</h3>
- Internal CSS: de CSS regels staan in de head van de HTML
- Inline CSS: staan als een atribuut bij een specifiek HTML-element
- External CSS een apart CSS-bestand waarnaar gelinkt is in de HTML-head.

<p>
<h3>Opdracht 2:</h3>
selector {
  property: value;
}

De selector refereert naar het HTML-element waar de CSS-regel op van toepassing is.

De property is de eigenschap die veranderd wordt.

De waarde is de eenheid of waarde van die verandering.

<p>
<h3>Opdracht 3:</h3>

* type selectors
Hiermee selecteer je alle instanties van een bepaald HTML-element. Als dit type element steeds op dezelfde manier gestyled moet worden dan is de een handige selector om te gebruiken. Voor de leesbaarheid van de code zijn deze ook te prefereren.

Voorbeeld:
div {
  display: flex;
}
* class selectors
Hiermee selecteer je alle elementen met dit class-atribuut. Een voorbeeld is dat je hiermee verschillende soorten elementen van dezelfde eigenschappen kan voorzien.

Voorbeeld:
.theesoorten {
  font-family: arial;
}

* ID selectors
Hiermee selecteer je een element met een bepaalde id. ID's zijn uniek in een HTML-document dus hiermee weet je zeker dat je alleen dat element selecteert.

Voorbeeld:
#groene-thee {
  color: green;
  }

* descendant selectors
Hiermee selecteer je een specifieke child van hun parent.
Hiermee ben je in staat op een specifieke manier een HTML element te selecteren zonder een nieuwe class aan te maken. Een ander voordeel is dat het voor anderen duidelijk is wat je selecteert.

ul li {
  color: green; 
}

<p>
<h3>Opdracht 8:</h3>
