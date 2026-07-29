---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Sildar Hallwinter"
---
# [Sildar Hallwinter](3.Mechanics/bestiary/npc/sildar-hallwinter-pabtso.md)
*Source: Phandelver and Below: The Shattered Obelisk p. 22*  

Sildar is a kindhearted human man of nearly fifty years who holds a place of honor in the famous griffon cavalry of Waterdeep. He is an agent of the Lords' Alliance, a group of allied political powers along the Sword Coast concerned with mutual security and prosperity. The order ensures the safety of the cities and other settlements of Faerûn by proactively handling violent threats, and order members work to bring honor and glory to their leaders and their homeland.

```statblock
"name": "Sildar Hallwinter (PaBTSO)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "16"
"ac_class": "[chain mail](3.Mechanics/items/chain-mail-xphb.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"modifier": !!int "0"
"stats":
  - !!int "13"
  - !!int "10"
  - !!int "12"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "strength": !!int "3"
  - "constitution": !!int "3"
"skillsaves":
  - "name": "[Perception](3.Mechanics/rules/skills.md#Perception)"
    "desc": "+2"
"gear":
  - "[heavy crossbow](3.Mechanics/items/heavy-crossbow-xphb.md)"
  - "[longsword](3.Mechanics/items/longsword-xphb.md)"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "1"
"actions":
  - "desc": "Sildar makes two Longsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* dice:1d20+3|noform|noparens|text(+3) to hit,\
      \ reach 5 ft., one target. *Hit:* dice:1d8+1|noform|noparens|avg|text(5) (1d8\
      \ + 1) slashing damage, or dice:1d10+1|noform|noparens|avg|text(6) (1d10\
      \ + 1) slashing damage if used with two hands."
    "name": "Longsword"
  - "desc": "*Ranged Weapon Attack:* dice:1d20+2|noform|noparens|text(+2) to hit,\
      \ range 100/400 ft., one target. *Hit:* dice:1d10|noform|noparens|avg|text(5)\
      \ (1d10) piercing damage."
    "name": "Heavy Crossbow"
"reactions":
  - "desc": "When an attacker Sildar can see would hit him with a melee attack, he\
      \ can roll a dice:d6|noform|noparens|avg (d6) and add the number rolled\
      \ to his AC against the triggering attack, provided he's wielding a melee weapon."
    "name": "Parry"
"source":
  - "PaBTSO"
"image": "file://bestiary/tokens/PaBTSO/Sildar%20Hallwinter.webp"
```
^statblock