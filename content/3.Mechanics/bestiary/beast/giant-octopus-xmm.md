---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
draft: true
title: "Giant Octopus"
aliases:
- "Giant Octopus"
---
# [Giant Octopus](3.Mechanics/bestiary/beast/giant-octopus-xmm.md)
*Source: Monster Manual (2024) p. 358. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.Mechanics/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.Mechanics/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Octopus.webp#right)

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](3.Mechanics/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](3.Mechanics/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

> [!gallery]
![A druid calls on animals of the hills and mountains to aid her cause](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Hills%20and%20Mountains.webp)
![Aquatic animals swim alongside a druid exploring the sea](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Aquatic.webp)
![Inhabitants of the rain forest answer a druid's summons](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Animals%20Rainforest.webp)
```statblock
"name": "Giant Octopus (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "7d10 + 7"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "13"
  - !!int "5"
  - !!int "10"
  - !!int "4"
"speed": "10 ft., swim 60 ft."
"skillsaves":
  - "name": "[Perception](3.Mechanics/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](3.Mechanics/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 ft., passive Perception\
  \ 14"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The octopus can breathe only underwater. It can hold its breath for 1\
      \ hour outside water."
    "name": "Water Breathing"
"actions":
  - "desc": "*Melee Attack Roll:* +5, reach 10 ft. *Hit:* 10 (2d6 + 3) Bludgeoning\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](3.Mechanics/rules/conditions.md#Grappled)\
      \ condition (escape DC 13) from all eight tentacles. While [Grappled](3.Mechanics/rules/conditions.md#Grappled),\
      \ the target has the [Restrained](3.Mechanics/rules/conditions.md#Restrained)\
      \ condition."
    "name": "Tentacles"
"reactions":
  - "desc": "Trigger: The octopus takes damage while underwater. _Response:_ The octopus\
      \ releases ink that fills a 10-foot [Cube](3.Mechanics/rules/variant-rules/cube-area-of-effect-xphb.md)\
      \ centered on itself, and the octopus moves up to its [Swim Speed](3.Mechanics/rules/variant-rules/swim-speed-xphb.md).\
      \ The [Cube](3.Mechanics/rules/variant-rules/cube-area-of-effect-xphb.md) is\
      \ [Heavily Obscured](3.Mechanics/rules/variant-rules/heavily-obscured-xphb.md)\
      \ for 1 minute or until a strong current or similar effect disperses the ink."
    "name": "Ink Cloud (1/Day)"
"source":
  - "XMM"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Giant%20Octopus.webp"
```
^statblock

## Environment

underwater