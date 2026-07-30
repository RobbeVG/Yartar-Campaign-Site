---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
title: "Cloaker"
aliases:
- "Cloaker"
conditionImmunities:
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
---
# Cloaker
*Source: Monster Manual (2024) p. 73. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Cloaker.webp#right)

## Cloaker

*Haunter in the Dark*

- **Habitat.** Underdark  
- **Treasure.** [Implements](3.Mechanics/tables/random-magic-items-implements.md)  

Cloakers are mysterious Underdark predators, named by adventurers for their resemblance to hanging cloaks when they cling to walls. What cloakers call themselves is unknown, if they refer to themselves at all. Though they're undeniably intelligent, their behavior is often inscrutable.

Cloakers sometimes gather in Underdark enclaves, but they rarely build settlements or form social structures. Most operate as solitary predators, lurking in dismal subterranean reaches or abandoned dungeons—sometimes for months at a time—as they wait for prey to pass. They use their mottled hides to blend in with their surroundings. When unsuspecting prey nears, cloakers unfurl and attempt to latch on and then smother their victims in their powerful wings.

Cloakers delight in frightening foes. In addition to their methods of ambush, cloakers can create illusory duplicates of themselves and emit surreal moans that non-cloakers find terrifying in unexplainable, primal ways. Cloakers might antagonize explorers lost in the Underdark for days, terrorizing and scattering them before attacking. They rarely converse with other beings, except to whisper eerie riddles to those they're about to consume.
```ad-statblock
title: Cloaker
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Cloaker.webp#token)
*Large Aberration, Chaotic Neutral*

- **Armor Class** 14 
- **Hit Points** 91 (14d10 + 14) 
- **Speed** 10 ft., fly 40 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 17 | +3 | +3 |
|Int| 13 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 15 | +2 | +2 |
|Wis| 14 | +2 | +2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 12 | +1 | +1 |
|Cha| 7 | -2 | -2 |


- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** [Stealth](3.Mechanics/rules/skills.md#Stealth) +5
- **Condition Immunities** [Frightened](3.Mechanics/rules/conditions.md#Frightened)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 12
- **Languages** Deep Speech, Undercommon
- **Challenge** 8

## Traits

***Light Sensitivity.*** While in [Bright Light](3.Mechanics/rules/variant-rules/bright-light-xphb.md), the cloaker has [Disadvantage](3.Mechanics/rules/variant-rules/disadvantage-xphb.md) on attack rolls.

## Actions

***Multiattack.*** The cloaker makes one Attach attack and two Tail attacks.

***Attach.*** *Melee Attack Roll:* `dice:1d20+6|noform|noparens|text(+6)`, reach 5 ft. *Hit:* `dice:3d6+3|noform|noparens|avg|text(13)` (`3d6 + 3`) Piercing damage. If the target is a Large or smaller creature, the cloaker attaches to it. While the cloaker is attached, the target has the [Blinded](3.Mechanics/rules/conditions.md#Blinded) condition, and the cloaker can't make Attach attacks against other targets. In addition, the cloaker halves the damage it takes (round down), and the target takes the same amount of damage.

The cloaker can detach itself by spending 5 feet of movement. The target or a creature within 5 feet of it can take an action to try to detach the cloaker, doing so by succeeding on a DC 14 Strength ([Athletics](3.Mechanics/rules/skills.md#Athletics)) check.

***Tail.*** *Melee Attack Roll:* `dice:1d20+6|noform|noparens|text(+6)`, reach 10 ft. *Hit:* `dice:1d10+3|noform|noparens|avg|text(8)` (`1d10 + 3`) Slashing damage.

## Bonus Actions

***Moan.*** *Wisdom Saving Throw:* DC 13, each creature in a 60-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the cloaker. *Failure:* The target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the end of the cloaker's next turn. *Success:* The target is immune to this cloaker's Moan for the next 24 hours.

***Phantasms (Recharge after a Short or Long Rest).*** The cloaker casts the [Mirror Image](3.Mechanics/spells/mirror-image-xphb.md) spell, requiring no spell components and using Wisdom as the spellcasting ability. The spell ends early if the cloaker starts or ends its turn in [Bright Light](3.Mechanics/rules/variant-rules/bright-light-xphb.md).

```
^statblock

## Environment

underdark