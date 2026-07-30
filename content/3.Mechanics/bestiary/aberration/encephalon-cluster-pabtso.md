---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/pabtso
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
title: "Encephalon Cluster"
aliases:
- "Encephalon Cluster"
conditionImmunities:
- [blinded](3.Mechanics/rules/conditions.md#Blinded)
---
# Encephalon Cluster
*Source: Phandelver and Below: The Shattered Obelisk p. 205*  
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/PaBTSO/Encephalon%20Cluster.webp#right)

An encephalon cluster pays no heed to an elder brain or its mind flayer progenitors. This grotesque creature shambles through dark and forgotten caverns, spewing warped progeny so it can multiply. As such, many mind flayers view encephalon clusters as insidious viruses. If left unchecked, a single encephalon cluster can quickly become a gorging menace that can overrun an entire mind flayer colony.

## Encephalons

When an illithid colony lays its eggs dangerously close to a Far Realm rift, an egg sac has a chance to mutate into what is known as an encephalon cluster—a ravenous, slimy, psionic, brain-shaped mass that spawns horrors called encephalon gemmules.

```ad-statblock
title: Encephalon Cluster
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/PaBTSO/Encephalon%20Cluster.webp#token)
*Large Aberration, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** 110 (17d10 + 17) 
- **Speed** 20 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 23 | +6 | +6 |
|Int| 5 | -3 | -3 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 10 | +0 | +0 |
|Wis| 17 | +3 | +3 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 13 | +1 | +1 |
|Cha| 7 | -2 | -2 |


- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Resistances** Psychic
- **Condition Immunities** [Blinded](3.Mechanics/rules/conditions.md#Blinded)
- **Senses** [Blindsight](3.Mechanics/rules/senses.md#Blindsight) 60 Ft. (can't see beyond this radius), Passive Perception 13
- **Languages** —
- **Challenge** 10

## Traits

***Legendary Resistance (3/Day).*** If the cluster fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** The cluster has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The cluster makes two Slam attacks. It can replace one of these attacks with Spawn Progeny if available.

***Slam.*** *Melee Weapon Attack:* `dice:1d20+10|noform|noparens|text(+10)` to hit, reach 5 ft., one target. *Hit:* `dice:2d10+6|noform|noparens|avg|text(17)` (`2d10 + 6`) bludgeoning damage plus `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) psychic damage, and if the target is a creature, the target must succeed on a DC 18 Strength saving throw or have the [prone](3.Mechanics/rules/conditions.md#Prone) condition. If this attack reduces the target to 0 hit points, the target immediately dies and is consumed by the cluster.

***Spawn Progeny (Recharges after a Short or Long Rest).*** The cluster bulges and spews `dice:1d4|noform|noparens|avg` (`1d4`) mature eggs. Each egg lands in an unoccupied space of the cluster's choice within 30 feet of itself and immediately transforms into an [encephalon gemmule](3.Mechanics/bestiary/aberration/encephalon-gemmule-pabtso.md). The gemmules obey the cluster's commands and take their turns immediately after it.

## Reactions

***Aggressive Hunger.*** Immediately after being hit by an attack, the cluster moves up to its speed toward the attacker. This movement doesn't provoke opportunity attacks. If the cluster ends this movement within 5 feet of the attacker, it then makes one Slam attack against that attacker.
```
^statblock