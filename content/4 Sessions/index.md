---
title: 4 Sessions
unlisted: true
hideFolderContent: true
---
# Onze sessies

```base
filters:
  and:
    - file.folder == "4 Sessions"
    - file.path != "4 Sessions/index.md"
views:
  - type: list
    name: Alle Sessies
    order:
      - file.name
      - date
    markers: bullet
    indentProperties: false
    separator: " - "
  - type: list
    name: Recente Sessies
    order:
      - file.name
      - date
    sort:
      - property: date
        direction: DESC
    limit: 5
    markers: bullet
    indentProperties: false
    separator: " - "

```


