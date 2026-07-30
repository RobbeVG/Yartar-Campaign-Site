---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
title: "Poltergeist"
aliases:
- "Poltergeist"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [grappled](3.Mechanics/rules/conditions.md#Grappled)
- [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed)
- [petrified](3.Mechanics/rules/conditions.md#Petrified)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- [prone](3.Mechanics/rules/conditions.md#Prone)
- [restrained](3.Mechanics/rules/conditions.md#Restrained)
- [unconscious](3.Mechanics/rules/conditions.md#Unconscious)
---
# Poltergeist
*Source: Monster Manual (2024) p. 246*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Poltergeist.webp#right)

## Poltergeist

*Malevolent or Mischievous Spirit*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Poltergeists are spirits that confuse and torment the living. While typically not visible, they sometimes appear as faded images of whoever they were in life. Some poltergeists don't realize they're dead and go through the motions of their past lives. Others are malicious beings or embodiments of fractured psyches that sow discord where they haunt.

Poltergeists telekinetically move objects in the places they lurk. Roll on or choose a result from the Poltergeist Activities table to inspire how a poltergeist menaces the living.

**Poltergeist Activities**

`dice: [](poltergeist-xmm.md#^poltergeist-activities)`

| dice: 1d8 | To Torment the Living, the Poltergeist... |
|-----------|-------------------------------------------|
| 1 | Keeps returning a discarded item. |
| 2 | Leaves footprints on vertical surfaces. |
| 3 | Makes noises like someone trapped in a wall. |
| 4 | Organizes a pack's contents across the floor. |
| 5 | Playfully puppets a corpse or doll. |
| 6 | Removes bedding while someone sleeps. |
| 7 | Sticks knives or weapons in the ceiling. |
| 8 | Uncannily stacks books, furniture, or utensils. |
^poltergeist-activities
```ad-statblock
title: Poltergeist
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Poltergeist.webp#token)
*Small or Medium Undead, Chaotic Neutral*

- **Armor Class** 12 
- **Hit Points** 22 (5d8) 
- **Speed** 5 ft., fly 50 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 1 | -5 | -5 |
|Int| 10 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | +2 |
|Wis| 10 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 11 | +0 | +0 |
|Cha| 14 | +2 | +2 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Resistances** Acid, Bludgeoning, Cold, Fire, Lightning, Piercing, Slashing, Thunder
- **Damage Immunities** Necrotic, Poison
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Grappled](3.Mechanics/rules/conditions.md#Grappled), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Petrified](3.Mechanics/rules/conditions.md#Petrified), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), [Prone](3.Mechanics/rules/conditions.md#Prone), [Restrained](3.Mechanics/rules/conditions.md#Restrained), [Unconscious](3.Mechanics/rules/conditions.md#Unconscious)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 10
- **Languages** Common plus one other language
- **Challenge** 2

## Traits

***Incorporeal Movement.*** The poltergeist can move through other creatures and objects as if they were [Difficult Terrain](3.Mechanics/rules/variant-rules/difficult-terrain-xphb.md). It takes `dice:1d10|noform|noparens|avg|text(5)` (`1d10`) Force damage if it ends its turn inside an object.

## Actions

***Multiattack.*** The poltergeist makes one Object Slam attack and uses Telekinetic Thrust.

***Object Slam.*** *Melee  or Ranged Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 5 ft. or range 30 ft. *Hit:* `dice:2d4+2|noform|noparens|avg|text(7)` (`2d4 + 2`) Bludgeoning damage.

***Telekinetic Thrust.*** *Strength Saving Throw:* DC 12, one creature the poltergeist can see within 30 feet. *Failure:* `dice:2d6+2|noform|noparens|avg|text(9)` (`2d6 + 2`) Force damage, and the target is pushed up to 30 feet straight away from the poltergeist.

## Bonus Actions

***Vanish.*** The poltergeist gives itself the [Invisible](3.Mechanics/rules/conditions.md#Invisible) condition or ends that condition on itself.
```
^statblock

## Environment

underdark, urban