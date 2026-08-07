---
title: Characters
---
```base
filters:
  not:
    - file.inFolder("templates")
    - file.inFolder("0 DM Notes")
views:
  - type: cards
    name: Levend
    filters:
      and:
        - file.hasTag("PC")
    order:
      - file.name
      - Current Items
    image: note.socialImage

```

^152bf5

<style> .page-listing { display: none; } </style>