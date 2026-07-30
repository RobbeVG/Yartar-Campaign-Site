---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
title: "Will-o'-Wisp"
aliases:
- "Will-o'-Wisp"
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
# Will-o'-Wisp
*Source: Monster Manual (2024) p. 333. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Will-o-Wisp.webp#right)

## Will-o'-Wisp

*Guide on the Path to Doom*

- **Habitat.** Forest, Swamp, Urban  
- **Treasure.** None  

From a distance, will-o'-wisps look like lanterns bobbing in the dark. Through the windows of abandoned structures or around the bends of treacherous paths, these spirits tempt the curious into peril. Once their prey is vulnerable, will-o'-wisps feed on the life force of those they lay low.

Roll on or choose a result from the Will-o'-Wisp Ambushes table to inspire how a will-o'-wisp imperils its victims.

**Will-o'-Wisp Ambushes**

`dice: [](will-o-wisp-xmm.md#^will-o-wisp-ambushes)`

| dice: 1d6 | The Will-o'-Wisp Tempts Victims Into... |
|-----------|-----------------------------------------|
| 1 | An abandoned structure ready to collapse. |
| 2 | An ambush by hungry ghouls or vampires. |
| 3 | A dreaded ruin that curses those who enter. |
| 4 | The lair of a predator, like a bear or wyvern. |
| 5 | Patches of brown mold or green slime. |
| 6 | Quicksand or pools covered in thin ice. |
^will-o-wisp-ambushes
```ad-statblock
title: Will-o'-Wisp
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Will-o%27-Wisp.webp#token)
*Tiny Undead, Chaotic Evil*

- **Armor Class** 19 
- **Hit Points** 27 (11d4) 
- **Speed** 5 ft., fly 50 ft. (hover)

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 1 | -5 | -5 |
|Int| 13 | +1 | +1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 28 | +9 | +9 |
|Wis| 14 | +2 | +2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 10 | +0 | +0 |
|Cha| 11 | +0 | +0 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Resistances** Acid, Bludgeoning, Cold, Fire, Necrotic, Piercing, Slashing
- **Damage Immunities** Lightning, Poison
- **Condition Immunities** [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Grappled](3.Mechanics/rules/conditions.md#Grappled), [Paralyzed](3.Mechanics/rules/conditions.md#Paralyzed), [Petrified](3.Mechanics/rules/conditions.md#Petrified), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned), [Prone](3.Mechanics/rules/conditions.md#Prone), [Restrained](3.Mechanics/rules/conditions.md#Restrained), [Unconscious](3.Mechanics/rules/conditions.md#Unconscious)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft., Passive Perception 12
- **Languages** Common plus one other language
- **Challenge** 2

## Traits

***Ephemeral.*** The wisp can't wear or carry anything.

***Illumination.*** The wisp sheds [Bright Light](3.Mechanics/rules/variant-rules/bright-light-xphb.md) in a 20-foot radius and [Dim Light](3.Mechanics/rules/variant-rules/dim-light-xphb.md) for an additional 20 feet.

***Incorporeal Movement.*** The wisp can move through other creatures and objects as if they were [Difficult Terrain](3.Mechanics/rules/variant-rules/difficult-terrain-xphb.md). It takes `dice:1d10|noform|noparens|avg|text(5)` (`1d10`) Force damage if it ends its turn inside an object.

## Actions

***Shock.*** *Melee Attack Roll:* `dice:1d20+4|noform|noparens|text(+4)`, reach 5 ft. *Hit:* `dice:2d8+2|noform|noparens|avg|text(11)` (`2d8 + 2`) Lightning damage.

## Bonus Actions

***Consume Life.*** *Constitution Saving Throw:* DC 10, one living creature the wisp can see within 5 feet that has 0 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md). *Failure:* The target dies, and the wisp regains `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md).

***Vanish.*** The wisp and its light have the [Invisible](3.Mechanics/rules/conditions.md#Invisible) condition until the wisp's [Concentration](3.Mechanics/rules/conditions.md#Concentration) ends on this effect, which ends early immediately after the wisp makes an attack roll or uses Consume Life.
```
^statblock

## Environment

forest, swamp, urban