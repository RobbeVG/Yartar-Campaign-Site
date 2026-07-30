---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
title: "Hashutu"
aliases:
- "Hashutu"
conditionImmunities:
- [blinded](3.Mechanics/rules/conditions.md#Blinded)
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
---
# Hashutu
*Source: Phandelver and Below: The Shattered Obelisk p. 194*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/PaBTSO/Hashutu.webp#center)
```ad-statblock
title: Hashutu
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/PaBTSO/Hashutu.webp#token)
*Medium Aberration, Typically  Lawful Evil*

- **Armor Class** 15 ([breastplate](3.Mechanics/items/breastplate-xphb.md))
- **Hit Points** 156 (24d8 + 48) 
- **Speed** 30 ft., fly 60 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 11 | +0 | +0 |
|Int| 21 | +5 | **+9** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 12 | +1 | +1 |
|Wis| 17 | +3 | **+7** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 15 | +2 | +2 |
|Cha| 18 | +4 | **+8** |


- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +9, Wisdom +7, Charisma +8
- **Skills** [Arcana](3.Mechanics/rules/skills.md#Arcana) +9, [Insight](3.Mechanics/rules/skills.md#Insight) +7, [Perception](3.Mechanics/rules/skills.md#Perception) +7, [Stealth](3.Mechanics/rules/skills.md#Stealth) +5
- **Damage Resistances** Psychic
- **Condition Immunities** [Blinded](3.Mechanics/rules/conditions.md#Blinded), [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Frightened](3.Mechanics/rules/conditions.md#Frightened)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 Ft., [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., [Truesight](3.Mechanics/rules/senses.md#Truesight) 15 Ft., Passive Perception 17
- **Languages** Deep Speech, Telepathy 120 ft., Undercommon
- **Challenge** 11

## Traits

***Legendary Resistance (3/Day).*** If Hashutu fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** Hashutu has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** Hashutu makes two Tentacle attacks.

***Tentacle.*** *Melee Weapon Attack:* `dice:1d20+9|noform|noparens|text(+9)` to hit, reach 5 ft., one creature. *Hit:* `dice:3d10+5|noform|noparens|avg|text(21)` (`3d10 + 5`) psychic damage. If the target is Medium or smaller, it has the [grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 17) and must succeed on a DC 17 Intelligence saving throw or have the [incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) condition until the grapple ends.

***Extract Brain.*** *Melee Weapon Attack:* `dice:1d20+9|noform|noparens|text(+9)` to hit, reach 5 ft., one [incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) Humanoid [grappled](3.Mechanics/rules/conditions.md#Grappled) by Hashutu. *Hit:* `dice:10d10|noform|noparens|avg|text(55)` (`10d10`) piercing damage. If this damage reduces the target to 0 hit points, Hashutu kills it by extracting and devouring its brain.

***Unleash Void (Recharge 5-6).*** Hashutu opens a rift into the Far Realm, centered on a point Hashutu can see within 60 feet of itself, and a tentacle lashes across creatures near the rift. Each creature other than mind flayers within 30 feet of the rift must make a DC 17 Intelligence saving throw, after which the tentacle disappears and the rift closes. On a failed save, a creature takes `dice:4d8|noform|noparens|avg|text(18)` (`4d8`) cold damage from the rift plus `dice:4d8|noform|noparens|avg|text(18)` (`4d8`) psychic damage from the tentacle and has the [stunned](3.Mechanics/rules/conditions.md#Stunned) condition for 1 minute. On a successful save, a creature takes half as much damage only. A [stunned](3.Mechanics/rules/conditions.md#Stunned) creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Spellcasting (Psionics).*** Hashutu casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 17):

**At will:** [detect magic](3.Mechanics/spells/detect-magic-xphb.md), [detect thoughts](3.Mechanics/spells/detect-thoughts-xphb.md), [mage hand](3.Mechanics/spells/mage-hand-xphb.md) (the hand is invisible)

**3/day each:** [clairvoyance](3.Mechanics/spells/clairvoyance-xphb.md) (as an action), [dispel magic](3.Mechanics/spells/dispel-magic-xphb.md)

**1/day:** [plane shift](3.Mechanics/spells/plane-shift-xphb.md) (self only)

## Reactions

***Warp Reality.*** When hit by an attack roll, Hashutu gains a +4 bonus to its AC against that attack roll, potentially causing it to miss. Then Hashutu, along with any equipment it is wearing or carrying, magically teleports up to 60 feet to an unoccupied space it can see.
```
^statblock