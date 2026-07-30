---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
title: "Undead Spirit"
aliases:
- "Undead Spirit"
conditionImmunities:
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Undead Spirit
*Source: Player's Handbook (2024) p. 328*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XPHB/Undead%20Spirit.webp#center)
```ad-statblock
title: Undead Spirit
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XPHB/Undead%20Spirit.webp#token)
*Medium Undead, Neutral*

- **Armor Class** (11 + the spell's level)
- **Hit Points** 30 (Ghostly and Putrid only) or 20 (Skeletal only) + 10 for each spell level above 3  (30 (Ghostly and Putrid only) or 20 (Skeletal only) + 10 for each spell level above 3)
- **Speed** 30 ft., fly 40 ft. (hover; Ghostly only)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 12 | +1 | +1 |
|Int| 4 | -3 | -3 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 16 | +3 | +3 |
|Wis| 10 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 15 | +2 | +2 |
|Cha| 9 | -1 | -1 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Immunities** Necrotic, Poison
- **Condition Immunities** [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 10
- **Languages** Understands the languages you know
- **Challenge** 

## Traits

***Festering Aura (Putrid Only).*** *Constitution Saving Throw:* DC equals your spell save DC, any creature (other than you) that starts its turn within a 5-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the spirit. *Failure:* The creature has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition until the start of its next turn.

***Incorporeal Passage (Ghostly Only).*** The spirit can move through other creatures and objects as if they were [Difficult Terrain](3.Mechanics/rules/variant-rules/difficult-terrain-xphb.md). If it ends its turn inside an object, it is shunted to the nearest unoccupied space and takes `dice:1d10|noform|noparens|avg` (`1d10`) Force damage for every 5 feet traveled.

## Actions

***Multiattack.*** The spirit makes a number of attacks equal to half this spell's level (round down).

***Deathly Touch (Ghostly Only).*** *Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5 ft. *Hit:* `1d8 + 3` + the spell's level Necrotic damage, and the target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the end of its next turn.

***Grave Bolt (Skeletal Only).*** *Ranged Attack Roll:* Bonus equals your spell attack modifier, range 150 ft. *Hit:* `2d4 + 3` + the spell's level Necrotic damage.

***Rotting Claw (Putrid Only).*** *Melee Attack Roll:* Bonus equals your spell attack modifier, reach 5 ft. *Hit:* `1d6 + 3` + the spell's level Slashing damage. If the target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition, it has the [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed) condition until the end of its next turn.
```
^statblock