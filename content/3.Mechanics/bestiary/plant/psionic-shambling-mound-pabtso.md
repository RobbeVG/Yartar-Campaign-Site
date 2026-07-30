---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
title: "Psionic Shambling Mound"
aliases:
- "Psionic Shambling Mound"
conditionImmunities:
- [blinded](3.Mechanics/rules/conditions.md#Blinded)
- [deafened](3.Mechanics/rules/conditions.md#Deafened)
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
---
# Psionic Shambling Mound
*Source: Phandelver and Below: The Shattered Obelisk p. 108*  
```ad-statblock
title: Psionic Shambling Mound
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/PaBTSO/Psionic%20Shambling%20Mound.webp#token)
*Large Plant, Unaligned*

- **Armor Class** 15 (natural armor)
- **Hit Points** 136 (16d10 + 48) 
- **Speed** 20 ft., swim 20 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 18 | +4 | +4 |
|Int| 5 | -3 | -3 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 8 | -1 | -1 |
|Wis| 10 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 16 | +3 | +3 |
|Cha| 5 | -3 | -3 |


- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** [Stealth](3.Mechanics/rules/skills.md#Stealth) +2
- **Damage Resistances** Cold, Fire
- **Damage Immunities** Lightning
- **Condition Immunities** [Blinded](3.Mechanics/rules/conditions.md#Blinded), [Deafened](3.Mechanics/rules/conditions.md#Deafened), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 Ft. (blind beyond this radius), Passive Perception 10
- **Languages** —
- **Challenge** 5

## Traits

***Lightning Absorption.*** Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt.

## Actions

***Multiattack.*** The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is [grappled](3.Mechanics/rules/conditions.md#Grappled) (escape DC 14), and the shambling mound uses its Engulf on it.

***Slam.*** *Melee Weapon Attack:* `dice:1d20+7|noform|noparens|text(+7)` to hit, reach 5 ft., one target. *Hit:* `dice:2d8+4|noform|noparens|avg|text(13)` (`2d8 + 4`) bludgeoning damage.

***Engulf.*** The shambling mound engulfs a Medium or smaller creature [grappled](3.Mechanics/rules/conditions.md#Grappled) by it. The engulfed target is [blinded](3.Mechanics/rules/conditions.md#Blinded), [restrained](3.Mechanics/rules/conditions.md#Restrained), and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take `dice:2d8+4|noform|noparens|avg|text(13)` (`2d8 + 4`) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.

***Spellcasting (Psionics).*** The shambling mound casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 8):

**At will:** [minor illusion](3.Mechanics/spells/minor-illusion-xphb.md)

**1/day:** [charm person](3.Mechanics/spells/charm-person-xphb.md) (already cast)
```
^statblock