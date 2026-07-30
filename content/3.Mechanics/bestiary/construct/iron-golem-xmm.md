---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
title: "Iron Golem"
aliases:
- "Iron Golem"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed)
- [petrified](3.Mechanics/rules/conditions.md#Petrified)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Iron Golem
*Source: Monster Manual (2024) p. 181. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Iron%20Golem.webp#right)

## Iron Golem

*Guardian of That Which Must Endure*

- **Habitat.** Any  
- **Treasure.** Any  

Their magical cores protected by mighty armor, iron golems defend important sites and objects. These golems are forged in bipedal forms, the details of which are decided by their creators. Many resemble armored guardians or legendary heroes. Iron golems confront their foes with a combination of overwhelming physical force and eruptions from their magical core. These magical blasts take the form of fiery bolts and poisonous emissions.

Iron golems preserve and protect their charges for generations. Roll on or choose a result from the Iron Golem Orders table to inspire what commands an iron golem follows.

**Iron Golem Orders**

`dice: [](iron-golem-xmm.md#^iron-golem-orders)`

| dice: 1d4 | The Iron Golem Follows Orders To... |
|-----------|-------------------------------------|
| 1 | Block a door that has never been opened, moving only when a prophecy is fulfilled. |
| 2 | Exhale poison gas whenever it can, pausing only when someone speaks a passphrase. |
| 3 | Pose as a statue until a community's hour of greatest need. |
| 4 | Stand atop the resting place of a powerful magic item. |
^iron-golem-orders
```ad-statblock
title: Iron Golem
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Iron%20Golem.webp#token)
*Large Construct, Unaligned*

- **Armor Class** 20 
- **Hit Points** 252 (24d10 + 120) 
- **Speed** 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 24 | +7 | +7 |
|Int| 3 | -4 | -4 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 9 | -1 | -1 |
|Wis| 11 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 20 | +5 | +5 |
|Cha| 1 | -5 | -5 |


- **Proficiency Bonus** +5
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Immunities** Fire, Poison, Psychic
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Petrified](3.Mechanics/rules/conditions.md#Petrified), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 10
- **Languages** Understands Common plus two other languages but can't speak
- **Challenge** 16

## Traits

***Fire Absorption.*** Whenever the golem is subjected to Fire damage, it regains a number of [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) equal to the Fire damage dealt.

***Immutable Form.*** The golem can't shape-shift.

***Magic Resistance.*** The golem has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The golem makes two attacks, using Bladed Arm or Fiery Bolt in any combination.

***Bladed Arm.*** *Melee Attack Roll:* `dice:1d20+12|noform|noparens|text(+12)`, reach 10 ft. *Hit:* `dice:3d8+7|noform|noparens|avg|text(20)` (`3d8 + 7`) Slashing damage plus `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Fire damage.

***Fiery Bolt.*** *Ranged Attack Roll:* `dice:1d20+10|noform|noparens|text(+10)`, range 120 ft. *Hit:* `dice:8d8|noform|noparens|avg|text(36)` (`8d8`) Fire damage.

***Poison Breath (Recharge 6).*** *Constitution Saving Throw:* DC 18, each creature in a 60-foot [Cone](3.Mechanics/rules/variant-rules/cone-area-of-effect-xphb.md). *Failure:* `dice:10d10|noform|noparens|avg|text(55)` (`10d10`) Poison damage. *Success:* Half damage.
```
^statblock

## Environment

any