---
title: List of NPC's
---
```base
filters:
  and:
    - file.inFolder("2 World Almanac/NPCS")
    - draft != true
    - file.hasTag("NPC")
properties:
  file.name:
    displayName: Naam
views:
  - type: table
    name: NPC's
    groupBy:
      property: Locatie
      direction: ASC
    order:
      - file.name
      - Locatie
    sort:
      - property: file.name
        direction: ASC
    columnSize:
      file.name: 237

```


<style> .page-listing { display: none; } </style>