let respecConfig = {
  useLogo: true,
  useLabel: true,
  //default voor Geonovum is cc-by, eventueel is het mogelijk een andere licentie (cc0 of cc-by-nd) hier te kiezen voor het document.
  //license: "cc-by",
  specStatus: "WV",
  specType: "ST",
  pubDomain: "dcat",
  sotdText: "wv",
  shortName: "DCAT2-AP-NL",
  publishDate: "2023-03-28",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we standaard alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  // previousPublishDate: "2014-05-01",
  // previousMaturity: "EO",
  title: "DCAT-AP-NL",
  content: {"inleiding": ""},
  editors:
    [
      {
        name: "Jan Skornsek",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Ine de Visser",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      },
      {
        name: "Gabriella Wiersma",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  authors:
    [
      {
        name: "voornaam achternaam",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/geonovum/DCAT2-AP-NL",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
};
