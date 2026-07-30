---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
title: "Specter"
aliases:
- "Specter"
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
# Specter
*Source: Monster Manual (2024) p. 290. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Specter.webp#right)

## Specter

*Spirit of Wrath and Servant of Death*

- **Habitat.** Underdark, Urban  
- **Treasure.** None  

Specters are bodiless, life-devouring spirits drawn to darkness and negative emotions. Having lost all connection to the beings they once were, these hateful spirits drain mortal essence to steal fleeting tastes of life and warmth.

Specters seek creatures and locations that exude evil and feed on the suffering they inspire. Roll on or choose a result from the Specter Haunts table to inspire where a specter lurks.

**Specter Haunts**

`dice: [](specter-xmm.md#^specter-haunts)`

| dice: 1d8 | The Specter Lurks Near... |
|-----------|---------------------------|
| 1 | A community afflicted by curses, grudges, plagues, or tragedies. |
| 2 | An evil Artifact or a deadly magical device. |
| 3 | The lair of a Fiend or an Undead. |
| 4 | The place where a villain died or is buried. |
| 5 | A portal to the Lower Planes, Negative Plane, or Shadowfell. |
| 6 | The sanctuary of a necromancer or death cult. |
| 7 | A secluded monument binding wicked souls. |
| 8 | The site of a disaster or mass death. |
^specter-haunts
```ad-statblock
title: Specter
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Specter.webp#token)
*Medium Undead, Chaotic Evil*

- **Armor Class** 12 
- **Hit Points** 22 (5d8) 
- **Speed** 30 ft., fly 50 ft. (hover)

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
|Cha| 11 | +0 | +0 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Resistances** Acid, Bludgeoning, Cold, Fire, Lightning, Piercing, Slashing, Thunder
- **Damage Immunities** Necrotic, Poison
- **Condition Immunities** [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Grappled](3.Mechanics/rules/conditions.md#Grappled), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Petrified](3.Mechanics/rules/conditions.md#Petrified), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), [Prone](3.Mechanics/rules/conditions.md#Prone), [Restrained](3.Mechanics/rules/conditions.md#Restrained), [Unconscious](3.Mechanics/rules/conditions.md#Unconscious)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 10
- **Languages** Understands Common plus one other language but can't speak
- **Challenge** 1

## Traits

***Incorporeal Movement.*** The specter can move through other creatures and objects as if they were [Difficult Terrain](3.Mechanics/rules/variant-rules/difficult-terrain-xphb.md). It takes `dice:1d10|noform|noparens|avg|text(5)` (`1d10`) Force damage if it ends its turn inside an object.

***Sunlight Sensitivity.*** While in sunlight, the specter has [Disadvantage](3.Mechanics/rules/variant-rules/disadvantage-xphb.md) on ability checks and attack rolls.

## Actions

***Life Drain.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 5 ft. *Hit:* `dice:2d6|noform|noparens|avg|text(7)` (`2d6`) Necrotic damage. If the target is a creature, its [Hit Point](3.Mechanics/rules/variant-rules/hit-points-xphb.md) maximum decreases by an amount equal to the damage taken.
```
^statblock

## Environment

underdark, urban