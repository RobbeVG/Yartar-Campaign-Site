---
title: Sword Coast
aliases:
  - Sword Coast
---
De **[[Sword Coast/index|Sword Coast]]** is een uitgestrekte, ruige kustregio in het westen van het continent Faerûn. De regio strekt zich uit van de ijzige bergen van de _Spine of the World_ in het noorden tot aan het handelsrijk _Amn_ in het zuiden. Het gebied staat bekend om zijn machtige, onafhankelijke stadsstaten, gevaarlijke wildernis en rijke handelsroutes.

---

🗺️ Geografie & Klimaat

- **De Sea of Swords:** De westelijke grens van de regio. Deze zee is cruciaal voor de handel, maar berucht om piraterij en zware stormen.
- **De Handelsweg (The High Road):** De belangrijkste noord-zuidelijke landroute die de grote steden met elkaar verbindt.
- **Klimaat:** Varieert van subarctisch en guur in het noorden (Icewind Dale) tot gematigd en mild in het zuiden.

```base
filters:
  and:
    - file.hasProperty("marker")
views:
  - type: leaflet-map
    name: Map
    mapName: Sword Coast
    image: assets/SwordCoastMap_MedRes.jpg
    height: 460
    minZoom: -4
    maxZoom: 0
    defaultZoom: -3
    zoomDelta: 0.61
    scale: "0.2"
    unit: miles

```


# Locaties

```base
filters:
  and:
    - file.inFolder("2 World Almanac/Sword Coast")
    - excluded != true
    - file != this.file
formulas:
  Naam: if(file.name == "index", link(file, title), file)
views:
  - type: table
    name: Locaties
    order:
      - formula.Naam
      - Locatie
    sort:
      - property: file.folder
        direction: ASC
    columnSize:
      formula.Naam: 168

```

<style> .page-listing { display: none; } </style>