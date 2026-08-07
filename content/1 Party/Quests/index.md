---
title: Quests
---
```base
filters:
  not:
    - file.inFolder("templates")
    - file.inFolder("0 DM Notes")
views:
  - type: cards
    name: Actief
    filters:
      and:
        - file.hasTag("Quest")
        - Status == "Active"
    cardSize: 290

```

^f80452

<style> .page-listing { display: none; } </style>