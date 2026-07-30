---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
title: "Banshee"
aliases:
- "Banshee"
conditionImmunities:
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [grappled](3.Mechanics/rules/conditions.md#Grappled)
- [paralyzed](3.Mechanics/rules/conditions.md#Paralyzed)
- [petrified](3.Mechanics/rules/conditions.md#Petrified)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- [prone](3.Mechanics/rules/conditions.md#Prone)
- [restrained](3.Mechanics/rules/conditions.md#Restrained)
---
# Banshee
*Source: Monster Manual (2024) p. 29*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Banshee.webp#right)

## Banshee

*Wailing Harbinger of Death*

- **Habitat.** Any  
- **Treasure.** [Relics](3.Mechanics/tables/random-magic-items-relics.md)  

Heralds of doom and plagues on the living, banshees are spirits obsessed by unresolved bitterness or sorrow. These storied phantoms slay any who glimpse them or hear their baleful wails. Although any tormented soul can arise as a banshee, some elven communities particularly fear them and believe that those who hoard or destroy beauty—natural or otherwise—risk returning as a banshee.

All manner of torments might give rise to a banshee. Roll on or choose a result from the Banshee Sorrows table to inspire how a banshee's torment influences its behavior.

**Banshee Sorrows**

`dice: [](banshee-xmm.md#^banshee-sorrows)`

| dice: 1d6 | Torment Compels the Banshee To... |
|-----------|-----------------------------------|
| 1 | Appear prior to a family member's death. |
| 2 | Haunt the site where it was executed. |
| 3 | Lament a lost love and haunt their grave. |
| 4 | Presage a disaster or tragedy. |
| 5 | Seek the return of a stolen treasure. |
| 6 | Slay those more beautiful than it was in life. |
^banshee-sorrows
```ad-statblock
title: Banshee
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Banshee.webp#token)
*Medium Undead, Chaotic Evil*

- **Armor Class** 12 
- **Hit Points** 54 (12d8) 
- **Speed** 5 ft., fly 40 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 1 | -5 | -5 |
|Int| 12 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 14 | +2 | +2 |
|Wis| 11 | +0 | **+2** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 10 | +0 | +0 |
|Cha| 17 | +3 | +3 |


- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +2
- **Skills** ⏤
- **Damage Resistances** Acid, Bludgeoning, Fire, Lightning, Piercing, Slashing, Thunder
- **Damage Immunities** Cold, Necrotic, Poison
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Grappled](3.Mechanics/rules/conditions.md#Grappled), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Petrified](3.Mechanics/rules/conditions.md#Petrified), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), [Prone](3.Mechanics/rules/conditions.md#Prone), [Restrained](3.Mechanics/rules/conditions.md#Restrained)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 10
- **Languages** Common, Elvish
- **Challenge** 4

## Traits

***Detect Life.*** The banshee magically senses the direction of creatures up to 1 mile away that aren't Constructs or Undead.

***Incorporeal Movement.*** The banshee can move through other creatures and objects as if they were [Difficult Terrain](3.Mechanics/rules/variant-rules/difficult-terrain-xphb.md). It takes `dice:1d10|noform|noparens|avg|text(5)` (`1d10`) Force damage if it ends its turn inside an object.

## Actions

***Multiattack.*** The banshee makes two Corrupting Touch attacks and uses Horrify.

***Corrupting Touch.*** *Melee Attack Roll:* `dice:1d20+5|noform|noparens|text(+5)`, reach 5 ft. *Hit:* `dice:1d8+3|noform|noparens|avg|text(7)` (`1d8 + 3`) Necrotic damage.

***Horrify.*** *Wisdom Saving Throw:* DC 13, one creature the banshee can see within 60 feet that can see the banshee. *Failure:* The target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the start of the banshee's next turn. *Success:* The target is immune to this banshee's Horrify for 24 hours.

***Deathly Wail (1/Day).*** The banshee releases a mournful wail if it isn't in sunlight. *Constitution Saving Throw:* DC 13, each creature within 30 feet that can hear the wail and isn't a Construct or an Undead. *Failure:* If the target has 25 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) or fewer, it drops to 0 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md). Otherwise, the target takes `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Psychic damage.
```
^statblock

## Environment

any