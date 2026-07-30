---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
title: "Remorhaz"
aliases:
- "Remorhaz"
---
# Remorhaz
*Source: Monster Manual (2024) p. 258. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Remorhazes.webp#right)

Full-grown remorhazes are single-minded ambush predators. They attempt to bite prey and trap it against their searing bodies, then swallow their meal whole. Remorhazes eat as much as they can, since they might go months without feeding.

## Remorhazes

*Super-Heated Arctic Arthropods*

- **Habitat.** Arctic  
- **Treasure.** None  

Remorhazes are centipede-like terrors that burrow through snow and ice to ambush smaller creatures that trespass in their frozen territories.

## Statblock

```ad-statblock
title: Remorhaz
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Remorhaz.webp#token)
*Huge monstrosity, Unaligned*

- **Armor Class** 17 
- **Hit Points** 195 (`17d12 + 85`) 
- **Speed** 40 ft., burrow 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)|13 (+1)|21 (+5)| 4 (-3)|10 (+0)| 5 (-3)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 ft., Tremorsense 60 ft., passive Perception 10
- **Damage Immunities** cold, fire
- **Languages** —
- **Challenge** 11

## Traits

***Heat Aura.*** At the end of each of the remorhaz's turns, each creature in a 5-foot [Emanation](3.Mechanics/rules/variant-rules/emanation-area-of-effect-xphb.md) originating from the remorhaz takes `dice:3d10|noform|noparens|avg|text(16)` (`3d10`) Fire damage.

## Actions

***Bite.*** *Melee Attack Roll:* `dice:1d20+11|noform|noparens|text(+11)`, reach 10 ft. *Hit:* `dice:2d10+7|noform|noparens|avg|text(18)` (`2d10 + 7`) Piercing damage plus `dice:4d6|noform|noparens|avg|text(14)` (`4d6`) Fire damage. If the target is a Large or smaller creature, it has the [Grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 17), and it has the [Restrained](3.Mechanics/rules/conditions.md#Restrained) condition until the grapple ends.

## Bonus Actions

***Swallow.*** *Strength Saving Throw:* DC 19, one Large or smaller creature [Grappled](3.Mechanics/rules/conditions.md#Grappled) by the remorhaz (it can have up to two creatures swallowed at a time). *Failure:* The target is swallowed by the remorhaz, and the [Grappled](3.Mechanics/rules/conditions.md#Grappled) condition ends. A swallowed creature has the [Blinded](3.Mechanics/rules/conditions.md#Blinded) and [Restrained](3.Mechanics/rules/conditions.md#Restrained) conditions, it has [Total Cover](3.Mechanics/rules/variant-rules/cover-xphb.md) against attacks and other effects outside the remorhaz, and it takes `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Acid damage plus `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) Fire damage at the start of each of the remorhaz's turns.

If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 5 feet of the remorhaz and has the [Prone](3.Mechanics/rules/conditions.md#Prone) condition. If the remorhaz dies, any swallowed creature no longer has the [Restrained](3.Mechanics/rules/conditions.md#Restrained) condition and can escape from the corpse by using 15 feet of movement, exiting [Prone](3.Mechanics/rules/conditions.md#Prone).
```
^statblock

## Environment

arctic