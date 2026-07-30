---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
title: "Ochre Jelly"
aliases:
- "Ochre Jelly"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [deafened](3.Mechanics/rules/conditions.md#Deafened)
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [grappled](3.Mechanics/rules/conditions.md#Grappled)
- [prone](3.Mechanics/rules/conditions.md#Prone)
- [restrained](3.Mechanics/rules/conditions.md#Restrained)
---
# Ochre Jelly
*Source: Monster Manual (2024) p. 230. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Ochre%20Jelly.webp#right)

## Ochre Jelly

*Multiplying Amoeboid Hunter*

- **Habitat.** Underdark  
- **Treasure.** None  

Ochre jellies are giant, yellow-brown amoebas that digest organic creatures. They tirelessly hunt any prey smaller than themselves, oozing over, under, and around obstacles in their path. Once they overwhelm their quarry, these acidic slimes dissolve the flesh, hair, and scales of their prey, leaving behind clothing, equipment, treated leather, and bone.

If damaged by lightning or a slashing weapon, an ochre jelly splits in two. These smaller jellies work together to consume foes, but afterward they move on to hunt independently. Both eventually grow into full-size jellies.

What ochre jellies can't dissolve they leave behind. Roll on or choose a result from the Ochre Jelly Leftovers table to inspire such remains.

**Ochre Jelly Leftovers**

`dice: [](ochre-jelly-xmm.md#^ochre-jelly-leftovers)`

| dice: 1d6 | After a Meal, the Ochre Jelly Leaves Behind... |
|-----------|------------------------------------------------|
| 1 | A bone etched with a word or an eerie symbol. |
| 2 | Broken dragonborn or tiefling horns. |
| 3 | An ornate prosthetic limb. |
| 4 | The skeleton of an explorer's pet (perhaps a small dog, monkey, or parrot). |
| 5 | A skull with gold teeth worth `dice:1d4\|noform\|noparens\|avg` (`1d4`) GP. |
| 6 | A spotless suit of metal armor. |
^ochre-jelly-leftovers
```ad-statblock
title: Ochre Jelly
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Ochre%20Jelly.webp#token)
*Large Ooze, Unaligned*

- **Armor Class** 8 
- **Hit Points** 52 (7d10 + 14) 
- **Speed** 20 ft., climb 20 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 15 | +2 | +2 |
|Int| 2 | -4 | -4 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 6 | -2 | -2 |
|Wis| 6 | -2 | -2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 14 | +2 | +2 |
|Cha| 1 | -5 | -5 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Resistances** Acid
- **Damage Immunities** Lightning, Slashing
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Deafened](3.Mechanics/rules/conditions.md#Deafened), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Grappled](3.Mechanics/rules/conditions.md#Grappled), [Prone](3.Mechanics/rules/conditions.md#Prone), [Restrained](3.Mechanics/rules/conditions.md#Restrained)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 Ft., Passive Perception 8
- **Languages** —
- **Challenge** 2

## Traits

***Amorphous.*** The jelly can move through a space as narrow as 1 inch without expending extra movement to do so.

***Spider Climb.*** The jelly can climb difficult surfaces, including along ceilings, without needing to make an ability check.

## Actions

***Pseudopod.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 5 ft. *Hit:* `dice:3d6+2|noform|noparens|avg|text(12)` (`3d6 + 2`) Acid damage.

## Reactions

***Split.*** Trigger: While the jelly is Large or Medium and has 10+ [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md), it becomes [Bloodied](3.Mechanics/rules/conditions.md#Bloodied) or is subjected to Lightning or Slashing damage. _Response:_ The jelly splits into two new Ochre Jellies. Each new jelly is one size smaller than the original jelly and acts on its [Initiative](3.Mechanics/rules/variant-rules/initiative-xphb.md). The original jelly's [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) are divided evenly between the new jellies (round down).
```
^statblock

## Environment

underdark