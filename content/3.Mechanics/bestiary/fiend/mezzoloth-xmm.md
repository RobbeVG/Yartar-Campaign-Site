---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/gehenna
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/yugoloth
title: "Mezzoloth"
aliases:
- "Mezzoloth"
conditionImmunities:
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Mezzoloth
*Source: Monster Manual (2024) p. 211*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Mezzoloth.webp#right)

## Mezzoloth

*Yugoloth of Tenacity and Want*

- **Habitat.** Planar (Gehenna)  
- **Treasure.** [Armaments](3.Mechanics/tables/random-magic-items-armaments.md)  

Mezzoloths are insectile yugoloths that seek power and souls in the service of fiendish lords. These greedy, violent yugoloths are more direct than most of their scheming brethren, but what they lack in guile they make up for in persistence and numbers.

Mezzoloths typically form mercenary bands with others of their kind. These forces serve more powerful yugoloths, other fiends, sinister mages, or anyone who provides them with tempting rewards. Mezzoloths obediently adhere to the bargains they strike, potentially serving their patrons for centuries, but once those terms expire, yesterday's client could become today's target. Roll on or choose a result from the Mezzoloth Payments table to inspire a mezzoloth's price for its services.

**Mezzoloth Payments**

`dice: [](mezzoloth-xmm.md#^mezzoloth-payments)`

| dice: 1d6 | The Mezzoloth Agrees to Serve For... |
|-----------|--------------------------------------|
| 1 | Access to a planar portal. |
| 2 | Information valued by its true master. |
| 3 | A lair where it can bring others of its kind. |
| 4 | Magic weapons or armor. |
| 5 | The right to loot holy sites in places it conquers. |
| 6 | Souls, whether as larvae or captured spirits. |
^mezzoloth-payments
```ad-statblock
title: Mezzoloth
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Mezzoloth.webp#token)
*Medium Fiend (yugoloth), Neutral Evil*

- **Armor Class** 18 
- **Hit Points** 75 (10d8 + 30) 
- **Speed** 40 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 18 | +4 | +4 |
|Int| 7 | -2 | -2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 11 | +0 | +0 |
|Wis| 14 | +2 | +2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 16 | +3 | +3 |
|Cha| 10 | +0 | +0 |


- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +5
- **Damage Resistances** Cold, Fire, Lightning
- **Damage Immunities** Acid, Poison
- **Condition Immunities** [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 Ft., [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 15
- **Languages** Abyssal, Infernal; Telepathy 60 ft.
- **Challenge** 5

## Traits

***Fiendish Restoration.*** If the mezzoloth dies outside Gehenna, its body dissolves into ichor, and it gains a new body instantly, reviving with all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) somewhere in Gehenna.

***Magic Resistance.*** The mezzoloth has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The mezzoloth makes two attacks, using Claws or Mercurial Trident in any combination.

***Claws.*** *Melee Attack Roll:* `dice:1d20+7|noform|noparens|text(+7)`, reach 5 ft. *Hit:* `dice:2d4+4|noform|noparens|avg|text(9)` (`2d4 + 4`) Slashing damage. If the target is a Large or smaller creature, it has the [Grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 14) from two of four claws, and it has the [Restrained](3.Mechanics/rules/conditions.md#Restrained) condition until the grapple ends.

***Mercurial Trident.*** *Melee  or Ranged Attack Roll:* `dice:1d20+7|noform|noparens|text(+7)`, reach 5 ft. or range 20/60 ft. *Hit:* `dice:1d8+4|noform|noparens|avg|text(8)` (`1d8 + 4`) Piercing damage plus `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Force damage. *Hit or Miss:* The trident magically returns to the mezzoloth's claw immediately after a ranged attack.

***Spellcasting.*** The mezzoloth casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 13):

**1/day each:** [Cloudkill](3.Mechanics/spells/cloudkill-xphb.md), [Darkness](3.Mechanics/spells/darkness-xphb.md), [Dispel Magic](3.Mechanics/spells/dispel-magic-xphb.md)

## Bonus Actions

***Teleport (Recharge 5-6).*** The mezzoloth teleports up to 60 feet to an unoccupied space it can see. It can teleport one creature it is grappling to an unoccupied space within 5 feet of its destination space.
```
^statblock

## Environment

planar, gehenna