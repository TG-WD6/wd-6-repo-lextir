# HTML Accessibility

Accessibility is bij veel websites onderbelicht. Ook de oefenopgaven die je van ons zal krijgen staan er niet bij stil. Toch is een beetje kennis van Accessibility wel handig - op het moment dat je het moet gaan gebruiken weet je dan welke richting je in moet zoeken.

Accessibility wordt vooral geimplementeerd via HTML attributen. Bijvoorbeeld de title attribuut - die zorgt voor een tooltip als je je muis ergens overheen houdt.

De standaard voor accessibility heet WAI-ARIA, vaak ARIA genoemd. Vol uitgeschreven betekent het **Web Accessibility Initiative - Accessible Rich Internet Applications**. Best een mond vol!

ARIA heeft heel veel verschillende HTML attributen - te veel om apart te behandelen. Al deze attributen zijn in 3 categorieën in te delen: **roles**, **properties** en **states**.

* **ARIA roles** beschrijven de rol van het element op je pagina.
    * Denk aan **role=”main”, role=”navigation”, role=”button”** etcetera.
    * Een lijst met alle ARIA roles kan je hier vinden.
* **ARIA properties** beschrijven informatie over hoe een element functioneert
    * Denk aan een verplicht veld in een formulier => **aria-required=”true”** 
* **ARIA states** beschrijft de huidige status van een element dat kan veranderen
    * Denk aan een checkbox die wel/niet aangevinkt is => **aria-checked=”true”**

Maar hoe zit het dan met accessibility die via semantic elements komt? Dat is immers geen attribuut, maar geeft blijkbaar wel informatie erover. Dat komt omdat heel veel elementen een implicit ARIA role hebben - tenzij je ze een andere role toewijst zal deze gebruikt worden door screenreaders. De implicit ARIA role van elementen zal je niet op w3schools vinden, maar wel op MDN. 

Onderzoek de volgende elementen om erachter te komen wat hun implicit ARIA role is:

* Header
* Footer
* Section
* Aside
* Input