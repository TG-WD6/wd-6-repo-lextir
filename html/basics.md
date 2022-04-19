# HTML Basics
Als je nog weinig kennis van HTML hebt, is het handig om jezelf nog wat extra in te lezen. Hier is een goede link via MDN, en hier een goede link van w3schools.

We gaan nog even een voor een de basis-elementen langs:

**\<!DOCTYPE html>**

De doctype declaratie is technisch gesproken geen HTML tag. Het is de manier waarop het document je browser vertelt welke versie van HTML gebruikt wordt. Geschreven zoals hierboven is dat dan HTML5, maar als je om een-of-andere reden expliciet een oudere versie van HTML zou willen gebruiken, dan kan dat hiermee.

Feitje: Als je de doctype declaratie weg laat, gebruikt je browser zijn eigen regels en standaarden om HTML te interpreteren. Hiermee ondersteunt je browser hele oude websites uit de tijd voor de HTML-standaard. Dit wordt ook wel Quirks Mode genoemd.


**\<html>**

De html tag wordt ook wel het root element genoemd. Dit is waar alles behalve de doctype declaratie in terecht komt. Bij deze tag hoor je altijd de lang attribuut gebruiken om de taal van je website in te zetten. Dit zorgt ervoor dat zoekmachines je pagina beter kunnen vinden en dat webbrowsers je pagina indien nodig beter kunnen vertalen.

**\<head>**

Dit is waar de meta-informatie staat; dat is informatie over je pagina die er niet zelf op staat. Denk aan bijvoorbeeld de titel van je tabblad, verwijzingen naar externe styling/scripts of informatie over de auteur.

**\<body>**

Dit is waar de daadwerkelijke inhoud van je pagina hoort te staan.

**\<div>**

Het meestvoorkomende html element. Dit wordt gebruikt om de content van je pagina in te delen, met 1 enkele standaard CSS-waarde: ‘display: block’. Elementen met deze standaard-waarde (zoals divs) worden ook wel block elements genoemd.

**\<span>**

Het kleine broertje van de div, met 1 cruciaal verschil. Het heeft namelijk de standaard CSS-waarde: ‘display: inline’ ipv block. Hierdoor wordt het ook wel een inline element genoemd. Vooral gebruikt om text <span>midden in de regel</span> aan te passen.

**\<h1>, \<h2>, \<h3>, \<h4>, \<h5> & \<h6>**

Deze worden ook wel headings genoemd. Ze gaan van groot tot klein - die maten krijgen ze via de standaard CSS en dat is natuurlijk aan te passen. Headings zijn makkelijk te verwarren met heads en headers, dus wij noemen ze liever h1-h6.

Let op! Gebruik niet meer dan 1x per pagina een **\<h1>** tag. Deze wordt door zoekmachines gebruikt. Bij meer (of minder) dan 1 **\<h1>** kan dat niet goed en zal je pagina dus lager/niet getoond worden.

**\<p>**

Paragraaf element. Standaard CSS geeft het wat ruimte boven/onder. Ook is de **\<p>** tag een block element en neemt het dus de hele regel in beslag.

**\<ul>, \<ol> & \<li>**

Unordered lists & ordered lists worden erg veell gebruikt. Beiden gebruiken ze **\<li>list item</li>** om elk individueel item in de lijst te stylen. Cruciaal verschil is in de standaard CSS - **\<ol>** is genummerd waar **\<ul>** simpele bullet points gebruikt. Je kan lijstjes ook in elkaar nesten! Dit wordt vaak gedaan bij navigatie-menu’s.

**\<br> & \<hr>**

Respectievelijk de break tag en de horizontal rule tag. Zorgt voor een extra lege regel of extra regel met horizontale lijn erdoorheen. Omdat het een enkele tag met 0 attributen/content is, worden ze ook wel eens als </br> of <br/> geschreven om duidelijk te maken dat er geen closing tag is. Verder heeft dat geen functioneel verschil.

**\<img>**

De img tag verwijst naar plaatjes - dit kan ook een plaatje zijn op andere websites. Meestal wordt het gebruikt voor plaatjes die zelf mee ge-upload worden. Belangrijk is ook om een alt attribuut te gebruiken. Zelfs als je 100% zeker bent van 100% uptime van je plaatje,  is het iets waar zoekmachines op letten -  daarom moet jij dat ook doen 

**\<a>**

De anchor tag wordt vooral gebruikt om te verwijzen naar andere pagina’s, maar kan ook verwijzen naar een bepaalde plek op dezelfde pagina. Makkelijk te verwarren met de <link> tag - vaak wordt er gesproken van een link terwijl er eigenlijk een <a> tag bedoeld wordt.

Did you know? De target attribuut bepaalt waar de link geopend wordt - bijvoorbeeld in hetzelfde tabblad of in een nieuw tabblad. Kan je de andere 3 opties van deze attribuut raden? Het antwoord staat hier.

**\<link>**

De link tag is een verwijzing naar en beschrijving van een externe resource. Denk aan styling, icoontjes of licenties. De link tag heeft geen content of closing tag - alle informatie zit in de attributen. Staat alleen in de head.

**\<meta>**

De meta tags geven informaties en instructies aan de programma’s en machines die je pagina lezen. Denk aan informatie over hoe groot je pagina geopend moet worden, karakters die op je pagina gebruikt worden of simpelweg informatie over de auteur.

Als laatste zijn er nog 2 veelgebruikte niet benoemd: **\<input>** en **\<button>**. Die worden verderop bij de rest van HTML Forms & Tables behandeld.

Natuurlijk zijn er nog veel meer elementen. Een aantal daarvan zijn buiten gebruik gevallen, bijvoorbeeld **\<i>** en **\<b>**. Ook zijn er een aantal elementen vrij nieuw en complex, zoals **\<svg>** en **\<canvas>**. 

De laatste 2 zijn sinds HTML5 gestandaardiseerd. HTML5 heeft nog veel meer goede duidelijke elementen gebracht, zoals **\<audio>** en **\<video>**. Daarnaast heeft het ook een serie beschrijvende elementen geïntroduceerd. Die worden ook wel Semantic Elements genoemd.