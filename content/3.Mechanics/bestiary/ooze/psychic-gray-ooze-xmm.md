---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
title: "Psychic Gray Ooze"
aliases:
- "Psychic Gray Ooze"
---
# Psychic Gray Ooze
*Source: Monster Manual (2024) p. 151. Available in the <span title='Systems Reference Document (5.2)'>SRD</span>*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Gray%20Oozes.webp#right)

Psychic gray oozes exhibit violent psionic abilities. These oozes sometimes result from failed attempts to summon or create creatures linked to the Elemental Plane of Earth, like gargoyles or homunculi.

## Gray Oozes

*Hungry Slimes and Magical Failures*

- **Habitat.** Underdark  
- **Treasure.** None  

Gray oozes are predatory, corrosive slimes that blend in with stony surroundings.

## Statblock

```ad-statblock
title: Psychic Gray Ooze
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Psychic%20Gray%20Ooze.webp#token)
*Medium ooze, Unaligned*

- **Armor Class** 9 
- **Hit Points** 37 (`5d8 + 15`) 
- **Speed** 10 ft., climb 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)| 8 (-1)|16 (+3)|10 (+0)| 6 (-2)| 2 (-4)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** [Stealth](3.Mechanics/rules/skills.md#Stealth) +3
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 ft., passive Perception 8
- **Damage Resistances** acid, cold, fire, psychic
- **Condition Immunities** [blinded](3.Mechanics/rules/conditions.md#Blinded), [charmed](3.Mechanics/rules/conditions.md#Charmed), [deafened](3.Mechanics/rules/conditions.md#Deafened), [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [frightened](3.Mechanics/rules/conditions.md#Frightened), [grappled](3.Mechanics/rules/conditions.md#Grappled), [prone](3.Mechanics/rules/conditions.md#Prone), [restrained](3.Mechanics/rules/conditions.md#Restrained)
- **Languages** —
- **Challenge** 1

## Traits

***Amorphous.*** The ooze can move through a space as narrow as 1 inch without expending extra movement to do so.

## Actions

***Pseudopod.*** *Melee Attack Roll:* `dice:1d20+3|noform|noparens|text(+3)`, reach 5 ft. *Hit:* `dice:3d6+1|noform|noparens|avg|text(11)` (`3d6 + 1`) Acid damage, and the target has [Disadvantage](3.Mechanics/rules/variant-rules/disadvantage-xphb.md) on Intelligence saving throws until the end of the ooze's next turn.

***Psychic Crush.*** *Intelligence Saving Throw:* DC 10, one creature the ooze can see within 60 feet. *Failure:* `dice:3d8|noform|noparens|avg|text(13)` (`3d8`) Psychic damage.

## Reactions

***Mind Corrosion.*** Trigger: The ooze fails a saving throw against a spell or another magical effect created by a creature. _Response:_ The triggering creature takes `dice:1d6|noform|noparens|avg|text(3)` (`1d6`) Psychic damage.
```
^statblock

## Environment

underdark