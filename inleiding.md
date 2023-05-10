# Inleiding
Om gestandardiseerd metadata uit te wisselen tussen verschillende (open) dataportalen heeft Europa het DCAT-AP profiel ontwikkeld. DCAT-AP is gebaseerd op de "Data Catalog Vocabulary" (DCAT) -specificatie, die wordt ontwikkeld door de Dataset Exchange Working Group. DCAT is een RDF-vocabulaire met als doel de interoperabiliteit tussen online datacatalogi te verbeteren. De specificatie "Data Catalog Vocabulary" (DCAT) werd op 16 januari 2014 door het W3C gepubliceerd als "W3C Recommendation" en is inmiddels beschikbaar in versie 2.0. In DCAT worden klassen en eigenschappen van andere gevestigde vocabulaires (ADMS, FOAF) hergebruikt. DCAT maakt gebruik van een bewezen set gemeenschappelijke metadata genaamd "Dublin Core", die in 2009 als ISO 15836-standaard werd gepubliceerd.

Dit document beschrijft het Nederlandse applicatieprofiel op DCAT-AP. Dit Nederlandse applicatieprofiel - DCAT-AP NL-  beantwoordt de vraag over hoe DCAT-AP in de praktijk wordt toegepast Nederland. 


## Uitgangspunten 
Bij het opstellen zijn van het applicatie profiel zijn volgende uitgangspunten gehanteerd: 

**Toepassingsbereik**

DCAT-AP NL faciliteert: 

- de uitwisseling van metadata tussen Nederlandse datacatalogi van ~~van overheidsorganisaties~~ (semi-) overheidsorganisatie en overige organisaties die maatschappelijke relevante data willen delen. 
- de uitwisseling van metadata tussen Nederlandse datacatalogi en EU datacatalogi
- de uitwisseling van metadata van primair open data, maar is hier niet toe beperkt
- de specifieke Nederlandse behoeften van metadata in datacatalogi
- de DCAT-AP annex for High Value Datasets (nog in ontwikkeling)


**Informatiemodellering**

DCAT-AP NL: 
- is een verdere **specialisatie** van DCAT-AP
  - als je voldoet aan DCAT-AP NL voldoe je ook aan DCAT-AP
  - bevat alle verplichte en aanbevolen properties DCAT-AP, waarbij de gebruiksvoorwaarden van DCAT-AP NL gelden 
  - properties uit DCAT-AP of DCAT die niet voorkomen in DCAT-AP NL zijn optioneel
- introduceert geen uitbreidingen, 
  - als die al uitgedrukt kunnen worden in DCAT-AP of DCAT, 
  - tenzij er een hele sterke behoefte / aanleiding toe is, en het DCAT-AP of DCAT vocabulary hierin NIET in voorziet
- is zo generiek mogelijk van opzet en ligt zo dicht mogelijk bij DCAT-AP
- is opgesteld in het Nederlands


<p class="note" title="index">
Dit hoofdstuk is toegevoegd met `class="informative"` in `config.js`.
</p>
