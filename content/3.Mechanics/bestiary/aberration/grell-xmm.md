---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
title: "Grell"
aliases:
- "Grell"
conditionImmunities:
- [blinded](3.Mechanics/rules/conditions.md#Blinded)
- [prone](3.Mechanics/rules/conditions.md#Prone)
---
# Grell
*Source: Monster Manual (2024) p. 157*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Grell.webp#right)

## Grell

*Bizarre Hunter That Travels between Worlds*

- **Habitat.** Underdark  
- **Treasure.** None  

With barbed tentacles sprouting from their brain-shaped bodies, grells hunt the lightless depths. These silent predators defy gravity, allowing them to strike from unexpected places, and they perceive their surroundings via sound and electrical fields. Their tentacles secrete paralytic venom, which prevents most creatures ambushed by grells from crying out before being dragged into the dark and consumed.

Grells are sapient beings, but their intellects and motivations are alien to most. They typically cooperate with one another only to defeat more powerful prey. Most demonstrate no interest in creating things or in communicating with other creatures, including their own kind.

Many grells pursue methods of traveling between worlds and planes of existence. They sometimes slip onto star-faring vessels or enter portals heedless of their destination. Roll on or choose a result from the Grell Explorations table to inspire why grells seek passage between realms.

**Grell Explorations**

`dice: [](grell-xmm.md#^grell-explorations)`

| dice: 1d6 | Grells Travel Because They Are... |
|-----------|-----------------------------------|
| 1 | Advanced viruses, each the clone of all other grell. They exist only to feed and spread. |
| 2 | The larvae of another creature and require electrically charged environs to reproduce. |
| 3 | Seeking to escape some catastrophe or terror lurking in the depths. |
| 4 | Supernaturally connected to ravenous alien beings and serve as their feeding appendages. |
| 5 | Vestiges of an ancient evil that will return if grells collectively consume enough creatures. |
| 6 | Without souls, but convinced they can attain souls by eating certain beings. |
^grell-explorations

> [!quote] A quote from Evard  
> 
> For meal, my hunger grinds within my teeth. For might, my hunger clenches in my grip. But for what we're told we mustn't know, my hunger snaps a raptor's beak and makes my mind a muscle that knows only how to chew.

```ad-statblock
title: Grell
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Grell.webp#token)
*Medium Aberration, Neutral Evil*

- **Armor Class** 12 
- **Hit Points** 55 (10d8 + 10) 
- **Speed** 10 ft., fly 30 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 15 | +2 | +2 |
|Int| 12 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | +2 |
|Wis| 11 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 13 | +1 | +1 |
|Cha| 9 | -1 | -1 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +4, [Stealth](3.Mechanics/rules/skills.md#Stealth) +6
- **Damage Immunities** Lightning
- **Condition Immunities** [Blinded](3.Mechanics/rules/conditions.md#Blinded), [Prone](3.Mechanics/rules/conditions.md#Prone)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 Ft., Passive Perception 14
- **Languages** Deep Speech
- **Challenge** 3

## Traits

***Abduct.*** The grell needn't spend extra movement to move a creature it is grappling.

## Actions

***Multiattack.*** The grell makes one Beak attack and one Paralyzing Tentacles attack.

***Beak.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 5 ft. *Hit:* `dice:2d8+2|noform|noparens|avg|text(11)` (`2d8 + 2`) Piercing damage.

***Paralyzing Tentacles.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 10 ft. *Hit:* `dice:1d10+2|noform|noparens|avg|text(7)` (`1d10 + 2`) Piercing damage. If the target is a Medium or smaller creature, it has the [Grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 12) from two of ten tentacles. The target is also subjected to the following effect. *Constitution Saving Throw:* DC 11. *Failure:* The target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. While [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), the target has the [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed) condition.
```
^statblock

## Environment

underdark