---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
title: "Voalsh"
aliases:
- "Voalsh"
---
# Voalsh
*Source: Phandelver and Below: The Shattered Obelisk p. 194*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/PaBTSO/Voalsh.webp#center)

```ad-statblock
title: Voalsh
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/PaBTSO/Voalsh.webp#token)
*Medium aberration, typically  Lawful Evil*

- **Armor Class** 15 ([breastplate](3.Mechanics/items/breastplate-xphb.md))
- **Hit Points** 156 (`24d8 + 48`) 
- **Speed** 0 ft., fly 30 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|12 (+1)|15 (+2)|21 (+5)|17 (+3)|18 (+4)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +9, Wisdom +7, Charisma +8
- **Skills** [Arcana](3.Mechanics/rules/skills.md#Arcana) +9, [Insight](3.Mechanics/rules/skills.md#Insight) +7, [Perception](3.Mechanics/rules/skills.md#Perception) +7, [Stealth](3.Mechanics/rules/skills.md#Stealth) +5
- **Senses** [darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 ft., [truesight](3.Mechanics/rules/senses.md#Truesight) 15 ft., passive Perception 17
- **Damage Resistances** psychic
- **Condition Immunities** [blinded](3.Mechanics/rules/conditions.md#Blinded), [charmed](3.Mechanics/rules/conditions.md#Charmed), [frightened](3.Mechanics/rules/conditions.md#Frightened), [prone](3.Mechanics/rules/conditions.md#Prone)
- **Languages** Deep Speech, telepathy 120 ft., Undercommon
- **Challenge** 11

## Traits

***Legendary Resistance (3/Day).*** If Voalsh fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** Voalsh has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** Voalsh makes two Tentacle attacks.

***Tentacle.*** *Melee Weapon Attack:* `dice:1d20+9|noform|noparens|text(+9)` to hit, reach 5 ft., one creature. *Hit:* `dice:3d10+5|noform|noparens|avg|text(21)` (`3d10 + 5`) psychic damage. If the target is Medium or smaller, it has the [grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 17) and must succeed on a DC 17 Intelligence saving throw or have the [incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) condition until the grapple ends.

***Extract Brain.*** *Melee Weapon Attack:* `dice:1d20+9|noform|noparens|text(+9)` to hit, reach 5 ft., one [incapacitated](3.Mechanics/rules/conditions.md#Incapacitated) Humanoid [grappled](3.Mechanics/rules/conditions.md#Grappled) by Voalsh. *Hit:* `dice:10d10|noform|noparens|avg|text(55)` (`10d10`) piercing damage. If this damage reduces the target to 0 hit points, Voalsh kills it by extracting and devouring its brain.

***Unleash Void (Recharge 5-6).*** Voalsh opens a rift into the Far Realm, centered on a point Voalsh can see within 60 feet of itself, and a tentacle lashes across creatures near the rift. Each creature other than mind flayers within 30 feet of the rift must make a DC 17 Intelligence saving throw, after which the tentacle disappears and the rift closes. On a failed save, a creature takes `dice:4d8|noform|noparens|avg|text(18)` (`4d8`) cold damage from the rift plus `dice:4d8|noform|noparens|avg|text(18)` (`4d8`) psychic damage from the tentacle and has the [stunned](3.Mechanics/rules/conditions.md#Stunned) condition for 1 minute. On a successful save, a creature takes half as much damage only. A [stunned](3.Mechanics/rules/conditions.md#Stunned) creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Spellcasting (Psionics).*** Voalsh casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 17):

**At will:** [detect magic](3.Mechanics/spells/detect-magic-xphb.md), [detect thoughts](3.Mechanics/spells/detect-thoughts-xphb.md), [mage hand](3.Mechanics/spells/mage-hand-xphb.md) (the hand is invisible)

**3/day each:** [clairvoyance](3.Mechanics/spells/clairvoyance-xphb.md) (as an action), [dispel magic](3.Mechanics/spells/dispel-magic-xphb.md)

**1/day:** [plane shift](3.Mechanics/spells/plane-shift-xphb.md) (self only)

## Reactions

***Warp Reality.*** When hit by an attack roll, Voalsh gains a +4 bonus to its AC against that attack roll, potentially causing it to miss. Then Voalsh, along with any equipment it is wearing or carrying, magically teleports up to 60 feet to an unoccupied space it can see.
```
^statblock