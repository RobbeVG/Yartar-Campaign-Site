---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
title: "Ghast Gravecaller"
aliases:
- "Ghast Gravecaller"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Ghast Gravecaller
*Source: Monster Manual (2024) p. 130*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Ghasts.webp#right)

Ghast gravecallers wield fell magic and converse with corpses. They might pose as liches or vampires.

## Ghasts

*Tyrants among Corpses*

- **Habitat.** Swamp, Underdark, Urban  
- **Treasure.** Any  

Ghasts are reeking, undying corpses closely related to ghouls. They hunger for the vices they enjoyed in life as much as they do for rotting flesh.

```ad-statblock
title: Ghast Gravecaller
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Ghast%20Gravecaller.webp#token)
*Medium Undead, Chaotic Evil*

- **Armor Class** 16 
- **Hit Points** 97 (15d8 + 30) 
- **Speed** 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 16 | +3 | +3 |
|Int| 18 | +4 | +4 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 17 | +3 | +3 |
|Wis| 14 | +2 | **+5** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 14 | +2 | **+5** |
|Cha| 8 | -1 | -1 |


- **Proficiency Bonus** +3
- **Saving Throws** Constitution +5, Wisdom +5
- **Skills** ⏤
- **Damage Immunities** Necrotic, Poison
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 12
- **Languages** Abyssal, Common
- **Challenge** 6

## Traits

***Stench.*** *Constitution Saving Throw:* DC 13, any creature that starts its turn in a 5-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the ghast. *Failure:* The target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition until the start of its next turn. *Success:* The target is immune to this ghast's Stench for 24 hours.

## Actions

***Multiattack.*** The ghast makes two Horrific Necrosis attacks. It can replace one attack with a Claw attack.

***Claw.*** *Melee Attack Roll:* `dice:1d20+6|noform|noparens|text(+6)`, reach 5 ft. *Hit:* `dice:3d6+3|noform|noparens|avg|text(13)` (`3d6 + 3`) Slashing damage. If the target isn't an Undead, it has the [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed) condition until the end of its next turn.

***Horrific Necrosis.*** *Melee  or Ranged Attack Roll:* `dice:1d20+7|noform|noparens|text(+7)`, reach 5 ft. or range 120 ft. *Hit:* `dice:2d10+4|noform|noparens|avg|text(15)` (`2d10 + 4`) Necrotic damage, and the target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the end of its next turn.

***Spellcasting.*** The ghast casts one of the following spells, requiring no Material components and using Intelligence as the spellcasting ability:

**At will:** [Speak with Dead](3.Mechanics/spells/speak-with-dead-xphb.md), [Thaumaturgy](3.Mechanics/spells/thaumaturgy-xphb.md)
```
^statblock

## Environment

swamp, underdark, urban