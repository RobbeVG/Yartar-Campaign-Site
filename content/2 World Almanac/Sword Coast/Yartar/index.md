---
tags:
  - Stad
title: Yartar
aliases:
  - Yartar
socialImage: https://static.wikia.nocookie.net/forgottenrealms/images/2/29/Yartary.png/revision/latest/scale-to-width-down/1000?cb=20200302192044
---
**Yartar** (uitgesprokel als: / YAR-tarr) is een stadje in de [[2 World Almanac/Sword Coast/index|Sword Coast]].

```base
views:
  - type: leaflet-map
    name: Map
    mapName: Yartar
    image: assets/yartar.jpg
    height: 460
    minZoom: -1
    maxZoom: 2
    defaultZoom: 0
    zoomDelta: 0.33
    scale: "0.2"
    unit: miles
```

```base
filters:
  and:
    - Locatie == this.file
views:
  - type: table
    name: Referenties
    groupBy:
      property: file.tags
      direction: ASC

```

<style> .page-listing { display: none; } </style>