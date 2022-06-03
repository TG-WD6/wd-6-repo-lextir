# 2. HTML SEMANTICS

> `<header>`  
  
Wordt gebruikt voor de introductie van de website, maar kan ook de navigatielinks, een zoekveld, het logo etc. bevatten

> `<footer>`  
Staat onderaan de pagina, en bevat vaak de copyright, contact info en/of een navigatieboom.  

> `<nav>`  
> 
Wordt gebruikt voor de navigatiesecties: menu's, inhoudopgaves en indexes.

> `<section>`  
> 
Een generieke sectie van een document. Secties moeten in de regel een heading gebruiken.

> `<main>`  
> 
Wordt gebruikt voor de dominante inhoud van de body. Het betreft de inhoud waar de site specifiek over gaat. 

> `<article>`  
> 
Wordt gebruikt voor een zelfstandig onderdeel in een document, bedoeld om apart gedistribueerd te kunnen worden. Vorbeelden zijn een web site artikel, een blog post, een card, etc.

> `<aside>`  
> 
Wordt gebruikt voor een onderdeel van een document die indirect met de hoofdinhoud te maken heeft. Deze worden veelal vertoond in een zijcolumn of in een call-out box.

> `<figure>`
  `<figcaption>`

Wordt gebruikt om een afbeelding van een onderschrift te voorzien. Zij zijn vervolgens een eenheid.

> `<summary>`
  `<details>`

Dit is een widget-element met uitklapbare inhoud. Die inhoud kan vaak getoond worden door op het pijltje te klikken. De summary bevat deze inhoud.

____  

# 3. HTML ACCESSIBILITY

- Header  
Laat aan assistive technologies dat dit een kop is. Screen readers vertellen dat die tekst een kop is en informeren ook over hun plek in de hierarchische structuur van de pagina. 

- Footer
- Section
- Aside
- Input

____  

# 5. HTML FORMS</h1>

> `<input>`  

Wordt in formulieren gebruikt om interactieve invoerelementen toe te voegen om zo data te ontvangen van de gebruiker. Er zijn vele verschillende soorten inputs beschikbaar. Veel gebruikten zijn oa. tekst- en wachtwoordvelden, checkboxes, radio buttons en verzendknoppen.

> `<button>`  

Een button is een interactief element die door de gebruiker geactiveerd kan worden. Het voert vervolgens de ingestelde handeling uit, wat kan zijn het versturen van een formulier of het openen van een dialoogbox.

> `<textarea>`  

Een tekstinvoerveld met meerdere lijnregels.

> `<label>`  

Labels kunnen worden gebruikt icm inputelementen. Dit geeft 2 voordelen:

- screenreaders associeren de tekst met het inputelelement, en zullen de tekst voorlezen wanneer de input is geselecteerd.
- klikken op de tekst resulteert in het activeren van het inputelement, wat ergonomische voordelen heeft.

Te gebruiken door de input te nesten in de label, of door het gebruik van identieke for en id-waardes voor het label en de input resp.

> `<select>`  

Dit geeft een dropdown keuzemenu waarin de gebruiker een (of meerdere) keuze(s) kan maken.

> `<option>`  

Dit is een optiekeuze in het select-element. De value-atribuut wordt verstuurd naar de server of anders de tekst binnen het element.

> `<optgroup>`  

Hiermee kan je de options onderverdelen in categorieen.

> `<datalist>`  

Een combinatie van tekstinvoer en het optionelement. Zodra je begint te typen verschijnen de keuzes die daar gelijk aan zijn.

> `<output>`  

Toont de uitkomst van een berekening of het resultaat van een gaberukershandeling.

____  

# HTML Questions

*1. Wat is HTML?*  
HTML staat voor HyperText Markup Language. Het HTML document bevat de inhoud en structuur van de web pagina. Het kan van styling worden voorzien door CSS en interactivieit kan worden toegevoegd mbv JavaScript.

*2. Hoe ziet de basis-structuur van HTML eruit?*  
> `<html>`  
> `<head>`  
> `</body>`  
> `</head>`  
> `<body>`  
> `</html>` 

*3. Wat is een anchor tag?*  
De anchor tag wordt gebuikt voor links. Dit kunnen links zijn naar web sites, links naar een locatie binnen die pagina, bestanden, emailadressen, telefoonnummers en meer.  

*4. Noem een aantal nieuwe functionaliteiten van HTML5?*  

- met de nieuwe video en audio tags is er nu meer controle over het embedden van multimedia bestanden.  

- Meer semantische tags zoals:  
> `<header>, <nav>, <main>, <article>, <aside>, <section>, <footer>`  

- Figure en figcaption voor onderschriften bij afbeeldingen  

*5. Wat zijn HTML attributen?*  
Attributen geven meer informatie over een element.  

*6. Wat is HTML semantics?*  
Semantische HTML zijn tags die zelfbeschrijvend zijn over hun specifieke functie. Dit heeft voordelen voor de leesbaarheid van de code, toegankelijkheid en SEO. 

*7. Waarvoor worden meta tags gebruikt?*  
Verschaft informatie over het HTML document.
Het bevt de informatie hoe de site gerenderd moet worden, en zaken als de titel, beschrijving, sleutelwoorden,.

*8. Wat is een nested element?*  
Een nested element is een element (child) binnen een ander element (parent).

*9. Wat is het verschil tussen inline- en blok-elementen?*  
Blok worden gezet op een nieuwe regel en nemen de hele breedte in van de parent.
Inline worden gezet op dezelfde regel als het voorgaande element en nemen niet meer breedt in dan de inhoud.

*10. Wat is accessibility?*  
Het aanpassen van de code voor mensen met beperkingen die hulpmiddelen nodig hebben om de site te gebruiken.  
