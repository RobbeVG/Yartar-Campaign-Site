---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/construct
title: "Homunculus"
aliases:
- "Homunculus"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Homunculus
*Source: Monster Manual (2024) p. 172. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![Homunculi are as varied as the magic-users who create them](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Homunculus.webp#right)

## Homunculus

*Winged Servant Given Magical Life*

- **Habitat.** Any  
- **Treasure.** None  

A mage can create a cat-sized, obedient assistant called a homunculus through a ritual that uses the mage's blood. Each homunculus shares a telepathic bond with the mage who created it and loyally serves its creator. A homunculus is reduced to inert material if its creator dies.

A homunculus's appearance reflects its creator's tastes. Roll on or choose a result from the Homunculus Features table to inspire a homunculus's form.

**Homunculus Features**

`dice: [](homunculus-xmm.md#^homunculus-features)`

| dice: 1d8 | The Homunculus Has Features That Are... |
|-----------|-----------------------------------------|
| 1 | Bat-like with tattered wings. |
| 2 | Made of soft metal and delicate gears. |
| 3 | Marked with its creator's symbol. |
| 4 | Similar to those of a winged humanoid. |
| 5 | Sprouting flowers and leaves. |
| 6 | Suggestive of its creator's appearance. |
| 7 | Underdeveloped and fleshy with beady eyes. |
| 8 | Woven and patchwork, like a well-loved toy. |
^homunculus-features
```ad-statblock
title: Homunculus
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Homunculus.webp#token)
*Tiny Construct, Neutral*

- **Armor Class** 13 
- **Hit Points** 4 (1d4 + 2) 
- **Speed** 20 ft., fly 40 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 4 | -3 | -3 |
|Int| 10 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 15 | +2 | +2 |
|Wis| 10 | +0 | **+2** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 14 | +2 | +2 |
|Cha| 7 | -2 | **+0** |


- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +2, Charisma +0
- **Skills** ⏤
- **Damage Immunities** Poison
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 10
- **Languages** Understands Common plus one other language but can't speak
- **Challenge** 0

## Traits

***Telepathic Bond.*** While the homunculus is on the same plane of existence as its master, the two of them can communicate telepathically with each other.

## Actions

***Bite.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 5 ft. *Hit:* 1 Piercing damage, and the target is subjected to the following effect. *Constitution Saving Throw:* DC 12. *Failure:* The target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition until the end of the homunculus's next turn. *By 5Th Failure:* The target has the [Poisoned](3.Mechanics/rules/conditions.md#Poisoned) condition for 1 minute. While [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), the target has the [Unconscious](3.Mechanics/rules/conditions.md#Unconscious) condition, which ends early if the target takes any damage.
```
^statblock

## Environment

any