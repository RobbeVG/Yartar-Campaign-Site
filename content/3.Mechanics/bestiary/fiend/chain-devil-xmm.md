---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
title: "Chain Devil"
aliases:
- "Chain Devil"
conditionImmunities:
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Chain Devil
*Source: Monster Manual (2024) p. 68. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Chain%20Devil.webp#right)

## Chain Devil

*Devil of Pain and Control*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** [Implements](3.Mechanics/tables/random-magic-items-implements.md)  

Also known as kytons, chain devils consider themselves morbid artisans who use deception, menace, and vicious metal to coerce prisoners into betraying themselves. Many serve powerful devils, wrenching secrets from imprisoned souls using deadly, animate chains. Left to their own devices, chain devils encourage ruthless individuals to pursue forbidden magic, leading their pupils down paths to the Nine Hells.

Along with psychological threats and physical harm, a chain devil uses its unnerving gaze to make its victims perceive their worst fear rather than the monster. Roll on or choose a result from the Chain Devil Masks table to inspire a chain devil's fearful appearance.

**Chain Devil Masks**

`dice: [](chain-devil-xmm.md#^chain-devil-masks)`

| dice: 1d4 | To a Viewer, the Chain Devil Looks Like... |
|-----------|--------------------------------------------|
| 1 | The corpse of a loved one. |
| 2 | A disapproving deity. |
| 3 | A harsh instructor or superior. |
| 4 | The viewer at their lowest point in life. |
^chain-devil-masks
```ad-statblock
title: Chain Devil
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Chain%20Devil.webp#token)
*Medium Fiend (devil), Lawful Evil*

- **Armor Class** 15 
- **Hit Points** 85 (10d8 + 40) 
- **Speed** 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 18 | +4 | +4 |
|Int| 11 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 15 | +2 | +2 |
|Wis| 12 | +1 | **+4** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 18 | +4 | **+7** |
|Cha| 14 | +2 | +2 |


- **Proficiency Bonus** +3
- **Saving Throws** Constitution +7, Wisdom +4
- **Skills** ⏤
- **Damage Resistances** Bludgeoning, Cold, Piercing, Slashing
- **Damage Immunities** Fire, Poison
- **Condition Immunities** [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 120 Ft. (unimpeded by magical [Darkness](3.Mechanics/rules/variant-rules/darkness-xphb.md)), Passive Perception 11
- **Languages** Infernal; Telepathy 120 ft.
- **Challenge** 8

## Traits

***Diabolical Restoration.*** If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) somewhere in the Nine Hells.

***Magic Resistance.*** The devil has [Advantage](3.Mechanics/rules/variant-rules/advantage-xphb.md) on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The devil makes two Chain attacks and uses Conjure Infernal Chain.

***Chain.*** *Melee Attack Roll:* `dice:1d20+7|noform|noparens|text(+7)`, reach 10 ft. *Hit:* `dice:2d6+4|noform|noparens|avg|text(11)` (`2d6 + 4`) Slashing damage. If the target is a Large or smaller creature, it has the [Grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 14) from one of two chains, and it has the [Restrained](3.Mechanics/rules/conditions.md#Restrained) condition until the grapple ends.

***Conjure Infernal Chain.*** The devil conjures a fiery chain to bind a creature. *Dexterity Saving Throw:* DC 15, one creature the devil can see within 60 feet. *Failure:* `dice:2d4+4|noform|noparens|avg|text(9)` (`2d4 + 4`) Fire damage, and the target has the [Restrained](3.Mechanics/rules/conditions.md#Restrained) condition until the end of the devil's next turn, at which point the chain disappears. If the target is Large or smaller, the devil moves the target up to 30 feet straight toward itself. *Success:* The chain disappears.

## Reactions

***Unnerving Gaze.*** Trigger: A creature the devil can see starts its turn within 30 feet of the devil and can see the devil. _Response—_*Wisdom Saving Throw:* DC 15, the triggering creature. *Failure:* The target has the [Frightened](3.Mechanics/rules/conditions.md#Frightened) condition until the end of its turn. *Success:* The target is immune to this devil's Unnerving Gaze for 24 hours.
```
^statblock

## Environment

planar, nine hells