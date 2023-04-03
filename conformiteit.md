
# Conformiteit

Over de betekenis van conformiteit in dit document, en welke soorten conformiteit wij onderscheiden.

## Conformiteitsregels

Hieronder volgt een overzicht van alle conformiteitsregels, inclusief toelichting.


### Conventie 1

- Ontvangt een Catalogus een dataset met een ingevulde 'dct:identifier', dan MOET deze ongewijzigd doorgegeven / overgenomen worden. 

Op deze manier blijft de de identifier bewaart zoals die is toegekend in de catalogus waar de dataset voor het 1ste gepubliceerd is.

### Conventie 2 

- Een Catalogus MAG zijn eigen identifier opnemen in de property 'adms:identifier'. Al bestaande waarden in adms:identifier MOETEN overandert blijven.


### Conventie 3

- Als de DCAT-AP NL metadata afgeleid zijn van ISO-metadata, dan MOET de 'technische' actualisatie datum uit het element datestamp (XPath MD_Metadata/date/Stamp) als waarde van de property dct:modified van de dataset gebruikt worden.

In het (theoretische) geval er een doublure van dezelfde datasets in meerdere catalogi vooromt, en de metadata afgeleid zijn uit ISO-metadata, moet bepaald kunnen worden welke variant de meest actuele is. Voorstel is om om hiervoor de actualisatiedatum in dct:modified op te nemen. Bij datasets met éénzelfde indentifier, zal dan de dataset met de meest recente actualisatiedatum dct:modified geimporteerd worden.