---
title: Characters
---
# Avonturiers

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

