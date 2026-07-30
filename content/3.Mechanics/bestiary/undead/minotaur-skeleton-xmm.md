---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
title: "Minotaur Skeleton"
aliases:
- "Minotaur Skeleton"
conditionImmunities:
- [exhaustion](3.Mechanics/rules/conditions.md#Exhaustion)
- [poisoned](3.Mechanics/rules/conditions.md#Poisoned)
---
# Minotaur Skeleton
*Source: Monster Manual (2024) p. 283. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  
![Adventurers face an onslaught from all manner of skeletons](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/XMM/Skeletons.webp#right)

Minotaur skeletons are the reanimated remains of minotaurs or the skeletons of multiple creatures merged into a minotaur-like shape. These hulking skeletons have greater speed and might than smaller skeletons. They menace the living with their horns and mighty greataxes.

## Skeletons

*Ossified Evil*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Skeletons rise at the summons of necromancers and foul spirits. Whether they're the remains of the ancient dead or fresh bones bound to morbid ambitions, they commit deathless work for whatever forces reanimated them, often serving as guardians, soldiers, or laborers. In rare cases, skeletons are reanimated but given no particular direction. Roll on or choose a result from the Skeleton Pantomimes table to inspire how undirected skeletons behave.

**Skeleton Pantomimes**

`dice: [](minotaur-skeleton-xmm.md#^skeleton-pantomimes)`

| dice: 1d6 | Left to Its Own Devices, the Skeleton... |
|-----------|------------------------------------------|
| 1 | Delivers meal salvers or ages-old correspondence to the crypt of its dead master. |
| 2 | Endlessly trains in battle with other skeletons, despite being hacked to animate splinters. |
| 3 | Mimics ways it entertained itself in life, such as acting, dancing, or reading. |
| 4 | Performs a familiar task, such as cleaning, cooking, mining, or praying. |
| 5 | Repeats its final moments of life. |
| 6 | Stands guard at the post it protected in life. |
^skeleton-pantomimes

```ad-statblock
title: Minotaur Skeleton
![](https://raw.githubusercontent.com/5etools-mirror-3/5etools-img/main/bestiary/tokens/XMM/Minotaur%20Skeleton.webp#token)
*Large Undead, Lawful Evil*

- **Armor Class** 12 
- **Hit Points** 45 (6d10 + 12) 
- **Speed** 40 ft.

|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Str| 18 | +4 | +4 |
|Int| 6 | -2 | -2 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Dex| 11 | +0 | +0 |
|Wis| 8 | -1 | -1 |
|   |   |  MOD | SAVE |
|:--|:-:|:----:|:----:|
|Con| 15 | +2 | +2 |
|Cha| 5 | -3 | -3 |


- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Damage Vulnerabilities** Bludgeoning
- **Damage Immunities** Poison
- **Condition Immunities** [Exhaustion](3.Mechanics/rules/conditions.md#Exhaustion), [Poisoned](3.Mechanics/rules/conditions.md#Poisoned)
- **Senses** [Darkvision](3.Mechanics/rules/senses.md#Darkvision) 60 Ft., Passive Perception 9
- **Languages** Understands Abyssal but can't speak
- **Challenge** 2

## Actions

***Gore.*** *Melee Attack Roll:* `dice:1d20+6|noform|noparens|text(+6)`, reach 5 ft. *Hit:* `dice:2d6+4|noform|noparens|avg|text(11)` (`2d6 + 4`) Piercing damage. If the target is a Large or smaller creature and the skeleton moved 20+ feet straight toward it immediately before the hit, the target takes an extra `dice:2d8|noform|noparens|avg|text(9)` (`2d8`) Piercing damage and has the [Prone](3.Mechanics/rules/conditions.md#Prone) condition.

***Slam.*** *Melee Attack Roll:* `dice:1d20+6|noform|noparens|text(+6)`, reach 5 ft. *Hit:* `dice:2d10+4|noform|noparens|avg|text(15)` (`2d10 + 4`) Bludgeoning damage.
```
^statblock

## Environment

planar, shadowfell, underdark, urban