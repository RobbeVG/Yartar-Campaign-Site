---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
draft: true
title: "Giant Eagle"
aliases:
- "Giant Eagle"
---
# [Giant Eagle](3.Mechanics/bestiary/celestial/giant-eagle-xmm.md)
*Source: Monster Manual (2024) p. 356. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.Mechanics/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.Mechanics/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Eagle.webp#right)

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.Mechanics/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.Mechanics/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

> [!gallery]
![A druid calls on animals of the hills and mountains to aid her cause](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Hills%20and%20Mountains.webp)
![Aquatic animals swim alongside a druid exploring the sea](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Aquatic.webp)
![Inhabitants of the rain forest answer a druid's summons](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Rainforest.webp)
```statblock
"name": "Giant Eagle (XMM)"
"size": "Large"
"type": "celestial"
"alignment": "Neutral Good"
"ac": !!int "13"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "17"
  - !!int "13"
  - !!int "8"
  - !!int "14"
  - !!int "10"
"speed": "10 ft., fly 80 ft."
"skillsaves":
  - "name": "[Perception](3.Mechanics/rules/skills.md#Perception)"
    "desc": "+6"
"damage_resistances": "necrotic, radiant"
"senses": "passive Perception 16"
"languages": "Celestial; understands Common and Primordial (Auran) but can't speak\
  \ them"
"cr": "1"
"actions":
  - "desc": "The eagle makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 5 (1d4 + 3) Slashing damage\
      \ plus 3 (1d6) Radiant damage."
    "name": "Rend"
"source":
  - "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Giant%20Eagle.webp"
```
^statblock

## Environment

coastal, grassland, hill, mountain