---
title: Characters
---
# Hello Adventures

```base
filters:
  not:
    - file.inFolder("templates")
    - file.inFolder("0.DM Notes")
views:
  - type: cards
    name: Characters
    filters:
      and:
        - file.hasTag("PC")
    image: note.socialImage

```
