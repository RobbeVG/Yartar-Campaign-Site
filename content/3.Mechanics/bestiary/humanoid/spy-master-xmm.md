---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/humanoid
title: "Spy Master"
aliases:
- "Spy Master"
---
# Spy Master
*Source: Monster Manual (2024) p. 295*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Spies.webp#right)

Spy masters have extensive experience in gathering secrets while leaving no evidence of their presence.

## Spies

*Infiltrators and Informants*

- **Habitat.** Any  
- **Treasure.** [Implements](3.Mechanics/tables/random-magic-items-implements.md), Individual  

Spies gather information and disseminate lies, manipulating people to gain the results the spies' patrons desire. They're trained to manipulate, infiltrate, and—when necessary—escape in a hurry. Many adopt disguises, aliases, or code names to maintain anonymity. Roll on or choose a result from the Spy Personas table to inspire a spy's disguise.

**Spy Personas**

`dice: [](spy-master-xmm.md#^spy-personas)`

| dice: 1d4 | The Spy Disguises Themself As... |
|-----------|----------------------------------|
| 1 | A bard or traveling performer. |
| 2 | A captive or servant of a monster or villain. |
| 3 | A dignitary or traveler from a distant land. |
| 4 | A visitor from a different time or world. |
^spy-personas

```ad-statblock
title: Spy Master
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Spy%20Master.webp#token)
*Small or Medium Humanoid, Neutral*

- **Armor Class** 19 
- **Hit Points** 137 (25d8 + 25) 
- **Speed** 30 ft., climb 30 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 10 | +0 | +0 |
|Int| 18 | +4 | **+8** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 20 | +5 | **+9** |
|Wis| 16 | +3 | **+7** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 12 | +1 | **+5** |
|Cha| 16 | +3 | +3 |


- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +9, Constitution +5, Intelligence +8, Wisdom +7
- **Skills** [Deception](3.Mechanics/rules/skills.md#Deception) +7, [Insight](3.Mechanics/rules/skills.md#Insight) +7, [Investigation](3.Mechanics/rules/skills.md#Investigation) +8, [Perception](3.Mechanics/rules/skills.md#Perception) +11, [Sleight of Hand](3.Mechanics/rules/skills.md#Sleight%20of%20Hand) +9, [Stealth](3.Mechanics/rules/skills.md#Stealth) +13
- **Gear** [hand crossbow](3.Mechanics/items/hand-crossbow-xphb.md), [rapier](3.Mechanics/items/rapier-xphb.md), [thieves' tools](3.Mechanics/items/thieves-tools-xphb.md)
- **Senses** Passive Perception 21
- **Languages** Common plus two other languages
- **Challenge** 10

## Actions

***Multiattack.*** The spy makes three attacks, using Rapier or Hand Crossbow in any combination.

***Rapier.*** *Melee Attack Roll:* `dice:1d20+9|noform|noparens|text(+9)`, reach 5 ft. *Hit:* `dice:2d8+5|noform|noparens|avg|text(14)` (`2d8 + 5`) Piercing damage plus `dice:2d6|noform|noparens|avg|text(7)` (`2d6`) Poison damage.

***Hand Crossbow.*** *Ranged Attack Roll:* `dice:1d20+9|noform|noparens|text(+9)`, range 30/120 ft. *Hit:* `dice:2d6+5|noform|noparens|avg|text(12)` (`2d6 + 5`) Piercing damage plus `dice:2d8|noform|noparens|avg|text(9)` (`2d8`) Poison damage.

***Smoke Bomb (1/Day).*** The spy throws a bomb to a point it can see within 30 feet of itself. *Constitution Saving Throw:* DC 16, each creature in a 20-foot-radius [Sphere](3.Mechanics/rules/variant-rules/sphere-area-of-effect-xphb.md) centered on that point. *Failure:* `dice:8d6|noform|noparens|avg|text(28)` (`8d6`) Poison damage, and the target has the [Blinded](3.Mechanics/rules/conditions.md#Blinded) condition until the end of the spy's next turn. *Success:* Half damage only.

## Bonus Actions

***Cunning Action.*** The spy takes the [Dash](3.Mechanics/rules/actions.md#Dash), [Disengage](3.Mechanics/rules/actions.md#Disengage), or [Hide](3.Mechanics/rules/actions.md#Hide) action.
```
^statblock

## Environment

any