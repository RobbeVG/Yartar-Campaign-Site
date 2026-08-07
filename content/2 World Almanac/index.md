---
title: 2 World Almanac
---
Deze almanac is jullie kijk op de wereld. Alles wat jullie weten wordt hier verzameld. De volledige campaign zal zich afspelen op de [[2 World Almanac/Sword Coast/index|Sword Coast]] en zal beginnen in [[2 World Almanac/Sword Coast/Yartar/index|Yartar]]. 

De [[2 World Almanac/Sword Coast/index|Sword Coast]] ligt in het continent  ***Faerûn***. Wat op zijn beurt bevindt op de planeet ***Toril***.

>[!info]- Info over Faerûn & Toril
Aangezien het verhaal, vermoedelijk, enkel plaatsvind in de [[2 World Almanac/Sword Coast/index|Sword Coast]] heb ik geen extra informatie toegevoegd i.v.m. andere continenten of planeten. Indien je dit toch wil, kan je altijd een kijkje nemen op de [Forgotten Realms](https://forgottenrealms.fandom.com/wiki/) website.

# World Almanac

```base
filters:
  and:
    - file.inFolder("2 World Almanac")
    - "!file.tags.isEmpty()"
    - draft != true
formulas:
  Naam: if(file.name == "index", link(file, title), file)
properties:
  file.name:
    displayName: name
views:
  - type: table
    name: Categorieën
    groupBy:
      property: file.tags
      direction: DESC
    order:
      - formula.Naam
      - Locatie
    sort:
      - property: Locatie
        direction: DESC
      - property: formula.Naam
        direction: DESC
    cardSize: 200
    columnSize:
      file.name: 199
  - type: cards
    name: Steden
    filters:
      and:
        - file.hasTag("Stad")
    order:
      - formula.Naam
    image: note.socialImage
  - type: cards
    name: NPC's
    filters:
      and:
        - file.hasTag("NPC")
    image: note.socialImage
  - type: cards
    name: Organisaties
    filters:
      and:
        - file.hasTag("Organisatie")
    image: note.socialImage

```







>[!quote] Alice in Wonderland
>If I had a world of my own, everything would be nonsense. Nothing would be what it is because everything would be what it isn't. And contrariwise, what it is, it wouldn't be. And what it wouldn't be, it would. [](https://movie-sounds.org/disney/alice-in-wonderland-1951/28723)

![[alice_clip.mp3]]

<style> .page-listing { display: none; } </style>