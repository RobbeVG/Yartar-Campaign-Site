---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
title: "Hydra"
aliases:
- "Hydra"
conditionImmunities:
- [blinded](3.Mechanics/rules/conditions.md#Blinded)
- [charmed](3.Mechanics/rules/conditions.md#Charmed)
- [deafened](3.Mechanics/rules/conditions.md#Deafened)
- [frightened](3.Mechanics/rules/conditions.md#Frightened)
- [stunned](3.Mechanics/rules/conditions.md#Stunned)
- [unconscious](3.Mechanics/rules/conditions.md#Unconscious)
---
# Hydra
*Source: Monster Manual (2024) p. 175. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Hydra.webp#right)

## Hydra

*Multiheaded Serpent of Legend*

- **Habitat.** Coastal, Swamp  
- **Treasure.** Any  

Hydras are storied hero slayers with vicious, serpentine heads and infamous regenerative powers. Endlessly hungry, they devour any creatures they catch. Hydras that deplete an area of prey often go into a lengthy torpor until new prey arrives.

Most hydras have five heads, but some mature or battle-tested hydras have more. Such elder hydras might become local legends, known for their battles with heroes or for the riches lost in their domains.

While many hydras claim their own territories, wicked deities might use them to guard treasures or magical sites. Roll on or choose a result from the Hydra Lairs table to inspire why a hydra lurks where it does.

**Hydra Lairs**

`dice: [](hydra-xmm.md#^hydra-lairs)`

| dice: 1d4 | The Hydra Lurks Where It Does To... |
|-----------|-------------------------------------|
| 1 | Ensure none claim the weapon of a fallen hero. |
| 2 | Defend the home of a wise but sinister oracle. |
| 3 | Guard a magical herb that blooms once a year. |
| 4 | Protect a font of poison that pollutes a river. |
^hydra-lairs
```ad-statblock
title: Hydra
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Hydra.webp#token)
*Huge Monstrosity, Unaligned*

- **Armor Class** 15 
- **Hit Points** 184 (16d12 + 80) 
- **Speed** 40 ft., swim 40 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 20 | +5 | +5 |
|Int| 2 | -4 | -4 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 12 | +1 | +1 |
|Wis| 10 | +0 | +0 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 20 | +5 | +5 |
|Cha| 7 | -2 | -2 |


- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +6
- **Condition Immunities** [Blinded](3.Mechanics/rules/conditions.md#Blinded), [Charmed](3.Mechanics/rules/conditions.md#Charmed), [Deafened](3.Mechanics/rules/conditions.md#Deafened), [Frightened](3.Mechanics/rules/conditions.md#Frightened), [Stunned](3.Mechanics/rules/conditions.md#Stunned), [Unconscious](3.Mechanics/rules/conditions.md#Unconscious)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 16
- **Languages** —
- **Challenge** 8

## Traits

***Hold Breath.*** The hydra can hold its breath for 1 hour.

***Multiple Heads.*** The hydra has five heads. Whenever the hydra takes 25 damage or more on a single turn, one of its heads dies. The hydra dies if all its heads are dead. At the end of each of its turns when it has at least one living head, the hydra grows two heads for each of its heads that died since its last turn, unless it has taken Fire damage since its last turn. The hydra regains 20 [Hit Points](3.Mechanics/rules/variant-rules/hit-points-xphb.md) when it grows new heads.

***Reactive Heads.*** For each head the hydra has beyond one, it gets an extra [Reaction](3.Mechanics/rules/variant-rules/reaction-xphb.md) that can be used only for [Opportunity Attacks](3.Mechanics/rules/actions.md#Opportunity%20Attack).

## Actions

***Multiattack.*** The hydra makes as many Bite attacks as it has heads.

***Bite.*** *Melee Attack Roll:* `dice:1d20+8|noform|noparens|text(+8)`, reach 10 ft. *Hit:* `dice:1d10+5|noform|noparens|avg|text(10)` (`1d10 + 5`) Piercing damage.
```
^statblock

## Environment

coastal, swamp