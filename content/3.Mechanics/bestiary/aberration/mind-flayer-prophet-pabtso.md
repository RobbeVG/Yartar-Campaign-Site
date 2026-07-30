---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
title: "Mind Flayer Prophet"
aliases:
- "Mind Flayer Prophet"
---
# Mind Flayer Prophet
*Source: Phandelver and Below: The Shattered Obelisk p. 210*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/PaBTSO/Mind%20Flayer%20Prophet.webp#right)

Some mind flayers dedicate their lives to channeling abstruse truths from beyond reality. This insight gives them preternatural senses and allows them to focus their innate psionic power.

## Mind Flayers

Mind flayers, also known as illithids, feast on the brains of Humanoids across the multiverse. They are distinguished by their purple-toned skin and octopus-like heads, from which extend writhing tentacles.

```ad-statblock
title: Mind Flayer Prophet
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/PaBTSO/Mind%20Flayer%20Prophet.webp#token)
*Medium Aberration, Typically  Lawful Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** 97 (15d8 + 30) 
- **Speed** 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 15 | +2 | +2 |
|Int| 20 | +5 | **+8** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | +2 |
|Wis| 17 | +3 | **+6** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 14 | +2 | +2 |
|Cha| 17 | +3 | **+6** |


- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +8, Wisdom +6, Charisma +6
- **Skills** [Arcana](3.Mechanics/rules/skills.md#Arcana) +8, [Insight](3.Mechanics/rules/skills.md#Insight) +6, [Perception](3.Mechanics/rules/skills.md#Perception) +6, [Stealth](3.Mechanics/rules/skills.md#Stealth) +5
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 16
- **Languages** Deep Speech, Telepathy 120 ft., Undercommon
- **Challenge** 8

## Traits

***Awareness.*** The mind flayer has advantage on initiative rolls and can't be surprised as long as it doesn't have the [incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) condition.

***Magic Resistance.*** The mind flayer has advantage on saving throws against spells and other magical effects.

## Actions

***Tentacles.*** *Melee Weapon Attack:* `dice:1d20+8|noform|noparens|text(+8)` to hit, reach 5 ft., one creature. *Hit:* `dice:2d10+5|noform|noparens|avg|text(16)` (`2d10 + 5`) psychic damage. If the target is Medium or smaller, it has the [grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 16) and must succeed on a DC 16 Intelligence saving throw or have the [stunned](3.Mechanics/rules/conditions.md#Stunned) condition until the grapple ends.

***Extract Brain.*** *Melee Weapon Attack:* `dice:1d20+8|noform|noparens|text(+8)` to hit, reach 5 ft., one Humanoid [grappled](3.Mechanics/rules/conditions.md#Grappled) by the mind flayer. *Hit:* `dice:10d10|noform|noparens|avg|text(55)` (`10d10`) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills it by extracting and devouring its brain.

***Mind Whip (Recharge 5-6).*** The mind flayer lashes out with psychic energy, targeting up to two creatures it can see within 60 feet of itself. Each target must succeed on a DC 16 Intelligence saving throw or take `dice:4d8+5|noform|noparens|avg|text(23)` (`4d8 + 5`) psychic damage and have the [stunned](3.Mechanics/rules/conditions.md#Stunned) condition for 1 minute. A [stunned](3.Mechanics/rules/conditions.md#Stunned) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Spellcasting (Psionics).*** The mind flayer casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 16):

**At will:** [detect magic](3.Mechanics/spells/detect-magic-xphb.md), [detect thoughts](3.Mechanics/spells/detect-thoughts-xphb.md), [levitate](3.Mechanics/spells/levitate-xphb.md)

**1/day each:** [dominate monster](3.Mechanics/spells/dominate-monster-xphb.md), [plane shift](3.Mechanics/spells/plane-shift-xphb.md) (self only), [true seeing](3.Mechanics/spells/true-seeing-xphb.md)
```
^statblock