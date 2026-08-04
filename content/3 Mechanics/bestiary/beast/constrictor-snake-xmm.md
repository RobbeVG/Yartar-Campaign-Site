---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
title: "Constrictor Snake"
aliases:
- "Constrictor Snake"
---
# [Constrictor Snake](constrictor-snake-xmm.md)
*Source: Monster Manual (2024) p. 351, Player's Handbook (2024) p. 348. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Constrictor%20Snake.webp#right)

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

> [!gallery]
![A druid calls on animals of the hills and mountains to aid her cause](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Hills%20and%20Mountains.webp)
![Aquatic animals swim alongside a druid exploring the sea](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Aquatic.webp)
![Inhabitants of the rain forest answer a druid's summons](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Rainforest.webp)

%%
```statblock
"name": "Constrictor Snake (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "12"
  - !!int "1"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "Perception"
    "desc": "+2"
  - "name": "Stealth"
    "desc": "+4"
"senses": "Blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "1/4"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 6 (1d8 + 2) Piercing damage."
    "name": "Bite"
  - "desc": "*Strength Saving Throw:* DC 12, one Medium or smaller creature the snake\
      \ can see within 5 feet. *Failure:* 7 (3d4) Bludgeoning damage, and the target\
      \ has the [Grappled](3 Mechanics/rules/conditions.md#Grappled) condition (escape\
      \ DC 12)."
    "name": "Constrict"
"source":
  - "XMM"
  - "XPHB"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Constrictor%20Snake.webp"
```
^statblock
%%


## Environment

desert, forest, swamp, underwater