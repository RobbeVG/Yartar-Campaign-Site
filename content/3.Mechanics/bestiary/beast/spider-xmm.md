---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
title: "Spider"
aliases:
- "Spider"
---
# [Spider](3.Mechanics/bestiary/beast/spider-xmm.md)
*Source: Monster Manual (2024) p. 369, Player's Handbook (2024) p. 357. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.Mechanics/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.Mechanics/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Spiders.webp#right)

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.Mechanics/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.Mechanics/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

> [!gallery]
![A druid calls on animals of the hills and mountains to aid her cause](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Hills%20and%20Mountains.webp)
![Aquatic animals swim alongside a druid exploring the sea](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Aquatic.webp)
![Inhabitants of the rain forest answer a druid's summons](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Rainforest.webp)
```statblock
"name": "Spider (XMM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "2"
"stats":
  - !!int "2"
  - !!int "14"
  - !!int "8"
  - !!int "1"
  - !!int "10"
  - !!int "2"
"speed": "20 ft., climb 20 ft."
"skillsaves":
  - "name": "[Stealth](3.Mechanics/rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "[Darkvision](3.Mechanics/rules/senses.md#Darkvision) 30 ft., passive Perception\
  \ 10"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The spider can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The spider ignores movement restrictions caused by webs, and the spider\
      \ knows the location of any other creature in contact with the same web."
    "name": "Web Walker"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 1 Piercing damage plus 2\
      \ (1d4) Poison damage."
    "name": "Bite"
"source":
  - "XMM"
  - "XPHB"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Spider.webp"
```
^statblock

## Environment

desert, forest, swamp, underdark, urban