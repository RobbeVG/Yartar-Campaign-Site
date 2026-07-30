---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/air
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
title: "Air Elemental"
aliases:
- "Air Elemental"
conditionImmunities:
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [grappled](3.Mechanics/rules/conditions.md#Grappled)
- [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed)
- [petrified](3.Mechanics/rules/conditions.md#Petrified)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- [prone](3.Mechanics/rules/conditions.md#Prone)
- [restrained](3.Mechanics/rules/conditions.md#Restrained)
- [unconscious](3.Mechanics/rules/conditions.md#Unconscious)
---
# Air Elemental
*Source: Monster Manual (2024) p. 13. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Air%20Elemental.webp#right)

## Air Elemental

*Primal Spirit of Wind and Storm*

- **Habitat.** Desert, Mountain, Planar (Elemental Plane of Air)  
- **Treasure.** None  

Energetic spirits from the Elemental Plane of Air, air elementals gather clouds and winds into ever-changing bodies with indistinct limbs and vague features. Beyond their home plane, these elementals might serve magic-users who conjure them, or they might congregate around nexuses of unbridled planar energy, such as wind-scoured mountain peaks or endless storms. In battle, air elementals batter enemies with powerful gusts or transform into whirlwinds to fling away foes.

Air elementals often have distinctive compositions. Roll on or choose a result from the Air Elemental Compositions table to inspire the elemental's appearance.

> [!quote] A quote from Husam, Son of the Breezes, Ruler of Djinn  
> 
> What can withstand the storm's scream? The lightning's spear? The want of sweet breath? Air is the mightiest of elements—respect its power.

**Air Elemental Compositions**

`dice: [](air-elemental-xmm.md#^air-elemental-compositions)`

| dice: 1d6 | The Air Elemental's Body Features... |
|-----------|--------------------------------------|
| 1 | Cumulus or cirrus clouds. |
| 2 | A mixture of vibrantly colored gases. |
| 3 | A pungent, sour-looking miasma |
| 4 | Shifting cloud clusters that resemble animals and simple shapes. |
| 5 | Sinister features obscured in a misty mass. |
| 6 | Swirling storm clouds. |
^air-elemental-compositions
```ad-statblock
title: Air Elemental
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Air%20Elemental.webp#token)
*Large Elemental, Neutral*

- **Armor Class** 15 
- **Hit Points** 90 (12d10 + 24) 
- **Speed** 10 ft., fly 90 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 14 | +2 | +2 |
|Int| 6 | -2 | -2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 20 | +5 | +5 |
|Wis| 10 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 14 | +2 | +2 |
|Cha| 6 | -2 | -2 |


- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Resistances** Bludgeoning, Lightning, Piercing, Slashing
- **Damage Immunities** Poison, Thunder
- **Condition Immunities** [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Grappled](3.Mechanics/rules/conditions.md#Grappled), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Petrified](3.Mechanics/rules/conditions.md#Petrified), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), [Prone](3.Mechanics/rules/conditions.md#Prone), [Restrained](3.Mechanics/rules/conditions.md#Restrained), [Unconscious](3.Mechanics/rules/conditions.md#Unconscious)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 10
- **Languages** Primordial (Auran)
- **Challenge** 5

## Traits

***Air Form.*** The elemental can enter a creature's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so.

## Actions

***Multiattack.*** The elemental makes two Thunderous Slam attacks.

***Thunderous Slam.*** *Melee Attack Roll:* `dice:1d20+8|noform|noparens|text(+8)`, reach 10 ft. *Hit:* `dice:2d8+5|noform|noparens|avg|text(14)` (`2d8 + 5`) Thunder damage.

***Whirlwind (Recharge 4-6).*** *Strength Saving Throw:* DC 13, one Medium or smaller creature in the elemental's space. *Failure:* `dice:4d10+2|noform|noparens|avg|text(24)` (`4d10 + 2`) Thunder damage, and the target is pushed up to 20 feet straight away from the elemental and has the [Prone](3.Mechanics/rules/conditions.md#Prone) condition. *Success:* Half damage only.
```
^statblock

## Environment

desert, mountain, planar, air