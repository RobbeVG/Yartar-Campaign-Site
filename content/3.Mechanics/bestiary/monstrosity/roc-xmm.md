---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity
title: "Roc"
aliases:
- "Roc"
---
# Roc
*Source: Monster Manual (2024) p. 261. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Roc.webp#right)

## Roc

*Avian of Unbelievable Size*

- **Habitat.** Arctic, Coastal, Desert, Hill, Mountain  
- **Treasure.** Any  

Birds of prey of fantastic scale, rocs hunt over vast territories and can snatch whole elephants, whales, or wagons in their talons. They then carry their prey back to their remote nests, journeys that can take days and cover hundreds of miles.

Rocs nest amid remote heights. Their nests are typically littered with treasure and uneaten prey. Roll on or choose an option from the Roc Nest Remnants table to inspire what's in a roc's nest.

**Roc Nest Remnants**

`dice: [](roc-xmm.md#^roc-nest-remnants)`

| dice: 1d6 | The Roc's Nest Holds... |
|-----------|-------------------------|
| 1 | The burial litter of a lost hero. |
| 2 | A caravan wagon full of trade goods. |
| 3 | A live elephant. |
| 4 | `dice:1d4\|noform\|noparens\|avg` (`1d4`) eggs larger than adult humans. |
| 5 | Someone marooned in the nest. |
| 6 | A statue of a knight riding a rearing steed. |
^roc-nest-remnants
```ad-statblock
title: Roc
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Roc.webp#token)
*Gargantuan Monstrosity, Unaligned*

- **Armor Class** 15 
- **Hit Points** 248 (16d20 + 80) 
- **Speed** 20 ft., fly 120 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 28 | +9 | +9 |
|Int| 3 | -4 | -4 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 10 | +0 | **+4** |
|Wis| 10 | +0 | **+4** |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 20 | +5 | +5 |
|Cha| 9 | -1 | -1 |


- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +4, Wisdom +4
- **Skills** [Perception](3.Mechanics/rules/skills.md#Perception) +8
- **Senses** Passive Perception 18
- **Languages** —
- **Challenge** 11

## Actions

***Multiattack.*** The roc makes two Beak attacks. It can replace one attack with a Talons attack.

***Beak.*** *Melee Attack Roll:* `dice:1d20+13|noform|noparens|text(+13)`, reach 10 ft. *Hit:* `dice:3d12+9|noform|noparens|avg|text(28)` (`3d12 + 9`) Piercing damage.

***Talons.*** *Melee Attack Roll:* `dice:1d20+13|noform|noparens|text(+13)`, reach 5 ft. *Hit:* `dice:4d6+9|noform|noparens|avg|text(23)` (`4d6 + 9`) Slashing damage. If the target is a Huge or smaller creature, it has the [Grappled](3.Mechanics/rules/conditions.md#Grappled) condition (escape DC 19) from both talons, and it has the [Restrained](3.Mechanics/rules/conditions.md#Restrained) condition until the grapple ends.

## Bonus Actions

***Swoop (Recharge 5-6).*** If the roc has a creature [Grappled](3.Mechanics/rules/conditions.md#Grappled), the roc flies up to half its [Fly Speed](3.Mechanics/rules/variant-rules/fly-speed-xphb.md) without provoking [Opportunity Attacks](3.Mechanics/rules/actions.md#Opportunity%20Attack) and drops that creature.
```
^statblock

## Environment

arctic, coastal, desert, hill, mountain