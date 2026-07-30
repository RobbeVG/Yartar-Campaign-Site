---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
title: "Intellect Snare"
aliases:
- "Intellect Snare"
conditionImmunities:
- [blinded](3.Mechanics/rules/conditions.md#Blinded)
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [prone](3.Mechanics/rules/conditions.md#Prone)
---
# Intellect Snare
*Source: Phandelver and Below: The Shattered Obelisk p. 208*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/PaBTSO/Intellect%20Snare.webp#right)

When the strange horrors of the Far Realm rip at the minds of individuals, some of those wayward shreds of thought conglomerate to form an intellect snare. An intellect snare appears as a writhing ball of tentacles, echoing with the cacophonous sounds of every thought the snare has consumed.

Intellect snares are scavengers, often found scouring the aftermath of a mind flayer attack to feast on whatever hapless creatures are left behind. An intellect snare feeds by wrapping a creature in one of its tentacles and then siphoning shreds of thought, leaving a tattered mind in its wake.
```ad-statblock
title: Intellect Snare
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/PaBTSO/Intellect%20Snare.webp#token)
*Small Aberration, Typically  Neutral Evil*

- **Armor Class** 14 
- **Hit Points** 99 (18d6 + 36) 
- **Speed** 0 ft., fly 45 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 13 | +1 | +1 |
|Int| 23 | +6 | **+9** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 18 | +4 | +4 |
|Wis| 17 | +3 | **+6** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 15 | +2 | +2 |
|Cha| 11 | +0 | **+3** |


- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +9, Wisdom +6, Charisma +3
- **Skills** ⏤
- **Damage Immunities** Psychic
- **Condition Immunities** [Blinded](3.Mechanics/rules/conditions.md#Blinded), [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Prone](3.Mechanics/rules/conditions.md#Prone)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 120 Ft. (can't see beyond this radius), Passive Perception 13
- **Languages** Deep Speech, Telepathy 120 ft.
- **Challenge** 8

## Traits

***Cacophony of Minds.*** Any creature that starts its turn within 30 feet of the intellect snare must succeed on a DC 17 Wisdom saving throw or have the [incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) condition for 1 minute. An [incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) creature can repeat the saving throw at the start of each of its turns, ending the effect on itself on a success. A creature that succeeds on the saving throw is immune to this intellect snare's Cacophony of Minds for 24 hours.

***Magic Resistance.*** The intellect snare has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The intellect snare makes two Tentacle attacks.

***Tentacle.*** *Melee Weapon Attack:* `dice:1d20+9|noform|noparens|text(+9)` to hit, reach 15 ft., one target. *Hit:* `dice:1d8+6|noform|noparens|avg|text(10)` (`1d8 + 6`) force damage, and if the target is a Medium or smaller creature, the target has the [grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 17).

## Bonus Actions

***Siphon Thoughts.*** The intellect snare targets one creature it is grappling. The target must make a DC 17 Intelligence saving throw, taking `dice:6d6|noform|noparens|avg|text(21)` (`6d6`) psychic damage on a failed save, or half as much damage on a successful one. The intellect snare then regains a number of hit points equal to the amount of damage taken.
```
^statblock