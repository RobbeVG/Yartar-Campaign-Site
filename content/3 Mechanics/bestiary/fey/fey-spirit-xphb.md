---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
title: "Fey Spirit"
aliases:
- "Fey Spirit"
---
# [Fey Spirit](fey-spirit-xphb.md)
*Source: Player's Handbook (2024) p. 326*  

![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XPHB/Fey%20Spirit.webp#center)

%%
```statblock
"name": "Fey Spirit (XPHB)"
"size": "Small"
"type": "fey"
"alignment": "Neutral"
"ac_class": "12 + the spell's level"
"hp": "30 + 10 for each spell level above 3"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "11"
  - !!int "16"
"speed": "30 ft., fly 30 ft."
"condition_immunities": "charmed"
"senses": "Darkvision 60 ft., passive Perception 10"
"languages": "Sylvan, understands the languages you know"
"actions":
  - "desc": "The spirit makes a number of Fey Blade attacks equal to half this spell's\
      \ level (round down)."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5\
      \ ft. *Hit:* 2d6 + 3 + the spell's level Force damage."
    "name": "Fey Blade"
"bonus_actions":
  - "desc": "The spirit magically teleports up to 30 feet to an unoccupied space it\
      \ can see. Then one of the following effects occurs, based on the spirit's chosen\
      \ mood:\n\n- **Fuming.** The spirit has [Advantage](3 Mechanics/rules/variant-rules/advantage-xphb.md)\
      \ on the next attack roll it makes before the end of this turn.  \n- **Mirthful.**\
      \ *Wisdom Saving Throw:* DC equals your spell save DC, one creature the spirit\
      \ can see within 10 feet of itself. *Failure:* The target is [Charmed](3 Mechanics/rules/conditions.md#Charmed)\
      \ by you and the spirit for 1 minute or until the target takes any damage. \
      \ \n- **Tricksy.** The spirit fills a 10-foot [Cube](3 Mechanics/rules/variant-rules/cube-area-of-effect-xphb.md)\
      \ within 5 feet of it with magical Darkness, which lasts until the end of its\
      \ next turn.  "
    "name": "Fey Step"
"source":
  - "XPHB"
"image": "https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XPHB/Fey%20Spirit.webp"
```
^statblock
%%