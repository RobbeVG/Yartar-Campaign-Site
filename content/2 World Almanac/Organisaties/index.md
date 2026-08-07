---
title: Organisaties
---
```base
filters:
  and:
    - "!file.tags.isEmpty()"
    - draft != true
properties:
  file.name:
    displayName: Naam
views:
  - type: cards
    name: Organisaties
    filters:
      and:
        - file.hasTag("Organisatie")
    image: note.socialImage
```


<style> .page-listing { display: none; } </style>