# Terminologie

Een **applicatieprofiel** is een specificatie voor gegevensuitwisseling dat bijkomende beperkingen introduceert voor het toepassen van vocabularia. Dergelijke bijkomende beperkingen kunnen de volgende elementen bevatten:

- verfijning van de terminologie (klassen en eigenschappen) consistent met de semantiek uit de betreffende specificaties met een welbepaald gebruik als doel;
- externe terminologie (klassen en eigenschappen) gebruikt voor nieuwe/extra termen die niet in de bestaande vocabularia voorkomen.
- meer nauwkeurigheid kan worden bereikt door klassen en klasse-attributen (eigenschappen) als verplicht, aanbevolen of optioneel te classificeren voor een bepaalde toepassing

Een **dataportaal** is een op het web gebaseerd systeem dat een gegevenscatalogus bevat waarin datasets worden beschreven met behulp van metadata. Bovendien biedt een dataportaal diensten aan om het vinden en het hergebruik van de datasets te bevorderen en/of te faciliteren.

Een **dataset** is een zinvolle verzameling van samenhangende gegevens,  die beheerd of gepubliceerd wordt door één agent,en in één of meer formaten beschikbaar of downloadbaar is.

Een dataset is de weerslag van een conceptuele entiteit welke de collectie is van één of meerdere distributies. Elke **distributie** is de werkelijke data van de dataset in een bepaald formaat of een bepaalde aanbiedingsvorm.

Een **leverancier** is een gegevensaanbieder (bijvoorbeeld een dataportaal dat metadata verstrekt). 

Een **ontvanger** is een gebruiker van gegevens (bijvoorbeeld een toepassing die metadata van een dataportaal verwerkt).

Bindende niveaus (verplicht/aanbevolen/optioneel) gelden alleen voor leveranciers. Ontvangers MOETEN altijd in staat zijn om informatie over alle instanties van alle klassen en al hun eigenschappen te verwerken (maar niet noodzakelijkerwijs te parsen, converteren, opslaan, doorzoekbaar maken of weergeven, enz.). In de volgende secties worden klassen en eigenschappen aangeduid als "verplicht", "aanbevolen" of "optioneel". Deze termen hebben de volgende betekenis:

- **Verplichte klasse**: Een leverancier MOET informatie verstrekken over instanties van deze klasse. Een ontvanger MOET informatie over instanties van deze klasse kunnen verwerken.
- **Aanbevolen klasse**: Een leverancier BEHOORT informatie te verstrekken over instanties van deze klasse indien dergelijke informatie beschikbaar is. Een ontvanger MOET informatie over instanties van deze klasse kunnen verwerken.
- **Optionele klasse**: Een leverancier MAG informatie verstrekken over instanties van deze klasse, maar is hier niet toe verplicht.

- **Verplichte eigenschap**: Een levenancier MOET informatie verstrekken over deze eigenschap.
- **Aanbevolen eigenschap** : Een leverancier MOET informatie verstrekken over deze eigenschap als deze beschikbaar is.
- **Optionele eigenschap**: Een leverancier MAG informatie verstrekken over deze eigenschap, maar is hier niet toe verplicht.

In de gegeven context betekent de term "verwerken" dat ontvangers inkomende gegevens moeten accepteren en transparant beschikbaar moeten stellen voor toepassingen en diensten. Hiermee wordt niet voorgeschreven of geïmpliceerd welk type gegevensverwerking uiteindelijk door de betreffende toepassingen en diensten wordt uitgevoerd.

De termen MOET, BEHOORT en MAG worden in dit document gebruikt volgens hun betekenissen gedefinieerd in [RFC211](https://www.rfc-editor.org/rfc/rfc2119 "RFC211").
